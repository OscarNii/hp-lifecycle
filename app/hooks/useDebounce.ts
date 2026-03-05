import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useLocalCache<T>(key: string) {
  const getCache = (): Record<string, T> => {
    if (typeof window === 'undefined') return {};
    try {
      const cached = localStorage.getItem(key);
      return cached ? JSON.parse(cached) : {};
    } catch {
      return {};
    }
  };

  const setCache = (cacheKey: string, value: T) => {
    if (typeof window === 'undefined') return;
    try {
      const cache = getCache();
      cache[cacheKey] = value;
      localStorage.setItem(key, JSON.stringify(cache));
    } catch {
      // Ignore storage errors
    }
  };

  const getFromCache = (cacheKey: string): T | undefined => {
    const cache = getCache();
    return cache[cacheKey];
  };

  const clearCache = () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
  };

  return { getCache, setCache, getFromCache, clearCache };
}
