import { debounce } from './utils/debounce';

type CacheEntry<T> = {
  data: T;
  expiration: number;
};

type CacheKey = (string | number)[] | string | number;

const DAY_MS = 1000 * 60 * 60 * 24;

/*
  Alternative solutions:
  - useQuery solution paired with global state
  - ServiceWorker level (custom cacheKey header)
  - axios interception level (custom cacheKey header)
*/
export class QueryCacheProvider<T> {
  private cache: Map<string, CacheEntry<T>> = new Map();

  constructor(
    private readonly cacheName: string,
    private readonly ttl: number = DAY_MS,
  ) {
    const storageData = localStorage.getItem(this.cacheName);
    if (storageData) {
      this.cache = new Map(JSON.parse(storageData));
    }
  }

  private persist = debounce(() => {
    setTimeout(() => localStorage.setItem(this.cacheName, JSON.stringify(Array.from(this.cache.entries()))), 0);
  }, 100);

  private hash(key: CacheKey): string {
    if (Array.isArray(key)) {
      return key.join(',');
    } else {
      return String(key);
    }
  }

  process = async (key, cb: () => Promise<T>) => {
    const hash = this.hash(key);
    const cachedData = this.cache.get(hash);

    if (cachedData && cachedData.expiration > Date.now()) {
      return cachedData.data;
    }

    const response = await cb();
    this.cache.set(hash, {
      data: response,
      expiration: Date.now() + this.ttl,
    });
    this.persist();
    return response;
  };
}
