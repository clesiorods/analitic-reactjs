import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import styled from "styled-components";
import { CombInput } from "./CombInput";


const NavBar = styled.nav`
    margin-left: -24px;
    padding: 0px 24px 0 24px;
    background-color: #ffffff;
    box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);
    min-height: 70px;
    position: fixed;
    top: 0;
    width: 100% !important;
    z-index: 10;
    display: flex;
    align-items: center;
    transition: .3s all;



    h1 {
        margin-left: -50px;
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
        }
    }



    div {
        display: flex;
        cursor: pointer;
        span.span_menu_icon {
            margin-top: 7px;
            margin-right: 18px;
            margin-left: -5px;
        }
    }


    #div_logo_topBar {
        width: 100%;
        display: flex;
        justify-content: center;
        /* padding-top: 0; */
    }
    

    @media screen and (max-width: 800px) {
        /* #nav_permanent {
            width: 100%;
        } */
        background-color: #313a46;
        padding-top: 10px;
        min-height: 60px;

        
        .search-group {
            display: none;
        }

    }


    @media screen and (min-width: 800px) {
        #div_logo_topBar {
            display: none;
        }
    }
`;


export function TopBar() {
    return (
        <NavBar className="navbar navbar-expand-lg navbar-light">
            <div className="w-100">
                <div id="nav_permanent">
                    <span className="span_menu_icon">
                        <Icon path={mdiMenu} size={1}></Icon>
                    </span>
                    <CombInput placeHolder="buscar por...">
                        Buscar
                    </CombInput>
                </div>

                <div id="div_logo_topBar">
                    <h1 className="title logo">
                        <span id="title_an" >An</span>
                        <span id="title_alitic" >alitic</span>
                    </h1>
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