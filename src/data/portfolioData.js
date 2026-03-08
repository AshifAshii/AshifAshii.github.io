export const experience = [
  {
    id: 1,
    title: 'NVIDIA Software Intern',
    period: 'Jan 2021 - Jul 2021',
    description:
      "A 6 month internship in an amazing organization at the start of my corporate career. Worked on establishing the MLOps (Machine Learning Operations) infrastructure to Conversational AI of NVIDIA - RIVA. Contributed towards the development of complete data pipeline prior to training the ASR models using MagLev - NVIDIA's production-grade AI Platform.",
    icon: 'laptop',
    color: '#17a2b8',
  },
  {
    id: 2,
    title: 'Web Developer',
    period: 'Dec 2018 - Feb 2019',
    description:
      'Yuktaha - 2k19, a national level technical symposium held at PSG Institute of Technology and Applied Research, Coimbatore. A web-based event management system was developed and deployed which simplifies registration and payment processes for various events and workshops. The payment gateway was incorporated with an application layer encryption.',
    icon: 'code',
    color: '#ffc107',
  },
]

export const skills = [
  { name: 'Android', level: 60, icon: 'android', url: 'https://developer.android.com/training/basics/firstapp/creating-project' },
  { name: 'Java', level: 75, icon: 'java', url: 'https://docs.oracle.com/javase/tutorial/' },
  { name: 'JavaScript', level: 70, icon: 'javascript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'HTML5', level: 80, icon: 'html', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'Node.js', level: 70, icon: 'node', url: 'https://nodejs.org/en/' },
  { name: 'React', level: 40, icon: 'react', url: 'https://reactjs.org/docs/getting-started.html' },
  { name: 'Docker', level: 45, icon: 'docker', url: 'https://docs.docker.com/get-started/' },
  { name: 'Git', level: 50, icon: 'git', url: 'https://git-scm.com/doc' },
]

export const education = [
  {
    date: 'Aug 2017 - July 2021',
    title: 'B.E. Computer Science and Engineering',
    description: 'PSG Institute of Technology and Applied Research, Neelambur, Coimbatore',
  },
  {
    date: 'June 2015 - May 2017',
    title: 'Higher Secondary Education - Mathematics and Biology',
    description: 'Ponjesly Public Matriculation Higher Secondary School, Nagercoil, Kanniyakumari',
  },
  {
    date: 'June 2013 - Apr 2015',
    title: 'High School',
    description: 'Ponjesly Public Matriculation Higher Secondary School, Nagercoil, Kanniyakumari',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Chit Chat',
    image: '/img/portfolio/p-1.ico',
    category: 'web-app',
    description:
      'A simple chat application which uses websockets as the protocol for full duplex communication. Multiple private groups or rooms can be created where users can join and communicate with other members of the room. Node.js is used as the backend with socket.io library to ensure bidirectionality.',
    link: 'https://chitchat.infidark.com/',
    linkText: 'ChitChat',
    date: 'Apr 2020 – May 2020',
    service: 'Web Application',
  },
  {
    id: 2,
    title: 'Weather',
    image: '/img/portfolio/p-2.jpg',
    category: 'web-app',
    description:
      'A simple and quick weather checking tool get weather details of any place which is given as input. Based on the obtained results from the backend API, the details are displayed accordingly.',
    link: 'https://weather.infidark.com/',
    linkText: 'Weather',
    date: 'Apr 2020 – May 2020',
    service: 'Web Application',
  },
  {
    id: 3,
    title: 'Time Capsule',
    image: '/img/portfolio/p-6.jpg',
    category: 'web-app',
    description:
      "A personal diary application that is used to add, update, and viewing registered users' memories along with their information which will be private only to the user. The data are stored in the remote MySQL database. Desktop, web, and mobile applications were developed in which the data is synchronized across all.",
    link: 'https://timecapsule.infidark.com/',
    linkText: 'Time Capsule',
    date: 'Jul 2019 – May 2020',
    service: 'Web Application',
  },
  {
    id: 4,
    title: 'Mess Forum',
    image: '/img/portfolio/p-7.jpg',
    category: 'web-app',
    description:
      "A portal application developed for maintaining students' data, hostel food count, token registrations, and notifications. It includes both Student and Admin modules with a cloud database using MySQL.",
    link: 'https://messforum.infidark.com/',
    linkText: 'Mess Forum',
    date: 'Aug 2019 – Nov 2019',
    service: 'Web Application',
  },
  {
    id: 5,
    title: 'Yuktaha',
    image: '/img/portfolio/p-8.jpg',
    category: 'web-app',
    description:
      'Event management system deployed for managing student registrations for "Yuktaha 2k19", a National Level Technical Symposium. Payment gateway incorporated with application layer encryption.',
    link: 'https://yuktaha.infidark.com/',
    linkText: 'Yuktaha',
    date: 'Dec 2018 – Feb 2019',
    service: 'Web Application',
  },
  {
    id: 6,
    title: 'Time Capsule',
    image: '/img/portfolio/p-3.jpg',
    category: 'mobile-apps',
    description:
      'Personal diary Android application with MySQL backend, Java Servlets/JSP web app, and Android mobile app with PHP API. Push notifications via Firebase FCM.',
    link: 'https://timcap-app.herokuapp.com/apk/TimeCapsule.apk',
    linkText: 'APK Download',
    date: 'Jul 2019 – May 2020',
    service: 'Android Application',
  },
  {
    id: 7,
    title: 'Mess Forum',
    image: '/img/portfolio/p-7.jpg',
    category: 'mobile-apps',
    description:
      'Portal for students\' data, hostel food count, token registrations. Student and Admin modules with Node.js API, Retrofit, Firebase FCM.',
    links: [
      { text: 'Admin APK', url: 'https://messforum-api.herokuapp.com/admin' },
      { text: 'Student APK', url: 'https://messforum-api.herokuapp.com/student' },
    ],
    date: 'Aug 2019 – Nov 2019',
    service: 'Android Application',
  },
  {
    id: 8,
    title: 'Chit Chat',
    image: '/img/portfolio/p-9.ico',
    category: 'mobile-apps',
    description:
      'Chat application using websockets. Node.js backend with socket.io for bidirectionality.',
    link: '#',
    linkText: 'Will update soon!',
    date: 'Apr 2020 – May 2020',
    service: 'Android Application',
  },
]

export const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ashifahamed/', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/DarkProjeckz', icon: 'github' },
  { name: 'Twitter', url: 'https://twitter.com/phoenix_ashii', icon: 'twitter' },
]
