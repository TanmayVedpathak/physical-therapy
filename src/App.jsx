import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  matchRoutes,
} from "react-router-dom";
import {
  About,
  Appointment,
  Blog,
  ContactUs,
  Feature,
  Home,
  NotFound404,
  Services,
  Team,
  Testimonial,
} from "./pages";
import { BlueHeader, Footer, Navbar, ScrollToTop } from "./components";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const routesConfig = [
  { path: "/" },
  { path: "/about" },
  { path: "/services" },
  { path: "/contact" },
  { path: "/appointment" },
  { path: "/feature" },
  { path: "/blog" },
  { path: "/team" },
  { path: "/testimonial" },
];

function AppRoutes() {
  const location = useLocation();
  const isKnownRoute = matchRoutes(routesConfig, location);

  return (
    <>
      {isKnownRoute && <BlueHeader />}
      {isKnownRoute && <Navbar />}
      {isKnownRoute && <ScrollToTop />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      {isKnownRoute && <Footer />}
    </>
  );
}

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
