import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Admin from './pages/Admin';

export const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/product/:id', component: ProductDetails },
  { path: '/cart', component: Cart },
  { path: '/admin', component: Admin },
];
