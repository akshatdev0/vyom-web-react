import SignIn from 'views/SignIn';
import SignUp from 'views/SignUp';
import { CompanyOwnerProfile } from 'features/company-owner';
import { Company } from 'features/company';
import { Products } from 'features/product-catalog';
import { ProductCategories } from 'features/product-catalog';
import { Orders } from 'features/order';

import Dashboard from 'views/pro/pages/dashboards/Dashboard.js';
import { Layout } from 'layouts';
import { AdminProfile } from 'features/admin';
import Alternative from 'views/pro/pages/dashboards/Alternative';

const COMPANY = 'company';
const DASHBOARD = 'dashboard';
const ORDERS = 'orders';
const PRODUCTS = 'products';
const PRODUCT_CATEGORIES = 'product-categories';
const PROFILE = 'profile';
const SIGN_IN = 'sign-in';
const SIGN_UP = 'sign-up';

const routes = {
  adminProfile: {
    parts: PROFILE,
    component: AdminProfile,
    layouts: [Layout.Admin],
  },
  adminDashboard: {
    parts: DASHBOARD,
    component: Alternative,
    layouts: [Layout.Admin],
  },
  company: {
    parts: COMPANY,
    component: Company,
    layouts: [Layout.CompanyOwner],
  },
  companyOwnerProfile: {
    parts: PROFILE,
    component: CompanyOwnerProfile,
    layouts: [Layout.CompanyOwner],
  },
  companyOwnerDashboard: {
    parts: DASHBOARD,
    component: Dashboard,
    layouts: [Layout.CompanyOwner],
  },
  products: {
    parts: PRODUCTS,
    component: Products,
    layouts: [Layout.CompanyOwner],
  },
  productCategories: {
    parts: PRODUCT_CATEGORIES,
    component: ProductCategories,
    layouts: [Layout.CompanyOwner],
  },
  orders: {
    parts: ORDERS,
    component: Orders,
    layouts: [Layout.CompanyOwner],
  },
  signIn: {
    parts: SIGN_IN,
    component: SignIn,
    layouts: [Layout.Auth],
  },
  signUp: {
    parts: SIGN_UP,
    component: SignUp,
    layouts: [Layout.Auth],
  },
};

export default routes;
