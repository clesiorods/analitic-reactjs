import { Icon as NavIcon } from '@iconify/react';

import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    background-color: #313a46;
    height: 100vh;
    width: 260px;
    /* transition: .3s all; */
    padding-top: 20px;
    box-shadow: inset -10px 5px 20px rgba(0,0,0,.2);

    * {
        transition: .3s all;
    }

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
        }
    }
    

    ul {
        margin-top: 30px;
        list-style: none;
        font-size: 17px;
        padding: 0px;

        li {
            padding: 8px 14px;
            border-radius: 5px;
            margin-top: 6px;
            cursor: pointer;
            transform: .3s all;
            
            .icon {
                margin-top: -5px;
                margin-right: 12px;
            }

            svg {
                transition: .02s all !important;
            }
        }

        li:hover {
            svg {
                color: rgb(220, 220, 220) !important;
            }
            span {
                color: rgb(220, 220, 220) !important;
            }
            background-color: #303943;
            box-shadow: inset 0px 0px 10px rgba(0,0,0,.1);
        }

        .active {
            background-color: #29313a;
            box-shadow: inset 0px 0px 10px rgba(0,0,0,.1);
            svg {
                color: white !important;
            }
            span {
                color: white !important;
            }
        }
        .active:hover {
            background-color: #29313a;
            box-shadow: inset 0px 0px 10px rgba(0,0,0,.1);
            svg {
                color: white !important;
            }
            span {
                color: white !important;
            }
        }

    }


    a {
        text-decoration: none;
        color: #9a9a9a;
        cursor: pointer;
    }


    .div_menu {
        margin: 24px 16px;

    }


    @media screen and (max-width: 1200px) {
        width: 70px;
        padding-top: 15px;

        #title_alitic {
            opacity: 0;
        }

        #title_an {
            padding-left: 11px;
        }


        .div_menu {
            margin: 10px 0px;
            display: flex;
            justify-content: center;
        }

        .icon {
            margin: 5px 0px !important;
            font-size: 24px !important;
        }


        .nav_text {
            display: none;
        }
    }


    @media screen and (max-width: 800px) {
        width: 0px;
        display: none;
    }
    
`;

export function SideBar() {

    return (
        <Nav>
            <div>
                <h1 className="title logo">
                    <span id="title_an" >An</span>
                    <span id="title_alitic" >alitic</span>
                </h1>
            </div>

            <div className="div_menu" >
                <ul className="">

                    <Link data-bs-toggle="" to="/" aria-expanded="true" aria-controls="sidebarDashboards" className=" ">
                        <li className="active">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil:home-alt" />
                            <span className=" nav_text"> Resumo </span>
                        </li>
                    </Link>

                    <Link to="/ativos" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil:graph-bar" />
                            <span className='nav_text'> Ativos </span>
                        </li>
                    </Link>

                    <Link to="apps-calendar.html" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil:calender" />
                            <span className='nav_text'> Calendar </span>
                        </li>
                    </Link>

                    <Link to="apps-chat.html" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil:comments-alt" />
                            <span className='nav_text'> Chat </span>
                        </li>
                    </Link>

                    <Link data-bs-toggle="" to="#sidebarCrm" aria-expanded="false" aria-controls="sidebarCrm" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil:tachometer-fast" />
                            <span className='nav_text'> CRM </span>
                        </li>
                    </Link>

                    <Link data-bs-toggle="" to="#sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil:store" />
                            <span className='nav_text'> Ecommerce </span>
                        </li>
                    </Link>

                    <Link data-bs-toggle="" to="#sidebarTables" aria-expanded="false" aria-controls="sidebarTables" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil:clipboard-alt" />
                            <span className='nav_text'> Tables </span>
                        </li>
                    </Link>

                    <Link data-bs-toggle="" to="#sidebarMaps" aria-expanded="false" aria-controls="sidebarMaps" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil:location-point" />
                            <span className='nav_text'> Maps </span>
                        </li>
                    </Link>

                    <Link data-bs-toggle="" to="#sidebarMultiLevel" aria-expanded="false" aria-controls="sidebarMultiLevel" className="">
                        <li className="">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil-folder-plus" />
                            <span className='nav_text'> Multi Level </span>
                        </li>
                    </Link>
                </ul>
            </div>

        </Nav>
    );
}