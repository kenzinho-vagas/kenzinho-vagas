import styled from "styled-components";

const HeaderUser = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  box-shadow: 1px 1px 10px 1px var(--color-secundary);

  .rightHeader {
    display: flex;
    gap: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    .rightHeader {
      gap: 2rem;
    }
  }
`;

export default HeaderUser;
