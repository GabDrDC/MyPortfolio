import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Technical
  {
    name: "Computer Hardware",
    tags: ["Motherboard", "Troubleshooting", "Assembly"],
    category: "Technical Skills",
  },
  {
    name: "Software Development",
    tags: ["JavaScript", "React", "Git"],
    category: "Technical Skills",
  },
  {
    name: "Computer Networking",
    tags: ["LAN/WAN", "IP Addressing", "Routing"],
    category: "Technical Skills",
  },
  {
    name: "Cybersecurity",
    tags: ["Encryption", "Firewalls", "Vulnerability Assessment"],
    category: "Technical Skills",
  },
  {
    name: "AI & ML",
    tags: ["Neural Networks", "Python", "Model Training"],
    category: "Technical Skills",
  },
  {
    name: "Data Analytics",
    tags: ["Data Visualization", "Excel", "SQL"],
    category: "Technical Skills",
  },

  // Personal
  {
    name: "Communication",
    tags: ["Public Speaking", "Active Listening", "Clarity"],
    category: "Personal Skills",
  },
  {
    name: "Teamwork",
    tags: ["Collaboration", "Delegation", "Conflict Resolution"],
    category: "Personal Skills",
  },
  {
    name: "Problem-Solving",
    tags: ["Critical Thinking", "Decision Making", "Root Cause Analysis"],
    category: "Personal Skills",
  },
  {
    name: "Adaptability",
    tags: ["Flexibility", "Learning Agility", "Open-mindedness"],
    category: "Personal Skills",
  },
  {
    name: "Creativity",
    tags: ["Idea Generation", "Innovation", "Design Thinking"],
    category: "Personal Skills",
  },
  {
    name: "Work Ethic",
    tags: ["Discipline", "Accountability", "Time Management"],
    category: "Personal Skills",
  },
];


const categories = ["all", "Technical Skills", "Personal Skills"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>

                {/* Skill tags, only if they exist */}
                {skill.tags && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skill.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
