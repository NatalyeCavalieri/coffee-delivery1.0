import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5

export function ConfirmationSection(){
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal
  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCardTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de items</RegularText>
        <RegularText>R$ {formattedItemsTotal} </RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice} </RegularText>
      </div>
      <div>
        <RegularText size="l" weight="700" color="subtitle">
          Total
        </RegularText>
        <RegularText size="l" weight="700" color="subtitle">
          R$ {formattedCardTotal}
        </RegularText>
      </div>
      <Button text="confirmar pedido" disabled={cartQuantity <= 0} type="submit" />
    </ConfirmationSectionContainer>
  )
}