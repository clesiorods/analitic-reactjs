
import { Card } from "../components/Card";
import { MainFrame } from "../components/MainFrame";
import { SectionTitle } from "../components/SectionTitle";


export function Actives() {
    return (
        <MainFrame>
            <SectionTitle description="Meus Ativos" classElement="justify-content-between">
                <div className="d-flex">
                </div>
            </SectionTitle>
            <Card height={2} ><div></div></Card>
        </MainFrame>
    );
}