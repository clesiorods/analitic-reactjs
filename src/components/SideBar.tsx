import styled from "styled-components";

const Nav = styled.nav`
    background-color: #313a46;
    height: 100vh;
    width: 260px;
    transition: .3s all;
    transition-timing-function: ease-out;
`;

export function SideBar() {
    return(
        <Nav></Nav>
    );
}