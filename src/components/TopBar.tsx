import { Link } from "react-router-dom";
import styled from "styled-components";


const Header = styled.header`
    padding: 0 24px;
    background-color: #ffffff;
    box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);
    min-height: 70px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 20;
`;

export function TopBar() {
    return (
        <Header>
            TopBar

            <Link to="/login">Sair</Link>

        </Header>
    );
}