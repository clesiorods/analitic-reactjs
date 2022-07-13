import { Container } from "../../components/Container";
import { Sidebar } from "../../components/Sidebar";

export function Dashborad() {
    return(
        <div className="d-flex">
            <Sidebar/>
            <Container></Container>
        </div>
    )
}