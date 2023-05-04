import * as Contentful from "contentful";
import { TypeBackgroundFields } from "./TypeBackground";
import { TypeCardFields } from "./TypeCard";
import { TypeCopyFields } from "./TypeCopy";
import { TypeHeadlineFields } from "./TypeHeadline";
import { TypeHeroFields } from "./TypeHero";
import { TypeImagesFields } from "./TypeImages";
import { TypeImageTextFields } from "./TypeImageText";
import { TypeMiniCardGroupFields } from "./TypeMiniCardGroup";
import { TypeSpacerFields } from "./TypeSpacer";

export interface TypePageFields {
    title?: Contentful.EntryFields.Symbol;
    slug?: Contentful.EntryFields.Symbol;
    background?: Contentful.Entry<TypeBackgroundFields>;
    body?: Contentful.Entry<TypeCardFields | TypeCopyFields | TypeHeadlineFields | TypeHeroFields | TypeImageTextFields | TypeImagesFields | TypeMiniCardGroupFields | TypeSpacerFields>[];
}

export type TypePage = Contentful.Entry<TypePageFields>;
