// --- Enums ---
export enum TEXT_STYLES_ENUM {
  LINK_ITEM_TEXT_STYLE = "link_item_text_style",
  LARGE_TEXT_STYLE = "large_text_style",
  MEDIUM_TEXT_STYLE = "medium_text_style",
  SMALL_TEXT_STYLE = "small_text_style",
  EXTRA_SMALL_TEXT_STYLE = "extra_small_text_style",
  CAROUSEL_NAV_ITEM_TEXT_STYLE = "carousel_nav_item_text_style",
}

export enum ANIMATIONS_ENUM {
  HOVER_UNDERLINE = "hover_underline",
}

export enum CAROUSEL_ITEM_TYPE_ENUM {
  VIDEO = "video",
  IMAGE = "image",
}

// --- Interfaces ---
// --- Common Interfaces ---
export interface IImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface IVideo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ICarouselItem {
  src: string;
  alt: string;
  content_type: CAROUSEL_ITEM_TYPE_ENUM;
  navLabel: string;
  title?: string; // Add title for the caption
  description?: string; // Add description for the caption
}

export interface ILinkItem {
  text: string;
  href: string;
  target_blank?: boolean;
}

export interface ICharacteristicItem {
  characteristic: string;
  value: string;
}

export interface ILinkImage extends IImage {
  href: string;
}

// Flex Container Settings Interface
export interface IFlexContainerSettings {
  leftFlexPercentage: number;
  gap: number;
  alignItems: string;
  justifyContent: string;
  padding: string;
}

// --- Content Interfaces ---
// --- Navbar Content Type ---
export interface INavbarContentType {
  logo: IImage;
  navItems: ILinkItem[];
  burgerMenu: IImage;
}

// --- Hero Section Content Type ---
export interface IHeroSectionContentType {
  video: IVideo;
  primaryHeading: string;
  subHeading: string;
}

// --- Mission Section 1 Content Type ---
export interface IMissionSection1LeftContainer {
  primaryHeading: string;
  subHeading: string;
}

export interface IMissionSection1RightContainer {
  body: string[];
}

export interface IMissionSection1ContentType {
  flexContainer: IFlexContainerSettings & {
    leftContainer: IMissionSection1LeftContainer;
    rightContainer: IMissionSection1RightContainer;
  };
}

// --- Mission Section 2 Content Type ---
export interface IMissionSection2LeftContainer {
  primaryHeading: string;
  subHeading: string;
}

export interface IMissionSection2RightContainer {
  video: IVideo;
}

export interface IMissionSection2ContentType {
  flexContainer: IFlexContainerSettings & {
    leftContainer: IMissionSection2LeftContainer;
    rightContainer: IMissionSection2RightContainer;
  };
}

// --- Tytan Interceptor 1 Section Content Type ---
export interface ITytanInterceptorSection1LeftContainer {
  image: IImage;
}

export interface ITytanInterceptorSection1RightContainer {
  primaryHeading: string;
  subHeading: string;
  characteristicItems: ICharacteristicItem[];
}

export interface ITytanInterceptor1ContentType {
  flexContainer: IFlexContainerSettings & {
    leftContainer: ITytanInterceptorSection1LeftContainer;
    rightContainer: ITytanInterceptorSection1RightContainer;
  };
}

// --- Tytan Interceptor 2 Section Content Type ---
export interface ITytanInterceptor2ContentType {
  carouselItems: ICarouselItem[];
}

// --- Career Section Content Type
export interface IJobItem {
  title: string;
  department: string;
  employmentLevel: string;
  location: string;
  href: string;
}

export interface ICareersSectionContentType {
  primaryHeading: string;
  subHeading: string;
  itemsPerPage: number;
  jobs: IJobItem[];
  icon: IImage;
}
// --- News Section Content Type
export interface INewsSectionContentType {
  primaryHeading: string;
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

// --- Footer ---
export interface IFooterLeftContainer {
  logo: ILinkImage;
}

export interface IFooterRightContainer {
  footerItems: ILinkItem[];
  footerSocialIcons: ILinkImage[];
}

export interface IFooterContentType {
  flexContainer: IFlexContainerSettings & {
    leftContainer: IFooterLeftContainer;
    rightContainer: IFooterRightContainer;
  };
}
