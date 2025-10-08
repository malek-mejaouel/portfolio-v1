import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from"../components/StarBackground";
import { Navbar } from "../components/Navbar";
export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
        {/*ici n7otou Theme Toogle*/}
        <ThemeToggle />
        {/*ici Background Effects*/}
        <StarBackground/>
        {/*lena navbar */}
        <Navbar/>
        {/* Main content*/}

        {/* Footer */}
    </div>;
}