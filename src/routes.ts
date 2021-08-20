import { AdminProfile } from 'features/admin';
import { Company } from 'features/company';
import { CompanyOwnerProfile } from 'features/company-owner';
import { NewProduct } from 'features/new-product';
import { Orders } from 'features/order';
import { Products } from 'features/product';
import { ProductCategories } from 'features/product-category';
import { Layouts } from 'layouts';
import SignIn from 'views/SignIn';
import SignUp from 'views/SignUp';

const ADD = 'add';
const COMPANY = 'company';
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
  newProduct: {
    parts: [PRODUCTS, ADD],
    component: NewProduct,
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
