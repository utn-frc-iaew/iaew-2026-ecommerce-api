declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MDXContent;
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	export interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof DataEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<DataEntryMap[C]>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;

	export type ReferenceDataEntry<
		C extends CollectionKey,
		E extends keyof DataEntryMap[C] = string,
	> = {
		collection: C;
		id: E;
	};

	export type ReferenceLiveEntry<C extends keyof LiveContentConfig['collections']> = {
		collection: C;
		id: string;
	};

	export function getCollection<C extends keyof DataEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof DataEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getLiveCollection<C extends keyof LiveContentConfig['collections']>(
		collection: C,
		filter?: LiveLoaderCollectionFilterType<C>,
	): Promise<
		import('astro').LiveDataCollectionResult<LiveLoaderDataType<C>, LiveLoaderErrorType<C>>
	>;

	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		entry: ReferenceDataEntry<C, E>,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? string extends keyof DataEntryMap[C]
			? Promise<DataEntryMap[C][E]> | undefined
			: Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getLiveEntry<C extends keyof LiveContentConfig['collections']>(
		collection: C,
		filter: string | LiveLoaderEntryFilterType<C>,
	): Promise<import('astro').LiveDataEntryResult<LiveLoaderDataType<C>, LiveLoaderErrorType<C>>>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof DataEntryMap>(
		entries: ReferenceDataEntry<C, keyof DataEntryMap[C]>[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof DataEntryMap>(
		entry: DataEntryMap[C][string],
	): Promise<RenderResult>;

	export function render<C extends keyof LiveContentConfig['collections']>(
		entry: import('astro').LiveDataEntry<LiveLoaderDataType<C>>,
	): Promise<RenderResult>;

	export function reference<
		C extends
			| keyof DataEntryMap
			// Allow generic `string` to avoid excessive type errors in the config
			// if `dev` is not running to update as you edit.
			// Invalid collection names will be caught at build time.
			| (string & {}),
	>(
		collection: C,
	): import('astro/zod').ZodPipe<
		import('astro/zod').ZodString,
		import('astro/zod').ZodTransform<
			C extends keyof DataEntryMap
				? {
						collection: C;
						id: string;
					}
				: never,
			string
		>
	>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof DataEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;
	type ExtractLoaderConfig<T> = T extends { loader: infer L } ? L : never;
	type InferLoaderSchema<
		C extends keyof DataEntryMap,
		L = ExtractLoaderConfig<ContentConfig['collections'][C]>,
	> = L extends { schema: import('astro/zod').ZodSchema }
		? import('astro/zod').infer<L['schema']>
		: any;

	type DataEntryMap = {
		"adrs": Record<string, {
  id: string;
  body?: string;
  collection: "adrs";
  data: InferEntrySchema<"adrs">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"agents": Record<string, {
  id: string;
  body?: string;
  collection: "agents";
  data: InferEntrySchema<"agents">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"changelogs": Record<string, {
  id: string;
  body?: string;
  collection: "changelogs";
  data: InferEntrySchema<"changelogs">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"channels": Record<string, {
  id: string;
  body?: string;
  collection: "channels";
  data: InferEntrySchema<"channels">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"commands": Record<string, {
  id: string;
  body?: string;
  collection: "commands";
  data: InferEntrySchema<"commands">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"containers": Record<string, {
  id: string;
  body?: string;
  collection: "containers";
  data: InferEntrySchema<"containers">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"customPages": Record<string, {
  id: string;
  body?: string;
  collection: "customPages";
  data: InferEntrySchema<"customPages">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"data-products": Record<string, {
  id: string;
  body?: string;
  collection: "data-products";
  data: InferEntrySchema<"data-products">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"designs": Record<string, {
  id: string;
  body?: string;
  collection: "designs";
  data: InferEntrySchema<"designs">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"diagrams": Record<string, {
  id: string;
  body?: string;
  collection: "diagrams";
  data: InferEntrySchema<"diagrams">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"domains": Record<string, {
  id: string;
  body?: string;
  collection: "domains";
  data: InferEntrySchema<"domains">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"entities": Record<string, {
  id: string;
  body?: string;
  collection: "entities";
  data: InferEntrySchema<"entities">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"events": Record<string, {
  id: string;
  body?: string;
  collection: "events";
  data: InferEntrySchema<"events">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"examples": Record<string, {
  id: string;
  body?: string;
  collection: "examples";
  data: InferEntrySchema<"examples">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"flows": Record<string, {
  id: string;
  body?: string;
  collection: "flows";
  data: InferEntrySchema<"flows">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"pages": Record<string, {
  id: string;
  body?: string;
  collection: "pages";
  data: InferEntrySchema<"pages">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"queries": Record<string, {
  id: string;
  body?: string;
  collection: "queries";
  data: InferEntrySchema<"queries">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"resourceDocCategories": Record<string, {
  id: string;
  body?: string;
  collection: "resourceDocCategories";
  data: InferEntrySchema<"resourceDocCategories">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"resourceDocs": Record<string, {
  id: string;
  body?: string;
  collection: "resourceDocs";
  data: InferEntrySchema<"resourceDocs">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"schemas": Record<string, {
  id: string;
  body?: string;
  collection: "schemas";
  data: InferEntrySchema<"schemas">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"services": Record<string, {
  id: string;
  body?: string;
  collection: "services";
  data: InferEntrySchema<"services">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"sidebars": Record<string, {
  id: string;
  body?: string;
  collection: "sidebars";
  data: InferEntrySchema<"sidebars">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"systems": Record<string, {
  id: string;
  body?: string;
  collection: "systems";
  data: InferEntrySchema<"systems">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"teams": Record<string, {
  id: string;
  body?: string;
  collection: "teams";
  data: InferEntrySchema<"teams">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"ubiquitousLanguages": Record<string, {
  id: string;
  body?: string;
  collection: "ubiquitousLanguages";
  data: InferEntrySchema<"ubiquitousLanguages">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;
"users": Record<string, {
  id: string;
  body?: string;
  collection: "users";
  data: InferEntrySchema<"users">;
  rendered?: RenderedContent;
  filePath?: string;
  digest?: string | number;
}>;

	};

	type ExtractLoaderTypes<T> = T extends import('astro/loaders').LiveLoader<
		infer TData,
		infer TEntryFilter,
		infer TCollectionFilter,
		infer TError
	>
		? { data: TData; entryFilter: TEntryFilter; collectionFilter: TCollectionFilter; error: TError }
		: { data: never; entryFilter: never; collectionFilter: never; error: never };
	type ExtractEntryFilterType<T> = ExtractLoaderTypes<T>['entryFilter'];
	type ExtractCollectionFilterType<T> = ExtractLoaderTypes<T>['collectionFilter'];
	type ExtractErrorType<T> = ExtractLoaderTypes<T>['error'];
	type ExtractDataType<T> = ExtractLoaderTypes<T>['data'];

	type LiveLoaderDataType<C extends keyof LiveContentConfig['collections']> =
		LiveContentConfig['collections'][C]['schema'] extends undefined
			? ExtractDataType<LiveContentConfig['collections'][C]['loader']>
			: import('astro/zod').infer<
					Exclude<LiveContentConfig['collections'][C]['schema'], undefined>
				>;
	type LiveLoaderEntryFilterType<C extends keyof LiveContentConfig['collections']> =
		ExtractEntryFilterType<LiveContentConfig['collections'][C]['loader']>;
	type LiveLoaderCollectionFilterType<C extends keyof LiveContentConfig['collections']> =
		ExtractCollectionFilterType<LiveContentConfig['collections'][C]['loader']>;
	type LiveLoaderErrorType<C extends keyof LiveContentConfig['collections']> = ExtractErrorType<
		LiveContentConfig['collections'][C]['loader']
	>;

	export type ContentConfig = typeof import("./eventcatalog/content.config.js");
	export type LiveContentConfig = never;
}
