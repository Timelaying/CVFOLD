import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const CV_PATH = "/Timilehin_Makanjuola_CV.pdf";

// Each project links to its own repository. Add a `demo` URL only once the
// project is actually deployed; the button is hidden when it is missing.
const projects = [
  {
    title: "Golb – Blog Platform",
    description:
      "Full-stack blog built with Next.js, containerised with Docker, with Kubernetes manifests, Cypress end-to-end tests and GitHub Actions workflows.",
    tech: ["Next.js", "Docker", "Kubernetes", "Cypress"],
    github: "https://github.com/Timelaying/Golb-setup",
  },
  {
    title: "Shopta – Shopping Taxi Platform",
    description:
      "Shopping and taxi platform built as microservices: a real-time socket server, route optimiser, promotions and trip analytics services, run with Docker Compose and CI.",
    tech: ["TypeScript", "Microservices", "Docker", "GitHub Actions"],
    github: "https://github.com/Timelaying/Shopta",
  },
  {
    title: "Job Tracker API (Go + GraphQL)",
    description:
      "Job-application tracker API in Go using gqlgen and PostgreSQL, with migrations, filtering, tests and a GraphQL playground.",
    tech: ["Go", "GraphQL", "PostgreSQL", "Docker"],
    github: "https://github.com/Timelaying/Project_Go_Graphql_Postgres",
    demo: "https://go-graphql-jobs.onrender.com",
  },
  {
    title: "DjRe – React + Django",
    description:
      "Web application with a Django backend and a React frontend.",
    tech: ["Python", "Django", "React"],
    github: "https://github.com/Timelaying/DjRe",
    demo: "https://djre-notes.vercel.app",
  },
  {
    title: "EcSa – Digital Products Store",
    description:
      "Online store for digital products with Stripe checkout, emailed receipts, time-limited download links and a password-protected admin area, built with Next.js, Prisma and PostgreSQL.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com/Timelaying/EcSa",
    demo: "https://ecsa-mu.vercel.app",
  },
  {
    title: "Financial Investment Assistant",
    description:
      "Streamlit application for portfolio management, market news and real-time stock monitoring, with a Dockerfile and a CI workflow.",
    tech: ["Python", "Streamlit", "Docker", "GitHub Actions"],
    github: "https://github.com/Timelaying/Financial-investment-assistant",
    demo: "https://timelaying-invest-assistant.streamlit.app/",
  },
];

// Employment history follows the current CV.
const experiences = [
  {
    role: "Analyst Developer",
    company: "Hastings Direct",
    timeline: "Apr 2026 – Present",
    highlights: [
      "Develop and maintain FNOL functionality in Guidewire ClaimCenter, delivering new features and business-required changes for digital claims processing.",
      "Build and support integrations between customer-facing mobile applications and Guidewire using REST APIs, Edge APIs and Azure API services.",
      "Implement Gosu business rules for claims validation and processing, and use MSSQL to validate and transfer claims data across enterprise systems.",
      "Refactor legacy code, document technical debt, and mentor junior developers on implementation, debugging and testing.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Dreamlines GmbH",
    timeline: "Dec 2021 – Apr 2026",
    highlights: [
      "Spearheaded development of scalable web features, increasing delivery speed by 30%.",
      "Reduced API latency through database indexing and caching strategies.",
      "Built a fault-tolerant microservice for multi-channel payment processing.",
      "Led code reviews and mentored junior engineers; contributed to CI/CD pipelines and Agile delivery.",
    ],
  },
  {
    role: "Software Engineer",
    company: "AFPRINT",
    timeline: "Nov 2020 – Dec 2021",
    highlights: [
      "Led a team of five developers building a financial management platform.",
      "Designed and deployed RESTful APIs with a focus on availability and security.",
      "Applied test-driven development with JUnit and Cypress, expanding automated test coverage.",
      "Translated complex business requirements into user stories and application features.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Alphamead Technologies",
    timeline: "Jul 2019 – Sep 2020",
    highlights: [
      "Developed a microservice supporting business process management systems.",
      "Built applications with Django and Java, including an electronic voting system.",
      "Created and tested a mock aptitude test application that simulated examination conditions.",
    ],
  },
];

const skills = [
  {
    category: "Languages",
    items: ["Java", "Gosu", "JavaScript", "TypeScript", "Python", "SQL", "Go", "C#", "C/C++"],
  },
  {
    category: "Backend & Full Stack",
    items: [
      "Node.js",
      "Express.js",
      "React",
      "Next.js",
      "Django",
      "REST APIs",
      "Microservices",
      "JWT authentication",
    ],
  },
  {
    category: "Databases",
    items: ["MSSQL", "PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Cloud & Delivery",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Helm", "CI/CD", "Git/GitHub"],
  },
  {
    category: "Testing & Quality",
    items: ["JUnit", "Mockito", "Cypress", "Splunk", "TDD", "BDD", "Code reviews", "Agile/Scrum"],
  },
  {
    category: "Insurance & Integration",
    items: ["Guidewire ClaimCenter", "FNOL", "Edge APIs", "Azure APIs", "SOAP", "JSON-RPC"],
  },
];

const education = [
  {
    title: "MSc Advanced Computer Science",
    detail: "University of Leicester · May 2024",
  },
  {
    title: "OWASP API Security Top 10",
    detail: "APIsec University · 2026",
  },
  {
    title: "Certified Network Security Specialist (CNSS)",
    detail: "International Cybersecurity Institute · 2020",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Backend • Full Stack • Enterprise Integration
          </p>
          <h1 className="text-4xl font-bold mt-4">Timilehin Makanjuola</h1>
          <p className="text-lg text-gray-700 mt-4">
            Software engineer with experience since 2019 delivering backend
            services, full-stack web applications and enterprise integrations
            across insurance, financial systems and digital platforms. Based in
            Leicester, UK.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="mailto:makanjuola.timi@gmail.com"
              aria-label="Email Timilehin"
              className="rounded-full border border-gray-200 p-2 hover:bg-gray-50"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Timelaying"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Timilehin on GitHub"
              className="rounded-full border border-gray-200 p-2 hover:bg-gray-50"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/makanjuola-timilehin-17896a19a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Timilehin on LinkedIn"
              className="rounded-full border border-gray-200 p-2 hover:bg-gray-50"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a href={CV_PATH} download>
                Download CV
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:makanjuola.timi@gmail.com">Let’s Connect</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold mb-4">Professional Profile</h2>
          <p className="text-gray-700">
            I build backend services, REST APIs and full-stack applications, and
            integrate them with enterprise systems. My experience includes
            leading a team of five developers, mentoring junior engineers,
            building payment microservices and improving application
            performance. I currently work on Guidewire ClaimCenter FNOL and
            digital claims integrations in an Agile insurance environment.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Expertise</p>
                <p className="text-lg font-semibold">
                  Backend services & REST APIs
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Focus</p>
                <p className="text-lg font-semibold">
                  Insurance and enterprise integration
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Practice</p>
                <p className="text-lg font-semibold">
                  Code review, testing and mentoring
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold mb-8">Experience</h2>
          <div className="grid gap-6">
            {experiences.map((experience) => (
              <Card key={`${experience.company}-${experience.role}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{experience.role}</CardTitle>
                  <CardDescription>
                    {experience.company} · {experience.timeline}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    {experience.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold mb-8">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <a
                      href={project.github}
                      className="text-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View code
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        className="text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live demo
                      </a>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold mb-8">Skills & Tools</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <Card key={skill.category}>
                <CardHeader>
                  <CardTitle>{skill.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold mb-6">
            Education & Certifications
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {education.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-4">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-600 mt-1">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-semibold">Let’s Build Together</h2>
          <p className="text-gray-700 mt-3">
            Open to Senior Software Engineer and Senior Developer roles across
            backend, full-stack and integration teams.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a href="mailto:makanjuola.timi@gmail.com">Contact Me</a>
            </Button>
            <Button asChild variant="outline">
              <a href={CV_PATH} download>
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
