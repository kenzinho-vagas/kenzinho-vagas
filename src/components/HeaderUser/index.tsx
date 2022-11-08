import Logo from "../../img/logo.png";
import StyleHeader from "../../styles/HeaderUser";
import { ButtonPurple, ButtonWhite } from "../../styles/Buttons";
import { useContext } from "react";
import { IProfileContext, ProfileContext} from "../../contexts/UserContext";
import { JobContext } from "../../contexts/JobContextDU";
import { useNavigate } from "react-router-dom";


const HeaderUser = () => {
    const navigate = useNavigate()
    const {isProfileModal, setProfileModal, setProfileUser,} = useContext<IProfileContext>(ProfileContext);
    const {setSavedJobs} = useContext(JobContext)

    function logout () {
        window.localStorage.clear();
        setProfileUser(null);
        setSavedJobs([]);
        navigate("/")
    }

    return (
        <StyleHeader>
            <img src={Logo} alt="Logo Kenzinho" />
            <div className="rightHeader">
                <ButtonPurple onClick={() => setProfileModal(!isProfileModal)} className='buttonHeaderDesktop'>Perfil</ButtonPurple>
                <ButtonWhite className='buttonHeaderDesktop' onClick={logout}>Logout</ButtonWhite>
            </div>
        </StyleHeader>
    )
}

export default HeaderUser;