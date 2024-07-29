import Header from "../sections/Header.jsx";
import AboutMe from "../sections/AboutMe.jsx";
import Projects from "../sections/Projects.jsx";
import ContactMe from "../sections/ContactMe.jsx";

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
