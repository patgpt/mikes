type RateLimit = {
  count: number;
  timestamp: number;
}

const store = new Map<string, RateLimit>();
const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours
const MAX_ATTEMPTS = 5;

export async function rateLimit(identifier: string) {
  const now = Date.now();
  const key = `${identifier}:${new Date().toISOString().split('T')[0]}`;
  const current = store.get(key);

  if (!current || (now - current.timestamp) > WINDOW_MS) {
    store.set(key, { count: 1, timestamp: now });
    return { isLimited: false, remaining: MAX_ATTEMPTS - 1 };
  }

  const newCount = current.count + 1;
  store.set(key, { count: newCount, timestamp: current.timestamp });

  return {
    isLimited: newCount > MAX_ATTEMPTS,
    remaining: Math.max(MAX_ATTEMPTS - newCount, 0),
  };
}