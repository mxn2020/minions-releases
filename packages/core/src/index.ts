/**
 * Minions Releases SDK
 *
 * Release planning, version bumps, changelog generation, and publish targets
 *
 * @module @minions-releases/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Releases.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
