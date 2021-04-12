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