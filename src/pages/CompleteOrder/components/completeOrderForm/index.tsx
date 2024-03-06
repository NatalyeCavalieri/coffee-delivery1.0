import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../sectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { MapPin, CurrencyDollar } from 'phosphor-react'
import { AddressForm } from "./addressForm";
import { PaymentMethodOptions } from "./paymentMethodOptions";

export function CompleteOrderForm(){
  const { colors } = useTheme()
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle" weight="700">
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPin size={22} color={colors["brand-yellow"]} />}
        />
        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
        />
        <PaymentMethodOptions/>
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}