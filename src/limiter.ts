import { ClientData, RateLimitConfig } from "./types";

export class RateLimiter {
    private clients = new Map<string, ClientData>();
    private config: RateLimitConfig;

    constructor(config: RateLimitConfig) {
        this.config = config;
    }

    public isAllowed(clientId: string): boolean {
        const now = Date.now();
        const client = this.clients.get(clientId);

        if (!client || now > client.resetTime) {
            this.clients.set(clientId, { count: 1, resetTime: now + this.config.windowMs });
            return true;

        }

        if (client.count < this.config.limit) {
            client.count++;
            return true;
        }

        return false;
    }
}