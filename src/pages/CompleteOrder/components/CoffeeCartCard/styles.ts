import styled from "styled-components";

export const CoffeeCardCartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({theme}) => theme.colors["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

 > p{
    font-weight: 700;
    align-self: flex-start;
  }

>div{
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img{
    width: 4rem;
    height: 4rem;
  }
}
`

export const ActionsContainer = styled.div`
margin-top: 0.5rem;
height: 2rem;
display: flex;
align-items: center;
gap: 0.5rem;

>div{
  max-width: 4.5rem;
  height: 100%;
}
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: 0.75rem;
  height: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }
`