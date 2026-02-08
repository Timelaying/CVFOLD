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

const projects = [
  {
    title: "Financial Investment Assistant",
    description:
      "AI-assisted finance companion that analyzes market signals, simulates portfolio scenarios, and explains recommendations in plain language.",
    tech: ["Python", "LLMs", "Streamlit", "Market APIs"],
    github: "https://github.com/Timelaying",
    demo: "https://cvfold.vercel.app",
  },
  {
    title: "Golb – Blog & Social Platform",
    description:
      "Full-stack social blogging platform with secure auth, dynamic profiles, nested comments, and real-time interaction features.",
    tech: ["React", "Node.js", "PostgreSQL", "JWT"],
    github: "https://github.com/Timelaying",
  },
  {
    title: "Project Go GraphQL Postgres",
    description:
      "GraphQL API service for commerce data, designed with a domain-driven schema and optimized query resolvers.",
    tech: ["Go", "GraphQL", "PostgreSQL", "Docker"],
    github: "https://github.com/Timelaying",
  },
  {
    title: "Shopta",
    description:
      "Inventory and order management system that automates stock updates, purchase workflows, and reporting dashboards.",
    tech: ["Django", "React", "REST APIs", "Celery"],
    github: "https://github.com/Timelaying",
  },
  {
    title: "DJRe",
    description:
      "Reusable Django REST toolkit with authentication, pagination, and performance-friendly query utilities.",
    tech: ["Python", "Django", "DRF", "JWT"],
    github: "https://github.com/Timelaying",
  },
  {
    title: "EcSa",
    description:
      "Energy consumption analytics prototype that visualizes usage trends and flags anomalies for facility teams.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Charts"],
    github: "https://github.com/Timelaying",
  },
];

const experiences = [
  {
    role: "Senior Backend Engineer",
    company: "TrendMind",
    timeline: "Feb 2025 – Present",
    highlights: [
      "Improved API response times by 25% through query optimization and targeted caching.",
      "Designed microservices for event-driven data ingestion and ML personalization workflows.",
      "Partnered with product leads to deliver reliability and observability upgrades (SLOs, tracing).",
    ],
  },
  {
    role: "Backend Engineer",
    company: "Dreamlines GmbH",
    timeline: "Dec 2021 – Nov 2024",
    highlights: [
      "Led a 5-engineer squad delivering booking platform enhancements and partner integrations.",
      "Reduced operational incidents by 30% with automated rollback and monitoring playbooks.",
      "Modernized legacy services into containerized, cloud-ready deployments.",
    ],
  },
  {
    role: "Software Engineer",
    company: "AFPRINT",
    timeline: "Nov2020 – Dec 2021",
    highlights: [
      "Built workflow automation tools that shortened production turnaround by 18%.",
      "Integrated payment and invoicing APIs to streamline customer operations.",
      "Collaborated with design teams to ship responsive customer portals.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Alphamead Technologies",
    timeline: "Jul 2019 – Sep 2020",
    highlights: [
      "Delivered backend services for enterprise clients focused on data processing and reporting.",
      "Implemented role-based access control and audit logging for compliance needs.",
      "Introduced CI/CD workflows to reduce release cycle time.",
    ],
  },
];

const skills = [
  {
    category: "Programming Languages",
    items: ["JavaScript/TypeScript", "Python", "Java", "Go"],
  },
  {
    category: "Back-End & Architecture",
    items: [
      "RESTful APIs",
      "Microservices",
      "Authentication (JWT, OAuth)",
      "Event-driven systems",
      "Performance optimization",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Helm", "Terraform"],
  },
  {
    category: "Testing & Quality",
    items: ["JUnit", "Mockito", "Cypress", "TDD"],
  },
  {
    category: "Engineering Practices",
    items: ["CI/CD", "Agile/Scrum", "Observability", "Code reviews"],
  },
];

const education = [
  {
    title: "MSc Advanced Computer Science",
    detail: "University of Leicester · May 2024",
  },
  {
    title: "CNSS Certification",
    detail: "Certified Network Security Specialist",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Backend Engineering • Cloud-Native Systems
          </p>
          <h1 className="text-4xl font-bold mt-4">Timilehin Makanjuola</h1>
          <p className="text-lg text-gray-700 mt-4">
            Backend-focused software engineer with 5+ years of experience
            building microservices, cloud-native platforms, and high-performance
            APIs. I specialize in Python, JavaScript, and Java, delivering
            reliable systems that improve speed, scalability, and customer
            outcomes.
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
              <a href="/TIMILEHIN MAKANJUOLA.pdf" download>
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
            I’m passionate about building resilient backend systems that power
            modern products. My work spans scalable APIs, event-driven
            microservices, and cloud-ready deployments. I focus on delivering
            measurable performance gains, improving reliability, and building
            teams that ship confidently.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Expertise</p>
                <p className="text-lg font-semibold">
                  Microservices & API Platforms
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Focus</p>
                <p className="text-lg font-semibold">
                  Cloud-native, observable systems
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">Impact</p>
                <p className="text-lg font-semibold">
                  Performance, reliability, and delivery
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
                      View on GitHub
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
          <div className="grid gap-4 md:grid-cols-2">
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
            Open to backend engineering roles, consulting, and collaborations on
            cloud-native products. Reach out to discuss how I can help your team
            deliver reliable software.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a href="mailto:makanjuola.timi@gmail.com">Contact Me</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/TIMILEHIN MAKANJUOLA.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
