import * as Contentful from "contentful";
import { TypeBackgroundFields } from "./TypeBackground";
import { TypeCardFields } from "./TypeCard";
import { TypeHeadlineFields } from "./TypeHeadline";
import { TypeHeroFields } from "./TypeHero";
import { TypeMiniCardGroupFields } from "./TypeMiniCardGroup";
import { TypeSpacerFields } from "./TypeSpacer";

export interface TypePageFields {
    title?: Contentful.EntryFields.Symbol;
    slug?: Contentful.EntryFields.Symbol;
    background?: Contentful.Entry<TypeBackgroundFields>;
    body?: Contentful.Entry<TypeCardFields | TypeHeadlineFields | TypeHeroFields | TypeMiniCardGroupFields | TypeSpacerFields>[];
}

export type TypePage = Contentful.Entry<TypePageFields>;
