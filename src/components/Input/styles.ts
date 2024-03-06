import styled from "styled-components";

export const InputStyleContainer = styled.input`
height: 2.625rem;
border-radius: 4px;
border: 1px solid ${({theme}) => theme.colors["base-button"]};
background-color: ${({theme})=> theme.colors["base-input"]};
color: ${({theme})=> theme.colors["base-text"]};
transition: .4s;

&:focus{
  border-color: ${({theme})=> theme.colors["brand-yellow-dark"]};
}

font-size: 0.75rem;
padding: 0 0.75rem;

&::placeholder{
  color: ${({theme})=> theme.colors["base-label"]};
}
`