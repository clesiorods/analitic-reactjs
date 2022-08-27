import styled from "styled-components";

type CardProps = {
    children: React.ReactNode;
    height: number;
}


export function Card(props: CardProps) {


    const CardStyled = styled.div`
        margin-top: 24px;
        min-height: ${(180 * props.height) + ((props.height -1) * 24)}px;
        border: none;
        background-color: #ffffff;
        box-shadow: -5px 5px 35px 0px rgba(154, 161, 171, 0.15);
        transition: .3s all;


        .card-body {
            height: 100%;
            /* background-color: rgba(150, 156, 166, 0.35); */
        }

        .div_chart {
            height: calc(100% - 24px);
        }
    `;


    return(
        <CardStyled>{props.children}</CardStyled>
    );
}