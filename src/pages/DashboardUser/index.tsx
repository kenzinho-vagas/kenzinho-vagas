import { useContext } from "react";
import { IProfileContext, ProfileContext } from "../../contexts/UserContext";
import Footer from "../../components/Footer";
import HeaderUser from "../../components/HeaderUser";
import Main from "../../components/Main";
import ProfileModal from "../../components/ProfileModal";
import Welcome from "../../components/Welcome";

const DashboardUser = () => {
  const {profileUser, isProfileModal} = useContext<IProfileContext>(ProfileContext)
  
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