import { it, expect } from 'vitest';
import { RateLimiter } from '../src/limiter';

it('allows up to configured limit within the window', () => {
  const limiter = new RateLimiter({ limit: 3, windowMs: 1000 });
  expect(limiter.isAllowed('client1')).toBe(true);
  expect(limiter.isAllowed('client1')).toBe(true);
  expect(limiter.isAllowed('client1')).toBe(true);
  expect(limiter.isAllowed('client1')).toBe(false);
});

it('resets counts after the window elapses', async () => {
  const limiter = new RateLimiter({ limit: 1, windowMs: 100 });
  expect(limiter.isAllowed('client2')).toBe(true);
  expect(limiter.isAllowed('client2')).toBe(false);
  await new Promise((r) => setTimeout(r, 150));
  expect(limiter.isAllowed('client2')).toBe(true);
});
