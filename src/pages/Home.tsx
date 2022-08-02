import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { Content } from "../components/Content";
import { MainFrame } from "../components/MainFrame";
import { SideBar } from "../components/SideBar";
import { TopBar } from "../components/TopBar";


export function Home() {
    return (
        <MainFrame>
            <SideBar />
            <Content>
                <TopBar />
                <Card><div>OIeee</div></Card>
                <Card><div>OIeee</div></Card>
                <Card><div>OIeee</div></Card>
                <Card><div>OIeee</div></Card>
                <Card><div>OIeee</div></Card>
                <Card><div>OIeee</div></Card>

            </Content>
        </MainFrame>
    );
}