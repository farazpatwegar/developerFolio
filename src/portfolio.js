/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Faraz Patwegar",
  title: "Hi all, I'm Faraz",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Laravel / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/farazpatwegar",
  linkedin: "https://www.linkedin.com/in/faraz-patwegar/",
  gmail: "farazpatwegar@gmail.com",
  gitlab: "https://github.com/farazpatwegar",
  facebook: "https://www.linkedin.com/in/faraz-patwegar/",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/Faraz-Patwegar",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
  {
    skillName: "Laravel",
    fontAwesomeClassname: "fab fa-laravel"
  },
  {
    skillName: "Spring Boot",
    fontAwesomeClassname: "fas fa-leaf" // (no official icon, using leaf as alternative)
  },
  {
    skillName: "React Native",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Mulesoft",
    fontAwesomeClassname: "fas fa-project-diagram" // (custom choice, no official icon)
  }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "C-DAC Pune",
      logo: require("./assets/images/harvardLogo.png"), // replace with your logo image
      subHeader: "Post Graduate Diploma in Advanced Computing",
      duration: "2023 - 2024",
      desc: "Completed advanced computing program focusing on Full Stack Development, Java Spring Boot, Laravel, React Native, and AI integrations.",
      descBullets: [
        "Developed full-stack projects including AgTech and ChatVault",
        "Gained hands-on experience with Mulesoft, PostgreSQL, and AI-driven applications"
      ]
    },
    {
      schoolName: "Walchand College of Engineering, Sangli",
      logo: require("./assets/images/stanfordLogo.png"), // replace with your logo image
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "2017 - 2021",
      desc: "Graduated with strong foundation in software development, database management, and programming.",
      descBullets: [
        "Worked on projects involving web and mobile applications",
        "Learned core CS concepts including algorithms, OS, and database systems"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Software Engineer",
    //   company: "Facebook",
    //   companylogo: require("./assets/images/facebookLogo.png"),
    //   date: "June 2018 – Present",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    {
  role: "Software Engineer",
  company: "Xcallibber Infotech",
  companylogo: require("./assets/images/quoraLogo.png"), // replace with your logo
  date: "November 2024 – Present",
  desc: "Working as a Full Stack Developer on projects involving Laravel, React Native, and Mulesoft integrations. Contributed to building scalable applications like AgTech (an agriculture platform) and ChatVault (a secure messaging data system) with PostgreSQL backend and real-time features."
},
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// Contact Section
// Contact Section with all your VCF contacts
 const contactSection = {
  display: true,
  title: "My Contacts",
  subtitle: "Secure contact information",
  contacts: [
    {
      name: "Aadil",
      number: "+917083998117",
      email: "",
      address: ""
    },
    {
      name: "Aahad",
      number: "8010138393",
      email: "",
      address: ""
    },
    {
      name: "Aalim",
      number: "917-253-7049",
      email: "",
      address: ""
    },
    {
      name: "Aasif Soudagar",
      number: "+91 80803 33711",
      email: "",
      address: ""
    },
    {
      name: "Aasma Didi",
      number: "+917745004290",
      email: "",
      address: ""
    },
    {
      name: "Abba",
      number: "+918484948784",
      email: "",
      address: ""
    },
    {
      name: "Abhay Brother",
      number: "937-335-0025",
      email: "",
      address: ""
    },
    {
      name: "Abhay FY",
      number: "+919370247949",
      email: "",
      address: ""
    },
    {
      name: "Abhi",
      number: "+919960408706",
      email: "",
      address: ""
    },
    {
      name: "Abhijeet IACSD",
      number: "+917798777278",
      email: "",
      address: ""
    },
    {
      name: "Abhinandan Patil",
      number: "077760 56747",
      email: "",
      address: ""
    },
    {
      name: "Abhinit Mmcoe",
      number: "+919307863005",
      email: "",
      address: ""
    },
    {
      name: "Abhishek Degree",
      number: "+917773988376",
      email: "",
      address: ""
    },
    {
      name: "Abhishek Sutar",
      number: "+919359823992",
      email: "",
      address: ""
    },
    {
      name: "Abishek Mirajkar",
      number: "092840 06417",
      email: "",
      address: ""
    },
    {
      name: "Abrar Inamdar",
      number: "+919860313015",
      email: "",
      address: ""
    },
    {
      name: "Abrar Jawahar",
      number: "088578 24889",
      email: "",
      address: ""
    },
    {
      name: "Abrar Mm",
      number: "+91 76208 55907",
      email: "",
      address: ""
    },
    {
      name: "Abrar Pathan",
      number: "099225 08070",
      email: "",
      address: ""
    },
    {
      name: "Adhar",
      number: "830243180628",
      email: "",
      address: ""
    },
    {
      name: "Aditay Majlekar",
      number: "070205 05035",
      email: "",
      address: ""
    },
    {
      name: "Adity Koli",
      number: "+918669705107",
      email: "koliaaditya8669@gmail.com",
      address: ""
    },
    {
      name: "Aditya Iacsd",
      number: "+919561889057",
      email: "",
      address: ""
    },
    {
      name: "Aditya Jarhad",
      number: "+918806841314",
      email: "",
      address: ""
    },
    {
      name: "Aditya Junior",
      number: "+91 97303 39826",
      email: "",
      address: ""
    },
    {
      name: "Aditya Mmcoe",
      number: "+91 83907 61688",
      email: "",
      address: ""
    },
    {
      name: "Aditya N Room",
      number: "8237900226",
      email: "",
      address: ""
    },
    {
      name: "Aditya Rangnekar (Mmcoe)",
      number: "+91 78880 22225",
      email: "",
      address: ""
    },
    {
      name: "Aditya Roomate",
      number: "9370015280",
      email: "",
      address: ""
    },
    {
      name: "Aditya Waghmare",
      number: "093091 15771",
      email: "",
      address: ""
    },
    {
      name: "Adnam Momin",
      number: "079724 07908",
      email: "",
      address: ""
    },
    {
      name: "Adnan Mumbai",
      number: "+917666278270",
      email: "",
      address: ""
    },
    {
      name: "Adnan Mushrif AM",
      number: "909-634-0625",
      email: "",
      address: ""
    },
    {
      name: "Adv Samir Shaikh",
      number: "879-666-6667",
      email: "",
      address: ""
    },
    {
      name: "Afan Mewekari",
      number: "989-016-7944",
      email: "",
      address: ""
    },
    {
      name: "Afrin Mam",
      number: "+91 97662 99411",
      email: "",
      address: ""
    },
    {
      name: "Aftab Jawahar",
      number: "+91 70384 13401",
      email: "",
      address: ""
    },
    {
      name: "Aftab Nadaf",
      number: "+917757875327",
      email: "nadafaftab97@gmail.com",
      address: "Maharashtra, India"
    },
    {
      name: "Aftab Nagarji",
      number: "+919975587629",
      email: "",
      address: ""
    },
    {
      name: "Aftab Shaikh",
      number: "+919970287642",
      email: "",
      address: ""
    },
    {
      name: "Aftab Tamboli",
      number: "+91 92847 95939",
      email: "",
      address: ""
    },
    {
      name: "Ahamad Shaikh",
      number: "+919370783747",
      email: "",
      address: "Maharashtra, India"
    },
    {
      name: "Ahemd Soudagar",
      number: "084213 57152",
      email: "",
      address: ""
    },
    {
      name: "Ahmad Bagwan",
      number: "+919767576467",
      email: "",
      address: ""
    },
    {
      name: "Aishwarya Basude",
      number: "+917350968219",
      email: "",
      address: ""
    },
    {
      name: "Aishwarya Shintre",
      number: "099224 94214",
      email: "",
      address: ""
    },
    {
      name: "Ajaj Abhinav",
      number: "+919380567210",
      email: "",
      address: ""
    },
    {
      name: "Ajaj Bagwan",
      number: "096656 33039",
      email: "",
      address: ""
    },
    {
      name: "Ajaj Sayyad",
      number: "+91 80075 14351",
      email: "",
      address: ""
    },
    {
      name: "Ajim Bagwan",
      number: "+917719060714",
      email: "",
      address: ""
    },
    {
      name: "Ajim Bairagdar",
      number: "084598 98163",
      email: "",
      address: ""
    },
    {
      name: "Ajinkya Huse",
      number: "091128 43116",
      email: "",
      address: ""
    },
    {
      name: "Ajit Patil",
      number: "094211 75141",
      email: "",
      address: ""
    },
    {
      name: "Ajit Pawar",
      number: "+919881138435",
      email: "",
      address: ""
    },
    {
      name: "Ajit Pawar Mmcoe",
      number: "088881 39116",
      email: "",
      address: ""
    },
    {
      name: "Akash Dy Patil",
      number: "+91 89568 88479",
      email: "",
      address: ""
    },
    {
      name: "Akash Waghire Mmcoe",
      number: "9028926549",
      email: "",
      address: ""
    },
    {
      name: "Akash Wce",
      number: "+91 77091 40184",
      email: "",
      address: ""
    },
    {
      name: "Akash Xcaliber",
      number: "+917448114218",
      email: "",
      address: ""
    },
    {
      name: "Akbar Shaikh Mmcoe",
      number: "+91 77690 98885",
      email: "",
      address: ""
    },
    {
      name: "Akid Mujawar",
      number: "+919552778866",
      email: "",
      address: ""
    },
    {
      name: "Akram Khaan",
      number: "070542 51768",
      email: "",
      address: ""
    },
    {
      name: "Akshay Athnuree",
      number: "+919834277646",
      email: "akshayatanure11@gmail.com",
      address: "Maharashtra, India"
    },
    {
      name: "Akshay Bhosle Sir",
      number: "098505 59494",
      email: "",
      address: ""
    },
    {
      name: "Akshay Chaudhari",
      number: "+919561398357",
      email: "",
      address: ""
    },
    {
      name: "Akshay Dhotre",
      number: "+91 96739 02990",
      email: "",
      address: ""
    },
    {
      name: "Alfayad",
      number: "+918855002133",
      email: "",
      address: ""
    },
    {
      name: "Ali Sangli",
      number: "9160081280",
      email: "",
      address: ""
    },
    {
      name: "Ali Shaikh",
      number: "087665 28272",
      email: "",
      address: ""
    },
    {
      name: "Aliya",
      number: "+918329369319",
      email: "",
      address: ""
    },
    {
      name: "Aliya Nandikar",
      number: "+918168239196",
      email: "",
      address: ""
    },
    {
      name: "Allu Kazi",
      number: "+919028497642",
      email: "",
      address: ""
    },
    {
      name: "Aman",
      number: "839-061-2786",
      email: "",
      address: ""
    },
    {
      name: "Aman Lonand",
      number: "070288 63484",
      email: "",
      address: ""
    },
    {
      name: "Aman Miraj",
      number: "9766679224",
      email: "",
      address: ""
    },
    {
      name: "Aman Mulla",
      number: "+919025044601",
      email: "",
      address: ""
    },
    {
      name: "Aman Shaikh",
      number: "885-592-5449",
      email: "",
      address: ""
    },
    {
      name: "amar shinde",
      number: "+919503032516",
      email: "",
      address: ""
    },
    {
      name: "Amey Nate",
      number: "+919284894389",
      email: "",
      address: ""
    },
    {
      name: "Amey Waghmode",
      number: "+918390641973",
      email: "ameyraw@gmail.com",
      address: ""
    },
    {
      name: "Ameya IACSD",
      number: "+917709671197",
      email: "",
      address: ""
    },
    {
      name: "Ameya Mmcoe",
      number: "+91 77200 47265",
      email: "",
      address: ""
    },
    {
      name: "Amin Sayyed W",
      number: "083296 33566",
      email: "",
      address: ""
    },
    {
      name: "Amol Waghmare",
      number: "+918856934753",
      email: "",
      address: ""
    },
    {
      name: "Amol Waghmare Abhi",
      number: "+91 93257 55861",
      email: "",
      address: ""
    },
    {
      name: "Amruta Junior",
      number: "+91 93077 56671",
      email: "",
      address: ""
    },
    {
      name: "Amruta Tichar",
      number: "702-037-6006",
      email: "",
      address: ""
    },
    {
      name: "Amruta ticr",
      number: "+919545565547",
      email: "",
      address: ""
    },
    {
      name: "Anchal",
      number: "+919834239895",
      email: "",
      address: ""
    },
    {
      name: "Aniket Degree",
      number: "+918605288821",
      email: "",
      address: ""
    },
    {
      name: "Aniket DSY",
      number: "084828 05223",
      email: "",
      address: ""
    },
    {
      name: "Aniket Satpute",
      number: "704-066-6369",
      email: "",
      address: ""
    },
    {
      name: "Aniket Sawant",
      number: "077092 06073",
      email: "",
      address: ""
    },
    {
      name: "Aniket Thorat",
      number: "+919527487101",
      email: "",
      address: ""
    },
    {
      name: "Anil Gawali (Kaka)",
      number: "9881365246",
      email: "",
      address: ""
    },
    {
      name: "Anil Raut",
      number: "098813 67898",
      email: "",
      address: ""
    },
    {
      name: "Anis Attar",
      number: "+917558745764",
      email: "",
      address: ""
    },
    {
      name: "Anis Godad",
      number: "+917420896620",
      email: "",
      address: ""
    },
    {
      name: "Anis Sitarmaker",
      number: "+917558399053",
      email: "",
      address: ""
    },
    {
      name: "Anisa Didi Devrani",
      number: "+919035265056",
      email: "",
      address: ""
    },
    {
      name: "Ankit Sharma",
      number: "+919325866717",
      email: "",
      address: ""
    },
    {
      name: "Ankush Waghmode",
      number: "+919764571683",
      email: "",
      address: ""
    },
    {
      name: "Ansar Chacha",
      number: "9665292366",
      email: "",
      address: ""
    },
    {
      name: "Anuja (Mmcoe)",
      number: "+91 93709 41320",
      email: "",
      address: ""
    },
    {
      name: "Anushka Chavhan",
      number: "+919011682943",
      email: "anushhachavan339@gmail.com",
      address: ""
    },
    {
      name: "Anushka Patil",
      number: "+917219615162",
      email: "patilanushka152@gmail.com",
      address: ""
    },
    {
      name: "Anwar",
      number: "762-062-7266",
      email: "",
      address: ""
    },
    {
      name: "Apurva Saundale",
      number: "+919309112474",
      email: "",
      address: ""
    },
    {
      name: "Apurva soundale",
      number: "+919307350806",
      email: "",
      address: ""
    },
    {
      name: "Arbaj",
      number: "+917385609113",
      email: "",
      address: ""
    },
    {
      name: "Arbaj 2",
      number: "+919822088961",
      email: "",
      address: ""
    },
    {
      name: "Arbaj Bagwan",
      number: "777-591-2952",
      email: "",
      address: ""
    },
    {
      name: "Arbaj Nalband",
      number: "+919145555197",
      email: "",
      address: ""
    },
    {
      name: "Arbaz Inamdar",
      number: "+919049293576",
      email: "",
      address: ""
    },
    {
      name: "Arju Khala",
      number: "+918605077179",
      email: "",
      address: ""
    },
    {
      name: "Arjun Iacsd",
      number: "+91 84518 82508",
      email: "",
      address: ""
    },
    {
      name: "arjun kaka",
      number: "097638 28008",
      email: "",
      address: ""
    },
    {
      name: "Arjun Patil",
      number: "+917447520961",
      email: "",
      address: ""
    },
    {
      name: "Arkan Jamadar",
      number: "+91 73851 44087",
      email: "",
      address: ""
    },
    {
      name: "Arsalan Khan",
      number: "073556 21443",
      email: "",
      address: ""
    },
    {
      name: "Arshad Mushrif",
      number: "+917218699489",
      email: "",
      address: ""
    },
    {
      name: "Arti IACSD",
      number: "+917620451830",
      email: "",
      address: ""
    },
    {
      name: "Arush",
      number: "+918625823755",
      email: "",
      address: ""
    },
    {
      name: "Arvind Sy Ee",
      number: "830-812-2694",
      email: "",
      address: ""
    },
    {
      name: "Arya Metkari",
      number: "+919834388699",
      email: "",
      address: ""
    },
    {
      name: "Aryan Abhange",
      number: "070581 17609",
      email: "",
      address: ""
    },
    {
      name: "Asad Momin",
      number: "+919767092439",
      email: "",
      address: ""
    },
    {
      name: "Asad Patel",
      number: "+918080732083",
      email: "",
      address: ""
    },
    {
      name: "Asaram Bhosale",
      number: "+918149523083",
      email: "",
      address: ""
    },
    {
      name: "Ashish jadhav",
      number: "+918806750599",
      email: "",
      address: ""
    },
    {
      name: "Ashish Shinde",
      number: "+918668679699",
      email: "",
      address: ""
    },
    {
      name: "Ashok Bhaii Bepari",
      number: "9860612647",
      email: "",
      address: ""
    },
    {
      name: "Ashraf Pathan",
      number: "996-056-7477",
      email: "",
      address: ""
    },
    {
      name: "Asif Bhai",
      number: "+917262051290",
      email: "",
      address: ""
    },
    {
      name: "Asif Pathan",
      number: "+91 82087 29313",
      email: "",
      address: ""
    },
    {
      name: "Asim Maner",
      number: "084465 07008",
      email: "",
      address: ""
    },
    {
      name: "Atharv Patil",
      number: "095033 63655",
      email: "",
      address: ""
    },
    {
      name: "Atika Tamboli",
      number: "+91 73788 23306",
      email: "",
      address: ""
    },
    {
      name: "Atish Kamble",
      number: "+917028790571",
      email: "",
      address: ""
    },
    {
      name: "Atul Kalukhe Sir C++",
      number: "083789 38665",
      email: "",
      address: ""
    },
    {
      name: "Atul Patil",
      number: "+919359648778",
      email: "",
      address: ""
    },
    {
      name: "Avdoot",
      number: "+917757915317",
      email: "",
      address: ""
    },
    {
      name: "Avdoot Pisal Mmcoe",
      number: "+919607212230",
      email: "",
      address: ""
    },
    {
      name: "Avdul Kadir",
      number: "+919503075151",
      email: "",
      address: ""
    },
    {
      name: "Avdut Nalawde",
      number: "070580 57001",
      email: "",
      address: ""
    },
    {
      name: "Avdut Sutar",
      number: "+919623480533",
      email: "",
      address: ""
    },
    {
      name: "Avi Mb",
      number: "087931 82274",
      email: "",
      address: ""
    },
    {
      name: "Ayan",
      number: "+919096685380",
      email: "",
      address: ""
    },
    {
      name: "Ayesha",
      number: "086249 41939",
      email: "",
      address: ""
    },
    {
      name: "Ayyaj Bhola",
      number: "826-284-7582",
      email: "",
      address: ""
    },
    {
      name: "Ayyan",
      number: "+917773931634",
      email: "",
      address: ""
    },
    {
      name: "Ayyaz Bhola",
      number: "+919309084722",
      email: "",
      address: ""
    },
    {
      name: "Azahar",
      number: "+919763278980",
      email: "",
      address: ""
    },
    {
      name: "Azeem bargir",
      number: "+917040790510",
      email: "",
      address: ""
    },
    {
      name: "Azim",
      number: "899-924-3721",
      email: "",
      address: ""
    },
    {
      name: "Bakshi Mam MMCOE",
      number: "+91 73875 31528",
      email: "samarpitabakshi@mmcoe.edu.in",
      address: ""
    },
    {
      name: "Bhabhi",
      number: "+919403344320",
      email: "",
      address: ""
    },
    {
      name: "Bhagyashree IACSD",
      number: "+918554021105",
      email: "",
      address: ""
    },
    {
      name: "Bhagyashree Mam",
      number: "+919168391707",
      email: "",
      address: ""
    },
    {
      name: "Bharat Fulzalke",
      number: "+919960927520",
      email: "",
      address: ""
    },
    {
      name: "Bharat Fy",
      number: "+919021980314",
      email: "",
      address: ""
    },
    {
      name: "Bhimashankar Landge",
      number: "+917620742711",
      email: "",
      address: ""
    },
    {
      name: "Bhupesh",
      number: "+919022462130",
      email: "",
      address: ""
    },
    {
      name: "bhushan khairnar",
      number: "+91 87887 00014",
      email: "",
      address: ""
    },
    {
      name: "Bike Patil Honda Livo",
      number: "+919373186696",
      email: "",
      address: ""
    },
    {
      name: "Boss",
      number: "084088 83086",
      email: "",
      address: ""
    },
    {
      name: "Bunty It Support Miraj",
      number: "+917588167840",
      email: "",
      address: ""
    },
    {
      name: "Bushara Didi",
      number: "086258 73617",
      email: "",
      address: ""
    },
    {
      name: "Bushra Didi",
      number: "+917972293437",
      email: "",
      address: ""
    },
    {
      name: "Business",
      number: "763-392-5773",
      email: "",
      address: ""
    },
    {
      name: "Chaitanya Jadhav Dypatil",
      number: "8208585562",
      email: "",
      address: ""
    },
    {
      name: "Chaitanya Patil Mmcoe",
      number: "+91 97306 26930",
      email: "",
      address: ""
    },
    {
      name: "Chetan",
      number: "7448091271",
      email: "",
      address: ""
    },
    {
      name: "Chikle",
      number: "9765022999",
      email: "",
      address: ""
    },
    {
      name: "Dadi Lonand",
      number: "09922288165",
      email: "",
      address: ""
    },
    {
      name: "Darpan",
      number: "+91 77985 86250",
      email: "",
      address: ""
    },
    {
      name: "Darshan Borade",
      number: "+919607089340",
      email: "darshanborade67@gmail.com",
      address: ""
    },
    {
      name: "Darshan C",
      number: "+919284553406",
      email: "",
      address: ""
    },
    {
      name: "Deshbushan Sangle",
      number: "+919067230917",
      email: "dssangale16@gmail.com",
      address: ""
    },
    {
      name: "Dhairyashil",
      number: "7588220349",
      email: "",
      address: ""
    },
    {
      name: "Dhananjay",
      number: "+919598097240",
      email: "",
      address: ""
    },
    {
      name: "Dhanshri patil",
      number: "+919284990719",
      email: "patildhanu7179@gmail.com",
      address: ""
    },
    {
      name: "Diamand Chacha",
      number: "+918055146861",
      email: "",
      address: ""
    },
    {
      name: "Diamond Chacha",
      number: "9175587261",
      email: "",
      address: ""
    },
    {
      name: "Dinesh (Mmcoe)",
      number: "+91 88069 89838",
      email: "",
      address: ""
    },
    {
      name: "Dipak Yatam",
      number: "072197 53547",
      email: "",
      address: ""
    },
    {
      name: "Divya Unkule",
      number: "079725 24564",
      email: "",
      address: ""
    },
    {
      name: "Doctor",
      number: "9226392692",
      email: "",
      address: ""
    },
    {
      name: "Dr. apa",
      number: "+918329188399",
      email: "",
      address: ""
    },
    {
      name: "Edu Loan Nadaf",
      number: "095039 87070",
      email: "",
      address: ""
    },
    {
      name: "Er Juber Sou",
      number: "088558 76018",
      email: "",
      address: ""
    },
    {
      name: "Eshwar Xcaliber",
      number: "+919604087719",
      email: "",
      address: ""
    },
    {
      name: "Faeem",
      number: "935-989-5472",
      email: "",
      address: ""
    },
    {
      name: "Faiyyaj godad",
      number: "+918600211337",
      email: "",
      address: ""
    },
    {
      name: "Faizan momin",
      number: "093593 24339",
      email: "",
      address: ""
    },
    {
      name: "Faizan Mumbai",
      number: "098235 68633",
      email: "",
      address: ""
    },
    {
      name: "Faran Mamu",
      number: "084848 54258",
      email: "",
      address: ""
    },
    {
      name: "Fardin Kalangde",
      number: "+917385207768",
      email: "",
      address: ""
    },
    {
      name: "Farhan B",
      number: "080105 52738",
      email: "",
      address: ""
    },
    {
      name: "Farjana Fupfu",
      number: "+919588658854",
      email: "",
      address: ""
    },
    {
      name: "Faruk Mamu Ghar",
      number: "862-496-1705",
      email: "",
      address: ""
    },
    {
      name: "Fb Maari",
      number: "070219 68446",
      email: "",
      address: ""
    },
    {
      name: "Firoz Bhai Kolhapur",
      number: "962-312-0178",
      email: "",
      address: ""
    },
    {
      name: "Firozkazi Sir (Wce)",
      number: "099706 02313",
      email: "",
      address: ""
    },
    {
      name: "Fuppa",
      number: "+919890403629",
      email: "",
      address: ""
    },
    {
      name: "Gagan Bajoria",
      number: "+917722047139",
      email: "",
      address: ""
    },
    {
      name: "Gajanan Warpade",
      number: "+91 87884 71199",
      email: "",
      address: ""
    },
    {
      name: "Ganesh Ghare",
      number: "+91 87880 82322",
      email: "",
      address: ""
    },
    {
      name: "Ganesh Swami Mmcoe",
      number: "+91 80801 16914",
      email: "",
      address: ""
    },
    {
      name: "Gaurav Rajput IACSD",
      number: "088301 62880",
      email: "",
      address: ""
    },
    {
      name: "Gaurav Shende (05)",
      number: "+917066554886",
      email: "",
      address: ""
    },
    {
      name: "Gaurave Gavli",
      number: "+919021735658",
      email: "",
      address: ""
    },
    {
      name: "Gautam",
      number: "+917972673749",
      email: "",
      address: ""
    },
    {
      name: "Gavali Miraj",
      number: "074979 22796",
      email: "",
      address: ""
    },
    {
      name: "Good Luck Tyres Akrudi",
      number: "7083249189",
      email: "",
      address: ""
    },
    {
      name: "Gore",
      number: "+919834852829",
      email: "",
      address: ""
    },
    {
      name: "Gujale Rahul",
      number: "096370 92067",
      email: "",
      address: ""
    },
    {
      name: "Gunjan Ghadage",
      number: "+919921554593",
      email: "",
      address: ""
    },
    {
      name: "Hafiz Ishaq",
      number: "097300 96759",
      email: "",
      address: ""
    },
    {
      name: "Hameda Chachi",
      number: "+919623579053",
      email: "",
      address: ""
    },
    {
      name: "Haripriya Kulkarni Mam",
      number: "+91 97636 17256",
      email: "",
      address: ""
    },
    {
      name: "Harish",
      number: "+919702794386",
      email: "",
      address: ""
    },
    {
      name: "Harish Dyptil",
      number: "0788 794 3533",
      email: "",
      address: ""
    },
    {
      name: "Harsha GS",
      number: "+919766895528",
      email: "",
      address: ""
    },
    {
      name: "Harshada Junior",
      number: "+919404006379",
      email: "",
      address: ""
    },
    {
      name: "Harshda Iacsd",
      number: "+918080401228",
      email: "",
      address: ""
    },
    {
      name: "Hasnain Khatik",
      number: "+919096959141",
      email: "",
      address: ""
    },
    {
      name: "Hasnian Hk",
      number: "937-350-4376",
      email: "",
      address: ""
    },
    {
      name: "Hefshine",
      number: "9112644549",
      email: "",
      address: ""
    },
    {
      name: "Helmet",
      number: "9762137669",
      email: "",
      address: ""
    },
    {
      name: "Hinjwadi Bike",
      number: "9822549600",
      email: "",
      address: ""
    },
    {
      name: "Hornet Panchwad",
      number: "8652103002",
      email: "",
      address: ""
    },
    {
      name: "Hrishi Shinde",
      number: "+918698066073",
      email: "",
      address: ""
    },
    {
      name: "Hrushi",
      number: "+91 91308 42661",
      email: "",
      address: ""
    },
    {
      name: "Hrushi Mmcoe",
      number: "+91 95187 26106",
      email: "",
      address: ""
    },
    {
      name: "Hsbc Bank",
      number: "+916351453471",
      email: "",
      address: ""
    },
    {
      name: "Hublak",
      number: "+91 70579 12450",
      email: "",
      address: ""
    },
    {
      name: "Hujef Godad",
      number: "+919096812805",
      email: "",
      address: ""
    },
    {
      name: "IACSD",
      number: "+919699050370",
      email: "",
      address: ""
    },
    {
      name: "Ibrahim",
      number: "885-691-1514",
      email: "",
      address: ""
    },
    {
      name: "Ifra",
      number: "+918482942017",
      email: "",
      address: ""
    },
    {
      name: "Ifra Momin",
      number: "+919373372681",
      email: "",
      address: ""
    },
    {
      name: "Ijej Dhalait",
      number: "088881 10638",
      email: "",
      address: ""
    },
    {
      name: "Ikhalas M 2",
      number: "+918692857287",
      email: "",
      address: ""
    },
    {
      name: "Ikhlass Mumbai",
      number: "+919326050295",
      email: "",
      address: ""
    },
    {
      name: "Iklas Fathar",
      number: "089765 63786",
      email: "",
      address: ""
    },
    {
      name: "Imam (Camera)",
      number: "099759 50686",
      email: "",
      address: ""
    },
    {
      name: "imdad Walchand",
      number: "+918856827574",
      email: "",
      address: ""
    },
    {
      name: "Imran Chacha",
      number: "770-984-8468",
      email: "",
      address: ""
    },
    {
      name: "Imran Khotwadi",
      number: "081052 02174",
      email: "",
      address: ""
    },
    {
      name: "imtiyaz Kotwal",
      number: "+91 84598 51973",
      email: "",
      address: ""
    },
    {
      name: "Imtyaj saoudagar",
      number: "097673 15461",
      email: "",
      address: ""
    },
    {
      name: "Inamnun Model",
      number: "+919665331677",
      email: "",
      address: ""
    },
    {
      name: "Inaya",
      number: "+918483077376",
      email: "",
      address: ""
    },
    {
      name: "Irfan Ichalkaranji",
      number: "+91 99700 79297",
      email: "",
      address: ""
    },
    {
      name: "Irfan Mobile",
      number: "+919923284793",
      email: "",
      address: ""
    },
    {
      name: "Irshad Bhaiyaa",
      number: "966-553-3138",
      email: "",
      address: ""
    },
    {
      name: "Ismail Tamboli",
      number: "089991 58829",
      email: "",
      address: ""
    },
    {
      name: "Israr",
      number: "+917559138178",
      email: "",
      address: ""
    },
    {
      name: "Jafar Marchant",
      number: "+918007860777",
      email: "",
      address: ""
    },
    {
      name: "Jahir",
      number: "+917057879109",
      email: "",
      address: ""
    },
    {
      name: "Jahir (Sultan)",
      number: "+917397932872",
      email: "",
      address: ""
    },
    {
      name: "Jaid Jmadar",
      number: "986-054-3878",
      email: "",
      address: ""
    },
    {
      name: "Jaid Momin",
      number: "+91 93253 52226",
      email: "",
      address: ""
    },
    {
      name: "Jaid WCE",
      number: "097665 71561",
      email: "",
      address: ""
    },
    {
      name: "Jarvis",
      number: "+919834401497",
      email: "farazpatwegar@gmail.com",
      address: ""
    },
    {
      name: "Jatni Abhinav",
      number: "+91 84217 75341",
      email: "",
      address: ""
    },
    {
      name: "Javed Tamboli",
      number: "+919922770505",
      email: "",
      address: ""
    },
    {
      name: "Jay Kadam",
      number: "+919881757529",
      email: "",
      address: ""
    },
    {
      name: "Jay Mmcoe",
      number: "+91 80803 19401",
      email: "",
      address: ""
    },
    {
      name: "jay rajmane wce",
      number: "+918657055121",
      email: "",
      address: ""
    },
    {
      name: "Jay Surayvanshi",
      number: "+918830893392",
      email: "",
      address: ""
    },
    {
      name: "jayant patil",
      number: "+917385161089",
      email: "",
      address: ""
    },
    {
      name: "Jayesh Chaudhari",
      number: "+91 80976 12510",
      email: "",
      address: ""
    },
    {
      name: "Jayesh Thakur Wce",
      number: "+917058640259",
      email: "",
      address: ""
    },
    {
      name: "Jhakir Chacha",
      number: "070209 75215",
      email: "",
      address: ""
    },
    {
      name: "Jhakir Saudsar Sar",
      number: "+917776959777",
      email: "",
      address: ""
    },
    {
      name: "Jishan Kazi",
      number: "+917796590987",
      email: "",
      address: ""
    },
    {
      name: "Jishan Tamboli",
      number: "+918600080743",
      email: "",
      address: ""
    },
    {
      name: "Jitendra Rout Posh",
      number: "+917767021433",
      email: "",
      address: ""
    },
    {
      name: "Jk",
      number: "098535 42002",
      email: "",
      address: ""
    },
    {
      name: "Jobs",
      number: "+918830617332",
      email: "",
      address: ""
    },
    {
      name: "Juber",
      number: "+917030608780",
      email: "",
      address: ""
    },
    {
      name: "Juber Khatik",
      number: "909-695-9141",
      email: "",
      address: ""
    },
    {
      name: "Juber Soudagar",
      number: "8793841920",
      email: "",
      address: ""
    },
    {
      name: "Jugnu",
      number: "9130528215",
      email: "",
      address: ""
    },
    {
      name: "Junned Mutwalli",
      number: "+919309595367",
      email: "",
      address: ""
    },
    {
      name: "JY mane Sir",
      number: "+919422615468",
      email: "",
      address: ""
    },
    {
      name: "Kaif Jawahar",
      number: "+918421776070",
      email: "",
      address: ""
    },
    {
      name: "Kaif Momin",
      number: "+91 80805 63530",
      email: "",
      address: ""
    },
    {
      name: "Kaif Nadaf",
      number: "+919421106443",
      email: "",
      address: ""
    },
    {
      name: "Kais B",
      number: "+919373562570",
      email: "",
      address: ""
    },
    {
      name: "Kais Bhilwade",
      number: "960-453-9262",
      email: "",
      address: ""
    },
    {
      name: "Kallol Mamu",
      number: "+919686007286",
      email: "",
      address: ""
    },
    {
      name: "Kalyani Nagar Pg",
      number: "9970467803",
      email: "",
      address: ""
    },
    {
      name: "Kanhaiya kuche",
      number: "+919270017329",
      email: "",
      address: ""
    },
    {
      name: "Karim mamu",
      number: "+919923424948",
      email: "",
      address: ""
    },
    {
      name: "Karmveer Pgmi",
      number: "099753 76647",
      email: "",
      address: ""
    },
    {
      name: "Karshin Sinha",
      number: "+91 80760 45455",
      email: "",
      address: ""
    },
    {
      name: "Kashmellow ✨️",
      number: "+919421123929",
      email: "",
      address: ""
    },
    {
      name: "Kayyum CA",
      number: "+91 91563 31525",
      email: "",
      address: ""
    },
    {
      name: "Kayyum Chachu",
      number: "+917972333900",
      email: "",
      address: ""
    },
    {
      name: "Kayyum Jiju",
      number: "915-633-1525",
      email: "",
      address: ""
    },
    {
      name: "Kedar Bankar",
      number: "+918600820628",
      email: "",
      address: ""
    },
    {
      name: "Kedar Patil Civil",
      number: "+917709224334",
      email: "",
      address: ""
    },
    {
      name: "Keshav Kubde Mmcoe",
      number: "+91 90753 07404",
      email: "",
      address: ""
    },
    {
      name: "KeshavPkumar Sir",
      number: "+919860605481",
      email: "",
      address: ""
    },
    {
      name: "Kesre",
      number: "976-647-9601",
      email: "",
      address: ""
    },
    {
      name: "Ketan Mumbai",
      number: "+919324132835",
      email: "",
      address: ""
    },
    {
      name: "Ketan Sawakare",
      number: "+918291180846",
      email: "",
      address: ""
    },
    {
      name: "Ketya",
      number: "+917775919377",
      email: "",
      address: ""
    },
    {
      name: "Khalu",
      number: "9611541616",
      email: "",
      address: ""
    },
    {
      name: "Kiran GPM",
      number: "+91 80806 32593",
      email: "",
      address: ""
    },
    {
      name: "Kirtan Joshi",
      number: "+919960014135",
      email: "joshikirtan225@gmail.com",
      address: ""
    },
    {
      name: "Kirti",
      number: "+917558537782",
      email: "",
      address: ""
    },
    {
      name: "Kirti Mam",
      number: "+91 75173 01227",
      email: "",
      address: ""
    },
    {
      name: "Krishana Mane",
      number: "+918766471616",
      email: "",
      address: ""
    },
    {
      name: "Krishna Iacsd",
      number: "+919405807540",
      email: "",
      address: ""
    },
    {
      name: "Krishna Mane",
      number: "099235 00975",
      email: "",
      address: ""
    },
    {
      name: "Krushnkant Wilingdon",
      number: "+916303407427",
      email: "",
      address: ""
    },
    {
      name: "Kushal Desai",
      number: "+918866333828",
      email: "",
      address: ""
    },
    {
      name: "Latif Kazi",
      number: "+919028228134",
      email: "",
      address: ""
    },
    {
      name: "Lucky",
      number: "+919370375259",
      email: "",
      address: ""
    },
    {
      name: "Madam",
      number: "702-097-3260",
      email: "",
      address: ""
    },
    {
      name: "Madhura Mam",
      number: "+919823205088",
      email: "",
      address: ""
    },
    {
      name: "Magdum Tichar",
      number: "+919890081273",
      email: "",
      address: ""
    },
    {
      name: "Mahek Shaikh",
      number: "+917741983803",
      email: "",
      address: ""
    },
    {
      name: "Mahelaka",
      number: "+919527320293",
      email: "",
      address: ""
    },
    {
      name: "Mahesh",
      number: "090213 02129",
      email: "",
      address: ""
    },
    {
      name: "Mahesh Da TY",
      number: "086053 88323",
      email: "",
      address: ""
    },
    {
      name: "Mahommad Bhaii",
      number: "902-876-6090",
      email: "",
      address: ""
    },
    {
      name: "Maithili Hiremath",
      number: "+917798158211",
      email: "",
      address: "Maharashtra, India"
    },
    {
      name: "Maithili more",
      number: "+919284762624",
      email: "maithilimore18@gmail.com",
      address: ""
    },
    {
      name: "Maiz Khanli",
      number: "+918999466989",
      email: "",
      address: ""
    },
    {
      name: "Manasee Shete",
      number: "+917218082977",
      email: "manseeshete@gmail.com",
      address: "Maharashtra, IN"
    },
    {
      name: "Manasi Cdac",
      number: "+91 84214 40385",
      email: "",
      address: ""
    },
    {
      name: "Mandar",
      number: "950-361-1754",
      email: "",
      address: ""
    },
    {
      name: "Mandar 2",
      number: "+919518966593",
      email: "",
      address: ""
    },
    {
      name: "Mandar Bhende",
      number: "077-967-09370",
      email: "",
      address: ""
    },
    {
      name: "Mane Sir Magnewin",
      number: "9168618454",
      email: "",
      address: ""
    },
    {
      name: "Mane Sir Maths",
      number: "+918308223331",
      email: "",
      address: ""
    },
    {
      name: "Mangesh Jadhav",
      number: "+919067016147",
      email: "",
      address: ""
    },
    {
      name: "Manish Parmaj",
      number: "+919130377817",
      email: "",
      address: ""
    },
    {
      name: "Manmeet",
      number: "+91 94218 45351",
      email: "",
      address: ""
    },
    {
      name: "Manoj Cr FY",
      number: "+91 99759 38219",
      email: "",
      address: ""
    },
    {
      name: "Manoj Lohar",
      number: "8600506616",
      email: "",
      address: ""
    },
    {
      name: "Masb",
      number: "+918459009848",
      email: "",
      address: ""
    },
    {
      name: "Masood Soudagar",
      number: "+919156842127",
      email: "",
      address: ""
    },
    {
      name: "Matin Mulla",
      number: "+918007720645",
      email: "",
      address: ""
    },
    {
      name: "Matin Patel",
      number: "+918149231406",
      email: "",
      address: ""
    },
    {
      name: "Maulana Azand Loand 2",
      number: "9766568826",
      email: "",
      address: ""
    },
    {
      name: "Maulana Azand Loand Nadaf",
      number: "098602 22245",
      email: "",
      address: ""
    },
    {
      name: "Mayur Mb",
      number: "+919325699890",
      email: "",
      address: ""
    },
    {
      name: "Mayur More",
      number: "+919175443547",
      email: "",
      address: "Maharashtra, India"
    },
    {
      name: "Mayur Tadvi Mmcoe",
      number: "+918308588781",
      email: "",
      address: ""
    },
    {
      name: "Megha",
      number: "+917219891882",
      email: "",
      address: ""
    },
    {
      name: "Meghna Saptay",
      number: "8249359229",
      email: "",
      address: ""
    },
    {
      name: "Metro",
      number: "+919420101990",
      email: "",
      address: ""
    },
    {
      name: "Mhammad Gaus",
      number: "+919665595786",
      email: "",
      address: ""
    },
    {
      name: "Mhammed",
      number: "+918600805965",
      email: "",
      address: ""
    },
    {
      name: "Mizan Bhilwade",
      number: "+918862095801",
      email: "",
      address: ""
    },
    {
      name: "Mizan Mb",
      number: "+917448261130",
      email: "",
      address: ""
    },
    {
      name: "MM Automobile Akrudi",
      number: "9334941721",
      email: "",
      address: ""
    },
    {
      name: "Mohammed Azlan",
      number: "063887 99856",
      email: "",
      address: ""
    },
    {
      name: "Mohan Bodake Bavdhan",
      number: "+919881910316",
      email: "",
      address: ""
    },
    {
      name: "Mohemmed Kadak",
      number: "072188 45037",
      email: "",
      address: ""
    },
    {
      name: "Mohit Sangar (Mmcoe)",
      number: "+91 95457 93752",
      email: "",
      address: ""
    },
    {
      name: "Mohsin ( Electric)",
      number: "+918087225230",
      email: "",
      address: ""
    },
    {
      name: "Mohsin Bepari",
      number: "079724 28553",
      email: "",
      address: ""
    },
    {
      name: "Mohsin Bhai",
      number: "+918485807581",
      email: "",
      address: ""
    },
    {
      name: "Mohsin Bhai ( Abba)",
      number: "+919766232246",
      email: "",
      address: ""
    },
    {
      name: "Mohsin Chachu",
      number: "+91 86691 23967",
      email: "mohsin.tamboli1155@gmail.com",
      address: "Sangli, India"
    },
    {
      name: "Mohsin Jamadar",
      number: "+91 72489 88554",
      email: "",
      address: ""
    },
    {
      name: "Mohsin Momim",
      number: "+918530881901",
      email: "",
      address: ""
    },
    {
      name: "Mohsin Shah",
      number: "+917057943441",
      email: "",
      address: ""
    },
    {
      name: "Moin Mulla",
      number: "876-680-5551",
      email: "",
      address: ""
    },
    {
      name: "Moine Jmadar",
      number: "986-083-3400",
      email: "",
      address: ""
    },
    {
      name: "momin saifuddin",
      number: "+918793727576",
      email: "",
      address: ""
    },
    {
      name: "More Sir",
      number: "986-015-9944",
      email: "",
      address: ""
    },
    {
      name: "Mubarak",
      number: "+917058758031",
      email: "",
      address: ""
    },
    {
      name: "Mubarak SBGI",
      number: "+919604859724",
      email: "",
      address: ""
    },
    {
      name: "Mubeen Da",
      number: "083087 29444",
      email: "",
      address: ""
    },
    {
      name: "Mubin MSEB",
      number: "+91 92847 19600",
      email: "",
      address: ""
    },
    {
      name: "Mujaffar karnataka",
      number: "076-248-25648",
      email: "",
      address: ""
    },
    {
      name: "Mujaffar Kazi",
      number: "+917722009811",
      email: "",
      address: ""
    },
    {
      name: "mujaffer",
      number: "+918095246581",
      email: "",
      address: ""
    },
    {
      name: "Mujammil Mamu",
      number: "+918177862141",
      email: "",
      address: ""
    },
    {
      name: "Mujffer",
      number: "+917249855680",
      email: "",
      address: ""
    },
    {
      name: "Mujib Kazi MK",
      number: "+917040297338",
      email: "",
      address: ""
    },
    {
      name: "Mujib MK",
      number: "704-026-7338",
      email: "",
      address: ""
    },
    {
      name: "Mujjafar Kazi DKTE",
      number: "+91 76208 03818",
      email: "",
      address: ""
    },
    {
      name: "Muktar Nadaf",
      number: "+919172741971",
      email: "",
      address: ""
    },
    {
      name: "Mukund (Mmcoe)",
      number: "+91 6375 051 716",
      email: "",
      address: ""
    },
    {
      name: "Mumani",
      number: "+917410770480",
      email: "",
      address: ""
    },
    {
      name: "Munaf Chachu",
      number: "+918857098857",
      email: "",
      address: ""
    },
    {
      name: "Mushraf Kazi",
      number: "+917620806606",
      email: "",
      address: ""
    },
    {
      name: "Muskan Bhabhi",
      number: "+919028620316",
      email: "",
      address: ""
    },
    {
      name: "Mustafa Kadak",
      number: "+918308511283",
      email: "",
      address: ""
    },
    {
      name: "Mustakeem",
      number: "+91 70835 28832",
      email: "",
      address: ""
    },
    {
      name: "Mustfa",
      number: "997-596-8412",
      email: "",
      address: ""
    },
    {
      name: "Mustkim Mulla",
      number: "96371 25215",
      email: "",
      address: ""
    },
    {
      name: "Muzamil A",
      number: "+919527526340",
      email: "",
      address: ""
    },
    {
      name: "Muzammil Sayyed",
      number: "+919607908169",
      email: "",
      address: ""
    },
    {
      name: "Muzeffer",
      number: "+917624825648",
      email: "",
      address: ""
    },
    {
      name: "Nachya",
      number: "+918208833987",
      email: "",
      address: ""
    },
    {
      name: "Nadim Bhai WCE",
      number: "+918424886726",
      email: "",
      address: ""
    },
    {
      name: "Nadim Saudagar",
      number: "+917249185219",
      email: "",
      address: ""
    },
    {
      name: "Naeem KPM",
      number: "+919762264999",
      email: "",
      address: ""
    },
    {
      name: "Nafisa",
      number: "9075841502",
      email: "",
      address: ""
    },
    {
      name: "Nafisa Appa",
      number: "+919657203926",
      email: "",
      address: ""
    },
    {
      name: "Nafisa Fuffu",
      number: "965-720-3926",
      email: "",
      address: ""
    },
    {
      name: "Naina Mam",
      number: "+918080901794",
      email: "",
      address: ""
    },
    {
      name: "najmin Sis",
      number: "+919699858658",
      email: "",
      address: ""
    },
    {
      name: "Nand Dave (Mmcoe)",
      number: "+91 70836 56116",
      email: "",
      address: ""
    },
    {
      name: "Narayan Marathe",
      number: "+919822344643",
      email: "",
      address: ""
    },
    {
      name: "Naren Bagade",
      number: "9595956979",
      email: "",
      address: ""
    },
    {
      name: "Narendra Pawar IACSD",
      number: "+919923038890",
      email: "",
      address: ""
    },
    {
      name: "Nasir Chscha",
      number: "9665719862",
      email: "",
      address: ""
    },
    {
      name: "Nihal",
      number: "775-899-2784",
      email: "",
      address: ""
    },
    {
      name: "Nihal Jawahar",
      number: "+91 92849 90495",
      email: "",
      address: ""
    },
    {
      name: "Nihal Nikde",
      number: "+917397880441",
      email: "",
      address: ""
    },
    {
      name: "Nihanshu",
      number: "830-837-2548",
      email: "",
      address: ""
    },
    {
      name: "Nikhil Golgire",
      number: "+917620553215",
      email: "",
      address: ""
    },
    {
      name: "Nikhil IACSD",
      number: "077749 91826",
      email: "",
      address: ""
    },
    {
      name: "Nikhil Patil",
      number: "+918380876500",
      email: "",
      address: ""
    },
    {
      name: "Nikhil PG Gokhlenagar",
      number: "84324 68383",
      email: "",
      address: ""
    },
    {
      name: "Nikhil Roomate",
      number: "070206 21126",
      email: "",
      address: ""
    },
    {
      name: "Nikhil Sonawale Soni",
      number: "+917719978778",
      email: "",
      address: "Maharashtra, India"
    },
    {
      name: "Nikhil Wce",
      number: "9172797823",
      email: "",
      address: ""
    },
    {
      name: "Nikhil Wipro",
      number: "086053 06099",
      email: "",
      address: ""
    },
    {
      name: "Nilesh Marathe",
      number: "+917666112986",
      email: "",
      address: ""
    },
    {
      name: "Nilya Pk",
      number: "907-543-1906",
      email: "",
      address: ""
    },
    {
      name: "Niraj Iacsd",
      number: "7709240861",
      email: "",
      address: ""
    },
    {
      name: "Noor Jamadar",
      number: "+918261879395",
      email: "",
      address: ""
    },
    {
      name: "Om 2",
      number: "+919284466318",
      email: "",
      address: ""
    },
    {
      name: "Om Bende",
      number: "+919518910566",
      email: "",
      address: ""
    },
    {
      name: "Om Roomate",
      number: "+91 82084 76986",
      email: "",
      address: ""
    },
    {
      name: "Omase Sir",
      number: "+919881872990",
      email: "",
      address: ""
    },
    {
      name: "Omkar 350",
      number: "+919604272521",
      email: "",
      address: ""
    },
    {
      name: "Omkar Chavhan (Mmcoe)",
      number: "098904 56681",
      email: "",
      address: ""
    },
    {
      name: "Omkar Desai",
      number: "+918530936401",
      email: "",
      address: ""
    },
    {
      name: "Omkar Hogade",
      number: "+917743882756",
      email: "hogadeomkar@gmail.com",
      address: ""
    },
    {
      name: "Omkar Iacsd",
      number: "+91 95522 95938",
      email: "",
      address: ""
    },
    {
      name: "Omkar Jadhav (mmcoe)",
      number: "+91 98900 55571",
      email: "",
      address: ""
    },
    {
      name: "Omkar Pujari",
      number: "+918847795476",
      email: "",
      address: ""
    },
    {
      name: "Omkar Todkar",
      number: "+919881733132",
      email: "",
      address: ""
    },
    {
      name: "Onkar Dabeli",
      number: "8459597008",
      email: "",
      address: ""
    },
    {
      name: "Onkar Pmkk",
      number: "+918421557991",
      email: "",
      address: ""
    },
    {
      name: "Pajjya",
      number: "+919834718488",
      email: "",
      address: ""
    },
    {
      name: "Pallavi Sankpal",
      number: "+91 98234 78480",
      email: "sankpalpratik8580@gmail.com",
      address: ""
    },
    {
      name: "Pankacha",
      number: "+917715098074",
      email: "",
      address: ""
    },
    {
      name: "Pankaj Magnewin",
      number: "+919145376387",
      email: "",
      address: ""
    },
    {
      name: "Pari Junior",
      number: "+918080694374",
      email: "",
      address: ""
    },
    {
      name: "Parth Abhange",
      number: "+917499738101",
      email: "",
      address: ""
    },
    {
      name: "Parvezkhan Pathan",
      number: "+918766488902",
      email: "",
      address: ""
    },
    {
      name: "Parvin Maner",
      number: "741-077-0480",
      email: "",
      address: ""
    },
    {
      name: "Pathan",
      number: "+919373361392",
      email: "",
      address: ""
    },
    {
      name: "Patil Sir",
      number: "+919028799054",
      email: "",
      address: ""
    },
    {
      name: "Piyush",
      number: "+917773931137",
      email: "",
      address: ""
    },
    {
      name: "Piyush Iacsd",
      number: "+918696972727",
      email: "",
      address: ""
    },
    {
      name: "Praful Ugale",
      number: "+91 74997 18522",
      email: "",
      address: ""
    },
    {
      name: "Prajakta Mmcoe",
      number: "+91 93709 71771",
      email: "",
      address: ""
    },
    {
      name: "Prajka Kumbhar",
      number: "+919637994684",
      email: "",
      address: ""
    },
    {
      name: "Prajwal Wandhare IACSD",
      number: "+917218209234",
      email: "",
      address: ""
    },
    {
      name: "Prakash Nadge",
      number: "+919623264990",
      email: "",
      address: ""
    },
    {
      name: "Pramod Bandgar",
      number: "+919890082973",
      email: "",
      address: ""
    },
    {
      name: "Pramod Kamble Sir",
      number: "+919404353069",
      email: "",
      address: ""
    },
    {
      name: "Pranali Patil",
      number: "+91 86230 48471",
      email: "pranalipatil500@gmail.com",
      address: ""
    },
    {
      name: "Pranav Girme",
      number: "+91 89831 12300",
      email: "",
      address: ""
    },
    {
      name: "Pranav Mule",
      number: "+919405585883",
      email: "",
      address: ""
    },
    {
      name: "Pranav Patil",
      number: "+919405430368",
      email: "",
      address: ""
    },
    {
      name: "Pranav Shete",
      number: "+919518394791",
      email: "",
      address: ""
    },
    {
      name: "Pranav Shete Xcaliber",
      number: "+91 90113 23086",
      email: "",
      address: ""
    },
    {
      name: "Prasann Katkar",
      number: "+91 76205 32212",
      email: "",
      address: ""
    },
    {
      name: "Prashant Modelll",
      number: "+917038481355",
      email: "",
      address: ""
    },
    {
      name: "Prashya",
      number: "+918625079060",
      email: "",
      address: ""
    },
    {
      name: "Prathamesh Kolpe",
      number: "+919325479904",
      email: "",
      address: ""
    },
    {
      name: "Prathamesh Mali",
      number: "+917741873825",
      email: "",
      address: ""
    },
    {
      name: "Prathmesh Ghare",
      number: "+91 96575 29968",
      email: "",
      address: ""
    },
    {
      name: "Prathmesh IACSD",
      number: "+918605457388",
      email: "",
      address: ""
    },
    {
      name: "Prathmesh Koli",
      number: "+917775003379",
      email: "",
      address: ""
    },
    {
      name: "Pratik Bhore Senior",
      number: "8999543425",
      email: "",
      address: ""
    },
    {
      name: "Pratik Misal",
      number: "+917218085048",
      email: "",
      address: ""
    },
    {
      name: "Pratik Sankpal",
      number: "+919284757660",
      email: "",
      address: "Maharashtra, IN"
    },
    {
      name: "Pratik TY",
      number: "+919096104428",
      email: "",
      address: ""
    },
    {
      name: "Pratik Vanmore",
      number: "+918956883672",
      email: "pratikvanmore2001@gmail.com",
      address: ""
    },
    {
      name: "Pratiksha DON",
      number: "+917391849338",
      email: "",
      address: ""
    },
    {
      name: "Pratiksha Durgade",
      number: "+919096441012",
      email: "",
      address: ""
    },
    {
      name: "Pratiksha Shinde",
      number: "+917028101648",
      email: "pratikshashinde554@gmail.com",
      address: "Maharashtra, IN"
    },
    {
      name: "Pravin (Mmcoe)",
      number: "+91 97668 27145",
      email: "",
      address: ""
    },
    {
      name: "Pravin Dhamal",
      number: "+917066785668",
      email: "",
      address: ""
    },
    {
      name: "Pravin Kavthale",
      number: "+918055217077",
      email: "",
      address: ""
    },
    {
      name: "Pravin Wce",
      number: "+91 77739 03685",
      email: "",
      address: ""
    },
    {
      name: "Prem Birari",
      number: "077209 10426",
      email: "",
      address: ""
    },
    {
      name: "Prince F",
      number: "+918381057534",
      email: "",
      address: ""
    },
    {
      name: "Pritam",
      number: "+917350024598",
      email: "",
      address: ""
    },
    {
      name: "Pritam Mam",
      number: "+91 82754 58867",
      email: "pritamdeshmukh@mmcoe.edu.in",
      address: ""
    },
    {
      name: "Priyanka IACSD",
      number: "+918308018614",
      email: "",
      address: ""
    },
    {
      name: "Priyanka Kandekar",
      number: "+919766762495",
      email: "",
      address: ""
    },
    {
      name: "Priyanka Mmcoe",
      number: "+91 96898 31534",
      email: "",
      address: ""
    },
    {
      name: "Priyanka Patil Mam C++",
      number: "+91 91586 59963",
      email: "",
      address: ""
    },
    {
      name: "Professor Mujahid Inamdar",
      number: "+919860025586",
      email: "",
      address: ""
    },
    {
      name: "Pujari Mam",
      number: "+918380870908",
      email: "",
      address: ""
    },
    {
      name: "Purohit Sharvan Watcha Mumbai",
      number: "7738404608",
      email: "",
      address: ""
    },
    {
      name: "Pushkar Agale",
      number: "+91 86054 58734",
      email: "",
      address: ""
    },
    {
      name: "R G Bhosale Sir",
      number: "098220 44669",
      email: "",
      address: ""
    },
    {
      name: "Rafik Bhai",
      number: "087889 50225",
      email: "",
      address: ""
    },
    {
      name: "Rafik Bhaijan",
      number: "+917411276328",
      email: "",
      address: ""
    },
    {
      name: "rafik Dada",
      number: "+919175474000",
      email: "",
      address: ""
    },
    {
      name: "Rafik Khalu",
      number: "+919511786034",
      email: "",
      address: ""
    },
    {
      name: "Rahan",
      number: "+919960936442",
      email: "",
      address: ""
    },
    {
      name: "Rahat",
      number: "+917558402258",
      email: "",
      address: ""
    },
    {
      name: "Rahat Khatik",
      number: "937-386-2826",
      email: "",
      address: ""
    },
    {
      name: "Rahat Khatik 2",
      number: "+91 93738 62826",
      email: "",
      address: ""
    },
    {
      name: "Rahesh Kaka",
      number: "99227 84360",
      email: "",
      address: ""
    },
    {
      name: "Rahul Dada",
      number: "084467 79664",
      email: "",
      address: ""
    },
    {
      name: "Dr. Rahul Jagtap Mmcoe",
      number: "083088 38248",
      email: "",
      address: ""
    },
    {
      name: "Rahul Pawar TY",
      number: "+917887780560",
      email: "",
      address: ""
    },
    {
      name: "Rahul TY",
      number: "+918766416122",
      email: "",
      address: ""
    },
    {
      name: "Raj Magdum",
      number: "9271666602",
      email: "",
      address: ""
    },
    {
      name: "Raju Landge",
      number: "738-550-6973",
      email: "",
      address: ""
    },
    {
      name: "Ram",
      number: "+919970868079",
      email: "",
      address: ""
    },
    {
      name: "Ramjan Soudagar",
      number: "989-066-4215",
      email: "",
      address: ""
    },
    {
      name: "Ramzan Travails",
      number: "098814 45767",
      email: "",
      address: ""
    },
    {
      name: "Rauf Diamond",
      number: "+91 70283 06075",
      email: "",
      address: ""
    },
    {
      name: "Ravi PMKK",
      number: "+918329831400",
      email: "",
      address: ""
    },
    {
      name: "Ravi Shevale",
      number: "+917447493497",
      email: "rdshewale21@gmail.com",
      address: "Maharashtra, IN"
    },
    {
      name: "Ravi Tambade Sir IACSD",
      number: "098817 35801",
      email: "",
      address: ""
    },
    {
      name: "Ravi Xcaliber Bank",
      number: "78219 23889",
      email: "",
      address: ""
    },
    {
      name: "Raynet",
      number: "08421552525",
      email: "",
      address: ""
    },
    {
      name: "Razak Mamu",
      number: "+917760737301",
      email: "",
      address: ""
    },
    {
      name: "Rehan",
      number: "+917745863533",
      email: "",
      address: ""
    },
    {
      name: "Rehan Ammi",
      number: "+918788729242",
      email: "",
      address: ""
    },
    {
      name: "Rehan Bagvan",
      number: "+918830224321",
      email: "",
      address: ""
    },
    {
      name: "Rehan Kadak",
      number: "+918262000388",
      email: "",
      address: ""
    },
    {
      name: "Rehan Maner",
      number: "7709551648",
      email: "",
      address: ""
    },
    {
      name: "Rehan Mitta",
      number: "+917020406446",
      email: "",
      address: ""
    },
    {
      name: "Rehan Nadaf",
      number: "+919175577732",
      email: "",
      address: ""
    },
    {
      name: "Rehan Naikwadu",
      number: "087931 52002",
      email: "",
      address: ""
    },
    {
      name: "Rehan Shrikmasalt",
      number: "+918010303063",
      email: "",
      address: ""
    },
    {
      name: "Rehan Tasildar",
      number: "+918390866169",
      email: "",
      address: ""
    },
    {
      name: "Reshma Fupfu",
      number: "+919421205887",
      email: "",
      address: ""
    },
    {
      name: "Riders Paradise",
      number: "+918007296572",
      email: "",
      address: ""
    },
    {
      name: "Ritesh Satpute",
      number: "9561797763",
      email: "",
      address: ""
    },
    {
      name: "Ritika",
      number: "+919921145843",
      email: "",
      address: ""
    },
    {
      name: "Riya Didi",
      number: "+917559285903",
      email: "",
      address: ""
    },
    {
      name: "rohan junior",
      number: "820-808-8842",
      email: "",
      address: ""
    },
    {
      name: "Rohan Kamire",
      number: "+919834584376",
      email: "",
      address: ""
    },
    {
      name: "Rohan Rutuja",
      number: "+917887551065",
      email: "",
      address: ""
    },
    {
      name: "Rohan Salunke",
      number: "744-806-4515",
      email: "",
      address: ""
    },
    {
      name: "Rohan Salunke St",
      number: "+91 90115 71515",
      email: "",
      address: ""
    },
    {
      name: "Rohan Salunkhe",
      number: "+917620820006",
      email: "",
      address: ""
    },
    {
      name: "Rohan Shinde",
      number: "7387016172",
      email: "",
      address: ""
    },
    {
      name: "Rohan Vanmore",
      number: "+91 77440 32311",
      email: "",
      address: ""
    },
    {
      name: "Rohit",
      number: "084840 46799",
      email: "",
      address: ""
    },
    {
      name: "Rohit Akrudi Garage",
      number: "7756968795",
      email: "",
      address: ""
    },
    {
      name: "Rohit Desai",
      number: "+918975732106",
      email: "",
      address: ""
    },
    {
      name: "Rohit DKTE",
      number: "+91 74987 32932",
      email: "",
      address: ""
    },
    {
      name: "Rohit Gavde DON",
      number: "+919860195805",
      email: "",
      address: ""
    },
    {
      name: "Rohit Meshram",
      number: "+919970632636",
      email: "",
      address: ""
    },
    {
      name: "Rohit PG Gokhlenagar",
      number: "98502 38747",
      email: "",
      address: ""
    },
    {
      name: "Rohit Rajput",
      number: "+917397850277",
      email: "",
      address: ""
    },
    {
      name: "Rohit Sir",
      number: "075074 13598",
      email: "",
      address: ""
    },
    {
      name: "Rohit Xcaliber",
      number: "+91 86692 01030",
      email: "",
      address: ""
    },
    {
      name: "Rohit Zurange",
      number: "+91 96652 92722",
      email: "",
      address: ""
    },
    {
      name: "ruby Mri scan",
      number: "+918793093068",
      email: "",
      address: ""
    },
    {
      name: "Ruchita Kshirsagar",
      number: "+917083095109",
      email: "",
      address: ""
    },
    {
      name: "Rugvedee Chavan",
      number: "+919284038370",
      email: "",
      address: ""
    },
    {
      name: "Ruman Maner",
      number: "+918830508406",
      email: "",
      address: ""
    },
    {
      name: "Rumana",
      number: "+91 84461 71523",
      email: "",
      address: ""
    },
    {
      name: "Rupesh",
      number: "+917721889420",
      email: "",
      address: ""
    },
    {
      name: "Rupesh P",
      number: "+919763675143",
      email: "",
      address: ""
    },
    {
      name: "Rushi",
      number: "+917028192797",
      email: "",
      address: ""
    },
    {
      name: "Rushi Da Ty",
      number: "+919527488580",
      email: "",
      address: ""
    },
    {
      name: "Rushi Todkar",
      number: "7744793113",
      email: "",
      address: ""
    },
    {
      name: "Rushikesh Kadale",
      number: "+918412092050",
      email: "",
      address: ""
    },
    {
      name: "Rushikesh Mundhe",
      number: "+919623698962",
      email: "",
      address: ""
    },
    {
      name: "Rushya Chavan",
      number: "+917057136247",
      email: "",
      address: ""
    },
    {
      name: "Rushya khade",
      number: "+919156513174",
      email: "",
      address: ""
    },
    {
      name: "Ruthvik IACSD",
      number: "+91 77418 72927",
      email: "",
      address: ""
    },
    {
      name: "Rutik Targude",
      number: "+91 866 953 6509",
      email: "",
      address: ""
    },
    {
      name: "Rutuja Lad",
      number: "+917588393700",
      email: "",
      address: ""
    },
    {
      name: "Rutuja Mane",
      number: "+919673696128",
      email: "rmrutujamane@gmail.com",
      address: "Maharashtra, IN"
    },
    {
      name: "Rutuja Nargunde",
      number: "+918080107162",
      email: "",
      address: ""
    },
    {
      name: "Rutuja Pccoe",
      number: "+919359949433",
      email: "",
      address: ""
    },
    {
      name: "Saad Bagwan",
      number: "951-856-6153",
      email: "",
      address: ""
    },
    {
      name: "Saad Momin",
      number: "+91 93532 29278",
      email: "",
      address: ""
    },
    {
      name: "Saad Nadaf",
      number: "976-605-3664",
      email: "",
      address: ""
    },
    {
      name: "Saba Khaan",
      number: "+918602735296",
      email: "",
      address: ""
    },
    {
      name: "Sabir",
      number: "+91 84218 88082",
      email: "",
      address: ""
    },
    {
      name: "Sabir 1",
      number: "+918407945514",
      email: "",
      address: ""
    },
    {
      name: "Sabir Class",
      number: "+918208869628",
      email: "",
      address: ""
    },
    {
      name: "Sabir Jafra",
      number: "820-893-6630",
      email: "",
      address: ""
    },
    {
      name: "Sabiya",
      number: "+91 86684 43020",
      email: "",
      address: ""
    },
    {
      name: "Sabur Bhai",
      number: "+918421004773",
      email: "",
      address: ""
    },
    {
      name: "Sachin jadhav",
      number: "+919284736252",
      email: "sachinjadhav0338@gmail.com",
      address: ""
    },
    {
      name: "Sachin Kaka",
      number: "+919561399904",
      email: "",
      address: ""
    },
    {
      name: "Sachin Khatavkar",
      number: "080550 12019",
      email: "",
      address: ""
    },
    {
      name: "Sachin Mane",
      number: "989-968-5631",
      email: "",
      address: ""
    },
    {
      name: "Sachin Pawar Mmcoe",
      number: "+91 77450 83827",
      email: "",
      address: ""
    },
    {
      name: "Saddam",
      number: "+917249461903",
      email: "",
      address: ""
    },
    {
      name: "Saddam Bagwan",
      number: "+919518727684",
      email: "saddambagwan@gmail.com",
      address: "Maharashtra, India"
    },
    {
      name: "Sadikk Magdum",
      number: "+91 86008 74858",
      email: "",
      address: ""
    },
    {
      name: "Sadiq Momin",
      number: "+917666399413",
      email: "",
      address: ""
    },
    {
      name: "Saeed Saudager",
      number: "+917420065789",
      email: "",
      address: ""
    },
    {
      name: "Sagar 24",
      number: "9860871711",
      email: "",
      address: ""
    },
    {
      name: "Sagar Patil",
      number: "+918180867315",
      email: "",
      address: ""
    },
    {
      name: "Sagar Patil (Mmcoe)",
      number: "095884 79323",
      email: "",
      address: ""
    },
    {
      name: "Sagar Rathod",
      number: "+917769857234",
      email: "",
      address: ""
    },
    {
      name: "Sagar Tyade Sir Mitsubishi",
      number: "9970174615",
      email: "",
      address: ""
    },
    {
      name: "Sahil",
      number: "705-892-7008",
      email: "",
      address: ""
    },
    {
      name: "sahil Bhai Ichalkaranji",
      number: "092849 87917",
      email: "",
      address: ""
    },
    {
      name: "Sahil Ichalkranji",
      number: "+918390194293",
      email: "",
      address: ""
    },
    {
      name: "Sahil Jhagirdar",
      number: "+919881648225",
      email: "",
      address: ""
    },
    {
      name: "Sahil Kadak",
      number: "+917249296205",
      email: "",
      address: ""
    },
    {
      name: "Sahil Mulla",
      number: "+919284017065",
      email: "",
      address: ""
    },
    {
      name: "Sahil Rokade Mmcoe",
      number: "+91 99606 05595",
      email: "",
      address: ""
    },
    {
      name: "Sahil Sali",
      number: "+91 82373 21733",
      email: "",
      address: ""
    },
    {
      name: "Sahil Shirdhone",
      number: "+91 82610 80451",
      email: "",
      address: ""
    },
    {
      name: "Sahnawaj Shaikh",
      number: "+917020805605",
      email: "",
      address: ""
    },
    {
      name: "Sai Kakde",
      number: "+919730505468",
      email: "",
      address: ""
    },
    {
      name: "Saiesh",
      number: "+91 73851 51711",
      email: "",
      address: ""
    },
    {
      name: "saif",
      number: "087887 49295",
      email: "",
      address: ""
    },
    {
      name: "Saif Ali",
      number: "982-213-4386",
      email: "",
      address: ""
    },
    {
      name: "Saif Momin(diamand)",
      number: "073857 39586",
      email: "",
      address: ""
    },
    {
      name: "Saif Tamboli",
      number: "+918796939459",
      email: "",
      address: ""
    },
    {
      name: "Sajjad",
      number: "+918857887224",
      email: "",
      address: ""
    },
    {
      name: "Sajjan Sir Iacsd",
      number: "+919405818785",
      email: "",
      address: ""
    },
    {
      name: "Sakib Bepari",
      number: "+917219393796",
      email: "",
      address: ""
    },
    {
      name: "Sakib Bhilawade",
      number: "+919665286966",
      email: "",
      address: ""
    },
    {
      name: "Sakib E",
      number: "+919765211909",
      email: "",
      address: ""
    },
    {
      name: "Sakib Mulani",
      number: "+918956357306",
      email: "",
      address: ""
    },
    {
      name: "Sakib Mulla",
      number: "+917030298589",
      email: "",
      address: ""
    },
    {
      name: "Sakib Nadaf",
      number: "084596 96656",
      email: "",
      address: ""
    },
    {
      name: "Sakib Sayyed",
      number: "+917773988574",
      email: "mohammedsakibsayyed63442@gmail.com",
      address: ""
    },
    {
      name: "Sakib Shaikh",
      number: "725-427-4454",
      email: "",
      address: ""
    },
    {
      name: "Saklen Aga",
      number: "+91 95457 16365",
      email: "",
      address: ""
    },
    {
      name: "Saklen Mushrif",
      number: "+918983731297",
      email: "",
      address: ""
    },
    {
      name: "Sakshi Bhosale",
      number: "+91 73506 14903",
      email: "",
      address: ""
    },
    {
      name: "Salim",
      number: "+918055513335",
      email: "",
      address: "Maharashtra, India"
    },
    {
      name: "Salim Tamboli",
      number: "+919175441617",
      email: "",
      address: ""
    },
    {
      name: "Sallya Bhaiyya",
      number: "+919730090606",
      email: "",
      address: ""
    },
    {
      name: "Salman IACSD",
      number: "+918837426392",
      email: "",
      address: ""
    },
    {
      name: "Saloni",
      number: "+919451643181",
      email: "",
      address: ""
    },
    {
      name: "Samee shaikh F 😜",
      number: "+917559385268",
      email: "",
      address: ""
    },
    {
      name: "Sameer (Laudu Lalit)",
      number: "086377 42780",
      email: "",
      address: ""
    },
    {
      name: "Samiksha",
      number: "+919503318236",
      email: "",
      address: ""
    },
    {
      name: "Samir Bepari",
      number: "+919637754871",
      email: "",
      address: ""
    },
    {
      name: "Samir Mujawar",
      number: "9518380832",
      email: "",
      address: ""
    },
    {
      name: "Samir Mulla",
      number: "708-373-9141",
      email: "",
      address: ""
    },
    {
      name: "Samir Mulla S",
      number: "+919356046017",
      email: "",
      address: ""
    },
    {
      name: "Samir Shaikh",
      number: "09552639964",
      email: "",
      address: ""
    },
    {
      name: "Samir T",
      number: "+919420617563",
      email: "",
      address: ""
    },
    {
      name: "Samir Vakil",
      number: "+918796666667",
      email: "",
      address: ""
    },
    {
      name: "Samiya",
      number: "+919699030395",
      email: "",
      address: ""
    },
    {
      name: "Samiya Ammi",
      number: "+918767264903",
      email: "",
      address: ""
    },
    {
      name: "Sammed Chaugule",
      number: "+919850179174",
      email: "",
      address: ""
    },
    {
      name: "Sammed Magnewin",
      number: "+917028737035",
      email: "",
      address: ""
    },
    {
      name: "Sammed Patel",
      number: "+918999339580",
      email: "",
      address: ""
    },
    {
      name: "Sammed Patil",
      number: "+919119506494",
      email: "",
      address: ""
    },
    {
      name: "Sana Nadaf",
      number: "+919172915531",
      email: "",
      address: ""
    },
    {
      name: "Sandesh",
      number: "+919834556405",
      email: "",
      address: ""
    },
    {
      name: "Saniya Mujawar",
      number: "+91 96898 27044",
      email: "",
      address: ""
    },
    {
      name: "Sanjay Dhaigude (Wce Dean)",
      number: "+91 94226 15070",
      email: "",
      address: ""
    },
    {
      name: "Sanjay Kaka (खाजदार)",
      number: "982-280-4004",
      email: "",
      address: ""
    },
    {
      name: "Sankat Okate 😎",
      number: "+918976802355",
      email: "",
      address: ""
    },
    {
      name: "Sanket",
      number: "+919860398803",
      email: "",
      address: "Maharashtra, India"
    },
    {
      name: "Sanket Bende 😎",
      number: "+917798049302",
      email: "",
      address: ""
    },
    {
      name: "Sanket Bhave",
      number: "+91 86248 47211",
      email: "",
      address: ""
    },
    {
      name: "Sanket Ghadge 😎",
      number: "+919139262831",
      email: "",
      address: ""
    },
    {
      name: "Santosh",
      number: "+919423400595",
      email: "",
      address: ""
    },
    {
      name: "Saqib Momin",
      number: "+919075685355",
      email: "",
      address: ""
    },
    {
      name: "Sarfaraz Mamu",
      number: "+917972401514",
      email: "",
      address: ""
    },
    {
      name: "Sarfaraz Momin",
      number: "951-129-6442",
      email: "",
      address: ""
    },
    {
      name: "Sarfraz Sufi Key Makar",
      number: "9604124186",
      email: "",
      address: ""
    },
    {
      name: "Sarvesh Darshnale Mmcoe",
      number: "+91 74990 86184",
      email: "",
      address: ""
    },
    {
      name: "Satish Kharat Unique Engg.",
      number: "+91 99700 67118",
      email: "",
      address: ""
    },
    {
      name: "Sattar Mamu R",
      number: "+919036526051",
      email: "",
      address: ""
    },
    {
      name: "Sattar Mulla",
      number: "+91 84212 08804",
      email: "",
      address: ""
    },
    {
      name: "Satyam Kakde",
      number: "+917218279289",
      email: "",
      address: ""
    },
    {
      name: "Saurabh Dewkule",
      number: "+919130336055",
      email: "",
      address: ""
    },
    {
      name: "Saurabh P 😎",
      number: "+918007729073",
      email: "",
      address: ""
    },
    {
      name: "Saurabh Pawar Magnewin",
      number: "9112242204",
      email: "",
      address: ""
    },
    {
      name: "Saurabha Devkule Calling",
      number: "+91 91301 91718",
      email: "",
      address: ""
    },
    {
      name: "Saurabhda TY",
      number: "+919766208237",
      email: "",
      address: ""
    },
    {
      name: "saurya",
      number: "+919834260074",
      email: "",
      address: ""
    },
    {
      name: "Sayam Sayyad",
      number: "+917083740286",
      email: "",
      address: ""
    },
    {
      name: "Sejal Ashthekar",
      number: "+917972049458",
      email: "sejalbeat@gmail.com",
      address: ""
    },
    {
      name: "Shabaj",
      number: "727-621-9131",
      email: "",
      address: ""
    },
    {
      name: "Shabana Aapa",
      number: "+919970298406",
      email: "",
      address: ""
    },
    {
      name: "Shabbir Bhai",
      number: "+918956478921",
      email: "",
      address: ""
    },
    {
      name: "Shadab Bepari",
      number: "+919158688154",
      email: "",
      address: ""
    },
    {
      name: "Shadab Sb",
      number: "+919561796232",
      email: "",
      address: ""
    },
    {
      name: "Shahbaaj Nadaf",
      number: "+918329408295",
      email: "",
      address: ""
    },
    {
      name: "Shahbaj",
      number: "+919767472676",
      email: "",
      address: ""
    },
    {
      name: "Shaheen mulani",
      number: "+918308000358",
      email: "shahinmulani234@gmail.com",
      address: ""
    },
    {
      name: "Shahid",
      number: "+918806851557",
      email: "",
      address: ""
    },
    {
      name: "Shahid Bhai",
      number: "+919172496892",
      email: "",
      address: ""
    },
    {
      name: "Shahid S K Mobile",
      number: "+91 84211 24476",
      email: "",
      address: ""
    },
    {
      name: "Shahid Shaikh",
      number: "+917378401481",
      email: "shahid8112001@gmail.com",
      address: ""
    },
    {
      name: "shahida fupfu",
      number: "+919503050475",
      email: "",
      address: ""
    },
    {
      name: "Shain Bhabhi",
      number: "+919975998393",
      email: "",
      address: ""
    },
    {
      name: "Sham Gaike Mmcoe",
      number: "7387810182",
      email: "",
      address: ""
    },
    {
      name: "Sham Jagdhane Owner",
      number: "+91 70309 33974",
      email: "",
      address: ""
    },
    {
      name: "Shambhavi Kulkarni",
      number: "+919423214520",
      email: "shambhavikul163@gmail.com",
      address: ""
    },
    {
      name: "Shams Soudagar",
      number: "+91 91726 80796",
      email: "",
      address: ""
    },
    {
      name: "Shamshoddin Maulana",
      number: "+91 70207 98247",
      email: "",
      address: ""
    },
    {
      name: "Shantanu Cdac",
      number: "+919975174903",
      email: "",
      address: ""
    },
    {
      name: "Shanur shaikh",
      number: "+919823751136",
      email: "",
      address: ""
    },
    {
      name: "Sharad Kamble",
      number: "+919527760906",
      email: "sharadkamble8090@gmail.com",
      address: "Maharashtra, India"
    },
    {
      name: "Sharif",
      number: "+918600126840",
      email: "",
      address: ""
    },
    {
      name: "Sharif bhai",
      number: "+919284289057",
      email: "",
      address: ""
    },
    {
      name: "Sharif Mamu",
      number: "+919158584920",
      email: "",
      address: ""
    },
    {
      name: "sharif maner",
      number: "+919766883721",
      email: "",
      address: ""
    },
    {
      name: "Shelar Kaka",
      number: "095035 10133",
      email: "",
      address: ""
    },
    {
      name: "Shifa",
      number: "+917709366378",
      email: "",
      address: ""
    },
    {
      name: "Shirish❤",
      number: "+91 87999 88700",
      email: "",
      address: ""
    },
    {
      name: "Shiva IACSD",
      number: "+919322700382",
      email: "",
      address: ""
    },
    {
      name: "Shivanand",
      number: "+917038269416",
      email: "",
      address: ""
    },
    {
      name: "Shivani LR",
      number: "+918856920090",
      email: "",
      address: ""
    },
    {
      name: "Shiwani",
      number: "+917020411464",
      email: "",
      address: ""
    },
    {
      name: "Shoaib Pathan",
      number: "+91 93258 96414",
      email: "",
      address: ""
    },
    {
      name: "Shoeb Bagwan",
      number: "+919145586036",
      email: "",
      address: "Maharashtra, India"
    },
    {
      name: "Shoes Master .In",
      number: "+919157088896",
      email: "",
      address: ""
    },
    {
      name: "Shoieb Sayyad",
      number: "088569 11715",
      email: "",
      address: ""
    },
    {
      name: "Shraddha kamble",
      number: "+919421912791",
      email: "shraddhakamble4282@gmail.com",
      address: ""
    },
    {
      name: "Shree Diagnostic Center Sudarshan",
      number: "+918855863986",
      email: "",
      address: ""
    },
    {
      name: "Shreya Gurav",
      number: "841-297-3858",
      email: "",
      address: ""
    },
    {
      name: "Shreya Karavate",
      number: "+919373769003",
      email: "",
      address: ""
    },
    {
      name: "Shreya Patil",
      number: "+917756892963",
      email: "shreyapatil17@gmail.com",
      address: ""
    },
    {
      name: "Shreya Srivastava",
      number: "+917525084497",
      email: "",
      address: ""
    },
    {
      name: "Shreyas Heshi",
      number: "+91 86004 93899",
      email: "",
      address: ""
    },
    {
      name: "Shreyas Jadhav",
      number: "+91 86682 16206",
      email: "",
      address: ""
    },
    {
      name: "Shreyas Mmcoe",
      number: "+918975708870",
      email: "",
      address: ""
    },
    {
      name: "Shreyash Walchand",
      number: "+917218502805",
      email: "",
      address: ""
    },
    {
      name: "Shreyassiacsd",
      number: "9623261646",
      email: "",
      address: ""
    },
    {
      name: "Shreyes Bhende",
      number: "+919145800110",
      email: "",
      address: ""
    },
    {
      name: "Shri Dabade",
      number: "+918459771565",
      email: "",
      address: ""
    },
    {
      name: "Shrikant adsul",
      number: "+917719815060",
      email: "",
      address: ""
    },
    {
      name: "Shrikant Roomate",
      number: "9004812009",
      email: "",
      address: ""
    },
    {
      name: "Shriya Samaddar",
      number: "+91 95886 33019",
      email: "",
      address: ""
    },
    {
      name: "Shruti Sawant",
      number: "+91 788 775 3171",
      email: "shrutisawant3202@gmail.com",
      address: ""
    },
    {
      name: "Shubham 2",
      number: "776-897-8476",
      email: "",
      address: ""
    },
    {
      name: "Shubham Aravattu",
      number: "+919420762483",
      email: "",
      address: ""
    },
    {
      name: "Shubham Bhau",
      number: "+919028651086",
      email: "",
      address: ""
    },
    {
      name: "Shubham Bongale",
      number: "+919175722552",
      email: "shubhambhongale2001@gmail.com",
      address: ""
    },
    {
      name: "Shubham Chavan",
      number: "7719800491",
      email: "",
      address: ""
    },
    {
      name: "Shubham Dige",
      number: "+918459727029",
      email: "",
      address: ""
    },
    {
      name: "Shubham Gurau",
      number: "+917057462346",
      email: "",
      address: ""
    },
    {
      name: "Shubham Kadam",
      number: "+917774999849",
      email: "",
      address: ""
    },
    {
      name: "Shubham Kadam (05)",
      number: "+919082084867",
      email: "",
      address: ""
    },
    {
      name: "Shubham Kanse",
      number: "+918390943731",
      email: "",
      address: ""
    },
    {
      name: "Shubham Lohar",
      number: "+917276769703",
      email: "",
      address: ""
    },
    {
      name: "Shubham Mali",
      number: "091757 22552",
      email: "",
      address: ""
    },
    {
      name: "Siddhant (Mmcoe)",
      number: "+91 95456 02338",
      email: "",
      address: ""
    },
    {
      name: "Siddhant Bhosale",
      number: "+919975193845",
      email: "",
      address: ""
    },
    {
      name: "Siddhart Vatgaokar",
      number: "+917218140400",
      email: "",
      address: ""
    },
    {
      name: "Siddharth Walchand",
      number: "+919834344277",
      email: "",
      address: ""
    },
    {
      name: "Siddhya",
      number: "+919145354373",
      email: "",
      address: ""
    },
    {
      name: "Sneha LR",
      number: "+919527011785",
      email: "snehadagade2002@gmail.com",
      address: ""
    },
    {
      name: "Sneha MMCOE 2",
      number: "+91 99226 10376",
      email: "",
      address: ""
    },
    {
      name: "Sneha Omase",
      number: "+91 84830 14055",
      email: "",
      address: ""
    },
    {
      name: "Snehal Mam",
      number: "+919881546920",
      email: "",
      address: ""
    },
    {
      name: "Sohail Knowit",
      number: "+917972846163",
      email: "",
      address: ""
    },
    {
      name: "Sohally Bagwan",
      number: "+917972904095",
      email: "",
      address: ""
    },
    {
      name: "Soham Mmcoe",
      number: "+91 82752 71299",
      email: "",
      address: ""
    },
    {
      name: "Soheb 2",
      number: "+919972466051",
      email: "",
      address: ""
    },
    {
      name: "Sohel Bag",
      number: "+917887332668",
      email: "",
      address: ""
    },
    {
      name: "Sohel Bairagdar",
      number: "+918600509452",
      email: "",
      address: ""
    },
    {
      name: "Sohel Bhai",
      number: "080509 56050",
      email: "",
      address: ""
    },
    {
      name: "Sohel Jamadar",
      number: "+917218023858",
      email: "",
      address: ""
    },
    {
      name: "Sohel Momin",
      number: "7829893757",
      email: "",
      address: ""
    },
    {
      name: "Sohel Mulla",
      number: "+917057534585",
      email: "",
      address: ""
    },
    {
      name: "Sohel Pathan",
      number: "+919730841426",
      email: "",
      address: ""
    },
    {
      name: "Sohel Soudagar",
      number: "+91 81499 30140",
      email: "",
      address: ""
    },
    {
      name: "Somnath",
      number: "+919096970185",
      email: "",
      address: ""
    },
    {
      name: "Somnath Xcaliber",
      number: "+918999100731",
      email: "",
      address: ""
    },
    {
      name: "Somvanshi Suraj MMCOE",
      number: "+91 73876 76768",
      email: "",
      address: ""
    },
    {
      name: "Sonal",
      number: "+918605764799",
      email: "",
      address: ""
    },
    {
      name: "Sonu Chaudhari",
      number: "+917058756949",
      email: "",
      address: ""
    },
    {
      name: "Sourabh",
      number: "915-890-4250",
      email: "",
      address: ""
    },
    {
      name: "Sourabh Dada",
      number: "+91 96043 50101",
      email: "",
      address: ""
    },
    {
      name: "Sourabh DKTE",
      number: "+91 91392 19996",
      email: "",
      address: ""
    },
    {
      name: "Sourabh Iacsd",
      number: "093734 55750",
      email: "",
      address: ""
    },
    {
      name: "Srushti",
      number: "+919096558771",
      email: "",
      address: ""
    },
    {
      name: "Subhash sargar",
      number: "+919145699523",
      email: "sargarsubhash1432@gmail.com",
      address: ""
    },
    {
      name: "Subod Roomate",
      number: "+917020872253",
      email: "",
      address: ""
    },
    {
      name: "Sufiyan Attar",
      number: "+918830794217",
      email: "",
      address: ""
    },
    {
      name: "Sufiyan SBGI",
      number: "+919307200984",
      email: "",
      address: ""
    },
    {
      name: "Sufiyan Topper",
      number: "+919168305065",
      email: "",
      address: ""
    },
    {
      name: "Suhel Jamadar",
      number: "+917385316161",
      email: "",
      address: ""
    },
    {
      name: "Sujya Mech",
      number: "+919579770649",
      email: "",
      address: ""
    },
    {
      name: "Sukanya Bhosale",
      number: "+91 95291 82315",
      email: "",
      address: ""
    },
    {
      name: "Suleman Nandikurle",
      number: "+91 82084 64023",
      email: "",
      address: ""
    },
    {
      name: "Sumit P",
      number: "+918857020636",
      email: "",
      address: ""
    },
    {
      name: "Summed",
      number: "+917083323923",
      email: "",
      address: ""
    },
    {
      name: "Sunil Bhosale D Dac",
      number: "8485041984",
      email: "",
      address: ""
    },
    {
      name: "Suplyan",
      number: "9148103082",
      email: "",
      address: ""
    },
    {
      name: "Suppya Miraj",
      number: "+91 74105 50103",
      email: "",
      address: ""
    },
    {
      name: "Suraj",
      number: "772-197-6542",
      email: "",
      address: ""
    },
    {
      name: "Suraj Khot",
      number: "+919145491726",
      email: "",
      address: ""
    },
    {
      name: "Suraj Shinde",
      number: "+919309971909",
      email: "surajshinde7721@gmail.com",
      address: "Rajasthan, India"
    },
    {
      name: "Surykant Jadhav Degree",
      number: "+917066495957",
      email: "",
      address: ""
    },
    {
      name: "Sushant Koli",
      number: "+918788110014",
      email: "",
      address: "Maharashtra, India"
    },
    {
      name: "Sushil Satpute Kaka",
      number: "+91 90210 98232",
      email: "",
      address: ""
    },
    {
      name: "Suyog Chaudhari",
      number: "+919096120910",
      email: "",
      address: ""
    },
    {
      name: "Swapnil Khot",
      number: "+919168045811",
      email: "swapnilkhot406@gmail.com",
      address: ""
    },
    {
      name: "tabrej",
      number: "+919561317309",
      email: "",
      address: ""
    },
    {
      name: "Tahir",
      number: "+917057389173",
      email: "",
      address: ""
    },
    {
      name: "Tahir Momin",
      number: "9689844636",
      email: "",
      address: ""
    },
    {
      name: "Tahir Mulla",
      number: "+91 88570 25029",
      email: "",
      address: ""
    },
    {
      name: "Tahur",
      number: "+91 89563 65602",
      email: "",
      address: ""
    },
    {
      name: "Takdeer",
      number: "+919156902652",
      email: "",
      address: ""
    },
    {
      name: "Talha",
      number: "+919607370267",
      email: "",
      address: ""
    },
    {
      name: "Talha Mujawar",
      number: "+91 866 955 8897",
      email: "",
      address: ""
    },
    {
      name: "Tanaya jadhav",
      number: "+919284248340",
      email: "tanayaj99@gmail.com",
      address: ""
    },
    {
      name: "Tandoor Point",
      number: "8123996817",
      email: "",
      address: ""
    },
    {
      name: "Tanmay Mahajan (Sagar)",
      number: "9529036102",
      email: "",
      address: ""
    },
    {
      name: "Tanmay Urane",
      number: "+919623516797",
      email: "",
      address: ""
    },
    {
      name: "Tanmay Vatgawkar",
      number: "+917588933906",
      email: "",
      address: ""
    },
    {
      name: "Tanveer",
      number: "+919130733186",
      email: "",
      address: ""
    },
    {
      name: "Tanveer Fakeer",
      number: "092840 65424",
      email: "",
      address: ""
    },
    {
      name: "Tanvi Kulkarni (Mmcoe)",
      number: "+91 84216 93446",
      email: "",
      address: ""
    },
    {
      name: "Tanvir Bhai",
      number: "869-894-0866",
      email: "",
      address: ""
    },
    {
      name: "Tare Rashan",
      number: "9960955981",
      email: "",
      address: ""
    },
    {
      name: "Tarim Ansari Room",
      number: "+919284309971",
      email: "",
      address: ""
    },
    {
      name: "Tasty Bites",
      number: "+91 83692 55867",
      email: "",
      address: ""
    },
    {
      name: "Taufik Sir",
      number: "9960881814",
      email: "",
      address: ""
    },
    {
      name: "Taufiq Gher",
      number: "+919503403896",
      email: "",
      address: "Maharashtra, India"
    },
    {
      name: "Tejas Bamane",
      number: "+917769085305",
      email: "",
      address: ""
    },
    {
      name: "Tejas Jahagirdar",
      number: "+919420798862",
      email: "",
      address: ""
    },
    {
      name: "Tejas Kamble",
      number: "+919970763543",
      email: "",
      address: ""
    },
    {
      name: "Tejas Nikam Mmcoe",
      number: "+91 90759 09089",
      email: "",
      address: ""
    },
    {
      name: "Tejas Vadav",
      number: "+91 96576 96757",
      email: "",
      address: ""
    },
    {
      name: "Tejaswini Gaikwad",
      number: "+917558515292",
      email: "tejaswinigaikwad803@gmail.com",
      address: ""
    },
    {
      name: "Telar Soudagar",
      number: "+919960104303",
      email: "",
      address: ""
    },
    {
      name: "Tofik Soudagar",
      number: "+918208430753",
      email: "",
      address: ""
    },
    {
      name: "Tohid",
      number: "+919168250878",
      email: "",
      address: ""
    },
    {
      name: "Tohid Shaikh",
      number: "+91 93565 69667",
      email: "",
      address: ""
    },
    {
      name: "Tosif Chacha",
      number: "+91 88887 77335",
      email: "",
      address: ""
    },
    {
      name: "Tosif Kurne",
      number: "+919730340268",
      email: "",
      address: ""
    },
    {
      name: "Toufeek",
      number: "+918618122510",
      email: "",
      address: ""
    },
    {
      name: "Toufik Shaikh",
      number: "+91 80804 13370",
      email: "",
      address: ""
    },
    {
      name: "Tousif Bhai",
      number: "848-394-7515",
      email: "",
      address: ""
    },
    {
      name: "Trupti ( 27 NOV )",
      number: "+91 90964 03163",
      email: "",
      address: ""
    },
    {
      name: "Tufel Bhai",
      number: "9766402166",
      email: "",
      address: ""
    },
    {
      name: "Tushar Chavan",
      number: "098347 40516",
      email: "",
      address: ""
    },
    {
      name: "Tushar Che Pappa",
      number: "+91 98340 75043",
      email: "",
      address: ""
    },
    {
      name: "Ubed Tamboli",
      number: "+918275274075",
      email: "",
      address: ""
    },
    {
      name: "Umar Nadaf",
      number: "+91 93731 36955",
      email: "",
      address: ""
    },
    {
      name: "Umesh Dsy",
      number: "705-796-9268",
      email: "",
      address: ""
    },
    {
      name: "Union Bank Acc",
      number: "470002010520493",
      email: "",
      address: ""
    },
    {
      name: "Utkarsha",
      number: "+917820839690",
      email: "",
      address: ""
    },
    {
      name: "Utm infotech",
      number: "+918208716194",
      email: "",
      address: ""
    },
    {
      name: "Vaibhav",
      number: "+919730005867",
      email: "",
      address: ""
    },
    {
      name: "Vaibhav Chature",
      number: "+91 87881 13560",
      email: "",
      address: ""
    },
    {
      name: "Vaibhav Savant Wce",
      number: "7219889296",
      email: "",
      address: ""
    },
    {
      name: "Vaibhav Shinde",
      number: "+918329674401",
      email: "",
      address: ""
    },
    {
      name: "Vaibhav V",
      number: "+917350159878",
      email: "",
      address: ""
    },
    {
      name: "Vaishnavi Chaugule",
      number: "+918180040583",
      email: "vaishnavichougule14@gmail.com",
      address: ""
    },
    {
      name: "Vaishnavi Karad",
      number: "+91 92844 93337",
      email: "",
      address: ""
    },
    {
      name: "Vaishnavi Mam",
      number: "+918554973747",
      email: "",
      address: ""
    },
    {
      name: "Vedant",
      number: "+917219773934",
      email: "",
      address: ""
    },
    {
      name: "Vedant Metkari",
      number: "+919359742032",
      email: "",
      address: ""
    },
    {
      name: "Vedant Padole",
      number: "+91 98348 79345",
      email: "",
      address: ""
    },
    {
      name: "Vedant Patil",
      number: "+91 788 828 9077",
      email: "",
      address: ""
    },
    {
      name: "Vedant Tule",
      number: "+919370380159",
      email: "",
      address: ""
    },
    {
      name: "Vibhali junior",
      number: "+917058657898",
      email: "",
      address: ""
    },
    {
      name: "Vijay",
      number: "+91 82755 66976",
      email: "",
      address: ""
    },
    {
      name: "Vijaya",
      number: "+917276511751",
      email: "vijayalaximimagdum@gmail.com",
      address: ""
    },
    {
      name: "Vinayak Sulakhe Hod",
      number: "+919421126628",
      email: "",
      address: ""
    },
    {
      name: "Vishal Kamble",
      number: "+91 93700 84023",
      email: "",
      address: ""
    },
    {
      name: "Vishal Sar",
      number: "+919960014422",
      email: "",
      address: ""
    },
    {
      name: "Vishalshri Dabba",
      number: "+919579690851",
      email: "",
      address: ""
    },
    {
      name: "Vishwajeet Patil",
      number: "+91 76669 64857",
      email: "",
      address: ""
    },
    {
      name: "Vishwjeet Satpute",
      number: "+91 73783 23916",
      email: "",
      address: ""
    },
    {
      name: "Vrushali Mahamuni",
      number: "+918408854617",
      email: "vrushalimahamuni28@gmail.com",
      address: "Maharashtra, IN"
    },
    {
      name: "Wahid",
      number: "+91 91726 61726",
      email: "",
      address: ""
    },
    {
      name: "Wahid Shaikh",
      number: "+919325129234",
      email: "",
      address: ""
    },
    {
      name: "Wasim Bhilawade",
      number: "+919511678042",
      email: "",
      address: ""
    },
    {
      name: "Yash Arawattigi",
      number: "+917385027636",
      email: "",
      address: ""
    },
    {
      name: "Yash Kamble",
      number: "+91 91725 81683",
      email: "",
      address: ""
    },
    {
      name: "Yash Mane",
      number: "+917030468621",
      email: "",
      address: ""
    },
    {
      name: "Yash rajput",
      number: "+918669821780",
      email: "yashra2002@gmail.com",
      address: ""
    },
    {
      name: "Yash Sapkal",
      number: "+917083338377",
      email: "",
      address: ""
    },
    {
      name: "Yash TY",
      number: "+919766491093",
      email: "",
      address: ""
    },
    {
      name: "Yashrun Lala",
      number: "+918421456020",
      email: "",
      address: ""
    },
    {
      name: "Yasin Bhai Dubai",
      number: "+919403521271",
      email: "",
      address: ""
    },
    {
      name: "Yogini Chavan",
      number: "9021645390",
      email: "",
      address: ""
    },
    {
      name: "Yunus Tamboli",
      number: "+917249547826",
      email: "",
      address: ""
    },
    {
      name: "Yusuf Patel",
      number: "+919130548697",
      email: "",
      address: ""
    },
    {
      name: "Zahir Naniwale",
      number: "+919764369998",
      email: "",
      address: ""
    },
    {
      name: "Zaid tamboli",
      number: "+918888388307",
      email: "",
      address: ""
    },
    {
      name: "Zerox Fort Road",
      number: "+917498980027",
      email: "",
      address: ""
    }
  ]
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest 2025",
      slides_url: "https://bit.ly/",
      event_url: "https://www.facebook.com/faraj.patwegar"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Faraz-Patwegar"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9834401497",
  email_address: "farazpatwegar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
