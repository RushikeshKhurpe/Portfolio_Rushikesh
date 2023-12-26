// gitprofile.config.js

const config = {
  github: {
    username: 'RushikeshKhurpe', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 5, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'rushikesh-khurpe017',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'rushikeshkhurpe01@gmail.com',
    leetcode: 'Rushikesh_Khurpe',
    gfg:'rushikeshkhurpe',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1C8REBRZYyZyxdi8aIJ6lgneZkxFVCQni/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'JavaScript',
    'Node.js',
    'Java',
    'MySQL',
    'MongoDb',
    'Git',
    'VS Code',
    'HTML',
    'CSS',
    'Bootstrap',
    'Linux',
  ],
  experiences: [
    {
      company: 'Chegg Inc',
      position: 'Subject Matter Expert',
      from: 'October 2023',
      to: 'present',
      companyLink: 'https://www.chegg.com/',
      description: 'how are you',
    },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Indian Institute of Information Technology Lucknow',
      degree: 'BTech - Information Technology',
      from: 'Dec 2020',
      to: 'June 2024',
    },
    {
      institution: 'Vasantrao Naik Mahavidyalaya, Aurangabad',
      degree: '11th-12th - PCM',
      from: 'July 2018',
      to: 'June 2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Google Cloud',
      description:
        'Successfully completed an intensive 30-day Google Cloud program, gaining practical expertise in cloud infrastructure, data analysis, and machine learning solutions.',
      imageUrl: 'https://media.licdn.com/dms/image/D4D12AQFBmtRiDXrsQQ/article-cover_image-shrink_720_1280/0/1685531235341?e=1703721600&v=beta&t=BBIa1T808_lJGzt3JCnAbZb3gToD3GPSkyWAIJF1gzg',
      link: 'https://drive.google.com/file/d/1Bo450202XSruqLYHdbozH78hjFHSBYPr/view',
    },
    {
      title: 'Hack-o-Fiesta',
      description:
        'Achieved Rank 4 in the hackathon organized by Axios. A blockchain project developed during hackathon, designed to facilitate cryptocurrency trading.',
      imageUrl: 'https://pbs.twimg.com/profile_images/1620676116724981760/5Nf0bmbG_400x400.jpg',
      link: 'https://hackofiesta.devfolio.co/overview',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'RushikeshKhurpe', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by <a 
  class="text-primary" href="https://www.linkedin.com/in/rushikesh-khurpe017/"
  target="_blank"
  rel="noreferrer"
  >Rushikesh Khurpe</a> with <a 
    class="text-primary" href="https://github.com/RushikeshKhurpe/"
    target="_blank"
    rel="noreferrer"
  >@RushikeshKhurpe/gitprofile</a>`,
};

export default config;
