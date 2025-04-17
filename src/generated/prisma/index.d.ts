/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Account
 *
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>;
/**
 * Model Question
 *
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>;
/**
 * Model Tag
 *
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>;
/**
 * Model QuestionTag
 *
 */
export type QuestionTag = $Result.DefaultSelection<Prisma.$QuestionTagPayload>;
/**
 * Model Answer
 *
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>;
/**
 * Model Vote
 *
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>;
/**
 * Model Collection
 *
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Provider: {
    GOOGLE: 'GOOGLE';
    GITHUB: 'GITHUB';
    PASSWORD: 'PASSWORD';
  };

  export type Provider = (typeof Provider)[keyof typeof Provider];

  export const VoteType: {
    UPVOTE: 'UPVOTE';
    DOWNVOTE: 'DOWNVOTE';
  };

  export type VoteType = (typeof VoteType)[keyof typeof VoteType];
}

export type Provider = $Enums.Provider;

export const Provider: typeof $Enums.Provider;

export type VoteType = $Enums.VoteType;

export const VoteType: typeof $Enums.VoteType;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number },
  ): $Utils.JsPromise<R>;

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(
    command: Prisma.InputJsonObject,
  ): Prisma.PrismaPromise<Prisma.JsonObject>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Questions
   * const questions = await prisma.question.findMany()
   * ```
   */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tags
   * const tags = await prisma.tag.findMany()
   * ```
   */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionTag`: Exposes CRUD operations for the **QuestionTag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more QuestionTags
   * const questionTags = await prisma.questionTag.findMany()
   * ```
   */
  get questionTag(): Prisma.QuestionTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Answers
   * const answers = await prisma.answer.findMany()
   * ```
   */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Votes
   * const votes = await prisma.vote.findMany()
   * ```
   */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Collections
   * const collections = await prisma.collection.findMany()
   * ```
   */
  get collection(): Prisma.CollectionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Account: 'Account';
    Question: 'Question';
    Tag: 'Tag';
    QuestionTag: 'QuestionTag';
    Answer: 'Answer';
    Vote: 'Vote';
    Collection: 'Collection';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'account'
        | 'question'
        | 'tag'
        | 'questionTag'
        | 'answer'
        | 'vote'
        | 'collection';
      txIsolationLevel: never;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>;
        fields: Prisma.AccountFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[];
          };
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAccount>;
          };
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AccountGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.AccountFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.AccountAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>;
            result: $Utils.Optional<AccountCountAggregateOutputType> | number;
          };
        };
      };
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>;
        fields: Prisma.QuestionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>;
          };
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>;
          };
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[];
          };
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>;
          };
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>;
          };
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>;
          };
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>;
          };
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateQuestion>;
          };
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<QuestionGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.QuestionFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.QuestionAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>;
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number;
          };
        };
      };
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>;
        fields: Prisma.TagFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTag>;
          };
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TagGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.TagFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.TagAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.TagCountArgs<ExtArgs>;
            result: $Utils.Optional<TagCountAggregateOutputType> | number;
          };
        };
      };
      QuestionTag: {
        payload: Prisma.$QuestionTagPayload<ExtArgs>;
        fields: Prisma.QuestionTagFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.QuestionTagFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.QuestionTagFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>;
          };
          findFirst: {
            args: Prisma.QuestionTagFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.QuestionTagFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>;
          };
          findMany: {
            args: Prisma.QuestionTagFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>[];
          };
          create: {
            args: Prisma.QuestionTagCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>;
          };
          createMany: {
            args: Prisma.QuestionTagCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.QuestionTagDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>;
          };
          update: {
            args: Prisma.QuestionTagUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>;
          };
          deleteMany: {
            args: Prisma.QuestionTagDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.QuestionTagUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.QuestionTagUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>;
          };
          aggregate: {
            args: Prisma.QuestionTagAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateQuestionTag>;
          };
          groupBy: {
            args: Prisma.QuestionTagGroupByArgs<ExtArgs>;
            result: $Utils.Optional<QuestionTagGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.QuestionTagFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.QuestionTagAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.QuestionTagCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<QuestionTagCountAggregateOutputType>
              | number;
          };
        };
      };
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>;
        fields: Prisma.AnswerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>;
          };
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>;
          };
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[];
          };
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>;
          };
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>;
          };
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>;
          };
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>;
          };
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAnswer>;
          };
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AnswerGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.AnswerFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.AnswerAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>;
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number;
          };
        };
      };
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>;
        fields: Prisma.VoteFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VotePayload>;
          };
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VotePayload>;
          };
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[];
          };
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VotePayload>;
          };
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VotePayload>;
          };
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VotePayload>;
          };
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VotePayload>;
          };
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVote>;
          };
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VoteGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.VoteFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.VoteAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>;
            result: $Utils.Optional<VoteCountAggregateOutputType> | number;
          };
        };
      };
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>;
        fields: Prisma.CollectionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[];
          };
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCollection>;
          };
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CollectionGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.CollectionFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.CollectionAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CollectionCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject;
          result: Prisma.JsonObject;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    account?: AccountOmit;
    question?: QuestionOmit;
    tag?: TagOmit;
    questionTag?: QuestionTagOmit;
    answer?: AnswerOmit;
    vote?: VoteOmit;
    collection?: CollectionOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number;
    questions: number;
    answers: number;
    votes: number;
    Collection: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs;
    questions?: boolean | UserCountOutputTypeCountQuestionsArgs;
    answers?: boolean | UserCountOutputTypeCountAnswersArgs;
    votes?: boolean | UserCountOutputTypeCountVotesArgs;
    Collection?: boolean | UserCountOutputTypeCountCollectionArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AccountWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: QuestionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnswersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AnswerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: VoteWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CollectionWhereInput;
  };

  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number;
    tags: number;
    votes: number;
    Collection: number;
  };

  export type QuestionCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs;
    tags?: boolean | QuestionCountOutputTypeCountTagsArgs;
    votes?: boolean | QuestionCountOutputTypeCountVotesArgs;
    Collection?: boolean | QuestionCountOutputTypeCountCollectionArgs;
  };

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AnswerWhereInput;
  };

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountTagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: QuestionTagWhereInput;
  };

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountVotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: VoteWhereInput;
  };

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountCollectionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CollectionWhereInput;
  };

  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    questions: number;
  };

  export type TagCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    questions?: boolean | TagCountOutputTypeCountQuestionsArgs;
  };

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountQuestionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: QuestionTagWhereInput;
  };

  /**
   * Count Type AnswerCountOutputType
   */

  export type AnswerCountOutputType = {
    votes: number;
  };

  export type AnswerCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    votes?: boolean | AnswerCountOutputTypeCountVotesArgs;
  };

  // Custom InputTypes
  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AnswerCountOutputType
     */
    select?: AnswerCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountVotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: VoteWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    reputation: number | null;
  };

  export type UserSumAggregateOutputType = {
    reputation: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    image: string | null;
    location: string | null;
    portfolio: string | null;
    reputation: number | null;
    createdAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    image: string | null;
    location: string | null;
    portfolio: string | null;
    reputation: number | null;
    createdAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    image: number;
    location: number;
    portfolio: number;
    reputation: number;
    createdAt: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    reputation?: true;
  };

  export type UserSumAggregateInputType = {
    reputation?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    image?: true;
    location?: true;
    portfolio?: true;
    reputation?: true;
    createdAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    image?: true;
    location?: true;
    portfolio?: true;
    reputation?: true;
    createdAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    image?: true;
    location?: true;
    portfolio?: true;
    reputation?: true;
    createdAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    name: string;
    image: string;
    location: string | null;
    portfolio: string | null;
    reputation: number;
    createdAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      image?: boolean;
      location?: boolean;
      portfolio?: boolean;
      reputation?: boolean;
      createdAt?: boolean;
      accounts?: boolean | User$accountsArgs<ExtArgs>;
      questions?: boolean | User$questionsArgs<ExtArgs>;
      answers?: boolean | User$answersArgs<ExtArgs>;
      votes?: boolean | User$votesArgs<ExtArgs>;
      Collection?: boolean | User$CollectionArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    image?: boolean;
    location?: boolean;
    portfolio?: boolean;
    reputation?: boolean;
    createdAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'email'
    | 'name'
    | 'image'
    | 'location'
    | 'portfolio'
    | 'reputation'
    | 'createdAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    accounts?: boolean | User$accountsArgs<ExtArgs>;
    questions?: boolean | User$questionsArgs<ExtArgs>;
    answers?: boolean | User$answersArgs<ExtArgs>;
    votes?: boolean | User$votesArgs<ExtArgs>;
    Collection?: boolean | User$CollectionArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[];
      questions: Prisma.$QuestionPayload<ExtArgs>[];
      answers: Prisma.$AnswerPayload<ExtArgs>[];
      votes: Prisma.$VotePayload<ExtArgs>[];
      Collection: Prisma.$CollectionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        name: string;
        image: string;
        location: string | null;
        portfolio: string | null;
        reputation: number;
        createdAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$accountsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AccountPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    questions<T extends User$questionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$questionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$QuestionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    answers<T extends User$answersArgs<ExtArgs> = {}>(
      args?: Subset<T, User$answersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AnswerPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    votes<T extends User$votesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$votesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$VotePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    Collection<T extends User$CollectionArgs<ExtArgs> = {}>(
      args?: Subset<T, User$CollectionArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CollectionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly image: FieldRef<'User', 'String'>;
    readonly location: FieldRef<'User', 'String'>;
    readonly portfolio: FieldRef<'User', 'String'>;
    readonly reputation: FieldRef<'User', 'Int'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User findRaw
   */
  export type UserFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User.accounts
   */
  export type User$accountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    where?: AccountWhereInput;
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    cursor?: AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * User.questions
   */
  export type User$questionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    where?: QuestionWhereInput;
    orderBy?:
      | QuestionOrderByWithRelationInput
      | QuestionOrderByWithRelationInput[];
    cursor?: QuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[];
  };

  /**
   * User.answers
   */
  export type User$answersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    where?: AnswerWhereInput;
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[];
    cursor?: AnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[];
  };

  /**
   * User.votes
   */
  export type User$votesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null;
    where?: VoteWhereInput;
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[];
    cursor?: VoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[];
  };

  /**
   * User.Collection
   */
  export type User$CollectionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    where?: CollectionWhereInput;
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    cursor?: CollectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
  };

  export type AccountMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    image: string | null;
    password: string | null;
    provider: $Enums.Provider | null;
    providerAccountId: string | null;
    createdAt: Date | null;
  };

  export type AccountMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    image: string | null;
    password: string | null;
    provider: $Enums.Provider | null;
    providerAccountId: string | null;
    createdAt: Date | null;
  };

  export type AccountCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    image: number;
    password: number;
    provider: number;
    providerAccountId: number;
    createdAt: number;
    _all: number;
  };

  export type AccountMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    image?: true;
    password?: true;
    provider?: true;
    providerAccountId?: true;
    createdAt?: true;
  };

  export type AccountMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    image?: true;
    password?: true;
    provider?: true;
    providerAccountId?: true;
    createdAt?: true;
  };

  export type AccountCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    image?: true;
    password?: true;
    provider?: true;
    providerAccountId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type AccountAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Accounts
     **/
    _count?: true | AccountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AccountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AccountMaxAggregateInputType;
  };

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
    [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>;
  };

  export type AccountGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AccountWhereInput;
    orderBy?:
      | AccountOrderByWithAggregationInput
      | AccountOrderByWithAggregationInput[];
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum;
    having?: AccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccountCountAggregateInputType | true;
    _min?: AccountMinAggregateInputType;
    _max?: AccountMaxAggregateInputType;
  };

  export type AccountGroupByOutputType = {
    id: string;
    userId: string;
    name: string;
    image: string | null;
    password: string | null;
    provider: $Enums.Provider;
    providerAccountId: string;
    createdAt: Date;
    _count: AccountCountAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
  };

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AccountGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AccountGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>;
        }
      >
    >;

  export type AccountSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      name?: boolean;
      image?: boolean;
      password?: boolean;
      provider?: boolean;
      providerAccountId?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['account']
  >;

  export type AccountSelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    image?: boolean;
    password?: boolean;
    provider?: boolean;
    providerAccountId?: boolean;
    createdAt?: boolean;
  };

  export type AccountOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'userId'
    | 'name'
    | 'image'
    | 'password'
    | 'provider'
    | 'providerAccountId'
    | 'createdAt',
    ExtArgs['result']['account']
  >;
  export type AccountInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $AccountPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Account';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        name: string;
        image: string | null;
        password: string | null;
        provider: $Enums.Provider;
        providerAccountId: string;
        createdAt: Date;
      },
      ExtArgs['result']['account']
    >;
    composites: {};
  };

  type AccountGetPayload<
    S extends boolean | null | undefined | AccountDefaultArgs,
  > = $Result.GetResult<Prisma.$AccountPayload, S>;

  type AccountCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AccountCountAggregateInputType | true;
  };

  export interface AccountDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Account'];
      meta: { name: 'Account' };
    };
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     *
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     *
     */
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     *
     */
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Accounts that matches the filter.
     * @param {AccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const account = await prisma.account.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AccountFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Account.
     * @param {AccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const account = await prisma.account.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: AccountAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
     **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(
      args: Subset<T, AccountAggregateArgs>,
    ): Prisma.PrismaPromise<GetAccountAggregateType<T>>;

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAccountGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Account model
     */
    readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<'Account', 'String'>;
    readonly userId: FieldRef<'Account', 'String'>;
    readonly name: FieldRef<'Account', 'String'>;
    readonly image: FieldRef<'Account', 'String'>;
    readonly password: FieldRef<'Account', 'String'>;
    readonly provider: FieldRef<'Account', 'Provider'>;
    readonly providerAccountId: FieldRef<'Account', 'String'>;
    readonly createdAt: FieldRef<'Account', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account create
   */
  export type AccountCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>;
  };

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[];
  };

  /**
   * Account update
   */
  export type AccountUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>;
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>;
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput;
    /**
     * Limit how many Accounts to update.
     */
    limit?: number;
  };

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput;
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>;
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>;
  };

  /**
   * Account delete
   */
  export type AccountDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput;
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number;
  };

  /**
   * Account findRaw
   */
  export type AccountFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Account aggregateRaw
   */
  export type AccountAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Account without action
   */
  export type AccountDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
  };

  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null;
    _avg: QuestionAvgAggregateOutputType | null;
    _sum: QuestionSumAggregateOutputType | null;
    _min: QuestionMinAggregateOutputType | null;
    _max: QuestionMaxAggregateOutputType | null;
  };

  export type QuestionAvgAggregateOutputType = {
    views: number | null;
    answersCount: number | null;
  };

  export type QuestionSumAggregateOutputType = {
    views: number | null;
    answersCount: number | null;
  };

  export type QuestionMinAggregateOutputType = {
    id: string | null;
    authorId: string | null;
    summary: string | null;
    description: string | null;
    views: number | null;
    answersCount: number | null;
    createdAt: Date | null;
  };

  export type QuestionMaxAggregateOutputType = {
    id: string | null;
    authorId: string | null;
    summary: string | null;
    description: string | null;
    views: number | null;
    answersCount: number | null;
    createdAt: Date | null;
  };

  export type QuestionCountAggregateOutputType = {
    id: number;
    authorId: number;
    summary: number;
    description: number;
    views: number;
    answersCount: number;
    createdAt: number;
    _all: number;
  };

  export type QuestionAvgAggregateInputType = {
    views?: true;
    answersCount?: true;
  };

  export type QuestionSumAggregateInputType = {
    views?: true;
    answersCount?: true;
  };

  export type QuestionMinAggregateInputType = {
    id?: true;
    authorId?: true;
    summary?: true;
    description?: true;
    views?: true;
    answersCount?: true;
    createdAt?: true;
  };

  export type QuestionMaxAggregateInputType = {
    id?: true;
    authorId?: true;
    summary?: true;
    description?: true;
    views?: true;
    answersCount?: true;
    createdAt?: true;
  };

  export type QuestionCountAggregateInputType = {
    id?: true;
    authorId?: true;
    summary?: true;
    description?: true;
    views?: true;
    answersCount?: true;
    createdAt?: true;
    _all?: true;
  };

  export type QuestionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?:
      | QuestionOrderByWithRelationInput
      | QuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Questions
     **/
    _count?: true | QuestionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: QuestionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: QuestionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: QuestionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: QuestionMaxAggregateInputType;
  };

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
    [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>;
  };

  export type QuestionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: QuestionWhereInput;
    orderBy?:
      | QuestionOrderByWithAggregationInput
      | QuestionOrderByWithAggregationInput[];
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum;
    having?: QuestionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuestionCountAggregateInputType | true;
    _avg?: QuestionAvgAggregateInputType;
    _sum?: QuestionSumAggregateInputType;
    _min?: QuestionMinAggregateInputType;
    _max?: QuestionMaxAggregateInputType;
  };

  export type QuestionGroupByOutputType = {
    id: string;
    authorId: string;
    summary: string;
    description: string;
    views: number;
    answersCount: number;
    createdAt: Date;
    _count: QuestionCountAggregateOutputType | null;
    _avg: QuestionAvgAggregateOutputType | null;
    _sum: QuestionSumAggregateOutputType | null;
    _min: QuestionMinAggregateOutputType | null;
    _max: QuestionMaxAggregateOutputType | null;
  };

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<QuestionGroupByOutputType, T['by']> & {
          [P in keyof T & keyof QuestionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>;
        }
      >
    >;

  export type QuestionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      authorId?: boolean;
      summary?: boolean;
      description?: boolean;
      views?: boolean;
      answersCount?: boolean;
      createdAt?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      answers?: boolean | Question$answersArgs<ExtArgs>;
      tags?: boolean | Question$tagsArgs<ExtArgs>;
      votes?: boolean | Question$votesArgs<ExtArgs>;
      Collection?: boolean | Question$CollectionArgs<ExtArgs>;
      _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['question']
  >;

  export type QuestionSelectScalar = {
    id?: boolean;
    authorId?: boolean;
    summary?: boolean;
    description?: boolean;
    views?: boolean;
    answersCount?: boolean;
    createdAt?: boolean;
  };

  export type QuestionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'authorId'
    | 'summary'
    | 'description'
    | 'views'
    | 'answersCount'
    | 'createdAt',
    ExtArgs['result']['question']
  >;
  export type QuestionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    answers?: boolean | Question$answersArgs<ExtArgs>;
    tags?: boolean | Question$tagsArgs<ExtArgs>;
    votes?: boolean | Question$votesArgs<ExtArgs>;
    Collection?: boolean | Question$CollectionArgs<ExtArgs>;
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $QuestionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Question';
    objects: {
      author: Prisma.$UserPayload<ExtArgs>;
      answers: Prisma.$AnswerPayload<ExtArgs>[];
      tags: Prisma.$QuestionTagPayload<ExtArgs>[];
      votes: Prisma.$VotePayload<ExtArgs>[];
      Collection: Prisma.$CollectionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        authorId: string;
        summary: string;
        description: string;
        views: number;
        answersCount: number;
        createdAt: Date;
      },
      ExtArgs['result']['question']
    >;
    composites: {};
  };

  type QuestionGetPayload<
    S extends boolean | null | undefined | QuestionDefaultArgs,
  > = $Result.GetResult<Prisma.$QuestionPayload, S>;

  type QuestionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuestionCountAggregateInputType | true;
  };

  export interface QuestionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Question'];
      meta: { name: 'Question' };
    };
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(
      args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(
      args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     *
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     *
     */
    findMany<T extends QuestionFindManyArgs>(
      args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     *
     */
    create<T extends QuestionCreateArgs>(
      args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends QuestionCreateManyArgs>(
      args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     *
     */
    delete<T extends QuestionDeleteArgs>(
      args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends QuestionUpdateArgs>(
      args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends QuestionDeleteManyArgs>(
      args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends QuestionUpdateManyArgs>(
      args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(
      args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Questions that matches the filter.
     * @param {QuestionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const question = await prisma.question.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: QuestionFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Question.
     * @param {QuestionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const question = await prisma.question.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: QuestionAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
     **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(
      args: Subset<T, QuestionAggregateArgs>,
    ): Prisma.PrismaPromise<GetQuestionAggregateType<T>>;

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetQuestionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Question model
     */
    readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    answers<T extends Question$answersArgs<ExtArgs> = {}>(
      args?: Subset<T, Question$answersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AnswerPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    tags<T extends Question$tagsArgs<ExtArgs> = {}>(
      args?: Subset<T, Question$tagsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$QuestionTagPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    votes<T extends Question$votesArgs<ExtArgs> = {}>(
      args?: Subset<T, Question$votesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$VotePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    Collection<T extends Question$CollectionArgs<ExtArgs> = {}>(
      args?: Subset<T, Question$CollectionArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CollectionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<'Question', 'String'>;
    readonly authorId: FieldRef<'Question', 'String'>;
    readonly summary: FieldRef<'Question', 'String'>;
    readonly description: FieldRef<'Question', 'String'>;
    readonly views: FieldRef<'Question', 'Int'>;
    readonly answersCount: FieldRef<'Question', 'Int'>;
    readonly createdAt: FieldRef<'Question', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput;
  };

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput;
  };

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?:
      | QuestionOrderByWithRelationInput
      | QuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[];
  };

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?:
      | QuestionOrderByWithRelationInput
      | QuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[];
  };

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?:
      | QuestionOrderByWithRelationInput
      | QuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[];
  };

  /**
   * Question create
   */
  export type QuestionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>;
  };

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[];
  };

  /**
   * Question update
   */
  export type QuestionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>;
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput;
  };

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Questions.
     */
    data: XOR<
      QuestionUpdateManyMutationInput,
      QuestionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput;
    /**
     * Limit how many Questions to update.
     */
    limit?: number;
  };

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput;
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>;
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>;
  };

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput;
  };

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput;
    /**
     * Limit how many Questions to delete.
     */
    limit?: number;
  };

  /**
   * Question findRaw
   */
  export type QuestionFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Question aggregateRaw
   */
  export type QuestionAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Question.answers
   */
  export type Question$answersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    where?: AnswerWhereInput;
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[];
    cursor?: AnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[];
  };

  /**
   * Question.tags
   */
  export type Question$tagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null;
    where?: QuestionTagWhereInput;
    orderBy?:
      | QuestionTagOrderByWithRelationInput
      | QuestionTagOrderByWithRelationInput[];
    cursor?: QuestionTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: QuestionTagScalarFieldEnum | QuestionTagScalarFieldEnum[];
  };

  /**
   * Question.votes
   */
  export type Question$votesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null;
    where?: VoteWhereInput;
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[];
    cursor?: VoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[];
  };

  /**
   * Question.Collection
   */
  export type Question$CollectionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    where?: CollectionWhereInput;
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    cursor?: CollectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
  };

  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null;
    _avg: TagAvgAggregateOutputType | null;
    _sum: TagSumAggregateOutputType | null;
    _min: TagMinAggregateOutputType | null;
    _max: TagMaxAggregateOutputType | null;
  };

  export type TagAvgAggregateOutputType = {
    questionsCount: number | null;
  };

  export type TagSumAggregateOutputType = {
    questionsCount: number | null;
  };

  export type TagMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    questionsCount: number | null;
    createdAt: Date | null;
  };

  export type TagMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    questionsCount: number | null;
    createdAt: Date | null;
  };

  export type TagCountAggregateOutputType = {
    id: number;
    name: number;
    questionsCount: number;
    createdAt: number;
    _all: number;
  };

  export type TagAvgAggregateInputType = {
    questionsCount?: true;
  };

  export type TagSumAggregateInputType = {
    questionsCount?: true;
  };

  export type TagMinAggregateInputType = {
    id?: true;
    name?: true;
    questionsCount?: true;
    createdAt?: true;
  };

  export type TagMaxAggregateInputType = {
    id?: true;
    name?: true;
    questionsCount?: true;
    createdAt?: true;
  };

  export type TagCountAggregateInputType = {
    id?: true;
    name?: true;
    questionsCount?: true;
    createdAt?: true;
    _all?: true;
  };

  export type TagAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tags
     **/
    _count?: true | TagCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TagAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TagSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TagMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TagMaxAggregateInputType;
  };

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
    [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>;
  };

  export type TagGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagWhereInput;
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[];
    by: TagScalarFieldEnum[] | TagScalarFieldEnum;
    having?: TagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TagCountAggregateInputType | true;
    _avg?: TagAvgAggregateInputType;
    _sum?: TagSumAggregateInputType;
    _min?: TagMinAggregateInputType;
    _max?: TagMaxAggregateInputType;
  };

  export type TagGroupByOutputType = {
    id: string;
    name: string;
    questionsCount: number;
    createdAt: Date;
    _count: TagCountAggregateOutputType | null;
    _avg: TagAvgAggregateOutputType | null;
    _sum: TagSumAggregateOutputType | null;
    _min: TagMinAggregateOutputType | null;
    _max: TagMaxAggregateOutputType | null;
  };

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TagGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TagGroupByOutputType[P]>
          : GetScalarType<T[P], TagGroupByOutputType[P]>;
      }
    >
  >;

  export type TagSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      questionsCount?: boolean;
      createdAt?: boolean;
      questions?: boolean | Tag$questionsArgs<ExtArgs>;
      _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['tag']
  >;

  export type TagSelectScalar = {
    id?: boolean;
    name?: boolean;
    questionsCount?: boolean;
    createdAt?: boolean;
  };

  export type TagOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'questionsCount' | 'createdAt',
    ExtArgs['result']['tag']
  >;
  export type TagInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    questions?: boolean | Tag$questionsArgs<ExtArgs>;
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $TagPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Tag';
    objects: {
      questions: Prisma.$QuestionTagPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        questionsCount: number;
        createdAt: Date;
      },
      ExtArgs['result']['tag']
    >;
    composites: {};
  };

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> =
    $Result.GetResult<Prisma.$TagPayload, S>;

  type TagCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TagCountAggregateInputType | true;
  };

  export interface TagDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Tag'];
      meta: { name: 'Tag' };
    };
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(
      args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(
      args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     *
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     *
     */
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TagCreateManyArgs>(
      args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     *
     */
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs<ExtArgs>>,
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Tags that matches the filter.
     * @param {TagFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tag = await prisma.tag.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TagFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Tag.
     * @param {TagAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tag = await prisma.tag.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TagAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
     **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(
      args: Subset<T, TagAggregateArgs>,
    ): Prisma.PrismaPromise<GetTagAggregateType<T>>;

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetTagGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Tag model
     */
    readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    questions<T extends Tag$questionsArgs<ExtArgs> = {}>(
      args?: Subset<T, Tag$questionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$QuestionTagPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<'Tag', 'String'>;
    readonly name: FieldRef<'Tag', 'String'>;
    readonly questionsCount: FieldRef<'Tag', 'Int'>;
    readonly createdAt: FieldRef<'Tag', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag create
   */
  export type TagCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>;
  };

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[];
  };

  /**
   * Tag update
   */
  export type TagUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>;
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput;
    /**
     * Limit how many Tags to update.
     */
    limit?: number;
  };

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput;
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>;
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
  };

  /**
   * Tag delete
   */
  export type TagDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput;
    /**
     * Limit how many Tags to delete.
     */
    limit?: number;
  };

  /**
   * Tag findRaw
   */
  export type TagFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Tag aggregateRaw
   */
  export type TagAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Tag.questions
   */
  export type Tag$questionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null;
    where?: QuestionTagWhereInput;
    orderBy?:
      | QuestionTagOrderByWithRelationInput
      | QuestionTagOrderByWithRelationInput[];
    cursor?: QuestionTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: QuestionTagScalarFieldEnum | QuestionTagScalarFieldEnum[];
  };

  /**
   * Tag without action
   */
  export type TagDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
  };

  /**
   * Model QuestionTag
   */

  export type AggregateQuestionTag = {
    _count: QuestionTagCountAggregateOutputType | null;
    _min: QuestionTagMinAggregateOutputType | null;
    _max: QuestionTagMaxAggregateOutputType | null;
  };

  export type QuestionTagMinAggregateOutputType = {
    id: string | null;
    questionId: string | null;
    tagId: string | null;
    createdAt: Date | null;
  };

  export type QuestionTagMaxAggregateOutputType = {
    id: string | null;
    questionId: string | null;
    tagId: string | null;
    createdAt: Date | null;
  };

  export type QuestionTagCountAggregateOutputType = {
    id: number;
    questionId: number;
    tagId: number;
    createdAt: number;
    _all: number;
  };

  export type QuestionTagMinAggregateInputType = {
    id?: true;
    questionId?: true;
    tagId?: true;
    createdAt?: true;
  };

  export type QuestionTagMaxAggregateInputType = {
    id?: true;
    questionId?: true;
    tagId?: true;
    createdAt?: true;
  };

  export type QuestionTagCountAggregateInputType = {
    id?: true;
    questionId?: true;
    tagId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type QuestionTagAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which QuestionTag to aggregate.
     */
    where?: QuestionTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuestionTags to fetch.
     */
    orderBy?:
      | QuestionTagOrderByWithRelationInput
      | QuestionTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: QuestionTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuestionTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuestionTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned QuestionTags
     **/
    _count?: true | QuestionTagCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: QuestionTagMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: QuestionTagMaxAggregateInputType;
  };

  export type GetQuestionTagAggregateType<T extends QuestionTagAggregateArgs> =
    {
      [P in keyof T & keyof AggregateQuestionTag]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateQuestionTag[P]>
        : GetScalarType<T[P], AggregateQuestionTag[P]>;
    };

  export type QuestionTagGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: QuestionTagWhereInput;
    orderBy?:
      | QuestionTagOrderByWithAggregationInput
      | QuestionTagOrderByWithAggregationInput[];
    by: QuestionTagScalarFieldEnum[] | QuestionTagScalarFieldEnum;
    having?: QuestionTagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuestionTagCountAggregateInputType | true;
    _min?: QuestionTagMinAggregateInputType;
    _max?: QuestionTagMaxAggregateInputType;
  };

  export type QuestionTagGroupByOutputType = {
    id: string;
    questionId: string;
    tagId: string;
    createdAt: Date;
    _count: QuestionTagCountAggregateOutputType | null;
    _min: QuestionTagMinAggregateOutputType | null;
    _max: QuestionTagMaxAggregateOutputType | null;
  };

  type GetQuestionTagGroupByPayload<T extends QuestionTagGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<QuestionTagGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof QuestionTagGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionTagGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionTagGroupByOutputType[P]>;
        }
      >
    >;

  export type QuestionTagSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      questionId?: boolean;
      tagId?: boolean;
      createdAt?: boolean;
      question?: boolean | QuestionDefaultArgs<ExtArgs>;
      tag?: boolean | TagDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['questionTag']
  >;

  export type QuestionTagSelectScalar = {
    id?: boolean;
    questionId?: boolean;
    tagId?: boolean;
    createdAt?: boolean;
  };

  export type QuestionTagOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'questionId' | 'tagId' | 'createdAt',
    ExtArgs['result']['questionTag']
  >;
  export type QuestionTagInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>;
    tag?: boolean | TagDefaultArgs<ExtArgs>;
  };

  export type $QuestionTagPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'QuestionTag';
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>;
      tag: Prisma.$TagPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        questionId: string;
        tagId: string;
        createdAt: Date;
      },
      ExtArgs['result']['questionTag']
    >;
    composites: {};
  };

  type QuestionTagGetPayload<
    S extends boolean | null | undefined | QuestionTagDefaultArgs,
  > = $Result.GetResult<Prisma.$QuestionTagPayload, S>;

  type QuestionTagCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    QuestionTagFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: QuestionTagCountAggregateInputType | true;
  };

  export interface QuestionTagDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['QuestionTag'];
      meta: { name: 'QuestionTag' };
    };
    /**
     * Find zero or one QuestionTag that matches the filter.
     * @param {QuestionTagFindUniqueArgs} args - Arguments to find a QuestionTag
     * @example
     * // Get one QuestionTag
     * const questionTag = await prisma.questionTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionTagFindUniqueArgs>(
      args: SelectSubset<T, QuestionTagFindUniqueArgs<ExtArgs>>,
    ): Prisma__QuestionTagClient<
      $Result.GetResult<
        Prisma.$QuestionTagPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one QuestionTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionTagFindUniqueOrThrowArgs} args - Arguments to find a QuestionTag
     * @example
     * // Get one QuestionTag
     * const questionTag = await prisma.questionTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionTagFindUniqueOrThrowArgs>(
      args: SelectSubset<T, QuestionTagFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__QuestionTagClient<
      $Result.GetResult<
        Prisma.$QuestionTagPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first QuestionTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTagFindFirstArgs} args - Arguments to find a QuestionTag
     * @example
     * // Get one QuestionTag
     * const questionTag = await prisma.questionTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionTagFindFirstArgs>(
      args?: SelectSubset<T, QuestionTagFindFirstArgs<ExtArgs>>,
    ): Prisma__QuestionTagClient<
      $Result.GetResult<
        Prisma.$QuestionTagPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first QuestionTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTagFindFirstOrThrowArgs} args - Arguments to find a QuestionTag
     * @example
     * // Get one QuestionTag
     * const questionTag = await prisma.questionTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionTagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QuestionTagFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__QuestionTagClient<
      $Result.GetResult<
        Prisma.$QuestionTagPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more QuestionTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionTags
     * const questionTags = await prisma.questionTag.findMany()
     *
     * // Get first 10 QuestionTags
     * const questionTags = await prisma.questionTag.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const questionTagWithIdOnly = await prisma.questionTag.findMany({ select: { id: true } })
     *
     */
    findMany<T extends QuestionTagFindManyArgs>(
      args?: SelectSubset<T, QuestionTagFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$QuestionTagPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a QuestionTag.
     * @param {QuestionTagCreateArgs} args - Arguments to create a QuestionTag.
     * @example
     * // Create one QuestionTag
     * const QuestionTag = await prisma.questionTag.create({
     *   data: {
     *     // ... data to create a QuestionTag
     *   }
     * })
     *
     */
    create<T extends QuestionTagCreateArgs>(
      args: SelectSubset<T, QuestionTagCreateArgs<ExtArgs>>,
    ): Prisma__QuestionTagClient<
      $Result.GetResult<
        Prisma.$QuestionTagPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many QuestionTags.
     * @param {QuestionTagCreateManyArgs} args - Arguments to create many QuestionTags.
     * @example
     * // Create many QuestionTags
     * const questionTag = await prisma.questionTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends QuestionTagCreateManyArgs>(
      args?: SelectSubset<T, QuestionTagCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a QuestionTag.
     * @param {QuestionTagDeleteArgs} args - Arguments to delete one QuestionTag.
     * @example
     * // Delete one QuestionTag
     * const QuestionTag = await prisma.questionTag.delete({
     *   where: {
     *     // ... filter to delete one QuestionTag
     *   }
     * })
     *
     */
    delete<T extends QuestionTagDeleteArgs>(
      args: SelectSubset<T, QuestionTagDeleteArgs<ExtArgs>>,
    ): Prisma__QuestionTagClient<
      $Result.GetResult<
        Prisma.$QuestionTagPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one QuestionTag.
     * @param {QuestionTagUpdateArgs} args - Arguments to update one QuestionTag.
     * @example
     * // Update one QuestionTag
     * const questionTag = await prisma.questionTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends QuestionTagUpdateArgs>(
      args: SelectSubset<T, QuestionTagUpdateArgs<ExtArgs>>,
    ): Prisma__QuestionTagClient<
      $Result.GetResult<
        Prisma.$QuestionTagPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more QuestionTags.
     * @param {QuestionTagDeleteManyArgs} args - Arguments to filter QuestionTags to delete.
     * @example
     * // Delete a few QuestionTags
     * const { count } = await prisma.questionTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends QuestionTagDeleteManyArgs>(
      args?: SelectSubset<T, QuestionTagDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more QuestionTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionTags
     * const questionTag = await prisma.questionTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends QuestionTagUpdateManyArgs>(
      args: SelectSubset<T, QuestionTagUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one QuestionTag.
     * @param {QuestionTagUpsertArgs} args - Arguments to update or create a QuestionTag.
     * @example
     * // Update or create a QuestionTag
     * const questionTag = await prisma.questionTag.upsert({
     *   create: {
     *     // ... data to create a QuestionTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionTag we want to update
     *   }
     * })
     */
    upsert<T extends QuestionTagUpsertArgs>(
      args: SelectSubset<T, QuestionTagUpsertArgs<ExtArgs>>,
    ): Prisma__QuestionTagClient<
      $Result.GetResult<
        Prisma.$QuestionTagPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more QuestionTags that matches the filter.
     * @param {QuestionTagFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const questionTag = await prisma.questionTag.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: QuestionTagFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a QuestionTag.
     * @param {QuestionTagAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const questionTag = await prisma.questionTag.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: QuestionTagAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of QuestionTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTagCountArgs} args - Arguments to filter QuestionTags to count.
     * @example
     * // Count the number of QuestionTags
     * const count = await prisma.questionTag.count({
     *   where: {
     *     // ... the filter for the QuestionTags we want to count
     *   }
     * })
     **/
    count<T extends QuestionTagCountArgs>(
      args?: Subset<T, QuestionTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionTagCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a QuestionTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionTagAggregateArgs>(
      args: Subset<T, QuestionTagAggregateArgs>,
    ): Prisma.PrismaPromise<GetQuestionTagAggregateType<T>>;

    /**
     * Group by QuestionTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTagGroupByArgs} args - Group by arguments.
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
      T extends QuestionTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionTagGroupByArgs['orderBy'] }
        : { orderBy?: QuestionTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, QuestionTagGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetQuestionTagGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the QuestionTag model
     */
    readonly fields: QuestionTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionTagClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, QuestionDefaultArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      | $Result.GetResult<
          Prisma.$QuestionPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TagDefaultArgs<ExtArgs>>,
    ): Prisma__TagClient<
      | $Result.GetResult<
          Prisma.$TagPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the QuestionTag model
   */
  interface QuestionTagFieldRefs {
    readonly id: FieldRef<'QuestionTag', 'String'>;
    readonly questionId: FieldRef<'QuestionTag', 'String'>;
    readonly tagId: FieldRef<'QuestionTag', 'String'>;
    readonly createdAt: FieldRef<'QuestionTag', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * QuestionTag findUnique
   */
  export type QuestionTagFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null;
    /**
     * Filter, which QuestionTag to fetch.
     */
    where: QuestionTagWhereUniqueInput;
  };

  /**
   * QuestionTag findUniqueOrThrow
   */
  export type QuestionTagFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null;
    /**
     * Filter, which QuestionTag to fetch.
     */
    where: QuestionTagWhereUniqueInput;
  };

  /**
   * QuestionTag findFirst
   */
  export type QuestionTagFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null;
    /**
     * Filter, which QuestionTag to fetch.
     */
    where?: QuestionTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuestionTags to fetch.
     */
    orderBy?:
      | QuestionTagOrderByWithRelationInput
      | QuestionTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for QuestionTags.
     */
    cursor?: QuestionTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuestionTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuestionTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of QuestionTags.
     */
    distinct?: QuestionTagScalarFieldEnum | QuestionTagScalarFieldEnum[];
  };

  /**
   * QuestionTag findFirstOrThrow
   */
  export type QuestionTagFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null;
    /**
     * Filter, which QuestionTag to fetch.
     */
    where?: QuestionTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuestionTags to fetch.
     */
    orderBy?:
      | QuestionTagOrderByWithRelationInput
      | QuestionTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for QuestionTags.
     */
    cursor?: QuestionTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuestionTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuestionTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of QuestionTags.
     */
    distinct?: QuestionTagScalarFieldEnum | QuestionTagScalarFieldEnum[];
  };

  /**
   * QuestionTag findMany
   */
  export type QuestionTagFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null;
    /**
     * Filter, which QuestionTags to fetch.
     */
    where?: QuestionTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuestionTags to fetch.
     */
    orderBy?:
      | QuestionTagOrderByWithRelationInput
      | QuestionTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing QuestionTags.
     */
    cursor?: QuestionTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuestionTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuestionTags.
     */
    skip?: number;
    distinct?: QuestionTagScalarFieldEnum | QuestionTagScalarFieldEnum[];
  };

  /**
   * QuestionTag create
   */
  export type QuestionTagCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null;
    /**
     * The data needed to create a QuestionTag.
     */
    data: XOR<QuestionTagCreateInput, QuestionTagUncheckedCreateInput>;
  };

  /**
   * QuestionTag createMany
   */
  export type QuestionTagCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many QuestionTags.
     */
    data: QuestionTagCreateManyInput | QuestionTagCreateManyInput[];
  };

  /**
   * QuestionTag update
   */
  export type QuestionTagUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null;
    /**
     * The data needed to update a QuestionTag.
     */
    data: XOR<QuestionTagUpdateInput, QuestionTagUncheckedUpdateInput>;
    /**
     * Choose, which QuestionTag to update.
     */
    where: QuestionTagWhereUniqueInput;
  };

  /**
   * QuestionTag updateMany
   */
  export type QuestionTagUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update QuestionTags.
     */
    data: XOR<
      QuestionTagUpdateManyMutationInput,
      QuestionTagUncheckedUpdateManyInput
    >;
    /**
     * Filter which QuestionTags to update
     */
    where?: QuestionTagWhereInput;
    /**
     * Limit how many QuestionTags to update.
     */
    limit?: number;
  };

  /**
   * QuestionTag upsert
   */
  export type QuestionTagUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null;
    /**
     * The filter to search for the QuestionTag to update in case it exists.
     */
    where: QuestionTagWhereUniqueInput;
    /**
     * In case the QuestionTag found by the `where` argument doesn't exist, create a new QuestionTag with this data.
     */
    create: XOR<QuestionTagCreateInput, QuestionTagUncheckedCreateInput>;
    /**
     * In case the QuestionTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionTagUpdateInput, QuestionTagUncheckedUpdateInput>;
  };

  /**
   * QuestionTag delete
   */
  export type QuestionTagDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null;
    /**
     * Filter which QuestionTag to delete.
     */
    where: QuestionTagWhereUniqueInput;
  };

  /**
   * QuestionTag deleteMany
   */
  export type QuestionTagDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which QuestionTags to delete
     */
    where?: QuestionTagWhereInput;
    /**
     * Limit how many QuestionTags to delete.
     */
    limit?: number;
  };

  /**
   * QuestionTag findRaw
   */
  export type QuestionTagFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * QuestionTag aggregateRaw
   */
  export type QuestionTagAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * QuestionTag without action
   */
  export type QuestionTagDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null;
  };

  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null;
    _min: AnswerMinAggregateOutputType | null;
    _max: AnswerMaxAggregateOutputType | null;
  };

  export type AnswerMinAggregateOutputType = {
    id: string | null;
    authorId: string | null;
    questionId: string | null;
    description: string | null;
    createdAt: Date | null;
  };

  export type AnswerMaxAggregateOutputType = {
    id: string | null;
    authorId: string | null;
    questionId: string | null;
    description: string | null;
    createdAt: Date | null;
  };

  export type AnswerCountAggregateOutputType = {
    id: number;
    authorId: number;
    questionId: number;
    description: number;
    createdAt: number;
    _all: number;
  };

  export type AnswerMinAggregateInputType = {
    id?: true;
    authorId?: true;
    questionId?: true;
    description?: true;
    createdAt?: true;
  };

  export type AnswerMaxAggregateInputType = {
    id?: true;
    authorId?: true;
    questionId?: true;
    description?: true;
    createdAt?: true;
  };

  export type AnswerCountAggregateInputType = {
    id?: true;
    authorId?: true;
    questionId?: true;
    description?: true;
    createdAt?: true;
    _all?: true;
  };

  export type AnswerAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Answers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Answers
     **/
    _count?: true | AnswerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AnswerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AnswerMaxAggregateInputType;
  };

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
    [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>;
  };

  export type AnswerGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AnswerWhereInput;
    orderBy?:
      | AnswerOrderByWithAggregationInput
      | AnswerOrderByWithAggregationInput[];
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum;
    having?: AnswerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnswerCountAggregateInputType | true;
    _min?: AnswerMinAggregateInputType;
    _max?: AnswerMaxAggregateInputType;
  };

  export type AnswerGroupByOutputType = {
    id: string;
    authorId: string;
    questionId: string;
    description: string;
    createdAt: Date;
    _count: AnswerCountAggregateOutputType | null;
    _min: AnswerMinAggregateOutputType | null;
    _max: AnswerMaxAggregateOutputType | null;
  };

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AnswerGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AnswerGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>;
        }
      >
    >;

  export type AnswerSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      authorId?: boolean;
      questionId?: boolean;
      description?: boolean;
      createdAt?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      question?: boolean | QuestionDefaultArgs<ExtArgs>;
      votes?: boolean | Answer$votesArgs<ExtArgs>;
      _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['answer']
  >;

  export type AnswerSelectScalar = {
    id?: boolean;
    authorId?: boolean;
    questionId?: boolean;
    description?: boolean;
    createdAt?: boolean;
  };

  export type AnswerOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'authorId' | 'questionId' | 'description' | 'createdAt',
    ExtArgs['result']['answer']
  >;
  export type AnswerInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    question?: boolean | QuestionDefaultArgs<ExtArgs>;
    votes?: boolean | Answer$votesArgs<ExtArgs>;
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $AnswerPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Answer';
    objects: {
      author: Prisma.$UserPayload<ExtArgs>;
      question: Prisma.$QuestionPayload<ExtArgs>;
      votes: Prisma.$VotePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        authorId: string;
        questionId: string;
        description: string;
        createdAt: Date;
      },
      ExtArgs['result']['answer']
    >;
    composites: {};
  };

  type AnswerGetPayload<
    S extends boolean | null | undefined | AnswerDefaultArgs,
  > = $Result.GetResult<Prisma.$AnswerPayload, S>;

  type AnswerCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnswerCountAggregateInputType | true;
  };

  export interface AnswerDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Answer'];
      meta: { name: 'Answer' };
    };
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(
      args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<
        Prisma.$AnswerPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<
        Prisma.$AnswerPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(
      args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<
        Prisma.$AnswerPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<
        Prisma.$AnswerPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     *
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AnswerFindManyArgs>(
      args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AnswerPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     *
     */
    create<T extends AnswerCreateArgs>(
      args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<
        Prisma.$AnswerPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AnswerCreateManyArgs>(
      args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     *
     */
    delete<T extends AnswerDeleteArgs>(
      args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<
        Prisma.$AnswerPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AnswerUpdateArgs>(
      args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<
        Prisma.$AnswerPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AnswerDeleteManyArgs>(
      args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AnswerUpdateManyArgs>(
      args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(
      args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<
        Prisma.$AnswerPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Answers that matches the filter.
     * @param {AnswerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const answer = await prisma.answer.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AnswerFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Answer.
     * @param {AnswerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const answer = await prisma.answer.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: AnswerAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
     **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(
      args: Subset<T, AnswerAggregateArgs>,
    ): Prisma.PrismaPromise<GetAnswerAggregateType<T>>;

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAnswerGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Answer model
     */
    readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, QuestionDefaultArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      | $Result.GetResult<
          Prisma.$QuestionPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    votes<T extends Answer$votesArgs<ExtArgs> = {}>(
      args?: Subset<T, Answer$votesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$VotePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<'Answer', 'String'>;
    readonly authorId: FieldRef<'Answer', 'String'>;
    readonly questionId: FieldRef<'Answer', 'String'>;
    readonly description: FieldRef<'Answer', 'String'>;
    readonly createdAt: FieldRef<'Answer', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput;
  };

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput;
  };

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Answers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[];
  };

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Answers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[];
  };

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Answers.
     */
    skip?: number;
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[];
  };

  /**
   * Answer create
   */
  export type AnswerCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>;
  };

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[];
  };

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>;
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput;
  };

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>;
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput;
    /**
     * Limit how many Answers to update.
     */
    limit?: number;
  };

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput;
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>;
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>;
  };

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput;
  };

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput;
    /**
     * Limit how many Answers to delete.
     */
    limit?: number;
  };

  /**
   * Answer findRaw
   */
  export type AnswerFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Answer aggregateRaw
   */
  export type AnswerAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Answer.votes
   */
  export type Answer$votesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null;
    where?: VoteWhereInput;
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[];
    cursor?: VoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[];
  };

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
  };

  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null;
    _min: VoteMinAggregateOutputType | null;
    _max: VoteMaxAggregateOutputType | null;
  };

  export type VoteMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    questionId: string | null;
    answerId: string | null;
    type: $Enums.VoteType | null;
    createdAt: Date | null;
  };

  export type VoteMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    questionId: string | null;
    answerId: string | null;
    type: $Enums.VoteType | null;
    createdAt: Date | null;
  };

  export type VoteCountAggregateOutputType = {
    id: number;
    userId: number;
    questionId: number;
    answerId: number;
    type: number;
    createdAt: number;
    _all: number;
  };

  export type VoteMinAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    answerId?: true;
    type?: true;
    createdAt?: true;
  };

  export type VoteMaxAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    answerId?: true;
    type?: true;
    createdAt?: true;
  };

  export type VoteCountAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    answerId?: true;
    type?: true;
    createdAt?: true;
    _all?: true;
  };

  export type VoteAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Votes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Votes
     **/
    _count?: true | VoteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VoteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VoteMaxAggregateInputType;
  };

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
    [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>;
  };

  export type VoteGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: VoteWhereInput;
    orderBy?:
      | VoteOrderByWithAggregationInput
      | VoteOrderByWithAggregationInput[];
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum;
    having?: VoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VoteCountAggregateInputType | true;
    _min?: VoteMinAggregateInputType;
    _max?: VoteMaxAggregateInputType;
  };

  export type VoteGroupByOutputType = {
    id: string;
    userId: string;
    questionId: string | null;
    answerId: string | null;
    type: $Enums.VoteType;
    createdAt: Date;
    _count: VoteCountAggregateOutputType | null;
    _min: VoteMinAggregateOutputType | null;
    _max: VoteMaxAggregateOutputType | null;
  };

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> & {
        [P in keyof T & keyof VoteGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
          : GetScalarType<T[P], VoteGroupByOutputType[P]>;
      }
    >
  >;

  export type VoteSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      questionId?: boolean;
      answerId?: boolean;
      type?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      question?: boolean | Vote$questionArgs<ExtArgs>;
      answer?: boolean | Vote$answerArgs<ExtArgs>;
    },
    ExtArgs['result']['vote']
  >;

  export type VoteSelectScalar = {
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    answerId?: boolean;
    type?: boolean;
    createdAt?: boolean;
  };

  export type VoteOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'questionId' | 'answerId' | 'type' | 'createdAt',
    ExtArgs['result']['vote']
  >;
  export type VoteInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    question?: boolean | Vote$questionArgs<ExtArgs>;
    answer?: boolean | Vote$answerArgs<ExtArgs>;
  };

  export type $VotePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Vote';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      question: Prisma.$QuestionPayload<ExtArgs> | null;
      answer: Prisma.$AnswerPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        questionId: string | null;
        answerId: string | null;
        type: $Enums.VoteType;
        createdAt: Date;
      },
      ExtArgs['result']['vote']
    >;
    composites: {};
  };

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> =
    $Result.GetResult<Prisma.$VotePayload, S>;

  type VoteCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VoteCountAggregateInputType | true;
  };

  export interface VoteDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Vote'];
      meta: { name: 'Vote' };
    };
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(
      args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>,
    ): Prisma__VoteClient<
      $Result.GetResult<
        Prisma.$VotePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(
      args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__VoteClient<
      $Result.GetResult<
        Prisma.$VotePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(
      args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>,
    ): Prisma__VoteClient<
      $Result.GetResult<
        Prisma.$VotePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__VoteClient<
      $Result.GetResult<
        Prisma.$VotePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     *
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VoteFindManyArgs>(
      args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VotePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     *
     */
    create<T extends VoteCreateArgs>(
      args: SelectSubset<T, VoteCreateArgs<ExtArgs>>,
    ): Prisma__VoteClient<
      $Result.GetResult<
        Prisma.$VotePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VoteCreateManyArgs>(
      args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     *
     */
    delete<T extends VoteDeleteArgs>(
      args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>,
    ): Prisma__VoteClient<
      $Result.GetResult<
        Prisma.$VotePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VoteUpdateArgs>(
      args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>,
    ): Prisma__VoteClient<
      $Result.GetResult<
        Prisma.$VotePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VoteDeleteManyArgs>(
      args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VoteUpdateManyArgs>(
      args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(
      args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>,
    ): Prisma__VoteClient<
      $Result.GetResult<
        Prisma.$VotePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Votes that matches the filter.
     * @param {VoteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const vote = await prisma.vote.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VoteFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Vote.
     * @param {VoteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const vote = await prisma.vote.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VoteAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
     **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoteAggregateArgs>(
      args: Subset<T, VoteAggregateArgs>,
    ): Prisma.PrismaPromise<GetVoteAggregateType<T>>;

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
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
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetVoteGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Vote model
     */
    readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    question<T extends Vote$questionArgs<ExtArgs> = {}>(
      args?: Subset<T, Vote$questionArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    answer<T extends Vote$answerArgs<ExtArgs> = {}>(
      args?: Subset<T, Vote$answerArgs<ExtArgs>>,
    ): Prisma__AnswerClient<
      $Result.GetResult<
        Prisma.$AnswerPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<'Vote', 'String'>;
    readonly userId: FieldRef<'Vote', 'String'>;
    readonly questionId: FieldRef<'Vote', 'String'>;
    readonly answerId: FieldRef<'Vote', 'String'>;
    readonly type: FieldRef<'Vote', 'VoteType'>;
    readonly createdAt: FieldRef<'Vote', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null;
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput;
  };

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null;
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput;
  };

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null;
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Votes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[];
  };

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null;
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Votes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[];
  };

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null;
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Votes.
     */
    skip?: number;
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[];
  };

  /**
   * Vote create
   */
  export type VoteCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null;
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>;
  };

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[];
  };

  /**
   * Vote update
   */
  export type VoteUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null;
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>;
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput;
  };

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>;
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput;
    /**
     * Limit how many Votes to update.
     */
    limit?: number;
  };

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null;
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput;
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>;
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>;
  };

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null;
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput;
  };

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput;
    /**
     * Limit how many Votes to delete.
     */
    limit?: number;
  };

  /**
   * Vote findRaw
   */
  export type VoteFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Vote aggregateRaw
   */
  export type VoteAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Vote.question
   */
  export type Vote$questionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    where?: QuestionWhereInput;
  };

  /**
   * Vote.answer
   */
  export type Vote$answerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null;
    where?: AnswerWhereInput;
  };

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null;
  };

  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null;
    _min: CollectionMinAggregateOutputType | null;
    _max: CollectionMaxAggregateOutputType | null;
  };

  export type CollectionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    questionId: string | null;
  };

  export type CollectionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    questionId: string | null;
  };

  export type CollectionCountAggregateOutputType = {
    id: number;
    userId: number;
    questionId: number;
    _all: number;
  };

  export type CollectionMinAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
  };

  export type CollectionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
  };

  export type CollectionCountAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    _all?: true;
  };

  export type CollectionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collections to fetch.
     */
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Collections
     **/
    _count?: true | CollectionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CollectionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CollectionMaxAggregateInputType;
  };

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
    [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>;
  };

  export type CollectionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CollectionWhereInput;
    orderBy?:
      | CollectionOrderByWithAggregationInput
      | CollectionOrderByWithAggregationInput[];
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum;
    having?: CollectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CollectionCountAggregateInputType | true;
    _min?: CollectionMinAggregateInputType;
    _max?: CollectionMaxAggregateInputType;
  };

  export type CollectionGroupByOutputType = {
    id: string;
    userId: string;
    questionId: string | null;
    _count: CollectionCountAggregateOutputType | null;
    _min: CollectionMinAggregateOutputType | null;
    _max: CollectionMaxAggregateOutputType | null;
  };

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CollectionGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CollectionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>;
        }
      >
    >;

  export type CollectionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      questionId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      question?: boolean | Collection$questionArgs<ExtArgs>;
    },
    ExtArgs['result']['collection']
  >;

  export type CollectionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
  };

  export type CollectionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'questionId',
    ExtArgs['result']['collection']
  >;
  export type CollectionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    question?: boolean | Collection$questionArgs<ExtArgs>;
  };

  export type $CollectionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Collection';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      question: Prisma.$QuestionPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        questionId: string | null;
      },
      ExtArgs['result']['collection']
    >;
    composites: {};
  };

  type CollectionGetPayload<
    S extends boolean | null | undefined | CollectionDefaultArgs,
  > = $Result.GetResult<Prisma.$CollectionPayload, S>;

  type CollectionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CollectionFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CollectionCountAggregateInputType | true;
  };

  export interface CollectionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Collection'];
      meta: { name: 'Collection' };
    };
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(
      args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(
      args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     *
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CollectionFindManyArgs>(
      args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     *
     */
    create<T extends CollectionCreateArgs>(
      args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CollectionCreateManyArgs>(
      args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     *
     */
    delete<T extends CollectionDeleteArgs>(
      args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CollectionUpdateArgs>(
      args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CollectionDeleteManyArgs>(
      args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CollectionUpdateManyArgs>(
      args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(
      args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Collections that matches the filter.
     * @param {CollectionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const collection = await prisma.collection.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CollectionFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Collection.
     * @param {CollectionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const collection = await prisma.collection.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: CollectionAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
     **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionAggregateArgs>(
      args: Subset<T, CollectionAggregateArgs>,
    ): Prisma.PrismaPromise<GetCollectionAggregateType<T>>;

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
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
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCollectionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Collection model
     */
    readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    question<T extends Collection$questionArgs<ExtArgs> = {}>(
      args?: Subset<T, Collection$questionArgs<ExtArgs>>,
    ): Prisma__QuestionClient<
      $Result.GetResult<
        Prisma.$QuestionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Collection model
   */
  interface CollectionFieldRefs {
    readonly id: FieldRef<'Collection', 'String'>;
    readonly userId: FieldRef<'Collection', 'String'>;
    readonly questionId: FieldRef<'Collection', 'String'>;
  }

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput;
  };

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput;
  };

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collections to fetch.
     */
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collections to fetch.
     */
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collections to fetch.
     */
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collections.
     */
    skip?: number;
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * Collection create
   */
  export type CollectionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>;
  };

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[];
  };

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>;
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput;
  };

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Collections.
     */
    data: XOR<
      CollectionUpdateManyMutationInput,
      CollectionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput;
    /**
     * Limit how many Collections to update.
     */
    limit?: number;
  };

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput;
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>;
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>;
  };

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput;
  };

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput;
    /**
     * Limit how many Collections to delete.
     */
    limit?: number;
  };

  /**
   * Collection findRaw
   */
  export type CollectionFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Collection aggregateRaw
   */
  export type CollectionAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Collection.question
   */
  export type Collection$questionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null;
    where?: QuestionWhereInput;
  };

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    name: 'name';
    image: 'image';
    location: 'location';
    portfolio: 'portfolio';
    reputation: 'reputation';
    createdAt: 'createdAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const AccountScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    name: 'name';
    image: 'image';
    password: 'password';
    provider: 'provider';
    providerAccountId: 'providerAccountId';
    createdAt: 'createdAt';
  };

  export type AccountScalarFieldEnum =
    (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];

  export const QuestionScalarFieldEnum: {
    id: 'id';
    authorId: 'authorId';
    summary: 'summary';
    description: 'description';
    views: 'views';
    answersCount: 'answersCount';
    createdAt: 'createdAt';
  };

  export type QuestionScalarFieldEnum =
    (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum];

  export const TagScalarFieldEnum: {
    id: 'id';
    name: 'name';
    questionsCount: 'questionsCount';
    createdAt: 'createdAt';
  };

  export type TagScalarFieldEnum =
    (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum];

  export const QuestionTagScalarFieldEnum: {
    id: 'id';
    questionId: 'questionId';
    tagId: 'tagId';
    createdAt: 'createdAt';
  };

  export type QuestionTagScalarFieldEnum =
    (typeof QuestionTagScalarFieldEnum)[keyof typeof QuestionTagScalarFieldEnum];

  export const AnswerScalarFieldEnum: {
    id: 'id';
    authorId: 'authorId';
    questionId: 'questionId';
    description: 'description';
    createdAt: 'createdAt';
  };

  export type AnswerScalarFieldEnum =
    (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum];

  export const VoteScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    questionId: 'questionId';
    answerId: 'answerId';
    type: 'type';
    createdAt: 'createdAt';
  };

  export type VoteScalarFieldEnum =
    (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum];

  export const CollectionScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    questionId: 'questionId';
  };

  export type CollectionScalarFieldEnum =
    (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Provider'
  >;

  /**
   * Reference to a field of type 'Provider[]'
   */
  export type ListEnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Provider[]'
  >;

  /**
   * Reference to a field of type 'VoteType'
   */
  export type EnumVoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'VoteType'
  >;

  /**
   * Reference to a field of type 'VoteType[]'
   */
  export type ListEnumVoteTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'VoteType[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    name?: StringFilter<'User'> | string;
    image?: StringFilter<'User'> | string;
    location?: StringNullableFilter<'User'> | string | null;
    portfolio?: StringNullableFilter<'User'> | string | null;
    reputation?: IntFilter<'User'> | number;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    accounts?: AccountListRelationFilter;
    questions?: QuestionListRelationFilter;
    answers?: AnswerListRelationFilter;
    votes?: VoteListRelationFilter;
    Collection?: CollectionListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    image?: SortOrder;
    location?: SortOrder;
    portfolio?: SortOrder;
    reputation?: SortOrder;
    createdAt?: SortOrder;
    accounts?: AccountOrderByRelationAggregateInput;
    questions?: QuestionOrderByRelationAggregateInput;
    answers?: AnswerOrderByRelationAggregateInput;
    votes?: VoteOrderByRelationAggregateInput;
    Collection?: CollectionOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringFilter<'User'> | string;
      image?: StringFilter<'User'> | string;
      location?: StringNullableFilter<'User'> | string | null;
      portfolio?: StringNullableFilter<'User'> | string | null;
      reputation?: IntFilter<'User'> | number;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      accounts?: AccountListRelationFilter;
      questions?: QuestionListRelationFilter;
      answers?: AnswerListRelationFilter;
      votes?: VoteListRelationFilter;
      Collection?: CollectionListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    image?: SortOrder;
    location?: SortOrder;
    portfolio?: SortOrder;
    reputation?: SortOrder;
    createdAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    name?: StringWithAggregatesFilter<'User'> | string;
    image?: StringWithAggregatesFilter<'User'> | string;
    location?: StringNullableWithAggregatesFilter<'User'> | string | null;
    portfolio?: StringNullableWithAggregatesFilter<'User'> | string | null;
    reputation?: IntWithAggregatesFilter<'User'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[];
    OR?: AccountWhereInput[];
    NOT?: AccountWhereInput | AccountWhereInput[];
    id?: StringFilter<'Account'> | string;
    userId?: StringFilter<'Account'> | string;
    name?: StringFilter<'Account'> | string;
    image?: StringNullableFilter<'Account'> | string | null;
    password?: StringNullableFilter<'Account'> | string | null;
    provider?: EnumProviderFilter<'Account'> | $Enums.Provider;
    providerAccountId?: StringFilter<'Account'> | string;
    createdAt?: DateTimeFilter<'Account'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    image?: SortOrder;
    password?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type AccountWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AccountWhereInput | AccountWhereInput[];
      OR?: AccountWhereInput[];
      NOT?: AccountWhereInput | AccountWhereInput[];
      userId?: StringFilter<'Account'> | string;
      name?: StringFilter<'Account'> | string;
      image?: StringNullableFilter<'Account'> | string | null;
      password?: StringNullableFilter<'Account'> | string | null;
      provider?: EnumProviderFilter<'Account'> | $Enums.Provider;
      providerAccountId?: StringFilter<'Account'> | string;
      createdAt?: DateTimeFilter<'Account'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    image?: SortOrder;
    password?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    createdAt?: SortOrder;
    _count?: AccountCountOrderByAggregateInput;
    _max?: AccountMaxOrderByAggregateInput;
    _min?: AccountMinOrderByAggregateInput;
  };

  export type AccountScalarWhereWithAggregatesInput = {
    AND?:
      | AccountScalarWhereWithAggregatesInput
      | AccountScalarWhereWithAggregatesInput[];
    OR?: AccountScalarWhereWithAggregatesInput[];
    NOT?:
      | AccountScalarWhereWithAggregatesInput
      | AccountScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Account'> | string;
    userId?: StringWithAggregatesFilter<'Account'> | string;
    name?: StringWithAggregatesFilter<'Account'> | string;
    image?: StringNullableWithAggregatesFilter<'Account'> | string | null;
    password?: StringNullableWithAggregatesFilter<'Account'> | string | null;
    provider?: EnumProviderWithAggregatesFilter<'Account'> | $Enums.Provider;
    providerAccountId?: StringWithAggregatesFilter<'Account'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Account'> | Date | string;
  };

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[];
    OR?: QuestionWhereInput[];
    NOT?: QuestionWhereInput | QuestionWhereInput[];
    id?: StringFilter<'Question'> | string;
    authorId?: StringFilter<'Question'> | string;
    summary?: StringFilter<'Question'> | string;
    description?: StringFilter<'Question'> | string;
    views?: IntFilter<'Question'> | number;
    answersCount?: IntFilter<'Question'> | number;
    createdAt?: DateTimeFilter<'Question'> | Date | string;
    author?: XOR<UserScalarRelationFilter, UserWhereInput>;
    answers?: AnswerListRelationFilter;
    tags?: QuestionTagListRelationFilter;
    votes?: VoteListRelationFilter;
    Collection?: CollectionListRelationFilter;
  };

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    summary?: SortOrder;
    description?: SortOrder;
    views?: SortOrder;
    answersCount?: SortOrder;
    createdAt?: SortOrder;
    author?: UserOrderByWithRelationInput;
    answers?: AnswerOrderByRelationAggregateInput;
    tags?: QuestionTagOrderByRelationAggregateInput;
    votes?: VoteOrderByRelationAggregateInput;
    Collection?: CollectionOrderByRelationAggregateInput;
  };

  export type QuestionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: QuestionWhereInput | QuestionWhereInput[];
      OR?: QuestionWhereInput[];
      NOT?: QuestionWhereInput | QuestionWhereInput[];
      authorId?: StringFilter<'Question'> | string;
      summary?: StringFilter<'Question'> | string;
      description?: StringFilter<'Question'> | string;
      views?: IntFilter<'Question'> | number;
      answersCount?: IntFilter<'Question'> | number;
      createdAt?: DateTimeFilter<'Question'> | Date | string;
      author?: XOR<UserScalarRelationFilter, UserWhereInput>;
      answers?: AnswerListRelationFilter;
      tags?: QuestionTagListRelationFilter;
      votes?: VoteListRelationFilter;
      Collection?: CollectionListRelationFilter;
    },
    'id'
  >;

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    summary?: SortOrder;
    description?: SortOrder;
    views?: SortOrder;
    answersCount?: SortOrder;
    createdAt?: SortOrder;
    _count?: QuestionCountOrderByAggregateInput;
    _avg?: QuestionAvgOrderByAggregateInput;
    _max?: QuestionMaxOrderByAggregateInput;
    _min?: QuestionMinOrderByAggregateInput;
    _sum?: QuestionSumOrderByAggregateInput;
  };

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?:
      | QuestionScalarWhereWithAggregatesInput
      | QuestionScalarWhereWithAggregatesInput[];
    OR?: QuestionScalarWhereWithAggregatesInput[];
    NOT?:
      | QuestionScalarWhereWithAggregatesInput
      | QuestionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Question'> | string;
    authorId?: StringWithAggregatesFilter<'Question'> | string;
    summary?: StringWithAggregatesFilter<'Question'> | string;
    description?: StringWithAggregatesFilter<'Question'> | string;
    views?: IntWithAggregatesFilter<'Question'> | number;
    answersCount?: IntWithAggregatesFilter<'Question'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Question'> | Date | string;
  };

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[];
    OR?: TagWhereInput[];
    NOT?: TagWhereInput | TagWhereInput[];
    id?: StringFilter<'Tag'> | string;
    name?: StringFilter<'Tag'> | string;
    questionsCount?: IntFilter<'Tag'> | number;
    createdAt?: DateTimeFilter<'Tag'> | Date | string;
    questions?: QuestionTagListRelationFilter;
  };

  export type TagOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    questionsCount?: SortOrder;
    createdAt?: SortOrder;
    questions?: QuestionTagOrderByRelationAggregateInput;
  };

  export type TagWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TagWhereInput | TagWhereInput[];
      OR?: TagWhereInput[];
      NOT?: TagWhereInput | TagWhereInput[];
      name?: StringFilter<'Tag'> | string;
      questionsCount?: IntFilter<'Tag'> | number;
      createdAt?: DateTimeFilter<'Tag'> | Date | string;
      questions?: QuestionTagListRelationFilter;
    },
    'id'
  >;

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    questionsCount?: SortOrder;
    createdAt?: SortOrder;
    _count?: TagCountOrderByAggregateInput;
    _avg?: TagAvgOrderByAggregateInput;
    _max?: TagMaxOrderByAggregateInput;
    _min?: TagMinOrderByAggregateInput;
    _sum?: TagSumOrderByAggregateInput;
  };

  export type TagScalarWhereWithAggregatesInput = {
    AND?:
      | TagScalarWhereWithAggregatesInput
      | TagScalarWhereWithAggregatesInput[];
    OR?: TagScalarWhereWithAggregatesInput[];
    NOT?:
      | TagScalarWhereWithAggregatesInput
      | TagScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Tag'> | string;
    name?: StringWithAggregatesFilter<'Tag'> | string;
    questionsCount?: IntWithAggregatesFilter<'Tag'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Tag'> | Date | string;
  };

  export type QuestionTagWhereInput = {
    AND?: QuestionTagWhereInput | QuestionTagWhereInput[];
    OR?: QuestionTagWhereInput[];
    NOT?: QuestionTagWhereInput | QuestionTagWhereInput[];
    id?: StringFilter<'QuestionTag'> | string;
    questionId?: StringFilter<'QuestionTag'> | string;
    tagId?: StringFilter<'QuestionTag'> | string;
    createdAt?: DateTimeFilter<'QuestionTag'> | Date | string;
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>;
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>;
  };

  export type QuestionTagOrderByWithRelationInput = {
    id?: SortOrder;
    questionId?: SortOrder;
    tagId?: SortOrder;
    createdAt?: SortOrder;
    question?: QuestionOrderByWithRelationInput;
    tag?: TagOrderByWithRelationInput;
  };

  export type QuestionTagWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: QuestionTagWhereInput | QuestionTagWhereInput[];
      OR?: QuestionTagWhereInput[];
      NOT?: QuestionTagWhereInput | QuestionTagWhereInput[];
      questionId?: StringFilter<'QuestionTag'> | string;
      tagId?: StringFilter<'QuestionTag'> | string;
      createdAt?: DateTimeFilter<'QuestionTag'> | Date | string;
      question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>;
      tag?: XOR<TagScalarRelationFilter, TagWhereInput>;
    },
    'id'
  >;

  export type QuestionTagOrderByWithAggregationInput = {
    id?: SortOrder;
    questionId?: SortOrder;
    tagId?: SortOrder;
    createdAt?: SortOrder;
    _count?: QuestionTagCountOrderByAggregateInput;
    _max?: QuestionTagMaxOrderByAggregateInput;
    _min?: QuestionTagMinOrderByAggregateInput;
  };

  export type QuestionTagScalarWhereWithAggregatesInput = {
    AND?:
      | QuestionTagScalarWhereWithAggregatesInput
      | QuestionTagScalarWhereWithAggregatesInput[];
    OR?: QuestionTagScalarWhereWithAggregatesInput[];
    NOT?:
      | QuestionTagScalarWhereWithAggregatesInput
      | QuestionTagScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'QuestionTag'> | string;
    questionId?: StringWithAggregatesFilter<'QuestionTag'> | string;
    tagId?: StringWithAggregatesFilter<'QuestionTag'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'QuestionTag'> | Date | string;
  };

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[];
    OR?: AnswerWhereInput[];
    NOT?: AnswerWhereInput | AnswerWhereInput[];
    id?: StringFilter<'Answer'> | string;
    authorId?: StringFilter<'Answer'> | string;
    questionId?: StringFilter<'Answer'> | string;
    description?: StringFilter<'Answer'> | string;
    createdAt?: DateTimeFilter<'Answer'> | Date | string;
    author?: XOR<UserScalarRelationFilter, UserWhereInput>;
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>;
    votes?: VoteListRelationFilter;
  };

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    questionId?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    author?: UserOrderByWithRelationInput;
    question?: QuestionOrderByWithRelationInput;
    votes?: VoteOrderByRelationAggregateInput;
  };

  export type AnswerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AnswerWhereInput | AnswerWhereInput[];
      OR?: AnswerWhereInput[];
      NOT?: AnswerWhereInput | AnswerWhereInput[];
      authorId?: StringFilter<'Answer'> | string;
      questionId?: StringFilter<'Answer'> | string;
      description?: StringFilter<'Answer'> | string;
      createdAt?: DateTimeFilter<'Answer'> | Date | string;
      author?: XOR<UserScalarRelationFilter, UserWhereInput>;
      question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>;
      votes?: VoteListRelationFilter;
    },
    'id'
  >;

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    questionId?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
    _count?: AnswerCountOrderByAggregateInput;
    _max?: AnswerMaxOrderByAggregateInput;
    _min?: AnswerMinOrderByAggregateInput;
  };

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?:
      | AnswerScalarWhereWithAggregatesInput
      | AnswerScalarWhereWithAggregatesInput[];
    OR?: AnswerScalarWhereWithAggregatesInput[];
    NOT?:
      | AnswerScalarWhereWithAggregatesInput
      | AnswerScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Answer'> | string;
    authorId?: StringWithAggregatesFilter<'Answer'> | string;
    questionId?: StringWithAggregatesFilter<'Answer'> | string;
    description?: StringWithAggregatesFilter<'Answer'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Answer'> | Date | string;
  };

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[];
    OR?: VoteWhereInput[];
    NOT?: VoteWhereInput | VoteWhereInput[];
    id?: StringFilter<'Vote'> | string;
    userId?: StringFilter<'Vote'> | string;
    questionId?: StringNullableFilter<'Vote'> | string | null;
    answerId?: StringNullableFilter<'Vote'> | string | null;
    type?: EnumVoteTypeFilter<'Vote'> | $Enums.VoteType;
    createdAt?: DateTimeFilter<'Vote'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    question?: XOR<
      QuestionNullableScalarRelationFilter,
      QuestionWhereInput
    > | null;
    answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null;
  };

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    questionId?: SortOrder;
    answerId?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    question?: QuestionOrderByWithRelationInput;
    answer?: AnswerOrderByWithRelationInput;
  };

  export type VoteWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId_questionId?: VoteUserIdQuestionIdCompoundUniqueInput;
      userId_answerId?: VoteUserIdAnswerIdCompoundUniqueInput;
      AND?: VoteWhereInput | VoteWhereInput[];
      OR?: VoteWhereInput[];
      NOT?: VoteWhereInput | VoteWhereInput[];
      userId?: StringFilter<'Vote'> | string;
      questionId?: StringNullableFilter<'Vote'> | string | null;
      answerId?: StringNullableFilter<'Vote'> | string | null;
      type?: EnumVoteTypeFilter<'Vote'> | $Enums.VoteType;
      createdAt?: DateTimeFilter<'Vote'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      question?: XOR<
        QuestionNullableScalarRelationFilter,
        QuestionWhereInput
      > | null;
      answer?: XOR<AnswerNullableScalarRelationFilter, AnswerWhereInput> | null;
    },
    'id' | 'userId_questionId' | 'userId_answerId'
  >;

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    questionId?: SortOrder;
    answerId?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
    _count?: VoteCountOrderByAggregateInput;
    _max?: VoteMaxOrderByAggregateInput;
    _min?: VoteMinOrderByAggregateInput;
  };

  export type VoteScalarWhereWithAggregatesInput = {
    AND?:
      | VoteScalarWhereWithAggregatesInput
      | VoteScalarWhereWithAggregatesInput[];
    OR?: VoteScalarWhereWithAggregatesInput[];
    NOT?:
      | VoteScalarWhereWithAggregatesInput
      | VoteScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Vote'> | string;
    userId?: StringWithAggregatesFilter<'Vote'> | string;
    questionId?: StringNullableWithAggregatesFilter<'Vote'> | string | null;
    answerId?: StringNullableWithAggregatesFilter<'Vote'> | string | null;
    type?: EnumVoteTypeWithAggregatesFilter<'Vote'> | $Enums.VoteType;
    createdAt?: DateTimeWithAggregatesFilter<'Vote'> | Date | string;
  };

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[];
    OR?: CollectionWhereInput[];
    NOT?: CollectionWhereInput | CollectionWhereInput[];
    id?: StringFilter<'Collection'> | string;
    userId?: StringFilter<'Collection'> | string;
    questionId?: StringNullableFilter<'Collection'> | string | null;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    question?: XOR<
      QuestionNullableScalarRelationFilter,
      QuestionWhereInput
    > | null;
  };

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    questionId?: SortOrder;
    user?: UserOrderByWithRelationInput;
    question?: QuestionOrderByWithRelationInput;
  };

  export type CollectionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CollectionWhereInput | CollectionWhereInput[];
      OR?: CollectionWhereInput[];
      NOT?: CollectionWhereInput | CollectionWhereInput[];
      userId?: StringFilter<'Collection'> | string;
      questionId?: StringNullableFilter<'Collection'> | string | null;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      question?: XOR<
        QuestionNullableScalarRelationFilter,
        QuestionWhereInput
      > | null;
    },
    'id'
  >;

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    questionId?: SortOrder;
    _count?: CollectionCountOrderByAggregateInput;
    _max?: CollectionMaxOrderByAggregateInput;
    _min?: CollectionMinOrderByAggregateInput;
  };

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?:
      | CollectionScalarWhereWithAggregatesInput
      | CollectionScalarWhereWithAggregatesInput[];
    OR?: CollectionScalarWhereWithAggregatesInput[];
    NOT?:
      | CollectionScalarWhereWithAggregatesInput
      | CollectionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Collection'> | string;
    userId?: StringWithAggregatesFilter<'Collection'> | string;
    questionId?:
      | StringNullableWithAggregatesFilter<'Collection'>
      | string
      | null;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    name: string;
    image: string;
    location?: string | null;
    portfolio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    questions?: QuestionCreateNestedManyWithoutAuthorInput;
    answers?: AnswerCreateNestedManyWithoutAuthorInput;
    votes?: VoteCreateNestedManyWithoutUserInput;
    Collection?: CollectionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    name: string;
    image: string;
    location?: string | null;
    portfolio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput;
    Collection?: CollectionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    questions?: QuestionUpdateManyWithoutAuthorNestedInput;
    answers?: AnswerUpdateManyWithoutAuthorNestedInput;
    votes?: VoteUpdateManyWithoutUserNestedInput;
    Collection?: CollectionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput;
    Collection?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    name: string;
    image: string;
    location?: string | null;
    portfolio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountCreateInput = {
    id?: string;
    name: string;
    image?: string | null;
    password?: string | null;
    provider: $Enums.Provider;
    providerAccountId: string;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutAccountsInput;
  };

  export type AccountUncheckedCreateInput = {
    id?: string;
    userId: string;
    name: string;
    image?: string | null;
    password?: string | null;
    provider: $Enums.Provider;
    providerAccountId: string;
    createdAt?: Date | string;
  };

  export type AccountUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput;
  };

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountCreateManyInput = {
    id?: string;
    userId: string;
    name: string;
    image?: string | null;
    password?: string | null;
    provider: $Enums.Provider;
    providerAccountId: string;
    createdAt?: Date | string;
  };

  export type AccountUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionCreateInput = {
    id?: string;
    summary: string;
    description: string;
    views?: number;
    answersCount?: number;
    createdAt?: Date | string;
    author: UserCreateNestedOneWithoutQuestionsInput;
    answers?: AnswerCreateNestedManyWithoutQuestionInput;
    tags?: QuestionTagCreateNestedManyWithoutQuestionInput;
    votes?: VoteCreateNestedManyWithoutQuestionInput;
    Collection?: CollectionCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionUncheckedCreateInput = {
    id?: string;
    authorId: string;
    summary: string;
    description: string;
    views?: number;
    answersCount?: number;
    createdAt?: Date | string;
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    tags?: QuestionTagUncheckedCreateNestedManyWithoutQuestionInput;
    votes?: VoteUncheckedCreateNestedManyWithoutQuestionInput;
    Collection?: CollectionUncheckedCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionUpdateInput = {
    summary?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    answersCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput;
    answers?: AnswerUpdateManyWithoutQuestionNestedInput;
    tags?: QuestionTagUpdateManyWithoutQuestionNestedInput;
    votes?: VoteUpdateManyWithoutQuestionNestedInput;
    Collection?: CollectionUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionUncheckedUpdateInput = {
    authorId?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    answersCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    tags?: QuestionTagUncheckedUpdateManyWithoutQuestionNestedInput;
    votes?: VoteUncheckedUpdateManyWithoutQuestionNestedInput;
    Collection?: CollectionUncheckedUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionCreateManyInput = {
    id?: string;
    authorId: string;
    summary: string;
    description: string;
    views?: number;
    answersCount?: number;
    createdAt?: Date | string;
  };

  export type QuestionUpdateManyMutationInput = {
    summary?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    answersCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionUncheckedUpdateManyInput = {
    authorId?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    answersCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagCreateInput = {
    id?: string;
    name: string;
    questionsCount?: number;
    createdAt?: Date | string;
    questions?: QuestionTagCreateNestedManyWithoutTagInput;
  };

  export type TagUncheckedCreateInput = {
    id?: string;
    name: string;
    questionsCount?: number;
    createdAt?: Date | string;
    questions?: QuestionTagUncheckedCreateNestedManyWithoutTagInput;
  };

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    questionsCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: QuestionTagUpdateManyWithoutTagNestedInput;
  };

  export type TagUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    questionsCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: QuestionTagUncheckedUpdateManyWithoutTagNestedInput;
  };

  export type TagCreateManyInput = {
    id?: string;
    name: string;
    questionsCount?: number;
    createdAt?: Date | string;
  };

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    questionsCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string;
    questionsCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionTagCreateInput = {
    id?: string;
    createdAt?: Date | string;
    question: QuestionCreateNestedOneWithoutTagsInput;
    tag: TagCreateNestedOneWithoutQuestionsInput;
  };

  export type QuestionTagUncheckedCreateInput = {
    id?: string;
    questionId: string;
    tagId: string;
    createdAt?: Date | string;
  };

  export type QuestionTagUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    question?: QuestionUpdateOneRequiredWithoutTagsNestedInput;
    tag?: TagUpdateOneRequiredWithoutQuestionsNestedInput;
  };

  export type QuestionTagUncheckedUpdateInput = {
    questionId?: StringFieldUpdateOperationsInput | string;
    tagId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionTagCreateManyInput = {
    id?: string;
    questionId: string;
    tagId: string;
    createdAt?: Date | string;
  };

  export type QuestionTagUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionTagUncheckedUpdateManyInput = {
    questionId?: StringFieldUpdateOperationsInput | string;
    tagId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnswerCreateInput = {
    id?: string;
    description: string;
    createdAt?: Date | string;
    author: UserCreateNestedOneWithoutAnswersInput;
    question: QuestionCreateNestedOneWithoutAnswersInput;
    votes?: VoteCreateNestedManyWithoutAnswerInput;
  };

  export type AnswerUncheckedCreateInput = {
    id?: string;
    authorId: string;
    questionId: string;
    description: string;
    createdAt?: Date | string;
    votes?: VoteUncheckedCreateNestedManyWithoutAnswerInput;
  };

  export type AnswerUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutAnswersNestedInput;
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput;
    votes?: VoteUpdateManyWithoutAnswerNestedInput;
  };

  export type AnswerUncheckedUpdateInput = {
    authorId?: StringFieldUpdateOperationsInput | string;
    questionId?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    votes?: VoteUncheckedUpdateManyWithoutAnswerNestedInput;
  };

  export type AnswerCreateManyInput = {
    id?: string;
    authorId: string;
    questionId: string;
    description: string;
    createdAt?: Date | string;
  };

  export type AnswerUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnswerUncheckedUpdateManyInput = {
    authorId?: StringFieldUpdateOperationsInput | string;
    questionId?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VoteCreateInput = {
    id?: string;
    type: $Enums.VoteType;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutVotesInput;
    question?: QuestionCreateNestedOneWithoutVotesInput;
    answer?: AnswerCreateNestedOneWithoutVotesInput;
  };

  export type VoteUncheckedCreateInput = {
    id?: string;
    userId: string;
    questionId?: string | null;
    answerId?: string | null;
    type: $Enums.VoteType;
    createdAt?: Date | string;
  };

  export type VoteUpdateInput = {
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutVotesNestedInput;
    question?: QuestionUpdateOneWithoutVotesNestedInput;
    answer?: AnswerUpdateOneWithoutVotesNestedInput;
  };

  export type VoteUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    questionId?: NullableStringFieldUpdateOperationsInput | string | null;
    answerId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VoteCreateManyInput = {
    id?: string;
    userId: string;
    questionId?: string | null;
    answerId?: string | null;
    type: $Enums.VoteType;
    createdAt?: Date | string;
  };

  export type VoteUpdateManyMutationInput = {
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VoteUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    questionId?: NullableStringFieldUpdateOperationsInput | string | null;
    answerId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CollectionCreateInput = {
    id?: string;
    user: UserCreateNestedOneWithoutCollectionInput;
    question?: QuestionCreateNestedOneWithoutCollectionInput;
  };

  export type CollectionUncheckedCreateInput = {
    id?: string;
    userId: string;
    questionId?: string | null;
  };

  export type CollectionUpdateInput = {
    user?: UserUpdateOneRequiredWithoutCollectionNestedInput;
    question?: QuestionUpdateOneWithoutCollectionNestedInput;
  };

  export type CollectionUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    questionId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CollectionCreateManyInput = {
    id?: string;
    userId: string;
    questionId?: string | null;
  };

  export type CollectionUpdateManyMutationInput = {};

  export type CollectionUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    questionId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    isSet?: boolean;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type AccountListRelationFilter = {
    every?: AccountWhereInput;
    some?: AccountWhereInput;
    none?: AccountWhereInput;
  };

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput;
    some?: QuestionWhereInput;
    none?: QuestionWhereInput;
  };

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput;
    some?: AnswerWhereInput;
    none?: AnswerWhereInput;
  };

  export type VoteListRelationFilter = {
    every?: VoteWhereInput;
    some?: VoteWhereInput;
    none?: VoteWhereInput;
  };

  export type CollectionListRelationFilter = {
    every?: CollectionWhereInput;
    some?: CollectionWhereInput;
    none?: CollectionWhereInput;
  };

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    image?: SortOrder;
    location?: SortOrder;
    portfolio?: SortOrder;
    reputation?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    reputation?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    image?: SortOrder;
    location?: SortOrder;
    portfolio?: SortOrder;
    reputation?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    image?: SortOrder;
    location?: SortOrder;
    portfolio?: SortOrder;
    reputation?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    reputation?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    image?: SortOrder;
    password?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    image?: SortOrder;
    password?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    image?: SortOrder;
    password?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProviderWithAggregatesFilter<$PrismaModel>
      | $Enums.Provider;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumProviderFilter<$PrismaModel>;
    _max?: NestedEnumProviderFilter<$PrismaModel>;
  };

  export type QuestionTagListRelationFilter = {
    every?: QuestionTagWhereInput;
    some?: QuestionTagWhereInput;
    none?: QuestionTagWhereInput;
  };

  export type QuestionTagOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    summary?: SortOrder;
    description?: SortOrder;
    views?: SortOrder;
    answersCount?: SortOrder;
    createdAt?: SortOrder;
  };

  export type QuestionAvgOrderByAggregateInput = {
    views?: SortOrder;
    answersCount?: SortOrder;
  };

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    summary?: SortOrder;
    description?: SortOrder;
    views?: SortOrder;
    answersCount?: SortOrder;
    createdAt?: SortOrder;
  };

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    summary?: SortOrder;
    description?: SortOrder;
    views?: SortOrder;
    answersCount?: SortOrder;
    createdAt?: SortOrder;
  };

  export type QuestionSumOrderByAggregateInput = {
    views?: SortOrder;
    answersCount?: SortOrder;
  };

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    questionsCount?: SortOrder;
    createdAt?: SortOrder;
  };

  export type TagAvgOrderByAggregateInput = {
    questionsCount?: SortOrder;
  };

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    questionsCount?: SortOrder;
    createdAt?: SortOrder;
  };

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    questionsCount?: SortOrder;
    createdAt?: SortOrder;
  };

  export type TagSumOrderByAggregateInput = {
    questionsCount?: SortOrder;
  };

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput;
    isNot?: QuestionWhereInput;
  };

  export type TagScalarRelationFilter = {
    is?: TagWhereInput;
    isNot?: TagWhereInput;
  };

  export type QuestionTagCountOrderByAggregateInput = {
    id?: SortOrder;
    questionId?: SortOrder;
    tagId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type QuestionTagMaxOrderByAggregateInput = {
    id?: SortOrder;
    questionId?: SortOrder;
    tagId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type QuestionTagMinOrderByAggregateInput = {
    id?: SortOrder;
    questionId?: SortOrder;
    tagId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    questionId?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
  };

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    questionId?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
  };

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    questionId?: SortOrder;
    description?: SortOrder;
    createdAt?: SortOrder;
  };

  export type EnumVoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumVoteTypeFilter<$PrismaModel> | $Enums.VoteType;
  };

  export type QuestionNullableScalarRelationFilter = {
    is?: QuestionWhereInput | null;
    isNot?: QuestionWhereInput | null;
  };

  export type AnswerNullableScalarRelationFilter = {
    is?: AnswerWhereInput | null;
    isNot?: AnswerWhereInput | null;
  };

  export type VoteUserIdQuestionIdCompoundUniqueInput = {
    userId: string;
    questionId: string;
  };

  export type VoteUserIdAnswerIdCompoundUniqueInput = {
    userId: string;
    answerId: string;
  };

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    questionId?: SortOrder;
    answerId?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
  };

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    questionId?: SortOrder;
    answerId?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
  };

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    questionId?: SortOrder;
    answerId?: SortOrder;
    type?: SortOrder;
    createdAt?: SortOrder;
  };

  export type EnumVoteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumVoteTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.VoteType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumVoteTypeFilter<$PrismaModel>;
    _max?: NestedEnumVoteTypeFilter<$PrismaModel>;
  };

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    questionId?: SortOrder;
  };

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    questionId?: SortOrder;
  };

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    questionId?: SortOrder;
  };

  export type AccountCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
  };

  export type QuestionCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          QuestionCreateWithoutAuthorInput,
          QuestionUncheckedCreateWithoutAuthorInput
        >
      | QuestionCreateWithoutAuthorInput[]
      | QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutAuthorInput
      | QuestionCreateOrConnectWithoutAuthorInput[];
    createMany?: QuestionCreateManyAuthorInputEnvelope;
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
  };

  export type AnswerCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          AnswerCreateWithoutAuthorInput,
          AnswerUncheckedCreateWithoutAuthorInput
        >
      | AnswerCreateWithoutAuthorInput[]
      | AnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutAuthorInput
      | AnswerCreateOrConnectWithoutAuthorInput[];
    createMany?: AnswerCreateManyAuthorInputEnvelope;
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
  };

  export type VoteCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
      | VoteCreateWithoutUserInput[]
      | VoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | VoteCreateOrConnectWithoutUserInput
      | VoteCreateOrConnectWithoutUserInput[];
    createMany?: VoteCreateManyUserInputEnvelope;
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
  };

  export type CollectionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CollectionCreateWithoutUserInput,
          CollectionUncheckedCreateWithoutUserInput
        >
      | CollectionCreateWithoutUserInput[]
      | CollectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutUserInput
      | CollectionCreateOrConnectWithoutUserInput[];
    createMany?: CollectionCreateManyUserInputEnvelope;
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
  };

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
  };

  export type QuestionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          QuestionCreateWithoutAuthorInput,
          QuestionUncheckedCreateWithoutAuthorInput
        >
      | QuestionCreateWithoutAuthorInput[]
      | QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutAuthorInput
      | QuestionCreateOrConnectWithoutAuthorInput[];
    createMany?: QuestionCreateManyAuthorInputEnvelope;
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
  };

  export type AnswerUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<
          AnswerCreateWithoutAuthorInput,
          AnswerUncheckedCreateWithoutAuthorInput
        >
      | AnswerCreateWithoutAuthorInput[]
      | AnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutAuthorInput
      | AnswerCreateOrConnectWithoutAuthorInput[];
    createMany?: AnswerCreateManyAuthorInputEnvelope;
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
  };

  export type VoteUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
      | VoteCreateWithoutUserInput[]
      | VoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | VoteCreateOrConnectWithoutUserInput
      | VoteCreateOrConnectWithoutUserInput[];
    createMany?: VoteCreateManyUserInputEnvelope;
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
  };

  export type CollectionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CollectionCreateWithoutUserInput,
          CollectionUncheckedCreateWithoutUserInput
        >
      | CollectionCreateWithoutUserInput[]
      | CollectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutUserInput
      | CollectionCreateOrConnectWithoutUserInput[];
    createMany?: CollectionCreateManyUserInputEnvelope;
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
    unset?: boolean;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    upsert?:
      | AccountUpsertWithWhereUniqueWithoutUserInput
      | AccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    update?:
      | AccountUpdateWithWhereUniqueWithoutUserInput
      | AccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AccountUpdateManyWithWhereWithoutUserInput
      | AccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[];
  };

  export type QuestionUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          QuestionCreateWithoutAuthorInput,
          QuestionUncheckedCreateWithoutAuthorInput
        >
      | QuestionCreateWithoutAuthorInput[]
      | QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutAuthorInput
      | QuestionCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | QuestionUpsertWithWhereUniqueWithoutAuthorInput
      | QuestionUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: QuestionCreateManyAuthorInputEnvelope;
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    update?:
      | QuestionUpdateWithWhereUniqueWithoutAuthorInput
      | QuestionUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | QuestionUpdateManyWithWhereWithoutAuthorInput
      | QuestionUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
  };

  export type AnswerUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          AnswerCreateWithoutAuthorInput,
          AnswerUncheckedCreateWithoutAuthorInput
        >
      | AnswerCreateWithoutAuthorInput[]
      | AnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutAuthorInput
      | AnswerCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | AnswerUpsertWithWhereUniqueWithoutAuthorInput
      | AnswerUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: AnswerCreateManyAuthorInputEnvelope;
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    update?:
      | AnswerUpdateWithWhereUniqueWithoutAuthorInput
      | AnswerUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | AnswerUpdateManyWithWhereWithoutAuthorInput
      | AnswerUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
  };

  export type VoteUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
      | VoteCreateWithoutUserInput[]
      | VoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | VoteCreateOrConnectWithoutUserInput
      | VoteCreateOrConnectWithoutUserInput[];
    upsert?:
      | VoteUpsertWithWhereUniqueWithoutUserInput
      | VoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: VoteCreateManyUserInputEnvelope;
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    update?:
      | VoteUpdateWithWhereUniqueWithoutUserInput
      | VoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | VoteUpdateManyWithWhereWithoutUserInput
      | VoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[];
  };

  export type CollectionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CollectionCreateWithoutUserInput,
          CollectionUncheckedCreateWithoutUserInput
        >
      | CollectionCreateWithoutUserInput[]
      | CollectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutUserInput
      | CollectionCreateOrConnectWithoutUserInput[];
    upsert?:
      | CollectionUpsertWithWhereUniqueWithoutUserInput
      | CollectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CollectionCreateManyUserInputEnvelope;
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    update?:
      | CollectionUpdateWithWhereUniqueWithoutUserInput
      | CollectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CollectionUpdateManyWithWhereWithoutUserInput
      | CollectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[];
  };

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    upsert?:
      | AccountUpsertWithWhereUniqueWithoutUserInput
      | AccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    update?:
      | AccountUpdateWithWhereUniqueWithoutUserInput
      | AccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AccountUpdateManyWithWhereWithoutUserInput
      | AccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[];
  };

  export type QuestionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          QuestionCreateWithoutAuthorInput,
          QuestionUncheckedCreateWithoutAuthorInput
        >
      | QuestionCreateWithoutAuthorInput[]
      | QuestionUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | QuestionCreateOrConnectWithoutAuthorInput
      | QuestionCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | QuestionUpsertWithWhereUniqueWithoutAuthorInput
      | QuestionUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: QuestionCreateManyAuthorInputEnvelope;
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[];
    update?:
      | QuestionUpdateWithWhereUniqueWithoutAuthorInput
      | QuestionUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | QuestionUpdateManyWithWhereWithoutAuthorInput
      | QuestionUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
  };

  export type AnswerUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<
          AnswerCreateWithoutAuthorInput,
          AnswerUncheckedCreateWithoutAuthorInput
        >
      | AnswerCreateWithoutAuthorInput[]
      | AnswerUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutAuthorInput
      | AnswerCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | AnswerUpsertWithWhereUniqueWithoutAuthorInput
      | AnswerUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: AnswerCreateManyAuthorInputEnvelope;
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    update?:
      | AnswerUpdateWithWhereUniqueWithoutAuthorInput
      | AnswerUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | AnswerUpdateManyWithWhereWithoutAuthorInput
      | AnswerUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
  };

  export type VoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<VoteCreateWithoutUserInput, VoteUncheckedCreateWithoutUserInput>
      | VoteCreateWithoutUserInput[]
      | VoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | VoteCreateOrConnectWithoutUserInput
      | VoteCreateOrConnectWithoutUserInput[];
    upsert?:
      | VoteUpsertWithWhereUniqueWithoutUserInput
      | VoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: VoteCreateManyUserInputEnvelope;
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    update?:
      | VoteUpdateWithWhereUniqueWithoutUserInput
      | VoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | VoteUpdateManyWithWhereWithoutUserInput
      | VoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[];
  };

  export type CollectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CollectionCreateWithoutUserInput,
          CollectionUncheckedCreateWithoutUserInput
        >
      | CollectionCreateWithoutUserInput[]
      | CollectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutUserInput
      | CollectionCreateOrConnectWithoutUserInput[];
    upsert?:
      | CollectionUpsertWithWhereUniqueWithoutUserInput
      | CollectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CollectionCreateManyUserInputEnvelope;
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    update?:
      | CollectionUpdateWithWhereUniqueWithoutUserInput
      | CollectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CollectionUpdateManyWithWhereWithoutUserInput
      | CollectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider;
  };

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput;
    upsert?: UserUpsertWithoutAccountsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAccountsInput,
        UserUpdateWithoutAccountsInput
      >,
      UserUncheckedUpdateWithoutAccountsInput
    >;
  };

  export type UserCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<
      UserCreateWithoutQuestionsInput,
      UserUncheckedCreateWithoutQuestionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?:
      | XOR<
          AnswerCreateWithoutQuestionInput,
          AnswerUncheckedCreateWithoutQuestionInput
        >
      | AnswerCreateWithoutQuestionInput[]
      | AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutQuestionInput
      | AnswerCreateOrConnectWithoutQuestionInput[];
    createMany?: AnswerCreateManyQuestionInputEnvelope;
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
  };

  export type QuestionTagCreateNestedManyWithoutQuestionInput = {
    create?:
      | XOR<
          QuestionTagCreateWithoutQuestionInput,
          QuestionTagUncheckedCreateWithoutQuestionInput
        >
      | QuestionTagCreateWithoutQuestionInput[]
      | QuestionTagUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | QuestionTagCreateOrConnectWithoutQuestionInput
      | QuestionTagCreateOrConnectWithoutQuestionInput[];
    createMany?: QuestionTagCreateManyQuestionInputEnvelope;
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
  };

  export type VoteCreateNestedManyWithoutQuestionInput = {
    create?:
      | XOR<
          VoteCreateWithoutQuestionInput,
          VoteUncheckedCreateWithoutQuestionInput
        >
      | VoteCreateWithoutQuestionInput[]
      | VoteUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | VoteCreateOrConnectWithoutQuestionInput
      | VoteCreateOrConnectWithoutQuestionInput[];
    createMany?: VoteCreateManyQuestionInputEnvelope;
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
  };

  export type CollectionCreateNestedManyWithoutQuestionInput = {
    create?:
      | XOR<
          CollectionCreateWithoutQuestionInput,
          CollectionUncheckedCreateWithoutQuestionInput
        >
      | CollectionCreateWithoutQuestionInput[]
      | CollectionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutQuestionInput
      | CollectionCreateOrConnectWithoutQuestionInput[];
    createMany?: CollectionCreateManyQuestionInputEnvelope;
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
  };

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?:
      | XOR<
          AnswerCreateWithoutQuestionInput,
          AnswerUncheckedCreateWithoutQuestionInput
        >
      | AnswerCreateWithoutQuestionInput[]
      | AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutQuestionInput
      | AnswerCreateOrConnectWithoutQuestionInput[];
    createMany?: AnswerCreateManyQuestionInputEnvelope;
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
  };

  export type QuestionTagUncheckedCreateNestedManyWithoutQuestionInput = {
    create?:
      | XOR<
          QuestionTagCreateWithoutQuestionInput,
          QuestionTagUncheckedCreateWithoutQuestionInput
        >
      | QuestionTagCreateWithoutQuestionInput[]
      | QuestionTagUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | QuestionTagCreateOrConnectWithoutQuestionInput
      | QuestionTagCreateOrConnectWithoutQuestionInput[];
    createMany?: QuestionTagCreateManyQuestionInputEnvelope;
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
  };

  export type VoteUncheckedCreateNestedManyWithoutQuestionInput = {
    create?:
      | XOR<
          VoteCreateWithoutQuestionInput,
          VoteUncheckedCreateWithoutQuestionInput
        >
      | VoteCreateWithoutQuestionInput[]
      | VoteUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | VoteCreateOrConnectWithoutQuestionInput
      | VoteCreateOrConnectWithoutQuestionInput[];
    createMany?: VoteCreateManyQuestionInputEnvelope;
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
  };

  export type CollectionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?:
      | XOR<
          CollectionCreateWithoutQuestionInput,
          CollectionUncheckedCreateWithoutQuestionInput
        >
      | CollectionCreateWithoutQuestionInput[]
      | CollectionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutQuestionInput
      | CollectionCreateOrConnectWithoutQuestionInput[];
    createMany?: CollectionCreateManyQuestionInputEnvelope;
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<
      UserCreateWithoutQuestionsInput,
      UserUncheckedCreateWithoutQuestionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput;
    upsert?: UserUpsertWithoutQuestionsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutQuestionsInput,
        UserUpdateWithoutQuestionsInput
      >,
      UserUncheckedUpdateWithoutQuestionsInput
    >;
  };

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?:
      | XOR<
          AnswerCreateWithoutQuestionInput,
          AnswerUncheckedCreateWithoutQuestionInput
        >
      | AnswerCreateWithoutQuestionInput[]
      | AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutQuestionInput
      | AnswerCreateOrConnectWithoutQuestionInput[];
    upsert?:
      | AnswerUpsertWithWhereUniqueWithoutQuestionInput
      | AnswerUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: AnswerCreateManyQuestionInputEnvelope;
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    update?:
      | AnswerUpdateWithWhereUniqueWithoutQuestionInput
      | AnswerUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?:
      | AnswerUpdateManyWithWhereWithoutQuestionInput
      | AnswerUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
  };

  export type QuestionTagUpdateManyWithoutQuestionNestedInput = {
    create?:
      | XOR<
          QuestionTagCreateWithoutQuestionInput,
          QuestionTagUncheckedCreateWithoutQuestionInput
        >
      | QuestionTagCreateWithoutQuestionInput[]
      | QuestionTagUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | QuestionTagCreateOrConnectWithoutQuestionInput
      | QuestionTagCreateOrConnectWithoutQuestionInput[];
    upsert?:
      | QuestionTagUpsertWithWhereUniqueWithoutQuestionInput
      | QuestionTagUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: QuestionTagCreateManyQuestionInputEnvelope;
    set?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    disconnect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    delete?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    update?:
      | QuestionTagUpdateWithWhereUniqueWithoutQuestionInput
      | QuestionTagUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?:
      | QuestionTagUpdateManyWithWhereWithoutQuestionInput
      | QuestionTagUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: QuestionTagScalarWhereInput | QuestionTagScalarWhereInput[];
  };

  export type VoteUpdateManyWithoutQuestionNestedInput = {
    create?:
      | XOR<
          VoteCreateWithoutQuestionInput,
          VoteUncheckedCreateWithoutQuestionInput
        >
      | VoteCreateWithoutQuestionInput[]
      | VoteUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | VoteCreateOrConnectWithoutQuestionInput
      | VoteCreateOrConnectWithoutQuestionInput[];
    upsert?:
      | VoteUpsertWithWhereUniqueWithoutQuestionInput
      | VoteUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: VoteCreateManyQuestionInputEnvelope;
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    update?:
      | VoteUpdateWithWhereUniqueWithoutQuestionInput
      | VoteUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?:
      | VoteUpdateManyWithWhereWithoutQuestionInput
      | VoteUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[];
  };

  export type CollectionUpdateManyWithoutQuestionNestedInput = {
    create?:
      | XOR<
          CollectionCreateWithoutQuestionInput,
          CollectionUncheckedCreateWithoutQuestionInput
        >
      | CollectionCreateWithoutQuestionInput[]
      | CollectionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutQuestionInput
      | CollectionCreateOrConnectWithoutQuestionInput[];
    upsert?:
      | CollectionUpsertWithWhereUniqueWithoutQuestionInput
      | CollectionUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: CollectionCreateManyQuestionInputEnvelope;
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    update?:
      | CollectionUpdateWithWhereUniqueWithoutQuestionInput
      | CollectionUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?:
      | CollectionUpdateManyWithWhereWithoutQuestionInput
      | CollectionUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[];
  };

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?:
      | XOR<
          AnswerCreateWithoutQuestionInput,
          AnswerUncheckedCreateWithoutQuestionInput
        >
      | AnswerCreateWithoutQuestionInput[]
      | AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | AnswerCreateOrConnectWithoutQuestionInput
      | AnswerCreateOrConnectWithoutQuestionInput[];
    upsert?:
      | AnswerUpsertWithWhereUniqueWithoutQuestionInput
      | AnswerUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: AnswerCreateManyQuestionInputEnvelope;
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[];
    update?:
      | AnswerUpdateWithWhereUniqueWithoutQuestionInput
      | AnswerUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?:
      | AnswerUpdateManyWithWhereWithoutQuestionInput
      | AnswerUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
  };

  export type QuestionTagUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?:
      | XOR<
          QuestionTagCreateWithoutQuestionInput,
          QuestionTagUncheckedCreateWithoutQuestionInput
        >
      | QuestionTagCreateWithoutQuestionInput[]
      | QuestionTagUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | QuestionTagCreateOrConnectWithoutQuestionInput
      | QuestionTagCreateOrConnectWithoutQuestionInput[];
    upsert?:
      | QuestionTagUpsertWithWhereUniqueWithoutQuestionInput
      | QuestionTagUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: QuestionTagCreateManyQuestionInputEnvelope;
    set?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    disconnect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    delete?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    update?:
      | QuestionTagUpdateWithWhereUniqueWithoutQuestionInput
      | QuestionTagUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?:
      | QuestionTagUpdateManyWithWhereWithoutQuestionInput
      | QuestionTagUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: QuestionTagScalarWhereInput | QuestionTagScalarWhereInput[];
  };

  export type VoteUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?:
      | XOR<
          VoteCreateWithoutQuestionInput,
          VoteUncheckedCreateWithoutQuestionInput
        >
      | VoteCreateWithoutQuestionInput[]
      | VoteUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | VoteCreateOrConnectWithoutQuestionInput
      | VoteCreateOrConnectWithoutQuestionInput[];
    upsert?:
      | VoteUpsertWithWhereUniqueWithoutQuestionInput
      | VoteUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: VoteCreateManyQuestionInputEnvelope;
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    update?:
      | VoteUpdateWithWhereUniqueWithoutQuestionInput
      | VoteUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?:
      | VoteUpdateManyWithWhereWithoutQuestionInput
      | VoteUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[];
  };

  export type CollectionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?:
      | XOR<
          CollectionCreateWithoutQuestionInput,
          CollectionUncheckedCreateWithoutQuestionInput
        >
      | CollectionCreateWithoutQuestionInput[]
      | CollectionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutQuestionInput
      | CollectionCreateOrConnectWithoutQuestionInput[];
    upsert?:
      | CollectionUpsertWithWhereUniqueWithoutQuestionInput
      | CollectionUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: CollectionCreateManyQuestionInputEnvelope;
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    update?:
      | CollectionUpdateWithWhereUniqueWithoutQuestionInput
      | CollectionUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?:
      | CollectionUpdateManyWithWhereWithoutQuestionInput
      | CollectionUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[];
  };

  export type QuestionTagCreateNestedManyWithoutTagInput = {
    create?:
      | XOR<
          QuestionTagCreateWithoutTagInput,
          QuestionTagUncheckedCreateWithoutTagInput
        >
      | QuestionTagCreateWithoutTagInput[]
      | QuestionTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | QuestionTagCreateOrConnectWithoutTagInput
      | QuestionTagCreateOrConnectWithoutTagInput[];
    createMany?: QuestionTagCreateManyTagInputEnvelope;
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
  };

  export type QuestionTagUncheckedCreateNestedManyWithoutTagInput = {
    create?:
      | XOR<
          QuestionTagCreateWithoutTagInput,
          QuestionTagUncheckedCreateWithoutTagInput
        >
      | QuestionTagCreateWithoutTagInput[]
      | QuestionTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | QuestionTagCreateOrConnectWithoutTagInput
      | QuestionTagCreateOrConnectWithoutTagInput[];
    createMany?: QuestionTagCreateManyTagInputEnvelope;
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
  };

  export type QuestionTagUpdateManyWithoutTagNestedInput = {
    create?:
      | XOR<
          QuestionTagCreateWithoutTagInput,
          QuestionTagUncheckedCreateWithoutTagInput
        >
      | QuestionTagCreateWithoutTagInput[]
      | QuestionTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | QuestionTagCreateOrConnectWithoutTagInput
      | QuestionTagCreateOrConnectWithoutTagInput[];
    upsert?:
      | QuestionTagUpsertWithWhereUniqueWithoutTagInput
      | QuestionTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: QuestionTagCreateManyTagInputEnvelope;
    set?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    disconnect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    delete?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    update?:
      | QuestionTagUpdateWithWhereUniqueWithoutTagInput
      | QuestionTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?:
      | QuestionTagUpdateManyWithWhereWithoutTagInput
      | QuestionTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: QuestionTagScalarWhereInput | QuestionTagScalarWhereInput[];
  };

  export type QuestionTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?:
      | XOR<
          QuestionTagCreateWithoutTagInput,
          QuestionTagUncheckedCreateWithoutTagInput
        >
      | QuestionTagCreateWithoutTagInput[]
      | QuestionTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | QuestionTagCreateOrConnectWithoutTagInput
      | QuestionTagCreateOrConnectWithoutTagInput[];
    upsert?:
      | QuestionTagUpsertWithWhereUniqueWithoutTagInput
      | QuestionTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: QuestionTagCreateManyTagInputEnvelope;
    set?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    disconnect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    delete?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[];
    update?:
      | QuestionTagUpdateWithWhereUniqueWithoutTagInput
      | QuestionTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?:
      | QuestionTagUpdateManyWithWhereWithoutTagInput
      | QuestionTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: QuestionTagScalarWhereInput | QuestionTagScalarWhereInput[];
  };

  export type QuestionCreateNestedOneWithoutTagsInput = {
    create?: XOR<
      QuestionCreateWithoutTagsInput,
      QuestionUncheckedCreateWithoutTagsInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutTagsInput;
    connect?: QuestionWhereUniqueInput;
  };

  export type TagCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<
      TagCreateWithoutQuestionsInput,
      TagUncheckedCreateWithoutQuestionsInput
    >;
    connectOrCreate?: TagCreateOrConnectWithoutQuestionsInput;
    connect?: TagWhereUniqueInput;
  };

  export type QuestionUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<
      QuestionCreateWithoutTagsInput,
      QuestionUncheckedCreateWithoutTagsInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutTagsInput;
    upsert?: QuestionUpsertWithoutTagsInput;
    connect?: QuestionWhereUniqueInput;
    update?: XOR<
      XOR<
        QuestionUpdateToOneWithWhereWithoutTagsInput,
        QuestionUpdateWithoutTagsInput
      >,
      QuestionUncheckedUpdateWithoutTagsInput
    >;
  };

  export type TagUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<
      TagCreateWithoutQuestionsInput,
      TagUncheckedCreateWithoutQuestionsInput
    >;
    connectOrCreate?: TagCreateOrConnectWithoutQuestionsInput;
    upsert?: TagUpsertWithoutQuestionsInput;
    connect?: TagWhereUniqueInput;
    update?: XOR<
      XOR<
        TagUpdateToOneWithWhereWithoutQuestionsInput,
        TagUpdateWithoutQuestionsInput
      >,
      TagUncheckedUpdateWithoutQuestionsInput
    >;
  };

  export type UserCreateNestedOneWithoutAnswersInput = {
    create?: XOR<
      UserCreateWithoutAnswersInput,
      UserUncheckedCreateWithoutAnswersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput;
    connect?: UserWhereUniqueInput;
  };

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<
      QuestionCreateWithoutAnswersInput,
      QuestionUncheckedCreateWithoutAnswersInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput;
    connect?: QuestionWhereUniqueInput;
  };

  export type VoteCreateNestedManyWithoutAnswerInput = {
    create?:
      | XOR<VoteCreateWithoutAnswerInput, VoteUncheckedCreateWithoutAnswerInput>
      | VoteCreateWithoutAnswerInput[]
      | VoteUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?:
      | VoteCreateOrConnectWithoutAnswerInput
      | VoteCreateOrConnectWithoutAnswerInput[];
    createMany?: VoteCreateManyAnswerInputEnvelope;
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
  };

  export type VoteUncheckedCreateNestedManyWithoutAnswerInput = {
    create?:
      | XOR<VoteCreateWithoutAnswerInput, VoteUncheckedCreateWithoutAnswerInput>
      | VoteCreateWithoutAnswerInput[]
      | VoteUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?:
      | VoteCreateOrConnectWithoutAnswerInput
      | VoteCreateOrConnectWithoutAnswerInput[];
    createMany?: VoteCreateManyAnswerInputEnvelope;
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<
      UserCreateWithoutAnswersInput,
      UserUncheckedCreateWithoutAnswersInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput;
    upsert?: UserUpsertWithoutAnswersInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAnswersInput,
        UserUpdateWithoutAnswersInput
      >,
      UserUncheckedUpdateWithoutAnswersInput
    >;
  };

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<
      QuestionCreateWithoutAnswersInput,
      QuestionUncheckedCreateWithoutAnswersInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput;
    upsert?: QuestionUpsertWithoutAnswersInput;
    connect?: QuestionWhereUniqueInput;
    update?: XOR<
      XOR<
        QuestionUpdateToOneWithWhereWithoutAnswersInput,
        QuestionUpdateWithoutAnswersInput
      >,
      QuestionUncheckedUpdateWithoutAnswersInput
    >;
  };

  export type VoteUpdateManyWithoutAnswerNestedInput = {
    create?:
      | XOR<VoteCreateWithoutAnswerInput, VoteUncheckedCreateWithoutAnswerInput>
      | VoteCreateWithoutAnswerInput[]
      | VoteUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?:
      | VoteCreateOrConnectWithoutAnswerInput
      | VoteCreateOrConnectWithoutAnswerInput[];
    upsert?:
      | VoteUpsertWithWhereUniqueWithoutAnswerInput
      | VoteUpsertWithWhereUniqueWithoutAnswerInput[];
    createMany?: VoteCreateManyAnswerInputEnvelope;
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    update?:
      | VoteUpdateWithWhereUniqueWithoutAnswerInput
      | VoteUpdateWithWhereUniqueWithoutAnswerInput[];
    updateMany?:
      | VoteUpdateManyWithWhereWithoutAnswerInput
      | VoteUpdateManyWithWhereWithoutAnswerInput[];
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[];
  };

  export type VoteUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?:
      | XOR<VoteCreateWithoutAnswerInput, VoteUncheckedCreateWithoutAnswerInput>
      | VoteCreateWithoutAnswerInput[]
      | VoteUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?:
      | VoteCreateOrConnectWithoutAnswerInput
      | VoteCreateOrConnectWithoutAnswerInput[];
    upsert?:
      | VoteUpsertWithWhereUniqueWithoutAnswerInput
      | VoteUpsertWithWhereUniqueWithoutAnswerInput[];
    createMany?: VoteCreateManyAnswerInputEnvelope;
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[];
    update?:
      | VoteUpdateWithWhereUniqueWithoutAnswerInput
      | VoteUpdateWithWhereUniqueWithoutAnswerInput[];
    updateMany?:
      | VoteUpdateManyWithWhereWithoutAnswerInput
      | VoteUpdateManyWithWhereWithoutAnswerInput[];
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutVotesInput = {
    create?: XOR<
      UserCreateWithoutVotesInput,
      UserUncheckedCreateWithoutVotesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput;
    connect?: UserWhereUniqueInput;
  };

  export type QuestionCreateNestedOneWithoutVotesInput = {
    create?: XOR<
      QuestionCreateWithoutVotesInput,
      QuestionUncheckedCreateWithoutVotesInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutVotesInput;
    connect?: QuestionWhereUniqueInput;
  };

  export type AnswerCreateNestedOneWithoutVotesInput = {
    create?: XOR<
      AnswerCreateWithoutVotesInput,
      AnswerUncheckedCreateWithoutVotesInput
    >;
    connectOrCreate?: AnswerCreateOrConnectWithoutVotesInput;
    connect?: AnswerWhereUniqueInput;
  };

  export type EnumVoteTypeFieldUpdateOperationsInput = {
    set?: $Enums.VoteType;
  };

  export type UserUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<
      UserCreateWithoutVotesInput,
      UserUncheckedCreateWithoutVotesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput;
    upsert?: UserUpsertWithoutVotesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutVotesInput,
        UserUpdateWithoutVotesInput
      >,
      UserUncheckedUpdateWithoutVotesInput
    >;
  };

  export type QuestionUpdateOneWithoutVotesNestedInput = {
    create?: XOR<
      QuestionCreateWithoutVotesInput,
      QuestionUncheckedCreateWithoutVotesInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutVotesInput;
    upsert?: QuestionUpsertWithoutVotesInput;
    disconnect?: boolean;
    delete?: QuestionWhereInput | boolean;
    connect?: QuestionWhereUniqueInput;
    update?: XOR<
      XOR<
        QuestionUpdateToOneWithWhereWithoutVotesInput,
        QuestionUpdateWithoutVotesInput
      >,
      QuestionUncheckedUpdateWithoutVotesInput
    >;
  };

  export type AnswerUpdateOneWithoutVotesNestedInput = {
    create?: XOR<
      AnswerCreateWithoutVotesInput,
      AnswerUncheckedCreateWithoutVotesInput
    >;
    connectOrCreate?: AnswerCreateOrConnectWithoutVotesInput;
    upsert?: AnswerUpsertWithoutVotesInput;
    disconnect?: boolean;
    delete?: AnswerWhereInput | boolean;
    connect?: AnswerWhereUniqueInput;
    update?: XOR<
      XOR<
        AnswerUpdateToOneWithWhereWithoutVotesInput,
        AnswerUpdateWithoutVotesInput
      >,
      AnswerUncheckedUpdateWithoutVotesInput
    >;
  };

  export type UserCreateNestedOneWithoutCollectionInput = {
    create?: XOR<
      UserCreateWithoutCollectionInput,
      UserUncheckedCreateWithoutCollectionInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCollectionInput;
    connect?: UserWhereUniqueInput;
  };

  export type QuestionCreateNestedOneWithoutCollectionInput = {
    create?: XOR<
      QuestionCreateWithoutCollectionInput,
      QuestionUncheckedCreateWithoutCollectionInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutCollectionInput;
    connect?: QuestionWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutCollectionNestedInput = {
    create?: XOR<
      UserCreateWithoutCollectionInput,
      UserUncheckedCreateWithoutCollectionInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCollectionInput;
    upsert?: UserUpsertWithoutCollectionInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCollectionInput,
        UserUpdateWithoutCollectionInput
      >,
      UserUncheckedUpdateWithoutCollectionInput
    >;
  };

  export type QuestionUpdateOneWithoutCollectionNestedInput = {
    create?: XOR<
      QuestionCreateWithoutCollectionInput,
      QuestionUncheckedCreateWithoutCollectionInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutCollectionInput;
    upsert?: QuestionUpsertWithoutCollectionInput;
    disconnect?: boolean;
    delete?: QuestionWhereInput | boolean;
    connect?: QuestionWhereUniqueInput;
    update?: XOR<
      XOR<
        QuestionUpdateToOneWithWhereWithoutCollectionInput,
        QuestionUpdateWithoutCollectionInput
      >,
      QuestionUncheckedUpdateWithoutCollectionInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    isSet?: boolean;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider;
  };

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>;
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProviderWithAggregatesFilter<$PrismaModel>
      | $Enums.Provider;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumProviderFilter<$PrismaModel>;
    _max?: NestedEnumProviderFilter<$PrismaModel>;
  };

  export type NestedEnumVoteTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumVoteTypeFilter<$PrismaModel> | $Enums.VoteType;
  };

  export type NestedEnumVoteTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoteType | EnumVoteTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.VoteType[] | ListEnumVoteTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumVoteTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.VoteType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumVoteTypeFilter<$PrismaModel>;
    _max?: NestedEnumVoteTypeFilter<$PrismaModel>;
  };

  export type AccountCreateWithoutUserInput = {
    id?: string;
    name: string;
    image?: string | null;
    password?: string | null;
    provider: $Enums.Provider;
    providerAccountId: string;
    createdAt?: Date | string;
  };

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    image?: string | null;
    password?: string | null;
    provider: $Enums.Provider;
    providerAccountId: string;
    createdAt?: Date | string;
  };

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput;
    create: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >;
  };

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[];
  };

  export type QuestionCreateWithoutAuthorInput = {
    id?: string;
    summary: string;
    description: string;
    views?: number;
    answersCount?: number;
    createdAt?: Date | string;
    answers?: AnswerCreateNestedManyWithoutQuestionInput;
    tags?: QuestionTagCreateNestedManyWithoutQuestionInput;
    votes?: VoteCreateNestedManyWithoutQuestionInput;
    Collection?: CollectionCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionUncheckedCreateWithoutAuthorInput = {
    id?: string;
    summary: string;
    description: string;
    views?: number;
    answersCount?: number;
    createdAt?: Date | string;
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    tags?: QuestionTagUncheckedCreateNestedManyWithoutQuestionInput;
    votes?: VoteUncheckedCreateNestedManyWithoutQuestionInput;
    Collection?: CollectionUncheckedCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionCreateOrConnectWithoutAuthorInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutAuthorInput,
      QuestionUncheckedCreateWithoutAuthorInput
    >;
  };

  export type QuestionCreateManyAuthorInputEnvelope = {
    data: QuestionCreateManyAuthorInput | QuestionCreateManyAuthorInput[];
  };

  export type AnswerCreateWithoutAuthorInput = {
    id?: string;
    description: string;
    createdAt?: Date | string;
    question: QuestionCreateNestedOneWithoutAnswersInput;
    votes?: VoteCreateNestedManyWithoutAnswerInput;
  };

  export type AnswerUncheckedCreateWithoutAuthorInput = {
    id?: string;
    questionId: string;
    description: string;
    createdAt?: Date | string;
    votes?: VoteUncheckedCreateNestedManyWithoutAnswerInput;
  };

  export type AnswerCreateOrConnectWithoutAuthorInput = {
    where: AnswerWhereUniqueInput;
    create: XOR<
      AnswerCreateWithoutAuthorInput,
      AnswerUncheckedCreateWithoutAuthorInput
    >;
  };

  export type AnswerCreateManyAuthorInputEnvelope = {
    data: AnswerCreateManyAuthorInput | AnswerCreateManyAuthorInput[];
  };

  export type VoteCreateWithoutUserInput = {
    id?: string;
    type: $Enums.VoteType;
    createdAt?: Date | string;
    question?: QuestionCreateNestedOneWithoutVotesInput;
    answer?: AnswerCreateNestedOneWithoutVotesInput;
  };

  export type VoteUncheckedCreateWithoutUserInput = {
    id?: string;
    questionId?: string | null;
    answerId?: string | null;
    type: $Enums.VoteType;
    createdAt?: Date | string;
  };

  export type VoteCreateOrConnectWithoutUserInput = {
    where: VoteWhereUniqueInput;
    create: XOR<
      VoteCreateWithoutUserInput,
      VoteUncheckedCreateWithoutUserInput
    >;
  };

  export type VoteCreateManyUserInputEnvelope = {
    data: VoteCreateManyUserInput | VoteCreateManyUserInput[];
  };

  export type CollectionCreateWithoutUserInput = {
    id?: string;
    question?: QuestionCreateNestedOneWithoutCollectionInput;
  };

  export type CollectionUncheckedCreateWithoutUserInput = {
    id?: string;
    questionId?: string | null;
  };

  export type CollectionCreateOrConnectWithoutUserInput = {
    where: CollectionWhereUniqueInput;
    create: XOR<
      CollectionCreateWithoutUserInput,
      CollectionUncheckedCreateWithoutUserInput
    >;
  };

  export type CollectionCreateManyUserInputEnvelope = {
    data: CollectionCreateManyUserInput | CollectionCreateManyUserInput[];
  };

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput;
    update: XOR<
      AccountUpdateWithoutUserInput,
      AccountUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >;
  };

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput;
    data: XOR<
      AccountUpdateWithoutUserInput,
      AccountUncheckedUpdateWithoutUserInput
    >;
  };

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput;
    data: XOR<
      AccountUpdateManyMutationInput,
      AccountUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[];
    OR?: AccountScalarWhereInput[];
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[];
    id?: StringFilter<'Account'> | string;
    userId?: StringFilter<'Account'> | string;
    name?: StringFilter<'Account'> | string;
    image?: StringNullableFilter<'Account'> | string | null;
    password?: StringNullableFilter<'Account'> | string | null;
    provider?: EnumProviderFilter<'Account'> | $Enums.Provider;
    providerAccountId?: StringFilter<'Account'> | string;
    createdAt?: DateTimeFilter<'Account'> | Date | string;
  };

  export type QuestionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: QuestionWhereUniqueInput;
    update: XOR<
      QuestionUpdateWithoutAuthorInput,
      QuestionUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      QuestionCreateWithoutAuthorInput,
      QuestionUncheckedCreateWithoutAuthorInput
    >;
  };

  export type QuestionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: QuestionWhereUniqueInput;
    data: XOR<
      QuestionUpdateWithoutAuthorInput,
      QuestionUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type QuestionUpdateManyWithWhereWithoutAuthorInput = {
    where: QuestionScalarWhereInput;
    data: XOR<
      QuestionUpdateManyMutationInput,
      QuestionUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
    OR?: QuestionScalarWhereInput[];
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[];
    id?: StringFilter<'Question'> | string;
    authorId?: StringFilter<'Question'> | string;
    summary?: StringFilter<'Question'> | string;
    description?: StringFilter<'Question'> | string;
    views?: IntFilter<'Question'> | number;
    answersCount?: IntFilter<'Question'> | number;
    createdAt?: DateTimeFilter<'Question'> | Date | string;
  };

  export type AnswerUpsertWithWhereUniqueWithoutAuthorInput = {
    where: AnswerWhereUniqueInput;
    update: XOR<
      AnswerUpdateWithoutAuthorInput,
      AnswerUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      AnswerCreateWithoutAuthorInput,
      AnswerUncheckedCreateWithoutAuthorInput
    >;
  };

  export type AnswerUpdateWithWhereUniqueWithoutAuthorInput = {
    where: AnswerWhereUniqueInput;
    data: XOR<
      AnswerUpdateWithoutAuthorInput,
      AnswerUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type AnswerUpdateManyWithWhereWithoutAuthorInput = {
    where: AnswerScalarWhereInput;
    data: XOR<
      AnswerUpdateManyMutationInput,
      AnswerUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
    OR?: AnswerScalarWhereInput[];
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[];
    id?: StringFilter<'Answer'> | string;
    authorId?: StringFilter<'Answer'> | string;
    questionId?: StringFilter<'Answer'> | string;
    description?: StringFilter<'Answer'> | string;
    createdAt?: DateTimeFilter<'Answer'> | Date | string;
  };

  export type VoteUpsertWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput;
    update: XOR<
      VoteUpdateWithoutUserInput,
      VoteUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      VoteCreateWithoutUserInput,
      VoteUncheckedCreateWithoutUserInput
    >;
  };

  export type VoteUpdateWithWhereUniqueWithoutUserInput = {
    where: VoteWhereUniqueInput;
    data: XOR<VoteUpdateWithoutUserInput, VoteUncheckedUpdateWithoutUserInput>;
  };

  export type VoteUpdateManyWithWhereWithoutUserInput = {
    where: VoteScalarWhereInput;
    data: XOR<
      VoteUpdateManyMutationInput,
      VoteUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[];
    OR?: VoteScalarWhereInput[];
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[];
    id?: StringFilter<'Vote'> | string;
    userId?: StringFilter<'Vote'> | string;
    questionId?: StringNullableFilter<'Vote'> | string | null;
    answerId?: StringNullableFilter<'Vote'> | string | null;
    type?: EnumVoteTypeFilter<'Vote'> | $Enums.VoteType;
    createdAt?: DateTimeFilter<'Vote'> | Date | string;
  };

  export type CollectionUpsertWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput;
    update: XOR<
      CollectionUpdateWithoutUserInput,
      CollectionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      CollectionCreateWithoutUserInput,
      CollectionUncheckedCreateWithoutUserInput
    >;
  };

  export type CollectionUpdateWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput;
    data: XOR<
      CollectionUpdateWithoutUserInput,
      CollectionUncheckedUpdateWithoutUserInput
    >;
  };

  export type CollectionUpdateManyWithWhereWithoutUserInput = {
    where: CollectionScalarWhereInput;
    data: XOR<
      CollectionUpdateManyMutationInput,
      CollectionUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type CollectionScalarWhereInput = {
    AND?: CollectionScalarWhereInput | CollectionScalarWhereInput[];
    OR?: CollectionScalarWhereInput[];
    NOT?: CollectionScalarWhereInput | CollectionScalarWhereInput[];
    id?: StringFilter<'Collection'> | string;
    userId?: StringFilter<'Collection'> | string;
    questionId?: StringNullableFilter<'Collection'> | string | null;
  };

  export type UserCreateWithoutAccountsInput = {
    id?: string;
    email: string;
    name: string;
    image: string;
    location?: string | null;
    portfolio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    questions?: QuestionCreateNestedManyWithoutAuthorInput;
    answers?: AnswerCreateNestedManyWithoutAuthorInput;
    votes?: VoteCreateNestedManyWithoutUserInput;
    Collection?: CollectionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string;
    email: string;
    name: string;
    image: string;
    location?: string | null;
    portfolio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput;
    Collection?: CollectionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
  };

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<
      UserUpdateWithoutAccountsInput,
      UserUncheckedUpdateWithoutAccountsInput
    >;
    create: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutAccountsInput,
      UserUncheckedUpdateWithoutAccountsInput
    >;
  };

  export type UserUpdateWithoutAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: QuestionUpdateManyWithoutAuthorNestedInput;
    answers?: AnswerUpdateManyWithoutAuthorNestedInput;
    votes?: VoteUpdateManyWithoutUserNestedInput;
    Collection?: CollectionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput;
    Collection?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutQuestionsInput = {
    id?: string;
    email: string;
    name: string;
    image: string;
    location?: string | null;
    portfolio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    answers?: AnswerCreateNestedManyWithoutAuthorInput;
    votes?: VoteCreateNestedManyWithoutUserInput;
    Collection?: CollectionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutQuestionsInput = {
    id?: string;
    email: string;
    name: string;
    image: string;
    location?: string | null;
    portfolio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput;
    Collection?: CollectionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutQuestionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutQuestionsInput,
      UserUncheckedCreateWithoutQuestionsInput
    >;
  };

  export type AnswerCreateWithoutQuestionInput = {
    id?: string;
    description: string;
    createdAt?: Date | string;
    author: UserCreateNestedOneWithoutAnswersInput;
    votes?: VoteCreateNestedManyWithoutAnswerInput;
  };

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string;
    authorId: string;
    description: string;
    createdAt?: Date | string;
    votes?: VoteUncheckedCreateNestedManyWithoutAnswerInput;
  };

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput;
    create: XOR<
      AnswerCreateWithoutQuestionInput,
      AnswerUncheckedCreateWithoutQuestionInput
    >;
  };

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[];
  };

  export type QuestionTagCreateWithoutQuestionInput = {
    id?: string;
    createdAt?: Date | string;
    tag: TagCreateNestedOneWithoutQuestionsInput;
  };

  export type QuestionTagUncheckedCreateWithoutQuestionInput = {
    id?: string;
    tagId: string;
    createdAt?: Date | string;
  };

  export type QuestionTagCreateOrConnectWithoutQuestionInput = {
    where: QuestionTagWhereUniqueInput;
    create: XOR<
      QuestionTagCreateWithoutQuestionInput,
      QuestionTagUncheckedCreateWithoutQuestionInput
    >;
  };

  export type QuestionTagCreateManyQuestionInputEnvelope = {
    data:
      | QuestionTagCreateManyQuestionInput
      | QuestionTagCreateManyQuestionInput[];
  };

  export type VoteCreateWithoutQuestionInput = {
    id?: string;
    type: $Enums.VoteType;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutVotesInput;
    answer?: AnswerCreateNestedOneWithoutVotesInput;
  };

  export type VoteUncheckedCreateWithoutQuestionInput = {
    id?: string;
    userId: string;
    answerId?: string | null;
    type: $Enums.VoteType;
    createdAt?: Date | string;
  };

  export type VoteCreateOrConnectWithoutQuestionInput = {
    where: VoteWhereUniqueInput;
    create: XOR<
      VoteCreateWithoutQuestionInput,
      VoteUncheckedCreateWithoutQuestionInput
    >;
  };

  export type VoteCreateManyQuestionInputEnvelope = {
    data: VoteCreateManyQuestionInput | VoteCreateManyQuestionInput[];
  };

  export type CollectionCreateWithoutQuestionInput = {
    id?: string;
    user: UserCreateNestedOneWithoutCollectionInput;
  };

  export type CollectionUncheckedCreateWithoutQuestionInput = {
    id?: string;
    userId: string;
  };

  export type CollectionCreateOrConnectWithoutQuestionInput = {
    where: CollectionWhereUniqueInput;
    create: XOR<
      CollectionCreateWithoutQuestionInput,
      CollectionUncheckedCreateWithoutQuestionInput
    >;
  };

  export type CollectionCreateManyQuestionInputEnvelope = {
    data:
      | CollectionCreateManyQuestionInput
      | CollectionCreateManyQuestionInput[];
  };

  export type UserUpsertWithoutQuestionsInput = {
    update: XOR<
      UserUpdateWithoutQuestionsInput,
      UserUncheckedUpdateWithoutQuestionsInput
    >;
    create: XOR<
      UserCreateWithoutQuestionsInput,
      UserUncheckedCreateWithoutQuestionsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutQuestionsInput,
      UserUncheckedUpdateWithoutQuestionsInput
    >;
  };

  export type UserUpdateWithoutQuestionsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    answers?: AnswerUpdateManyWithoutAuthorNestedInput;
    votes?: VoteUpdateManyWithoutUserNestedInput;
    Collection?: CollectionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutQuestionsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput;
    Collection?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput;
    update: XOR<
      AnswerUpdateWithoutQuestionInput,
      AnswerUncheckedUpdateWithoutQuestionInput
    >;
    create: XOR<
      AnswerCreateWithoutQuestionInput,
      AnswerUncheckedCreateWithoutQuestionInput
    >;
  };

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput;
    data: XOR<
      AnswerUpdateWithoutQuestionInput,
      AnswerUncheckedUpdateWithoutQuestionInput
    >;
  };

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput;
    data: XOR<
      AnswerUpdateManyMutationInput,
      AnswerUncheckedUpdateManyWithoutQuestionInput
    >;
  };

  export type QuestionTagUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionTagWhereUniqueInput;
    update: XOR<
      QuestionTagUpdateWithoutQuestionInput,
      QuestionTagUncheckedUpdateWithoutQuestionInput
    >;
    create: XOR<
      QuestionTagCreateWithoutQuestionInput,
      QuestionTagUncheckedCreateWithoutQuestionInput
    >;
  };

  export type QuestionTagUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionTagWhereUniqueInput;
    data: XOR<
      QuestionTagUpdateWithoutQuestionInput,
      QuestionTagUncheckedUpdateWithoutQuestionInput
    >;
  };

  export type QuestionTagUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionTagScalarWhereInput;
    data: XOR<
      QuestionTagUpdateManyMutationInput,
      QuestionTagUncheckedUpdateManyWithoutQuestionInput
    >;
  };

  export type QuestionTagScalarWhereInput = {
    AND?: QuestionTagScalarWhereInput | QuestionTagScalarWhereInput[];
    OR?: QuestionTagScalarWhereInput[];
    NOT?: QuestionTagScalarWhereInput | QuestionTagScalarWhereInput[];
    id?: StringFilter<'QuestionTag'> | string;
    questionId?: StringFilter<'QuestionTag'> | string;
    tagId?: StringFilter<'QuestionTag'> | string;
    createdAt?: DateTimeFilter<'QuestionTag'> | Date | string;
  };

  export type VoteUpsertWithWhereUniqueWithoutQuestionInput = {
    where: VoteWhereUniqueInput;
    update: XOR<
      VoteUpdateWithoutQuestionInput,
      VoteUncheckedUpdateWithoutQuestionInput
    >;
    create: XOR<
      VoteCreateWithoutQuestionInput,
      VoteUncheckedCreateWithoutQuestionInput
    >;
  };

  export type VoteUpdateWithWhereUniqueWithoutQuestionInput = {
    where: VoteWhereUniqueInput;
    data: XOR<
      VoteUpdateWithoutQuestionInput,
      VoteUncheckedUpdateWithoutQuestionInput
    >;
  };

  export type VoteUpdateManyWithWhereWithoutQuestionInput = {
    where: VoteScalarWhereInput;
    data: XOR<
      VoteUpdateManyMutationInput,
      VoteUncheckedUpdateManyWithoutQuestionInput
    >;
  };

  export type CollectionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: CollectionWhereUniqueInput;
    update: XOR<
      CollectionUpdateWithoutQuestionInput,
      CollectionUncheckedUpdateWithoutQuestionInput
    >;
    create: XOR<
      CollectionCreateWithoutQuestionInput,
      CollectionUncheckedCreateWithoutQuestionInput
    >;
  };

  export type CollectionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: CollectionWhereUniqueInput;
    data: XOR<
      CollectionUpdateWithoutQuestionInput,
      CollectionUncheckedUpdateWithoutQuestionInput
    >;
  };

  export type CollectionUpdateManyWithWhereWithoutQuestionInput = {
    where: CollectionScalarWhereInput;
    data: XOR<
      CollectionUpdateManyMutationInput,
      CollectionUncheckedUpdateManyWithoutQuestionInput
    >;
  };

  export type QuestionTagCreateWithoutTagInput = {
    id?: string;
    createdAt?: Date | string;
    question: QuestionCreateNestedOneWithoutTagsInput;
  };

  export type QuestionTagUncheckedCreateWithoutTagInput = {
    id?: string;
    questionId: string;
    createdAt?: Date | string;
  };

  export type QuestionTagCreateOrConnectWithoutTagInput = {
    where: QuestionTagWhereUniqueInput;
    create: XOR<
      QuestionTagCreateWithoutTagInput,
      QuestionTagUncheckedCreateWithoutTagInput
    >;
  };

  export type QuestionTagCreateManyTagInputEnvelope = {
    data: QuestionTagCreateManyTagInput | QuestionTagCreateManyTagInput[];
  };

  export type QuestionTagUpsertWithWhereUniqueWithoutTagInput = {
    where: QuestionTagWhereUniqueInput;
    update: XOR<
      QuestionTagUpdateWithoutTagInput,
      QuestionTagUncheckedUpdateWithoutTagInput
    >;
    create: XOR<
      QuestionTagCreateWithoutTagInput,
      QuestionTagUncheckedCreateWithoutTagInput
    >;
  };

  export type QuestionTagUpdateWithWhereUniqueWithoutTagInput = {
    where: QuestionTagWhereUniqueInput;
    data: XOR<
      QuestionTagUpdateWithoutTagInput,
      QuestionTagUncheckedUpdateWithoutTagInput
    >;
  };

  export type QuestionTagUpdateManyWithWhereWithoutTagInput = {
    where: QuestionTagScalarWhereInput;
    data: XOR<
      QuestionTagUpdateManyMutationInput,
      QuestionTagUncheckedUpdateManyWithoutTagInput
    >;
  };

  export type QuestionCreateWithoutTagsInput = {
    id?: string;
    summary: string;
    description: string;
    views?: number;
    answersCount?: number;
    createdAt?: Date | string;
    author: UserCreateNestedOneWithoutQuestionsInput;
    answers?: AnswerCreateNestedManyWithoutQuestionInput;
    votes?: VoteCreateNestedManyWithoutQuestionInput;
    Collection?: CollectionCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionUncheckedCreateWithoutTagsInput = {
    id?: string;
    authorId: string;
    summary: string;
    description: string;
    views?: number;
    answersCount?: number;
    createdAt?: Date | string;
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    votes?: VoteUncheckedCreateNestedManyWithoutQuestionInput;
    Collection?: CollectionUncheckedCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionCreateOrConnectWithoutTagsInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutTagsInput,
      QuestionUncheckedCreateWithoutTagsInput
    >;
  };

  export type TagCreateWithoutQuestionsInput = {
    id?: string;
    name: string;
    questionsCount?: number;
    createdAt?: Date | string;
  };

  export type TagUncheckedCreateWithoutQuestionsInput = {
    id?: string;
    name: string;
    questionsCount?: number;
    createdAt?: Date | string;
  };

  export type TagCreateOrConnectWithoutQuestionsInput = {
    where: TagWhereUniqueInput;
    create: XOR<
      TagCreateWithoutQuestionsInput,
      TagUncheckedCreateWithoutQuestionsInput
    >;
  };

  export type QuestionUpsertWithoutTagsInput = {
    update: XOR<
      QuestionUpdateWithoutTagsInput,
      QuestionUncheckedUpdateWithoutTagsInput
    >;
    create: XOR<
      QuestionCreateWithoutTagsInput,
      QuestionUncheckedCreateWithoutTagsInput
    >;
    where?: QuestionWhereInput;
  };

  export type QuestionUpdateToOneWithWhereWithoutTagsInput = {
    where?: QuestionWhereInput;
    data: XOR<
      QuestionUpdateWithoutTagsInput,
      QuestionUncheckedUpdateWithoutTagsInput
    >;
  };

  export type QuestionUpdateWithoutTagsInput = {
    summary?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    answersCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput;
    answers?: AnswerUpdateManyWithoutQuestionNestedInput;
    votes?: VoteUpdateManyWithoutQuestionNestedInput;
    Collection?: CollectionUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutTagsInput = {
    authorId?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    answersCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    votes?: VoteUncheckedUpdateManyWithoutQuestionNestedInput;
    Collection?: CollectionUncheckedUpdateManyWithoutQuestionNestedInput;
  };

  export type TagUpsertWithoutQuestionsInput = {
    update: XOR<
      TagUpdateWithoutQuestionsInput,
      TagUncheckedUpdateWithoutQuestionsInput
    >;
    create: XOR<
      TagCreateWithoutQuestionsInput,
      TagUncheckedCreateWithoutQuestionsInput
    >;
    where?: TagWhereInput;
  };

  export type TagUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: TagWhereInput;
    data: XOR<
      TagUpdateWithoutQuestionsInput,
      TagUncheckedUpdateWithoutQuestionsInput
    >;
  };

  export type TagUpdateWithoutQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    questionsCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagUncheckedUpdateWithoutQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    questionsCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateWithoutAnswersInput = {
    id?: string;
    email: string;
    name: string;
    image: string;
    location?: string | null;
    portfolio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    questions?: QuestionCreateNestedManyWithoutAuthorInput;
    votes?: VoteCreateNestedManyWithoutUserInput;
    Collection?: CollectionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutAnswersInput = {
    id?: string;
    email: string;
    name: string;
    image: string;
    location?: string | null;
    portfolio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput;
    Collection?: CollectionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutAnswersInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAnswersInput,
      UserUncheckedCreateWithoutAnswersInput
    >;
  };

  export type QuestionCreateWithoutAnswersInput = {
    id?: string;
    summary: string;
    description: string;
    views?: number;
    answersCount?: number;
    createdAt?: Date | string;
    author: UserCreateNestedOneWithoutQuestionsInput;
    tags?: QuestionTagCreateNestedManyWithoutQuestionInput;
    votes?: VoteCreateNestedManyWithoutQuestionInput;
    Collection?: CollectionCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string;
    authorId: string;
    summary: string;
    description: string;
    views?: number;
    answersCount?: number;
    createdAt?: Date | string;
    tags?: QuestionTagUncheckedCreateNestedManyWithoutQuestionInput;
    votes?: VoteUncheckedCreateNestedManyWithoutQuestionInput;
    Collection?: CollectionUncheckedCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutAnswersInput,
      QuestionUncheckedCreateWithoutAnswersInput
    >;
  };

  export type VoteCreateWithoutAnswerInput = {
    id?: string;
    type: $Enums.VoteType;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutVotesInput;
    question?: QuestionCreateNestedOneWithoutVotesInput;
  };

  export type VoteUncheckedCreateWithoutAnswerInput = {
    id?: string;
    userId: string;
    questionId?: string | null;
    type: $Enums.VoteType;
    createdAt?: Date | string;
  };

  export type VoteCreateOrConnectWithoutAnswerInput = {
    where: VoteWhereUniqueInput;
    create: XOR<
      VoteCreateWithoutAnswerInput,
      VoteUncheckedCreateWithoutAnswerInput
    >;
  };

  export type VoteCreateManyAnswerInputEnvelope = {
    data: VoteCreateManyAnswerInput | VoteCreateManyAnswerInput[];
  };

  export type UserUpsertWithoutAnswersInput = {
    update: XOR<
      UserUpdateWithoutAnswersInput,
      UserUncheckedUpdateWithoutAnswersInput
    >;
    create: XOR<
      UserCreateWithoutAnswersInput,
      UserUncheckedCreateWithoutAnswersInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAnswersInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutAnswersInput,
      UserUncheckedUpdateWithoutAnswersInput
    >;
  };

  export type UserUpdateWithoutAnswersInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    questions?: QuestionUpdateManyWithoutAuthorNestedInput;
    votes?: VoteUpdateManyWithoutUserNestedInput;
    Collection?: CollectionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutAnswersInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput;
    Collection?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<
      QuestionUpdateWithoutAnswersInput,
      QuestionUncheckedUpdateWithoutAnswersInput
    >;
    create: XOR<
      QuestionCreateWithoutAnswersInput,
      QuestionUncheckedCreateWithoutAnswersInput
    >;
    where?: QuestionWhereInput;
  };

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput;
    data: XOR<
      QuestionUpdateWithoutAnswersInput,
      QuestionUncheckedUpdateWithoutAnswersInput
    >;
  };

  export type QuestionUpdateWithoutAnswersInput = {
    summary?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    answersCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput;
    tags?: QuestionTagUpdateManyWithoutQuestionNestedInput;
    votes?: VoteUpdateManyWithoutQuestionNestedInput;
    Collection?: CollectionUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    authorId?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    answersCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: QuestionTagUncheckedUpdateManyWithoutQuestionNestedInput;
    votes?: VoteUncheckedUpdateManyWithoutQuestionNestedInput;
    Collection?: CollectionUncheckedUpdateManyWithoutQuestionNestedInput;
  };

  export type VoteUpsertWithWhereUniqueWithoutAnswerInput = {
    where: VoteWhereUniqueInput;
    update: XOR<
      VoteUpdateWithoutAnswerInput,
      VoteUncheckedUpdateWithoutAnswerInput
    >;
    create: XOR<
      VoteCreateWithoutAnswerInput,
      VoteUncheckedCreateWithoutAnswerInput
    >;
  };

  export type VoteUpdateWithWhereUniqueWithoutAnswerInput = {
    where: VoteWhereUniqueInput;
    data: XOR<
      VoteUpdateWithoutAnswerInput,
      VoteUncheckedUpdateWithoutAnswerInput
    >;
  };

  export type VoteUpdateManyWithWhereWithoutAnswerInput = {
    where: VoteScalarWhereInput;
    data: XOR<
      VoteUpdateManyMutationInput,
      VoteUncheckedUpdateManyWithoutAnswerInput
    >;
  };

  export type UserCreateWithoutVotesInput = {
    id?: string;
    email: string;
    name: string;
    image: string;
    location?: string | null;
    portfolio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    questions?: QuestionCreateNestedManyWithoutAuthorInput;
    answers?: AnswerCreateNestedManyWithoutAuthorInput;
    Collection?: CollectionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutVotesInput = {
    id?: string;
    email: string;
    name: string;
    image: string;
    location?: string | null;
    portfolio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    Collection?: CollectionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutVotesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutVotesInput,
      UserUncheckedCreateWithoutVotesInput
    >;
  };

  export type QuestionCreateWithoutVotesInput = {
    id?: string;
    summary: string;
    description: string;
    views?: number;
    answersCount?: number;
    createdAt?: Date | string;
    author: UserCreateNestedOneWithoutQuestionsInput;
    answers?: AnswerCreateNestedManyWithoutQuestionInput;
    tags?: QuestionTagCreateNestedManyWithoutQuestionInput;
    Collection?: CollectionCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionUncheckedCreateWithoutVotesInput = {
    id?: string;
    authorId: string;
    summary: string;
    description: string;
    views?: number;
    answersCount?: number;
    createdAt?: Date | string;
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    tags?: QuestionTagUncheckedCreateNestedManyWithoutQuestionInput;
    Collection?: CollectionUncheckedCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionCreateOrConnectWithoutVotesInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutVotesInput,
      QuestionUncheckedCreateWithoutVotesInput
    >;
  };

  export type AnswerCreateWithoutVotesInput = {
    id?: string;
    description: string;
    createdAt?: Date | string;
    author: UserCreateNestedOneWithoutAnswersInput;
    question: QuestionCreateNestedOneWithoutAnswersInput;
  };

  export type AnswerUncheckedCreateWithoutVotesInput = {
    id?: string;
    authorId: string;
    questionId: string;
    description: string;
    createdAt?: Date | string;
  };

  export type AnswerCreateOrConnectWithoutVotesInput = {
    where: AnswerWhereUniqueInput;
    create: XOR<
      AnswerCreateWithoutVotesInput,
      AnswerUncheckedCreateWithoutVotesInput
    >;
  };

  export type UserUpsertWithoutVotesInput = {
    update: XOR<
      UserUpdateWithoutVotesInput,
      UserUncheckedUpdateWithoutVotesInput
    >;
    create: XOR<
      UserCreateWithoutVotesInput,
      UserUncheckedCreateWithoutVotesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutVotesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutVotesInput,
      UserUncheckedUpdateWithoutVotesInput
    >;
  };

  export type UserUpdateWithoutVotesInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    questions?: QuestionUpdateManyWithoutAuthorNestedInput;
    answers?: AnswerUpdateManyWithoutAuthorNestedInput;
    Collection?: CollectionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutVotesInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    Collection?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type QuestionUpsertWithoutVotesInput = {
    update: XOR<
      QuestionUpdateWithoutVotesInput,
      QuestionUncheckedUpdateWithoutVotesInput
    >;
    create: XOR<
      QuestionCreateWithoutVotesInput,
      QuestionUncheckedCreateWithoutVotesInput
    >;
    where?: QuestionWhereInput;
  };

  export type QuestionUpdateToOneWithWhereWithoutVotesInput = {
    where?: QuestionWhereInput;
    data: XOR<
      QuestionUpdateWithoutVotesInput,
      QuestionUncheckedUpdateWithoutVotesInput
    >;
  };

  export type QuestionUpdateWithoutVotesInput = {
    summary?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    answersCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput;
    answers?: AnswerUpdateManyWithoutQuestionNestedInput;
    tags?: QuestionTagUpdateManyWithoutQuestionNestedInput;
    Collection?: CollectionUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutVotesInput = {
    authorId?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    answersCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    tags?: QuestionTagUncheckedUpdateManyWithoutQuestionNestedInput;
    Collection?: CollectionUncheckedUpdateManyWithoutQuestionNestedInput;
  };

  export type AnswerUpsertWithoutVotesInput = {
    update: XOR<
      AnswerUpdateWithoutVotesInput,
      AnswerUncheckedUpdateWithoutVotesInput
    >;
    create: XOR<
      AnswerCreateWithoutVotesInput,
      AnswerUncheckedCreateWithoutVotesInput
    >;
    where?: AnswerWhereInput;
  };

  export type AnswerUpdateToOneWithWhereWithoutVotesInput = {
    where?: AnswerWhereInput;
    data: XOR<
      AnswerUpdateWithoutVotesInput,
      AnswerUncheckedUpdateWithoutVotesInput
    >;
  };

  export type AnswerUpdateWithoutVotesInput = {
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutAnswersNestedInput;
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput;
  };

  export type AnswerUncheckedUpdateWithoutVotesInput = {
    authorId?: StringFieldUpdateOperationsInput | string;
    questionId?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateWithoutCollectionInput = {
    id?: string;
    email: string;
    name: string;
    image: string;
    location?: string | null;
    portfolio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    questions?: QuestionCreateNestedManyWithoutAuthorInput;
    answers?: AnswerCreateNestedManyWithoutAuthorInput;
    votes?: VoteCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCollectionInput = {
    id?: string;
    email: string;
    name: string;
    image: string;
    location?: string | null;
    portfolio?: string | null;
    reputation?: number;
    createdAt?: Date | string;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    questions?: QuestionUncheckedCreateNestedManyWithoutAuthorInput;
    answers?: AnswerUncheckedCreateNestedManyWithoutAuthorInput;
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCollectionInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCollectionInput,
      UserUncheckedCreateWithoutCollectionInput
    >;
  };

  export type QuestionCreateWithoutCollectionInput = {
    id?: string;
    summary: string;
    description: string;
    views?: number;
    answersCount?: number;
    createdAt?: Date | string;
    author: UserCreateNestedOneWithoutQuestionsInput;
    answers?: AnswerCreateNestedManyWithoutQuestionInput;
    tags?: QuestionTagCreateNestedManyWithoutQuestionInput;
    votes?: VoteCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionUncheckedCreateWithoutCollectionInput = {
    id?: string;
    authorId: string;
    summary: string;
    description: string;
    views?: number;
    answersCount?: number;
    createdAt?: Date | string;
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    tags?: QuestionTagUncheckedCreateNestedManyWithoutQuestionInput;
    votes?: VoteUncheckedCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionCreateOrConnectWithoutCollectionInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutCollectionInput,
      QuestionUncheckedCreateWithoutCollectionInput
    >;
  };

  export type UserUpsertWithoutCollectionInput = {
    update: XOR<
      UserUpdateWithoutCollectionInput,
      UserUncheckedUpdateWithoutCollectionInput
    >;
    create: XOR<
      UserCreateWithoutCollectionInput,
      UserUncheckedCreateWithoutCollectionInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCollectionInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCollectionInput,
      UserUncheckedUpdateWithoutCollectionInput
    >;
  };

  export type UserUpdateWithoutCollectionInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    questions?: QuestionUpdateManyWithoutAuthorNestedInput;
    answers?: AnswerUpdateManyWithoutAuthorNestedInput;
    votes?: VoteUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCollectionInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    portfolio?: NullableStringFieldUpdateOperationsInput | string | null;
    reputation?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    questions?: QuestionUncheckedUpdateManyWithoutAuthorNestedInput;
    answers?: AnswerUncheckedUpdateManyWithoutAuthorNestedInput;
    votes?: VoteUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type QuestionUpsertWithoutCollectionInput = {
    update: XOR<
      QuestionUpdateWithoutCollectionInput,
      QuestionUncheckedUpdateWithoutCollectionInput
    >;
    create: XOR<
      QuestionCreateWithoutCollectionInput,
      QuestionUncheckedCreateWithoutCollectionInput
    >;
    where?: QuestionWhereInput;
  };

  export type QuestionUpdateToOneWithWhereWithoutCollectionInput = {
    where?: QuestionWhereInput;
    data: XOR<
      QuestionUpdateWithoutCollectionInput,
      QuestionUncheckedUpdateWithoutCollectionInput
    >;
  };

  export type QuestionUpdateWithoutCollectionInput = {
    summary?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    answersCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutQuestionsNestedInput;
    answers?: AnswerUpdateManyWithoutQuestionNestedInput;
    tags?: QuestionTagUpdateManyWithoutQuestionNestedInput;
    votes?: VoteUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutCollectionInput = {
    authorId?: StringFieldUpdateOperationsInput | string;
    summary?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    answersCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    tags?: QuestionTagUncheckedUpdateManyWithoutQuestionNestedInput;
    votes?: VoteUncheckedUpdateManyWithoutQuestionNestedInput;
  };

  export type AccountCreateManyUserInput = {
    id?: string;
    name: string;
    image?: string | null;
    password?: string | null;
    provider: $Enums.Provider;
    providerAccountId: string;
    createdAt?: Date | string;
  };

  export type QuestionCreateManyAuthorInput = {
    id?: string;
    summary: string;
    description: string;
    views?: number;
    answersCount?: number;
    createdAt?: Date | string;
  };

  export type AnswerCreateManyAuthorInput = {
    id?: string;
    questionId: string;
    description: string;
    createdAt?: Date | string;
  };

  export type VoteCreateManyUserInput = {
    id?: string;
    questionId?: string | null;
    answerId?: string | null;
    type: $Enums.VoteType;
    createdAt?: Date | string;
  };

  export type CollectionCreateManyUserInput = {
    id?: string;
    questionId?: string | null;
  };

  export type AccountUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionUpdateWithoutAuthorInput = {
    summary?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    answersCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: AnswerUpdateManyWithoutQuestionNestedInput;
    tags?: QuestionTagUpdateManyWithoutQuestionNestedInput;
    votes?: VoteUpdateManyWithoutQuestionNestedInput;
    Collection?: CollectionUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutAuthorInput = {
    summary?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    answersCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    tags?: QuestionTagUncheckedUpdateManyWithoutQuestionNestedInput;
    votes?: VoteUncheckedUpdateManyWithoutQuestionNestedInput;
    Collection?: CollectionUncheckedUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionUncheckedUpdateManyWithoutAuthorInput = {
    summary?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    views?: IntFieldUpdateOperationsInput | number;
    answersCount?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnswerUpdateWithoutAuthorInput = {
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput;
    votes?: VoteUpdateManyWithoutAnswerNestedInput;
  };

  export type AnswerUncheckedUpdateWithoutAuthorInput = {
    questionId?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    votes?: VoteUncheckedUpdateManyWithoutAnswerNestedInput;
  };

  export type AnswerUncheckedUpdateManyWithoutAuthorInput = {
    questionId?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VoteUpdateWithoutUserInput = {
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    question?: QuestionUpdateOneWithoutVotesNestedInput;
    answer?: AnswerUpdateOneWithoutVotesNestedInput;
  };

  export type VoteUncheckedUpdateWithoutUserInput = {
    questionId?: NullableStringFieldUpdateOperationsInput | string | null;
    answerId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VoteUncheckedUpdateManyWithoutUserInput = {
    questionId?: NullableStringFieldUpdateOperationsInput | string | null;
    answerId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CollectionUpdateWithoutUserInput = {
    question?: QuestionUpdateOneWithoutCollectionNestedInput;
  };

  export type CollectionUncheckedUpdateWithoutUserInput = {
    questionId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type CollectionUncheckedUpdateManyWithoutUserInput = {
    questionId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AnswerCreateManyQuestionInput = {
    id?: string;
    authorId: string;
    description: string;
    createdAt?: Date | string;
  };

  export type QuestionTagCreateManyQuestionInput = {
    id?: string;
    tagId: string;
    createdAt?: Date | string;
  };

  export type VoteCreateManyQuestionInput = {
    id?: string;
    userId: string;
    answerId?: string | null;
    type: $Enums.VoteType;
    createdAt?: Date | string;
  };

  export type CollectionCreateManyQuestionInput = {
    id?: string;
    userId: string;
  };

  export type AnswerUpdateWithoutQuestionInput = {
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutAnswersNestedInput;
    votes?: VoteUpdateManyWithoutAnswerNestedInput;
  };

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    authorId?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    votes?: VoteUncheckedUpdateManyWithoutAnswerNestedInput;
  };

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    authorId?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionTagUpdateWithoutQuestionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tag?: TagUpdateOneRequiredWithoutQuestionsNestedInput;
  };

  export type QuestionTagUncheckedUpdateWithoutQuestionInput = {
    tagId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionTagUncheckedUpdateManyWithoutQuestionInput = {
    tagId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VoteUpdateWithoutQuestionInput = {
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutVotesNestedInput;
    answer?: AnswerUpdateOneWithoutVotesNestedInput;
  };

  export type VoteUncheckedUpdateWithoutQuestionInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    answerId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VoteUncheckedUpdateManyWithoutQuestionInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    answerId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CollectionUpdateWithoutQuestionInput = {
    user?: UserUpdateOneRequiredWithoutCollectionNestedInput;
  };

  export type CollectionUncheckedUpdateWithoutQuestionInput = {
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type CollectionUncheckedUpdateManyWithoutQuestionInput = {
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type QuestionTagCreateManyTagInput = {
    id?: string;
    questionId: string;
    createdAt?: Date | string;
  };

  export type QuestionTagUpdateWithoutTagInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    question?: QuestionUpdateOneRequiredWithoutTagsNestedInput;
  };

  export type QuestionTagUncheckedUpdateWithoutTagInput = {
    questionId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionTagUncheckedUpdateManyWithoutTagInput = {
    questionId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VoteCreateManyAnswerInput = {
    id?: string;
    userId: string;
    questionId?: string | null;
    type: $Enums.VoteType;
    createdAt?: Date | string;
  };

  export type VoteUpdateWithoutAnswerInput = {
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutVotesNestedInput;
    question?: QuestionUpdateOneWithoutVotesNestedInput;
  };

  export type VoteUncheckedUpdateWithoutAnswerInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    questionId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VoteUncheckedUpdateManyWithoutAnswerInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    questionId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumVoteTypeFieldUpdateOperationsInput | $Enums.VoteType;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
