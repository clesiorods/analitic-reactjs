import { mdiCalendarRange, mdiFilter, mdiRefresh } from "@mdi/js";
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
                <SectionTitle description="Análise de Ativos" classElement="justify-content-between">
                    <div className="d-flex">
                        <CombInput />
                        <ButtonPrimary>
                            <Icon title="Atualizar" size={.55} path={mdiRefresh}></Icon>
                        </ButtonPrimary>
                        <ButtonPrimary>
                            <Icon title="Filtrar" size={.55} path={mdiFilter}></Icon>
                        </ButtonPrimary>
                    </div>
                </SectionTitle>
            </div>
            <Card><div>OIeee</div></Card>
            <Card><div>OIeee</div></Card>
            <Card><div>OIeee</div></Card>
            <Card><div>OIeee</div></Card>
        </MainFrame>
    );
}