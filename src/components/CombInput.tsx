import { Button, Form, InputGroup } from "react-bootstrap";
import styled from "styled-components"

const CombInputStyled = styled.div`
    color: white;
`;

export function CombInput() {
    return (
        <CombInputStyled className="input-group">
            <input type="text" className="form-control form-control-light" id="dash-daterange" />
            <label htmlFor="dash-daterange" className="input-group-text btn-primary btn text-white" >
                <i className="btn-icon"><img src="./assets/icons/calendar-month.svg" alt=""/></i>
            </label>
        </CombInputStyled >

    );
}