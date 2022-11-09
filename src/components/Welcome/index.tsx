import StyleWelcome from "../../styles/Welcome";

interface IWelcomeProps {
  name: string | undefined;
}

const Welcome = ({ name }: IWelcomeProps) => {
  return (
    <StyleWelcome>
      <h2>BEM VINDO(A), </h2>
      <p> {name?.toUpperCase()}!</p>
    </StyleWelcome>
  );
};

export default Welcome;
