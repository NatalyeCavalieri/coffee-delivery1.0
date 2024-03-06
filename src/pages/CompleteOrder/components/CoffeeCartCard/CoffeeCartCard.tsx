import {
  ActionsContainer,
  CoffeeCardCartContainer,
  RemoveButton,
} from "./styles"
import Image from "../../../../../public/coffees/americano.svg"
import { RegularText } from "../../../../components/Typography"
import { QuantityInput } from "../../../../components/QuantityInput"
import { Trash } from "phosphor-react"

export function CoffeeCartCard() {
  return (
    <CoffeeCardCartContainer>
      <div>
        <img src={Image} alt="" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ 9.90</p>
    </CoffeeCardCartContainer>
  )
}
