import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SharedLayout,
  HomePage,
  AboutPage,
  SharedProductsLayout,
  ProductsPage,
  SingleProductPage,
  CartPage,
  PaymentPage,
  ContactPage,
  ErrorPage,
  RegisterLoginPage,
  DashboardPage,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='products' element={<SharedProductsLayout />}>
            <Route index element={<ProductsPage />} />
            <Route path=':productId' element={<SingleProductPage />} />
          </Route>
          <Route path='cart' element={<CartPage />} />
          <Route path='payment' element={<PaymentPage />}></Route>
          <Route path='contact' element={<ContactPage />}></Route>
          <Route path='login' element={<RegisterLoginPage />}></Route>
          <Route path='dashboard' element={<DashboardPage />}></Route>
          {/* Here I need to add 1 more page for admin */}
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
