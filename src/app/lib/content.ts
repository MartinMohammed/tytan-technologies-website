export const NavbarContent = {
  logo: {
    src: "/tytan_logo_white.svg",
    alt: "Tytan Technologies Logo",
    width: 183,
    height: 46,
  },
  // individual nav items
  navItems: [
    { text: "Contact", href: "#" },
    { text: "Join Us", href: "#" },
  ],
  burgerMenu: {
    src: "/burger_menu_icon.svg",
    alt: "burger menu icon",
    width: 36,
    height: 24,
  },
};

export const HeroSectionContent = {
  video: {
    src: "/opterra_interception_bounding_box.gif",
    alt: "Opterra interception bounding box gif.",
    width: 1438.22,
    height: 810,
  },
  primaryHeading: "Autonomy to protect.",
  subHeading: "TYTAN Technologies",
};

export const MissionSection1Content = {
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

export const MissionSection2Content = {
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

export const FooterContent = {
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
        { text: "CONTACT", href: "#" },
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
