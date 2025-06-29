import { Database, BrainCircuit, CircuitBoard } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Data Science Elective
            </h3>

            <p className="text-muted-foreground">
              With over 3 years of studying data science, I have established
              advanced knowlegdge about data analysis, artificial intelligence
              and machine learning.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about building circuitry, embedded systems, etc.
              I am also constantly learning new technologies and techniques
              to stay knowlegeable of the ever-evolving technology
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CircuitBoard className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Logic Circuits</h4>
                  <p className="text-muted-foreground">
                    Developing efficient digital logic systems using combinational and sequential circuit design principles.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Artificial Intelligence</h4>
                  <p className="text-muted-foreground">
                    Developing intelligent systems using machine learning algorithms and Python-based frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analysis</h4>
                  <p className="text-muted-foreground">
                    Analyzing and interpreting data to uncover trends and support data-driven decision making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
