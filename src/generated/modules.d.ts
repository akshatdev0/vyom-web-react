declare module '*/address.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CreateAddress: DocumentNode;
  export const UpdateAddress: DocumentNode;

  export default defaultDocument;
}

declare module '*/area.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AreasOfCity: DocumentNode;

  export default defaultDocument;
}

declare module '*/auth.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const SignIn: DocumentNode;
  export const SignUp: DocumentNode;
  export const SendOtp: DocumentNode;
  export const Verify: DocumentNode;
  export const CreatePassword: DocumentNode;

  export default defaultDocument;
}

declare module '*/city.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CitiesOfState: DocumentNode;

  export default defaultDocument;
}

declare module '*/company-owner.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CompanyOwner: DocumentNode;

  export default defaultDocument;
}

declare module '*/company.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Company: DocumentNode;
  export const CompanyBusinessTypes: DocumentNode;
  export const UpdateCompanyInformation: DocumentNode;
  export const SetCompanyRegisteredAddress: DocumentNode;
  export const UpdateCompanyDetail: DocumentNode;
  export const CreateCompanyDetail: DocumentNode;
  export const SetCompanyDetail: DocumentNode;

  export default defaultDocument;
}

declare module '*/country.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Countries: DocumentNode;

  export default defaultDocument;
}

declare module '*/order.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const OrdersOfCompany: DocumentNode;

  export default defaultDocument;
}

declare module '*/product-category.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ProductCategoriesOfCompany: DocumentNode;

  export default defaultDocument;
}

declare module '*/product.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ProductsOfCompany: DocumentNode;

  export default defaultDocument;
}

declare module '*/state.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const StatesOfCountry: DocumentNode;

  export default defaultDocument;
}

declare module '*/user.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetUserInfo: DocumentNode;
  export const User: DocumentNode;
  export const UpdateUser: DocumentNode;

  export default defaultDocument;
}

declare module '*/company-ower-layout.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CompanyOwnerLayout: DocumentNode;

  export default defaultDocument;
}
