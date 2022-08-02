import React from "react";
import styled from "styled-components";

type ContentProps = {
    children: React.ReactNode;
}

const Div = styled.div`
    background-color: #f8f9fd;
    padding: 24px;
    padding-top: 90px;
    overflow-y: scroll;
    max-height: 100vh;
    width: 100%;
`;

export function Content(props: ContentProps) {
    return (
        <Div>{props.children}</Div>
    );
}