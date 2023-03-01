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
  DashboardSharedLayout,
  DashboardAllProducts,
  DashboardCreateProducts,
  DashboardUpdate,
  DashboardDelete,
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
          <Route path='dashboard' element={<DashboardSharedLayout />}>
            <Route index element={<DashboardAllProducts />}></Route>
            <Route path='getall' element={<DashboardAllProducts />}></Route>
            <Route path='create' element={<DashboardCreateProducts />}></Route>
            <Route
              path='update/:productId'
              element={<DashboardUpdate />}
            ></Route>
            <Route
              path='delete/:productId'
              element={<DashboardDelete />}
            ></Route>
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
