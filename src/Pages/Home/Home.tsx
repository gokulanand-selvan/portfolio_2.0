import Navbar from "../../components/navbar/Navbar";
import ProfileIntro from "../../components/profileIntro/ProfileIntro";
import ProfileContent from "../../layouts/content/ProfileContent";

function Home() {
  return (
    <div>
      <Navbar />
      <ProfileIntro />
      <ProfileContent />
    </div>
  );
}

export default Home;
