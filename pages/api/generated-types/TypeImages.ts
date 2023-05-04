import * as Contentful from "contentful";

export interface TypeImagesFields {
    link?: Contentful.EntryFields.Symbol;
    image: Contentful.Asset;
    alttext: Contentful.EntryFields.Symbol;
}

export type TypeImages = Contentful.Entry<TypeImagesFields>;
