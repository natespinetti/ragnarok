import * as Contentful from "contentful";

export interface TypeImageTextFields {
    link?: Contentful.EntryFields.Symbol;
    linkText?: Contentful.EntryFields.Symbol;
    ctaTarget?: Contentful.EntryFields.Boolean;
    image: Contentful.Asset;
    headline: Contentful.EntryFields.Symbol;
    summary: Contentful.EntryFields.Symbol;
    whichSide: Contentful.EntryFields.Boolean;
}

export type TypeImageText = Contentful.Entry<TypeImageTextFields>;
