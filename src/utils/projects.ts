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

]





