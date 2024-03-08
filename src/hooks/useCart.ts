import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

// hook customizado para não precisar fazer 2 importações em cada pagina

export function useCart(){
  const context = useContext(CartContext)
  return context
}