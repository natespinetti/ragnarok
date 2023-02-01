import * as Contentful from "contentful";

export interface TypeSpacerFields {
    spacerHeight?: Contentful.EntryFields.Symbol;
}

export type TypeSpacer = Contentful.Entry<TypeSpacerFields>;
