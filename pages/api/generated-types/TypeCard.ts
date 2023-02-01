import * as Contentful from "contentful";

export interface TypeCardFields {
    link: Contentful.EntryFields.Symbol;
    linkText?: Contentful.EntryFields.Symbol;
    number: Contentful.EntryFields.Symbol;
    image: Contentful.Asset;
    textOverImage: Contentful.EntryFields.Symbol;
    headline: Contentful.EntryFields.Symbol;
    summary: Contentful.EntryFields.Symbol;
    whichSide: Contentful.EntryFields.Boolean;
}

export type TypeCard = Contentful.Entry<TypeCardFields>;
