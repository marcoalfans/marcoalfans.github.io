// ================================================================
//  HALL OF FAME DATA — edit only this file to add / remove / update entries
//
//  HOF_LOGO_BASE : base path for all logo files
//
//  vdp[] fields:
//    name   : string       — display name on chip
//    logo   : string       — logo filename (under HOF_LOGO_BASE)
//    alt    : string       — (optional) img alt text, defaults to name
//    url    : string       — (optional) link URL; omit for non-linked chip
//    hidden : true         — (optional) hide chip (kept in DOM, not shown)
//
//  bugbounty[] fields: same as vdp[]
//    leave bugbounty: [] to show "Pending coordinated disclosure approval."
//
//  "& more" chip is added automatically when any vdp item has hidden: true
// ================================================================

const HOF_LOGO_BASE = "assets/img/hof/";

const HOF = {
  vdp: [
    { name: "CERT-EU",        logo: "cert-eu.ico",    url: "https://cert.europa.eu/hall-of-fame#:~:text=Marco%20Alfan,Indonesia" },
    { name: "Komdigi",        logo: "komdigi.ico" },
    { name: "Kemenag",        logo: "kemenag.png" },
    { name: "Kemenaker",      logo: "kemenaker.png" },
    { name: "Kemenkeu",       logo: "kemenkeu.png" },
    { name: "BSSN",           logo: "bssn.png" },
    { name: "KPK",            logo: "kpk.png" },
    { name: "BAZNAS",         logo: "baznas.ico" },
    { name: "Pelindo",        logo: "pelindo.png",     hidden: true },
    { name: "BMKG",           logo: "bmkg.png" },
    { name: "ID FOOD",        logo: "idfood.png" },
    { name: "POLRI",          logo: "polri.png" },
    { name: "FamilyMart",     logo: "familymart.png",  hidden: true },
    { name: "DKI Jakarta",    logo: "dki-jakarta.png" },
    { name: "Tangsel",        logo: "tangsel.png",     alt: "Tangerang Selatan" },
    { name: "DIY",            logo: "diy.ico",         alt: "D.I. Yogyakarta", hidden: true },
    { name: "Kota Pontianak", logo: "pontianak.png" }
    // Add more VDP entries above this line ↑
  ],

  bugbounty: []
  // When bugbounty is empty, "Pending coordinated disclosure approval." is shown.
  // To add entries, use the same format as vdp:
  // bugbounty: [
  //   { name: "Example", logo: "example.png", url: "https://..." }
  // ]
};
