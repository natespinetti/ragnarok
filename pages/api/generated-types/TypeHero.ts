import * as Contentful from "contentful";

export interface TypeHeroFields {
    headline?: Contentful.EntryFields.Symbol;
    copy?: Contentful.EntryFields.Symbol;
    arrowButtonCopy?: Contentful.EntryFields.Symbol;
    arrowButtonLink?: Contentful.EntryFields.Symbol;
    image?: Contentful.Asset;
    decorativeText?: Contentful.EntryFields.Symbol;
}

export type TypeHero = Contentful.Entry<TypeHeroFields>;
