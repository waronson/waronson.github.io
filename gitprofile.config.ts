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
      display: true, // Display GitHub projects?
      header: 'GitHub Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['waronson/React-Native-Dating-App', 'waronson/rust-fps-server'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
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
          link: 'https://www.youtube.com/watch?v=ZQzfjSVKAXI',
        },
        {
          title: 'Metabrite',
          description:
            'One of the first "metaverse" apps, Metabrite was a social space that supported hundreds of users in a single room.',
          imageUrl:
            'https://storage.googleapis.com/nk-web-assets/movie_001.00_00_00_00.Still001.jpg',
			link: 'https://www.youtube.com/watch?v=DgOfbsHYdhc'
        },
        {
          title: 'Vital Recall',
          description:
            'A short interactive learning experience, showing off the inside of the human circulatory system.',
          imageUrl:
            'https://storage.googleapis.com/nk-web-assets/vlcsnap-2026-04-16-10h45m02s090.png',
			link: 'https://youtu.be/C2Drye0MqQI'
        },
		{
			title: 'Vital Recall CSL Platform',
			description: 'An augmented reality platform for clinical trial education, designed to inform patients in an engaging, easy to use app.',
			imageUrl: 'https://storage.googleapis.com/nk-web-assets/vlcsnap-2026-04-23-11h58m49s676.png',
			link: 'https://www.youtube.com/shorts/Qg6j53r6Jf8'
		}
      ],
    },
  },
  seo: {
    title: 'William Aronson: Developer Portfolio',
    description: '',
    imageURL: '',
  },
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
	'Kotlin',
	'Swift',
    'JavaScript',
    'TypeScript',
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
	'Azure',
    'ASP.NET',
	'GLSL/HLSL'
  ],
  experiences: [
    {
      company: 'FabuLingua, Inc',
      position: 'Lead Software Engineer',
      from: 'December 2019',
      to: 'Present',
      companyLink: 'https://www.fabulingua.com/',
    },
    {
      company: 'ARDVRK Technologies',
      position: 'Senior Software Engineer',
      from: 'July 2017',
      to: 'December 2019',
    },
    {
      company: 'OnlyInVR',
      position: 'Software Engineer',
      from: 'October 2016',
      to: 'July 2017',
    },
    {
      company: 'Nou Systems',
      position: 'Contract Engineer',
      from: 'May 2018',
      to: 'August 2018',
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
