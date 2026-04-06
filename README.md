# Request Throttler

[![bun package](https://img.shields.io/badge/Bun-Supported-blue)](https://bun.sh/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A simple, experimental request throttler (rate limiter) built in TypeScript.  
> Made for learning and testing basic throttling logic.

## About

This project is a basic TypeScript implementation of a request throttler (rate limiter).  
It’s meant for personal exploration, not production use or publication.

## Features

- Minimal fixed-window rate limiting.
- Pure in-memory operation.
- Lightweight, no dependencies.
- Runs with [Bun](https://bun.sh/).

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GerLC/request_throttler.git
   cd request_throttler
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Build the project:**

   ```bash
   bun run build
   ```

4. **Run tests or demo:**

   ```bash
   bun test
   ```

## Basic Usage Example

```typescript
import { RequestThrottler } from './src/request_throttler';

const throttler = new RequestThrottler({ maxRequests: 10, windowMs: 1000 });

if (throttler.isAllowed('user-123')) {
  // Allow request logic here
} else {
  // Throttle logic here
}
```

**Note:**  
All logic is for demonstration and learning purposes—there’s no advanced handling or persistence.

## License

MIT

---

_Made by [GerLC](https://github.com/GerLC) for practice and learning._