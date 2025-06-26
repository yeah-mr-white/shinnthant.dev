import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <main>
            <Navbar />
            <Home />
            <Footer />
        </main>
    );
};

export default App;
