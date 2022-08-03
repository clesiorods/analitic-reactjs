import styled from "styled-components";

type CardProps = {
    children: React.ReactNode
}

const CardStyled = styled.div`
    margin-top: 24px;
    min-height: 180px;
    border: none;
    background-color: #ffffff;
    box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);
    transition: .3s all;
    :hover {
        box-shadow: 0px 0px 30px 0px rgba(150, 156, 166, 0.316);
    }
`;

export function Card(props: CardProps) {
    return(
        <CardStyled>{props.children}</CardStyled>
    );
}