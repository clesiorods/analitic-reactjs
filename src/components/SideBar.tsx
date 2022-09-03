import { Icon as NavIcon } from '@iconify/react';

import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    background-color: #313a46;
    height: 100vh;
    width: 280px;
    /* transition: .3s all; */
    padding-top: 20px;
    box-shadow: inset -20px 5px 20px rgba(0,0,0,.1);

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
        font-size: 16px;
        padding: 0px;

        li {
            padding: 10px 12px;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 4px;
            
            .icon {
                margin-top: -5px;
                margin-right: 12px;
            }
        }

        li:hover {
            filter: brightness(1.5);
        }

        .teste {
            background-color: #232931;
        }

    }


    a {
        text-decoration: none;
        color: #6c757d;
    }


    .div_menu {
        margin: 24px 20px;

    }


    .active {
        color: white;
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
            font-size: 20px !important;
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

                    <li className="teste">
                        <Link data-bs-toggle="" to="#sidebarDashboards" aria-expanded="true" aria-controls="sidebarDashboards" className=" ">
                            <NavIcon style={{ fontSize: '18px' }} className="active icon" icon="uil:home-alt" />
                            <span className="active nav_text"> Dashboards </span>
                        </Link>
                    </li>

                    <li className="">
                        <Link to="apps-calendar.html" className="">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil:calender" />
                            <span className='nav_text'> Calendar </span>
                        </Link>
                    </li>

                    <li className="">
                        <Link to="apps-chat.html" className="">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil:comments-alt" />
                            <span className='nav_text'> Chat </span>
                        </Link>
                    </li>

                    <li className="">
                        <Link data-bs-toggle="" to="#sidebarCrm" aria-expanded="false" aria-controls="sidebarCrm" className="">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil:tachometer-fast" />
                            <span className='nav_text'> CRM </span>
                        </Link>
                    </li>

                    <li className="">
                        <Link data-bs-toggle="" to="#sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" className="">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil:store" />
                            <span className='nav_text'> Ecommerce </span>
                        </Link>
                    </li>

                    <li className="">
                        <Link data-bs-toggle="" to="#sidebarTables" aria-expanded="false" aria-controls="sidebarTables" className="">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil:clipboard-alt" />
                            <span className='nav_text'> Tables </span>
                        </Link>
                    </li>

                    <li className="">
                        <Link data-bs-toggle="" to="#sidebarMaps" aria-expanded="false" aria-controls="sidebarMaps" className="">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil:location-point" />
                            <span className='nav_text'> Maps </span>
                        </Link>
                    </li>

                    <li className="">
                        <Link data-bs-toggle="" to="#sidebarMultiLevel" aria-expanded="false" aria-controls="sidebarMultiLevel" className="">
                            <NavIcon style={{ fontSize: '18px' }} className=" icon" icon="uil-folder-plus" />
                            <span className='nav_text'> Multi Level </span>
                        </Link>
                    </li>
                </ul>
            </div>

        </Nav>
    );
}