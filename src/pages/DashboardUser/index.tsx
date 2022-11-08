import { useContext } from "react";
import { IProfileContext, ProfileContext } from "../../contexts/UserContext";
import Footer from "../../components/Footer";
import HeaderUser from "../../components/HeaderUser";
import Main from "../../components/Main";
import ProfileModal from "../../components/ProfileModal";
import Welcome from "../../components/Welcome";
import { AuthContext } from "../../contexts/AuthContext";

const DashboardUser = () => {
  const {profileUser, isProfileModal} = useContext<IProfileContext>(ProfileContext);
  const {user} = useContext(AuthContext);
  return user ? (
    <>
    {isProfileModal && <ProfileModal/>}
      <HeaderUser />
      <Welcome name={profileUser?.name} />
      <Main/>
      <Footer />
    </>
     ) : (
      <h1>Loading...</h1>
    );
  };
 

export default DashboardUser;