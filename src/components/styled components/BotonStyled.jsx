import styled from "styled-components";

const NewBoton = styled.button`
  background-color: ${(props) => props.$bg || "#6bfaff"};
  color: ${(props) => props.$textColor || "#000"};

  padding: 5px 10px;
  margin: 2px;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.$hoverTextColor || "#fff"};
    background-color: ${(props) => props.$hoverBg || "#001e33"};
  }
`;


function BotonStyled({ titulo, bg, textColor, hoverBg, hoverTextColor, ...props }) {
  return <NewBoton
    bg={bg}
    textColor={textColor}
    hoverBg={hoverBg}
    hoverTextColor={hoverTextColor}
    {...props}>
    {titulo}</NewBoton>;
}

export default BotonStyled;