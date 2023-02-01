import * as Contentful from "contentful";

export interface TypeMiniCardFields {
    link?: Contentful.EntryFields.Symbol;
    linkText?: Contentful.EntryFields.Symbol;
    image?: Contentful.Asset;
    textOverImage?: Contentful.EntryFields.Symbol;
    headline?: Contentful.EntryFields.Symbol;
    summary?: Contentful.EntryFields.Symbol;
}

export type TypeMiniCard = Contentful.Entry<TypeMiniCardFields>;
