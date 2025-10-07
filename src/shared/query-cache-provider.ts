import { debounce } from './utils/debounce';

type CacheEntry<T> = {
  data: T;
  expiration: number;
};

/*
  Alternative solutions:
  - useQuery solution paired with global state
  - ServiceWorker level (custom cacheKey header)
  - axios interception level (custom cacheKey header)
*/
export class QueryCacheProvider<T> {
  cache: Map<string, CacheEntry<T>> = new Map();

  constructor(private readonly cacheName: string) {
    const storageData = localStorage.getItem(this.cacheName);
    if (storageData) {
      this.cache = new Map(JSON.parse(storageData));
    }
  }

  persist = debounce(() => {
    setTimeout(() => localStorage.setItem(this.cacheName, JSON.stringify(Array.from(this.cache.entries()))), 0);
  }, 100);

  hash(key: (string | number)[]) {
    return key.join(',');
  }

  process = async (key, ttl, cb: () => Promise<T>) => {
    const hash = this.hash(key);
    const cachedData = this.cache.get(hash);

    if (cachedData && cachedData.expiration > Date.now()) {
      return cachedData.data;
    }

    const response = await cb();
    this.cache.set(hash, {
      data: response,
      expiration: Date.now() + ttl,
    });
    this.persist();
    return response;
  };
}
