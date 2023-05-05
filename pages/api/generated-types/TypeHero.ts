import * as Contentful from "contentful";

export interface TypeHeroFields {
    headline?: Contentful.EntryFields.Symbol;
    copy?: Contentful.EntryFields.Symbol;
    firstCta?: Contentful.EntryFields.Symbol;
    firstCtaLink?: Contentful.EntryFields.Symbol;
    firstCtaTarget?: Contentful.EntryFields.Boolean;
    secondCta?: Contentful.EntryFields.Symbol;
    secondCtaLink?: Contentful.EntryFields.Symbol;
    secondCtaTarget?: Contentful.EntryFields.Boolean;
    image?: Contentful.Asset;
    decorativeText?: Contentful.EntryFields.Symbol;
}

export type TypeHero = Contentful.Entry<TypeHeroFields>;
