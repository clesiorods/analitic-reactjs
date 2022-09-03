import React from "react";
import styled from "styled-components";


const Title = styled.div`
    display: flex;
    margin-bottom: -10px;
    margin-top: 10px;

    h4 {
        margin-bottom: 00px; 
        padding-top: 10px; 
        padding-bottom: 8px; 
        font-weight: 700; 
        font-size: 18px;
        white-space: nowrap;
    }
`;


type TitleProps = {
    children: React.ReactNode
    classElement: string
    description: string
}


export function SectionTitle(props: TitleProps) {
    return (
        <Title className={`${props.classElement}`}>
            <div className="label">
                <h4>{props.description}</h4>
            </div>
            {props.children}
        </Title>
    );
}