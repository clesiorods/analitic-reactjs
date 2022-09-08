
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../components/Card";
import { CombInput } from "../components/CombInput";
import { DonutGraphic } from "../components/DonutGraphic";
import { MainFrame } from "../components/MainFrame";
import { SectionTitle } from "../components/SectionTitle";
import TabelaSample from "../components/TabelaSample";

const Table = styled.table`
    tbody {
        tr {
            td {
                a {
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 700;
                    line-height: none solid;
                    color:#6c757d!important;
                    white-space: nowrap;
                    word-spacing: 0px;
                }

                h5 {
                    text-decoration: none;
                    font-size: 14px;
                    line-height: none solid;
                    color:#6c757d!important;
                    white-space: nowrap;
                    word-spacing: 0px;
                }
            }

            td.td_w {
                width: 90px;
            }
        }
        
    }
`;

export function Actives() {
    return (
        <MainFrame>
            <SectionTitle description="Meus Ativos" classElement="justify-content-between">
                <div className="d-flex">
                    <CombInput placeHolder="buscar por ativos...">
                        <Icon path={mdiMagnify}
                            title="User Profile"
                            size={.60}
                        />
                    </CombInput>
                </div>
            </SectionTitle>
            <div className="row">
                <div className="col-md-12">
                    <Card height={1} >
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="div_chart">
                                        <DonutGraphic />
                                    </div>
                                </div>
                                <div className="col-md-8">

                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Card height={1} >
                        <div className="card-body">
                            <h4>
                                Ativos
                            </h4>

                            <div>
                                <TabelaSample></TabelaSample>
                            </div>

                            <div className="table-responsive">
                                <Table className="table table-centered table-nowrap table-hover mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h5 className="font-14 my-1"><Link to={'#'} className="text-body">Coffee detail page - Main Page</Link></h5>
                                                <span className="text-muted font-13">Due in 3 days</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Status</span>
                                                <span className="badge badge-warning-lighten">In-progress</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Assigned to</span>
                                                <h5 className="font-14 mt-1 fw-normal">Logan R. Cohn</h5>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Total time spend</span>
                                                <h5 className="font-14 mt-1 fw-normal">3h 20min</h5>
                                            </td>
                                            <td className="table-action td_w">
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-pencil"></i></Link>
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 className="font-14 my-1"><Link to={'#'} className="text-body">Coffee detail page - Main Page</Link></h5>
                                                <span className="text-muted font-13">Due in 3 days</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Status</span>
                                                <span className="badge badge-warning-lighten">In-progress</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Assigned to</span>
                                                <h5 className="font-14 mt-1 fw-normal">Logan R. Cohn</h5>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Total time spend</span>
                                                <h5 className="font-14 mt-1 fw-normal">3h 20min</h5>
                                            </td>
                                            <td className="table-action td_w">
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-pencil"></i></Link>
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 className="font-14 my-1"><Link to={'#'} className="text-body">Coffee detail page - Main Page</Link></h5>
                                                <span className="text-muted font-13">Due in 3 days</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Status</span>
                                                <span className="badge badge-warning-lighten">In-progress</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Assigned to</span>
                                                <h5 className="font-14 mt-1 fw-normal">Logan R. Cohn</h5>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Total time spend</span>
                                                <h5 className="font-14 mt-1 fw-normal">3h 20min</h5>
                                            </td>
                                            <td className="table-action td_w">
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-pencil"></i></Link>
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 className="font-14 my-1"><Link to={'#'} className="text-body">Coffee detail page - Main Page</Link></h5>
                                                <span className="text-muted font-13">Due in 3 days</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Status</span>
                                                <span className="badge badge-warning-lighten">In-progress</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Assigned to</span>
                                                <h5 className="font-14 mt-1 fw-normal">Logan R. Cohn</h5>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Total time spend</span>
                                                <h5 className="font-14 mt-1 fw-normal">3h 20min</h5>
                                            </td>
                                            <td className="table-action td_w">
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-pencil"></i></Link>
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 className="font-14 my-1"><Link to={'#'} className="text-body">Coffee detail page - Main Page</Link></h5>
                                                <span className="text-muted font-13">Due in 3 days</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Status</span>
                                                <span className="badge badge-warning-lighten">In-progress</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Assigned to</span>
                                                <h5 className="font-14 mt-1 fw-normal">Logan R. Cohn</h5>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Total time spend</span>
                                                <h5 className="font-14 mt-1 fw-normal">3h 20min</h5>
                                            </td>
                                            <td className="table-action td_w">
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-pencil"></i></Link>
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 className="font-14 my-1"><Link to={'#'} className="text-body">Drinking bottle graphics</Link></h5>
                                                <span className="text-muted font-13">Due in 27 days</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Status</span>
                                                <span className="badge badge-danger-lighten">Outdated</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Assigned to</span>
                                                <h5 className="font-14 mt-1 fw-normal">Jerry F. Powell</h5>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Total time spend</span>
                                                <h5 className="font-14 mt-1 fw-normal">12h 21min</h5>
                                            </td>
                                            <td className="table-action td_w">
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-pencil"></i></Link>
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 className="font-14 my-1"><Link to={'#'} className="text-body">App design and development</Link></h5>
                                                <span className="text-muted font-13">Due in 7 days</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Status</span>
                                                <span className="badge badge-success-lighten">Completed</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Assigned to</span>
                                                <h5 className="font-14 mt-1 fw-normal">Scot M. Smith</h5>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Total time spend</span>
                                                <h5 className="font-14 mt-1 fw-normal">78h 05min</h5>
                                            </td>
                                            <td className="table-action td_w">
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-pencil"></i></Link>
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 className="font-14 my-1"><Link to={'#'} className="text-body">Poster illustation design</Link></h5>
                                                <span className="text-muted font-13">Due in 5 days</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Status</span>
                                                <span className="badge badge-warning-lighten">In-progress</span>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Assigned to</span>
                                                <h5 className="font-14 mt-1 fw-normal">John P. Ritter</h5>
                                            </td>
                                            <td>
                                                <span className="text-muted font-13">Total time spend</span>
                                                <h5 className="font-14 mt-1 fw-normal">26h 58min</h5>
                                            </td>
                                            <td className="table-action td_w">
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-pencil"></i></Link>
                                                <Link to={'#'} className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </MainFrame>
    );
}