import * as Contentful from "contentful";

export interface TypeHeroFields {
    headline?: Contentful.EntryFields.Symbol;
    copy?: Contentful.EntryFields.Symbol;
    firstCta?: Contentful.EntryFields.Symbol;
    firstCtaLink?: Contentful.EntryFields.Symbol;
    secondCta?: Contentful.EntryFields.Symbol;
    secondCtaLink?: Contentful.EntryFields.Symbol;
    image?: Contentful.Asset;
    decorativeText?: Contentful.EntryFields.Symbol;
}

export type TypeHero = Contentful.Entry<TypeHeroFields>;
