import colors from "@/styles/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FilterWrapper = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 96px;
    margin-bottom: 75px;
    margin-left: 100px;
`;

export const ListBox = styled.div<{$active:boolean}>`
    color: ${colors.black};
    background-color: ${({$active}) => ($active ? colors.purple : "transparent")};
    color: ${({$active}) => ($active ? colors.white : colors.black)};
    font-weight: ${({$active}) => ($active ? 600 : 500)};
    border: ${({$active}) => ($active ? "none" : `1px solid ${colors.black}`)};
    height: 44px;
    padding: 0 16px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;

`;

export const MovieItemWrapper = styled.div`
    display: grid;
    padding: 0 100px;
    flex-wrap: wrap;
    justify-items: start;
    grid-template-columns: repeat(4, 352px);
    row-gap: 72px;
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin: 4.875rem;
    margin-bottom: 12.5rem;
`;

export const PageNum= styled.div<{$active : boolean}>`
    display: flex;
    font-size: 1rem;
    color: ${colors.black};
    color: ${({$active})=> $active ? `colors.black` : "#939393"};
    font-weight: ${({$active})=> $active ? 600 : 500};
    gap: 2rem;
`;