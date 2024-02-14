import About from "../../layouts/content/about/About";
import ConentNavbar from "../../layouts/content/contentNavbar/ConentNavbar";

function ProfileContent() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", background: "#ffff" }}
    >
      <ConentNavbar />
      <About />
    </div>
  );
}

export default ProfileContent;
