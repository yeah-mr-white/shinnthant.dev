import Header from "../components/sections/Header.jsx";
import AboutMe from "../components/sections/AboutMe.jsx";
import Projects from "../components/sections/Projects.jsx";
import ContactMe from "../components/sections/ContactMe.jsx";

const Home = () => {
    return (
        <section className="font-firaCode">
            <Header />
            <Projects />
            <AboutMe />
            <ContactMe />
        </section>
    );
};

export default Home;
