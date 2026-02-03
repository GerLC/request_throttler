export interface RateLimitConfig {
    limit: number;
    windowMs: number;
}

export interface ClientData {
    count: number;
    resetTime: number;
}