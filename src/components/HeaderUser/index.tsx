import Logo from '../../img/logo.png'
// import btnMenu from '../../img/btnMenuMobile.png'
import { LinkPrimary, LinkSecundary } from '../../styles/Links'
import StyleHeader from '../../styles/HeaderUser'

const HeaderUser = () => {

    function logout () {
        window.localStorage.clear()
    }

    return (
        <StyleHeader>
            <img src={Logo} alt="Logo Kenzinho" />
            <div className="rightHeader">
                <LinkPrimary to={'/'} className='buttonHeaderDesktop'>Perfil</LinkPrimary>
                <LinkSecundary to={'/'} className='buttonHeaderDesktop' onClick={logout}>Logout</LinkSecundary>
            </div>
        </StyleHeader>
    )
}

export default HeaderUser