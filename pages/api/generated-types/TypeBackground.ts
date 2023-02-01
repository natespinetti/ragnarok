import * as Contentful from "contentful";

export interface TypeBackgroundFields {
    theme?: "dark";
}

export type TypeBackground = Contentful.Entry<TypeBackgroundFields>;
