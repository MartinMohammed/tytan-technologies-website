// --- Enums ---

import { ReactNode } from "react";

// --- Text Styles ---
export enum TEXT_STYLES_ENUM {
  LINK_ITEM_TEXT_STYLE = "link_item_text_style",
  LARGE_TEXT_STYLE = "large_text_style",
  MEDIUM_TEXT_STYLE = "medium_text_style",
  SMALL_TEXT_STYLE = "small_text_style",
  EXTRA_SMALL_TEXT_STYLE = "extra_small_text_style",
  CAROUSEL_NAV_ITEM_TEXT_STYLE = "carousel_nav_item_text_style",
}
// ---------------------------------------

// --- Animations ---
export enum ANIMATIONS_ENUM {
  HOVER_UNDERLINE = "hover_underline",
}
// ---------------------------------------

// --- Media types ---
export enum MEDIA_TYPES_ENUM {
  VIDEO = "video",
  IMAGE = "image",
}
// ---------------------------------------

// --- Interfaces ---
// --- Common Interfaces ---

// ---------------------------------------
export interface GenericSection {
  ContentWrapper: IContentWrapper;
}

// --- Carousel ---
export interface ICarouselItemSettings {
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export interface ICarouselItem extends ICarouselItemSettings {
  src: string;
  alt: string;
  navLabel: string;
  contentType?: MEDIA_TYPES_ENUM;
  title?: string; // Add title for the caption
  description?: string; // Add description for the caption
}

// ---------------------------------------

// Characteristic
export interface ICharacteristicItem {
  characteristic: string;
  value: string;
}
// ---------------------------------------

// --- Media ---
export interface IImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface IVideo {
  src: string;
  width?: number;
  height?: number;
}
// ---------------------------------------

// --- Link Item ---
export interface ILinkItemSettings {
  targetBlank?: boolean;
  hover?: boolean;
}
export interface ILinkItem extends ILinkItemSettings {
  text: string;
  href: string;
}

// --- Link Image ---
export interface ILinkImageSettigs {
  targetBlank?: boolean;
  hoverScaleEffect?: boolean;
}
export interface ILinkImage extends ILinkImageSettigs, IImage {
  href: string;
}
// ---------------------------------------

// --- Flex Container ---
export interface IFlexContainerSettings {
  leftFlexPercentage?: number;
  gap?: number;
  alignItems?: string;
  justifyContent?: string;
}

export interface IFlexContainer<T, U> extends IFlexContainerSettings {
  leftContainer: T;
  rightContainer: U;
}
// ---------------------------------------

// --- Wrapper Container ---
export interface IContentWrapperSettings {
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

export interface IContentWrapper extends IContentWrapperSettings {}

// ---------------------------------------

// --- Heading Group ---
export interface IHeadingGroupSettings {
  gap?: number;
  widthPct?: number;
  reverse?: boolean;
  marginBottom?: number;
  marginTop?: number;
  primaryHeadingTextStyle?: TEXT_STYLES_ENUM;
  primaryHeadingTextColor?: string;
  subHeadingTextStyle?: TEXT_STYLES_ENUM;
  subHeadingTextColor?: string;
}

export interface IHeadingGroup extends IHeadingGroupSettings {
  primaryHeading: string;
  subHeading?: string;
}
// ---------------------------------------

// --- Content ---
// --- Navbar Content Type ---
export interface INavbarContentType extends GenericSection {
  logo: ILinkImage;
  navItems: ILinkItem[];
  burgerMenu: IImage;
}
// ---------------------------------------

// --- Hero Section Content Type ---
export interface IHeroSectionContentType extends GenericSection {
  headingGroup: IHeadingGroup;
  video: IVideo;
}
// ---------------------------------------

// --- Mission Section 1 Content Type ---
export interface IMissionSection1LeftContainer {
  headingGroup: IHeadingGroup;
}

export interface IMissionSection1RightContainer {
  body: string[];
}

export interface IMissionSection1ContentType extends GenericSection {
  flexContainer: IFlexContainer<
    IMissionSection1LeftContainer,
    IMissionSection1RightContainer
  >;
}
// ---------------------------------------

// --- Mission Section 2 Content Type ---
export interface IMissionSection2LeftContainer {
  headingGroup: IHeadingGroup;
}

export interface IMissionSection2RightContainer {
  video: IVideo;
}

export interface IMissionSection2ContentType extends GenericSection {
  flexContainer: IFlexContainer<
    IMissionSection2LeftContainer,
    IMissionSection2RightContainer
  >;
}
// ---------------------------------------

// --- Tytan Interceptor 1 Section Content Type ---
export interface ITytanInterceptorSection1LeftContainer {
  image: IImage;
}

export interface ITytanInterceptorSection1RightContainer {
  headingGroup: IHeadingGroup;
  characteristicItems: ICharacteristicItem[];
}

export interface ITytanInterceptorSection1ContentType extends GenericSection {
  flexContainer: IFlexContainer<
    ITytanInterceptorSection1LeftContainer,
    ITytanInterceptorSection1RightContainer
  >;
}
// ---------------------------------------

// --- Tytan Interceptor 2 Section Content Type ---
export interface ITytanInterceptorSection2ContentType extends GenericSection {
  carouselItems: ICarouselItem[];
}
// ---------------------------------------

// --- Tytan Interceptor 3 Section Content Type ---

export interface ITytanInterceptorSection3LeftContainer {
  headingGroups: IHeadingGroup[];
}

export interface ITytanInterceptorSection3RightContainer {
  image: IImage;
}

export interface ITytanInterceptor1ContentType extends GenericSection {
  flexContainer: IFlexContainer<
    ITytanInterceptorSection1LeftContainer,
    ITytanInterceptorSection1RightContainer
  >;
}
// ---------------------------------------

export interface ITytanInterceptorSection3ContentType extends GenericSection {
  flexContainer: IFlexContainer<
    ITytanInterceptorSection3LeftContainer,
    ITytanInterceptorSection3RightContainer
  >;
}

// --- Career Section Content Type
export interface IJobItem {
  title: string;
  department: string;
  employmentLevel: string;
  location: string;
  href: string;
}

export interface ICareersSectionContentType extends GenericSection {
  headingGroup: IHeadingGroup;
  itemsPerPage: number;
  jobs: IJobItem[];
  icon: IImage;
}
// ---------------------------------------

// --- News Section Content Type
export interface INewsSectionContentType extends GenericSection {
  headingGroup: IHeadingGroup;
  itemsPerPage: number;
  news: INewsItem[];
  icon: IImage;
}

export interface INewsItem {
  date: Date;
  title: string;
  image: IImage;
  href: string;
}
// ---------------------------------------

// --- Footer ---
export interface IFooterLeftContainer {
  logo: ILinkImage;
}

export interface IFooterRightContainer {
  footerItems: ILinkItem[];
  footerSocialIcons: ILinkImage[];
}

export interface IFooterContentType extends GenericSection {
  flexContainer: IFlexContainer<IFooterLeftContainer, IFooterRightContainer>;
}
// ---------------------------------------
