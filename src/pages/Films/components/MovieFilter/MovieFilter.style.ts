import colors from "@/styles/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 96px;
    margin-bottom: 75px;
    margin-left: 100px;
`;

export const ListBox = styled.div`
    color: ${colors.black};
    height: 44px;
    padding: 0 16px;
    border: 1px solid ${colors.black};
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`;