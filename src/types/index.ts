import {
  Address as AddressType,
  Area,
  BusinessType,
  City,
  Country,
  Scalars,
  SignInMutation,
  State,
  UsersPermissionsUser,
} from 'generated/graphql';

export type Maybe<T> = T | null | undefined;

export type Override<T1, T2> = Omit<T1, keyof T2> & T2;

export type Unarray<T> = T extends Array<infer U> ? U : T;

export type Option = {
  value: string;
  label: string;
};

export type AuthUserTokenPayload = SignInMutation['signIn'];

export type User = Pick<
  UsersPermissionsUser,
  'id' | 'firstName' | 'lastName' | 'dateOfBirth' | 'gender' | 'mobileNumber' | 'alternateMobileNumber' | 'email'
>;

export type Business = {
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<BusinessType>;
};

export type Address = Maybe<
  Pick<AddressType, 'id' | 'addressLine1' | 'addressLine2' | 'landmark' | 'postalCode'> & {
    area?: Maybe<
      { __typename?: 'Area' } & Pick<Area, 'id'> & {
          city?: Maybe<
            { __typename?: 'City' } & Pick<City, 'id'> & {
                state?: Maybe<
                  { __typename?: 'State' } & Pick<State, 'id'> & {
                      country?: Maybe<{ __typename?: 'Country' } & Pick<Country, 'id'>>;
                    }
                >;
              }
          >;
        }
    >;
  }
>;
