import { Briefcase, Code, User } from "lucide-react";

function Aboutme() {
  return (
    <section id="about" className="py-2 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grifd-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className=" text-2xl font-semibold">
              Web Developer & AI Enthusiast
            </h3>
            <p>
              As a driven and curious learner with an engineering background and
              a passion for tech, I specialize in building responsive,
              accessible, and performant web applications using modern
              technologies. I'm currently focused on mastering the MERN stack
              (MongoDB, Express.js, React, Node.js) while also exploring AI/ML
              to expand my skill set.
            </p>
            <p>
              I thrive on solving real-world problems through clean, efficient
              code and intuitive user experiences. Whether it's crafting elegant
              frontend interfaces or architecting scalable backend solutions,
              I'm always eager to push boundaries and stay ahead in the
              ever-evolving tech landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="cosmic-button flex items-center justify-center"
              >
                Get In Touch
              </a>
              <a className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 flex items-center justify-center">
                Download CV
              </a>
            </div>
          </div>
          <div className=" grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10 flex items-center justify-center h-10 w-10">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive and user-friendly web applications using
                    modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10 flex items-center justify-center h-10 w-10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="">
                    Crafting intuitive and visually appealing user interfaces
                    for seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10 flex items-center justify-center h-10 w-10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Work-Experience</h4>
                  <p className="">
                    Built a Weather App and portfolio website using React,
                    Tailwind, and JavaScript. Continuously learning MERN stack
                    and improving frontend skills through self-initiated
                    projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
