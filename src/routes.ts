import SignIn from 'views/SignIn';
import SignUp from 'views/SignUp';
import { CompanyOwnerProfile } from 'features/company-owner';
import { Company } from 'features/company';
import { Products } from 'features/product-catalog';
import { ProductCategories } from 'features/product-catalog';
import { Orders } from 'features/order';

import Dashboard from 'views/pro/pages/dashboards/Dashboard.js';
import { Layouts } from 'layouts';
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
    layouts: [Layouts.ADMIN],
  },
  adminDashboard: {
    parts: DASHBOARD,
    component: Alternative,
    layouts: [Layouts.ADMIN],
  },
  company: {
    parts: COMPANY,
    component: Company,
    layouts: [Layouts.COMPANY_OWNER],
  },
  companyOwnerProfile: {
    parts: PROFILE,
    component: CompanyOwnerProfile,
    layouts: [Layouts.COMPANY_OWNER],
  },
  companyOwnerDashboard: {
    parts: DASHBOARD,
    component: Dashboard,
    layouts: [Layouts.COMPANY_OWNER],
  },
  products: {
    parts: PRODUCTS,
    component: Products,
    layouts: [Layouts.COMPANY_OWNER],
  },
  productCategories: {
    parts: PRODUCT_CATEGORIES,
    component: ProductCategories,
    layouts: [Layouts.COMPANY_OWNER],
  },
  orders: {
    parts: ORDERS,
    component: Orders,
    layouts: [Layouts.COMPANY_OWNER],
  },
  signIn: {
    parts: SIGN_IN,
    component: SignIn,
    layouts: [Layouts.AUTH],
  },
  signUp: {
    parts: SIGN_UP,
    component: SignUp,
    layouts: [Layouts.AUTH],
  },
};

export default routes;
