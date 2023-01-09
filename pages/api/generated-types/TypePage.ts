import * as Contentful from "contentful";
import { TypeCardFields } from "./TypeCard";
import { TypeHeroFields } from "./TypeHero";

export interface TypePageFields {
    title?: Contentful.EntryFields.Symbol;
    slug?: Contentful.EntryFields.Symbol;
    hero?: Contentful.Entry<TypeHeroFields>;
    card?: Contentful.Entry<TypeCardFields>[];
}

export type TypePage = Contentful.Entry<TypePageFields>;
