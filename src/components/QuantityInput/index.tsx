import { IconWrapper, QuantityInputContainer } from "./styles";
import {Minus, Plus } from 'phosphor-react'

interface QuantityInputProps {
  size?: "medium" | "small"
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function QuantityInput({ size="medium", onIncrease, onDecrease, quantity }: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
        <Minus weight="fill" size={14} />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus weight="fill" size={14} />
      </IconWrapper>
    </QuantityInputContainer>
  )
}