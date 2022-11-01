import Logo from '../../img/logo.png'
import { LinkPrimary, LinkSecundary } from '../../styles/Links'
import StyleHeader from '../../styles/Header'

const Header = () => {
    return (
        <StyleHeader>
            <img src={Logo} alt="Logo Kenzinho" />
            <div className="rightHeader">
                <LinkPrimary to={'/'} className='buttonHeaderDesktop'>Perfil</LinkPrimary>
                <LinkSecundary to={'/'} className='buttonHeaderDesktop'>Logout</LinkSecundary>
            </div>
        </StyleHeader>
    )
}

export default Header