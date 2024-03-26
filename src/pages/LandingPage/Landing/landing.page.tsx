import { Header } from "../../../components/header/header.component";
import "./landing.css";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="landing-background">
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default LandingPage;
