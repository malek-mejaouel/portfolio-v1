

import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            passionate about software development, web technologies, and system optimization.
                        </h3>
                        <p className="text-muted-foreground">
                            I'm passionate about creating elegant solutions to complex problems through code. With a
                            strong foundation in multiple programming languages and frameworks, I enjoy building web
                            applications that are not only functional but also user-friendly and visually appealing.
                            My hands-on experience through academic projects, freelancing, and internships has
                            equipped me with practical skills in full-stack development, cloud computing, and
                            DevOps practices.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>
                            {/* cv link */}
                            <a
                                href="https://drive.google.com/file/d/1w3AWmN8OAhPqRPO6wie8zxxp4ytHVhKV/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="gradient-border p-6 card-hover">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <Code className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                                            <p className="text-muted-foreground">
                                                Proficient in building responsive and dynamic web applications using 
                                                modern frameworks such as React, Spring Boot, and Symfony.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="gradient-border p-6 card-hover">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <User className="h-6 w-6 text-primary" />
                                        </div>
                                         <div className="text-left">
                                            <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                            <p className="text-muted-foreground">
                                               Designing intuitive and engaging user interfaces 
                                               with a focus on user experiences.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="gradient-border p-6 card-hover">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <Briefcase className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-semibold text-lg">Project Management</h4>
                                            <p className="text-muted-foreground">
                                                Leading and coordinating projects to ensure timely 
                                                delivery and quality outcomes.
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