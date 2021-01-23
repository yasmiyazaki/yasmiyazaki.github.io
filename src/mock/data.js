import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yasu',
  lang: '',
  description: '',
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
    'For the past seven years, I have been transforming mundane tasks into meaningful activities.',
  paragraphTwo:
    'I started my career in business process reengineering and enterprise system implementation. Now, I am a software engineer building online travel services where international tourists can explore the beauty of Japan',
  paragraphThree:
    'What is common is I eliminate inefficiency and help users focus what matters the most.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  // {
  //   id: nanoid(),
  //   img: 'kaimono.png',
  //   title: 'Online Tax Free Shopping',
  //   info: 'UX Research, UX Design',
  //   info2: '',
  //   url: 'kaimono',
  //   repo: '', // if no repo, the button will not show up
  // },
  {
    id: nanoid(),
    img: 'foodget.png',
    title: 'Online Grocery Shopping',
    info: 'Prototyping, Web Development, UI/UX Design',
    info2: '',
    url: 'foodget',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'boogiewoogie.png',
    title: 'Motion Tracking Dance Practice App',
    info: 'Ideation, Web Development',
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
