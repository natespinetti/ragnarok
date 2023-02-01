import * as Contentful from "contentful";
import { TypeBackgroundFields } from "./TypeBackground";
import { TypeCardFields } from "./TypeCard";
import { TypeHeadlineFields } from "./TypeHeadline";
import { TypeHeroFields } from "./TypeHero";
import { TypeSpacerFields } from "./TypeSpacer";

export interface TypeProjectFields {
    title: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    background?: Contentful.Entry<TypeBackgroundFields>;
    body?: Contentful.Entry<TypeCardFields | TypeHeadlineFields | TypeHeroFields | TypeSpacerFields>[];
}

export type TypeProject = Contentful.Entry<TypeProjectFields>;
