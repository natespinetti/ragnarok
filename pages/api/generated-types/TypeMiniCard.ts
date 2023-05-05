import * as Contentful from "contentful";

export interface TypeMiniCardFields {
    link?: Contentful.EntryFields.Symbol;
    linkText?: Contentful.EntryFields.Symbol;
    ctaTarget?: Contentful.EntryFields.Boolean;
    image?: Contentful.Asset;
    textOverImage?: Contentful.EntryFields.Symbol;
    headline?: Contentful.EntryFields.Symbol;
    summary?: Contentful.EntryFields.Symbol;
}

export type TypeMiniCard = Contentful.Entry<TypeMiniCardFields>;
