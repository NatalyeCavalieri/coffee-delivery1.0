import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CompleteOrder } from "./pages/CompleteOrder";
import { DefaultLayout } from "./Layout/DefaultLayout";

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>} >
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrder />} />
      </Route>
    </Routes>
  )
}