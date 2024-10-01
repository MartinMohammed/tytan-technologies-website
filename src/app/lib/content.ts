// types.ts

import {
  CAROUSEL_ITEM_TYPE_ENUM,
  IFooterContentType,
  IHeroSectionContentType,
  IMissionSection1ContentType,
  IMissionSection2ContentType,
  INavbarContentType,
  ITytanInterceptor2ContentType,
} from "@/app/lib/definition";

// --- Navbar ---
export const NavbarContent: INavbarContentType = {
  logo: {
    src: "/tytan_logo_white.svg",
    alt: "Tytan Technologies Logo",
    width: 183,
    height: 46,
  },
  // individual nav items
  navItems: [
    { text: "Contact", href: "mailto:info@tytan-technologies.com" },
    { text: "Join Us", href: "#" },
  ],
  burgerMenu: {
    src: "/burger_menu_icon.svg",
    alt: "burger menu icon",
    width: 36,
    height: 24,
  },
};

// --- Hero ---
export const HeroSectionContent: IHeroSectionContentType = {
  video: {
    src: "/opterra_interception_bounding_box.mp4",
    alt: "Opterra interception bounding box Video.",
    width: 1438.22,
    height: 810,
  },
  primaryHeading: "Autonomy to protect.",
  subHeading: "TYTAN Technologies",
};

// --- MissionSection1 ---
export const MissionSection1Content: IMissionSection1ContentType = {
  // Settings for <FlexContainer/>
  flexContainer: {
    leftFlexPercentage: 41.25,
    gap: 35,
    alignItems: "center",
    justifyContent: "left",
    padding: "75px 80px",
    leftContainer: {
      primaryHeading: "To set the global standard in autonomous systems.",
      subHeading: "Our Mission",
    },
    rightContainer: {
      // individual p-items.
      body: [
        "TYTAN Technologies is at the forefront of developing AI-driven counter-drone solutions to protect and empower democratic nations. By combining advanced technology with agile, scalable, and cost-effective systems, we address the evolving challenges of modern warfare.",
        "Our commitment is to ensure technological sovereignty and enhance defense capabilities through relentless innovation and close collaboration with end-users.",
      ],
    },
  },
};

// --- MissionSection2 ---
export const MissionSection2Content: IMissionSection2ContentType = {
  // Settings for <FlexContainer/>
  flexContainer: {
    leftFlexPercentage: 41.25,
    gap: 35,
    alignItems: "center",
    justifyContent: "left",
    padding: "75px 80px",
    leftContainer: {
      primaryHeading: "Comprehensive Protection, Integrated Approach.",
      subHeading:
        "At TYTAN Technologies, we champion a fully integrated security approach, spanning the entire threat response spectrum. We aim to develop an ecosystem of autonomous systems delivering adaptable and scalable solutions,  enhancing overall security and operational effectiveness.",
    },
    rightContainer: {
      video: {
        src: "/tytan_anim.mp4",
        alt: "Tytan animated video for full flow of product.",
        width: 715,
      },
    },
  },
};

// --- Tytan Interceptor Section 1 ---

// --- Tytan Interceptor Section 2 ---
export const TytanInterceptorSection2Content: ITytanInterceptor2ContentType = {
  carouselItems: [
    {
      src: "/interception_from_target.mp4",
      alt: "Interception from Target mp4",
      content_type: CAROUSEL_ITEM_TYPE_ENUM.VIDEO,
      navLabel: "Autonomous",
      title: "Autonomous",
      description:
        "Employs  advanced AI for precise autonomous detection and response",
    },
    {
      src: "/interception_from_target.mp4",
      alt: "Interception from Target mp4",
      content_type: CAROUSEL_ITEM_TYPE_ENUM.VIDEO,
      navLabel: "Cost Effective",
      title: "Cost-effective",
      description:
        "Leverages additive manufacturing to minimize production costs while being engineered for rapid deployment and seamless scalability.",
    },
    {
      src: "/opterra_interception_bounding_box.mp4",
      alt: "Opterra interception bounding box Video.",
      content_type: CAROUSEL_ITEM_TYPE_ENUM.VIDEO,
      navLabel: "Interoperable",
      title: "Interoperability",
      description: "Designed for seamless integration with existing systems",
    },
    {
      src: "/opterra_interception_bounding_box.mp4",
      alt: "Opterra interception bounding box Video.",
      content_type: CAROUSEL_ITEM_TYPE_ENUM.VIDEO,
      navLabel: "User proven",
      title: "User-proven",
      description:
        "Developed through real user feedback, enhancing practical effectiveness.",
    },
  ],
};

// --- Careers Section ---

// --- News Section ---

// --- Footer ---
export const FooterContent: IFooterContentType = {
  flexContainer: {
    leftFlexPercentage: 48,
    gap: 0,
    alignItems: "center",
    justifyContent: "left",
    padding: "75px 40px",
    leftContainer: {
      logo: {
        src: "/tytan_logo_white.svg",
        alt: "Tytan Technologies Logo",
        width: 205.14,
        height: 52,
      },
    },
    rightContainer: {
      // individual nav items
      footerItems: [
        { text: "IMPRINT", href: "#" },
        { text: "PRIVACY & LEGAL", href: "#" },
        { text: "CONTACT", href: "mailto:info@tytan-technologies.com" },
      ],
      footerSocialIcons: [
        {
          src: "/youtube-icon.svg",
          alt: "Youtube Icon",
          href: "#",
          width: 42,
          height: 42,
        },
        {
          src: "/x-icon.svg",
          alt: "X Icon",
          href: "#",
          width: 42,
          height: 42,
        },
        {
          src: "/linkedIn_icon.svg",
          alt: "LinkedIn Icon",
          href: "#",
          width: 42,
          height: 42,
        },
      ],
    },
  },
};
