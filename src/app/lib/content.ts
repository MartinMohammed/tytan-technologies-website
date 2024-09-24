export const NavBarContent = {
  logo: {
    src: "/tytan_logo_white.svg",
    alt: "Tytan Technologies Logo",
    height: 46,
    width: 183,
  },
  // individual nav items
  navItems: [
    { text: "Contact", href: "#" },
    { text: "Join Us", href: "#" },
  ],
  burgerMenu: {
    src: "/burger_menu.svg",
    alt: "burger menu icon",
    width: 36,
    height: 24,
  },
};

export const HeroSectionContent = {
  video: {
    src: "/opterra_interception_bounding_box.png",
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
    leftFlexPercentage: 38,
    gap: 35,
    alignItems: "center",
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
