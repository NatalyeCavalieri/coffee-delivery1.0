import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from "./styles"
import IntroImage from "../../../../assets/coffeeImage.png"
import { RegularText } from "../../../../components/Typography"
import { InfoWithIcon } from "../../../../components/InfoWithIcon"
import { ShoppingCart } from "phosphor-react"
import { useTheme } from "styled-components"

export function Intro() {
  const { colors } = useTheme()
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText color="subtitle" size="l">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
              iconBg={colors["brand-yellow-dark"]}
            ></InfoWithIcon>
            <p>beneficio</p>
            <p>beneficio</p>
            <p>beneficio</p>
          </BenefitsContainer>
        </div>
        <div>
          <img src={IntroImage} alt="" />
        </div>
      </IntroContent>
    </IntroContainer>
  )
}
