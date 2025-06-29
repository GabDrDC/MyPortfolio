import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PIR Motion Detector Alarm",
    description: "A Do-It-Yourself Motion Detector using PCB in our CPE 204 subject",
    image: "/projects/project1.jpg",
    tags: ["Circiut Board", "Motion Detector", "DIY"],
    demoUrl: "https://drive.google.com/file/d/1CpVEf1Qy_h9qoorvZhhwCxwqJNMRLBa-/view?usp=drive_link",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Maze Solving Robot",
    description:
      "Robot building using left hand algorithm to solve maze in our CPE 317 subject.",
    image: "/projects/project2.jpg",
    tags: ["Ultrasonic Sensor", "Arduino", "Signals"],
    demoUrl: "https://drive.google.com/file/d/1SjfkvqztHZgUNtqGhNOvOHcJdrhEx8CB/view?usp=sharing",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "7 Segment Display (0-15)",
    description:
      "A 7 segment display that displays binary to decimal number system in our CPE 203 subject",
    image: "/projects/project3.jpg",
    tags: ["Breadboard", "7-segment", "4-bits"],
    demoUrl: "https://drive.google.com/file/d/1D-47HktdM1e6-hWOfS1AOUbOXn-qva7K/view?usp=sharing",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was created by a chosen group during our past semesters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/GabDrDC"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
