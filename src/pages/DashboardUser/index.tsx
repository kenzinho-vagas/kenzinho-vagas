import Filters from "../../components/Filters";
import Footer from "../../components/Footer";
import HeaderUser from "../../components/HeaderUser";
import JobCards from "../../components/JobCards";
import NewJobCards from "../../components/NewJobCards";
import Welcome from "../../components/Welcome";

const DashboardUser = () => {
  const name: string = "Gabriela";
  return (
    <>
      <HeaderUser />
      <Welcome name={name} />
      <JobCards />
      <Filters />
      <NewJobCards />
      <Footer />
    </>
  );
};

export default DashboardUser;
