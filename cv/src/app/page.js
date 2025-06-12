import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-10">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Timilehin Makanjuola</h1>
        <p className="text-lg text-gray-700">
          Full-Stack Software Engineer | JavaScript, Python, Java | MSc Computer
          Science
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:makanjuola.timi@gmail.com" aria-label="Email">
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Timelaying"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/makanjuola-timilehin-17896a19a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">
                Financial Investment Assistant
              </h3>
              <p className="text-gray-700 mt-2">
                Built a personalized investment assistant that helps users
                analyze financial data and simulate investment strategies using
                real-time market info.
              </p>
              <a
                href="https://github.com/Timelaying"
                className="text-blue-600 mt-2 inline-block"
                target="_blank"
              >
                View on GitHub
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">
                Golb – Blog & Social Platform
              </h3>
              <p className="text-gray-700 mt-2">
                Developed a full-stack social blogging platform with secure
                auth, dynamic profiles, nested comments, and real-time
                interaction features.
              </p>
              <a
                href="https://github.com/Timelaying"
                className="text-blue-600 mt-2 inline-block"
                target="_blank"
              >
                View on GitHub
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Skills & Tools</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-800">
          <li>JavaScript (Node.js, React)</li>
          <li>Python (Django, Streamlit)</li>
          <li>Java</li>
          <li>PostgreSQL, MySQL, MongoDB</li>
          <li>Docker, Kubernetes</li>
          <li>Git, GitHub, CI/CD</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Download My CV</h2>
        <Button asChild className="mt-2">
          <a href="/TIMILEHIN-MAKANJUOLA.pdf" download>
            Download CV
          </a>
        </Button>
      </section>
    </main>
  );
}
