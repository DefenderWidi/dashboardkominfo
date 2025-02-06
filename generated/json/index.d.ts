
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
 * Model JsonFile
 * 
 */
export type JsonFile = $Result.DefaultSelection<Prisma.$JsonFilePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more JsonFiles
 * const jsonFiles = await prisma.jsonFile.findMany()
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
   * // Fetch zero or more JsonFiles
   * const jsonFiles = await prisma.jsonFile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.jsonFile`: Exposes CRUD operations for the **JsonFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JsonFiles
    * const jsonFiles = await prisma.jsonFile.findMany()
    * ```
    */
  get jsonFile(): Prisma.JsonFileDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.3.0
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    JsonFile: 'JsonFile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    jsonDb?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "jsonFile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      JsonFile: {
        payload: Prisma.$JsonFilePayload<ExtArgs>
        fields: Prisma.JsonFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JsonFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JsonFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonFilePayload>
          }
          findFirst: {
            args: Prisma.JsonFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JsonFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonFilePayload>
          }
          findMany: {
            args: Prisma.JsonFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonFilePayload>[]
          }
          create: {
            args: Prisma.JsonFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonFilePayload>
          }
          createMany: {
            args: Prisma.JsonFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JsonFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonFilePayload>
          }
          update: {
            args: Prisma.JsonFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonFilePayload>
          }
          deleteMany: {
            args: Prisma.JsonFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JsonFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JsonFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonFilePayload>
          }
          aggregate: {
            args: Prisma.JsonFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJsonFile>
          }
          groupBy: {
            args: Prisma.JsonFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<JsonFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.JsonFileCountArgs<ExtArgs>
            result: $Utils.Optional<JsonFileCountAggregateOutputType> | number
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
    jsonFile?: JsonFileOmit
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
   * Model JsonFile
   */

  export type AggregateJsonFile = {
    _count: JsonFileCountAggregateOutputType | null
    _avg: JsonFileAvgAggregateOutputType | null
    _sum: JsonFileSumAggregateOutputType | null
    _min: JsonFileMinAggregateOutputType | null
    _max: JsonFileMaxAggregateOutputType | null
  }

  export type JsonFileAvgAggregateOutputType = {
    id: number | null
  }

  export type JsonFileSumAggregateOutputType = {
    id: number | null
  }

  export type JsonFileMinAggregateOutputType = {
    id: number | null
    file_name: string | null
    uploaded_at: Date | null
  }

  export type JsonFileMaxAggregateOutputType = {
    id: number | null
    file_name: string | null
    uploaded_at: Date | null
  }

  export type JsonFileCountAggregateOutputType = {
    id: number
    file_name: number
    content: number
    uploaded_at: number
    _all: number
  }


  export type JsonFileAvgAggregateInputType = {
    id?: true
  }

  export type JsonFileSumAggregateInputType = {
    id?: true
  }

  export type JsonFileMinAggregateInputType = {
    id?: true
    file_name?: true
    uploaded_at?: true
  }

  export type JsonFileMaxAggregateInputType = {
    id?: true
    file_name?: true
    uploaded_at?: true
  }

  export type JsonFileCountAggregateInputType = {
    id?: true
    file_name?: true
    content?: true
    uploaded_at?: true
    _all?: true
  }

  export type JsonFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JsonFile to aggregate.
     */
    where?: JsonFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JsonFiles to fetch.
     */
    orderBy?: JsonFileOrderByWithRelationInput | JsonFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JsonFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JsonFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JsonFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JsonFiles
    **/
    _count?: true | JsonFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JsonFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JsonFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JsonFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JsonFileMaxAggregateInputType
  }

  export type GetJsonFileAggregateType<T extends JsonFileAggregateArgs> = {
        [P in keyof T & keyof AggregateJsonFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJsonFile[P]>
      : GetScalarType<T[P], AggregateJsonFile[P]>
  }




  export type JsonFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JsonFileWhereInput
    orderBy?: JsonFileOrderByWithAggregationInput | JsonFileOrderByWithAggregationInput[]
    by: JsonFileScalarFieldEnum[] | JsonFileScalarFieldEnum
    having?: JsonFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JsonFileCountAggregateInputType | true
    _avg?: JsonFileAvgAggregateInputType
    _sum?: JsonFileSumAggregateInputType
    _min?: JsonFileMinAggregateInputType
    _max?: JsonFileMaxAggregateInputType
  }

  export type JsonFileGroupByOutputType = {
    id: number
    file_name: string
    content: JsonValue
    uploaded_at: Date
    _count: JsonFileCountAggregateOutputType | null
    _avg: JsonFileAvgAggregateOutputType | null
    _sum: JsonFileSumAggregateOutputType | null
    _min: JsonFileMinAggregateOutputType | null
    _max: JsonFileMaxAggregateOutputType | null
  }

  type GetJsonFileGroupByPayload<T extends JsonFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JsonFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JsonFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JsonFileGroupByOutputType[P]>
            : GetScalarType<T[P], JsonFileGroupByOutputType[P]>
        }
      >
    >


  export type JsonFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file_name?: boolean
    content?: boolean
    uploaded_at?: boolean
  }, ExtArgs["result"]["jsonFile"]>



  export type JsonFileSelectScalar = {
    id?: boolean
    file_name?: boolean
    content?: boolean
    uploaded_at?: boolean
  }

  export type JsonFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "file_name" | "content" | "uploaded_at", ExtArgs["result"]["jsonFile"]>

  export type $JsonFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JsonFile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      file_name: string
      content: Prisma.JsonValue
      uploaded_at: Date
    }, ExtArgs["result"]["jsonFile"]>
    composites: {}
  }

  type JsonFileGetPayload<S extends boolean | null | undefined | JsonFileDefaultArgs> = $Result.GetResult<Prisma.$JsonFilePayload, S>

  type JsonFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JsonFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JsonFileCountAggregateInputType | true
    }

  export interface JsonFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JsonFile'], meta: { name: 'JsonFile' } }
    /**
     * Find zero or one JsonFile that matches the filter.
     * @param {JsonFileFindUniqueArgs} args - Arguments to find a JsonFile
     * @example
     * // Get one JsonFile
     * const jsonFile = await prisma.jsonFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JsonFileFindUniqueArgs>(args: SelectSubset<T, JsonFileFindUniqueArgs<ExtArgs>>): Prisma__JsonFileClient<$Result.GetResult<Prisma.$JsonFilePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one JsonFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JsonFileFindUniqueOrThrowArgs} args - Arguments to find a JsonFile
     * @example
     * // Get one JsonFile
     * const jsonFile = await prisma.jsonFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JsonFileFindUniqueOrThrowArgs>(args: SelectSubset<T, JsonFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JsonFileClient<$Result.GetResult<Prisma.$JsonFilePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first JsonFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JsonFileFindFirstArgs} args - Arguments to find a JsonFile
     * @example
     * // Get one JsonFile
     * const jsonFile = await prisma.jsonFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JsonFileFindFirstArgs>(args?: SelectSubset<T, JsonFileFindFirstArgs<ExtArgs>>): Prisma__JsonFileClient<$Result.GetResult<Prisma.$JsonFilePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first JsonFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JsonFileFindFirstOrThrowArgs} args - Arguments to find a JsonFile
     * @example
     * // Get one JsonFile
     * const jsonFile = await prisma.jsonFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JsonFileFindFirstOrThrowArgs>(args?: SelectSubset<T, JsonFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__JsonFileClient<$Result.GetResult<Prisma.$JsonFilePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more JsonFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JsonFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JsonFiles
     * const jsonFiles = await prisma.jsonFile.findMany()
     * 
     * // Get first 10 JsonFiles
     * const jsonFiles = await prisma.jsonFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jsonFileWithIdOnly = await prisma.jsonFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JsonFileFindManyArgs>(args?: SelectSubset<T, JsonFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JsonFilePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a JsonFile.
     * @param {JsonFileCreateArgs} args - Arguments to create a JsonFile.
     * @example
     * // Create one JsonFile
     * const JsonFile = await prisma.jsonFile.create({
     *   data: {
     *     // ... data to create a JsonFile
     *   }
     * })
     * 
     */
    create<T extends JsonFileCreateArgs>(args: SelectSubset<T, JsonFileCreateArgs<ExtArgs>>): Prisma__JsonFileClient<$Result.GetResult<Prisma.$JsonFilePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many JsonFiles.
     * @param {JsonFileCreateManyArgs} args - Arguments to create many JsonFiles.
     * @example
     * // Create many JsonFiles
     * const jsonFile = await prisma.jsonFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JsonFileCreateManyArgs>(args?: SelectSubset<T, JsonFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JsonFile.
     * @param {JsonFileDeleteArgs} args - Arguments to delete one JsonFile.
     * @example
     * // Delete one JsonFile
     * const JsonFile = await prisma.jsonFile.delete({
     *   where: {
     *     // ... filter to delete one JsonFile
     *   }
     * })
     * 
     */
    delete<T extends JsonFileDeleteArgs>(args: SelectSubset<T, JsonFileDeleteArgs<ExtArgs>>): Prisma__JsonFileClient<$Result.GetResult<Prisma.$JsonFilePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one JsonFile.
     * @param {JsonFileUpdateArgs} args - Arguments to update one JsonFile.
     * @example
     * // Update one JsonFile
     * const jsonFile = await prisma.jsonFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JsonFileUpdateArgs>(args: SelectSubset<T, JsonFileUpdateArgs<ExtArgs>>): Prisma__JsonFileClient<$Result.GetResult<Prisma.$JsonFilePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more JsonFiles.
     * @param {JsonFileDeleteManyArgs} args - Arguments to filter JsonFiles to delete.
     * @example
     * // Delete a few JsonFiles
     * const { count } = await prisma.jsonFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JsonFileDeleteManyArgs>(args?: SelectSubset<T, JsonFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JsonFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JsonFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JsonFiles
     * const jsonFile = await prisma.jsonFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JsonFileUpdateManyArgs>(args: SelectSubset<T, JsonFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JsonFile.
     * @param {JsonFileUpsertArgs} args - Arguments to update or create a JsonFile.
     * @example
     * // Update or create a JsonFile
     * const jsonFile = await prisma.jsonFile.upsert({
     *   create: {
     *     // ... data to create a JsonFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JsonFile we want to update
     *   }
     * })
     */
    upsert<T extends JsonFileUpsertArgs>(args: SelectSubset<T, JsonFileUpsertArgs<ExtArgs>>): Prisma__JsonFileClient<$Result.GetResult<Prisma.$JsonFilePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of JsonFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JsonFileCountArgs} args - Arguments to filter JsonFiles to count.
     * @example
     * // Count the number of JsonFiles
     * const count = await prisma.jsonFile.count({
     *   where: {
     *     // ... the filter for the JsonFiles we want to count
     *   }
     * })
    **/
    count<T extends JsonFileCountArgs>(
      args?: Subset<T, JsonFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JsonFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JsonFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JsonFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JsonFileAggregateArgs>(args: Subset<T, JsonFileAggregateArgs>): Prisma.PrismaPromise<GetJsonFileAggregateType<T>>

    /**
     * Group by JsonFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JsonFileGroupByArgs} args - Group by arguments.
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
      T extends JsonFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JsonFileGroupByArgs['orderBy'] }
        : { orderBy?: JsonFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JsonFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJsonFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JsonFile model
   */
  readonly fields: JsonFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JsonFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JsonFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the JsonFile model
   */ 
  interface JsonFileFieldRefs {
    readonly id: FieldRef<"JsonFile", 'Int'>
    readonly file_name: FieldRef<"JsonFile", 'String'>
    readonly content: FieldRef<"JsonFile", 'Json'>
    readonly uploaded_at: FieldRef<"JsonFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JsonFile findUnique
   */
  export type JsonFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonFile
     */
    select?: JsonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonFile
     */
    omit?: JsonFileOmit<ExtArgs> | null
    /**
     * Filter, which JsonFile to fetch.
     */
    where: JsonFileWhereUniqueInput
  }

  /**
   * JsonFile findUniqueOrThrow
   */
  export type JsonFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonFile
     */
    select?: JsonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonFile
     */
    omit?: JsonFileOmit<ExtArgs> | null
    /**
     * Filter, which JsonFile to fetch.
     */
    where: JsonFileWhereUniqueInput
  }

  /**
   * JsonFile findFirst
   */
  export type JsonFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonFile
     */
    select?: JsonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonFile
     */
    omit?: JsonFileOmit<ExtArgs> | null
    /**
     * Filter, which JsonFile to fetch.
     */
    where?: JsonFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JsonFiles to fetch.
     */
    orderBy?: JsonFileOrderByWithRelationInput | JsonFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JsonFiles.
     */
    cursor?: JsonFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JsonFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JsonFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JsonFiles.
     */
    distinct?: JsonFileScalarFieldEnum | JsonFileScalarFieldEnum[]
  }

  /**
   * JsonFile findFirstOrThrow
   */
  export type JsonFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonFile
     */
    select?: JsonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonFile
     */
    omit?: JsonFileOmit<ExtArgs> | null
    /**
     * Filter, which JsonFile to fetch.
     */
    where?: JsonFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JsonFiles to fetch.
     */
    orderBy?: JsonFileOrderByWithRelationInput | JsonFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JsonFiles.
     */
    cursor?: JsonFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JsonFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JsonFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JsonFiles.
     */
    distinct?: JsonFileScalarFieldEnum | JsonFileScalarFieldEnum[]
  }

  /**
   * JsonFile findMany
   */
  export type JsonFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonFile
     */
    select?: JsonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonFile
     */
    omit?: JsonFileOmit<ExtArgs> | null
    /**
     * Filter, which JsonFiles to fetch.
     */
    where?: JsonFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JsonFiles to fetch.
     */
    orderBy?: JsonFileOrderByWithRelationInput | JsonFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JsonFiles.
     */
    cursor?: JsonFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JsonFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JsonFiles.
     */
    skip?: number
    distinct?: JsonFileScalarFieldEnum | JsonFileScalarFieldEnum[]
  }

  /**
   * JsonFile create
   */
  export type JsonFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonFile
     */
    select?: JsonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonFile
     */
    omit?: JsonFileOmit<ExtArgs> | null
    /**
     * The data needed to create a JsonFile.
     */
    data: XOR<JsonFileCreateInput, JsonFileUncheckedCreateInput>
  }

  /**
   * JsonFile createMany
   */
  export type JsonFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JsonFiles.
     */
    data: JsonFileCreateManyInput | JsonFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JsonFile update
   */
  export type JsonFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonFile
     */
    select?: JsonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonFile
     */
    omit?: JsonFileOmit<ExtArgs> | null
    /**
     * The data needed to update a JsonFile.
     */
    data: XOR<JsonFileUpdateInput, JsonFileUncheckedUpdateInput>
    /**
     * Choose, which JsonFile to update.
     */
    where: JsonFileWhereUniqueInput
  }

  /**
   * JsonFile updateMany
   */
  export type JsonFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JsonFiles.
     */
    data: XOR<JsonFileUpdateManyMutationInput, JsonFileUncheckedUpdateManyInput>
    /**
     * Filter which JsonFiles to update
     */
    where?: JsonFileWhereInput
    /**
     * Limit how many JsonFiles to update.
     */
    limit?: number
  }

  /**
   * JsonFile upsert
   */
  export type JsonFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonFile
     */
    select?: JsonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonFile
     */
    omit?: JsonFileOmit<ExtArgs> | null
    /**
     * The filter to search for the JsonFile to update in case it exists.
     */
    where: JsonFileWhereUniqueInput
    /**
     * In case the JsonFile found by the `where` argument doesn't exist, create a new JsonFile with this data.
     */
    create: XOR<JsonFileCreateInput, JsonFileUncheckedCreateInput>
    /**
     * In case the JsonFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JsonFileUpdateInput, JsonFileUncheckedUpdateInput>
  }

  /**
   * JsonFile delete
   */
  export type JsonFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonFile
     */
    select?: JsonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonFile
     */
    omit?: JsonFileOmit<ExtArgs> | null
    /**
     * Filter which JsonFile to delete.
     */
    where: JsonFileWhereUniqueInput
  }

  /**
   * JsonFile deleteMany
   */
  export type JsonFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JsonFiles to delete
     */
    where?: JsonFileWhereInput
    /**
     * Limit how many JsonFiles to delete.
     */
    limit?: number
  }

  /**
   * JsonFile without action
   */
  export type JsonFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonFile
     */
    select?: JsonFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonFile
     */
    omit?: JsonFileOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const JsonFileScalarFieldEnum: {
    id: 'id',
    file_name: 'file_name',
    content: 'content',
    uploaded_at: 'uploaded_at'
  };

  export type JsonFileScalarFieldEnum = (typeof JsonFileScalarFieldEnum)[keyof typeof JsonFileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonFileOrderByRelevanceFieldEnum: {
    file_name: 'file_name'
  };

  export type JsonFileOrderByRelevanceFieldEnum = (typeof JsonFileOrderByRelevanceFieldEnum)[keyof typeof JsonFileOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type JsonFileWhereInput = {
    AND?: JsonFileWhereInput | JsonFileWhereInput[]
    OR?: JsonFileWhereInput[]
    NOT?: JsonFileWhereInput | JsonFileWhereInput[]
    id?: IntFilter<"JsonFile"> | number
    file_name?: StringFilter<"JsonFile"> | string
    content?: JsonFilter<"JsonFile">
    uploaded_at?: DateTimeFilter<"JsonFile"> | Date | string
  }

  export type JsonFileOrderByWithRelationInput = {
    id?: SortOrder
    file_name?: SortOrder
    content?: SortOrder
    uploaded_at?: SortOrder
    _relevance?: JsonFileOrderByRelevanceInput
  }

  export type JsonFileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JsonFileWhereInput | JsonFileWhereInput[]
    OR?: JsonFileWhereInput[]
    NOT?: JsonFileWhereInput | JsonFileWhereInput[]
    file_name?: StringFilter<"JsonFile"> | string
    content?: JsonFilter<"JsonFile">
    uploaded_at?: DateTimeFilter<"JsonFile"> | Date | string
  }, "id">

  export type JsonFileOrderByWithAggregationInput = {
    id?: SortOrder
    file_name?: SortOrder
    content?: SortOrder
    uploaded_at?: SortOrder
    _count?: JsonFileCountOrderByAggregateInput
    _avg?: JsonFileAvgOrderByAggregateInput
    _max?: JsonFileMaxOrderByAggregateInput
    _min?: JsonFileMinOrderByAggregateInput
    _sum?: JsonFileSumOrderByAggregateInput
  }

  export type JsonFileScalarWhereWithAggregatesInput = {
    AND?: JsonFileScalarWhereWithAggregatesInput | JsonFileScalarWhereWithAggregatesInput[]
    OR?: JsonFileScalarWhereWithAggregatesInput[]
    NOT?: JsonFileScalarWhereWithAggregatesInput | JsonFileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JsonFile"> | number
    file_name?: StringWithAggregatesFilter<"JsonFile"> | string
    content?: JsonWithAggregatesFilter<"JsonFile">
    uploaded_at?: DateTimeWithAggregatesFilter<"JsonFile"> | Date | string
  }

  export type JsonFileCreateInput = {
    file_name: string
    content: JsonNullValueInput | InputJsonValue
    uploaded_at?: Date | string
  }

  export type JsonFileUncheckedCreateInput = {
    id?: number
    file_name: string
    content: JsonNullValueInput | InputJsonValue
    uploaded_at?: Date | string
  }

  export type JsonFileUpdateInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JsonFileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JsonFileCreateManyInput = {
    id?: number
    file_name: string
    content: JsonNullValueInput | InputJsonValue
    uploaded_at?: Date | string
  }

  export type JsonFileUpdateManyMutationInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JsonFileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type JsonFileOrderByRelevanceInput = {
    fields: JsonFileOrderByRelevanceFieldEnum | JsonFileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JsonFileCountOrderByAggregateInput = {
    id?: SortOrder
    file_name?: SortOrder
    content?: SortOrder
    uploaded_at?: SortOrder
  }

  export type JsonFileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JsonFileMaxOrderByAggregateInput = {
    id?: SortOrder
    file_name?: SortOrder
    uploaded_at?: SortOrder
  }

  export type JsonFileMinOrderByAggregateInput = {
    id?: SortOrder
    file_name?: SortOrder
    uploaded_at?: SortOrder
  }

  export type JsonFileSumOrderByAggregateInput = {
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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