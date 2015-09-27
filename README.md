# Graphene

Graphene is a Node based Content Management System built on a `neo4j` graph, implemented into your stack as piece of `koa` middleware.

## Requirements

- `node.js` >= 4.0.0
- `koa` >= 1.0.0
- `neo4j` >= 2.0.0
- `react` >= 0.14.0

## Setup

Simply inlcude `graphene()` in your koa middleware.

```javascript
/* @flow */

import koa from 'koa';
import mount from 'koa-mount';
import graphene from 'graphene';

const app = koa();

app.use(mount('/admin', graphene()));

app.listen(3000);
```

Since Graphene uses GraphQL for its data-layer, you can either use Relay to query the API layer directly from your React components, or you can write a thin API wrapper that queries the GraphQL server and return your desired results.
