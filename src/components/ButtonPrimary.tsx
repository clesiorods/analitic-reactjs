import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: #727cf5 !important;
    border: none;
    border-radius: 0.15rem;
    box-shadow: 0 2px 6px 0 rgb(114 124 245 / 50%);

    :hover {
        background-color: #5f69cf !important;
    }
`;

type ButtonProps = {
    children: React.ReactNode
}

export function ButtonPrimary(props: ButtonProps) {
    return(
        <Button className="ms-2 btn-primary btn text-white input-group-text">{props.children}</Button>
    );
}