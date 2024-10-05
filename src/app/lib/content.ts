// types.ts

import {
  CAROUSEL_ITEM_TYPE_ENUM,
  ICareersSectionContentType,
  IFooterContentType,
  IHeroSectionContentType,
  IMissionSection1ContentType,
  IMissionSection2ContentType,
  INavbarContentType,
  INewsSectionContentType,
  ITytanInterceptor1ContentType,
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
    { text: "Join Us", href: "#careers-section" },
    { text: "News", href: "#news-section" },
    { text: "Contact", href: "mailto:info@tytan-technologies.com" },
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
      primaryHeading: "The standard for cost-effective countermeasures",
      subHeading: "Our Mission",
    },
    rightContainer: {
      // individual p-items.
      body: [
        "TYTAN Technologies leads in developing AI-powered, cost-effective counter-drone solutions that strengthen democratic nations.",
        "We tackle modern warfare challenges by combining cutting-edge technology with scalable systems.",
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
      primaryHeading: "Our Approach",
      subHeading:
        "At TYTAN Technologies, we believe in a fully integrated security approach that covers the entire threat response spectrum. We intend to create an ecosystem of autonomous systems that provide adaptable and scalable solutions improving safety and operational effectiveness.",
    },
    rightContainer: {
      video: {
        src: "/tytan_anim.mp4",
        alt: "Tytan animated video for full flow of product.",
      },
    },
  },
};

// --- Tytan Interceptor Section 1 ---
export const TytanInterceptorSection1Content: ITytanInterceptor1ContentType = {
  // Settings for <FlexContainer/>
  flexContainer: {
    leftFlexPercentage: (4 * 100) / 7,
    gap: 35,
    alignItems: "center",
    justifyContent: "left",
    padding: "75px 80px",
    leftContainer: {
      image: {
        src: "/tytan-interceptor-mockup.jpg",
        alt: "tytan interceptor mockup",
      },
    },
    rightContainer: {
      primaryHeading: "TYTAN Interceptor",
      subHeading:
        "A cost-effective, AI-driven vertical take-off counter-UAS against NATO classes I-III, neutralising threats with precision through direct kinetic hit.",
      characteristicItems: [
        {
          characteristic: "Range",
          value: "15km",
        },
        {
          characteristic: "Speed",
          value: "250 km/h",
        },
        {
          characteristic: "Weight",
          value: "5 kg",
        },
        {
          characteristic: "Max height",
          value: "3000 m",
        },
      ],
    },
  },
};

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
        "Employs advanced AI technology to deliver precise detection and rapid response capabilities for enhanced operational efficiency.",
    },
    {
      src: "/interception_from_target.mp4",
      alt: "Interception from Target mp4",
      content_type: CAROUSEL_ITEM_TYPE_ENUM.VIDEO,
      navLabel: "Cost-Effective",
      title: "Cost-effective",
      description:
        "Utilizes innovative additive manufacturing techniques to minimize production costs while ensuring rapid deployment and seamless scalability for various applications.",
    },
    {
      src: "/opterra_interception_bounding_box.mp4",
      alt: "Opterra interception bounding box Video.",
      content_type: CAROUSEL_ITEM_TYPE_ENUM.VIDEO,
      navLabel: "Interoperable",
      title: "Interoperability",
      description:
        "Facilitates seamless integration with existing systems to enhance operational efficiency.",
    },
    {
      src: "/opterra_interception_bounding_box.mp4",
      alt: "Opterra interception bounding box Video.",
      content_type: CAROUSEL_ITEM_TYPE_ENUM.VIDEO,
      navLabel: "User-Proven",
      title: "User-proven",
      description:
        "Incorporates real user feedback to continuously improve practical effectiveness, reliability, and overall user experience.",
    },
  ],
};

// --- Careers Section ---
export const CareersSectionContent: ICareersSectionContentType = {
  primaryHeading: "Join Us",
  subHeading: "Make a lasting impact in the new era of defense!",
  itemsPerPage: 2,
  jobs: [
    {
      title: "Venture Development Working Student",
      department: "Business",
      employmentLevel: "Part Time",
      location: "Munich, Germany",
      href: "#",
    },
  ],
  icon: {
    src: "/arrow_right_icon.svg",
    alt: "Arrow Right Icon",
    width: 32,
    height: 32,
  },
};

// --- News Section ---
export const NewsSectionContent: INewsSectionContentType = {
  primaryHeading: "Newsroom",
  itemsPerPage: 3,
  news: [
    {
      date: new Date("2024-06-18"), // Correct Date object format (ISO 8601)
      title: "TYTAN featured in Handelsblatt",
      image: {
        src: "/tytan_featured_in_handelsblatt.jpeg", // Update with the actual image path
        alt: "Tytan featured in Handelsblatt", // Added alt text
      },
      href: "https://www.linkedin.com/posts/tytan-technologies_innovation-europe-techsovereignty-activity-7171046096683712512-OjL6?utm_source=share&utm_medium=member_desktop", // Replace with actual href
    },
    {
      date: new Date("2024-06-18"), // Correct Date object format
      title: "TYTAN featured in ZEIT Online",
      image: {
        src: "/tytan_featured_in_zeit_online.jpeg", // Converted image to an object for consistency
        alt: "Tytan featured in ZEIT Online", // Added alt text
      },
      href: "https://www.linkedin.com/posts/tytan-technologies_techsovereignty-dualusetech-innovation-activity-7198565369601486848-2B1L?utm_source=share&utm_medium=member_desktop",
    },
    {
      date: new Date("2024-06-18"), // Correct Date object format
      title: "TYTAN pitches at Munich Security Conference",
      image: {
        src: "/tytan_at_msc.jpeg", // Update with the actual image path
        alt: "Tytan pitches at Munich Security Conference", // Added alt text
      },
      href: "https://www.linkedin.com/posts/yumurtaci_msc2024-mscinnovationnight-innovation-activity-7165259339325194240-e9Xq?utm_source=share&utm_medium=member_desktop",
    },
    // Add more items as needed
  ],
  icon: {
    src: "/arrow_right_icon.svg",
    alt: "Arrow Right Icon",
    width: 32,
    height: 32,
  },
};

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
        href: "#navbar",
      },
    },
    rightContainer: {
      // individual nav items
      footerItems: [
        { text: "IMPRINT", href: "/api/imprint", target_blank: true },
        {
          text: "PRIVACY & LEGAL",
          href: "/api/privacy-policy",
          target_blank: true,
        },
        { text: "CONTACT", href: "mailto:info@tytan-technologies.com" },
      ],
      footerSocialIcons: [
        {
          src: "/youtube-icon.svg",
          alt: "Youtube Icon",
          href: "#",
          width: 48,
          height: 48,
        },
        {
          src: "/linkedIn_icon.svg",
          alt: "LinkedIn Icon",
          href: "#",
          width: 48,
          height: 48,
        },
      ],
    },
  },
};
