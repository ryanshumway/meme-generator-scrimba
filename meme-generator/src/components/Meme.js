import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
`

const StyledInput = styled.input`
    width: 100%;
    border-radius: 8px;
    border: 2px solid #00147A;
    padding: 6px;
    transition: all ease-in-out .2s;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px 4px #D1D9FF;
    }
`

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 12px 0px;
    gap: 12px;
`

const StyledButton = styled.button`
    max-width: 224px;
    padding: 12px 20px;
    border-radius: 24px;
    outline: none;
    border: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #D1D9FF;
    transition: all ease-in-out .2s;
    &:hover {
        background-color: #E0E6FF;
        scale: 1.03;
    }
    &:active {
        background-color: #C2CCFF;
        scale: 1;
    }
`

export default function Meme() {
    return (
        <StyledWrapper>
            <InputWrapper>
                <StyledInput for="Searching" placeholder="Top Row" />
                <StyledInput for="Searching" placeholder="Bottom Row" />
            </InputWrapper>
            <StyledButton>
                Get a New Meme Image
            </StyledButton>
        </StyledWrapper>
    )
}