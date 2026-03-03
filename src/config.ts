export const siteConfig = {
  /** First name */
  name: "John",
  /** Last name / surname */
  surname: "Doe",
  /** Nickname or alias */
  nickname: "JD",
  /** URL to profile photo */
  photoUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=John",
  /** Short bio / tagline for the About page */
  bio: "A passionate developer who loves building things for the web.",
  /** Instagram profile URL (shown in footer) */
  instagramUrl: "https://instagram.com/johndoe",
  /** GitHub profile URL (shown in footer) */
  githubUrl: "https://github.com/johndoe",
  /** Email address for the contact section */
  email: "hello@example.com",
  /** daisyUI accent color (CSS color value) */
  accentColor: "#570df8",
  /** daisyUI theme name — e.g. "light", "dark", "cupcake", etc. */
  theme: "light",
  /** Experience entries shown on the Experience page */
  experience: [
    {
      title: "Software Engineer",
      company: "Acme Corp",
      period: "2023 – Present",
      description:
        "Building scalable web applications with modern technologies.",
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2021 – 2023",
      description:
        "Developed front-end features and collaborated with cross-functional teams.",
    },
  ],
  /** Skills shown on the About page */
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Astro",
    "Tailwind CSS",
    "Node.js",
  ],
};
