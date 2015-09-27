declare class Koa {
  use(
    middleware: function
  ): Koa;

  listen(
    port: number;
  ): Koa;
}

declare module koa {
  declare function exports(): Koa;
}
