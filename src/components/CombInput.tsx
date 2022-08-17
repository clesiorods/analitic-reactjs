
import styled from "styled-components"
import { ButtonPrimary } from "./ButtonPrimary";

const CombInputStyled = styled.div`
    color: white;
    height: 38px;

    input {
        width: 210px !important;
        background-color: #e8eaf1 !important;
        border-color: #f1f3fa !important;
        color: #6c757d !important;
        border-color: #e8eaf1 !important;
    }

    button {
        margin: 0 !important;
    }


    @media screen and (max-width: 800px) {
        input {
            display: none;
        }
    }
`;

type CombProps = {
    placeHolder: string;
    children: React.ReactNode;
}

export function CombInput(props: CombProps) {
    return (
        <CombInputStyled className="input-group search-group">
            <input type="text" placeholder={props.placeHolder} className="form-control form-control-light" id="dash-daterange" />

            <ButtonPrimary>
                {props.children}
            </ButtonPrimary>
        </CombInputStyled >

    );
}