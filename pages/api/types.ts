import type * as Contentful from 'contentful';
import type { TypeHeroFields, TypePageFields } from './generated-types';

// import type {  } from './generated-types/TypeHero';

export * from './generated-types';
export type TypePage = Contentful.Entry<TypePageFields>;
export type TypeHero = Contentful.Entry<TypeHeroFields>;
