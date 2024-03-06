import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../coffeeCard";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees(){
  return (
    <OurCoffeesContainer className="container">
      <TitleText color="subtitle" size="l">
        Nossos Cafés
      </TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}