/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model assignment
 *
 */
export type assignment = $Result.DefaultSelection<Prisma.$assignmentPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model course
 *
 */
export type course = $Result.DefaultSelection<Prisma.$coursePayload>;
/**
 * Model grade
 *
 */
export type grade = $Result.DefaultSelection<Prisma.$gradePayload>;
/**
 * Model lesson
 *
 */
export type lesson = $Result.DefaultSelection<Prisma.$lessonPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Assignments
 * const assignments = await prisma.assignment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
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
   * // Fetch zero or more Assignments
   * const assignments = await prisma.assignment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **assignment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Assignments
   * const assignments = await prisma.assignment.findMany()
   * ```
   */
  get assignment(): Prisma.assignmentDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **course** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
   * ```
   */
  get course(): Prisma.courseDelegate<ExtArgs>;

  /**
   * `prisma.grade`: Exposes CRUD operations for the **grade** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Grades
   * const grades = await prisma.grade.findMany()
   * ```
   */
  get grade(): Prisma.gradeDelegate<ExtArgs>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **lesson** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Lessons
   * const lessons = await prisma.lesson.findMany()
   * ```
   */
  get lesson(): Prisma.lessonDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError;

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
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

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
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

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
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
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
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

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

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

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

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
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
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    assignment: 'assignment';
    company: 'company';
    course: 'course';
    grade: 'grade';
    lesson: 'lesson';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'assignment' | 'company' | 'course' | 'grade' | 'lesson' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      assignment: {
        payload: Prisma.$assignmentPayload<ExtArgs>;
        fields: Prisma.assignmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.assignmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.assignmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>;
          };
          findFirst: {
            args: Prisma.assignmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.assignmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>;
          };
          findMany: {
            args: Prisma.assignmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>[];
          };
          create: {
            args: Prisma.assignmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>;
          };
          createMany: {
            args: Prisma.assignmentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.assignmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>;
          };
          update: {
            args: Prisma.assignmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>;
          };
          deleteMany: {
            args: Prisma.assignmentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.assignmentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.assignmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$assignmentPayload>;
          };
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAssignment>;
          };
          groupBy: {
            args: Prisma.assignmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AssignmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.assignmentCountArgs<ExtArgs>;
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      course: {
        payload: Prisma.$coursePayload<ExtArgs>;
        fields: Prisma.courseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.courseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.courseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          findFirst: {
            args: Prisma.courseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.courseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          findMany: {
            args: Prisma.courseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[];
          };
          create: {
            args: Prisma.courseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          createMany: {
            args: Prisma.courseCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.courseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          update: {
            args: Prisma.courseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          deleteMany: {
            args: Prisma.courseDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.courseUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.courseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCourse>;
          };
          groupBy: {
            args: Prisma.courseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CourseGroupByOutputType>[];
          };
          count: {
            args: Prisma.courseCountArgs<ExtArgs>;
            result: $Utils.Optional<CourseCountAggregateOutputType> | number;
          };
        };
      };
      grade: {
        payload: Prisma.$gradePayload<ExtArgs>;
        fields: Prisma.gradeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.gradeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gradePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.gradeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gradePayload>;
          };
          findFirst: {
            args: Prisma.gradeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gradePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.gradeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gradePayload>;
          };
          findMany: {
            args: Prisma.gradeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gradePayload>[];
          };
          create: {
            args: Prisma.gradeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gradePayload>;
          };
          createMany: {
            args: Prisma.gradeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.gradeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gradePayload>;
          };
          update: {
            args: Prisma.gradeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gradePayload>;
          };
          deleteMany: {
            args: Prisma.gradeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.gradeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.gradeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gradePayload>;
          };
          aggregate: {
            args: Prisma.GradeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGrade>;
          };
          groupBy: {
            args: Prisma.gradeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GradeGroupByOutputType>[];
          };
          count: {
            args: Prisma.gradeCountArgs<ExtArgs>;
            result: $Utils.Optional<GradeCountAggregateOutputType> | number;
          };
        };
      };
      lesson: {
        payload: Prisma.$lessonPayload<ExtArgs>;
        fields: Prisma.lessonFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.lessonFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lessonPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.lessonFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lessonPayload>;
          };
          findFirst: {
            args: Prisma.lessonFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lessonPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.lessonFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lessonPayload>;
          };
          findMany: {
            args: Prisma.lessonFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lessonPayload>[];
          };
          create: {
            args: Prisma.lessonCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lessonPayload>;
          };
          createMany: {
            args: Prisma.lessonCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.lessonDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lessonPayload>;
          };
          update: {
            args: Prisma.lessonUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lessonPayload>;
          };
          deleteMany: {
            args: Prisma.lessonDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.lessonUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.lessonUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$lessonPayload>;
          };
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLesson>;
          };
          groupBy: {
            args: Prisma.lessonGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LessonGroupByOutputType>[];
          };
          count: {
            args: Prisma.lessonCountArgs<ExtArgs>;
            result: $Utils.Optional<LessonCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
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
    | 'update'
    | 'updateMany'
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
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type AssignmentCountOutputType
   */

  export type AssignmentCountOutputType = {
    course: number;
    grade: number;
    lesson: number;
  };

  export type AssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | AssignmentCountOutputTypeCountCourseArgs;
    grade?: boolean | AssignmentCountOutputTypeCountGradeArgs;
    lesson?: boolean | AssignmentCountOutputTypeCountLessonArgs;
  };

  // Custom InputTypes

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the AssignmentCountOutputType
       */
      select?: AssignmentCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountCourseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: courseWhereInput;
  };

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountGradeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: gradeWhereInput;
  };

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountLessonArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: lessonWhereInput;
  };

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    user: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CompanyCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: userWhereInput;
    };

  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    company: number;
  };

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | LessonCountOutputTypeCountCompanyArgs;
  };

  // Custom InputTypes

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountCompanyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: companyWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null;
    _min: AssignmentMinAggregateOutputType | null;
    _max: AssignmentMaxAggregateOutputType | null;
  };

  export type AssignmentMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AssignmentMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AssignmentCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AssignmentMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AssignmentMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AssignmentCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assignment to aggregate.
     */
    where?: assignmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: assignmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` assignments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned assignments
     **/
    _count?: true | AssignmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AssignmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AssignmentMaxAggregateInputType;
  };

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>;
  };

  export type assignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assignmentWhereInput;
    orderBy?: assignmentOrderByWithAggregationInput | assignmentOrderByWithAggregationInput[];
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum;
    having?: assignmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssignmentCountAggregateInputType | true;
    _min?: AssignmentMinAggregateInputType;
    _max?: AssignmentMaxAggregateInputType;
  };

  export type AssignmentGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: AssignmentCountAggregateOutputType | null;
    _min: AssignmentMinAggregateOutputType | null;
    _max: AssignmentMaxAggregateOutputType | null;
  };

  type GetAssignmentGroupByPayload<T extends assignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AssignmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
          : GetScalarType<T[P], AssignmentGroupByOutputType[P]>;
      }
    >
  >;

  export type assignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        course?: boolean | assignment$courseArgs<ExtArgs>;
        grade?: boolean | assignment$gradeArgs<ExtArgs>;
        lesson?: boolean | assignment$lessonArgs<ExtArgs>;
        _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['assignment']
    >;

  export type assignmentSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type assignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | assignment$courseArgs<ExtArgs>;
    grade?: boolean | assignment$gradeArgs<ExtArgs>;
    lesson?: boolean | assignment$lessonArgs<ExtArgs>;
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $assignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'assignment';
    objects: {
      course: Prisma.$coursePayload<ExtArgs>[];
      grade: Prisma.$gradePayload<ExtArgs>[];
      lesson: Prisma.$lessonPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['assignment']
    >;
    composites: {};
  };

  type assignmentGetPayload<S extends boolean | null | undefined | assignmentDefaultArgs> = $Result.GetResult<
    Prisma.$assignmentPayload,
    S
  >;

  type assignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    assignmentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AssignmentCountAggregateInputType | true;
  };

  export interface assignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['assignment']; meta: { name: 'assignment' } };
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {assignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends assignmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, assignmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__assignmentClient<
      $Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Assignment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {assignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends assignmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, assignmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__assignmentClient<
      $Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends assignmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, assignmentFindFirstArgs<ExtArgs>>,
    ): Prisma__assignmentClient<
      $Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends assignmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, assignmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__assignmentClient<
      $Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     *
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends assignmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, assignmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Assignment.
     * @param {assignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     *
     **/
    create<T extends assignmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, assignmentCreateArgs<ExtArgs>>,
    ): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Assignments.
     *     @param {assignmentCreateManyArgs} args - Arguments to create many Assignments.
     *     @example
     *     // Create many Assignments
     *     const assignment = await prisma.assignment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends assignmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, assignmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Assignment.
     * @param {assignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     *
     **/
    delete<T extends assignmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, assignmentDeleteArgs<ExtArgs>>,
    ): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Assignment.
     * @param {assignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends assignmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, assignmentUpdateArgs<ExtArgs>>,
    ): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Assignments.
     * @param {assignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends assignmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, assignmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends assignmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, assignmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Assignment.
     * @param {assignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     **/
    upsert<T extends assignmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, assignmentUpsertArgs<ExtArgs>>,
    ): Prisma__assignmentClient<$Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
     **/
    count<T extends assignmentCountArgs>(
      args?: Subset<T, assignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentAggregateArgs>(
      args: Subset<T, AssignmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>;

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignmentGroupByArgs} args - Group by arguments.
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
      T extends assignmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: assignmentGroupByArgs['orderBy'] }
        : { orderBy?: assignmentGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
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
      args: SubsetIntersection<T, assignmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the assignment model
     */
    readonly fields: assignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__assignmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    course<T extends assignment$courseArgs<ExtArgs> = {}>(
      args?: Subset<T, assignment$courseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findMany'> | Null>;

    grade<T extends assignment$gradeArgs<ExtArgs> = {}>(
      args?: Subset<T, assignment$gradeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, 'findMany'> | Null>;

    lesson<T extends assignment$lessonArgs<ExtArgs> = {}>(
      args?: Subset<T, assignment$lessonArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
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
   * Fields of the assignment model
   */
  interface assignmentFieldRefs {
    readonly id: FieldRef<'assignment', 'String'>;
    readonly created_at: FieldRef<'assignment', 'DateTime'>;
    readonly updated_at: FieldRef<'assignment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * assignment findUnique
   */
  export type assignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * Filter, which assignment to fetch.
     */
    where: assignmentWhereUniqueInput;
  };

  /**
   * assignment findUniqueOrThrow
   */
  export type assignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * Filter, which assignment to fetch.
     */
    where: assignmentWhereUniqueInput;
  };

  /**
   * assignment findFirst
   */
  export type assignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * Filter, which assignment to fetch.
     */
    where?: assignmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for assignments.
     */
    cursor?: assignmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` assignments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[];
  };

  /**
   * assignment findFirstOrThrow
   */
  export type assignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * Filter, which assignment to fetch.
     */
    where?: assignmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for assignments.
     */
    cursor?: assignmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` assignments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[];
  };

  /**
   * assignment findMany
   */
  export type assignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * Filter, which assignments to fetch.
     */
    where?: assignmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of assignments to fetch.
     */
    orderBy?: assignmentOrderByWithRelationInput | assignmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing assignments.
     */
    cursor?: assignmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` assignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` assignments.
     */
    skip?: number;
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[];
  };

  /**
   * assignment create
   */
  export type assignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a assignment.
     */
    data?: XOR<assignmentCreateInput, assignmentUncheckedCreateInput>;
  };

  /**
   * assignment createMany
   */
  export type assignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many assignments.
     */
    data: assignmentCreateManyInput | assignmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * assignment update
   */
  export type assignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a assignment.
     */
    data: XOR<assignmentUpdateInput, assignmentUncheckedUpdateInput>;
    /**
     * Choose, which assignment to update.
     */
    where: assignmentWhereUniqueInput;
  };

  /**
   * assignment updateMany
   */
  export type assignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update assignments.
     */
    data: XOR<assignmentUpdateManyMutationInput, assignmentUncheckedUpdateManyInput>;
    /**
     * Filter which assignments to update
     */
    where?: assignmentWhereInput;
  };

  /**
   * assignment upsert
   */
  export type assignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the assignment to update in case it exists.
     */
    where: assignmentWhereUniqueInput;
    /**
     * In case the assignment found by the `where` argument doesn't exist, create a new assignment with this data.
     */
    create: XOR<assignmentCreateInput, assignmentUncheckedCreateInput>;
    /**
     * In case the assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<assignmentUpdateInput, assignmentUncheckedUpdateInput>;
  };

  /**
   * assignment delete
   */
  export type assignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
    /**
     * Filter which assignment to delete.
     */
    where: assignmentWhereUniqueInput;
  };

  /**
   * assignment deleteMany
   */
  export type assignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assignments to delete
     */
    where?: assignmentWhereInput;
  };

  /**
   * assignment.course
   */
  export type assignment$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    where?: courseWhereInput;
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    cursor?: courseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * assignment.grade
   */
  export type assignment$gradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gradeInclude<ExtArgs> | null;
    where?: gradeWhereInput;
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[];
    cursor?: gradeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[];
  };

  /**
   * assignment.lesson
   */
  export type assignment$lessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lessonInclude<ExtArgs> | null;
    where?: lessonWhereInput;
    orderBy?: lessonOrderByWithRelationInput | lessonOrderByWithRelationInput[];
    cursor?: lessonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[];
  };

  /**
   * assignment without action
   */
  export type assignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment
     */
    select?: assignmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: assignmentInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    image: string | null;
    lesson_id: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    image: string | null;
    lesson_id: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    image: number;
    lesson_id: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    lesson_id?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    lesson_id?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    lesson_id?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    image: string | null;
    lesson_id: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      image?: boolean;
      lesson_id?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      lesson?: boolean | company$lessonArgs<ExtArgs>;
      user?: boolean | company$userArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    image?: boolean;
    lesson_id?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | company$lessonArgs<ExtArgs>;
    user?: boolean | company$userArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      lesson: Prisma.$lessonPayload<ExtArgs> | null;
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        image: string | null;
        lesson_id: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
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
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    lesson<T extends company$lessonArgs<ExtArgs> = {}>(
      args?: Subset<T, company$lessonArgs<ExtArgs>>,
    ): Prisma__lessonClient<
      $Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    user<T extends company$userArgs<ExtArgs> = {}>(
      args?: Subset<T, company$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
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
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly image: FieldRef<'company', 'String'>;
    readonly lesson_id: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.lesson
   */
  export type company$lessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lessonInclude<ExtArgs> | null;
    where?: lessonWhereInput;
  };

  /**
   * company.user
   */
  export type company$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
  };

  export type CourseAvgAggregateOutputType = {
    course_duration: number | null;
  };

  export type CourseSumAggregateOutputType = {
    course_duration: number | null;
  };

  export type CourseMinAggregateOutputType = {
    id: string | null;
    assignment_id: string | null;
    course_duration: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CourseMaxAggregateOutputType = {
    id: string | null;
    assignment_id: string | null;
    course_duration: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CourseCountAggregateOutputType = {
    id: number;
    assignment_id: number;
    course_duration: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CourseAvgAggregateInputType = {
    course_duration?: true;
  };

  export type CourseSumAggregateInputType = {
    course_duration?: true;
  };

  export type CourseMinAggregateInputType = {
    id?: true;
    assignment_id?: true;
    course_duration?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CourseMaxAggregateInputType = {
    id?: true;
    assignment_id?: true;
    course_duration?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CourseCountAggregateInputType = {
    id?: true;
    assignment_id?: true;
    course_duration?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course to aggregate.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned courses
     **/
    _count?: true | CourseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CourseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CourseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CourseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CourseMaxAggregateInputType;
  };

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>;
  };

  export type courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput;
    orderBy?: courseOrderByWithAggregationInput | courseOrderByWithAggregationInput[];
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum;
    having?: courseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseCountAggregateInputType | true;
    _avg?: CourseAvgAggregateInputType;
    _sum?: CourseSumAggregateInputType;
    _min?: CourseMinAggregateInputType;
    _max?: CourseMaxAggregateInputType;
  };

  export type CourseGroupByOutputType = {
    id: string;
    assignment_id: string;
    course_duration: number | null;
    created_at: Date;
    updated_at: Date;
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
  };

  type GetCourseGroupByPayload<T extends courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CourseGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
          : GetScalarType<T[P], CourseGroupByOutputType[P]>;
      }
    >
  >;

  export type courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      assignment_id?: boolean;
      course_duration?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      assignment?: boolean | assignmentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['course']
  >;

  export type courseSelectScalar = {
    id?: boolean;
    assignment_id?: boolean;
    course_duration?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type courseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | assignmentDefaultArgs<ExtArgs>;
  };

  export type $coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'course';
    objects: {
      assignment: Prisma.$assignmentPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        assignment_id: string;
        course_duration: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['course']
    >;
    composites: {};
  };

  type courseGetPayload<S extends boolean | null | undefined | courseDefaultArgs> = $Result.GetResult<
    Prisma.$coursePayload,
    S
  >;

  type courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    courseFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CourseCountAggregateInputType | true;
  };

  export interface courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course']; meta: { name: 'course' } };
    /**
     * Find zero or one Course that matches the filter.
     * @param {courseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends courseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, courseFindUniqueArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Course that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {courseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends courseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends courseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindFirstArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends courseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     *
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends courseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Course.
     * @param {courseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     *
     **/
    create<T extends courseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, courseCreateArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Courses.
     *     @param {courseCreateManyArgs} args - Arguments to create many Courses.
     *     @example
     *     // Create many Courses
     *     const course = await prisma.course.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends courseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, courseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Course.
     * @param {courseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     *
     **/
    delete<T extends courseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, courseDeleteArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Course.
     * @param {courseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends courseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, courseUpdateArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Courses.
     * @param {courseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends courseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, courseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends courseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, courseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Course.
     * @param {courseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     **/
    upsert<T extends courseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, courseUpsertArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
     **/
    count<T extends courseCountArgs>(
      args?: Subset<T, courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(
      args: Subset<T, CourseAggregateArgs>,
    ): Prisma.PrismaPromise<GetCourseAggregateType<T>>;

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseGroupByArgs} args - Group by arguments.
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
      T extends courseGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseGroupByArgs['orderBy'] }
        : { orderBy?: courseGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
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
      args: SubsetIntersection<T, courseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the course model
     */
    readonly fields: courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    assignment<T extends assignmentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, assignmentDefaultArgs<ExtArgs>>,
    ): Prisma__assignmentClient<
      $Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
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
   * Fields of the course model
   */
  interface courseFieldRefs {
    readonly id: FieldRef<'course', 'String'>;
    readonly assignment_id: FieldRef<'course', 'String'>;
    readonly course_duration: FieldRef<'course', 'Int'>;
    readonly created_at: FieldRef<'course', 'DateTime'>;
    readonly updated_at: FieldRef<'course', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * course findUnique
   */
  export type courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course findUniqueOrThrow
   */
  export type courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course findFirst
   */
  export type courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * course findFirstOrThrow
   */
  export type courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * course findMany
   */
  export type courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter, which courses to fetch.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing courses.
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * course create
   */
  export type courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * The data needed to create a course.
     */
    data: XOR<courseCreateInput, courseUncheckedCreateInput>;
  };

  /**
   * course createMany
   */
  export type courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * course update
   */
  export type courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * The data needed to update a course.
     */
    data: XOR<courseUpdateInput, courseUncheckedUpdateInput>;
    /**
     * Choose, which course to update.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course updateMany
   */
  export type courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>;
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput;
  };

  /**
   * course upsert
   */
  export type courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * The filter to search for the course to update in case it exists.
     */
    where: courseWhereUniqueInput;
    /**
     * In case the course found by the `where` argument doesn't exist, create a new course with this data.
     */
    create: XOR<courseCreateInput, courseUncheckedCreateInput>;
    /**
     * In case the course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseUpdateInput, courseUncheckedUpdateInput>;
  };

  /**
   * course delete
   */
  export type courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter which course to delete.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course deleteMany
   */
  export type courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: courseWhereInput;
  };

  /**
   * course without action
   */
  export type courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
  };

  /**
   * Model grade
   */

  export type AggregateGrade = {
    _count: GradeCountAggregateOutputType | null;
    _min: GradeMinAggregateOutputType | null;
    _max: GradeMaxAggregateOutputType | null;
  };

  export type GradeMinAggregateOutputType = {
    id: string | null;
    assignment_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GradeMaxAggregateOutputType = {
    id: string | null;
    assignment_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GradeCountAggregateOutputType = {
    id: number;
    assignment_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type GradeMinAggregateInputType = {
    id?: true;
    assignment_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GradeMaxAggregateInputType = {
    id?: true;
    assignment_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GradeCountAggregateInputType = {
    id?: true;
    assignment_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type GradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grade to aggregate.
     */
    where?: gradeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of grades to fetch.
     */
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: gradeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` grades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` grades.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned grades
     **/
    _count?: true | GradeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GradeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GradeMaxAggregateInputType;
  };

  export type GetGradeAggregateType<T extends GradeAggregateArgs> = {
    [P in keyof T & keyof AggregateGrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrade[P]>
      : GetScalarType<T[P], AggregateGrade[P]>;
  };

  export type gradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gradeWhereInput;
    orderBy?: gradeOrderByWithAggregationInput | gradeOrderByWithAggregationInput[];
    by: GradeScalarFieldEnum[] | GradeScalarFieldEnum;
    having?: gradeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GradeCountAggregateInputType | true;
    _min?: GradeMinAggregateInputType;
    _max?: GradeMaxAggregateInputType;
  };

  export type GradeGroupByOutputType = {
    id: string;
    assignment_id: string;
    created_at: Date;
    updated_at: Date;
    _count: GradeCountAggregateOutputType | null;
    _min: GradeMinAggregateOutputType | null;
    _max: GradeMaxAggregateOutputType | null;
  };

  type GetGradeGroupByPayload<T extends gradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof GradeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], GradeGroupByOutputType[P]>
          : GetScalarType<T[P], GradeGroupByOutputType[P]>;
      }
    >
  >;

  export type gradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      assignment_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      assignment?: boolean | assignmentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['grade']
  >;

  export type gradeSelectScalar = {
    id?: boolean;
    assignment_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type gradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | assignmentDefaultArgs<ExtArgs>;
  };

  export type $gradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'grade';
    objects: {
      assignment: Prisma.$assignmentPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        assignment_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['grade']
    >;
    composites: {};
  };

  type gradeGetPayload<S extends boolean | null | undefined | gradeDefaultArgs> = $Result.GetResult<
    Prisma.$gradePayload,
    S
  >;

  type gradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    gradeFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: GradeCountAggregateInputType | true;
  };

  export interface gradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['grade']; meta: { name: 'grade' } };
    /**
     * Find zero or one Grade that matches the filter.
     * @param {gradeFindUniqueArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends gradeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, gradeFindUniqueArgs<ExtArgs>>,
    ): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Grade that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {gradeFindUniqueOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends gradeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gradeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Grade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeFindFirstArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends gradeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, gradeFindFirstArgs<ExtArgs>>,
    ): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Grade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeFindFirstOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends gradeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gradeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Grades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grades
     * const grades = await prisma.grade.findMany()
     *
     * // Get first 10 Grades
     * const grades = await prisma.grade.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const gradeWithIdOnly = await prisma.grade.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends gradeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gradeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Grade.
     * @param {gradeCreateArgs} args - Arguments to create a Grade.
     * @example
     * // Create one Grade
     * const Grade = await prisma.grade.create({
     *   data: {
     *     // ... data to create a Grade
     *   }
     * })
     *
     **/
    create<T extends gradeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, gradeCreateArgs<ExtArgs>>,
    ): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Grades.
     *     @param {gradeCreateManyArgs} args - Arguments to create many Grades.
     *     @example
     *     // Create many Grades
     *     const grade = await prisma.grade.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends gradeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gradeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Grade.
     * @param {gradeDeleteArgs} args - Arguments to delete one Grade.
     * @example
     * // Delete one Grade
     * const Grade = await prisma.grade.delete({
     *   where: {
     *     // ... filter to delete one Grade
     *   }
     * })
     *
     **/
    delete<T extends gradeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, gradeDeleteArgs<ExtArgs>>,
    ): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Grade.
     * @param {gradeUpdateArgs} args - Arguments to update one Grade.
     * @example
     * // Update one Grade
     * const grade = await prisma.grade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends gradeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, gradeUpdateArgs<ExtArgs>>,
    ): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Grades.
     * @param {gradeDeleteManyArgs} args - Arguments to filter Grades to delete.
     * @example
     * // Delete a few Grades
     * const { count } = await prisma.grade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends gradeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gradeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends gradeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, gradeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Grade.
     * @param {gradeUpsertArgs} args - Arguments to update or create a Grade.
     * @example
     * // Update or create a Grade
     * const grade = await prisma.grade.upsert({
     *   create: {
     *     // ... data to create a Grade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grade we want to update
     *   }
     * })
     **/
    upsert<T extends gradeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, gradeUpsertArgs<ExtArgs>>,
    ): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeCountArgs} args - Arguments to filter Grades to count.
     * @example
     * // Count the number of Grades
     * const count = await prisma.grade.count({
     *   where: {
     *     // ... the filter for the Grades we want to count
     *   }
     * })
     **/
    count<T extends gradeCountArgs>(
      args?: Subset<T, gradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GradeAggregateArgs>(
      args: Subset<T, GradeAggregateArgs>,
    ): Prisma.PrismaPromise<GetGradeAggregateType<T>>;

    /**
     * Group by Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeGroupByArgs} args - Group by arguments.
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
      T extends gradeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gradeGroupByArgs['orderBy'] }
        : { orderBy?: gradeGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
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
      args: SubsetIntersection<T, gradeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetGradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the grade model
     */
    readonly fields: gradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for grade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gradeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    assignment<T extends assignmentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, assignmentDefaultArgs<ExtArgs>>,
    ): Prisma__assignmentClient<
      $Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
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
   * Fields of the grade model
   */
  interface gradeFieldRefs {
    readonly id: FieldRef<'grade', 'String'>;
    readonly assignment_id: FieldRef<'grade', 'String'>;
    readonly created_at: FieldRef<'grade', 'DateTime'>;
    readonly updated_at: FieldRef<'grade', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * grade findUnique
   */
  export type gradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gradeInclude<ExtArgs> | null;
    /**
     * Filter, which grade to fetch.
     */
    where: gradeWhereUniqueInput;
  };

  /**
   * grade findUniqueOrThrow
   */
  export type gradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gradeInclude<ExtArgs> | null;
    /**
     * Filter, which grade to fetch.
     */
    where: gradeWhereUniqueInput;
  };

  /**
   * grade findFirst
   */
  export type gradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gradeInclude<ExtArgs> | null;
    /**
     * Filter, which grade to fetch.
     */
    where?: gradeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of grades to fetch.
     */
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for grades.
     */
    cursor?: gradeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` grades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` grades.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[];
  };

  /**
   * grade findFirstOrThrow
   */
  export type gradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gradeInclude<ExtArgs> | null;
    /**
     * Filter, which grade to fetch.
     */
    where?: gradeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of grades to fetch.
     */
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for grades.
     */
    cursor?: gradeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` grades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` grades.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[];
  };

  /**
   * grade findMany
   */
  export type gradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gradeInclude<ExtArgs> | null;
    /**
     * Filter, which grades to fetch.
     */
    where?: gradeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of grades to fetch.
     */
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing grades.
     */
    cursor?: gradeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` grades from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` grades.
     */
    skip?: number;
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[];
  };

  /**
   * grade create
   */
  export type gradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gradeInclude<ExtArgs> | null;
    /**
     * The data needed to create a grade.
     */
    data: XOR<gradeCreateInput, gradeUncheckedCreateInput>;
  };

  /**
   * grade createMany
   */
  export type gradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many grades.
     */
    data: gradeCreateManyInput | gradeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * grade update
   */
  export type gradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gradeInclude<ExtArgs> | null;
    /**
     * The data needed to update a grade.
     */
    data: XOR<gradeUpdateInput, gradeUncheckedUpdateInput>;
    /**
     * Choose, which grade to update.
     */
    where: gradeWhereUniqueInput;
  };

  /**
   * grade updateMany
   */
  export type gradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update grades.
     */
    data: XOR<gradeUpdateManyMutationInput, gradeUncheckedUpdateManyInput>;
    /**
     * Filter which grades to update
     */
    where?: gradeWhereInput;
  };

  /**
   * grade upsert
   */
  export type gradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gradeInclude<ExtArgs> | null;
    /**
     * The filter to search for the grade to update in case it exists.
     */
    where: gradeWhereUniqueInput;
    /**
     * In case the grade found by the `where` argument doesn't exist, create a new grade with this data.
     */
    create: XOR<gradeCreateInput, gradeUncheckedCreateInput>;
    /**
     * In case the grade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gradeUpdateInput, gradeUncheckedUpdateInput>;
  };

  /**
   * grade delete
   */
  export type gradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gradeInclude<ExtArgs> | null;
    /**
     * Filter which grade to delete.
     */
    where: gradeWhereUniqueInput;
  };

  /**
   * grade deleteMany
   */
  export type gradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grades to delete
     */
    where?: gradeWhereInput;
  };

  /**
   * grade without action
   */
  export type gradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gradeInclude<ExtArgs> | null;
  };

  /**
   * Model lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null;
    _min: LessonMinAggregateOutputType | null;
    _max: LessonMaxAggregateOutputType | null;
  };

  export type LessonMinAggregateOutputType = {
    id: string | null;
    assignment_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LessonMaxAggregateOutputType = {
    id: string | null;
    assignment_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LessonCountAggregateOutputType = {
    id: number;
    assignment_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type LessonMinAggregateInputType = {
    id?: true;
    assignment_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LessonMaxAggregateInputType = {
    id?: true;
    assignment_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LessonCountAggregateInputType = {
    id?: true;
    assignment_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lesson to aggregate.
     */
    where?: lessonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonOrderByWithRelationInput | lessonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: lessonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lessons.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned lessons
     **/
    _count?: true | LessonCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LessonMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LessonMaxAggregateInputType;
  };

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
    [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>;
  };

  export type lessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lessonWhereInput;
    orderBy?: lessonOrderByWithAggregationInput | lessonOrderByWithAggregationInput[];
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum;
    having?: lessonScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LessonCountAggregateInputType | true;
    _min?: LessonMinAggregateInputType;
    _max?: LessonMaxAggregateInputType;
  };

  export type LessonGroupByOutputType = {
    id: string;
    assignment_id: string;
    created_at: Date;
    updated_at: Date;
    _count: LessonCountAggregateOutputType | null;
    _min: LessonMinAggregateOutputType | null;
    _max: LessonMaxAggregateOutputType | null;
  };

  type GetLessonGroupByPayload<T extends lessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LessonGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
          : GetScalarType<T[P], LessonGroupByOutputType[P]>;
      }
    >
  >;

  export type lessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      assignment_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | lesson$companyArgs<ExtArgs>;
      assignment?: boolean | assignmentDefaultArgs<ExtArgs>;
      _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['lesson']
  >;

  export type lessonSelectScalar = {
    id?: boolean;
    assignment_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type lessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | lesson$companyArgs<ExtArgs>;
    assignment?: boolean | assignmentDefaultArgs<ExtArgs>;
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $lessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'lesson';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
      assignment: Prisma.$assignmentPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        assignment_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['lesson']
    >;
    composites: {};
  };

  type lessonGetPayload<S extends boolean | null | undefined | lessonDefaultArgs> = $Result.GetResult<
    Prisma.$lessonPayload,
    S
  >;

  type lessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    lessonFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: LessonCountAggregateInputType | true;
  };

  export interface lessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lesson']; meta: { name: 'lesson' } };
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {lessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends lessonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, lessonFindUniqueArgs<ExtArgs>>,
    ): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Lesson that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {lessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends lessonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, lessonFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends lessonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, lessonFindFirstArgs<ExtArgs>>,
    ): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends lessonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, lessonFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     *
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends lessonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lessonFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Lesson.
     * @param {lessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     *
     **/
    create<T extends lessonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, lessonCreateArgs<ExtArgs>>,
    ): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Lessons.
     *     @param {lessonCreateManyArgs} args - Arguments to create many Lessons.
     *     @example
     *     // Create many Lessons
     *     const lesson = await prisma.lesson.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends lessonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lessonCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Lesson.
     * @param {lessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     *
     **/
    delete<T extends lessonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, lessonDeleteArgs<ExtArgs>>,
    ): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Lesson.
     * @param {lessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends lessonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, lessonUpdateArgs<ExtArgs>>,
    ): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Lessons.
     * @param {lessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends lessonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, lessonDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends lessonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, lessonUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Lesson.
     * @param {lessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     **/
    upsert<T extends lessonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, lessonUpsertArgs<ExtArgs>>,
    ): Prisma__lessonClient<$Result.GetResult<Prisma.$lessonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
     **/
    count<T extends lessonCountArgs>(
      args?: Subset<T, lessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAggregateArgs>(
      args: Subset<T, LessonAggregateArgs>,
    ): Prisma.PrismaPromise<GetLessonAggregateType<T>>;

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonGroupByArgs} args - Group by arguments.
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
      T extends lessonGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lessonGroupByArgs['orderBy'] }
        : { orderBy?: lessonGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
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
      args: SubsetIntersection<T, lessonGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the lesson model
     */
    readonly fields: lessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lessonClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends lesson$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, lesson$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    assignment<T extends assignmentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, assignmentDefaultArgs<ExtArgs>>,
    ): Prisma__assignmentClient<
      $Result.GetResult<Prisma.$assignmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
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
   * Fields of the lesson model
   */
  interface lessonFieldRefs {
    readonly id: FieldRef<'lesson', 'String'>;
    readonly assignment_id: FieldRef<'lesson', 'String'>;
    readonly created_at: FieldRef<'lesson', 'DateTime'>;
    readonly updated_at: FieldRef<'lesson', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * lesson findUnique
   */
  export type lessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lessonInclude<ExtArgs> | null;
    /**
     * Filter, which lesson to fetch.
     */
    where: lessonWhereUniqueInput;
  };

  /**
   * lesson findUniqueOrThrow
   */
  export type lessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lessonInclude<ExtArgs> | null;
    /**
     * Filter, which lesson to fetch.
     */
    where: lessonWhereUniqueInput;
  };

  /**
   * lesson findFirst
   */
  export type lessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lessonInclude<ExtArgs> | null;
    /**
     * Filter, which lesson to fetch.
     */
    where?: lessonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonOrderByWithRelationInput | lessonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for lessons.
     */
    cursor?: lessonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lessons.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[];
  };

  /**
   * lesson findFirstOrThrow
   */
  export type lessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lessonInclude<ExtArgs> | null;
    /**
     * Filter, which lesson to fetch.
     */
    where?: lessonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonOrderByWithRelationInput | lessonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for lessons.
     */
    cursor?: lessonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lessons.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[];
  };

  /**
   * lesson findMany
   */
  export type lessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lessonInclude<ExtArgs> | null;
    /**
     * Filter, which lessons to fetch.
     */
    where?: lessonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonOrderByWithRelationInput | lessonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing lessons.
     */
    cursor?: lessonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lessons.
     */
    skip?: number;
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[];
  };

  /**
   * lesson create
   */
  export type lessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lessonInclude<ExtArgs> | null;
    /**
     * The data needed to create a lesson.
     */
    data: XOR<lessonCreateInput, lessonUncheckedCreateInput>;
  };

  /**
   * lesson createMany
   */
  export type lessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lessons.
     */
    data: lessonCreateManyInput | lessonCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * lesson update
   */
  export type lessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lessonInclude<ExtArgs> | null;
    /**
     * The data needed to update a lesson.
     */
    data: XOR<lessonUpdateInput, lessonUncheckedUpdateInput>;
    /**
     * Choose, which lesson to update.
     */
    where: lessonWhereUniqueInput;
  };

  /**
   * lesson updateMany
   */
  export type lessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lessons.
     */
    data: XOR<lessonUpdateManyMutationInput, lessonUncheckedUpdateManyInput>;
    /**
     * Filter which lessons to update
     */
    where?: lessonWhereInput;
  };

  /**
   * lesson upsert
   */
  export type lessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lessonInclude<ExtArgs> | null;
    /**
     * The filter to search for the lesson to update in case it exists.
     */
    where: lessonWhereUniqueInput;
    /**
     * In case the lesson found by the `where` argument doesn't exist, create a new lesson with this data.
     */
    create: XOR<lessonCreateInput, lessonUncheckedCreateInput>;
    /**
     * In case the lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lessonUpdateInput, lessonUncheckedUpdateInput>;
  };

  /**
   * lesson delete
   */
  export type lessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lessonInclude<ExtArgs> | null;
    /**
     * Filter which lesson to delete.
     */
    where: lessonWhereUniqueInput;
  };

  /**
   * lesson deleteMany
   */
  export type lessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lessons to delete
     */
    where?: lessonWhereInput;
  };

  /**
   * lesson.company
   */
  export type lesson$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * lesson without action
   */
  export type lessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lesson
     */
    select?: lessonSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: lessonInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    company_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
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

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      company_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    company_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        company_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
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
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly company_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AssignmentScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    image: 'image';
    lesson_id: 'lesson_id';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const CourseScalarFieldEnum: {
    id: 'id';
    assignment_id: 'assignment_id';
    course_duration: 'course_duration';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];

  export const GradeScalarFieldEnum: {
    id: 'id';
    assignment_id: 'assignment_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type GradeScalarFieldEnum = (typeof GradeScalarFieldEnum)[keyof typeof GradeScalarFieldEnum];

  export const LessonScalarFieldEnum: {
    id: 'id';
    assignment_id: 'assignment_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    company_id: 'company_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

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

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type assignmentWhereInput = {
    AND?: assignmentWhereInput | assignmentWhereInput[];
    OR?: assignmentWhereInput[];
    NOT?: assignmentWhereInput | assignmentWhereInput[];
    id?: UuidFilter<'assignment'> | string;
    created_at?: DateTimeFilter<'assignment'> | Date | string;
    updated_at?: DateTimeFilter<'assignment'> | Date | string;
    course?: CourseListRelationFilter;
    grade?: GradeListRelationFilter;
    lesson?: LessonListRelationFilter;
  };

  export type assignmentOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    course?: courseOrderByRelationAggregateInput;
    grade?: gradeOrderByRelationAggregateInput;
    lesson?: lessonOrderByRelationAggregateInput;
  };

  export type assignmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: assignmentWhereInput | assignmentWhereInput[];
      OR?: assignmentWhereInput[];
      NOT?: assignmentWhereInput | assignmentWhereInput[];
      created_at?: DateTimeFilter<'assignment'> | Date | string;
      updated_at?: DateTimeFilter<'assignment'> | Date | string;
      course?: CourseListRelationFilter;
      grade?: GradeListRelationFilter;
      lesson?: LessonListRelationFilter;
    },
    'id'
  >;

  export type assignmentOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: assignmentCountOrderByAggregateInput;
    _max?: assignmentMaxOrderByAggregateInput;
    _min?: assignmentMinOrderByAggregateInput;
  };

  export type assignmentScalarWhereWithAggregatesInput = {
    AND?: assignmentScalarWhereWithAggregatesInput | assignmentScalarWhereWithAggregatesInput[];
    OR?: assignmentScalarWhereWithAggregatesInput[];
    NOT?: assignmentScalarWhereWithAggregatesInput | assignmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'assignment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'assignment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'assignment'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    image?: StringNullableFilter<'company'> | string | null;
    lesson_id?: UuidNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    lesson?: XOR<LessonNullableRelationFilter, lessonWhereInput> | null;
    user?: UserListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    lesson_id?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    lesson?: lessonOrderByWithRelationInput;
    user?: userOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      image?: StringNullableFilter<'company'> | string | null;
      lesson_id?: UuidNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      lesson?: XOR<LessonNullableRelationFilter, lessonWhereInput> | null;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    lesson_id?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    image?: StringNullableWithAggregatesFilter<'company'> | string | null;
    lesson_id?: UuidNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
  };

  export type courseWhereInput = {
    AND?: courseWhereInput | courseWhereInput[];
    OR?: courseWhereInput[];
    NOT?: courseWhereInput | courseWhereInput[];
    id?: UuidFilter<'course'> | string;
    assignment_id?: UuidFilter<'course'> | string;
    course_duration?: IntNullableFilter<'course'> | number | null;
    created_at?: DateTimeFilter<'course'> | Date | string;
    updated_at?: DateTimeFilter<'course'> | Date | string;
    assignment?: XOR<AssignmentRelationFilter, assignmentWhereInput>;
  };

  export type courseOrderByWithRelationInput = {
    id?: SortOrder;
    assignment_id?: SortOrder;
    course_duration?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    assignment?: assignmentOrderByWithRelationInput;
  };

  export type courseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: courseWhereInput | courseWhereInput[];
      OR?: courseWhereInput[];
      NOT?: courseWhereInput | courseWhereInput[];
      assignment_id?: UuidFilter<'course'> | string;
      course_duration?: IntNullableFilter<'course'> | number | null;
      created_at?: DateTimeFilter<'course'> | Date | string;
      updated_at?: DateTimeFilter<'course'> | Date | string;
      assignment?: XOR<AssignmentRelationFilter, assignmentWhereInput>;
    },
    'id'
  >;

  export type courseOrderByWithAggregationInput = {
    id?: SortOrder;
    assignment_id?: SortOrder;
    course_duration?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: courseCountOrderByAggregateInput;
    _avg?: courseAvgOrderByAggregateInput;
    _max?: courseMaxOrderByAggregateInput;
    _min?: courseMinOrderByAggregateInput;
    _sum?: courseSumOrderByAggregateInput;
  };

  export type courseScalarWhereWithAggregatesInput = {
    AND?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[];
    OR?: courseScalarWhereWithAggregatesInput[];
    NOT?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'course'> | string;
    assignment_id?: UuidWithAggregatesFilter<'course'> | string;
    course_duration?: IntNullableWithAggregatesFilter<'course'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'course'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'course'> | Date | string;
  };

  export type gradeWhereInput = {
    AND?: gradeWhereInput | gradeWhereInput[];
    OR?: gradeWhereInput[];
    NOT?: gradeWhereInput | gradeWhereInput[];
    id?: UuidFilter<'grade'> | string;
    assignment_id?: UuidFilter<'grade'> | string;
    created_at?: DateTimeFilter<'grade'> | Date | string;
    updated_at?: DateTimeFilter<'grade'> | Date | string;
    assignment?: XOR<AssignmentRelationFilter, assignmentWhereInput>;
  };

  export type gradeOrderByWithRelationInput = {
    id?: SortOrder;
    assignment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    assignment?: assignmentOrderByWithRelationInput;
  };

  export type gradeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: gradeWhereInput | gradeWhereInput[];
      OR?: gradeWhereInput[];
      NOT?: gradeWhereInput | gradeWhereInput[];
      assignment_id?: UuidFilter<'grade'> | string;
      created_at?: DateTimeFilter<'grade'> | Date | string;
      updated_at?: DateTimeFilter<'grade'> | Date | string;
      assignment?: XOR<AssignmentRelationFilter, assignmentWhereInput>;
    },
    'id'
  >;

  export type gradeOrderByWithAggregationInput = {
    id?: SortOrder;
    assignment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: gradeCountOrderByAggregateInput;
    _max?: gradeMaxOrderByAggregateInput;
    _min?: gradeMinOrderByAggregateInput;
  };

  export type gradeScalarWhereWithAggregatesInput = {
    AND?: gradeScalarWhereWithAggregatesInput | gradeScalarWhereWithAggregatesInput[];
    OR?: gradeScalarWhereWithAggregatesInput[];
    NOT?: gradeScalarWhereWithAggregatesInput | gradeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'grade'> | string;
    assignment_id?: UuidWithAggregatesFilter<'grade'> | string;
    created_at?: DateTimeWithAggregatesFilter<'grade'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'grade'> | Date | string;
  };

  export type lessonWhereInput = {
    AND?: lessonWhereInput | lessonWhereInput[];
    OR?: lessonWhereInput[];
    NOT?: lessonWhereInput | lessonWhereInput[];
    id?: UuidFilter<'lesson'> | string;
    assignment_id?: UuidFilter<'lesson'> | string;
    created_at?: DateTimeFilter<'lesson'> | Date | string;
    updated_at?: DateTimeFilter<'lesson'> | Date | string;
    company?: CompanyListRelationFilter;
    assignment?: XOR<AssignmentRelationFilter, assignmentWhereInput>;
  };

  export type lessonOrderByWithRelationInput = {
    id?: SortOrder;
    assignment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
    assignment?: assignmentOrderByWithRelationInput;
  };

  export type lessonWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: lessonWhereInput | lessonWhereInput[];
      OR?: lessonWhereInput[];
      NOT?: lessonWhereInput | lessonWhereInput[];
      assignment_id?: UuidFilter<'lesson'> | string;
      created_at?: DateTimeFilter<'lesson'> | Date | string;
      updated_at?: DateTimeFilter<'lesson'> | Date | string;
      company?: CompanyListRelationFilter;
      assignment?: XOR<AssignmentRelationFilter, assignmentWhereInput>;
    },
    'id'
  >;

  export type lessonOrderByWithAggregationInput = {
    id?: SortOrder;
    assignment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: lessonCountOrderByAggregateInput;
    _max?: lessonMaxOrderByAggregateInput;
    _min?: lessonMinOrderByAggregateInput;
  };

  export type lessonScalarWhereWithAggregatesInput = {
    AND?: lessonScalarWhereWithAggregatesInput | lessonScalarWhereWithAggregatesInput[];
    OR?: lessonScalarWhereWithAggregatesInput[];
    NOT?: lessonScalarWhereWithAggregatesInput | lessonScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'lesson'> | string;
    assignment_id?: UuidWithAggregatesFilter<'lesson'> | string;
    created_at?: DateTimeWithAggregatesFilter<'lesson'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'lesson'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    company_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      company_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    company_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type assignmentCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseCreateNestedManyWithoutAssignmentInput;
    grade?: gradeCreateNestedManyWithoutAssignmentInput;
    lesson?: lessonCreateNestedManyWithoutAssignmentInput;
  };

  export type assignmentUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseUncheckedCreateNestedManyWithoutAssignmentInput;
    grade?: gradeUncheckedCreateNestedManyWithoutAssignmentInput;
    lesson?: lessonUncheckedCreateNestedManyWithoutAssignmentInput;
  };

  export type assignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUpdateManyWithoutAssignmentNestedInput;
    grade?: gradeUpdateManyWithoutAssignmentNestedInput;
    lesson?: lessonUpdateManyWithoutAssignmentNestedInput;
  };

  export type assignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUncheckedUpdateManyWithoutAssignmentNestedInput;
    grade?: gradeUncheckedUpdateManyWithoutAssignmentNestedInput;
    lesson?: lessonUncheckedUpdateManyWithoutAssignmentNestedInput;
  };

  export type assignmentCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type assignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type assignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    lesson?: lessonCreateNestedOneWithoutCompanyInput;
    user?: userCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    lesson_id?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: lessonUpdateOneWithoutCompanyNestedInput;
    user?: userUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    lesson_id?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    lesson_id?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    lesson_id?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseCreateInput = {
    id?: string;
    course_duration?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    assignment: assignmentCreateNestedOneWithoutCourseInput;
  };

  export type courseUncheckedCreateInput = {
    id?: string;
    assignment_id: string;
    course_duration?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    course_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assignment?: assignmentUpdateOneRequiredWithoutCourseNestedInput;
  };

  export type courseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    assignment_id?: StringFieldUpdateOperationsInput | string;
    course_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseCreateManyInput = {
    id?: string;
    assignment_id: string;
    course_duration?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    course_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    assignment_id?: StringFieldUpdateOperationsInput | string;
    course_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gradeCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assignment: assignmentCreateNestedOneWithoutGradeInput;
  };

  export type gradeUncheckedCreateInput = {
    id?: string;
    assignment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assignment?: assignmentUpdateOneRequiredWithoutGradeNestedInput;
  };

  export type gradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    assignment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gradeCreateManyInput = {
    id?: string;
    assignment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    assignment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lessonCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutLessonInput;
    assignment: assignmentCreateNestedOneWithoutLessonInput;
  };

  export type lessonUncheckedCreateInput = {
    id?: string;
    assignment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutLessonInput;
  };

  export type lessonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutLessonNestedInput;
    assignment?: assignmentUpdateOneRequiredWithoutLessonNestedInput;
  };

  export type lessonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    assignment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutLessonNestedInput;
  };

  export type lessonCreateManyInput = {
    id?: string;
    assignment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type lessonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lessonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    assignment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
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

  export type CourseListRelationFilter = {
    every?: courseWhereInput;
    some?: courseWhereInput;
    none?: courseWhereInput;
  };

  export type GradeListRelationFilter = {
    every?: gradeWhereInput;
    some?: gradeWhereInput;
    none?: gradeWhereInput;
  };

  export type LessonListRelationFilter = {
    every?: lessonWhereInput;
    some?: lessonWhereInput;
    none?: lessonWhereInput;
  };

  export type courseOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type gradeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type lessonOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type assignmentCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type assignmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type assignmentMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
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
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
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

  export type LessonNullableRelationFilter = {
    is?: lessonWhereInput | null;
    isNot?: lessonWhereInput | null;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    lesson_id?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    lesson_id?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    lesson_id?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type AssignmentRelationFilter = {
    is?: assignmentWhereInput;
    isNot?: assignmentWhereInput;
  };

  export type courseCountOrderByAggregateInput = {
    id?: SortOrder;
    assignment_id?: SortOrder;
    course_duration?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type courseAvgOrderByAggregateInput = {
    course_duration?: SortOrder;
  };

  export type courseMaxOrderByAggregateInput = {
    id?: SortOrder;
    assignment_id?: SortOrder;
    course_duration?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type courseMinOrderByAggregateInput = {
    id?: SortOrder;
    assignment_id?: SortOrder;
    course_duration?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type courseSumOrderByAggregateInput = {
    course_duration?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type gradeCountOrderByAggregateInput = {
    id?: SortOrder;
    assignment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type gradeMaxOrderByAggregateInput = {
    id?: SortOrder;
    assignment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type gradeMinOrderByAggregateInput = {
    id?: SortOrder;
    assignment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type lessonCountOrderByAggregateInput = {
    id?: SortOrder;
    assignment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type lessonMaxOrderByAggregateInput = {
    id?: SortOrder;
    assignment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type lessonMinOrderByAggregateInput = {
    id?: SortOrder;
    assignment_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CompanyNullableRelationFilter = {
    is?: companyWhereInput | null;
    isNot?: companyWhereInput | null;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type courseCreateNestedManyWithoutAssignmentInput = {
    create?:
      | XOR<courseCreateWithoutAssignmentInput, courseUncheckedCreateWithoutAssignmentInput>
      | courseCreateWithoutAssignmentInput[]
      | courseUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: courseCreateOrConnectWithoutAssignmentInput | courseCreateOrConnectWithoutAssignmentInput[];
    createMany?: courseCreateManyAssignmentInputEnvelope;
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
  };

  export type gradeCreateNestedManyWithoutAssignmentInput = {
    create?:
      | XOR<gradeCreateWithoutAssignmentInput, gradeUncheckedCreateWithoutAssignmentInput>
      | gradeCreateWithoutAssignmentInput[]
      | gradeUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: gradeCreateOrConnectWithoutAssignmentInput | gradeCreateOrConnectWithoutAssignmentInput[];
    createMany?: gradeCreateManyAssignmentInputEnvelope;
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[];
  };

  export type lessonCreateNestedManyWithoutAssignmentInput = {
    create?:
      | XOR<lessonCreateWithoutAssignmentInput, lessonUncheckedCreateWithoutAssignmentInput>
      | lessonCreateWithoutAssignmentInput[]
      | lessonUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: lessonCreateOrConnectWithoutAssignmentInput | lessonCreateOrConnectWithoutAssignmentInput[];
    createMany?: lessonCreateManyAssignmentInputEnvelope;
    connect?: lessonWhereUniqueInput | lessonWhereUniqueInput[];
  };

  export type courseUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?:
      | XOR<courseCreateWithoutAssignmentInput, courseUncheckedCreateWithoutAssignmentInput>
      | courseCreateWithoutAssignmentInput[]
      | courseUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: courseCreateOrConnectWithoutAssignmentInput | courseCreateOrConnectWithoutAssignmentInput[];
    createMany?: courseCreateManyAssignmentInputEnvelope;
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
  };

  export type gradeUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?:
      | XOR<gradeCreateWithoutAssignmentInput, gradeUncheckedCreateWithoutAssignmentInput>
      | gradeCreateWithoutAssignmentInput[]
      | gradeUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: gradeCreateOrConnectWithoutAssignmentInput | gradeCreateOrConnectWithoutAssignmentInput[];
    createMany?: gradeCreateManyAssignmentInputEnvelope;
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[];
  };

  export type lessonUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?:
      | XOR<lessonCreateWithoutAssignmentInput, lessonUncheckedCreateWithoutAssignmentInput>
      | lessonCreateWithoutAssignmentInput[]
      | lessonUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: lessonCreateOrConnectWithoutAssignmentInput | lessonCreateOrConnectWithoutAssignmentInput[];
    createMany?: lessonCreateManyAssignmentInputEnvelope;
    connect?: lessonWhereUniqueInput | lessonWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type courseUpdateManyWithoutAssignmentNestedInput = {
    create?:
      | XOR<courseCreateWithoutAssignmentInput, courseUncheckedCreateWithoutAssignmentInput>
      | courseCreateWithoutAssignmentInput[]
      | courseUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: courseCreateOrConnectWithoutAssignmentInput | courseCreateOrConnectWithoutAssignmentInput[];
    upsert?: courseUpsertWithWhereUniqueWithoutAssignmentInput | courseUpsertWithWhereUniqueWithoutAssignmentInput[];
    createMany?: courseCreateManyAssignmentInputEnvelope;
    set?: courseWhereUniqueInput | courseWhereUniqueInput[];
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[];
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    update?: courseUpdateWithWhereUniqueWithoutAssignmentInput | courseUpdateWithWhereUniqueWithoutAssignmentInput[];
    updateMany?: courseUpdateManyWithWhereWithoutAssignmentInput | courseUpdateManyWithWhereWithoutAssignmentInput[];
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[];
  };

  export type gradeUpdateManyWithoutAssignmentNestedInput = {
    create?:
      | XOR<gradeCreateWithoutAssignmentInput, gradeUncheckedCreateWithoutAssignmentInput>
      | gradeCreateWithoutAssignmentInput[]
      | gradeUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: gradeCreateOrConnectWithoutAssignmentInput | gradeCreateOrConnectWithoutAssignmentInput[];
    upsert?: gradeUpsertWithWhereUniqueWithoutAssignmentInput | gradeUpsertWithWhereUniqueWithoutAssignmentInput[];
    createMany?: gradeCreateManyAssignmentInputEnvelope;
    set?: gradeWhereUniqueInput | gradeWhereUniqueInput[];
    disconnect?: gradeWhereUniqueInput | gradeWhereUniqueInput[];
    delete?: gradeWhereUniqueInput | gradeWhereUniqueInput[];
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[];
    update?: gradeUpdateWithWhereUniqueWithoutAssignmentInput | gradeUpdateWithWhereUniqueWithoutAssignmentInput[];
    updateMany?: gradeUpdateManyWithWhereWithoutAssignmentInput | gradeUpdateManyWithWhereWithoutAssignmentInput[];
    deleteMany?: gradeScalarWhereInput | gradeScalarWhereInput[];
  };

  export type lessonUpdateManyWithoutAssignmentNestedInput = {
    create?:
      | XOR<lessonCreateWithoutAssignmentInput, lessonUncheckedCreateWithoutAssignmentInput>
      | lessonCreateWithoutAssignmentInput[]
      | lessonUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: lessonCreateOrConnectWithoutAssignmentInput | lessonCreateOrConnectWithoutAssignmentInput[];
    upsert?: lessonUpsertWithWhereUniqueWithoutAssignmentInput | lessonUpsertWithWhereUniqueWithoutAssignmentInput[];
    createMany?: lessonCreateManyAssignmentInputEnvelope;
    set?: lessonWhereUniqueInput | lessonWhereUniqueInput[];
    disconnect?: lessonWhereUniqueInput | lessonWhereUniqueInput[];
    delete?: lessonWhereUniqueInput | lessonWhereUniqueInput[];
    connect?: lessonWhereUniqueInput | lessonWhereUniqueInput[];
    update?: lessonUpdateWithWhereUniqueWithoutAssignmentInput | lessonUpdateWithWhereUniqueWithoutAssignmentInput[];
    updateMany?: lessonUpdateManyWithWhereWithoutAssignmentInput | lessonUpdateManyWithWhereWithoutAssignmentInput[];
    deleteMany?: lessonScalarWhereInput | lessonScalarWhereInput[];
  };

  export type courseUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?:
      | XOR<courseCreateWithoutAssignmentInput, courseUncheckedCreateWithoutAssignmentInput>
      | courseCreateWithoutAssignmentInput[]
      | courseUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: courseCreateOrConnectWithoutAssignmentInput | courseCreateOrConnectWithoutAssignmentInput[];
    upsert?: courseUpsertWithWhereUniqueWithoutAssignmentInput | courseUpsertWithWhereUniqueWithoutAssignmentInput[];
    createMany?: courseCreateManyAssignmentInputEnvelope;
    set?: courseWhereUniqueInput | courseWhereUniqueInput[];
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[];
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    update?: courseUpdateWithWhereUniqueWithoutAssignmentInput | courseUpdateWithWhereUniqueWithoutAssignmentInput[];
    updateMany?: courseUpdateManyWithWhereWithoutAssignmentInput | courseUpdateManyWithWhereWithoutAssignmentInput[];
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[];
  };

  export type gradeUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?:
      | XOR<gradeCreateWithoutAssignmentInput, gradeUncheckedCreateWithoutAssignmentInput>
      | gradeCreateWithoutAssignmentInput[]
      | gradeUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: gradeCreateOrConnectWithoutAssignmentInput | gradeCreateOrConnectWithoutAssignmentInput[];
    upsert?: gradeUpsertWithWhereUniqueWithoutAssignmentInput | gradeUpsertWithWhereUniqueWithoutAssignmentInput[];
    createMany?: gradeCreateManyAssignmentInputEnvelope;
    set?: gradeWhereUniqueInput | gradeWhereUniqueInput[];
    disconnect?: gradeWhereUniqueInput | gradeWhereUniqueInput[];
    delete?: gradeWhereUniqueInput | gradeWhereUniqueInput[];
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[];
    update?: gradeUpdateWithWhereUniqueWithoutAssignmentInput | gradeUpdateWithWhereUniqueWithoutAssignmentInput[];
    updateMany?: gradeUpdateManyWithWhereWithoutAssignmentInput | gradeUpdateManyWithWhereWithoutAssignmentInput[];
    deleteMany?: gradeScalarWhereInput | gradeScalarWhereInput[];
  };

  export type lessonUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?:
      | XOR<lessonCreateWithoutAssignmentInput, lessonUncheckedCreateWithoutAssignmentInput>
      | lessonCreateWithoutAssignmentInput[]
      | lessonUncheckedCreateWithoutAssignmentInput[];
    connectOrCreate?: lessonCreateOrConnectWithoutAssignmentInput | lessonCreateOrConnectWithoutAssignmentInput[];
    upsert?: lessonUpsertWithWhereUniqueWithoutAssignmentInput | lessonUpsertWithWhereUniqueWithoutAssignmentInput[];
    createMany?: lessonCreateManyAssignmentInputEnvelope;
    set?: lessonWhereUniqueInput | lessonWhereUniqueInput[];
    disconnect?: lessonWhereUniqueInput | lessonWhereUniqueInput[];
    delete?: lessonWhereUniqueInput | lessonWhereUniqueInput[];
    connect?: lessonWhereUniqueInput | lessonWhereUniqueInput[];
    update?: lessonUpdateWithWhereUniqueWithoutAssignmentInput | lessonUpdateWithWhereUniqueWithoutAssignmentInput[];
    updateMany?: lessonUpdateManyWithWhereWithoutAssignmentInput | lessonUpdateManyWithWhereWithoutAssignmentInput[];
    deleteMany?: lessonScalarWhereInput | lessonScalarWhereInput[];
  };

  export type lessonCreateNestedOneWithoutCompanyInput = {
    create?: XOR<lessonCreateWithoutCompanyInput, lessonUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: lessonCreateOrConnectWithoutCompanyInput;
    connect?: lessonWhereUniqueInput;
  };

  export type userCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type lessonUpdateOneWithoutCompanyNestedInput = {
    create?: XOR<lessonCreateWithoutCompanyInput, lessonUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: lessonCreateOrConnectWithoutCompanyInput;
    upsert?: lessonUpsertWithoutCompanyInput;
    disconnect?: lessonWhereInput | boolean;
    delete?: lessonWhereInput | boolean;
    connect?: lessonWhereUniqueInput;
    update?: XOR<
      XOR<lessonUpdateToOneWithWhereWithoutCompanyInput, lessonUpdateWithoutCompanyInput>,
      lessonUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type userUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    upsert?: userUpsertWithWhereUniqueWithoutCompanyInput | userUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutCompanyInput | userUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: userUpdateManyWithWhereWithoutCompanyInput | userUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    upsert?: userUpsertWithWhereUniqueWithoutCompanyInput | userUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutCompanyInput | userUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: userUpdateManyWithWhereWithoutCompanyInput | userUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type assignmentCreateNestedOneWithoutCourseInput = {
    create?: XOR<assignmentCreateWithoutCourseInput, assignmentUncheckedCreateWithoutCourseInput>;
    connectOrCreate?: assignmentCreateOrConnectWithoutCourseInput;
    connect?: assignmentWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type assignmentUpdateOneRequiredWithoutCourseNestedInput = {
    create?: XOR<assignmentCreateWithoutCourseInput, assignmentUncheckedCreateWithoutCourseInput>;
    connectOrCreate?: assignmentCreateOrConnectWithoutCourseInput;
    upsert?: assignmentUpsertWithoutCourseInput;
    connect?: assignmentWhereUniqueInput;
    update?: XOR<
      XOR<assignmentUpdateToOneWithWhereWithoutCourseInput, assignmentUpdateWithoutCourseInput>,
      assignmentUncheckedUpdateWithoutCourseInput
    >;
  };

  export type assignmentCreateNestedOneWithoutGradeInput = {
    create?: XOR<assignmentCreateWithoutGradeInput, assignmentUncheckedCreateWithoutGradeInput>;
    connectOrCreate?: assignmentCreateOrConnectWithoutGradeInput;
    connect?: assignmentWhereUniqueInput;
  };

  export type assignmentUpdateOneRequiredWithoutGradeNestedInput = {
    create?: XOR<assignmentCreateWithoutGradeInput, assignmentUncheckedCreateWithoutGradeInput>;
    connectOrCreate?: assignmentCreateOrConnectWithoutGradeInput;
    upsert?: assignmentUpsertWithoutGradeInput;
    connect?: assignmentWhereUniqueInput;
    update?: XOR<
      XOR<assignmentUpdateToOneWithWhereWithoutGradeInput, assignmentUpdateWithoutGradeInput>,
      assignmentUncheckedUpdateWithoutGradeInput
    >;
  };

  export type companyCreateNestedManyWithoutLessonInput = {
    create?:
      | XOR<companyCreateWithoutLessonInput, companyUncheckedCreateWithoutLessonInput>
      | companyCreateWithoutLessonInput[]
      | companyUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: companyCreateOrConnectWithoutLessonInput | companyCreateOrConnectWithoutLessonInput[];
    createMany?: companyCreateManyLessonInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type assignmentCreateNestedOneWithoutLessonInput = {
    create?: XOR<assignmentCreateWithoutLessonInput, assignmentUncheckedCreateWithoutLessonInput>;
    connectOrCreate?: assignmentCreateOrConnectWithoutLessonInput;
    connect?: assignmentWhereUniqueInput;
  };

  export type companyUncheckedCreateNestedManyWithoutLessonInput = {
    create?:
      | XOR<companyCreateWithoutLessonInput, companyUncheckedCreateWithoutLessonInput>
      | companyCreateWithoutLessonInput[]
      | companyUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: companyCreateOrConnectWithoutLessonInput | companyCreateOrConnectWithoutLessonInput[];
    createMany?: companyCreateManyLessonInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutLessonNestedInput = {
    create?:
      | XOR<companyCreateWithoutLessonInput, companyUncheckedCreateWithoutLessonInput>
      | companyCreateWithoutLessonInput[]
      | companyUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: companyCreateOrConnectWithoutLessonInput | companyCreateOrConnectWithoutLessonInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutLessonInput | companyUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: companyCreateManyLessonInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutLessonInput | companyUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: companyUpdateManyWithWhereWithoutLessonInput | companyUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type assignmentUpdateOneRequiredWithoutLessonNestedInput = {
    create?: XOR<assignmentCreateWithoutLessonInput, assignmentUncheckedCreateWithoutLessonInput>;
    connectOrCreate?: assignmentCreateOrConnectWithoutLessonInput;
    upsert?: assignmentUpsertWithoutLessonInput;
    connect?: assignmentWhereUniqueInput;
    update?: XOR<
      XOR<assignmentUpdateToOneWithWhereWithoutLessonInput, assignmentUpdateWithoutLessonInput>,
      assignmentUncheckedUpdateWithoutLessonInput
    >;
  };

  export type companyUncheckedUpdateManyWithoutLessonNestedInput = {
    create?:
      | XOR<companyCreateWithoutLessonInput, companyUncheckedCreateWithoutLessonInput>
      | companyCreateWithoutLessonInput[]
      | companyUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: companyCreateOrConnectWithoutLessonInput | companyCreateOrConnectWithoutLessonInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutLessonInput | companyUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: companyCreateManyLessonInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutLessonInput | companyUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: companyUpdateManyWithWhereWithoutLessonInput | companyUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutUserInput = {
    create?: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    connectOrCreate?: companyCreateOrConnectWithoutUserInput;
    connect?: companyWhereUniqueInput;
  };

  export type companyUpdateOneWithoutUserNestedInput = {
    create?: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    connectOrCreate?: companyCreateOrConnectWithoutUserInput;
    upsert?: companyUpsertWithoutUserInput;
    disconnect?: companyWhereInput | boolean;
    delete?: companyWhereInput | boolean;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutUserInput, companyUpdateWithoutUserInput>,
      companyUncheckedUpdateWithoutUserInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
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
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
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
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type courseCreateWithoutAssignmentInput = {
    id?: string;
    course_duration?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseUncheckedCreateWithoutAssignmentInput = {
    id?: string;
    course_duration?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseCreateOrConnectWithoutAssignmentInput = {
    where: courseWhereUniqueInput;
    create: XOR<courseCreateWithoutAssignmentInput, courseUncheckedCreateWithoutAssignmentInput>;
  };

  export type courseCreateManyAssignmentInputEnvelope = {
    data: courseCreateManyAssignmentInput | courseCreateManyAssignmentInput[];
    skipDuplicates?: boolean;
  };

  export type gradeCreateWithoutAssignmentInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gradeUncheckedCreateWithoutAssignmentInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gradeCreateOrConnectWithoutAssignmentInput = {
    where: gradeWhereUniqueInput;
    create: XOR<gradeCreateWithoutAssignmentInput, gradeUncheckedCreateWithoutAssignmentInput>;
  };

  export type gradeCreateManyAssignmentInputEnvelope = {
    data: gradeCreateManyAssignmentInput | gradeCreateManyAssignmentInput[];
    skipDuplicates?: boolean;
  };

  export type lessonCreateWithoutAssignmentInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutLessonInput;
  };

  export type lessonUncheckedCreateWithoutAssignmentInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutLessonInput;
  };

  export type lessonCreateOrConnectWithoutAssignmentInput = {
    where: lessonWhereUniqueInput;
    create: XOR<lessonCreateWithoutAssignmentInput, lessonUncheckedCreateWithoutAssignmentInput>;
  };

  export type lessonCreateManyAssignmentInputEnvelope = {
    data: lessonCreateManyAssignmentInput | lessonCreateManyAssignmentInput[];
    skipDuplicates?: boolean;
  };

  export type courseUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: courseWhereUniqueInput;
    update: XOR<courseUpdateWithoutAssignmentInput, courseUncheckedUpdateWithoutAssignmentInput>;
    create: XOR<courseCreateWithoutAssignmentInput, courseUncheckedCreateWithoutAssignmentInput>;
  };

  export type courseUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: courseWhereUniqueInput;
    data: XOR<courseUpdateWithoutAssignmentInput, courseUncheckedUpdateWithoutAssignmentInput>;
  };

  export type courseUpdateManyWithWhereWithoutAssignmentInput = {
    where: courseScalarWhereInput;
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyWithoutAssignmentInput>;
  };

  export type courseScalarWhereInput = {
    AND?: courseScalarWhereInput | courseScalarWhereInput[];
    OR?: courseScalarWhereInput[];
    NOT?: courseScalarWhereInput | courseScalarWhereInput[];
    id?: UuidFilter<'course'> | string;
    assignment_id?: UuidFilter<'course'> | string;
    course_duration?: IntNullableFilter<'course'> | number | null;
    created_at?: DateTimeFilter<'course'> | Date | string;
    updated_at?: DateTimeFilter<'course'> | Date | string;
  };

  export type gradeUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: gradeWhereUniqueInput;
    update: XOR<gradeUpdateWithoutAssignmentInput, gradeUncheckedUpdateWithoutAssignmentInput>;
    create: XOR<gradeCreateWithoutAssignmentInput, gradeUncheckedCreateWithoutAssignmentInput>;
  };

  export type gradeUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: gradeWhereUniqueInput;
    data: XOR<gradeUpdateWithoutAssignmentInput, gradeUncheckedUpdateWithoutAssignmentInput>;
  };

  export type gradeUpdateManyWithWhereWithoutAssignmentInput = {
    where: gradeScalarWhereInput;
    data: XOR<gradeUpdateManyMutationInput, gradeUncheckedUpdateManyWithoutAssignmentInput>;
  };

  export type gradeScalarWhereInput = {
    AND?: gradeScalarWhereInput | gradeScalarWhereInput[];
    OR?: gradeScalarWhereInput[];
    NOT?: gradeScalarWhereInput | gradeScalarWhereInput[];
    id?: UuidFilter<'grade'> | string;
    assignment_id?: UuidFilter<'grade'> | string;
    created_at?: DateTimeFilter<'grade'> | Date | string;
    updated_at?: DateTimeFilter<'grade'> | Date | string;
  };

  export type lessonUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: lessonWhereUniqueInput;
    update: XOR<lessonUpdateWithoutAssignmentInput, lessonUncheckedUpdateWithoutAssignmentInput>;
    create: XOR<lessonCreateWithoutAssignmentInput, lessonUncheckedCreateWithoutAssignmentInput>;
  };

  export type lessonUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: lessonWhereUniqueInput;
    data: XOR<lessonUpdateWithoutAssignmentInput, lessonUncheckedUpdateWithoutAssignmentInput>;
  };

  export type lessonUpdateManyWithWhereWithoutAssignmentInput = {
    where: lessonScalarWhereInput;
    data: XOR<lessonUpdateManyMutationInput, lessonUncheckedUpdateManyWithoutAssignmentInput>;
  };

  export type lessonScalarWhereInput = {
    AND?: lessonScalarWhereInput | lessonScalarWhereInput[];
    OR?: lessonScalarWhereInput[];
    NOT?: lessonScalarWhereInput | lessonScalarWhereInput[];
    id?: UuidFilter<'lesson'> | string;
    assignment_id?: UuidFilter<'lesson'> | string;
    created_at?: DateTimeFilter<'lesson'> | Date | string;
    updated_at?: DateTimeFilter<'lesson'> | Date | string;
  };

  export type lessonCreateWithoutCompanyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    assignment: assignmentCreateNestedOneWithoutLessonInput;
  };

  export type lessonUncheckedCreateWithoutCompanyInput = {
    id?: string;
    assignment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type lessonCreateOrConnectWithoutCompanyInput = {
    where: lessonWhereUniqueInput;
    create: XOR<lessonCreateWithoutCompanyInput, lessonUncheckedCreateWithoutCompanyInput>;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userCreateManyCompanyInputEnvelope = {
    data: userCreateManyCompanyInput | userCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type lessonUpsertWithoutCompanyInput = {
    update: XOR<lessonUpdateWithoutCompanyInput, lessonUncheckedUpdateWithoutCompanyInput>;
    create: XOR<lessonCreateWithoutCompanyInput, lessonUncheckedCreateWithoutCompanyInput>;
    where?: lessonWhereInput;
  };

  export type lessonUpdateToOneWithWhereWithoutCompanyInput = {
    where?: lessonWhereInput;
    data: XOR<lessonUpdateWithoutCompanyInput, lessonUncheckedUpdateWithoutCompanyInput>;
  };

  export type lessonUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    assignment?: assignmentUpdateOneRequiredWithoutLessonNestedInput;
  };

  export type lessonUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    assignment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithWhereUniqueWithoutCompanyInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userUpdateWithWhereUniqueWithoutCompanyInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateManyWithWhereWithoutCompanyInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    company_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type assignmentCreateWithoutCourseInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    grade?: gradeCreateNestedManyWithoutAssignmentInput;
    lesson?: lessonCreateNestedManyWithoutAssignmentInput;
  };

  export type assignmentUncheckedCreateWithoutCourseInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    grade?: gradeUncheckedCreateNestedManyWithoutAssignmentInput;
    lesson?: lessonUncheckedCreateNestedManyWithoutAssignmentInput;
  };

  export type assignmentCreateOrConnectWithoutCourseInput = {
    where: assignmentWhereUniqueInput;
    create: XOR<assignmentCreateWithoutCourseInput, assignmentUncheckedCreateWithoutCourseInput>;
  };

  export type assignmentUpsertWithoutCourseInput = {
    update: XOR<assignmentUpdateWithoutCourseInput, assignmentUncheckedUpdateWithoutCourseInput>;
    create: XOR<assignmentCreateWithoutCourseInput, assignmentUncheckedCreateWithoutCourseInput>;
    where?: assignmentWhereInput;
  };

  export type assignmentUpdateToOneWithWhereWithoutCourseInput = {
    where?: assignmentWhereInput;
    data: XOR<assignmentUpdateWithoutCourseInput, assignmentUncheckedUpdateWithoutCourseInput>;
  };

  export type assignmentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    grade?: gradeUpdateManyWithoutAssignmentNestedInput;
    lesson?: lessonUpdateManyWithoutAssignmentNestedInput;
  };

  export type assignmentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    grade?: gradeUncheckedUpdateManyWithoutAssignmentNestedInput;
    lesson?: lessonUncheckedUpdateManyWithoutAssignmentNestedInput;
  };

  export type assignmentCreateWithoutGradeInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseCreateNestedManyWithoutAssignmentInput;
    lesson?: lessonCreateNestedManyWithoutAssignmentInput;
  };

  export type assignmentUncheckedCreateWithoutGradeInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseUncheckedCreateNestedManyWithoutAssignmentInput;
    lesson?: lessonUncheckedCreateNestedManyWithoutAssignmentInput;
  };

  export type assignmentCreateOrConnectWithoutGradeInput = {
    where: assignmentWhereUniqueInput;
    create: XOR<assignmentCreateWithoutGradeInput, assignmentUncheckedCreateWithoutGradeInput>;
  };

  export type assignmentUpsertWithoutGradeInput = {
    update: XOR<assignmentUpdateWithoutGradeInput, assignmentUncheckedUpdateWithoutGradeInput>;
    create: XOR<assignmentCreateWithoutGradeInput, assignmentUncheckedCreateWithoutGradeInput>;
    where?: assignmentWhereInput;
  };

  export type assignmentUpdateToOneWithWhereWithoutGradeInput = {
    where?: assignmentWhereInput;
    data: XOR<assignmentUpdateWithoutGradeInput, assignmentUncheckedUpdateWithoutGradeInput>;
  };

  export type assignmentUpdateWithoutGradeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUpdateManyWithoutAssignmentNestedInput;
    lesson?: lessonUpdateManyWithoutAssignmentNestedInput;
  };

  export type assignmentUncheckedUpdateWithoutGradeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUncheckedUpdateManyWithoutAssignmentNestedInput;
    lesson?: lessonUncheckedUpdateManyWithoutAssignmentNestedInput;
  };

  export type companyCreateWithoutLessonInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutLessonInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutLessonInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutLessonInput, companyUncheckedCreateWithoutLessonInput>;
  };

  export type companyCreateManyLessonInputEnvelope = {
    data: companyCreateManyLessonInput | companyCreateManyLessonInput[];
    skipDuplicates?: boolean;
  };

  export type assignmentCreateWithoutLessonInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseCreateNestedManyWithoutAssignmentInput;
    grade?: gradeCreateNestedManyWithoutAssignmentInput;
  };

  export type assignmentUncheckedCreateWithoutLessonInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseUncheckedCreateNestedManyWithoutAssignmentInput;
    grade?: gradeUncheckedCreateNestedManyWithoutAssignmentInput;
  };

  export type assignmentCreateOrConnectWithoutLessonInput = {
    where: assignmentWhereUniqueInput;
    create: XOR<assignmentCreateWithoutLessonInput, assignmentUncheckedCreateWithoutLessonInput>;
  };

  export type companyUpsertWithWhereUniqueWithoutLessonInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutLessonInput, companyUncheckedUpdateWithoutLessonInput>;
    create: XOR<companyCreateWithoutLessonInput, companyUncheckedCreateWithoutLessonInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutLessonInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutLessonInput, companyUncheckedUpdateWithoutLessonInput>;
  };

  export type companyUpdateManyWithWhereWithoutLessonInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutLessonInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    image?: StringNullableFilter<'company'> | string | null;
    lesson_id?: UuidNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
  };

  export type assignmentUpsertWithoutLessonInput = {
    update: XOR<assignmentUpdateWithoutLessonInput, assignmentUncheckedUpdateWithoutLessonInput>;
    create: XOR<assignmentCreateWithoutLessonInput, assignmentUncheckedCreateWithoutLessonInput>;
    where?: assignmentWhereInput;
  };

  export type assignmentUpdateToOneWithWhereWithoutLessonInput = {
    where?: assignmentWhereInput;
    data: XOR<assignmentUpdateWithoutLessonInput, assignmentUncheckedUpdateWithoutLessonInput>;
  };

  export type assignmentUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUpdateManyWithoutAssignmentNestedInput;
    grade?: gradeUpdateManyWithoutAssignmentNestedInput;
  };

  export type assignmentUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUncheckedUpdateManyWithoutAssignmentNestedInput;
    grade?: gradeUncheckedUpdateManyWithoutAssignmentNestedInput;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    lesson?: lessonCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    lesson_id?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpsertWithoutUserInput = {
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutUserInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: lessonUpdateOneWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    lesson_id?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseCreateManyAssignmentInput = {
    id?: string;
    course_duration?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gradeCreateManyAssignmentInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type lessonCreateManyAssignmentInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    course_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    course_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    course_duration?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gradeUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gradeUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gradeUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type lessonUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutLessonNestedInput;
  };

  export type lessonUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutLessonNestedInput;
  };

  export type lessonUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyLessonInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use AssignmentCountOutputTypeDefaultArgs instead
   */
  export type AssignmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    AssignmentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use LessonCountOutputTypeDefaultArgs instead
   */
  export type LessonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    LessonCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use assignmentDefaultArgs instead
   */
  export type assignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    assignmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use courseDefaultArgs instead
   */
  export type courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    courseDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use gradeDefaultArgs instead
   */
  export type gradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = gradeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use lessonDefaultArgs instead
   */
  export type lessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    lessonDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

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
