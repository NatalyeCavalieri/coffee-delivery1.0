import { CompleteOrderForm } from "./components/completeOrderForm";
import { SelectedCoffees } from "./components/selectedCoffees";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrder(){
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees/>
    </CompleteOrderContainer>
  )
}