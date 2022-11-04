import { useContext } from "react";
import Footer from "../../components/Footer";
import HeaderUser from "../../components/HeaderUser";
import Main from "../../components/Main";
import ProfileModal from "../../components/ProfileModal";
import Welcome from "../../components/Welcome";
import { IProfileContext, ProfileContext } from "../../contexts/UserContext";

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