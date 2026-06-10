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
//    photo    : filename, array of filenames, or null
//              e.g.  photo: "SAST.png"
//                    photo: ["MAR-2a.png", "MAR-2b.png"]
//                    photo: null
// ================================================================

const PHOTO_BASE = "../assets/img/speaker/";

const TALKS = [
  {
    title:    "Secure Coding (SAST): OWASP Top 10 Deep-Dive",
    desc:     "A hands-on training session focused on strengthening secure development practices through static application security testing (SAST) and an in-depth review of the OWASP Top 10 (2025). The module explored common application security risks, secure coding considerations, and practical approaches for identifying vulnerabilities earlier in the software development lifecycle. Conducted for technical participants from one of Indonesia\'s mining companies, with discussions centered on translating security principles into day-to-day engineering practices.",
    location: "Gran Rubina Business Park",
    date:     "May 2026",
    category: "trainer",
    slides:   "https://canva.link/23ca18lonniwekj",
    photo:    "SAST.png"
  },
  {
    title:    "Deepfake Technology and Its Negative Effects on Information Authenticity and Identity",
    desc:     "A discussion on the rapid advancement of deepfake technology and its growing impact across information ecosystems, highlighting both its innovative potential and the risks associated with misinformation and digital crime. Shared through a public session organized by DeepShield under the Faculty of Social Science and Education, President University, engaging participants from the wider Cikarang community in conversations around digital awareness, critical media literacy, and responsible engagement with emerging technologies.",
    location: "President University",
    date:     "Apr 2026",
    category: "speaker",
    slides:   "https://canva.link/2ek0e0dugsmf7bh",
    photo:    null
  },
  {
    title:    "Modern Offensive Security: How AI MCP Are Changing Cybersecurity",
    desc:     "An exploration of the evolving intersection between artificial intelligence and offensive security, highlighting how AI-powered tooling and Model Context Protocol (MCP) integrations are shaping reconnaissance, analysis, and red team operations. Delivered as part of the Information Security class for Master of Information Technology (MTI) students at Universitas Indonesia, encouraging discussion on both the capabilities and boundaries of these emerging approaches.",
    location: "Universitas Indonesia",
    date:     "Mar 2026",
    category: "speaker",
    slides:   "https://canva.link/ff1rnqgajujfzqv",
    photo:    "MOS-UI.png"
  },
  {
    title:    "The Human Firewall: Securing the Workplace from Phishing Risks",
    desc:     "An overview of phishing risks and the increasingly important role of human awareness as a critical layer of organizational security. Through practical examples and everyday workplace scenarios, the session explored common social engineering techniques, early indicators of phishing attempts, and simple habits that strengthen cyber resilience. Conducted as part of a corporate security awareness initiative at PT \u0405\u039c\u0406, encouraging participants to view cybersecurity as a shared responsibility rather than solely a technical function.",
    location: "PT \u0405\u039c\u0406",
    date:     "Mar 2026",
    category: "awareness",
    slides:   "https://canva.link/xplo8lqbzjadmr6",
    photo:    ["MAR-2a.png", "MAR-2b.png", "MAR-2c.png"]
  },
  {
    title:    "Artificial Intelligence in Education: Innovating for Future Learning",
    desc:     "A practical training session introducing the fundamentals of artificial intelligence and its growing role in modern education, from core concepts to hands-on exploration of emerging AI tools. Designed for teachers and education staff at SMAN 53 Jakarta, the session encouraged participants to build foundational understanding, explore classroom and administrative use cases, and reflect on responsible and effective adoption of AI in educational environments.",
    location: "SMAN 53 Jakarta",
    date:     "Sep 2025",
    category: "trainer",
    slides:   "https://canva.link/vzd3u1mpx2leb08",
    photo:    ["SMA-53a.jpg", "SMA-53b.jpg", "SMA-53c.jpg"]
    },
  {
    title:    "Be Cyber-Ready from School",
    desc:     "A foundational cybersecurity session designed to introduce students to essential digital habits and the importance of staying secure in an increasingly connected world. Conducted as part of the Masa Pengenalan Lingkungan Sekolah (MPLS) program at SMAN 53 Jakarta, the session encouraged students to build early awareness of online risks, understand responsible digital behavior, and develop readiness for future academic and technological environments through practical everyday scenarios.",
    location: "SMAN 53 Jakarta",
    date:     "Jul 2025",
    category: "awareness",
    slides:   "https://canva.link/j83rn9t8yluvhqo",
    photo:    ["SMA-53d.jpg", "SMA-53e.jpg", "SMA-53f.jpg"]
  },
  {
    title:    "Understanding Nomophobia in the Digital Generation",
    desc:     "An introduction to nomophobia and the growing relationship between smartphone dependency and digital well-being among younger generations. Conducted within the Program Penguatan Profil Pelajar Pancasila (P5) at SMPN 8 Jakarta, the session engaged students and teachers through discussions and reflective assessment using the Nomophobia Questionnaire (NMP-Q) to encourage healthier technology habits and greater awareness of digital dependency.",
    location: "SMPN 8 Jakarta",
    date:     "Oct 2024",
    category: "awareness",
    slides:   "https://marcoalfans.github.io/nomophobia/",
    photo:    ["SMP-8a.png", "SMP-8b.png", "SMP-8c.png"]
  }
  // Add more talks above this line ↑
  // ,{
  //   title:    "Talk Title",
  //   desc:     "Description.",
  //   location: "Venue",
  //   date:     "Jan 2026",
  //   category: "speaker",   // speaker | trainer | judge | mentor | awareness
  //   slides:   "https://...",
  //   photo:    "filename.jpg"   // or ["a.jpg","b.jpg"] or null
  // }
];
