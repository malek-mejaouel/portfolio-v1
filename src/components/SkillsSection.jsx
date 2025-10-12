
const skills = [
    { name:"HTML/CSS",level:95,categiory:"Frontend" },
    { name:"JavaScript",level:90,categiory:"Frontend" },
    { name:"React",level:85,categiory:"Frontend" },
    { name:"Symfony",level:80,categiory:"Backend" },
    { name:"Spring Boot",level:75,categiory:"Backend" },
    { name:"Docker",level:65,categiory:"DevOps" },
    { name:"c++",level:90,categiory:"Desktop" },
    { name:"Python",level:90,categiory:"Backend" },
    { name:"Java",level:90,categiory:"Backend" },
    { name:"QtCreator",level:80,categiory:"Desktop" },
    { name:"Figma",level:60,categiory:"Design" },
    { name:"Git",level:85,categiory:"Tools" },
    { name:"Bash",level:70,categiory:"Tools" },
    { name:"MySQL",level:80,categiory:"Database" },
    { name:"PostgreSQL",level:75,categiory:"Database" },  
];



export const SkillsSection = () => {
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className=" text-3xl md:text-4xl font-bold mb-12 text-center">
                My<span className="text-primary">Skills</span>
            </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                style={{width:skill.level+"%"}}/>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                    </div>
                        
                    ))}
                </div>
            </div>
    </section> };