
import { ArrowDown } from "lucide-react";
export const HeroSection = () => (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                    <span className="text-primary opcaity-0 animate-fade-in-delay-1">Malek </span>
                    <span className="text-gradient ml-2 opcaity-0 animate-fade-in-delay-2">Mejaouel</span>
                </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                I’m an IT Engineering student at ESPRIT,skilled in multiple programming languages, with hands-on experience through academic projects,freelancing, and internships.
                I aspire to grow as a software and cloud engineer, building innovative and scalable solutions.
            </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button">
                    view my work
                </a>
            </div>
        </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5 text-primary " />
        </div>
    </section>
);