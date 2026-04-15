// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'waronson', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'FabuLingua',
          description:
            'FabuLingua is a language learning mobile app for kids, with a large catalog of original virtual stories and games.',
          imageUrl:
            'https://storage.googleapis.com/nk-web-assets/project-fabulingua.jpeg',
          link: 'https://fabulingua.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'William Aronson: Developer Portfolio', description: '', imageURL: '' },
  social: {
    email: 'william.aronson@gmail.com',
    phone: '+1 603-275-7094',
    linkedin: 'william-aronson-7b3441a9',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/uc?export=download&id=1d_XfOqVoTZ0tnY0waUBCjhYuzKbJOY4b', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'C#',
    'Java',
    'Rust',
    'JavaScript',
    'Unity',
    'Unreal Engine 5',
    'React',
    'Node.js',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'AWS',
    'ASP.NET',
  ],
  experiences: [
    {
      company: 'FabuLingua, Inc',
      position: 'Lead Software Engineer',
      from: 'December 2018',
      to: 'Present',
      companyLink: 'https://www.fabulingua.com/',
    },
    {
      company: 'CanopyVR',
      position: 'Co-Founder',
      from: 'February 2022',
      to: 'November 2022',
    },
    {
      company: 'ARDVRK Technologies',
      position: 'Software Developer',
      from: 'July 2017',
      to: 'January 2020',
    },
    {
      company: 'Nou Systems',
      position: 'Software Developer',
      from: 'May 2018',
      to: 'August 2018',
    },
    {
      company: 'OnlyInVR',
      position: 'Software Developer',
      from: 'October 2016',
      to: 'July 2018',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  enablePWA: false,
};

export default CONFIG;
