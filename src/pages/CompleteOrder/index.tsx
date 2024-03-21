import { CompleteOrderForm } from "./components/completeOrderForm";
import { SelectedCoffees } from "./components/selectedCoffees";
import { CompleteOrderContainer } from "./styles";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods{
  credit= "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.string().min(1, "Informe o número"),
  bairro: zod.string().min(1, "Informe o bairro"),
  cidade: zod.string().min(1, "Informe a cidade"),
  UF: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
      errorMap: () => {
        return { message: " Informe o método de pagamento"}
      },
    }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type confirmOrderFormData = OrderData

export function CompleteOrder(){
  const confirmOrderForm = useForm<confirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })
  const { handleSubmit } = confirmOrderForm
  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleConfirmOrder(data: confirmOrderFormData){
    navigate("/orderConfirmed", {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  )
}