import Logo from '../../img/logo.png'
// import btnMenu from '../../img/btnMenuMobile.png'
import { LinkSecundary } from '../../styles/Links'
import StyleHeader from '../../styles/HeaderUser'
import { ButtonPurple } from '../../styles/Buttons'
import { useContext } from 'react'
import { IUserContext, UserContext } from '../../contexts/UserContext'

const HeaderUser = () => {

    const {isProfileModal, setProfileModal} = useContext<IUserContext>(UserContext)

    function logout () {
        window.localStorage.clear()
    }

    return (
        <StyleHeader>
            <img src={Logo} alt="Logo Kenzinho" />
            <div className="rightHeader">
                <ButtonPurple onClick={() => setProfileModal(!isProfileModal)} className='buttonHeaderDesktop'>Perfil</ButtonPurple>
                <LinkSecundary to={'/'} className='buttonHeaderDesktop' onClick={logout}>Logout</LinkSecundary>
            </div>
        </StyleHeader>
    )
}

export default HeaderUser