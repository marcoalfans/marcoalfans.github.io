// ================================================================
//  SPEAKER DATA — edit only this file to add / remove / update talks
//
//  Fields per talk:
//    title    : string  — talk title
//    desc     : string  — short description
//    location : string  — venue / institution
//    date     : string  — e.g. "Mar 2026"
//    category : string  — speaker | trainer | judge | mentor | awareness
//    slides   : string  — URL to slides, or null to hide button
//    photo    : string  — path to image e.g. "../assets/img/speaker/speaker-1.jpg", or null
// ================================================================

const TALKS = [
  {
    title:    "Modern Offensive Security: How AI MCP Are Changing Cybersecurity",
    desc:     "An exploration of the evolving intersection between artificial intelligence and offensive security, highlighting how AI-powered tooling and Model Context Protocol (MCP) integrations are shaping reconnaissance, analysis, and red team operations. Delivered as part of the Information Security class for Master of Information Technology (MTI) students at Universitas Indonesia, encouraging discussion on both the capabilities and boundaries of these emerging approaches.",
    location: "Universitas Indonesia",
    date:     "Mar 2026",
    category: "speaker",
    slides:   "https://canva.link/ff1rnqgajujfzqv",
    photo:    null
  },
  {
    title:    "The Human Firewall: Securing the Workplace from Phishing Risks",
    desc:     "An overview of phishing risks and the increasingly important role of human awareness as a critical layer of organizational security. Through practical examples and everyday workplace scenarios, the session explored common social engineering techniques, early indicators of phishing attempts, and simple habits that strengthen cyber resilience. Conducted as part of a corporate security awareness initiative at PT SMI, encouraging participants to view cybersecurity as a shared responsibility rather than solely a technical function.",
    location: "PT SMI",
    date:     "Mar 2026",
    category: "awareness",
    slides:   "https://canva.link/xplo8lqbzjadmr6",
    photo:    null
  },
  {
    title:    "Understanding Nomophobia in the Digital Generation",
    desc:     "An introduction to nomophobia and the growing relationship between smartphone dependency and digital well-being among younger generations. Conducted within the Program Penguatan Profil Pelajar Pancasila (P5) at SMPN 8 Jakarta, the session engaged students and teachers through discussions and reflective assessment using the Nomophobia Questionnaire (NMP-Q) to encourage healthier technology habits and greater awareness of digital dependency.",
    location: "SMPN 8 Jakarta",
    date:     "Oct 2024",
    category: "awareness",
    slides:   "https://marcoalfans.github.io/nomophobia/",
    photo:    null
  },
  {
    title:    "Deepfake Technology and Its Negative Effects on Information Authenticity and Identity",
    desc:     "A discussion on the rapid advancement of deepfake technology and its growing impact across information ecosystems, highlighting both its innovative potential and the risks associated with misinformation and digital crime. Shared through a public session organized by DeepShield under the Faculty of Social Science and Education, President University, engaging participants from the wider Cikarang community in conversations around digital awareness, critical media literacy, and responsible engagement with emerging technologies.",
    location: "President University",
    date:     "Apr 2026",
    category: "speaker",
    slides:   "https://canva.link/2ek0e0dugsmf7bh",
    photo:    null
  }

  // Add more talks above this line ↑
  // Example:
  // ,{
  //   title:    "Zero-Day Hunting in Modern Web Apps",
  //   desc:     "A walkthrough of advanced web vulnerability research techniques.",
  //   location: "ITB — Bandung",
  //   date:     "10 Jan 2026",
  //   category: "trainer",   // speaker | trainer | judge | mentor | awareness
  //   slides:   "https://docs.google.com/presentation/d/...",
  //   photo:    "../assets/img/speaker/speaker-2.jpg"
  // }
];
