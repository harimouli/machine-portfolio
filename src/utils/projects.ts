export interface ProjectProps {
        title: string;
        githubUrl: string;
        tools?: string[];
        description : string;
        liveUrl: string;
}


export const projects:ProjectProps[] =[
 {
    title: "Second Brain",
    liveUrl: "https://secondbrain-frontend-snowy.vercel.app",
    githubUrl: "https://github.com/harimouli/secondbrain-frontend",
    description:
      "A personal knowledge management application to collect, embed, and organize ideas, videos, tweets, and notes in one place.",
    tools: [
      "MongoDB",
      "TypeScript",
      "Node.js",
      "React",
      "HTML",
      "TailwindCSS",
      "Express",
    ]
  }, 

  {
       title: "Jobby App",
    liveUrl: "https://moulijobbyapp1.ccbp.tech",
    githubUrl: "https://github.com/harimouli/jobby-app-reactjs.git",
    description:
      "A job search web app built with React.js and RESTful APIs. Lets users sign in, browse job listings, filter results, and view detailed job info.",
    tools: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Express",
    ]

  },{

    title: "Second Brain",
    liveUrl: "https://secondbrain-frontend-snowy.vercel.app",
    githubUrl: "https://github.com/harimouli/secondbrain-frontend",
    description:
      "A personal knowledge management application to collect, embed, and organize ideas, videos, tweets, and notes in one place.",
    tools: [
      "MongoDB",
      "TypeScript",
      "Node.js",
      "React",
      "HTML",
      "TailwindCSS",
      "Express",
    ]
  },{
    title: "Second Brain",
    liveUrl: "https://secondbrain-frontend-snowy.vercel.app",
    githubUrl: "https://github.com/harimouli/secondbrain-frontend",
    description:
      "A personal knowledge management application to collect, embed, and organize ideas, videos, tweets, and notes in one place.",
    tools: [
      "MongoDB",
      "TypeScript",
      "Node.js",
      "React",
      "HTML",
      "TailwindCSS",
      "Express",
    ]

  }

]

type SkilType = string[];

export const SkillList:SkilType = [
    "C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.Js",
    "Python",
    "REST APIs",
    "MongoDB",
    "JWT",
    "SQL",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Recoil",
    "Git",
    "Data Structures",
    "Algorithms",
    "SQLITE",
    "Express.js",
    "Zod",
    "PostgreSQL"

] 