import styled from "styled-components";

type CardProps = {
    children: React.ReactNode;
    height: number;
}


export function CardToggle(props: CardProps) {


    const CardStyled = styled.div`
        margin-top: 24px;
        height: ${(180 * props.height) + ((props.height -1) * 24)}px;
        border: none;
        border-radius: 5px;
        background-color: #ffffff;
        box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.20);
        transition: .3s all;
        :hover {
            box-shadow: 0px 0px 30px 0px rgba(150, 156, 166, 0.35);
        }

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