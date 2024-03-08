import { ReactNode, createContext, useState } from "react"
import { Coffee } from "../pages/Home/components/coffeeCard"
import { produce } from "immer"

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  //items do carrinho
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    //validação se existe o café que está sendo add, para que não acrescente novamente e sim faça uma soma na quantidade
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    )
    const newCArt = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        // se ele é menor que zero é porque ele ainda não existe no carrinho, o findIndex quando não encontra ele retorna -1

        draft.push(coffee)
      } else {
        // soma a quantidade atual se já existe no carrinho
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })
    setCartItems(newCArt)
  }

  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
