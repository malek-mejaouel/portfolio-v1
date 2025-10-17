
import { useState } from "react";

const skills = [
    { name:"HTML/CSS",level:95,category:"Frontend" },
    { name:"JavaScript",level:90,category:"Frontend" },
    { name:"React",level:85,category:"Frontend" },
    { name:"Symfony",level:80,category:"Backend" },
    { name:"Spring Boot",level:75,category:"Backend" },
    { name:"Docker",level:65,category:"DevOps" },
    { name:"c++",level:90,category:"Desktop" },
    { name:"Python",level:90,category:"Backend" },
    { name:"Java",level:90,category:"Backend" },
    { name:"QtCreator",level:80,category:"Desktop" },
    { name:"Figma",level:60,category:"Design" },
    { name:"Git",level:85,category:"Tools" },
    { name:"Bash",level:70,category:"Tools" },
    { name:"MySQL",level:80,category:"Database" },
    { name:"PostgreSQL",level:75,category:"Database" },
    { name:"Photoshop",level:92,category:"Design" },
    { name:"Illustrator",level:85,category:"Design" },
    { name:"AfterEffect",level:85,category:"Design" },
    { name:"Gdevelop",level:70,category:"Tools" },
    { name:"Flutter",level:80,category:"Tools" },
    { name:"Dart",level:80,category:"Backend" },

];


const categories=["All","Frontend","Backend","DevOps","Desktop","Design","Tools","Database"];
export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = activeCategory === "All"
        ? skills
        : skills.filter((s) => s.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full border transition-colors duration-200 ${activeCategory === category ? 'bg-primary text-primary-foreground border-primary' : 'bg-transparent text-foreground/80 border-border'}`}
                            aria-pressed={activeCategory === category}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div key={`${skill.name}-${index}`} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};