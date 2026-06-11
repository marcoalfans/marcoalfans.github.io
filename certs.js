// ================================================================
//  CERTIFICATIONS DATA — edit only this file to add / remove / update certs
//
//  Fields per cert:
//    name   : string       — certification name
//    issuer : string       — issuing organization
//    img    : string       — image path (under assets/img/)
//    alt    : string       — image alt text
//    bg     : string       — CSS class: bg-htb | bg-ine | bg-cwl | bg-cisco | bg-bnsp | bg-certiport
//    date   : string       — issue date e.g. "Feb 2026"
//    expiry : string|null  — expiry e.g. "Nov 2028", or null for no expiry
//    verify : string       — verification URL
// ================================================================

const CERTS = [
  {
    name:   "Certified Penetration Testing Specialist",
    issuer: "HackTheBox",
    img:    "assets/img/cert-cpts.jpg",
    alt:    "CPTS Certificate",
    bg:     "bg-htb",
    date:   "Feb 2026",
    expiry: null,
    verify: "https://profile.hackthebox.com/profile/019ca2e5-4787-73db-8722-52022246285c/certificate/HTBCERT-C8A9B4407B"
  },
  {
    name:   "Web Application Penetration Tester eXtreme",
    issuer: "INE Security",
    img:    "assets/img/cert-ewptx.jpeg",
    alt:    "eWPTX Certificate",
    bg:     "bg-ine",
    date:   "Nov 2025",
    expiry: "Nov 2028",
    verify: "https://www.credential.net/9ff19296-5c68-42c6-8379-ef489e6b26de"
  },
  {
    name:   "Mobile Application Penetration Tester",
    issuer: "INE Security",
    img:    "assets/img/cert-emapt.jpeg",
    alt:    "eMAPT Certificate",
    bg:     "bg-ine",
    date:   "Jan 2026",
    expiry: "Jan 2029",
    verify: "https://www.credential.net/f84b19a4-f6ff-4ead-a18d-79c79678598e"
  },
  {
    name:   "Certified Red Team Analyst",
    issuer: "Cyberwarfare Labs",
    img:    "assets/img/cert-crta.jpg",
    alt:    "CRTA Certificate",
    bg:     "bg-cwl",
    date:   "May 2025",
    expiry: null,
    verify: "https://www.credential.net/ef13142f-ff92-45be-9009-adc0174c2651"
  },
  {
    name:   "Teknisi Jaringan Komputer Muda",
    issuer: "BNSP",
    img:    "assets/img/badge-bnsp.jpeg",
    alt:    "Teknisi Jaringan Komputer Muda",
    bg:     "bg-bnsp",
    date:   "May 2026",
    expiry: "May 2029",
    verify: "https://bnsp.go.id/check-certification"
  },
  {
    name:   "Asesor Kompetensi",
    issuer: "BNSP",
    img:    "assets/img/badge-bnsp.jpeg",
    alt:    "Asesor Kompetensi",
    bg:     "bg-bnsp",
    date:   "Apr 2026",
    expiry: "Apr 2029",
    verify: "https://bnsp.go.id/check-certification"
  },
  {
    name:   "Cisco Certified Support Technician Cybersecurity",
    issuer: "Cisco",
    img:    "assets/img/badge-ccst-cybersecurity.png",
    alt:    "Cisco Certified Support Technician Cybersecurity",
    bg:     "bg-cisco",
    date:   "Nov 2023",
    expiry: null,
    verify: "https://www.credly.com/badges/ac9b9a5b-a499-4b0f-947c-981a5f7b0ad9"
  },
  {
    name:   "Cisco Certified Support Technician Networking",
    issuer: "Cisco",
    img:    "assets/img/badge-ccst-networking.png",
    alt:    "Cisco Certified Support Technician Networking",
    bg:     "bg-cisco",
    date:   "Aug 2024",
    expiry: null,
    verify: "https://www.credly.com/badges/7e0173df-c188-44a5-9b66-092b29cbd3ce"
  },
  {
    name:   "Network Security Support Technician",
    issuer: "Certiport / Pearson VUE",
    img:    "assets/img/badge-certiport-nsst.png",
    alt:    "NSST Badge",
    bg:     "bg-certiport",
    date:   "Aug 2024",
    expiry: null,
    verify: "https://www.credly.com/earner/earned/badge/4a58bf9d-a192-4a84-9f3f-18feb0a9c575"
  }
  // Add more certs above this line ↑
  // ,{
  //   name:   "Cert Name",
  //   issuer: "Issuer",
  //   img:    "assets/img/badge-example.png",
  //   alt:    "Alt text",
  //   bg:     "bg-htb",
  //   date:   "Jan 2026",
  //   expiry: null,         // or "Jan 2029"
  //   verify: "https://..."
  // }
];
