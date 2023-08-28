import {
  mobile,
  backend,
  creator,
  javascript,
  typescript,
  html,
  nodejs,
  mongodb,
  git,
  docker,
  aiforge,
  xds,
  dotnet,
  kubernetes,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalho",
  },
  {
    id: "contact",
    title: "Contatos",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Cloud Developer",
    icon: creator,
  }
];

const technologies = [
  {
    name: ".NET",
    icon: dotnet,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "Estagiário Backend",
    company_name: "XDS - Extended Development Solutions",
    icon: xds,
    iconBg: "#383E56",
    date: "Outubro 2021 - Dezembro 2021",
    points: [
      "Desenvolvimento de API's REST com C#, .NET e Python",
      "Integração com DynamoDB, Secret, Api-Gateway, entre outros produtos Cloud AWS",
      "Desenvolvimento de Lambdas AWS em Python",
      "Integração com Token JWT",
      "Documentação das API's via Swagger",
    ],
  },
  {
    title: "Desenvolvedor Backend",
    company_name: "XDS - Extended Development Solutions",
    icon: xds,
    iconBg: "#383E56",
    date: "Janeiro 2022 - Junho 2022",
    points: [
      "Desenvolvimento de API's REST com C#, .NET, Kotlin (Micronaut) e Python",
      "Integração com DynamoDB, Secret, Api-Gateway, entre outros produtos Cloud AWS",
      "Integração com Token JWT",
      "Documentação das API's via Swagger",
    ],
  },
  {
    title: "Desenvolvedor backend e mobile",
    company_name: "XDS - Extended Development Solutions",
    icon: xds,
    iconBg: "#383E56",
    date: "Junho 2022 - o momento",
    points: [
      "REST API development (kotlin, C#, nodejs, python and etc)",
      "gRPC API development",
      "iOS app development (swift)",
      "Cloud development (AWS, IBM cloud and Google Cloud)",
      "Back for Front architecture",
      "JWT integration",
      "Documentation with swagger",
      "Firebase",
      "Project management",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Felipe é um profissional único! Pude trabalhar e aprender muito com ele. Está sempre em busca de novos conhecimentos e desbravando novas tecnologias. É um profissional multifacetado e está sempre disposto a manter a harmonia do grupo.",
    name: "Alice Ribeiro",
    designation: "Web Developer",
    company: "BTG Pactual",
    image: "https://media.licdn.com/dms/image/D4D03AQHr9A78-8gpbA/profile-displayphoto-shrink_200_200/0/1688424058986?e=1697673600&v=beta&t=-HkVJTWLC9BTMJl1X8Chpre_FAc56yXtT7lKnKrzDUY",
  }
];

const projects = [
  {
    name: "AI Forge",
    description:
      "Web-based platform that allows users to made AI calls more simple and efficient.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aiforge,
    source_code_link: "https://github.com/Felipe-Baz/AIForge",
    link: "https://ai-forge.vercel.app"
  }
];

export { services, technologies, experiences, testimonials, projects };
