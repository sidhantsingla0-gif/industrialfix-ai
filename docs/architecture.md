# Architecture

## Request flow

```text
React (browser)
   → Express API (routes → middleware → controllers → services)
        → MongoDB
        → AI service → third-party LLM API
```

## Core rules

1. The LLM API key exists only on the backend.
2. Controllers stay thin. Business logic lives in services.
3. All LLM output is validated before it is stored or shown.
4. AI suggestions are reviewed by a human.