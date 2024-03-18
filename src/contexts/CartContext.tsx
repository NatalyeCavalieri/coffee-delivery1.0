import { ReactNode, createContext, useEffect, useState } from "react"
import { Coffee } from "../pages/Home/components/coffeeCard"
import { produce } from "immer"

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  //items do carrinho
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void
  removeCartItem: (cartItemId: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems"

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if(storedCartItems){
      return JSON.parse(storedCartItems)
    }
    return[]
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price + cartItem.quantity
  },  0)

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

  function changeCartItemQuantity(cartItemId:number, type: 'increase' | 'decrease') {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId)

      if(coffeeExistsInCart >= 0){
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number){
    const newCart = produce(cartItems, (draft)=> {
       const coffeeExistsInCart = cartItems.findIndex(
         (cartItem) => cartItem.id === cartItemId
       )
       if(coffeeExistsInCart >= 0 ){
        draft.splice(coffeeExistsInCart, 1)
       }
    })
      setCartItems(newCart)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,

      }}
    >
      {children}
    </CartContext.Provider>
  )
}
