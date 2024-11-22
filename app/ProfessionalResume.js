"use client";

import React, { useState } from "react";
import {
  Github,
  Mail,
  Linkedin,
  Code,
  BookOpen,
  Trophy,
  Briefcase,
  Menu,
  X,
  ExternalLink,
  User,
  Terminal,
  Star,
  Calendar,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

const ProfessionalResume = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = {
    "Frontend Development": [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Material UI",
      "HyperUi",
      "NestI",
      "ShadeCN",
    ],
    "Backend Development": [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
    ],

    "Core Skills": [
      "System Design",
      "Data Structures",
      "Algorithms",
      "Agile",
      "Team Leadership",
    ],
  };

  const experience = [
    {
      title: "Full Stack Developer",
      company: "",
      period: "2020 - 2024",
      description: [
        "Developed and maintained multiple React-based web applications",
        "Implemented real-time features using WebSocket and Socket.io",
        "Optimized database queries resulting in 50% faster response times",
        "Collaborated with UX team to implement responsive designs",
      ],
    },
  ];

  const projects = [
    {
      title: "Frontend UI Library",
      description:
        "Developed a reusable frontend UI component library to accelerate development and maintain consistency across projects.",
      tags: ["React", "Tailwind CSS", "Storybook", "TypeScript"],
      link: "https://github.com/Naval1525",
    },
    {
      title: "Collaborative Workspace",
      description:
        "Built a collaborative platform for teams to manage tasks, communicate, and share resources effectively.",
      tags: ["Next.js", "Socket.io", "MongoDB", "AWS"],
      link: "https://github.com/Naval1525",
    },
    {
      title: "Online Voting System",
      description:
        "Implemented a secure online voting system with real-time vote counting and admin control panels.",
      tags: ["Node.js", "React", "PostgreSQL", "JWT", "Docker"],
      link: "https://github.com/Naval1525",
    },
    {
      title: "Social Media Application",
      description:
        "Developed a social platform with features like posts, likes, comments, and real-time notifications.",
      tags: ["Next.js", "MongoDB", "Clerk", "Socket.io"],
      link: "https://github.com/Naval1525",
    },
    {
      title: "Traveling Website",
      description:
        "Created a responsive travel website offering destination guides, booking options, and user reviews.",
      tags: ["React", "Tailwind CSS", "Firebase", "APIs"],
      link: "https://github.com/Naval1525",
    },
    {
      title: "Gym Application",
      description:
        "Developed a gym management app enabling users to track workouts, set goals, and book personal training sessions.",
      tags: ["React Native", "Node.js", "MongoDB", "AWS"],
      link: "https://github.com/Naval1525",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Naval Bihani
            </span>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="hover:text-blue-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="hover:text-blue-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-b border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 hover:bg-gray-700 rounded-md"
              >
                About
              </a>
              <a
                href="#experience"
                className="block px-3 py-2 hover:bg-gray-700 rounded-md"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 hover:bg-gray-700 rounded-md"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 hover:bg-gray-700 rounded-md"
              >
                Projects
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Naval Bihani
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Full Stack Developer | 2.5 Years Experience
              <br />
              Specialized in MERN Stack
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                className="gap-2"
                onClick={() =>
                  window.open("https://github.com/Naval1525", "_blank")
                }
              >
                <Github size={20} />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="gap-2"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/navalbihani15/", "_blank")
                }
              >
                <Linkedin size={20} />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                className="gap-2"
                onClick={() =>
                  (window.location.href = "mailto:your-email@example.com")
                }
              >
                <Mail size={20} />
                Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <User className="text-blue-500" />
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                 Full Stack Developer with 2.5 years of hands-on
                experience in building  web applications. Specialized in MERN stack development with
                expertise in cloud architecture and DevOps practices. Proven
                track record of leading technical teams and delivering
                high-impact projects for enterprise clients. Strong foundation
                in computer science with a BTech in CSE (9.3 CGPA) and extensive
                problem-solving experience with 500+ solved LeetCode problems.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Briefcase className="text-blue-500" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((role) => (
              <Card key={role.title} className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-blue-400">
                        {role.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {role.company}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-blue-400 border-blue-400"
                    >
                      <Calendar className="w-4 h-4 mr-1" />
                      {role.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {role.description.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <Star className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
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

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Terminal className="text-blue-500" />
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-gray-700 hover:bg-gray-600"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Code className="text-blue-500" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400 flex items-center justify-between">
                    {project.title}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink
                        size={20}
                        className="text-gray-400 hover:text-blue-400"
                      />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-gray-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Trophy className="text-blue-500" />
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Alert className="bg-gray-800/50 border-gray-700">
              <Trophy className="h-4 w-4 text-blue-500" />
              <AlertTitle>Technical Excellence</AlertTitle>
              <AlertDescription className="text-gray-300">
                Solved 500+ DSA problems on LeetCode, demonstrating strong
                problem-solving skills
              </AlertDescription>
            </Alert>
            <Alert className="bg-gray-800/50 border-gray-700">
              <Star className="h-4 w-4 text-blue-500" />
              <AlertTitle>Project Impact</AlertTitle>
              <AlertDescription className="text-gray-300">
                Led development of enterprise solutions serving 100K+ daily
                active users
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Naval Bihani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalResume;
