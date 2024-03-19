import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm(){
  const { register, formState } = useFormContext()

  const { errors } = formState as ErrorsType

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register("cep")}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        type="text"
        className="street"
        {...register("street")}
        error={errors.street?.message}
      />
      <Input
        placeholder="Numero"
        type="number"
        {...register("number")}
        error={errors.number?.message}
      />
      <Input placeholder="Complemento" type="text" className="complement" rightText="opcional" />
      <Input
        placeholder="Bairro"
        type="text"
        {...register("bairro")}
        error={errors.bairro?.message}
      />
      <Input
        placeholder="Cidade"
        type="text"
        {...register("cidade")}
        error={errors.cidade?.message}
      />
      <Input
        placeholder="UF"
        type="text"
        {...register("UF")}
        error={errors.UF?.message}
      />
    </AddressFormContainer>
  )
}