import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Football App",
        description: "A beautiful UI/UX design for a football app",
        image: "/projects/Figma FotballApp.png",
        tags: ["Figma", "UI/UX Design"],
        github: "https://github.com/malek-mejaouel",
        demo: "https://i.ibb.co/s97MSW9b/Figma-Fotball-App.png",
    },
    {
        id: 2,
        title: "Course-Poster",
        description: "A beautiful Poster for a AeroEsprit",
        image: "/projects/n0.png",
        tags: ["Photoshop", "UI/UX Design"],
        github: "https://github.com/malek-mejaouel",
        demo: "https://i.ibb.co/RpBwkvYg/n0.png",
    },
    {
        id: 3,
        title: "Holiday-Poster",
        description: "Aid Holiday Poster for a AeroEsprit",
        image: "/projects/n2.png",
        tags: ["Photoshop", "UI/UX Design"],
        github: "https://github.com/malek-mejaouel",
        demo: "https://i.ibb.co/rKscYkpk/n2.png",
    },
    {
        id: 4,
        title: "Self Fan-Art",
        description: "Fan-Art Design",
        image: "/projects/n5.png",
        tags: ["Photoshop", "UI/UX Design"],
        github: "https://github.com/malek-mejaouel",
        demo: "https://i.ibb.co/Jj8ymybV/n5.png",
    },
     {
        id: 5,
        title: "Custom Fan-Art",
        description: "Custom Fan-Art Design",
        image: "/projects/m4.png",
        tags: ["Photoshop", "UI/UX Design"],
        github: "https://github.com/malek-mejaouel",
        demo: "https://i.ibb.co/GvjJxnSb/m4.png",
    },
    {
        id: 6,
        title: "Gaming Fan-Art",
        description: "2D Fan-Art Design",
        image: "/projects/n1.png",
        tags: ["Illutrator", "UI/UX Design"],
        github: "https://github.com/malek-mejaouel",
        demo: "https://i.ibb.co/8CwBTLm/n1.png",
    },

];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and experience in software development, web
                    technologies, and system optimization.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group bg-card p-6 rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
                        >
                            {project.image && (
                                <div className="mb-4 flex items-center justify-center overflow-hidden rounded-md">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="transition-transform duration-500 group-hover:scale-110 w-auto h-64 object-contain"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
                                    {project.tags.map((t) => (
                                        <span key={t} className="text-xs px-2 py-1 font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                  <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            </div>
                                <div className="flex justify-center items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`Open demo for ${project.title}`}
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={30} />
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`Open code for ${project.title}`}
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={30} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/malek-mejaouel"
                        aria-label="Open my GitHub profile"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};