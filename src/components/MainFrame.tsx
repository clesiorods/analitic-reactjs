import styled from "styled-components";


type FrameProps = {
    children: React.ReactNode;
};

const Div = styled.div`
    display: flex;
    color: #6c757d;
`;


export function MainFrame(props: FrameProps) {
    return (
        <Div>{props.children}</Div>
    );
}