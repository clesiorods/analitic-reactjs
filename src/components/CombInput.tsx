import { mdiCalendarRange } from "@mdi/js";
import Icon from "@mdi/react";
import styled from "styled-components"
import { ButtonPrimary } from "./ButtonPrimary";

const CombInputStyled = styled.div`
    color: white;

    input {
        width: 200px !important;
        background-color: #e8eaf1 !important;
        border-color: #f1f3fa !important;
        color: #6c757d !important;
        border-color: #e8eaf1 !important;
    }

    button {
        margin: 0 !important;
    }
`;

export function CombInput() {
    return (
        <CombInputStyled className="input-group">
            <input type="text" className="form-control form-control-light" id="dash-daterange" />

            <ButtonPrimary>
                <Icon path={mdiCalendarRange}
                    title="User Profile"
                    size={.55}
                />
            </ButtonPrimary>
        </CombInputStyled >

    );
}