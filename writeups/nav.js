/* ============================================================
   Writeups navigation tree — the single source of truth.
   To publish a writeup later: find its leaf and add a `content`
   field (HTML string) and remove `locked: true`. Adding new
   entries = editing this file, no markup changes needed.
   ============================================================ */
const WU_NAV = {
  spaces: [
    {
      id: 'htb',
      label: 'HackTheBox',
      icon: 'fa-cube',
      blurb: 'Machines, Sherlocks, Fortresses, Pro Labs & the live competitive Season.',
      tree: [
        {
          id: 'season', label: 'Season', icon: 'fa-tower-broadcast', badge: 'S11 · LIVE',
          children: [
            { id: 'season-11', label: 'Season 11 (current)', locked: true },
            { id: 'season-archive', label: 'Past Seasons', locked: true }
          ]
        },
        {
          id: 'machines', label: 'Machines', icon: 'fa-desktop',
          children: [
            { id: 'easy', label: 'Easy', locked: true },
            { id: 'medium', label: 'Medium', locked: true },
            { id: 'hard', label: 'Hard', locked: true },
            { id: 'insane', label: 'Insane', locked: true }
          ]
        },
        { id: 'challenges', label: 'Challenges', icon: 'fa-puzzle-piece', locked: true },
        { id: 'sherlocks', label: 'Sherlocks', icon: 'fa-magnifying-glass', locked: true },
        { id: 'fortresses', label: 'Fortresses', icon: 'fa-chess-rook', locked: true },
        { id: 'prolabs', label: 'Pro Labs', icon: 'fa-building-shield', locked: true }
      ]
    },
    {
      id: 'ctf',
      label: 'CTF',
      icon: 'fa-flag',
      blurb: 'Competitive capture-the-flag events — official HTB CTFs and beyond.',
      tree: [
        { id: 'cyber-apocalypse', label: 'Cyber Apocalypse', icon: 'fa-meteor', locked: true },
        { id: 'business-ctf',     label: 'Business CTF',     icon: 'fa-briefcase', locked: true },
        { id: 'university-ctf',   label: 'University CTF',   icon: 'fa-graduation-cap', locked: true },
        { id: 'hack-the-boo',     label: 'Hack The Boo',     icon: 'fa-ghost', locked: true },
        { id: 'hhv-ctf',          label: 'HHV CTF (DEFCON)', icon: 'fa-microchip', locked: true }
      ]
    },
    {
      id: 'bugbounty',
      label: 'Bug Bounty',
      icon: 'fa-bug',
      blurb: 'Responsible-disclosure findings and the methodology behind them.',
      tree: [
        { id: 'programs',    label: 'by Program',   icon: 'fa-sitemap', locked: true },
        { id: 'vuln-type',   label: 'by Vuln Type', icon: 'fa-bug-slash', locked: true },
        { id: 'methodology', label: 'Methodology',  icon: 'fa-diagram-project', locked: true }
      ]
    }
  ]
};
