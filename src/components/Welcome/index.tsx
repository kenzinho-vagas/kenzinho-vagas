import StyleWelcome from "../../styles/Welcome"

interface IWelcomeProps {
    name: string | undefined;
}

const Welcome = ({ name } :IWelcomeProps) => {
    return (
        <StyleWelcome>
            <h2>BEM VINDO(A), {name?.toUpperCase()}!</h2>
        </StyleWelcome>
    )
}

export default Welcome;