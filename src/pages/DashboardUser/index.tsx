import { useContext } from "react";
import Footer from "../../components/Footer";
import HeaderUser from "../../components/HeaderUser";
import Main from "../../components/Main";
import Welcome from "../../components/Welcome";
import { IUserContext, UserContext } from "../../contexts/UserContext";

const DashboardUser = () => {
  const {profileUser} = useContext<IUserContext>(UserContext)

  return (
    <>
      <HeaderUser />
      <Welcome name={profileUser?.name} />
      <Main/>
      <Footer />
    </>
  );
};

export default DashboardUser;