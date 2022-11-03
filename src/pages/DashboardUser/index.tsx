import { useContext } from "react";
import Footer from "../../components/Footer";
import HeaderUser from "../../components/HeaderUser";
import Main from "../../components/Main";
import ProfileModal from "../../components/ProfileModal";
import Welcome from "../../components/Welcome";
import { IUserContext, UserContext } from "../../contexts/UserContext";

const DashboardUser = () => {
  const {profileUser, isProfileModal} = useContext<IUserContext>(UserContext)

  return (
    <>
    {isProfileModal && <ProfileModal/>}
      <HeaderUser />
      <Welcome name={profileUser?.name} />
      <Main/>
      <Footer />
    </>
  );
};

export default DashboardUser;