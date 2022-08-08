import { mdiAutorenew, mdiCalendarRange, mdiFilterVariant } from "@mdi/js";
import Icon from "@mdi/react";
import { ButtonPrimary } from "../components/ButtonPrimary";
import { Card } from "../components/Card";
import { CombInput } from "../components/CombInput";
import { MainFrame } from "../components/MainFrame";
import { SectionTitle } from "../components/SectionTitle";


export function Home() {
    return (
        <MainFrame>
            <div>
                <SectionTitle description="Variações do dia" classElement="justify-content-between">
                    <div className="d-flex">
                        <CombInput placeHolder="10/07/2022">
                            <Icon path={mdiCalendarRange}
                                title="User Profile"
                                size={.60}
                            />
                        </CombInput>
                        <ButtonPrimary>
                            <Icon title="Atualizar" size={.60} path={mdiAutorenew}></Icon>
                        </ButtonPrimary>
                        <ButtonPrimary>
                            <Icon title="Filtrar" size={.60} path={mdiFilterVariant}></Icon>
                        </ButtonPrimary>
                    </div>
                </SectionTitle>
            </div>

            <div id="" className="row">
                <div className="col-md-5">
                    <div className="row">
                        <div className="col">
                            <Card height={1}>
                                <div className="card-body">
                                    Customers
                                </div>
                            </Card>
                        </div>
                        <div className="col">
                            <Card height={1}>
                                <div className="card-body">
                                    Revenue
                                </div>
                            </Card>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Card height={1}>
                                <div className="card-body">
                                    Orders
                                </div>
                            </Card>
                        </div>
                        <div className="col">
                            <Card height={1}>
                                <div className="card-body">
                                    Growth
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="col-md-7">
                    <div className="col">
                        <Card height={2}>
                            <div className="card-body">
                                <span>
                                    PROJECTIONS VS ACTUALS
                                </span>
                                <div id="chart"></div>
                            </div>
                        </Card>
                    </div>
                </div>

            </div>





            {/* <div id="title-dashborad" className="d-flex justify-content-start"
                style="margin-bottom: -4px; margin-top: 20px;">
                <div>
                    <h4 style="padding-top: 14px; margin-bottom: -8px; font-weight: 700; font-size: 18px;">Análise de
                        ativos</h4>
                </div>

            </div> */}

            <SectionTitle description="Análise de ativos" classElement="text-left" ><div></div></SectionTitle>

            <div className="row">
                <div className="col-md-8">
                    <Card height={2}>
                        <div className="card-body">
                            <div id="chart_tipo_rendimento"></div>
                        </div>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card height={2}>
                        <div className="card-body"></div>
                    </Card>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">
                    <Card height={2}>
                        <div className="card-body"></div>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card height={2}>
                        <div className="card-body">
                            TOTAL SALES
                            <div id="chart_proporcao"></div>
                        </div>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card height={2}>
                        <div className="card-body"></div>
                    </Card>
                </div>
            </div>



        </MainFrame>
    );
}