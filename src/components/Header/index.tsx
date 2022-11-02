import Logo from '../../img/logo.png'
import { LinkSecundary } from '../../styles/Links'
import StyleHeader from '../../styles/Header'

const Header = () => {
    return (
        <StyleHeader>
            <img src={Logo} alt="Logo Kenzinho" />
            <div className="rightHeader">
                <LinkSecundary to={'/'} className='buttonHeaderDesktop'>Logout</LinkSecundary>
            </div>
        </StyleHeader>
    )
}

export default Header