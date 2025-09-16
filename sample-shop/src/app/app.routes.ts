import { Routes } from '@angular/router';
import { ProductPage } from './components/product-page/product-page';
import { ProductList } from './components/product-list/product-list';
import { CheckoutPage } from './components/checkout-page/checkout-page';

const productListPage  = {path: '', component: ProductList};
const productPage = {path: 'product', component: ProductPage};
const checkoutPage = {path: 'checkoutPage', component: CheckoutPage};

export const routes: Routes = [
    productListPage,
    productPage,
    checkoutPage,
];