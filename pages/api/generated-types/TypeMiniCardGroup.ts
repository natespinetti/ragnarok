import * as Contentful from "contentful";
import { TypeMiniCardFields } from "./TypeMiniCard";

export interface TypeMiniCardGroupFields {
    group?: Contentful.Entry<TypeMiniCardFields>[];
}

export type TypeMiniCardGroup = Contentful.Entry<TypeMiniCardGroupFields>;
