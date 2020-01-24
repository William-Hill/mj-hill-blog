module.exports = {
  pathPrefix: '/gatsby-starter-developer-blog',
  siteUrl: 'https://mjhilldigital.com',
  siteTitle: 'M.J. Hill Digital',
  siteDescription: 'Official website of M.J. Hill Digital, LLC',
  author: 'M.J. Hill',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: 'https://luigi-colella.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    about: 'about',
    tag: 'tag',
    archive: 'archive',
    speaking: 'speaking',
    projects: 'projects',
    media: 'media',
  },
  social: {
    github: 'https://github.com/William-Hill',
    linkedin: 'https://www.linkedin.com/in/whill3',
    instagram: 'https://www.instagram.com/emjay_hill/',
    twitter: 'http://twitter.com/emjay_hill',
  },
  tags: {
    angular: {
      description: 'Angular is an open source web application platform.',
    },
    electron: {
      description:
        'Electron is a framework for building cross-platform desktop applications with web technology.',
    },
    javascript: {
      description:
        'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
    },
    nodejs: {
      name: 'Node.js',
      description:
        'Node.js is a tool for executing JavaScript in a variety of environments.',
    },
    rxjs: {
      name: 'RxJS',
      description:
        'RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.',
    },
    typescript: {
      description:
        'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    },
    react: {
      description:
        'React is an open source JavaScript library used for designing user interfaces.',
    },
    vuejs: {
      name: 'Vue.js',
      description:
        'Vue.js is a JavaScript framework for building interactive web applications.',
    },
  },
}
