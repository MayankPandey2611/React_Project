// import { Outlet } from "react-router";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// const Layout = ()=>{
//   return(
//     <>
// <Header />
// <Outlet />
// <Footer />
//     </>
//   )
// }


// export default Layout;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/Login";
import Register from "./components/Register";
import CartPage from "./components/CartPage";
// import CheckoutPage from "./components/Checkout";
import SearchData from "./pages/SearchData";
import CheckOut from "./components/alternatecheckout";
import PaymentDone from "./components/PaymentDone";
import DataShow from "./components/Datashow";
const Layout=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
         <Route path="/register" element={<Register />} />
         <Route path="/cart" element={<CartPage />} />
         {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
         <Route path="/checkout" element={<CheckOut />} />
         <Route path="/paymentdone" element={<PaymentDone />} />
 <Route path="datashow/:id" element={<DataShow/>} />
         <Route path="searchdata/:txtval" element={<SearchData/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Layout;