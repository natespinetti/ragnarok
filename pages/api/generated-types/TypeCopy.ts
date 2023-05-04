import * as Contentful from "contentful";

export interface TypeCopyFields {
    summary: Contentful.EntryFields.Symbol;
    text?: Contentful.EntryFields.Text;
}

export type TypeCopy = Contentful.Entry<TypeCopyFields>;
