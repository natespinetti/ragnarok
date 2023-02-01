import * as Contentful from "contentful";

export interface TypeHeadlineFields {
    headline?: Contentful.EntryFields.Symbol;
}

export type TypeHeadline = Contentful.Entry<TypeHeadlineFields>;
