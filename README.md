# minions-releases

**Release planning, version bumps, changelog generation, and publish targets**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-releases/sdk minions-sdk

# Python
pip install minions-releases

# CLI (global)
npm install -g @minions-releases/cli
```

---

## CLI

```bash
# Show help
releases --help
```

---

## Python SDK

```python
from minions_releases import create_client

client = create_client()
```

---

## Project Structure

```
minions-releases/
  packages/
    core/           # TypeScript core library (@minions-releases/sdk on npm)
    python/         # Python SDK (minions-releases on PyPI)
    cli/            # CLI tool (@minions-releases/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [releases.minions.help](https://releases.minions.help)
- Blog: [releases.minions.blog](https://releases.minions.blog)
- App: [releases.minions.wtf](https://releases.minions.wtf)

---

## License

[MIT](LICENSE)
