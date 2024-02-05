import About from "../../components/about/About";
import Navbar from "../../components/navbar/Navbar";
import ProfileIntro from "../../components/profileIntro/ProfileIntro";

function Home() {
  return (
    <div>
      <Navbar />
      <ProfileIntro />
      <About />
    </div>
  );
}

export default Home;
