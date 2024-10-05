// types.ts

import {
  MEDIA_TYPES_ENUM,
  ICareersSectionContentType,
  IFooterContentType,
  IHeroSectionContentType,
  IMissionSection1ContentType,
  IMissionSection2ContentType,
  INavbarContentType,
  INewsSectionContentType,
  ITytanInterceptorSection1ContentType,
  ITytanInterceptorSection2ContentType,
  ITytanInterceptorSection3ContentType,
  TEXT_STYLES_ENUM,
} from "@/app/lib/definition";

export const DEFAULT_CONSTANTS = {
  ContentWrapper: {
    paddingTop: 75,
    paddingBottom: 75,
    paddingLeft: 80,
    paddingRight: 80,
  },
  FlexContainer: {
    leftFlexPercentage: 42,
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  HeadingGroup: {
    gap: 25,
    reverse: false,
    reverseGap: 10,
    widthPct: 100,
    marginTop: 0,
    marginBottom: 0,
    primaryHeadingTextStyle: TEXT_STYLES_ENUM.MEDIUM_TEXT_STYLE,
    primaryHeadingTextColor: "var(--text_primary)",
    subHeadingTextStyle: TEXT_STYLES_ENUM.SMALL_TEXT_STYLE,
    subHeadingTextColor: "var(--text_secondary)",
  },
  CarouselItem: {
    contentType: MEDIA_TYPES_ENUM.VIDEO,
    controls: false,
    autoPlay: true,
    muted: true,
    loop: true,
  },
  LinkItem: {
    targetBlank: true,
    hover: true,
  },
  LinkImage: {
    targetBlank: true,
    hoverScaleEffect: true,
    width: 42,
    height: 42,
  },
};

// --- Navbar ---
export const NavbarContent: INavbarContentType = {
  ContentWrapper: {},
  logo: {
    src: "/tytan_logo_white.svg",
    alt: "Tytan Technologies Logo",
    width: 183,
    height: 46,
    href: "#footer",
    targetBlank: false,
  },
  // individual nav items
  navItems: [
    { text: "Join Us", href: "#careers-section", targetBlank: false },
    { text: "News", href: "#news-section", targetBlank: false },
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
  ContentWrapper: {},
  video: {
    src: "/opterra_interception_bounding_box.mp4",
  },
  headingGroup: {
    primaryHeading: "Autonomy to protect.",
    subHeading: "TYTAN Technologies",
    primaryHeadingTextStyle: TEXT_STYLES_ENUM.LARGE_TEXT_STYLE,
    subHeadingTextColor: "var(--text_primary)",
    reverse: true,
  },
};

// --- MissionSection1 ---
export const MissionSection1Content: IMissionSection1ContentType = {
  ContentWrapper: {},
  // Settings for <FlexContainer/>
  flexContainer: {
    leftContainerContent: {
      headingGroup: {
        primaryHeading: "The standard for cost-effective countermeasures",
        subHeading: "Our Mission",
        reverse: true,
      },
    },
    rightContainerContent: {
      // individual p-items.
      body: [
        "TYTAN Technologies is a leader in developing AI-powered, cost-effective counter drone solutions to protect people and critical infrastructure.",
        "We address modern defense challenges by combining cutting-edge technology with scalable systems to strengthen democratic nations.",
      ],
    },
  },
};

// --- MissionSection2 ---
export const MissionSection2Content: IMissionSection2ContentType = {
  ContentWrapper: {},
  // Settings for <FlexContainer/>
  flexContainer: {
    leftContainerContent: {
      headingGroup: {
        primaryHeading: "Our Approach",
        subHeading:
          "At TYTAN Technologies, we believe in a fully integrated security approach that covers the entire threat response spectrum. We intend to create an ecosystem of autonomous systems that provide adaptable and scalable solutions improving safety and operational effectiveness.",
      },
    },
    rightContainerContent: {
      video: {
        src: "/tytan_anim.mp4",
      },
    },
  },
};

// --- Tytan Interceptor Section 1 ---
export const TytanInterceptorSection1Content: ITytanInterceptorSection1ContentType =
  {
    ContentWrapper: {},
    // Settings for <FlexContainer/>
    flexContainer: {
      leftFlexPercentage: (4 * 100) / 7,
      leftContainerContent: {
        image: {
          src: "/tytan-interceptor-mockup.jpg",
          alt: "tytan interceptor mockup",
        },
      },
      rightContainerContent: {
        headingGroup: {
          primaryHeading: "TYTAN Interceptor",
          subHeading:
            "A high-speed autonomous interceptor that minimizes the cost per engagement against Class II threats.",
          widthPct: 140,
        },
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
export const TytanInterceptorSection2Content: ITytanInterceptorSection2ContentType =
  {
    ContentWrapper: {},
    carouselItems: [
      {
        src: "/interception_from_target.mp4",
        alt: "Interception from Target mp4",
        navLabel: "Autonomous",
        title: "Autonomous",
        description:
          "Advanced AI for precise detection and response, while operators stay in control of critical decisions.",
      },
      {
        src: "/interception_from_target.mp4",
        alt: "Interception from Target mp4",
        navLabel: "Cost-Effective",
        title: "Cost-effective",
        description:
          "Additive manufacturing and modularity ensure scalability and adaptability to meet changing operational needs.",
      },
      {
        src: "/opterra_interception_bounding_box.mp4",
        alt: "Opterra interception bounding box Video.",
        navLabel: "Interoperable",
        title: "Interoperability",
        description:
          "Seamless integration with existing digital infrastructure to maximize efficiency.",
      },
      {
        src: "/opterra_interception_bounding_box.mp4",
        alt: "Opterra interception bounding box Video.",
        navLabel: "User-Proven",
        title: "User-proven",
        description: "Forged by user feedback to address real-world problems.",
      },
    ],
  };

// --- Tytan Interceptor Section 1 ---
export const TytanInterceptorSection3Content: ITytanInterceptorSection3ContentType =
  {
    ContentWrapper: {
      paddingBottom: 0,
      paddingTop: 0,
    },
    // Settings for <FlexContainer/>
    flexContainer: {
      leftContainerContent: {
        headingGroups: [
          {
            primaryHeading: "Autonomous Interceptor",
            subHeading:
              "TYTAN interceptor is launched within seconds and flies towards the adversary drone's location. Utilizing computer vision for detection, it effectively neutralizes the adversary drone through a direct kinetic hit.",
          },
          {
            primaryHeading: "Automated Launcher",
            subHeading:
              "Automated Launcher for improved logistics, connectivity, and protection. With integrated health monitoring, it ensures rapid deployment.",
          },
        ],
      },
      rightContainerContent: {
        image: {
          src: "/tytan-technologies-intereceptor-illustration.png",
          alt: "Tytan Technologies Interceptor Illustration",
        },
      },
    },
  };

// --- Careers Section ---
export const CareersSectionContent: ICareersSectionContentType = {
  ContentWrapper: {},
  headingGroup: {
    primaryHeading: "Join Us",
    subHeading: "Make a lasting impact in the new era of defense!",
    marginBottom: 90,
  },
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
  ContentWrapper: {},
  headingGroup: {
    primaryHeading: "Newsroom",
    marginBottom: 77,
  },
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
  ContentWrapper: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  flexContainer: {
    leftFlexPercentage: 48,
    gap: 0,
    justifyContent: "start",
    leftContainerContent: {
      logo: {
        src: "/tytan_logo_white.svg",
        alt: "Tytan Technologies Logo",
        width: 205.14,
        height: 52,
        href: "#navbar",
        targetBlank: false,
      },
    },
    rightContainerContent: {
      // individual nav items
      footerItems: [
        { text: "IMPRINT", href: "/api/imprint" },
        {
          text: "PRIVACY & LEGAL",
          href: "/api/privacy-policy",
        },
        { text: "CONTACT", href: "mailto:info@tytan-technologies.com" },
      ],
      footerSocialIcons: [
        {
          src: "/youtube-icon.svg",
          alt: "Youtube Icon",
          href: "#navbar",
          height: 29.54,
        },
        {
          src: "/linkedIn_icon.svg",
          alt: "LinkedIn Icon",
          href: "https://www.linkedin.com/company/tytan-technologies/",
        },
      ],
    },
  },
};
