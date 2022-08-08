import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import styled from "styled-components";
import { CombInput } from "./CombInput";


const NavBar = styled.nav`
    margin-left: -24px;
    padding: 0 24px;
    background-color: #ffffff;
    box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);
    min-height: 70px;
    position: fixed;
    top: 0;
    width: 100% !important;
    z-index: 10;
    display: flex;
    align-items: center;

    div {
        display: flex;
        cursor: pointer;
        span {
            margin-top: 7px;
            margin-right: 18px;
            margin-left: -15px;
        }
    }

    @media screen and (max-width: 800px) {
        #nav_permanent {
            width: 100%;
        }
    }

`;


export function TopBar() {
    return (
        <NavBar className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div id="nav_permanent">
                    <span>
                        <Icon path={mdiMenu} size={1}></Icon>
                    </span>
                    <CombInput placeHolder="buscar por...">
                        Buscar
                    </CombInput>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul> */}
                </div>
            </div>
        </NavBar>
    );
}