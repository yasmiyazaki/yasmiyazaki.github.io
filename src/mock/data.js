import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yasu', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Yasu',
  subtitle: 'I deliver meaningful customer experience.',
  cta: 'More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'For the past seven years, I have been transforming routine tasks into meaningful activities.',
  paragraphTwo:
    'I started my career in business process reengineering and enterprise system implementation. Now, I am a software engineer building online travel services that international tourists can explore the beauty of Japan',
  paragraphThree:
    'What is common is I eliminate inefficiency and help users focus what matters the most.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'kaimono.png',
    title: 'Online Tex Free Shopping',
    info: 'UX Research, UX Design',
    info2: '',
    url: 'kaimono',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'foodget.png',
    title: 'Grocery Shopping',
    info: 'UX Research, UX Design, Prototyping, Web Development',
    info2: '',
    url: 'foodget',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'boogiewoogie.png',
    title: 'Motion Tracking Dance Practice App',
    info: 'Web Development',
    info2: '',
    url: '',
    repo: 'https://github.com/crazy-bananas/boogie-woogie', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yasuhito-miyazaki/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yasmiyazaki/',
    },
  ],
};
