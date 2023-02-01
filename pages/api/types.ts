import type * as Contentful from 'contentful';
import type { TypeBackgroundFields, TypeHeroFields, TypePageFields, TypeCardFields, TypeHeadlineFields, TypeMiniCardFields, TypeSpacerFields } from './generated-types';

// import type {  } from './generated-types/TypeHero';

export { default } from './generated-types';
export type TypePage = Contentful.Entry<TypePageFields>;
export type TypeHero = Contentful.Entry<TypeHeroFields>;
export type TypeBackground = Contentful.Entry<TypeBackgroundFields>;
export type TypeCard = Contentful.Entry<TypeCardFields>;
export type TypeMiniCard = Contentful.Entry<TypeMiniCardFields>;
export type TypeHeadline = Contentful.Entry<TypeHeadlineFields>;
export type TypeSpacer = Contentful.Entry<TypeSpacerFields>;
