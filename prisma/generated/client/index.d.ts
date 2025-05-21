
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model ProductPriceBoundary
 * 
 */
export type ProductPriceBoundary = $Result.DefaultSelection<Prisma.$ProductPriceBoundaryPayload>
/**
 * Model PriceAuditLog
 * 
 */
export type PriceAuditLog = $Result.DefaultSelection<Prisma.$PriceAuditLogPayload>
/**
 * Model GlobalSettings
 * 
 */
export type GlobalSettings = $Result.DefaultSelection<Prisma.$GlobalSettingsPayload>
/**
 * Model ProductMetrics
 * 
 */
export type ProductMetrics = $Result.DefaultSelection<Prisma.$ProductMetricsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productPriceBoundary`: Exposes CRUD operations for the **ProductPriceBoundary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductPriceBoundaries
    * const productPriceBoundaries = await prisma.productPriceBoundary.findMany()
    * ```
    */
  get productPriceBoundary(): Prisma.ProductPriceBoundaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priceAuditLog`: Exposes CRUD operations for the **PriceAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceAuditLogs
    * const priceAuditLogs = await prisma.priceAuditLog.findMany()
    * ```
    */
  get priceAuditLog(): Prisma.PriceAuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.globalSettings`: Exposes CRUD operations for the **GlobalSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalSettings
    * const globalSettings = await prisma.globalSettings.findMany()
    * ```
    */
  get globalSettings(): Prisma.GlobalSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productMetrics`: Exposes CRUD operations for the **ProductMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductMetrics
    * const productMetrics = await prisma.productMetrics.findMany()
    * ```
    */
  get productMetrics(): Prisma.ProductMetricsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Session: 'Session',
    ProductPriceBoundary: 'ProductPriceBoundary',
    PriceAuditLog: 'PriceAuditLog',
    GlobalSettings: 'GlobalSettings',
    ProductMetrics: 'ProductMetrics'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "session" | "productPriceBoundary" | "priceAuditLog" | "globalSettings" | "productMetrics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      ProductPriceBoundary: {
        payload: Prisma.$ProductPriceBoundaryPayload<ExtArgs>
        fields: Prisma.ProductPriceBoundaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductPriceBoundaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceBoundaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductPriceBoundaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceBoundaryPayload>
          }
          findFirst: {
            args: Prisma.ProductPriceBoundaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceBoundaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductPriceBoundaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceBoundaryPayload>
          }
          findMany: {
            args: Prisma.ProductPriceBoundaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceBoundaryPayload>[]
          }
          create: {
            args: Prisma.ProductPriceBoundaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceBoundaryPayload>
          }
          createMany: {
            args: Prisma.ProductPriceBoundaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductPriceBoundaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceBoundaryPayload>[]
          }
          delete: {
            args: Prisma.ProductPriceBoundaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceBoundaryPayload>
          }
          update: {
            args: Prisma.ProductPriceBoundaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceBoundaryPayload>
          }
          deleteMany: {
            args: Prisma.ProductPriceBoundaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductPriceBoundaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductPriceBoundaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceBoundaryPayload>[]
          }
          upsert: {
            args: Prisma.ProductPriceBoundaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPriceBoundaryPayload>
          }
          aggregate: {
            args: Prisma.ProductPriceBoundaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductPriceBoundary>
          }
          groupBy: {
            args: Prisma.ProductPriceBoundaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductPriceBoundaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductPriceBoundaryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductPriceBoundaryCountAggregateOutputType> | number
          }
        }
      }
      PriceAuditLog: {
        payload: Prisma.$PriceAuditLogPayload<ExtArgs>
        fields: Prisma.PriceAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAuditLogPayload>
          }
          findFirst: {
            args: Prisma.PriceAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAuditLogPayload>
          }
          findMany: {
            args: Prisma.PriceAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAuditLogPayload>[]
          }
          create: {
            args: Prisma.PriceAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAuditLogPayload>
          }
          createMany: {
            args: Prisma.PriceAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAuditLogPayload>[]
          }
          delete: {
            args: Prisma.PriceAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAuditLogPayload>
          }
          update: {
            args: Prisma.PriceAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.PriceAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceAuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAuditLogPayload>[]
          }
          upsert: {
            args: Prisma.PriceAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAuditLogPayload>
          }
          aggregate: {
            args: Prisma.PriceAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceAuditLog>
          }
          groupBy: {
            args: Prisma.PriceAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<PriceAuditLogCountAggregateOutputType> | number
          }
        }
      }
      GlobalSettings: {
        payload: Prisma.$GlobalSettingsPayload<ExtArgs>
        fields: Prisma.GlobalSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          findFirst: {
            args: Prisma.GlobalSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          findMany: {
            args: Prisma.GlobalSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>[]
          }
          create: {
            args: Prisma.GlobalSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          createMany: {
            args: Prisma.GlobalSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>[]
          }
          delete: {
            args: Prisma.GlobalSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          update: {
            args: Prisma.GlobalSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          deleteMany: {
            args: Prisma.GlobalSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlobalSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>[]
          }
          upsert: {
            args: Prisma.GlobalSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalSettingsPayload>
          }
          aggregate: {
            args: Prisma.GlobalSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalSettings>
          }
          groupBy: {
            args: Prisma.GlobalSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalSettingsCountAggregateOutputType> | number
          }
        }
      }
      ProductMetrics: {
        payload: Prisma.$ProductMetricsPayload<ExtArgs>
        fields: Prisma.ProductMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricsPayload>
          }
          findFirst: {
            args: Prisma.ProductMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricsPayload>
          }
          findMany: {
            args: Prisma.ProductMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricsPayload>[]
          }
          create: {
            args: Prisma.ProductMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricsPayload>
          }
          createMany: {
            args: Prisma.ProductMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductMetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricsPayload>[]
          }
          delete: {
            args: Prisma.ProductMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricsPayload>
          }
          update: {
            args: Prisma.ProductMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricsPayload>
          }
          deleteMany: {
            args: Prisma.ProductMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductMetricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricsPayload>[]
          }
          upsert: {
            args: Prisma.ProductMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricsPayload>
          }
          aggregate: {
            args: Prisma.ProductMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductMetrics>
          }
          groupBy: {
            args: Prisma.ProductMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductMetricsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    session?: SessionOmit
    productPriceBoundary?: ProductPriceBoundaryOmit
    priceAuditLog?: PriceAuditLogOmit
    globalSettings?: GlobalSettingsOmit
    productMetrics?: ProductMetricsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    userId: bigint | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    shop: string | null
    state: string | null
    isOnline: boolean | null
    scope: string | null
    expires: Date | null
    accessToken: string | null
    userId: bigint | null
    firstName: string | null
    lastName: string | null
    email: string | null
    accountOwner: boolean | null
    locale: string | null
    collaborator: boolean | null
    emailVerified: boolean | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    shop: string | null
    state: string | null
    isOnline: boolean | null
    scope: string | null
    expires: Date | null
    accessToken: string | null
    userId: bigint | null
    firstName: string | null
    lastName: string | null
    email: string | null
    accountOwner: boolean | null
    locale: string | null
    collaborator: boolean | null
    emailVerified: boolean | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    shop: number
    state: number
    isOnline: number
    scope: number
    expires: number
    accessToken: number
    userId: number
    firstName: number
    lastName: number
    email: number
    accountOwner: number
    locale: number
    collaborator: number
    emailVerified: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    shop?: true
    state?: true
    isOnline?: true
    scope?: true
    expires?: true
    accessToken?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    accountOwner?: true
    locale?: true
    collaborator?: true
    emailVerified?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    shop?: true
    state?: true
    isOnline?: true
    scope?: true
    expires?: true
    accessToken?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    accountOwner?: true
    locale?: true
    collaborator?: true
    emailVerified?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    shop?: true
    state?: true
    isOnline?: true
    scope?: true
    expires?: true
    accessToken?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    accountOwner?: true
    locale?: true
    collaborator?: true
    emailVerified?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    shop: string
    state: string
    isOnline: boolean
    scope: string | null
    expires: Date | null
    accessToken: string
    userId: bigint | null
    firstName: string | null
    lastName: string | null
    email: string | null
    accountOwner: boolean
    locale: string | null
    collaborator: boolean | null
    emailVerified: boolean | null
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shop?: boolean
    state?: boolean
    isOnline?: boolean
    scope?: boolean
    expires?: boolean
    accessToken?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    accountOwner?: boolean
    locale?: boolean
    collaborator?: boolean
    emailVerified?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shop?: boolean
    state?: boolean
    isOnline?: boolean
    scope?: boolean
    expires?: boolean
    accessToken?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    accountOwner?: boolean
    locale?: boolean
    collaborator?: boolean
    emailVerified?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shop?: boolean
    state?: boolean
    isOnline?: boolean
    scope?: boolean
    expires?: boolean
    accessToken?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    accountOwner?: boolean
    locale?: boolean
    collaborator?: boolean
    emailVerified?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    shop?: boolean
    state?: boolean
    isOnline?: boolean
    scope?: boolean
    expires?: boolean
    accessToken?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    accountOwner?: boolean
    locale?: boolean
    collaborator?: boolean
    emailVerified?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shop" | "state" | "isOnline" | "scope" | "expires" | "accessToken" | "userId" | "firstName" | "lastName" | "email" | "accountOwner" | "locale" | "collaborator" | "emailVerified", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shop: string
      state: string
      isOnline: boolean
      scope: string | null
      expires: Date | null
      accessToken: string
      userId: bigint | null
      firstName: string | null
      lastName: string | null
      email: string | null
      accountOwner: boolean
      locale: string | null
      collaborator: boolean | null
      emailVerified: boolean | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly shop: FieldRef<"Session", 'String'>
    readonly state: FieldRef<"Session", 'String'>
    readonly isOnline: FieldRef<"Session", 'Boolean'>
    readonly scope: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly accessToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'BigInt'>
    readonly firstName: FieldRef<"Session", 'String'>
    readonly lastName: FieldRef<"Session", 'String'>
    readonly email: FieldRef<"Session", 'String'>
    readonly accountOwner: FieldRef<"Session", 'Boolean'>
    readonly locale: FieldRef<"Session", 'String'>
    readonly collaborator: FieldRef<"Session", 'Boolean'>
    readonly emailVerified: FieldRef<"Session", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
  }


  /**
   * Model ProductPriceBoundary
   */

  export type AggregateProductPriceBoundary = {
    _count: ProductPriceBoundaryCountAggregateOutputType | null
    _avg: ProductPriceBoundaryAvgAggregateOutputType | null
    _sum: ProductPriceBoundarySumAggregateOutputType | null
    _min: ProductPriceBoundaryMinAggregateOutputType | null
    _max: ProductPriceBoundaryMaxAggregateOutputType | null
  }

  export type ProductPriceBoundaryAvgAggregateOutputType = {
    minPrice: number | null
    maxPrice: number | null
  }

  export type ProductPriceBoundarySumAggregateOutputType = {
    minPrice: number | null
    maxPrice: number | null
  }

  export type ProductPriceBoundaryMinAggregateOutputType = {
    id: string | null
    productId: string | null
    minPrice: number | null
    maxPrice: number | null
    dynamicPricingEnabled: boolean | null
  }

  export type ProductPriceBoundaryMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    minPrice: number | null
    maxPrice: number | null
    dynamicPricingEnabled: boolean | null
  }

  export type ProductPriceBoundaryCountAggregateOutputType = {
    id: number
    productId: number
    minPrice: number
    maxPrice: number
    dynamicPricingEnabled: number
    _all: number
  }


  export type ProductPriceBoundaryAvgAggregateInputType = {
    minPrice?: true
    maxPrice?: true
  }

  export type ProductPriceBoundarySumAggregateInputType = {
    minPrice?: true
    maxPrice?: true
  }

  export type ProductPriceBoundaryMinAggregateInputType = {
    id?: true
    productId?: true
    minPrice?: true
    maxPrice?: true
    dynamicPricingEnabled?: true
  }

  export type ProductPriceBoundaryMaxAggregateInputType = {
    id?: true
    productId?: true
    minPrice?: true
    maxPrice?: true
    dynamicPricingEnabled?: true
  }

  export type ProductPriceBoundaryCountAggregateInputType = {
    id?: true
    productId?: true
    minPrice?: true
    maxPrice?: true
    dynamicPricingEnabled?: true
    _all?: true
  }

  export type ProductPriceBoundaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPriceBoundary to aggregate.
     */
    where?: ProductPriceBoundaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPriceBoundaries to fetch.
     */
    orderBy?: ProductPriceBoundaryOrderByWithRelationInput | ProductPriceBoundaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductPriceBoundaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPriceBoundaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPriceBoundaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductPriceBoundaries
    **/
    _count?: true | ProductPriceBoundaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductPriceBoundaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductPriceBoundarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductPriceBoundaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductPriceBoundaryMaxAggregateInputType
  }

  export type GetProductPriceBoundaryAggregateType<T extends ProductPriceBoundaryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductPriceBoundary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductPriceBoundary[P]>
      : GetScalarType<T[P], AggregateProductPriceBoundary[P]>
  }




  export type ProductPriceBoundaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductPriceBoundaryWhereInput
    orderBy?: ProductPriceBoundaryOrderByWithAggregationInput | ProductPriceBoundaryOrderByWithAggregationInput[]
    by: ProductPriceBoundaryScalarFieldEnum[] | ProductPriceBoundaryScalarFieldEnum
    having?: ProductPriceBoundaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductPriceBoundaryCountAggregateInputType | true
    _avg?: ProductPriceBoundaryAvgAggregateInputType
    _sum?: ProductPriceBoundarySumAggregateInputType
    _min?: ProductPriceBoundaryMinAggregateInputType
    _max?: ProductPriceBoundaryMaxAggregateInputType
  }

  export type ProductPriceBoundaryGroupByOutputType = {
    id: string
    productId: string
    minPrice: number
    maxPrice: number
    dynamicPricingEnabled: boolean
    _count: ProductPriceBoundaryCountAggregateOutputType | null
    _avg: ProductPriceBoundaryAvgAggregateOutputType | null
    _sum: ProductPriceBoundarySumAggregateOutputType | null
    _min: ProductPriceBoundaryMinAggregateOutputType | null
    _max: ProductPriceBoundaryMaxAggregateOutputType | null
  }

  type GetProductPriceBoundaryGroupByPayload<T extends ProductPriceBoundaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductPriceBoundaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductPriceBoundaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductPriceBoundaryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductPriceBoundaryGroupByOutputType[P]>
        }
      >
    >


  export type ProductPriceBoundarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    dynamicPricingEnabled?: boolean
  }, ExtArgs["result"]["productPriceBoundary"]>

  export type ProductPriceBoundarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    dynamicPricingEnabled?: boolean
  }, ExtArgs["result"]["productPriceBoundary"]>

  export type ProductPriceBoundarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    dynamicPricingEnabled?: boolean
  }, ExtArgs["result"]["productPriceBoundary"]>

  export type ProductPriceBoundarySelectScalar = {
    id?: boolean
    productId?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    dynamicPricingEnabled?: boolean
  }

  export type ProductPriceBoundaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "minPrice" | "maxPrice" | "dynamicPricingEnabled", ExtArgs["result"]["productPriceBoundary"]>

  export type $ProductPriceBoundaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductPriceBoundary"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      minPrice: number
      maxPrice: number
      dynamicPricingEnabled: boolean
    }, ExtArgs["result"]["productPriceBoundary"]>
    composites: {}
  }

  type ProductPriceBoundaryGetPayload<S extends boolean | null | undefined | ProductPriceBoundaryDefaultArgs> = $Result.GetResult<Prisma.$ProductPriceBoundaryPayload, S>

  type ProductPriceBoundaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductPriceBoundaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductPriceBoundaryCountAggregateInputType | true
    }

  export interface ProductPriceBoundaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductPriceBoundary'], meta: { name: 'ProductPriceBoundary' } }
    /**
     * Find zero or one ProductPriceBoundary that matches the filter.
     * @param {ProductPriceBoundaryFindUniqueArgs} args - Arguments to find a ProductPriceBoundary
     * @example
     * // Get one ProductPriceBoundary
     * const productPriceBoundary = await prisma.productPriceBoundary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductPriceBoundaryFindUniqueArgs>(args: SelectSubset<T, ProductPriceBoundaryFindUniqueArgs<ExtArgs>>): Prisma__ProductPriceBoundaryClient<$Result.GetResult<Prisma.$ProductPriceBoundaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductPriceBoundary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductPriceBoundaryFindUniqueOrThrowArgs} args - Arguments to find a ProductPriceBoundary
     * @example
     * // Get one ProductPriceBoundary
     * const productPriceBoundary = await prisma.productPriceBoundary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductPriceBoundaryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductPriceBoundaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductPriceBoundaryClient<$Result.GetResult<Prisma.$ProductPriceBoundaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPriceBoundary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceBoundaryFindFirstArgs} args - Arguments to find a ProductPriceBoundary
     * @example
     * // Get one ProductPriceBoundary
     * const productPriceBoundary = await prisma.productPriceBoundary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductPriceBoundaryFindFirstArgs>(args?: SelectSubset<T, ProductPriceBoundaryFindFirstArgs<ExtArgs>>): Prisma__ProductPriceBoundaryClient<$Result.GetResult<Prisma.$ProductPriceBoundaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductPriceBoundary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceBoundaryFindFirstOrThrowArgs} args - Arguments to find a ProductPriceBoundary
     * @example
     * // Get one ProductPriceBoundary
     * const productPriceBoundary = await prisma.productPriceBoundary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductPriceBoundaryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductPriceBoundaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductPriceBoundaryClient<$Result.GetResult<Prisma.$ProductPriceBoundaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductPriceBoundaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceBoundaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductPriceBoundaries
     * const productPriceBoundaries = await prisma.productPriceBoundary.findMany()
     * 
     * // Get first 10 ProductPriceBoundaries
     * const productPriceBoundaries = await prisma.productPriceBoundary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productPriceBoundaryWithIdOnly = await prisma.productPriceBoundary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductPriceBoundaryFindManyArgs>(args?: SelectSubset<T, ProductPriceBoundaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPriceBoundaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductPriceBoundary.
     * @param {ProductPriceBoundaryCreateArgs} args - Arguments to create a ProductPriceBoundary.
     * @example
     * // Create one ProductPriceBoundary
     * const ProductPriceBoundary = await prisma.productPriceBoundary.create({
     *   data: {
     *     // ... data to create a ProductPriceBoundary
     *   }
     * })
     * 
     */
    create<T extends ProductPriceBoundaryCreateArgs>(args: SelectSubset<T, ProductPriceBoundaryCreateArgs<ExtArgs>>): Prisma__ProductPriceBoundaryClient<$Result.GetResult<Prisma.$ProductPriceBoundaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductPriceBoundaries.
     * @param {ProductPriceBoundaryCreateManyArgs} args - Arguments to create many ProductPriceBoundaries.
     * @example
     * // Create many ProductPriceBoundaries
     * const productPriceBoundary = await prisma.productPriceBoundary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductPriceBoundaryCreateManyArgs>(args?: SelectSubset<T, ProductPriceBoundaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductPriceBoundaries and returns the data saved in the database.
     * @param {ProductPriceBoundaryCreateManyAndReturnArgs} args - Arguments to create many ProductPriceBoundaries.
     * @example
     * // Create many ProductPriceBoundaries
     * const productPriceBoundary = await prisma.productPriceBoundary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductPriceBoundaries and only return the `id`
     * const productPriceBoundaryWithIdOnly = await prisma.productPriceBoundary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductPriceBoundaryCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductPriceBoundaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPriceBoundaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductPriceBoundary.
     * @param {ProductPriceBoundaryDeleteArgs} args - Arguments to delete one ProductPriceBoundary.
     * @example
     * // Delete one ProductPriceBoundary
     * const ProductPriceBoundary = await prisma.productPriceBoundary.delete({
     *   where: {
     *     // ... filter to delete one ProductPriceBoundary
     *   }
     * })
     * 
     */
    delete<T extends ProductPriceBoundaryDeleteArgs>(args: SelectSubset<T, ProductPriceBoundaryDeleteArgs<ExtArgs>>): Prisma__ProductPriceBoundaryClient<$Result.GetResult<Prisma.$ProductPriceBoundaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductPriceBoundary.
     * @param {ProductPriceBoundaryUpdateArgs} args - Arguments to update one ProductPriceBoundary.
     * @example
     * // Update one ProductPriceBoundary
     * const productPriceBoundary = await prisma.productPriceBoundary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductPriceBoundaryUpdateArgs>(args: SelectSubset<T, ProductPriceBoundaryUpdateArgs<ExtArgs>>): Prisma__ProductPriceBoundaryClient<$Result.GetResult<Prisma.$ProductPriceBoundaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductPriceBoundaries.
     * @param {ProductPriceBoundaryDeleteManyArgs} args - Arguments to filter ProductPriceBoundaries to delete.
     * @example
     * // Delete a few ProductPriceBoundaries
     * const { count } = await prisma.productPriceBoundary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductPriceBoundaryDeleteManyArgs>(args?: SelectSubset<T, ProductPriceBoundaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPriceBoundaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceBoundaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductPriceBoundaries
     * const productPriceBoundary = await prisma.productPriceBoundary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductPriceBoundaryUpdateManyArgs>(args: SelectSubset<T, ProductPriceBoundaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductPriceBoundaries and returns the data updated in the database.
     * @param {ProductPriceBoundaryUpdateManyAndReturnArgs} args - Arguments to update many ProductPriceBoundaries.
     * @example
     * // Update many ProductPriceBoundaries
     * const productPriceBoundary = await prisma.productPriceBoundary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductPriceBoundaries and only return the `id`
     * const productPriceBoundaryWithIdOnly = await prisma.productPriceBoundary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductPriceBoundaryUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductPriceBoundaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPriceBoundaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductPriceBoundary.
     * @param {ProductPriceBoundaryUpsertArgs} args - Arguments to update or create a ProductPriceBoundary.
     * @example
     * // Update or create a ProductPriceBoundary
     * const productPriceBoundary = await prisma.productPriceBoundary.upsert({
     *   create: {
     *     // ... data to create a ProductPriceBoundary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductPriceBoundary we want to update
     *   }
     * })
     */
    upsert<T extends ProductPriceBoundaryUpsertArgs>(args: SelectSubset<T, ProductPriceBoundaryUpsertArgs<ExtArgs>>): Prisma__ProductPriceBoundaryClient<$Result.GetResult<Prisma.$ProductPriceBoundaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductPriceBoundaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceBoundaryCountArgs} args - Arguments to filter ProductPriceBoundaries to count.
     * @example
     * // Count the number of ProductPriceBoundaries
     * const count = await prisma.productPriceBoundary.count({
     *   where: {
     *     // ... the filter for the ProductPriceBoundaries we want to count
     *   }
     * })
    **/
    count<T extends ProductPriceBoundaryCountArgs>(
      args?: Subset<T, ProductPriceBoundaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductPriceBoundaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductPriceBoundary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceBoundaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductPriceBoundaryAggregateArgs>(args: Subset<T, ProductPriceBoundaryAggregateArgs>): Prisma.PrismaPromise<GetProductPriceBoundaryAggregateType<T>>

    /**
     * Group by ProductPriceBoundary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductPriceBoundaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductPriceBoundaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductPriceBoundaryGroupByArgs['orderBy'] }
        : { orderBy?: ProductPriceBoundaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductPriceBoundaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPriceBoundaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductPriceBoundary model
   */
  readonly fields: ProductPriceBoundaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductPriceBoundary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductPriceBoundaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductPriceBoundary model
   */
  interface ProductPriceBoundaryFieldRefs {
    readonly id: FieldRef<"ProductPriceBoundary", 'String'>
    readonly productId: FieldRef<"ProductPriceBoundary", 'String'>
    readonly minPrice: FieldRef<"ProductPriceBoundary", 'Float'>
    readonly maxPrice: FieldRef<"ProductPriceBoundary", 'Float'>
    readonly dynamicPricingEnabled: FieldRef<"ProductPriceBoundary", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProductPriceBoundary findUnique
   */
  export type ProductPriceBoundaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceBoundary
     */
    select?: ProductPriceBoundarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceBoundary
     */
    omit?: ProductPriceBoundaryOmit<ExtArgs> | null
    /**
     * Filter, which ProductPriceBoundary to fetch.
     */
    where: ProductPriceBoundaryWhereUniqueInput
  }

  /**
   * ProductPriceBoundary findUniqueOrThrow
   */
  export type ProductPriceBoundaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceBoundary
     */
    select?: ProductPriceBoundarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceBoundary
     */
    omit?: ProductPriceBoundaryOmit<ExtArgs> | null
    /**
     * Filter, which ProductPriceBoundary to fetch.
     */
    where: ProductPriceBoundaryWhereUniqueInput
  }

  /**
   * ProductPriceBoundary findFirst
   */
  export type ProductPriceBoundaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceBoundary
     */
    select?: ProductPriceBoundarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceBoundary
     */
    omit?: ProductPriceBoundaryOmit<ExtArgs> | null
    /**
     * Filter, which ProductPriceBoundary to fetch.
     */
    where?: ProductPriceBoundaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPriceBoundaries to fetch.
     */
    orderBy?: ProductPriceBoundaryOrderByWithRelationInput | ProductPriceBoundaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPriceBoundaries.
     */
    cursor?: ProductPriceBoundaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPriceBoundaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPriceBoundaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPriceBoundaries.
     */
    distinct?: ProductPriceBoundaryScalarFieldEnum | ProductPriceBoundaryScalarFieldEnum[]
  }

  /**
   * ProductPriceBoundary findFirstOrThrow
   */
  export type ProductPriceBoundaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceBoundary
     */
    select?: ProductPriceBoundarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceBoundary
     */
    omit?: ProductPriceBoundaryOmit<ExtArgs> | null
    /**
     * Filter, which ProductPriceBoundary to fetch.
     */
    where?: ProductPriceBoundaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPriceBoundaries to fetch.
     */
    orderBy?: ProductPriceBoundaryOrderByWithRelationInput | ProductPriceBoundaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductPriceBoundaries.
     */
    cursor?: ProductPriceBoundaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPriceBoundaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPriceBoundaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductPriceBoundaries.
     */
    distinct?: ProductPriceBoundaryScalarFieldEnum | ProductPriceBoundaryScalarFieldEnum[]
  }

  /**
   * ProductPriceBoundary findMany
   */
  export type ProductPriceBoundaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceBoundary
     */
    select?: ProductPriceBoundarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceBoundary
     */
    omit?: ProductPriceBoundaryOmit<ExtArgs> | null
    /**
     * Filter, which ProductPriceBoundaries to fetch.
     */
    where?: ProductPriceBoundaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductPriceBoundaries to fetch.
     */
    orderBy?: ProductPriceBoundaryOrderByWithRelationInput | ProductPriceBoundaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductPriceBoundaries.
     */
    cursor?: ProductPriceBoundaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductPriceBoundaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductPriceBoundaries.
     */
    skip?: number
    distinct?: ProductPriceBoundaryScalarFieldEnum | ProductPriceBoundaryScalarFieldEnum[]
  }

  /**
   * ProductPriceBoundary create
   */
  export type ProductPriceBoundaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceBoundary
     */
    select?: ProductPriceBoundarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceBoundary
     */
    omit?: ProductPriceBoundaryOmit<ExtArgs> | null
    /**
     * The data needed to create a ProductPriceBoundary.
     */
    data: XOR<ProductPriceBoundaryCreateInput, ProductPriceBoundaryUncheckedCreateInput>
  }

  /**
   * ProductPriceBoundary createMany
   */
  export type ProductPriceBoundaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductPriceBoundaries.
     */
    data: ProductPriceBoundaryCreateManyInput | ProductPriceBoundaryCreateManyInput[]
  }

  /**
   * ProductPriceBoundary createManyAndReturn
   */
  export type ProductPriceBoundaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceBoundary
     */
    select?: ProductPriceBoundarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceBoundary
     */
    omit?: ProductPriceBoundaryOmit<ExtArgs> | null
    /**
     * The data used to create many ProductPriceBoundaries.
     */
    data: ProductPriceBoundaryCreateManyInput | ProductPriceBoundaryCreateManyInput[]
  }

  /**
   * ProductPriceBoundary update
   */
  export type ProductPriceBoundaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceBoundary
     */
    select?: ProductPriceBoundarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceBoundary
     */
    omit?: ProductPriceBoundaryOmit<ExtArgs> | null
    /**
     * The data needed to update a ProductPriceBoundary.
     */
    data: XOR<ProductPriceBoundaryUpdateInput, ProductPriceBoundaryUncheckedUpdateInput>
    /**
     * Choose, which ProductPriceBoundary to update.
     */
    where: ProductPriceBoundaryWhereUniqueInput
  }

  /**
   * ProductPriceBoundary updateMany
   */
  export type ProductPriceBoundaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductPriceBoundaries.
     */
    data: XOR<ProductPriceBoundaryUpdateManyMutationInput, ProductPriceBoundaryUncheckedUpdateManyInput>
    /**
     * Filter which ProductPriceBoundaries to update
     */
    where?: ProductPriceBoundaryWhereInput
    /**
     * Limit how many ProductPriceBoundaries to update.
     */
    limit?: number
  }

  /**
   * ProductPriceBoundary updateManyAndReturn
   */
  export type ProductPriceBoundaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceBoundary
     */
    select?: ProductPriceBoundarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceBoundary
     */
    omit?: ProductPriceBoundaryOmit<ExtArgs> | null
    /**
     * The data used to update ProductPriceBoundaries.
     */
    data: XOR<ProductPriceBoundaryUpdateManyMutationInput, ProductPriceBoundaryUncheckedUpdateManyInput>
    /**
     * Filter which ProductPriceBoundaries to update
     */
    where?: ProductPriceBoundaryWhereInput
    /**
     * Limit how many ProductPriceBoundaries to update.
     */
    limit?: number
  }

  /**
   * ProductPriceBoundary upsert
   */
  export type ProductPriceBoundaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceBoundary
     */
    select?: ProductPriceBoundarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceBoundary
     */
    omit?: ProductPriceBoundaryOmit<ExtArgs> | null
    /**
     * The filter to search for the ProductPriceBoundary to update in case it exists.
     */
    where: ProductPriceBoundaryWhereUniqueInput
    /**
     * In case the ProductPriceBoundary found by the `where` argument doesn't exist, create a new ProductPriceBoundary with this data.
     */
    create: XOR<ProductPriceBoundaryCreateInput, ProductPriceBoundaryUncheckedCreateInput>
    /**
     * In case the ProductPriceBoundary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductPriceBoundaryUpdateInput, ProductPriceBoundaryUncheckedUpdateInput>
  }

  /**
   * ProductPriceBoundary delete
   */
  export type ProductPriceBoundaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceBoundary
     */
    select?: ProductPriceBoundarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceBoundary
     */
    omit?: ProductPriceBoundaryOmit<ExtArgs> | null
    /**
     * Filter which ProductPriceBoundary to delete.
     */
    where: ProductPriceBoundaryWhereUniqueInput
  }

  /**
   * ProductPriceBoundary deleteMany
   */
  export type ProductPriceBoundaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductPriceBoundaries to delete
     */
    where?: ProductPriceBoundaryWhereInput
    /**
     * Limit how many ProductPriceBoundaries to delete.
     */
    limit?: number
  }

  /**
   * ProductPriceBoundary without action
   */
  export type ProductPriceBoundaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPriceBoundary
     */
    select?: ProductPriceBoundarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductPriceBoundary
     */
    omit?: ProductPriceBoundaryOmit<ExtArgs> | null
  }


  /**
   * Model PriceAuditLog
   */

  export type AggregatePriceAuditLog = {
    _count: PriceAuditLogCountAggregateOutputType | null
    _avg: PriceAuditLogAvgAggregateOutputType | null
    _sum: PriceAuditLogSumAggregateOutputType | null
    _min: PriceAuditLogMinAggregateOutputType | null
    _max: PriceAuditLogMaxAggregateOutputType | null
  }

  export type PriceAuditLogAvgAggregateOutputType = {
    oldPrice: number | null
    newPrice: number | null
  }

  export type PriceAuditLogSumAggregateOutputType = {
    oldPrice: number | null
    newPrice: number | null
  }

  export type PriceAuditLogMinAggregateOutputType = {
    id: string | null
    productId: string | null
    oldPrice: number | null
    newPrice: number | null
    timestamp: Date | null
    type: string | null
  }

  export type PriceAuditLogMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    oldPrice: number | null
    newPrice: number | null
    timestamp: Date | null
    type: string | null
  }

  export type PriceAuditLogCountAggregateOutputType = {
    id: number
    productId: number
    oldPrice: number
    newPrice: number
    timestamp: number
    type: number
    _all: number
  }


  export type PriceAuditLogAvgAggregateInputType = {
    oldPrice?: true
    newPrice?: true
  }

  export type PriceAuditLogSumAggregateInputType = {
    oldPrice?: true
    newPrice?: true
  }

  export type PriceAuditLogMinAggregateInputType = {
    id?: true
    productId?: true
    oldPrice?: true
    newPrice?: true
    timestamp?: true
    type?: true
  }

  export type PriceAuditLogMaxAggregateInputType = {
    id?: true
    productId?: true
    oldPrice?: true
    newPrice?: true
    timestamp?: true
    type?: true
  }

  export type PriceAuditLogCountAggregateInputType = {
    id?: true
    productId?: true
    oldPrice?: true
    newPrice?: true
    timestamp?: true
    type?: true
    _all?: true
  }

  export type PriceAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceAuditLog to aggregate.
     */
    where?: PriceAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAuditLogs to fetch.
     */
    orderBy?: PriceAuditLogOrderByWithRelationInput | PriceAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceAuditLogs
    **/
    _count?: true | PriceAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceAuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceAuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceAuditLogMaxAggregateInputType
  }

  export type GetPriceAuditLogAggregateType<T extends PriceAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceAuditLog[P]>
      : GetScalarType<T[P], AggregatePriceAuditLog[P]>
  }




  export type PriceAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceAuditLogWhereInput
    orderBy?: PriceAuditLogOrderByWithAggregationInput | PriceAuditLogOrderByWithAggregationInput[]
    by: PriceAuditLogScalarFieldEnum[] | PriceAuditLogScalarFieldEnum
    having?: PriceAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceAuditLogCountAggregateInputType | true
    _avg?: PriceAuditLogAvgAggregateInputType
    _sum?: PriceAuditLogSumAggregateInputType
    _min?: PriceAuditLogMinAggregateInputType
    _max?: PriceAuditLogMaxAggregateInputType
  }

  export type PriceAuditLogGroupByOutputType = {
    id: string
    productId: string
    oldPrice: number
    newPrice: number
    timestamp: Date
    type: string
    _count: PriceAuditLogCountAggregateOutputType | null
    _avg: PriceAuditLogAvgAggregateOutputType | null
    _sum: PriceAuditLogSumAggregateOutputType | null
    _min: PriceAuditLogMinAggregateOutputType | null
    _max: PriceAuditLogMaxAggregateOutputType | null
  }

  type GetPriceAuditLogGroupByPayload<T extends PriceAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], PriceAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type PriceAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    oldPrice?: boolean
    newPrice?: boolean
    timestamp?: boolean
    type?: boolean
  }, ExtArgs["result"]["priceAuditLog"]>

  export type PriceAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    oldPrice?: boolean
    newPrice?: boolean
    timestamp?: boolean
    type?: boolean
  }, ExtArgs["result"]["priceAuditLog"]>

  export type PriceAuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    oldPrice?: boolean
    newPrice?: boolean
    timestamp?: boolean
    type?: boolean
  }, ExtArgs["result"]["priceAuditLog"]>

  export type PriceAuditLogSelectScalar = {
    id?: boolean
    productId?: boolean
    oldPrice?: boolean
    newPrice?: boolean
    timestamp?: boolean
    type?: boolean
  }

  export type PriceAuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "oldPrice" | "newPrice" | "timestamp" | "type", ExtArgs["result"]["priceAuditLog"]>

  export type $PriceAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceAuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      oldPrice: number
      newPrice: number
      timestamp: Date
      type: string
    }, ExtArgs["result"]["priceAuditLog"]>
    composites: {}
  }

  type PriceAuditLogGetPayload<S extends boolean | null | undefined | PriceAuditLogDefaultArgs> = $Result.GetResult<Prisma.$PriceAuditLogPayload, S>

  type PriceAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceAuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceAuditLogCountAggregateInputType | true
    }

  export interface PriceAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceAuditLog'], meta: { name: 'PriceAuditLog' } }
    /**
     * Find zero or one PriceAuditLog that matches the filter.
     * @param {PriceAuditLogFindUniqueArgs} args - Arguments to find a PriceAuditLog
     * @example
     * // Get one PriceAuditLog
     * const priceAuditLog = await prisma.priceAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceAuditLogFindUniqueArgs>(args: SelectSubset<T, PriceAuditLogFindUniqueArgs<ExtArgs>>): Prisma__PriceAuditLogClient<$Result.GetResult<Prisma.$PriceAuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PriceAuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceAuditLogFindUniqueOrThrowArgs} args - Arguments to find a PriceAuditLog
     * @example
     * // Get one PriceAuditLog
     * const priceAuditLog = await prisma.priceAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceAuditLogClient<$Result.GetResult<Prisma.$PriceAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAuditLogFindFirstArgs} args - Arguments to find a PriceAuditLog
     * @example
     * // Get one PriceAuditLog
     * const priceAuditLog = await prisma.priceAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceAuditLogFindFirstArgs>(args?: SelectSubset<T, PriceAuditLogFindFirstArgs<ExtArgs>>): Prisma__PriceAuditLogClient<$Result.GetResult<Prisma.$PriceAuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAuditLogFindFirstOrThrowArgs} args - Arguments to find a PriceAuditLog
     * @example
     * // Get one PriceAuditLog
     * const priceAuditLog = await prisma.priceAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceAuditLogClient<$Result.GetResult<Prisma.$PriceAuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PriceAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceAuditLogs
     * const priceAuditLogs = await prisma.priceAuditLog.findMany()
     * 
     * // Get first 10 PriceAuditLogs
     * const priceAuditLogs = await prisma.priceAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceAuditLogWithIdOnly = await prisma.priceAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceAuditLogFindManyArgs>(args?: SelectSubset<T, PriceAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PriceAuditLog.
     * @param {PriceAuditLogCreateArgs} args - Arguments to create a PriceAuditLog.
     * @example
     * // Create one PriceAuditLog
     * const PriceAuditLog = await prisma.priceAuditLog.create({
     *   data: {
     *     // ... data to create a PriceAuditLog
     *   }
     * })
     * 
     */
    create<T extends PriceAuditLogCreateArgs>(args: SelectSubset<T, PriceAuditLogCreateArgs<ExtArgs>>): Prisma__PriceAuditLogClient<$Result.GetResult<Prisma.$PriceAuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PriceAuditLogs.
     * @param {PriceAuditLogCreateManyArgs} args - Arguments to create many PriceAuditLogs.
     * @example
     * // Create many PriceAuditLogs
     * const priceAuditLog = await prisma.priceAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceAuditLogCreateManyArgs>(args?: SelectSubset<T, PriceAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceAuditLogs and returns the data saved in the database.
     * @param {PriceAuditLogCreateManyAndReturnArgs} args - Arguments to create many PriceAuditLogs.
     * @example
     * // Create many PriceAuditLogs
     * const priceAuditLog = await prisma.priceAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceAuditLogs and only return the `id`
     * const priceAuditLogWithIdOnly = await prisma.priceAuditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PriceAuditLog.
     * @param {PriceAuditLogDeleteArgs} args - Arguments to delete one PriceAuditLog.
     * @example
     * // Delete one PriceAuditLog
     * const PriceAuditLog = await prisma.priceAuditLog.delete({
     *   where: {
     *     // ... filter to delete one PriceAuditLog
     *   }
     * })
     * 
     */
    delete<T extends PriceAuditLogDeleteArgs>(args: SelectSubset<T, PriceAuditLogDeleteArgs<ExtArgs>>): Prisma__PriceAuditLogClient<$Result.GetResult<Prisma.$PriceAuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PriceAuditLog.
     * @param {PriceAuditLogUpdateArgs} args - Arguments to update one PriceAuditLog.
     * @example
     * // Update one PriceAuditLog
     * const priceAuditLog = await prisma.priceAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceAuditLogUpdateArgs>(args: SelectSubset<T, PriceAuditLogUpdateArgs<ExtArgs>>): Prisma__PriceAuditLogClient<$Result.GetResult<Prisma.$PriceAuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PriceAuditLogs.
     * @param {PriceAuditLogDeleteManyArgs} args - Arguments to filter PriceAuditLogs to delete.
     * @example
     * // Delete a few PriceAuditLogs
     * const { count } = await prisma.priceAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceAuditLogDeleteManyArgs>(args?: SelectSubset<T, PriceAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceAuditLogs
     * const priceAuditLog = await prisma.priceAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceAuditLogUpdateManyArgs>(args: SelectSubset<T, PriceAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceAuditLogs and returns the data updated in the database.
     * @param {PriceAuditLogUpdateManyAndReturnArgs} args - Arguments to update many PriceAuditLogs.
     * @example
     * // Update many PriceAuditLogs
     * const priceAuditLog = await prisma.priceAuditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PriceAuditLogs and only return the `id`
     * const priceAuditLogWithIdOnly = await prisma.priceAuditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PriceAuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceAuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PriceAuditLog.
     * @param {PriceAuditLogUpsertArgs} args - Arguments to update or create a PriceAuditLog.
     * @example
     * // Update or create a PriceAuditLog
     * const priceAuditLog = await prisma.priceAuditLog.upsert({
     *   create: {
     *     // ... data to create a PriceAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends PriceAuditLogUpsertArgs>(args: SelectSubset<T, PriceAuditLogUpsertArgs<ExtArgs>>): Prisma__PriceAuditLogClient<$Result.GetResult<Prisma.$PriceAuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PriceAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAuditLogCountArgs} args - Arguments to filter PriceAuditLogs to count.
     * @example
     * // Count the number of PriceAuditLogs
     * const count = await prisma.priceAuditLog.count({
     *   where: {
     *     // ... the filter for the PriceAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends PriceAuditLogCountArgs>(
      args?: Subset<T, PriceAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceAuditLogAggregateArgs>(args: Subset<T, PriceAuditLogAggregateArgs>): Prisma.PrismaPromise<GetPriceAuditLogAggregateType<T>>

    /**
     * Group by PriceAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: PriceAuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceAuditLog model
   */
  readonly fields: PriceAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PriceAuditLog model
   */
  interface PriceAuditLogFieldRefs {
    readonly id: FieldRef<"PriceAuditLog", 'String'>
    readonly productId: FieldRef<"PriceAuditLog", 'String'>
    readonly oldPrice: FieldRef<"PriceAuditLog", 'Float'>
    readonly newPrice: FieldRef<"PriceAuditLog", 'Float'>
    readonly timestamp: FieldRef<"PriceAuditLog", 'DateTime'>
    readonly type: FieldRef<"PriceAuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PriceAuditLog findUnique
   */
  export type PriceAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAuditLog
     */
    select?: PriceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAuditLog
     */
    omit?: PriceAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which PriceAuditLog to fetch.
     */
    where: PriceAuditLogWhereUniqueInput
  }

  /**
   * PriceAuditLog findUniqueOrThrow
   */
  export type PriceAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAuditLog
     */
    select?: PriceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAuditLog
     */
    omit?: PriceAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which PriceAuditLog to fetch.
     */
    where: PriceAuditLogWhereUniqueInput
  }

  /**
   * PriceAuditLog findFirst
   */
  export type PriceAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAuditLog
     */
    select?: PriceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAuditLog
     */
    omit?: PriceAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which PriceAuditLog to fetch.
     */
    where?: PriceAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAuditLogs to fetch.
     */
    orderBy?: PriceAuditLogOrderByWithRelationInput | PriceAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceAuditLogs.
     */
    cursor?: PriceAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceAuditLogs.
     */
    distinct?: PriceAuditLogScalarFieldEnum | PriceAuditLogScalarFieldEnum[]
  }

  /**
   * PriceAuditLog findFirstOrThrow
   */
  export type PriceAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAuditLog
     */
    select?: PriceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAuditLog
     */
    omit?: PriceAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which PriceAuditLog to fetch.
     */
    where?: PriceAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAuditLogs to fetch.
     */
    orderBy?: PriceAuditLogOrderByWithRelationInput | PriceAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceAuditLogs.
     */
    cursor?: PriceAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceAuditLogs.
     */
    distinct?: PriceAuditLogScalarFieldEnum | PriceAuditLogScalarFieldEnum[]
  }

  /**
   * PriceAuditLog findMany
   */
  export type PriceAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAuditLog
     */
    select?: PriceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAuditLog
     */
    omit?: PriceAuditLogOmit<ExtArgs> | null
    /**
     * Filter, which PriceAuditLogs to fetch.
     */
    where?: PriceAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAuditLogs to fetch.
     */
    orderBy?: PriceAuditLogOrderByWithRelationInput | PriceAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceAuditLogs.
     */
    cursor?: PriceAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAuditLogs.
     */
    skip?: number
    distinct?: PriceAuditLogScalarFieldEnum | PriceAuditLogScalarFieldEnum[]
  }

  /**
   * PriceAuditLog create
   */
  export type PriceAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAuditLog
     */
    select?: PriceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAuditLog
     */
    omit?: PriceAuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a PriceAuditLog.
     */
    data: XOR<PriceAuditLogCreateInput, PriceAuditLogUncheckedCreateInput>
  }

  /**
   * PriceAuditLog createMany
   */
  export type PriceAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceAuditLogs.
     */
    data: PriceAuditLogCreateManyInput | PriceAuditLogCreateManyInput[]
  }

  /**
   * PriceAuditLog createManyAndReturn
   */
  export type PriceAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAuditLog
     */
    select?: PriceAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAuditLog
     */
    omit?: PriceAuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many PriceAuditLogs.
     */
    data: PriceAuditLogCreateManyInput | PriceAuditLogCreateManyInput[]
  }

  /**
   * PriceAuditLog update
   */
  export type PriceAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAuditLog
     */
    select?: PriceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAuditLog
     */
    omit?: PriceAuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a PriceAuditLog.
     */
    data: XOR<PriceAuditLogUpdateInput, PriceAuditLogUncheckedUpdateInput>
    /**
     * Choose, which PriceAuditLog to update.
     */
    where: PriceAuditLogWhereUniqueInput
  }

  /**
   * PriceAuditLog updateMany
   */
  export type PriceAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceAuditLogs.
     */
    data: XOR<PriceAuditLogUpdateManyMutationInput, PriceAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which PriceAuditLogs to update
     */
    where?: PriceAuditLogWhereInput
    /**
     * Limit how many PriceAuditLogs to update.
     */
    limit?: number
  }

  /**
   * PriceAuditLog updateManyAndReturn
   */
  export type PriceAuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAuditLog
     */
    select?: PriceAuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAuditLog
     */
    omit?: PriceAuditLogOmit<ExtArgs> | null
    /**
     * The data used to update PriceAuditLogs.
     */
    data: XOR<PriceAuditLogUpdateManyMutationInput, PriceAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which PriceAuditLogs to update
     */
    where?: PriceAuditLogWhereInput
    /**
     * Limit how many PriceAuditLogs to update.
     */
    limit?: number
  }

  /**
   * PriceAuditLog upsert
   */
  export type PriceAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAuditLog
     */
    select?: PriceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAuditLog
     */
    omit?: PriceAuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the PriceAuditLog to update in case it exists.
     */
    where: PriceAuditLogWhereUniqueInput
    /**
     * In case the PriceAuditLog found by the `where` argument doesn't exist, create a new PriceAuditLog with this data.
     */
    create: XOR<PriceAuditLogCreateInput, PriceAuditLogUncheckedCreateInput>
    /**
     * In case the PriceAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceAuditLogUpdateInput, PriceAuditLogUncheckedUpdateInput>
  }

  /**
   * PriceAuditLog delete
   */
  export type PriceAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAuditLog
     */
    select?: PriceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAuditLog
     */
    omit?: PriceAuditLogOmit<ExtArgs> | null
    /**
     * Filter which PriceAuditLog to delete.
     */
    where: PriceAuditLogWhereUniqueInput
  }

  /**
   * PriceAuditLog deleteMany
   */
  export type PriceAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceAuditLogs to delete
     */
    where?: PriceAuditLogWhereInput
    /**
     * Limit how many PriceAuditLogs to delete.
     */
    limit?: number
  }

  /**
   * PriceAuditLog without action
   */
  export type PriceAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAuditLog
     */
    select?: PriceAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAuditLog
     */
    omit?: PriceAuditLogOmit<ExtArgs> | null
  }


  /**
   * Model GlobalSettings
   */

  export type AggregateGlobalSettings = {
    _count: GlobalSettingsCountAggregateOutputType | null
    _avg: GlobalSettingsAvgAggregateOutputType | null
    _sum: GlobalSettingsSumAggregateOutputType | null
    _min: GlobalSettingsMinAggregateOutputType | null
    _max: GlobalSettingsMaxAggregateOutputType | null
  }

  export type GlobalSettingsAvgAggregateOutputType = {
    id: number | null
  }

  export type GlobalSettingsSumAggregateOutputType = {
    id: number | null
  }

  export type GlobalSettingsMinAggregateOutputType = {
    id: number | null
    dynamicPricingEnabled: boolean | null
  }

  export type GlobalSettingsMaxAggregateOutputType = {
    id: number | null
    dynamicPricingEnabled: boolean | null
  }

  export type GlobalSettingsCountAggregateOutputType = {
    id: number
    dynamicPricingEnabled: number
    _all: number
  }


  export type GlobalSettingsAvgAggregateInputType = {
    id?: true
  }

  export type GlobalSettingsSumAggregateInputType = {
    id?: true
  }

  export type GlobalSettingsMinAggregateInputType = {
    id?: true
    dynamicPricingEnabled?: true
  }

  export type GlobalSettingsMaxAggregateInputType = {
    id?: true
    dynamicPricingEnabled?: true
  }

  export type GlobalSettingsCountAggregateInputType = {
    id?: true
    dynamicPricingEnabled?: true
    _all?: true
  }

  export type GlobalSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalSettings to aggregate.
     */
    where?: GlobalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingsOrderByWithRelationInput | GlobalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalSettings
    **/
    _count?: true | GlobalSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlobalSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlobalSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalSettingsMaxAggregateInputType
  }

  export type GetGlobalSettingsAggregateType<T extends GlobalSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalSettings[P]>
      : GetScalarType<T[P], AggregateGlobalSettings[P]>
  }




  export type GlobalSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalSettingsWhereInput
    orderBy?: GlobalSettingsOrderByWithAggregationInput | GlobalSettingsOrderByWithAggregationInput[]
    by: GlobalSettingsScalarFieldEnum[] | GlobalSettingsScalarFieldEnum
    having?: GlobalSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalSettingsCountAggregateInputType | true
    _avg?: GlobalSettingsAvgAggregateInputType
    _sum?: GlobalSettingsSumAggregateInputType
    _min?: GlobalSettingsMinAggregateInputType
    _max?: GlobalSettingsMaxAggregateInputType
  }

  export type GlobalSettingsGroupByOutputType = {
    id: number
    dynamicPricingEnabled: boolean
    _count: GlobalSettingsCountAggregateOutputType | null
    _avg: GlobalSettingsAvgAggregateOutputType | null
    _sum: GlobalSettingsSumAggregateOutputType | null
    _min: GlobalSettingsMinAggregateOutputType | null
    _max: GlobalSettingsMaxAggregateOutputType | null
  }

  type GetGlobalSettingsGroupByPayload<T extends GlobalSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalSettingsGroupByOutputType[P]>
        }
      >
    >


  export type GlobalSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dynamicPricingEnabled?: boolean
  }, ExtArgs["result"]["globalSettings"]>

  export type GlobalSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dynamicPricingEnabled?: boolean
  }, ExtArgs["result"]["globalSettings"]>

  export type GlobalSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dynamicPricingEnabled?: boolean
  }, ExtArgs["result"]["globalSettings"]>

  export type GlobalSettingsSelectScalar = {
    id?: boolean
    dynamicPricingEnabled?: boolean
  }

  export type GlobalSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dynamicPricingEnabled", ExtArgs["result"]["globalSettings"]>

  export type $GlobalSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dynamicPricingEnabled: boolean
    }, ExtArgs["result"]["globalSettings"]>
    composites: {}
  }

  type GlobalSettingsGetPayload<S extends boolean | null | undefined | GlobalSettingsDefaultArgs> = $Result.GetResult<Prisma.$GlobalSettingsPayload, S>

  type GlobalSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalSettingsCountAggregateInputType | true
    }

  export interface GlobalSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalSettings'], meta: { name: 'GlobalSettings' } }
    /**
     * Find zero or one GlobalSettings that matches the filter.
     * @param {GlobalSettingsFindUniqueArgs} args - Arguments to find a GlobalSettings
     * @example
     * // Get one GlobalSettings
     * const globalSettings = await prisma.globalSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalSettingsFindUniqueArgs>(args: SelectSubset<T, GlobalSettingsFindUniqueArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalSettingsFindUniqueOrThrowArgs} args - Arguments to find a GlobalSettings
     * @example
     * // Get one GlobalSettings
     * const globalSettings = await prisma.globalSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsFindFirstArgs} args - Arguments to find a GlobalSettings
     * @example
     * // Get one GlobalSettings
     * const globalSettings = await prisma.globalSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalSettingsFindFirstArgs>(args?: SelectSubset<T, GlobalSettingsFindFirstArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsFindFirstOrThrowArgs} args - Arguments to find a GlobalSettings
     * @example
     * // Get one GlobalSettings
     * const globalSettings = await prisma.globalSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalSettings
     * const globalSettings = await prisma.globalSettings.findMany()
     * 
     * // Get first 10 GlobalSettings
     * const globalSettings = await prisma.globalSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalSettingsWithIdOnly = await prisma.globalSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalSettingsFindManyArgs>(args?: SelectSubset<T, GlobalSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalSettings.
     * @param {GlobalSettingsCreateArgs} args - Arguments to create a GlobalSettings.
     * @example
     * // Create one GlobalSettings
     * const GlobalSettings = await prisma.globalSettings.create({
     *   data: {
     *     // ... data to create a GlobalSettings
     *   }
     * })
     * 
     */
    create<T extends GlobalSettingsCreateArgs>(args: SelectSubset<T, GlobalSettingsCreateArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalSettings.
     * @param {GlobalSettingsCreateManyArgs} args - Arguments to create many GlobalSettings.
     * @example
     * // Create many GlobalSettings
     * const globalSettings = await prisma.globalSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalSettingsCreateManyArgs>(args?: SelectSubset<T, GlobalSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalSettings and returns the data saved in the database.
     * @param {GlobalSettingsCreateManyAndReturnArgs} args - Arguments to create many GlobalSettings.
     * @example
     * // Create many GlobalSettings
     * const globalSettings = await prisma.globalSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalSettings and only return the `id`
     * const globalSettingsWithIdOnly = await prisma.globalSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlobalSettings.
     * @param {GlobalSettingsDeleteArgs} args - Arguments to delete one GlobalSettings.
     * @example
     * // Delete one GlobalSettings
     * const GlobalSettings = await prisma.globalSettings.delete({
     *   where: {
     *     // ... filter to delete one GlobalSettings
     *   }
     * })
     * 
     */
    delete<T extends GlobalSettingsDeleteArgs>(args: SelectSubset<T, GlobalSettingsDeleteArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalSettings.
     * @param {GlobalSettingsUpdateArgs} args - Arguments to update one GlobalSettings.
     * @example
     * // Update one GlobalSettings
     * const globalSettings = await prisma.globalSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalSettingsUpdateArgs>(args: SelectSubset<T, GlobalSettingsUpdateArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalSettings.
     * @param {GlobalSettingsDeleteManyArgs} args - Arguments to filter GlobalSettings to delete.
     * @example
     * // Delete a few GlobalSettings
     * const { count } = await prisma.globalSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalSettingsDeleteManyArgs>(args?: SelectSubset<T, GlobalSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalSettings
     * const globalSettings = await prisma.globalSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalSettingsUpdateManyArgs>(args: SelectSubset<T, GlobalSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalSettings and returns the data updated in the database.
     * @param {GlobalSettingsUpdateManyAndReturnArgs} args - Arguments to update many GlobalSettings.
     * @example
     * // Update many GlobalSettings
     * const globalSettings = await prisma.globalSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlobalSettings and only return the `id`
     * const globalSettingsWithIdOnly = await prisma.globalSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlobalSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, GlobalSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlobalSettings.
     * @param {GlobalSettingsUpsertArgs} args - Arguments to update or create a GlobalSettings.
     * @example
     * // Update or create a GlobalSettings
     * const globalSettings = await prisma.globalSettings.upsert({
     *   create: {
     *     // ... data to create a GlobalSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalSettings we want to update
     *   }
     * })
     */
    upsert<T extends GlobalSettingsUpsertArgs>(args: SelectSubset<T, GlobalSettingsUpsertArgs<ExtArgs>>): Prisma__GlobalSettingsClient<$Result.GetResult<Prisma.$GlobalSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsCountArgs} args - Arguments to filter GlobalSettings to count.
     * @example
     * // Count the number of GlobalSettings
     * const count = await prisma.globalSettings.count({
     *   where: {
     *     // ... the filter for the GlobalSettings we want to count
     *   }
     * })
    **/
    count<T extends GlobalSettingsCountArgs>(
      args?: Subset<T, GlobalSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GlobalSettingsAggregateArgs>(args: Subset<T, GlobalSettingsAggregateArgs>): Prisma.PrismaPromise<GetGlobalSettingsAggregateType<T>>

    /**
     * Group by GlobalSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GlobalSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalSettingsGroupByArgs['orderBy'] }
        : { orderBy?: GlobalSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GlobalSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalSettings model
   */
  readonly fields: GlobalSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GlobalSettings model
   */
  interface GlobalSettingsFieldRefs {
    readonly id: FieldRef<"GlobalSettings", 'Int'>
    readonly dynamicPricingEnabled: FieldRef<"GlobalSettings", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GlobalSettings findUnique
   */
  export type GlobalSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where: GlobalSettingsWhereUniqueInput
  }

  /**
   * GlobalSettings findUniqueOrThrow
   */
  export type GlobalSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where: GlobalSettingsWhereUniqueInput
  }

  /**
   * GlobalSettings findFirst
   */
  export type GlobalSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where?: GlobalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingsOrderByWithRelationInput | GlobalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalSettings.
     */
    cursor?: GlobalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalSettings.
     */
    distinct?: GlobalSettingsScalarFieldEnum | GlobalSettingsScalarFieldEnum[]
  }

  /**
   * GlobalSettings findFirstOrThrow
   */
  export type GlobalSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where?: GlobalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingsOrderByWithRelationInput | GlobalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalSettings.
     */
    cursor?: GlobalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalSettings.
     */
    distinct?: GlobalSettingsScalarFieldEnum | GlobalSettingsScalarFieldEnum[]
  }

  /**
   * GlobalSettings findMany
   */
  export type GlobalSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * Filter, which GlobalSettings to fetch.
     */
    where?: GlobalSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalSettings to fetch.
     */
    orderBy?: GlobalSettingsOrderByWithRelationInput | GlobalSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalSettings.
     */
    cursor?: GlobalSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalSettings.
     */
    skip?: number
    distinct?: GlobalSettingsScalarFieldEnum | GlobalSettingsScalarFieldEnum[]
  }

  /**
   * GlobalSettings create
   */
  export type GlobalSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a GlobalSettings.
     */
    data?: XOR<GlobalSettingsCreateInput, GlobalSettingsUncheckedCreateInput>
  }

  /**
   * GlobalSettings createMany
   */
  export type GlobalSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalSettings.
     */
    data: GlobalSettingsCreateManyInput | GlobalSettingsCreateManyInput[]
  }

  /**
   * GlobalSettings createManyAndReturn
   */
  export type GlobalSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many GlobalSettings.
     */
    data: GlobalSettingsCreateManyInput | GlobalSettingsCreateManyInput[]
  }

  /**
   * GlobalSettings update
   */
  export type GlobalSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a GlobalSettings.
     */
    data: XOR<GlobalSettingsUpdateInput, GlobalSettingsUncheckedUpdateInput>
    /**
     * Choose, which GlobalSettings to update.
     */
    where: GlobalSettingsWhereUniqueInput
  }

  /**
   * GlobalSettings updateMany
   */
  export type GlobalSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalSettings.
     */
    data: XOR<GlobalSettingsUpdateManyMutationInput, GlobalSettingsUncheckedUpdateManyInput>
    /**
     * Filter which GlobalSettings to update
     */
    where?: GlobalSettingsWhereInput
    /**
     * Limit how many GlobalSettings to update.
     */
    limit?: number
  }

  /**
   * GlobalSettings updateManyAndReturn
   */
  export type GlobalSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * The data used to update GlobalSettings.
     */
    data: XOR<GlobalSettingsUpdateManyMutationInput, GlobalSettingsUncheckedUpdateManyInput>
    /**
     * Filter which GlobalSettings to update
     */
    where?: GlobalSettingsWhereInput
    /**
     * Limit how many GlobalSettings to update.
     */
    limit?: number
  }

  /**
   * GlobalSettings upsert
   */
  export type GlobalSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the GlobalSettings to update in case it exists.
     */
    where: GlobalSettingsWhereUniqueInput
    /**
     * In case the GlobalSettings found by the `where` argument doesn't exist, create a new GlobalSettings with this data.
     */
    create: XOR<GlobalSettingsCreateInput, GlobalSettingsUncheckedCreateInput>
    /**
     * In case the GlobalSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalSettingsUpdateInput, GlobalSettingsUncheckedUpdateInput>
  }

  /**
   * GlobalSettings delete
   */
  export type GlobalSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
    /**
     * Filter which GlobalSettings to delete.
     */
    where: GlobalSettingsWhereUniqueInput
  }

  /**
   * GlobalSettings deleteMany
   */
  export type GlobalSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalSettings to delete
     */
    where?: GlobalSettingsWhereInput
    /**
     * Limit how many GlobalSettings to delete.
     */
    limit?: number
  }

  /**
   * GlobalSettings without action
   */
  export type GlobalSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalSettings
     */
    select?: GlobalSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalSettings
     */
    omit?: GlobalSettingsOmit<ExtArgs> | null
  }


  /**
   * Model ProductMetrics
   */

  export type AggregateProductMetrics = {
    _count: ProductMetricsCountAggregateOutputType | null
    _avg: ProductMetricsAvgAggregateOutputType | null
    _sum: ProductMetricsSumAggregateOutputType | null
    _min: ProductMetricsMinAggregateOutputType | null
    _max: ProductMetricsMaxAggregateOutputType | null
  }

  export type ProductMetricsAvgAggregateOutputType = {
    inventory: number | null
    cartAdds: number | null
    views: number | null
    timeSinceListing: number | null
    recentSalesVolume: number | null
    cartAbandonmentRate: number | null
  }

  export type ProductMetricsSumAggregateOutputType = {
    inventory: number | null
    cartAdds: number | null
    views: number | null
    timeSinceListing: number | null
    recentSalesVolume: number | null
    cartAbandonmentRate: number | null
  }

  export type ProductMetricsMinAggregateOutputType = {
    id: string | null
    productId: string | null
    inventory: number | null
    cartAdds: number | null
    views: number | null
    timeSinceListing: number | null
    recentSalesVolume: number | null
    cartAbandonmentRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMetricsMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    inventory: number | null
    cartAdds: number | null
    views: number | null
    timeSinceListing: number | null
    recentSalesVolume: number | null
    cartAbandonmentRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMetricsCountAggregateOutputType = {
    id: number
    productId: number
    inventory: number
    cartAdds: number
    views: number
    timeSinceListing: number
    recentSalesVolume: number
    cartAbandonmentRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductMetricsAvgAggregateInputType = {
    inventory?: true
    cartAdds?: true
    views?: true
    timeSinceListing?: true
    recentSalesVolume?: true
    cartAbandonmentRate?: true
  }

  export type ProductMetricsSumAggregateInputType = {
    inventory?: true
    cartAdds?: true
    views?: true
    timeSinceListing?: true
    recentSalesVolume?: true
    cartAbandonmentRate?: true
  }

  export type ProductMetricsMinAggregateInputType = {
    id?: true
    productId?: true
    inventory?: true
    cartAdds?: true
    views?: true
    timeSinceListing?: true
    recentSalesVolume?: true
    cartAbandonmentRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMetricsMaxAggregateInputType = {
    id?: true
    productId?: true
    inventory?: true
    cartAdds?: true
    views?: true
    timeSinceListing?: true
    recentSalesVolume?: true
    cartAbandonmentRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMetricsCountAggregateInputType = {
    id?: true
    productId?: true
    inventory?: true
    cartAdds?: true
    views?: true
    timeSinceListing?: true
    recentSalesVolume?: true
    cartAbandonmentRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMetrics to aggregate.
     */
    where?: ProductMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMetrics to fetch.
     */
    orderBy?: ProductMetricsOrderByWithRelationInput | ProductMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductMetrics
    **/
    _count?: true | ProductMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMetricsMaxAggregateInputType
  }

  export type GetProductMetricsAggregateType<T extends ProductMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateProductMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductMetrics[P]>
      : GetScalarType<T[P], AggregateProductMetrics[P]>
  }




  export type ProductMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMetricsWhereInput
    orderBy?: ProductMetricsOrderByWithAggregationInput | ProductMetricsOrderByWithAggregationInput[]
    by: ProductMetricsScalarFieldEnum[] | ProductMetricsScalarFieldEnum
    having?: ProductMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductMetricsCountAggregateInputType | true
    _avg?: ProductMetricsAvgAggregateInputType
    _sum?: ProductMetricsSumAggregateInputType
    _min?: ProductMetricsMinAggregateInputType
    _max?: ProductMetricsMaxAggregateInputType
  }

  export type ProductMetricsGroupByOutputType = {
    id: string
    productId: string
    inventory: number
    cartAdds: number
    views: number
    timeSinceListing: number
    recentSalesVolume: number
    cartAbandonmentRate: number
    createdAt: Date
    updatedAt: Date
    _count: ProductMetricsCountAggregateOutputType | null
    _avg: ProductMetricsAvgAggregateOutputType | null
    _sum: ProductMetricsSumAggregateOutputType | null
    _min: ProductMetricsMinAggregateOutputType | null
    _max: ProductMetricsMaxAggregateOutputType | null
  }

  type GetProductMetricsGroupByPayload<T extends ProductMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductMetricsGroupByOutputType[P]>
        }
      >
    >


  export type ProductMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    inventory?: boolean
    cartAdds?: boolean
    views?: boolean
    timeSinceListing?: boolean
    recentSalesVolume?: boolean
    cartAbandonmentRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productMetrics"]>

  export type ProductMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    inventory?: boolean
    cartAdds?: boolean
    views?: boolean
    timeSinceListing?: boolean
    recentSalesVolume?: boolean
    cartAbandonmentRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productMetrics"]>

  export type ProductMetricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    inventory?: boolean
    cartAdds?: boolean
    views?: boolean
    timeSinceListing?: boolean
    recentSalesVolume?: boolean
    cartAbandonmentRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productMetrics"]>

  export type ProductMetricsSelectScalar = {
    id?: boolean
    productId?: boolean
    inventory?: boolean
    cartAdds?: boolean
    views?: boolean
    timeSinceListing?: boolean
    recentSalesVolume?: boolean
    cartAbandonmentRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductMetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "inventory" | "cartAdds" | "views" | "timeSinceListing" | "recentSalesVolume" | "cartAbandonmentRate" | "createdAt" | "updatedAt", ExtArgs["result"]["productMetrics"]>

  export type $ProductMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductMetrics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      inventory: number
      cartAdds: number
      views: number
      timeSinceListing: number
      recentSalesVolume: number
      cartAbandonmentRate: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productMetrics"]>
    composites: {}
  }

  type ProductMetricsGetPayload<S extends boolean | null | undefined | ProductMetricsDefaultArgs> = $Result.GetResult<Prisma.$ProductMetricsPayload, S>

  type ProductMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductMetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductMetricsCountAggregateInputType | true
    }

  export interface ProductMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductMetrics'], meta: { name: 'ProductMetrics' } }
    /**
     * Find zero or one ProductMetrics that matches the filter.
     * @param {ProductMetricsFindUniqueArgs} args - Arguments to find a ProductMetrics
     * @example
     * // Get one ProductMetrics
     * const productMetrics = await prisma.productMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductMetricsFindUniqueArgs>(args: SelectSubset<T, ProductMetricsFindUniqueArgs<ExtArgs>>): Prisma__ProductMetricsClient<$Result.GetResult<Prisma.$ProductMetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductMetrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductMetricsFindUniqueOrThrowArgs} args - Arguments to find a ProductMetrics
     * @example
     * // Get one ProductMetrics
     * const productMetrics = await prisma.productMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductMetricsClient<$Result.GetResult<Prisma.$ProductMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetricsFindFirstArgs} args - Arguments to find a ProductMetrics
     * @example
     * // Get one ProductMetrics
     * const productMetrics = await prisma.productMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductMetricsFindFirstArgs>(args?: SelectSubset<T, ProductMetricsFindFirstArgs<ExtArgs>>): Prisma__ProductMetricsClient<$Result.GetResult<Prisma.$ProductMetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetricsFindFirstOrThrowArgs} args - Arguments to find a ProductMetrics
     * @example
     * // Get one ProductMetrics
     * const productMetrics = await prisma.productMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductMetricsClient<$Result.GetResult<Prisma.$ProductMetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductMetrics
     * const productMetrics = await prisma.productMetrics.findMany()
     * 
     * // Get first 10 ProductMetrics
     * const productMetrics = await prisma.productMetrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productMetricsWithIdOnly = await prisma.productMetrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductMetricsFindManyArgs>(args?: SelectSubset<T, ProductMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductMetrics.
     * @param {ProductMetricsCreateArgs} args - Arguments to create a ProductMetrics.
     * @example
     * // Create one ProductMetrics
     * const ProductMetrics = await prisma.productMetrics.create({
     *   data: {
     *     // ... data to create a ProductMetrics
     *   }
     * })
     * 
     */
    create<T extends ProductMetricsCreateArgs>(args: SelectSubset<T, ProductMetricsCreateArgs<ExtArgs>>): Prisma__ProductMetricsClient<$Result.GetResult<Prisma.$ProductMetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductMetrics.
     * @param {ProductMetricsCreateManyArgs} args - Arguments to create many ProductMetrics.
     * @example
     * // Create many ProductMetrics
     * const productMetrics = await prisma.productMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductMetricsCreateManyArgs>(args?: SelectSubset<T, ProductMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductMetrics and returns the data saved in the database.
     * @param {ProductMetricsCreateManyAndReturnArgs} args - Arguments to create many ProductMetrics.
     * @example
     * // Create many ProductMetrics
     * const productMetrics = await prisma.productMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductMetrics and only return the `id`
     * const productMetricsWithIdOnly = await prisma.productMetrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductMetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMetricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductMetrics.
     * @param {ProductMetricsDeleteArgs} args - Arguments to delete one ProductMetrics.
     * @example
     * // Delete one ProductMetrics
     * const ProductMetrics = await prisma.productMetrics.delete({
     *   where: {
     *     // ... filter to delete one ProductMetrics
     *   }
     * })
     * 
     */
    delete<T extends ProductMetricsDeleteArgs>(args: SelectSubset<T, ProductMetricsDeleteArgs<ExtArgs>>): Prisma__ProductMetricsClient<$Result.GetResult<Prisma.$ProductMetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductMetrics.
     * @param {ProductMetricsUpdateArgs} args - Arguments to update one ProductMetrics.
     * @example
     * // Update one ProductMetrics
     * const productMetrics = await prisma.productMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductMetricsUpdateArgs>(args: SelectSubset<T, ProductMetricsUpdateArgs<ExtArgs>>): Prisma__ProductMetricsClient<$Result.GetResult<Prisma.$ProductMetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductMetrics.
     * @param {ProductMetricsDeleteManyArgs} args - Arguments to filter ProductMetrics to delete.
     * @example
     * // Delete a few ProductMetrics
     * const { count } = await prisma.productMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductMetricsDeleteManyArgs>(args?: SelectSubset<T, ProductMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductMetrics
     * const productMetrics = await prisma.productMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductMetricsUpdateManyArgs>(args: SelectSubset<T, ProductMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductMetrics and returns the data updated in the database.
     * @param {ProductMetricsUpdateManyAndReturnArgs} args - Arguments to update many ProductMetrics.
     * @example
     * // Update many ProductMetrics
     * const productMetrics = await prisma.productMetrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductMetrics and only return the `id`
     * const productMetricsWithIdOnly = await prisma.productMetrics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductMetricsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductMetricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMetricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductMetrics.
     * @param {ProductMetricsUpsertArgs} args - Arguments to update or create a ProductMetrics.
     * @example
     * // Update or create a ProductMetrics
     * const productMetrics = await prisma.productMetrics.upsert({
     *   create: {
     *     // ... data to create a ProductMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductMetrics we want to update
     *   }
     * })
     */
    upsert<T extends ProductMetricsUpsertArgs>(args: SelectSubset<T, ProductMetricsUpsertArgs<ExtArgs>>): Prisma__ProductMetricsClient<$Result.GetResult<Prisma.$ProductMetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetricsCountArgs} args - Arguments to filter ProductMetrics to count.
     * @example
     * // Count the number of ProductMetrics
     * const count = await prisma.productMetrics.count({
     *   where: {
     *     // ... the filter for the ProductMetrics we want to count
     *   }
     * })
    **/
    count<T extends ProductMetricsCountArgs>(
      args?: Subset<T, ProductMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductMetricsAggregateArgs>(args: Subset<T, ProductMetricsAggregateArgs>): Prisma.PrismaPromise<GetProductMetricsAggregateType<T>>

    /**
     * Group by ProductMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetricsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductMetricsGroupByArgs['orderBy'] }
        : { orderBy?: ProductMetricsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductMetrics model
   */
  readonly fields: ProductMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductMetrics model
   */
  interface ProductMetricsFieldRefs {
    readonly id: FieldRef<"ProductMetrics", 'String'>
    readonly productId: FieldRef<"ProductMetrics", 'String'>
    readonly inventory: FieldRef<"ProductMetrics", 'Int'>
    readonly cartAdds: FieldRef<"ProductMetrics", 'Int'>
    readonly views: FieldRef<"ProductMetrics", 'Int'>
    readonly timeSinceListing: FieldRef<"ProductMetrics", 'Int'>
    readonly recentSalesVolume: FieldRef<"ProductMetrics", 'Int'>
    readonly cartAbandonmentRate: FieldRef<"ProductMetrics", 'Float'>
    readonly createdAt: FieldRef<"ProductMetrics", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductMetrics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductMetrics findUnique
   */
  export type ProductMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetrics
     */
    select?: ProductMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetrics
     */
    omit?: ProductMetricsOmit<ExtArgs> | null
    /**
     * Filter, which ProductMetrics to fetch.
     */
    where: ProductMetricsWhereUniqueInput
  }

  /**
   * ProductMetrics findUniqueOrThrow
   */
  export type ProductMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetrics
     */
    select?: ProductMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetrics
     */
    omit?: ProductMetricsOmit<ExtArgs> | null
    /**
     * Filter, which ProductMetrics to fetch.
     */
    where: ProductMetricsWhereUniqueInput
  }

  /**
   * ProductMetrics findFirst
   */
  export type ProductMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetrics
     */
    select?: ProductMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetrics
     */
    omit?: ProductMetricsOmit<ExtArgs> | null
    /**
     * Filter, which ProductMetrics to fetch.
     */
    where?: ProductMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMetrics to fetch.
     */
    orderBy?: ProductMetricsOrderByWithRelationInput | ProductMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMetrics.
     */
    cursor?: ProductMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMetrics.
     */
    distinct?: ProductMetricsScalarFieldEnum | ProductMetricsScalarFieldEnum[]
  }

  /**
   * ProductMetrics findFirstOrThrow
   */
  export type ProductMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetrics
     */
    select?: ProductMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetrics
     */
    omit?: ProductMetricsOmit<ExtArgs> | null
    /**
     * Filter, which ProductMetrics to fetch.
     */
    where?: ProductMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMetrics to fetch.
     */
    orderBy?: ProductMetricsOrderByWithRelationInput | ProductMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMetrics.
     */
    cursor?: ProductMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMetrics.
     */
    distinct?: ProductMetricsScalarFieldEnum | ProductMetricsScalarFieldEnum[]
  }

  /**
   * ProductMetrics findMany
   */
  export type ProductMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetrics
     */
    select?: ProductMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetrics
     */
    omit?: ProductMetricsOmit<ExtArgs> | null
    /**
     * Filter, which ProductMetrics to fetch.
     */
    where?: ProductMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMetrics to fetch.
     */
    orderBy?: ProductMetricsOrderByWithRelationInput | ProductMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductMetrics.
     */
    cursor?: ProductMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMetrics.
     */
    skip?: number
    distinct?: ProductMetricsScalarFieldEnum | ProductMetricsScalarFieldEnum[]
  }

  /**
   * ProductMetrics create
   */
  export type ProductMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetrics
     */
    select?: ProductMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetrics
     */
    omit?: ProductMetricsOmit<ExtArgs> | null
    /**
     * The data needed to create a ProductMetrics.
     */
    data: XOR<ProductMetricsCreateInput, ProductMetricsUncheckedCreateInput>
  }

  /**
   * ProductMetrics createMany
   */
  export type ProductMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductMetrics.
     */
    data: ProductMetricsCreateManyInput | ProductMetricsCreateManyInput[]
  }

  /**
   * ProductMetrics createManyAndReturn
   */
  export type ProductMetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetrics
     */
    select?: ProductMetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetrics
     */
    omit?: ProductMetricsOmit<ExtArgs> | null
    /**
     * The data used to create many ProductMetrics.
     */
    data: ProductMetricsCreateManyInput | ProductMetricsCreateManyInput[]
  }

  /**
   * ProductMetrics update
   */
  export type ProductMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetrics
     */
    select?: ProductMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetrics
     */
    omit?: ProductMetricsOmit<ExtArgs> | null
    /**
     * The data needed to update a ProductMetrics.
     */
    data: XOR<ProductMetricsUpdateInput, ProductMetricsUncheckedUpdateInput>
    /**
     * Choose, which ProductMetrics to update.
     */
    where: ProductMetricsWhereUniqueInput
  }

  /**
   * ProductMetrics updateMany
   */
  export type ProductMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductMetrics.
     */
    data: XOR<ProductMetricsUpdateManyMutationInput, ProductMetricsUncheckedUpdateManyInput>
    /**
     * Filter which ProductMetrics to update
     */
    where?: ProductMetricsWhereInput
    /**
     * Limit how many ProductMetrics to update.
     */
    limit?: number
  }

  /**
   * ProductMetrics updateManyAndReturn
   */
  export type ProductMetricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetrics
     */
    select?: ProductMetricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetrics
     */
    omit?: ProductMetricsOmit<ExtArgs> | null
    /**
     * The data used to update ProductMetrics.
     */
    data: XOR<ProductMetricsUpdateManyMutationInput, ProductMetricsUncheckedUpdateManyInput>
    /**
     * Filter which ProductMetrics to update
     */
    where?: ProductMetricsWhereInput
    /**
     * Limit how many ProductMetrics to update.
     */
    limit?: number
  }

  /**
   * ProductMetrics upsert
   */
  export type ProductMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetrics
     */
    select?: ProductMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetrics
     */
    omit?: ProductMetricsOmit<ExtArgs> | null
    /**
     * The filter to search for the ProductMetrics to update in case it exists.
     */
    where: ProductMetricsWhereUniqueInput
    /**
     * In case the ProductMetrics found by the `where` argument doesn't exist, create a new ProductMetrics with this data.
     */
    create: XOR<ProductMetricsCreateInput, ProductMetricsUncheckedCreateInput>
    /**
     * In case the ProductMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductMetricsUpdateInput, ProductMetricsUncheckedUpdateInput>
  }

  /**
   * ProductMetrics delete
   */
  export type ProductMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetrics
     */
    select?: ProductMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetrics
     */
    omit?: ProductMetricsOmit<ExtArgs> | null
    /**
     * Filter which ProductMetrics to delete.
     */
    where: ProductMetricsWhereUniqueInput
  }

  /**
   * ProductMetrics deleteMany
   */
  export type ProductMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMetrics to delete
     */
    where?: ProductMetricsWhereInput
    /**
     * Limit how many ProductMetrics to delete.
     */
    limit?: number
  }

  /**
   * ProductMetrics without action
   */
  export type ProductMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetrics
     */
    select?: ProductMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetrics
     */
    omit?: ProductMetricsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SessionScalarFieldEnum: {
    id: 'id',
    shop: 'shop',
    state: 'state',
    isOnline: 'isOnline',
    scope: 'scope',
    expires: 'expires',
    accessToken: 'accessToken',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    accountOwner: 'accountOwner',
    locale: 'locale',
    collaborator: 'collaborator',
    emailVerified: 'emailVerified'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const ProductPriceBoundaryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    minPrice: 'minPrice',
    maxPrice: 'maxPrice',
    dynamicPricingEnabled: 'dynamicPricingEnabled'
  };

  export type ProductPriceBoundaryScalarFieldEnum = (typeof ProductPriceBoundaryScalarFieldEnum)[keyof typeof ProductPriceBoundaryScalarFieldEnum]


  export const PriceAuditLogScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    oldPrice: 'oldPrice',
    newPrice: 'newPrice',
    timestamp: 'timestamp',
    type: 'type'
  };

  export type PriceAuditLogScalarFieldEnum = (typeof PriceAuditLogScalarFieldEnum)[keyof typeof PriceAuditLogScalarFieldEnum]


  export const GlobalSettingsScalarFieldEnum: {
    id: 'id',
    dynamicPricingEnabled: 'dynamicPricingEnabled'
  };

  export type GlobalSettingsScalarFieldEnum = (typeof GlobalSettingsScalarFieldEnum)[keyof typeof GlobalSettingsScalarFieldEnum]


  export const ProductMetricsScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    inventory: 'inventory',
    cartAdds: 'cartAdds',
    views: 'views',
    timeSinceListing: 'timeSinceListing',
    recentSalesVolume: 'recentSalesVolume',
    cartAbandonmentRate: 'cartAbandonmentRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductMetricsScalarFieldEnum = (typeof ProductMetricsScalarFieldEnum)[keyof typeof ProductMetricsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    shop?: StringFilter<"Session"> | string
    state?: StringFilter<"Session"> | string
    isOnline?: BoolFilter<"Session"> | boolean
    scope?: StringNullableFilter<"Session"> | string | null
    expires?: DateTimeNullableFilter<"Session"> | Date | string | null
    accessToken?: StringFilter<"Session"> | string
    userId?: BigIntNullableFilter<"Session"> | bigint | number | null
    firstName?: StringNullableFilter<"Session"> | string | null
    lastName?: StringNullableFilter<"Session"> | string | null
    email?: StringNullableFilter<"Session"> | string | null
    accountOwner?: BoolFilter<"Session"> | boolean
    locale?: StringNullableFilter<"Session"> | string | null
    collaborator?: BoolNullableFilter<"Session"> | boolean | null
    emailVerified?: BoolNullableFilter<"Session"> | boolean | null
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    shop?: SortOrder
    state?: SortOrder
    isOnline?: SortOrder
    scope?: SortOrderInput | SortOrder
    expires?: SortOrderInput | SortOrder
    accessToken?: SortOrder
    userId?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    accountOwner?: SortOrder
    locale?: SortOrderInput | SortOrder
    collaborator?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    shop?: StringFilter<"Session"> | string
    state?: StringFilter<"Session"> | string
    isOnline?: BoolFilter<"Session"> | boolean
    scope?: StringNullableFilter<"Session"> | string | null
    expires?: DateTimeNullableFilter<"Session"> | Date | string | null
    accessToken?: StringFilter<"Session"> | string
    userId?: BigIntNullableFilter<"Session"> | bigint | number | null
    firstName?: StringNullableFilter<"Session"> | string | null
    lastName?: StringNullableFilter<"Session"> | string | null
    email?: StringNullableFilter<"Session"> | string | null
    accountOwner?: BoolFilter<"Session"> | boolean
    locale?: StringNullableFilter<"Session"> | string | null
    collaborator?: BoolNullableFilter<"Session"> | boolean | null
    emailVerified?: BoolNullableFilter<"Session"> | boolean | null
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    shop?: SortOrder
    state?: SortOrder
    isOnline?: SortOrder
    scope?: SortOrderInput | SortOrder
    expires?: SortOrderInput | SortOrder
    accessToken?: SortOrder
    userId?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    accountOwner?: SortOrder
    locale?: SortOrderInput | SortOrder
    collaborator?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    shop?: StringWithAggregatesFilter<"Session"> | string
    state?: StringWithAggregatesFilter<"Session"> | string
    isOnline?: BoolWithAggregatesFilter<"Session"> | boolean
    scope?: StringNullableWithAggregatesFilter<"Session"> | string | null
    expires?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    accessToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: BigIntNullableWithAggregatesFilter<"Session"> | bigint | number | null
    firstName?: StringNullableWithAggregatesFilter<"Session"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Session"> | string | null
    email?: StringNullableWithAggregatesFilter<"Session"> | string | null
    accountOwner?: BoolWithAggregatesFilter<"Session"> | boolean
    locale?: StringNullableWithAggregatesFilter<"Session"> | string | null
    collaborator?: BoolNullableWithAggregatesFilter<"Session"> | boolean | null
    emailVerified?: BoolNullableWithAggregatesFilter<"Session"> | boolean | null
  }

  export type ProductPriceBoundaryWhereInput = {
    AND?: ProductPriceBoundaryWhereInput | ProductPriceBoundaryWhereInput[]
    OR?: ProductPriceBoundaryWhereInput[]
    NOT?: ProductPriceBoundaryWhereInput | ProductPriceBoundaryWhereInput[]
    id?: StringFilter<"ProductPriceBoundary"> | string
    productId?: StringFilter<"ProductPriceBoundary"> | string
    minPrice?: FloatFilter<"ProductPriceBoundary"> | number
    maxPrice?: FloatFilter<"ProductPriceBoundary"> | number
    dynamicPricingEnabled?: BoolFilter<"ProductPriceBoundary"> | boolean
  }

  export type ProductPriceBoundaryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    dynamicPricingEnabled?: SortOrder
  }

  export type ProductPriceBoundaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId?: string
    AND?: ProductPriceBoundaryWhereInput | ProductPriceBoundaryWhereInput[]
    OR?: ProductPriceBoundaryWhereInput[]
    NOT?: ProductPriceBoundaryWhereInput | ProductPriceBoundaryWhereInput[]
    minPrice?: FloatFilter<"ProductPriceBoundary"> | number
    maxPrice?: FloatFilter<"ProductPriceBoundary"> | number
    dynamicPricingEnabled?: BoolFilter<"ProductPriceBoundary"> | boolean
  }, "id" | "productId">

  export type ProductPriceBoundaryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    dynamicPricingEnabled?: SortOrder
    _count?: ProductPriceBoundaryCountOrderByAggregateInput
    _avg?: ProductPriceBoundaryAvgOrderByAggregateInput
    _max?: ProductPriceBoundaryMaxOrderByAggregateInput
    _min?: ProductPriceBoundaryMinOrderByAggregateInput
    _sum?: ProductPriceBoundarySumOrderByAggregateInput
  }

  export type ProductPriceBoundaryScalarWhereWithAggregatesInput = {
    AND?: ProductPriceBoundaryScalarWhereWithAggregatesInput | ProductPriceBoundaryScalarWhereWithAggregatesInput[]
    OR?: ProductPriceBoundaryScalarWhereWithAggregatesInput[]
    NOT?: ProductPriceBoundaryScalarWhereWithAggregatesInput | ProductPriceBoundaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductPriceBoundary"> | string
    productId?: StringWithAggregatesFilter<"ProductPriceBoundary"> | string
    minPrice?: FloatWithAggregatesFilter<"ProductPriceBoundary"> | number
    maxPrice?: FloatWithAggregatesFilter<"ProductPriceBoundary"> | number
    dynamicPricingEnabled?: BoolWithAggregatesFilter<"ProductPriceBoundary"> | boolean
  }

  export type PriceAuditLogWhereInput = {
    AND?: PriceAuditLogWhereInput | PriceAuditLogWhereInput[]
    OR?: PriceAuditLogWhereInput[]
    NOT?: PriceAuditLogWhereInput | PriceAuditLogWhereInput[]
    id?: StringFilter<"PriceAuditLog"> | string
    productId?: StringFilter<"PriceAuditLog"> | string
    oldPrice?: FloatFilter<"PriceAuditLog"> | number
    newPrice?: FloatFilter<"PriceAuditLog"> | number
    timestamp?: DateTimeFilter<"PriceAuditLog"> | Date | string
    type?: StringFilter<"PriceAuditLog"> | string
  }

  export type PriceAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    oldPrice?: SortOrder
    newPrice?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
  }

  export type PriceAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PriceAuditLogWhereInput | PriceAuditLogWhereInput[]
    OR?: PriceAuditLogWhereInput[]
    NOT?: PriceAuditLogWhereInput | PriceAuditLogWhereInput[]
    productId?: StringFilter<"PriceAuditLog"> | string
    oldPrice?: FloatFilter<"PriceAuditLog"> | number
    newPrice?: FloatFilter<"PriceAuditLog"> | number
    timestamp?: DateTimeFilter<"PriceAuditLog"> | Date | string
    type?: StringFilter<"PriceAuditLog"> | string
  }, "id">

  export type PriceAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    oldPrice?: SortOrder
    newPrice?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    _count?: PriceAuditLogCountOrderByAggregateInput
    _avg?: PriceAuditLogAvgOrderByAggregateInput
    _max?: PriceAuditLogMaxOrderByAggregateInput
    _min?: PriceAuditLogMinOrderByAggregateInput
    _sum?: PriceAuditLogSumOrderByAggregateInput
  }

  export type PriceAuditLogScalarWhereWithAggregatesInput = {
    AND?: PriceAuditLogScalarWhereWithAggregatesInput | PriceAuditLogScalarWhereWithAggregatesInput[]
    OR?: PriceAuditLogScalarWhereWithAggregatesInput[]
    NOT?: PriceAuditLogScalarWhereWithAggregatesInput | PriceAuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PriceAuditLog"> | string
    productId?: StringWithAggregatesFilter<"PriceAuditLog"> | string
    oldPrice?: FloatWithAggregatesFilter<"PriceAuditLog"> | number
    newPrice?: FloatWithAggregatesFilter<"PriceAuditLog"> | number
    timestamp?: DateTimeWithAggregatesFilter<"PriceAuditLog"> | Date | string
    type?: StringWithAggregatesFilter<"PriceAuditLog"> | string
  }

  export type GlobalSettingsWhereInput = {
    AND?: GlobalSettingsWhereInput | GlobalSettingsWhereInput[]
    OR?: GlobalSettingsWhereInput[]
    NOT?: GlobalSettingsWhereInput | GlobalSettingsWhereInput[]
    id?: IntFilter<"GlobalSettings"> | number
    dynamicPricingEnabled?: BoolFilter<"GlobalSettings"> | boolean
  }

  export type GlobalSettingsOrderByWithRelationInput = {
    id?: SortOrder
    dynamicPricingEnabled?: SortOrder
  }

  export type GlobalSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GlobalSettingsWhereInput | GlobalSettingsWhereInput[]
    OR?: GlobalSettingsWhereInput[]
    NOT?: GlobalSettingsWhereInput | GlobalSettingsWhereInput[]
    dynamicPricingEnabled?: BoolFilter<"GlobalSettings"> | boolean
  }, "id">

  export type GlobalSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    dynamicPricingEnabled?: SortOrder
    _count?: GlobalSettingsCountOrderByAggregateInput
    _avg?: GlobalSettingsAvgOrderByAggregateInput
    _max?: GlobalSettingsMaxOrderByAggregateInput
    _min?: GlobalSettingsMinOrderByAggregateInput
    _sum?: GlobalSettingsSumOrderByAggregateInput
  }

  export type GlobalSettingsScalarWhereWithAggregatesInput = {
    AND?: GlobalSettingsScalarWhereWithAggregatesInput | GlobalSettingsScalarWhereWithAggregatesInput[]
    OR?: GlobalSettingsScalarWhereWithAggregatesInput[]
    NOT?: GlobalSettingsScalarWhereWithAggregatesInput | GlobalSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GlobalSettings"> | number
    dynamicPricingEnabled?: BoolWithAggregatesFilter<"GlobalSettings"> | boolean
  }

  export type ProductMetricsWhereInput = {
    AND?: ProductMetricsWhereInput | ProductMetricsWhereInput[]
    OR?: ProductMetricsWhereInput[]
    NOT?: ProductMetricsWhereInput | ProductMetricsWhereInput[]
    id?: StringFilter<"ProductMetrics"> | string
    productId?: StringFilter<"ProductMetrics"> | string
    inventory?: IntFilter<"ProductMetrics"> | number
    cartAdds?: IntFilter<"ProductMetrics"> | number
    views?: IntFilter<"ProductMetrics"> | number
    timeSinceListing?: IntFilter<"ProductMetrics"> | number
    recentSalesVolume?: IntFilter<"ProductMetrics"> | number
    cartAbandonmentRate?: FloatFilter<"ProductMetrics"> | number
    createdAt?: DateTimeFilter<"ProductMetrics"> | Date | string
    updatedAt?: DateTimeFilter<"ProductMetrics"> | Date | string
  }

  export type ProductMetricsOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    inventory?: SortOrder
    cartAdds?: SortOrder
    views?: SortOrder
    timeSinceListing?: SortOrder
    recentSalesVolume?: SortOrder
    cartAbandonmentRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId?: string
    AND?: ProductMetricsWhereInput | ProductMetricsWhereInput[]
    OR?: ProductMetricsWhereInput[]
    NOT?: ProductMetricsWhereInput | ProductMetricsWhereInput[]
    inventory?: IntFilter<"ProductMetrics"> | number
    cartAdds?: IntFilter<"ProductMetrics"> | number
    views?: IntFilter<"ProductMetrics"> | number
    timeSinceListing?: IntFilter<"ProductMetrics"> | number
    recentSalesVolume?: IntFilter<"ProductMetrics"> | number
    cartAbandonmentRate?: FloatFilter<"ProductMetrics"> | number
    createdAt?: DateTimeFilter<"ProductMetrics"> | Date | string
    updatedAt?: DateTimeFilter<"ProductMetrics"> | Date | string
  }, "id" | "productId">

  export type ProductMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    inventory?: SortOrder
    cartAdds?: SortOrder
    views?: SortOrder
    timeSinceListing?: SortOrder
    recentSalesVolume?: SortOrder
    cartAbandonmentRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductMetricsCountOrderByAggregateInput
    _avg?: ProductMetricsAvgOrderByAggregateInput
    _max?: ProductMetricsMaxOrderByAggregateInput
    _min?: ProductMetricsMinOrderByAggregateInput
    _sum?: ProductMetricsSumOrderByAggregateInput
  }

  export type ProductMetricsScalarWhereWithAggregatesInput = {
    AND?: ProductMetricsScalarWhereWithAggregatesInput | ProductMetricsScalarWhereWithAggregatesInput[]
    OR?: ProductMetricsScalarWhereWithAggregatesInput[]
    NOT?: ProductMetricsScalarWhereWithAggregatesInput | ProductMetricsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductMetrics"> | string
    productId?: StringWithAggregatesFilter<"ProductMetrics"> | string
    inventory?: IntWithAggregatesFilter<"ProductMetrics"> | number
    cartAdds?: IntWithAggregatesFilter<"ProductMetrics"> | number
    views?: IntWithAggregatesFilter<"ProductMetrics"> | number
    timeSinceListing?: IntWithAggregatesFilter<"ProductMetrics"> | number
    recentSalesVolume?: IntWithAggregatesFilter<"ProductMetrics"> | number
    cartAbandonmentRate?: FloatWithAggregatesFilter<"ProductMetrics"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductMetrics"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductMetrics"> | Date | string
  }

  export type SessionCreateInput = {
    id: string
    shop: string
    state: string
    isOnline?: boolean
    scope?: string | null
    expires?: Date | string | null
    accessToken: string
    userId?: bigint | number | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    accountOwner?: boolean
    locale?: string | null
    collaborator?: boolean | null
    emailVerified?: boolean | null
  }

  export type SessionUncheckedCreateInput = {
    id: string
    shop: string
    state: string
    isOnline?: boolean
    scope?: string | null
    expires?: Date | string | null
    accessToken: string
    userId?: bigint | number | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    accountOwner?: boolean
    locale?: string | null
    collaborator?: boolean | null
    emailVerified?: boolean | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountOwner?: BoolFieldUpdateOperationsInput | boolean
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    collaborator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountOwner?: BoolFieldUpdateOperationsInput | boolean
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    collaborator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SessionCreateManyInput = {
    id: string
    shop: string
    state: string
    isOnline?: boolean
    scope?: string | null
    expires?: Date | string | null
    accessToken: string
    userId?: bigint | number | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    accountOwner?: boolean
    locale?: string | null
    collaborator?: boolean | null
    emailVerified?: boolean | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountOwner?: BoolFieldUpdateOperationsInput | boolean
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    collaborator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountOwner?: BoolFieldUpdateOperationsInput | boolean
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    collaborator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProductPriceBoundaryCreateInput = {
    id?: string
    productId: string
    minPrice: number
    maxPrice: number
    dynamicPricingEnabled?: boolean
  }

  export type ProductPriceBoundaryUncheckedCreateInput = {
    id?: string
    productId: string
    minPrice: number
    maxPrice: number
    dynamicPricingEnabled?: boolean
  }

  export type ProductPriceBoundaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    minPrice?: FloatFieldUpdateOperationsInput | number
    maxPrice?: FloatFieldUpdateOperationsInput | number
    dynamicPricingEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductPriceBoundaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    minPrice?: FloatFieldUpdateOperationsInput | number
    maxPrice?: FloatFieldUpdateOperationsInput | number
    dynamicPricingEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductPriceBoundaryCreateManyInput = {
    id?: string
    productId: string
    minPrice: number
    maxPrice: number
    dynamicPricingEnabled?: boolean
  }

  export type ProductPriceBoundaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    minPrice?: FloatFieldUpdateOperationsInput | number
    maxPrice?: FloatFieldUpdateOperationsInput | number
    dynamicPricingEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductPriceBoundaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    minPrice?: FloatFieldUpdateOperationsInput | number
    maxPrice?: FloatFieldUpdateOperationsInput | number
    dynamicPricingEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PriceAuditLogCreateInput = {
    id?: string
    productId: string
    oldPrice: number
    newPrice: number
    timestamp?: Date | string
    type?: string
  }

  export type PriceAuditLogUncheckedCreateInput = {
    id?: string
    productId: string
    oldPrice: number
    newPrice: number
    timestamp?: Date | string
    type?: string
  }

  export type PriceAuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    newPrice?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PriceAuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    newPrice?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PriceAuditLogCreateManyInput = {
    id?: string
    productId: string
    oldPrice: number
    newPrice: number
    timestamp?: Date | string
    type?: string
  }

  export type PriceAuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    newPrice?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PriceAuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    oldPrice?: FloatFieldUpdateOperationsInput | number
    newPrice?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type GlobalSettingsCreateInput = {
    id?: number
    dynamicPricingEnabled?: boolean
  }

  export type GlobalSettingsUncheckedCreateInput = {
    id?: number
    dynamicPricingEnabled?: boolean
  }

  export type GlobalSettingsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dynamicPricingEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GlobalSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dynamicPricingEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GlobalSettingsCreateManyInput = {
    id?: number
    dynamicPricingEnabled?: boolean
  }

  export type GlobalSettingsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    dynamicPricingEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GlobalSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dynamicPricingEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductMetricsCreateInput = {
    id?: string
    productId: string
    inventory: number
    cartAdds: number
    views: number
    timeSinceListing: number
    recentSalesVolume: number
    cartAbandonmentRate: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductMetricsUncheckedCreateInput = {
    id?: string
    productId: string
    inventory: number
    cartAdds: number
    views: number
    timeSinceListing: number
    recentSalesVolume: number
    cartAbandonmentRate: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductMetricsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    inventory?: IntFieldUpdateOperationsInput | number
    cartAdds?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    timeSinceListing?: IntFieldUpdateOperationsInput | number
    recentSalesVolume?: IntFieldUpdateOperationsInput | number
    cartAbandonmentRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMetricsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    inventory?: IntFieldUpdateOperationsInput | number
    cartAdds?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    timeSinceListing?: IntFieldUpdateOperationsInput | number
    recentSalesVolume?: IntFieldUpdateOperationsInput | number
    cartAbandonmentRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMetricsCreateManyInput = {
    id?: string
    productId: string
    inventory: number
    cartAdds: number
    views: number
    timeSinceListing: number
    recentSalesVolume: number
    cartAbandonmentRate: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductMetricsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    inventory?: IntFieldUpdateOperationsInput | number
    cartAdds?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    timeSinceListing?: IntFieldUpdateOperationsInput | number
    recentSalesVolume?: IntFieldUpdateOperationsInput | number
    cartAbandonmentRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMetricsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    inventory?: IntFieldUpdateOperationsInput | number
    cartAdds?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    timeSinceListing?: IntFieldUpdateOperationsInput | number
    recentSalesVolume?: IntFieldUpdateOperationsInput | number
    cartAbandonmentRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    shop?: SortOrder
    state?: SortOrder
    isOnline?: SortOrder
    scope?: SortOrder
    expires?: SortOrder
    accessToken?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    accountOwner?: SortOrder
    locale?: SortOrder
    collaborator?: SortOrder
    emailVerified?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    shop?: SortOrder
    state?: SortOrder
    isOnline?: SortOrder
    scope?: SortOrder
    expires?: SortOrder
    accessToken?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    accountOwner?: SortOrder
    locale?: SortOrder
    collaborator?: SortOrder
    emailVerified?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    shop?: SortOrder
    state?: SortOrder
    isOnline?: SortOrder
    scope?: SortOrder
    expires?: SortOrder
    accessToken?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    accountOwner?: SortOrder
    locale?: SortOrder
    collaborator?: SortOrder
    emailVerified?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductPriceBoundaryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    dynamicPricingEnabled?: SortOrder
  }

  export type ProductPriceBoundaryAvgOrderByAggregateInput = {
    minPrice?: SortOrder
    maxPrice?: SortOrder
  }

  export type ProductPriceBoundaryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    dynamicPricingEnabled?: SortOrder
  }

  export type ProductPriceBoundaryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    dynamicPricingEnabled?: SortOrder
  }

  export type ProductPriceBoundarySumOrderByAggregateInput = {
    minPrice?: SortOrder
    maxPrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PriceAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    oldPrice?: SortOrder
    newPrice?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
  }

  export type PriceAuditLogAvgOrderByAggregateInput = {
    oldPrice?: SortOrder
    newPrice?: SortOrder
  }

  export type PriceAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    oldPrice?: SortOrder
    newPrice?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
  }

  export type PriceAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    oldPrice?: SortOrder
    newPrice?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
  }

  export type PriceAuditLogSumOrderByAggregateInput = {
    oldPrice?: SortOrder
    newPrice?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GlobalSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    dynamicPricingEnabled?: SortOrder
  }

  export type GlobalSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GlobalSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    dynamicPricingEnabled?: SortOrder
  }

  export type GlobalSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    dynamicPricingEnabled?: SortOrder
  }

  export type GlobalSettingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProductMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    inventory?: SortOrder
    cartAdds?: SortOrder
    views?: SortOrder
    timeSinceListing?: SortOrder
    recentSalesVolume?: SortOrder
    cartAbandonmentRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMetricsAvgOrderByAggregateInput = {
    inventory?: SortOrder
    cartAdds?: SortOrder
    views?: SortOrder
    timeSinceListing?: SortOrder
    recentSalesVolume?: SortOrder
    cartAbandonmentRate?: SortOrder
  }

  export type ProductMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    inventory?: SortOrder
    cartAdds?: SortOrder
    views?: SortOrder
    timeSinceListing?: SortOrder
    recentSalesVolume?: SortOrder
    cartAbandonmentRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    inventory?: SortOrder
    cartAdds?: SortOrder
    views?: SortOrder
    timeSinceListing?: SortOrder
    recentSalesVolume?: SortOrder
    cartAbandonmentRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMetricsSumOrderByAggregateInput = {
    inventory?: SortOrder
    cartAdds?: SortOrder
    views?: SortOrder
    timeSinceListing?: SortOrder
    recentSalesVolume?: SortOrder
    cartAbandonmentRate?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}