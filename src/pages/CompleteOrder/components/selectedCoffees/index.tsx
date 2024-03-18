import { TitleText } from "../../../../components/Typography"
import { CoffeeCartCard } from "../CoffeeCartCard/CoffeeCartCard"
import { ConfirmationSection } from "./confirmationSection"
import { DetailsContainer, SelectedCoffeesContainer } from "./styles"
import { useCart } from "../../../../hooks/useCart"

export function SelectedCoffees() {
  const { cartItems } = useCart()
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
        <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
