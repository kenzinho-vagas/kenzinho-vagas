import Footer from "../../components/Footer";
import HeaderUser from "../../components/HeaderUser";
import Main from "../../components/Main";
import Welcome from "../../components/Welcome";

const DashboardUser = () => {
  const name: string = "Gabriela";
  return (
    <>
      <HeaderUser />
      <Welcome name={name} />
      <Main/>
      <Footer />
    </>
  );
};

export default DashboardUser;