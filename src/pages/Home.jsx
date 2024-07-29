import Hero from "../sections/Hero.jsx";
import AboutMe from "../sections/AboutMe.jsx";
import Projects from "../sections/Projects.jsx";
import ContactMe from "../sections/ContactMe.jsx";

const Home = () => {
    return (
        <section>
            <Hero />
            <Projects />
            <AboutMe />
            <ContactMe />
        </section>
    );
};

export default Home;
