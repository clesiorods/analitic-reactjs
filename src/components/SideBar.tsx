import styled from "styled-components";

const Nav = styled.nav`
    background-color: #313a46;
    height: 100vh;
    width: 250px;
    transition: .3s all;
    transition-timing-function: ease-out;
    padding-top: 20px;

    h1 {
        font-size: 35px;
        text-align: center;

        span#title_an {
            /* padding-left: 11px; */
            font-weight: 700;
            background: -webkit-linear-gradient(45deg, rgb(77, 213, 255), rgb(191, 123, 255));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        span#title_alitic {
            transition: .4s all; 
            /* opacity: 0; */
            color: white;
            opacity: 1;
        }
    }
`;

export function SideBar() {
    return (
        <Nav>
            <h1 className="title logo">
                <span id="title_an">An</span>
                <span id="title_alitic">alitic</span>
            </h1>
        </Nav>
    );
}