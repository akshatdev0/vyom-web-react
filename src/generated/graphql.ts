import gql from 'graphql-tag';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
import { useFetcher } from 'client/fetcher';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  plusCode?: Maybe<Scalars['String']>;
  area?: Maybe<Area>;
  isDeleted?: Maybe<Scalars['Boolean']>;
};

export type AddressAggregator = {
  __typename?: 'AddressAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AddressConnection = {
  __typename?: 'AddressConnection';
  values?: Maybe<Array<Maybe<Address>>>;
  groupBy?: Maybe<AddressGroupBy>;
  aggregate?: Maybe<AddressAggregator>;
};

export type AddressConnectionAddressLine1 = {
  __typename?: 'AddressConnectionAddressLine1';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AddressConnection>;
};

export type AddressConnectionAddressLine2 = {
  __typename?: 'AddressConnectionAddressLine2';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AddressConnection>;
};

export type AddressConnectionArea = {
  __typename?: 'AddressConnectionArea';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AddressConnection>;
};

export type AddressConnectionCreated_At = {
  __typename?: 'AddressConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AddressConnection>;
};

export type AddressConnectionId = {
  __typename?: 'AddressConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AddressConnection>;
};

export type AddressConnectionIsDeleted = {
  __typename?: 'AddressConnectionIsDeleted';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<AddressConnection>;
};

export type AddressConnectionLandmark = {
  __typename?: 'AddressConnectionLandmark';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AddressConnection>;
};

export type AddressConnectionPlusCode = {
  __typename?: 'AddressConnectionPlusCode';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AddressConnection>;
};

export type AddressConnectionPostalCode = {
  __typename?: 'AddressConnectionPostalCode';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AddressConnection>;
};

export type AddressConnectionUpdated_At = {
  __typename?: 'AddressConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AddressConnection>;
};

export type AddressGroupBy = {
  __typename?: 'AddressGroupBy';
  id?: Maybe<Array<Maybe<AddressConnectionId>>>;
  created_at?: Maybe<Array<Maybe<AddressConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<AddressConnectionUpdated_At>>>;
  addressLine1?: Maybe<Array<Maybe<AddressConnectionAddressLine1>>>;
  addressLine2?: Maybe<Array<Maybe<AddressConnectionAddressLine2>>>;
  landmark?: Maybe<Array<Maybe<AddressConnectionLandmark>>>;
  postalCode?: Maybe<Array<Maybe<AddressConnectionPostalCode>>>;
  plusCode?: Maybe<Array<Maybe<AddressConnectionPlusCode>>>;
  area?: Maybe<Array<Maybe<AddressConnectionArea>>>;
  isDeleted?: Maybe<Array<Maybe<AddressConnectionIsDeleted>>>;
};

export type AddressInput = {
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  plusCode?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['ID']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Area = {
  __typename?: 'Area';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  city?: Maybe<City>;
};

export type AreaAggregator = {
  __typename?: 'AreaAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AreaConnection = {
  __typename?: 'AreaConnection';
  values?: Maybe<Array<Maybe<Area>>>;
  groupBy?: Maybe<AreaGroupBy>;
  aggregate?: Maybe<AreaAggregator>;
};

export type AreaConnectionCity = {
  __typename?: 'AreaConnectionCity';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AreaConnection>;
};

export type AreaConnectionCreated_At = {
  __typename?: 'AreaConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AreaConnection>;
};

export type AreaConnectionId = {
  __typename?: 'AreaConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AreaConnection>;
};

export type AreaConnectionName = {
  __typename?: 'AreaConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AreaConnection>;
};

export type AreaConnectionUpdated_At = {
  __typename?: 'AreaConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AreaConnection>;
};

export type AreaGroupBy = {
  __typename?: 'AreaGroupBy';
  id?: Maybe<Array<Maybe<AreaConnectionId>>>;
  created_at?: Maybe<Array<Maybe<AreaConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<AreaConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<AreaConnectionName>>>;
  city?: Maybe<Array<Maybe<AreaConnectionCity>>>;
};

export type AreaInput = {
  name: Scalars['String'];
  city?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Attribute = {
  __typename?: 'Attribute';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  values?: Maybe<Array<Maybe<AttributeValue>>>;
};

export type AttributeValuesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type AttributeAggregator = {
  __typename?: 'AttributeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AttributeConnection = {
  __typename?: 'AttributeConnection';
  values?: Maybe<Array<Maybe<Attribute>>>;
  groupBy?: Maybe<AttributeGroupBy>;
  aggregate?: Maybe<AttributeAggregator>;
};

export type AttributeConnectionCreated_At = {
  __typename?: 'AttributeConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AttributeConnection>;
};

export type AttributeConnectionId = {
  __typename?: 'AttributeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AttributeConnection>;
};

export type AttributeConnectionName = {
  __typename?: 'AttributeConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AttributeConnection>;
};

export type AttributeConnectionUpdated_At = {
  __typename?: 'AttributeConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AttributeConnection>;
};

export type AttributeGroupBy = {
  __typename?: 'AttributeGroupBy';
  id?: Maybe<Array<Maybe<AttributeConnectionId>>>;
  created_at?: Maybe<Array<Maybe<AttributeConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<AttributeConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<AttributeConnectionName>>>;
};

export type AttributeInput = {
  name: Scalars['String'];
  values?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type AttributeValue = {
  __typename?: 'AttributeValue';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
  attribute?: Maybe<Attribute>;
};

export type AttributeValueAggregator = {
  __typename?: 'AttributeValueAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AttributeValueConnection = {
  __typename?: 'AttributeValueConnection';
  values?: Maybe<Array<Maybe<AttributeValue>>>;
  groupBy?: Maybe<AttributeValueGroupBy>;
  aggregate?: Maybe<AttributeValueAggregator>;
};

export type AttributeValueConnectionAttribute = {
  __typename?: 'AttributeValueConnectionAttribute';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AttributeValueConnection>;
};

export type AttributeValueConnectionCreated_At = {
  __typename?: 'AttributeValueConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AttributeValueConnection>;
};

export type AttributeValueConnectionId = {
  __typename?: 'AttributeValueConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AttributeValueConnection>;
};

export type AttributeValueConnectionUpdated_At = {
  __typename?: 'AttributeValueConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AttributeValueConnection>;
};

export type AttributeValueConnectionValue = {
  __typename?: 'AttributeValueConnectionValue';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AttributeValueConnection>;
};

export type AttributeValueGroupBy = {
  __typename?: 'AttributeValueGroupBy';
  id?: Maybe<Array<Maybe<AttributeValueConnectionId>>>;
  created_at?: Maybe<Array<Maybe<AttributeValueConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<AttributeValueConnectionUpdated_At>>>;
  value?: Maybe<Array<Maybe<AttributeValueConnectionValue>>>;
  attribute?: Maybe<Array<Maybe<AttributeValueConnectionAttribute>>>;
};

export type AttributeValueInput = {
  value?: Maybe<Scalars['String']>;
  attribute?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Brand = {
  __typename?: 'Brand';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
};

export type BrandAggregator = {
  __typename?: 'BrandAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BrandConnection = {
  __typename?: 'BrandConnection';
  values?: Maybe<Array<Maybe<Brand>>>;
  groupBy?: Maybe<BrandGroupBy>;
  aggregate?: Maybe<BrandAggregator>;
};

export type BrandConnectionCreated_At = {
  __typename?: 'BrandConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BrandConnection>;
};

export type BrandConnectionId = {
  __typename?: 'BrandConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BrandConnection>;
};

export type BrandConnectionIsDeleted = {
  __typename?: 'BrandConnectionIsDeleted';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<BrandConnection>;
};

export type BrandConnectionName = {
  __typename?: 'BrandConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BrandConnection>;
};

export type BrandConnectionUpdated_At = {
  __typename?: 'BrandConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BrandConnection>;
};

export type BrandGroupBy = {
  __typename?: 'BrandGroupBy';
  id?: Maybe<Array<Maybe<BrandConnectionId>>>;
  created_at?: Maybe<Array<Maybe<BrandConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<BrandConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<BrandConnectionName>>>;
  isDeleted?: Maybe<Array<Maybe<BrandConnectionIsDeleted>>>;
};

export type BrandInput = {
  name: Scalars['String'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type BusinessType = {
  __typename?: 'BusinessType';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type BusinessTypeAggregator = {
  __typename?: 'BusinessTypeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BusinessTypeConnection = {
  __typename?: 'BusinessTypeConnection';
  values?: Maybe<Array<Maybe<BusinessType>>>;
  groupBy?: Maybe<BusinessTypeGroupBy>;
  aggregate?: Maybe<BusinessTypeAggregator>;
};

export type BusinessTypeConnectionCreated_At = {
  __typename?: 'BusinessTypeConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BusinessTypeConnection>;
};

export type BusinessTypeConnectionDescription = {
  __typename?: 'BusinessTypeConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BusinessTypeConnection>;
};

export type BusinessTypeConnectionId = {
  __typename?: 'BusinessTypeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BusinessTypeConnection>;
};

export type BusinessTypeConnectionIsActive = {
  __typename?: 'BusinessTypeConnectionIsActive';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<BusinessTypeConnection>;
};

export type BusinessTypeConnectionName = {
  __typename?: 'BusinessTypeConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BusinessTypeConnection>;
};

export type BusinessTypeConnectionUpdated_At = {
  __typename?: 'BusinessTypeConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BusinessTypeConnection>;
};

export type BusinessTypeGroupBy = {
  __typename?: 'BusinessTypeGroupBy';
  id?: Maybe<Array<Maybe<BusinessTypeConnectionId>>>;
  created_at?: Maybe<Array<Maybe<BusinessTypeConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<BusinessTypeConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<BusinessTypeConnectionName>>>;
  description?: Maybe<Array<Maybe<BusinessTypeConnectionDescription>>>;
  isActive?: Maybe<Array<Maybe<BusinessTypeConnectionIsActive>>>;
};

export type BusinessTypeInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CalendarEvent = {
  __typename?: 'CalendarEvent';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  type: Enum_Calendarevent_Type;
  day?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type CalendarEventAggregator = {
  __typename?: 'CalendarEventAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<CalendarEventAggregatorSum>;
  avg?: Maybe<CalendarEventAggregatorAvg>;
  min?: Maybe<CalendarEventAggregatorMin>;
  max?: Maybe<CalendarEventAggregatorMax>;
};

export type CalendarEventAggregatorAvg = {
  __typename?: 'CalendarEventAggregatorAvg';
  day?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

export type CalendarEventAggregatorMax = {
  __typename?: 'CalendarEventAggregatorMax';
  day?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

export type CalendarEventAggregatorMin = {
  __typename?: 'CalendarEventAggregatorMin';
  day?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

export type CalendarEventAggregatorSum = {
  __typename?: 'CalendarEventAggregatorSum';
  day?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

export type CalendarEventConnection = {
  __typename?: 'CalendarEventConnection';
  values?: Maybe<Array<Maybe<CalendarEvent>>>;
  groupBy?: Maybe<CalendarEventGroupBy>;
  aggregate?: Maybe<CalendarEventAggregator>;
};

export type CalendarEventConnectionCreated_At = {
  __typename?: 'CalendarEventConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CalendarEventConnection>;
};

export type CalendarEventConnectionDay = {
  __typename?: 'CalendarEventConnectionDay';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<CalendarEventConnection>;
};

export type CalendarEventConnectionId = {
  __typename?: 'CalendarEventConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CalendarEventConnection>;
};

export type CalendarEventConnectionMonth = {
  __typename?: 'CalendarEventConnectionMonth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<CalendarEventConnection>;
};

export type CalendarEventConnectionTitle = {
  __typename?: 'CalendarEventConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CalendarEventConnection>;
};

export type CalendarEventConnectionType = {
  __typename?: 'CalendarEventConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CalendarEventConnection>;
};

export type CalendarEventConnectionUpdated_At = {
  __typename?: 'CalendarEventConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CalendarEventConnection>;
};

export type CalendarEventConnectionWeek = {
  __typename?: 'CalendarEventConnectionWeek';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<CalendarEventConnection>;
};

export type CalendarEventConnectionYear = {
  __typename?: 'CalendarEventConnectionYear';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<CalendarEventConnection>;
};

export type CalendarEventGroupBy = {
  __typename?: 'CalendarEventGroupBy';
  id?: Maybe<Array<Maybe<CalendarEventConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CalendarEventConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CalendarEventConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<CalendarEventConnectionTitle>>>;
  type?: Maybe<Array<Maybe<CalendarEventConnectionType>>>;
  day?: Maybe<Array<Maybe<CalendarEventConnectionDay>>>;
  week?: Maybe<Array<Maybe<CalendarEventConnectionWeek>>>;
  month?: Maybe<Array<Maybe<CalendarEventConnectionMonth>>>;
  year?: Maybe<Array<Maybe<CalendarEventConnectionYear>>>;
};

export type CalendarEventInput = {
  title?: Maybe<Scalars['String']>;
  type: Enum_Calendarevent_Type;
  day?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<CartItem>>>;
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID'];
  index?: Maybe<Scalars['Int']>;
  productTitle?: Maybe<Scalars['String']>;
  productVariantTitle?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  productPrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type City = {
  __typename?: 'City';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  state?: Maybe<State>;
  areas?: Maybe<Array<Maybe<Area>>>;
};

export type CityAreasArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CityAggregator = {
  __typename?: 'CityAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CityConnection = {
  __typename?: 'CityConnection';
  values?: Maybe<Array<Maybe<City>>>;
  groupBy?: Maybe<CityGroupBy>;
  aggregate?: Maybe<CityAggregator>;
};

export type CityConnectionCreated_At = {
  __typename?: 'CityConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnectionId = {
  __typename?: 'CityConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnectionName = {
  __typename?: 'CityConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnectionState = {
  __typename?: 'CityConnectionState';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CityConnection>;
};

export type CityConnectionUpdated_At = {
  __typename?: 'CityConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CityConnection>;
};

export type CityGroupBy = {
  __typename?: 'CityGroupBy';
  id?: Maybe<Array<Maybe<CityConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CityConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CityConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<CityConnectionName>>>;
  state?: Maybe<Array<Maybe<CityConnectionState>>>;
};

export type CityInput = {
  name: Scalars['String'];
  state?: Maybe<Scalars['ID']>;
  areas?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  businessType?: Maybe<BusinessType>;
  companyType?: Maybe<CompanyType>;
  sku: Scalars['String'];
  registeredAddress?: Maybe<Address>;
  isActive?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  companyDetail?: Maybe<CompanyDetail>;
  priceRules?: Maybe<Array<Maybe<PriceRule>>>;
  appliedPriceRules?: Maybe<Array<Maybe<PriceRule>>>;
  orderShipments?: Maybe<Array<Maybe<OrderShipment>>>;
  productCategories?: Maybe<Array<Maybe<ProductCategory>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  companyOwners?: Maybe<Array<Maybe<CompanyOwner>>>;
  employees?: Maybe<Array<Maybe<CompanyEmployee>>>;
  shopTradeConnections?: Maybe<Array<Maybe<CompanyShopTradeConnection>>>;
};

export type CompanyPriceRulesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CompanyAppliedPriceRulesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CompanyOrderShipmentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CompanyProductCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CompanyProductsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CompanyCompanyOwnersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CompanyEmployeesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CompanyShopTradeConnectionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CompanyAggregator = {
  __typename?: 'CompanyAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CompanyConnection = {
  __typename?: 'CompanyConnection';
  values?: Maybe<Array<Maybe<Company>>>;
  groupBy?: Maybe<CompanyGroupBy>;
  aggregate?: Maybe<CompanyAggregator>;
};

export type CompanyConnectionBusinessType = {
  __typename?: 'CompanyConnectionBusinessType';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyConnection>;
};

export type CompanyConnectionCompanyDetail = {
  __typename?: 'CompanyConnectionCompanyDetail';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyConnection>;
};

export type CompanyConnectionCompanyType = {
  __typename?: 'CompanyConnectionCompanyType';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyConnection>;
};

export type CompanyConnectionCreated_At = {
  __typename?: 'CompanyConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CompanyConnection>;
};

export type CompanyConnectionId = {
  __typename?: 'CompanyConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyConnection>;
};

export type CompanyConnectionIsActive = {
  __typename?: 'CompanyConnectionIsActive';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CompanyConnection>;
};

export type CompanyConnectionIsDeleted = {
  __typename?: 'CompanyConnectionIsDeleted';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CompanyConnection>;
};

export type CompanyConnectionName = {
  __typename?: 'CompanyConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CompanyConnection>;
};

export type CompanyConnectionRegisteredAddress = {
  __typename?: 'CompanyConnectionRegisteredAddress';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyConnection>;
};

export type CompanyConnectionSku = {
  __typename?: 'CompanyConnectionSku';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CompanyConnection>;
};

export type CompanyConnectionUpdated_At = {
  __typename?: 'CompanyConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CompanyConnection>;
};

export type CompanyDetail = {
  __typename?: 'CompanyDetail';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  returnPolicy?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type CompanyDetailAggregator = {
  __typename?: 'CompanyDetailAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CompanyDetailConnection = {
  __typename?: 'CompanyDetailConnection';
  values?: Maybe<Array<Maybe<CompanyDetail>>>;
  groupBy?: Maybe<CompanyDetailGroupBy>;
  aggregate?: Maybe<CompanyDetailAggregator>;
};

export type CompanyDetailConnectionCompany = {
  __typename?: 'CompanyDetailConnectionCompany';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyDetailConnection>;
};

export type CompanyDetailConnectionCreated_At = {
  __typename?: 'CompanyDetailConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CompanyDetailConnection>;
};

export type CompanyDetailConnectionId = {
  __typename?: 'CompanyDetailConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyDetailConnection>;
};

export type CompanyDetailConnectionPublished_At = {
  __typename?: 'CompanyDetailConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CompanyDetailConnection>;
};

export type CompanyDetailConnectionReturnPolicy = {
  __typename?: 'CompanyDetailConnectionReturnPolicy';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CompanyDetailConnection>;
};

export type CompanyDetailConnectionUpdated_At = {
  __typename?: 'CompanyDetailConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CompanyDetailConnection>;
};

export type CompanyDetailGroupBy = {
  __typename?: 'CompanyDetailGroupBy';
  id?: Maybe<Array<Maybe<CompanyDetailConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CompanyDetailConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CompanyDetailConnectionUpdated_At>>>;
  returnPolicy?: Maybe<Array<Maybe<CompanyDetailConnectionReturnPolicy>>>;
  company?: Maybe<Array<Maybe<CompanyDetailConnectionCompany>>>;
  published_at?: Maybe<Array<Maybe<CompanyDetailConnectionPublished_At>>>;
};

export type CompanyDetailInput = {
  returnPolicy?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CompanyEmployee = {
  __typename?: 'CompanyEmployee';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  user?: Maybe<UsersPermissionsUser>;
  company?: Maybe<Company>;
  isActive?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  salesman?: Maybe<Salesman>;
  supplier?: Maybe<Supplier>;
};

export type CompanyEmployeeAggregator = {
  __typename?: 'CompanyEmployeeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CompanyEmployeeConnection = {
  __typename?: 'CompanyEmployeeConnection';
  values?: Maybe<Array<Maybe<CompanyEmployee>>>;
  groupBy?: Maybe<CompanyEmployeeGroupBy>;
  aggregate?: Maybe<CompanyEmployeeAggregator>;
};

export type CompanyEmployeeConnectionCompany = {
  __typename?: 'CompanyEmployeeConnectionCompany';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyEmployeeConnection>;
};

export type CompanyEmployeeConnectionCreated_At = {
  __typename?: 'CompanyEmployeeConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CompanyEmployeeConnection>;
};

export type CompanyEmployeeConnectionId = {
  __typename?: 'CompanyEmployeeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyEmployeeConnection>;
};

export type CompanyEmployeeConnectionIsActive = {
  __typename?: 'CompanyEmployeeConnectionIsActive';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CompanyEmployeeConnection>;
};

export type CompanyEmployeeConnectionIsDeleted = {
  __typename?: 'CompanyEmployeeConnectionIsDeleted';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CompanyEmployeeConnection>;
};

export type CompanyEmployeeConnectionSalesman = {
  __typename?: 'CompanyEmployeeConnectionSalesman';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyEmployeeConnection>;
};

export type CompanyEmployeeConnectionSupplier = {
  __typename?: 'CompanyEmployeeConnectionSupplier';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyEmployeeConnection>;
};

export type CompanyEmployeeConnectionUpdated_At = {
  __typename?: 'CompanyEmployeeConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CompanyEmployeeConnection>;
};

export type CompanyEmployeeConnectionUser = {
  __typename?: 'CompanyEmployeeConnectionUser';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyEmployeeConnection>;
};

export type CompanyEmployeeGroupBy = {
  __typename?: 'CompanyEmployeeGroupBy';
  id?: Maybe<Array<Maybe<CompanyEmployeeConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CompanyEmployeeConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CompanyEmployeeConnectionUpdated_At>>>;
  user?: Maybe<Array<Maybe<CompanyEmployeeConnectionUser>>>;
  company?: Maybe<Array<Maybe<CompanyEmployeeConnectionCompany>>>;
  isActive?: Maybe<Array<Maybe<CompanyEmployeeConnectionIsActive>>>;
  isDeleted?: Maybe<Array<Maybe<CompanyEmployeeConnectionIsDeleted>>>;
  salesman?: Maybe<Array<Maybe<CompanyEmployeeConnectionSalesman>>>;
  supplier?: Maybe<Array<Maybe<CompanyEmployeeConnectionSupplier>>>;
};

export type CompanyEmployeeInput = {
  user?: Maybe<Scalars['ID']>;
  company?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  salesman?: Maybe<Scalars['ID']>;
  supplier?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CompanyGroupBy = {
  __typename?: 'CompanyGroupBy';
  id?: Maybe<Array<Maybe<CompanyConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CompanyConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CompanyConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<CompanyConnectionName>>>;
  businessType?: Maybe<Array<Maybe<CompanyConnectionBusinessType>>>;
  companyType?: Maybe<Array<Maybe<CompanyConnectionCompanyType>>>;
  sku?: Maybe<Array<Maybe<CompanyConnectionSku>>>;
  registeredAddress?: Maybe<Array<Maybe<CompanyConnectionRegisteredAddress>>>;
  isActive?: Maybe<Array<Maybe<CompanyConnectionIsActive>>>;
  isDeleted?: Maybe<Array<Maybe<CompanyConnectionIsDeleted>>>;
  companyDetail?: Maybe<Array<Maybe<CompanyConnectionCompanyDetail>>>;
};

export type CompanyInput = {
  name: Scalars['String'];
  businessType?: Maybe<Scalars['ID']>;
  companyType?: Maybe<Scalars['ID']>;
  sku: Scalars['String'];
  priceRules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  appliedPriceRules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderShipments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  productCategories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  companyOwners?: Maybe<Array<Maybe<Scalars['ID']>>>;
  employees?: Maybe<Array<Maybe<Scalars['ID']>>>;
  registeredAddress?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  companyDetail?: Maybe<Scalars['ID']>;
  shopTradeConnections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CompanyOwner = {
  __typename?: 'CompanyOwner';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  user?: Maybe<UsersPermissionsUser>;
  company?: Maybe<Company>;
};

export type CompanyOwnerAggregator = {
  __typename?: 'CompanyOwnerAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CompanyOwnerConnection = {
  __typename?: 'CompanyOwnerConnection';
  values?: Maybe<Array<Maybe<CompanyOwner>>>;
  groupBy?: Maybe<CompanyOwnerGroupBy>;
  aggregate?: Maybe<CompanyOwnerAggregator>;
};

export type CompanyOwnerConnectionCompany = {
  __typename?: 'CompanyOwnerConnectionCompany';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyOwnerConnection>;
};

export type CompanyOwnerConnectionCreated_At = {
  __typename?: 'CompanyOwnerConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CompanyOwnerConnection>;
};

export type CompanyOwnerConnectionId = {
  __typename?: 'CompanyOwnerConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyOwnerConnection>;
};

export type CompanyOwnerConnectionUpdated_At = {
  __typename?: 'CompanyOwnerConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CompanyOwnerConnection>;
};

export type CompanyOwnerConnectionUser = {
  __typename?: 'CompanyOwnerConnectionUser';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyOwnerConnection>;
};

export type CompanyOwnerGroupBy = {
  __typename?: 'CompanyOwnerGroupBy';
  id?: Maybe<Array<Maybe<CompanyOwnerConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CompanyOwnerConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CompanyOwnerConnectionUpdated_At>>>;
  user?: Maybe<Array<Maybe<CompanyOwnerConnectionUser>>>;
  company?: Maybe<Array<Maybe<CompanyOwnerConnectionCompany>>>;
};

export type CompanyOwnerInput = {
  user?: Maybe<Scalars['ID']>;
  company?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CompanyShopTradeConnection = {
  __typename?: 'CompanyShopTradeConnection';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  company?: Maybe<Company>;
  shop?: Maybe<Shop>;
  isSuspendedByCompany?: Maybe<Scalars['Boolean']>;
  isBlockedByCompany?: Maybe<Scalars['Boolean']>;
  isBlockedByShop?: Maybe<Scalars['Boolean']>;
};

export type CompanyShopTradeConnectionAggregator = {
  __typename?: 'CompanyShopTradeConnectionAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CompanyShopTradeConnectionConnection = {
  __typename?: 'CompanyShopTradeConnectionConnection';
  values?: Maybe<Array<Maybe<CompanyShopTradeConnection>>>;
  groupBy?: Maybe<CompanyShopTradeConnectionGroupBy>;
  aggregate?: Maybe<CompanyShopTradeConnectionAggregator>;
};

export type CompanyShopTradeConnectionConnectionCompany = {
  __typename?: 'CompanyShopTradeConnectionConnectionCompany';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyShopTradeConnectionConnection>;
};

export type CompanyShopTradeConnectionConnectionCreated_At = {
  __typename?: 'CompanyShopTradeConnectionConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CompanyShopTradeConnectionConnection>;
};

export type CompanyShopTradeConnectionConnectionId = {
  __typename?: 'CompanyShopTradeConnectionConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyShopTradeConnectionConnection>;
};

export type CompanyShopTradeConnectionConnectionIsBlockedByCompany = {
  __typename?: 'CompanyShopTradeConnectionConnectionIsBlockedByCompany';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CompanyShopTradeConnectionConnection>;
};

export type CompanyShopTradeConnectionConnectionIsBlockedByShop = {
  __typename?: 'CompanyShopTradeConnectionConnectionIsBlockedByShop';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CompanyShopTradeConnectionConnection>;
};

export type CompanyShopTradeConnectionConnectionIsSuspendedByCompany = {
  __typename?: 'CompanyShopTradeConnectionConnectionIsSuspendedByCompany';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CompanyShopTradeConnectionConnection>;
};

export type CompanyShopTradeConnectionConnectionShop = {
  __typename?: 'CompanyShopTradeConnectionConnectionShop';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyShopTradeConnectionConnection>;
};

export type CompanyShopTradeConnectionConnectionUpdated_At = {
  __typename?: 'CompanyShopTradeConnectionConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CompanyShopTradeConnectionConnection>;
};

export type CompanyShopTradeConnectionGroupBy = {
  __typename?: 'CompanyShopTradeConnectionGroupBy';
  id?: Maybe<Array<Maybe<CompanyShopTradeConnectionConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CompanyShopTradeConnectionConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CompanyShopTradeConnectionConnectionUpdated_At>>>;
  company?: Maybe<Array<Maybe<CompanyShopTradeConnectionConnectionCompany>>>;
  shop?: Maybe<Array<Maybe<CompanyShopTradeConnectionConnectionShop>>>;
  isSuspendedByCompany?: Maybe<Array<Maybe<CompanyShopTradeConnectionConnectionIsSuspendedByCompany>>>;
  isBlockedByCompany?: Maybe<Array<Maybe<CompanyShopTradeConnectionConnectionIsBlockedByCompany>>>;
  isBlockedByShop?: Maybe<Array<Maybe<CompanyShopTradeConnectionConnectionIsBlockedByShop>>>;
};

export type CompanyShopTradeConnectionInput = {
  company?: Maybe<Scalars['ID']>;
  shop?: Maybe<Scalars['ID']>;
  isSuspendedByCompany?: Maybe<Scalars['Boolean']>;
  isBlockedByCompany?: Maybe<Scalars['Boolean']>;
  isBlockedByShop?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CompanyType = {
  __typename?: 'CompanyType';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CompanyTypeAggregator = {
  __typename?: 'CompanyTypeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CompanyTypeConnection = {
  __typename?: 'CompanyTypeConnection';
  values?: Maybe<Array<Maybe<CompanyType>>>;
  groupBy?: Maybe<CompanyTypeGroupBy>;
  aggregate?: Maybe<CompanyTypeAggregator>;
};

export type CompanyTypeConnectionCreated_At = {
  __typename?: 'CompanyTypeConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CompanyTypeConnection>;
};

export type CompanyTypeConnectionDescription = {
  __typename?: 'CompanyTypeConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CompanyTypeConnection>;
};

export type CompanyTypeConnectionId = {
  __typename?: 'CompanyTypeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CompanyTypeConnection>;
};

export type CompanyTypeConnectionIsActive = {
  __typename?: 'CompanyTypeConnectionIsActive';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<CompanyTypeConnection>;
};

export type CompanyTypeConnectionName = {
  __typename?: 'CompanyTypeConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CompanyTypeConnection>;
};

export type CompanyTypeConnectionUpdated_At = {
  __typename?: 'CompanyTypeConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CompanyTypeConnection>;
};

export type CompanyTypeGroupBy = {
  __typename?: 'CompanyTypeGroupBy';
  id?: Maybe<Array<Maybe<CompanyTypeConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CompanyTypeConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CompanyTypeConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<CompanyTypeConnectionName>>>;
  description?: Maybe<Array<Maybe<CompanyTypeConnectionDescription>>>;
  isActive?: Maybe<Array<Maybe<CompanyTypeConnectionIsActive>>>;
};

export type CompanyTypeInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  states?: Maybe<Array<Maybe<State>>>;
};

export type CountryStatesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CountryAggregator = {
  __typename?: 'CountryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CountryConnection = {
  __typename?: 'CountryConnection';
  values?: Maybe<Array<Maybe<Country>>>;
  groupBy?: Maybe<CountryGroupBy>;
  aggregate?: Maybe<CountryAggregator>;
};

export type CountryConnectionCreated_At = {
  __typename?: 'CountryConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CountryConnection>;
};

export type CountryConnectionId = {
  __typename?: 'CountryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CountryConnection>;
};

export type CountryConnectionName = {
  __typename?: 'CountryConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CountryConnection>;
};

export type CountryConnectionUpdated_At = {
  __typename?: 'CountryConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CountryConnection>;
};

export type CountryGroupBy = {
  __typename?: 'CountryGroupBy';
  id?: Maybe<Array<Maybe<CountryConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CountryConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CountryConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<CountryConnectionName>>>;
};

export type CountryInput = {
  name: Scalars['String'];
  states?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum Enum_Calendarevent_Type {
  Weekly = 'WEEKLY',
  MonthlyDay = 'MONTHLY_DAY',
  MonthlyDayOfWeek = 'MONTHLY_DAY_OF_WEEK',
  YearlyDay = 'YEARLY_DAY',
  YearlyDayOfWeek = 'YEARLY_DAY_OF_WEEK',
  YearlyDayOfMonth = 'YEARLY_DAY_OF_MONTH',
  Specific = 'SPECIFIC',
}

export enum Enum_Ordershipment_Currentstatus {
  Created = 'CREATED',
  Packed = 'PACKED',
  Shipped = 'SHIPPED',
  Delivered = 'DELIVERED',
}

export enum Enum_Order_Currentstatus {
  InCart = 'IN_CART',
  Placed = 'PLACED',
  UnderProcess = 'UNDER_PROCESS',
  Completed = 'COMPLETED',
  Cancelled = 'CANCELLED',
}

export enum Enum_Order_Paymentstatus {
  Pending = 'PENDING',
  Paid = 'PAID',
}

export enum Enum_Pricerule_Computationtype {
  FixedPrice = 'FIXED_PRICE',
  Percentage = 'PERCENTAGE',
  Relative = 'RELATIVE',
}

export enum Enum_Transactiontype_Ledgertype {
  Debit = 'Debit',
  Credit = 'Credit',
}

export enum Enum_Userspermissionsuser_Gender {
  Male = 'MALE',
  Female = 'FEMALE',
}

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type Morph =
  | CartItem
  | Cart
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsLoginPayload
  | UserPermissionsPasswordPayload
  | UsersPermissionsAuthUser
  | UsersPermissionsAuthUserTokenPayload
  | UserPermissionsOkPayload
  | UserPermissionsSendSmsConfirmationPayload
  | Address
  | AddressConnection
  | AddressAggregator
  | AddressGroupBy
  | AddressConnectionId
  | AddressConnectionCreated_At
  | AddressConnectionUpdated_At
  | AddressConnectionAddressLine1
  | AddressConnectionAddressLine2
  | AddressConnectionLandmark
  | AddressConnectionPostalCode
  | AddressConnectionPlusCode
  | AddressConnectionArea
  | AddressConnectionIsDeleted
  | CreateAddressPayload
  | UpdateAddressPayload
  | DeleteAddressPayload
  | Area
  | AreaConnection
  | AreaAggregator
  | AreaGroupBy
  | AreaConnectionId
  | AreaConnectionCreated_At
  | AreaConnectionUpdated_At
  | AreaConnectionName
  | AreaConnectionCity
  | CreateAreaPayload
  | UpdateAreaPayload
  | DeleteAreaPayload
  | AttributeValue
  | AttributeValueConnection
  | AttributeValueAggregator
  | AttributeValueGroupBy
  | AttributeValueConnectionId
  | AttributeValueConnectionCreated_At
  | AttributeValueConnectionUpdated_At
  | AttributeValueConnectionValue
  | AttributeValueConnectionAttribute
  | CreateAttributeValuePayload
  | UpdateAttributeValuePayload
  | DeleteAttributeValuePayload
  | Attribute
  | AttributeConnection
  | AttributeAggregator
  | AttributeGroupBy
  | AttributeConnectionId
  | AttributeConnectionCreated_At
  | AttributeConnectionUpdated_At
  | AttributeConnectionName
  | CreateAttributePayload
  | UpdateAttributePayload
  | DeleteAttributePayload
  | Brand
  | BrandConnection
  | BrandAggregator
  | BrandGroupBy
  | BrandConnectionId
  | BrandConnectionCreated_At
  | BrandConnectionUpdated_At
  | BrandConnectionName
  | BrandConnectionIsDeleted
  | CreateBrandPayload
  | UpdateBrandPayload
  | DeleteBrandPayload
  | BusinessType
  | BusinessTypeConnection
  | BusinessTypeAggregator
  | BusinessTypeGroupBy
  | BusinessTypeConnectionId
  | BusinessTypeConnectionCreated_At
  | BusinessTypeConnectionUpdated_At
  | BusinessTypeConnectionName
  | BusinessTypeConnectionDescription
  | BusinessTypeConnectionIsActive
  | CreateBusinessTypePayload
  | UpdateBusinessTypePayload
  | DeleteBusinessTypePayload
  | CalendarEvent
  | CalendarEventConnection
  | CalendarEventAggregator
  | CalendarEventAggregatorSum
  | CalendarEventAggregatorAvg
  | CalendarEventAggregatorMin
  | CalendarEventAggregatorMax
  | CalendarEventGroupBy
  | CalendarEventConnectionId
  | CalendarEventConnectionCreated_At
  | CalendarEventConnectionUpdated_At
  | CalendarEventConnectionTitle
  | CalendarEventConnectionType
  | CalendarEventConnectionDay
  | CalendarEventConnectionWeek
  | CalendarEventConnectionMonth
  | CalendarEventConnectionYear
  | CreateCalendarEventPayload
  | UpdateCalendarEventPayload
  | DeleteCalendarEventPayload
  | City
  | CityConnection
  | CityAggregator
  | CityGroupBy
  | CityConnectionId
  | CityConnectionCreated_At
  | CityConnectionUpdated_At
  | CityConnectionName
  | CityConnectionState
  | CreateCityPayload
  | UpdateCityPayload
  | DeleteCityPayload
  | CompanyDetail
  | CompanyDetailConnection
  | CompanyDetailAggregator
  | CompanyDetailGroupBy
  | CompanyDetailConnectionId
  | CompanyDetailConnectionCreated_At
  | CompanyDetailConnectionUpdated_At
  | CompanyDetailConnectionReturnPolicy
  | CompanyDetailConnectionCompany
  | CompanyDetailConnectionPublished_At
  | CreateCompanyDetailPayload
  | UpdateCompanyDetailPayload
  | DeleteCompanyDetailPayload
  | CompanyEmployee
  | CompanyEmployeeConnection
  | CompanyEmployeeAggregator
  | CompanyEmployeeGroupBy
  | CompanyEmployeeConnectionId
  | CompanyEmployeeConnectionCreated_At
  | CompanyEmployeeConnectionUpdated_At
  | CompanyEmployeeConnectionUser
  | CompanyEmployeeConnectionCompany
  | CompanyEmployeeConnectionIsActive
  | CompanyEmployeeConnectionIsDeleted
  | CompanyEmployeeConnectionSalesman
  | CompanyEmployeeConnectionSupplier
  | CreateCompanyEmployeePayload
  | UpdateCompanyEmployeePayload
  | DeleteCompanyEmployeePayload
  | CompanyOwner
  | CompanyOwnerConnection
  | CompanyOwnerAggregator
  | CompanyOwnerGroupBy
  | CompanyOwnerConnectionId
  | CompanyOwnerConnectionCreated_At
  | CompanyOwnerConnectionUpdated_At
  | CompanyOwnerConnectionUser
  | CompanyOwnerConnectionCompany
  | CreateCompanyOwnerPayload
  | UpdateCompanyOwnerPayload
  | DeleteCompanyOwnerPayload
  | CompanyShopTradeConnection
  | CompanyShopTradeConnectionConnection
  | CompanyShopTradeConnectionAggregator
  | CompanyShopTradeConnectionGroupBy
  | CompanyShopTradeConnectionConnectionId
  | CompanyShopTradeConnectionConnectionCreated_At
  | CompanyShopTradeConnectionConnectionUpdated_At
  | CompanyShopTradeConnectionConnectionCompany
  | CompanyShopTradeConnectionConnectionShop
  | CompanyShopTradeConnectionConnectionIsSuspendedByCompany
  | CompanyShopTradeConnectionConnectionIsBlockedByCompany
  | CompanyShopTradeConnectionConnectionIsBlockedByShop
  | CreateCompanyShopTradeConnectionPayload
  | UpdateCompanyShopTradeConnectionPayload
  | DeleteCompanyShopTradeConnectionPayload
  | CompanyType
  | CompanyTypeConnection
  | CompanyTypeAggregator
  | CompanyTypeGroupBy
  | CompanyTypeConnectionId
  | CompanyTypeConnectionCreated_At
  | CompanyTypeConnectionUpdated_At
  | CompanyTypeConnectionName
  | CompanyTypeConnectionDescription
  | CompanyTypeConnectionIsActive
  | CreateCompanyTypePayload
  | UpdateCompanyTypePayload
  | DeleteCompanyTypePayload
  | Company
  | CompanyConnection
  | CompanyAggregator
  | CompanyGroupBy
  | CompanyConnectionId
  | CompanyConnectionCreated_At
  | CompanyConnectionUpdated_At
  | CompanyConnectionName
  | CompanyConnectionBusinessType
  | CompanyConnectionCompanyType
  | CompanyConnectionSku
  | CompanyConnectionRegisteredAddress
  | CompanyConnectionIsActive
  | CompanyConnectionIsDeleted
  | CompanyConnectionCompanyDetail
  | CreateCompanyPayload
  | UpdateCompanyPayload
  | DeleteCompanyPayload
  | Country
  | CountryConnection
  | CountryAggregator
  | CountryGroupBy
  | CountryConnectionId
  | CountryConnectionCreated_At
  | CountryConnectionUpdated_At
  | CountryConnectionName
  | CreateCountryPayload
  | UpdateCountryPayload
  | DeleteCountryPayload
  | OrderLine
  | OrderLineConnection
  | OrderLineAggregator
  | OrderLineAggregatorSum
  | OrderLineAggregatorAvg
  | OrderLineAggregatorMin
  | OrderLineAggregatorMax
  | OrderLineGroupBy
  | OrderLineConnectionId
  | OrderLineConnectionCreated_At
  | OrderLineConnectionUpdated_At
  | OrderLineConnectionIndex
  | OrderLineConnectionOrder
  | OrderLineConnectionProductVariant
  | OrderLineConnectionQuantity
  | OrderLineConnectionUnitPrice
  | OrderLineConnectionProductTitle
  | OrderLineConnectionProductVariantTitle
  | OrderLineConnectionProductVariantAttributes
  | OrderLineConnectionOrderShipment
  | OrderLineConnectionProductPrice
  | CreateOrderLinePayload
  | UpdateOrderLinePayload
  | DeleteOrderLinePayload
  | OrderShipment
  | OrderShipmentConnection
  | OrderShipmentAggregator
  | OrderShipmentGroupBy
  | OrderShipmentConnectionId
  | OrderShipmentConnectionCreated_At
  | OrderShipmentConnectionUpdated_At
  | OrderShipmentConnectionCurrentStatus
  | OrderShipmentConnectionTracking
  | OrderShipmentConnectionCompany
  | CreateOrderShipmentPayload
  | UpdateOrderShipmentPayload
  | DeleteOrderShipmentPayload
  | Order
  | OrderConnection
  | OrderAggregator
  | OrderGroupBy
  | OrderConnectionId
  | OrderConnectionCreated_At
  | OrderConnectionUpdated_At
  | OrderConnectionNumber
  | OrderConnectionNote
  | OrderConnectionCurrentStatus
  | OrderConnectionPaymentStatus
  | OrderConnectionPaymentMethod
  | OrderConnectionShop
  | CreateOrderPayload
  | UpdateOrderPayload
  | DeleteOrderPayload
  | PaymentMethod
  | PaymentMethodConnection
  | PaymentMethodAggregator
  | PaymentMethodGroupBy
  | PaymentMethodConnectionId
  | PaymentMethodConnectionCreated_At
  | PaymentMethodConnectionUpdated_At
  | PaymentMethodConnectionName
  | CreatePaymentMethodPayload
  | UpdatePaymentMethodPayload
  | DeletePaymentMethodPayload
  | PlatformDetail
  | UpdatePlatformDetailPayload
  | DeletePlatformDetailPayload
  | PriceRule
  | PriceRuleConnection
  | PriceRuleAggregator
  | PriceRuleAggregatorSum
  | PriceRuleAggregatorAvg
  | PriceRuleAggregatorMin
  | PriceRuleAggregatorMax
  | PriceRuleGroupBy
  | PriceRuleConnectionId
  | PriceRuleConnectionCreated_At
  | PriceRuleConnectionUpdated_At
  | PriceRuleConnectionName
  | PriceRuleConnectionMinSellingQuantity
  | PriceRuleConnectionStartDateTime
  | PriceRuleConnectionEndDateTime
  | PriceRuleConnectionComputationType
  | PriceRuleConnectionComputeValue
  | PriceRuleConnectionPreviousVersion
  | PriceRuleConnectionPublished_At
  | CreatePriceRulePayload
  | UpdatePriceRulePayload
  | DeletePriceRulePayload
  | ProductCategory
  | ProductCategoryConnection
  | ProductCategoryAggregator
  | ProductCategoryGroupBy
  | ProductCategoryConnectionId
  | ProductCategoryConnectionCreated_At
  | ProductCategoryConnectionUpdated_At
  | ProductCategoryConnectionName
  | ProductCategoryConnectionDescription
  | ProductCategoryConnectionImage
  | ProductCategoryConnectionParentCategory
  | ProductCategoryConnectionSku
  | ProductCategoryConnectionCompany
  | ProductCategoryConnectionIsActive
  | ProductCategoryConnectionIsDeleted
  | CreateProductCategoryPayload
  | UpdateProductCategoryPayload
  | DeleteProductCategoryPayload
  | ProductVariant
  | ProductVariantConnection
  | ProductVariantAggregator
  | ProductVariantAggregatorSum
  | ProductVariantAggregatorAvg
  | ProductVariantAggregatorMin
  | ProductVariantAggregatorMax
  | ProductVariantGroupBy
  | ProductVariantConnectionId
  | ProductVariantConnectionCreated_At
  | ProductVariantConnectionUpdated_At
  | ProductVariantConnectionTitle
  | ProductVariantConnectionSku
  | ProductVariantConnectionAvailableStock
  | ProductVariantConnectionPresentStock
  | ProductVariantConnectionLowStock
  | ProductVariantConnectionUnitValue
  | ProductVariantConnectionMinSellingQuantity
  | ProductVariantConnectionMaxSellingQuantity
  | ProductVariantConnectionDescription
  | ProductVariantConnectionProduct
  | ProductVariantConnectionPrice
  | ProductVariantConnectionIsDeleted
  | ProductVariantConnectionPublished_At
  | CreateProductVariantPayload
  | UpdateProductVariantPayload
  | DeleteProductVariantPayload
  | Product
  | ProductConnection
  | ProductAggregator
  | ProductAggregatorSum
  | ProductAggregatorAvg
  | ProductAggregatorMin
  | ProductAggregatorMax
  | ProductGroupBy
  | ProductConnectionId
  | ProductConnectionCreated_At
  | ProductConnectionUpdated_At
  | ProductConnectionTitle
  | ProductConnectionSku
  | ProductConnectionDescription
  | ProductConnectionLongDescription
  | ProductConnectionProductCategory
  | ProductConnectionBrand
  | ProductConnectionUnit
  | ProductConnectionBuyingPrice
  | ProductConnectionSpecifications
  | ProductConnectionImage
  | ProductConnectionCompany
  | ProductConnectionPrice
  | ProductConnectionIsDeleted
  | ProductConnectionPublished_At
  | CreateProductPayload
  | UpdateProductPayload
  | DeleteProductPayload
  | Salesman
  | SalesmanConnection
  | SalesmanAggregator
  | SalesmanGroupBy
  | SalesmanConnectionId
  | SalesmanConnectionCreated_At
  | SalesmanConnectionUpdated_At
  | SalesmanConnectionCompanyEmployee
  | CreateSalesmanPayload
  | UpdateSalesmanPayload
  | DeleteSalesmanPayload
  | Shop
  | ShopConnection
  | ShopAggregator
  | ShopAggregatorSum
  | ShopAggregatorAvg
  | ShopAggregatorMin
  | ShopAggregatorMax
  | ShopGroupBy
  | ShopConnectionId
  | ShopConnectionCreated_At
  | ShopConnectionUpdated_At
  | ShopConnectionName
  | ShopConnectionRating
  | ShopConnectionGstNumber
  | ShopConnectionOpeningYear
  | ShopConnectionGstRegistrationType
  | ShopConnectionWebsiteUrl
  | ShopConnectionBillingAddress
  | ShopConnectionIsActive
  | ShopConnectionIsDeleted
  | ShopConnectionCart
  | CreateShopPayload
  | UpdateShopPayload
  | DeleteShopPayload
  | Shopkeeper
  | ShopkeeperConnection
  | ShopkeeperAggregator
  | ShopkeeperGroupBy
  | ShopkeeperConnectionId
  | ShopkeeperConnectionCreated_At
  | ShopkeeperConnectionUpdated_At
  | ShopkeeperConnectionUser
  | CreateShopkeeperPayload
  | UpdateShopkeeperPayload
  | DeleteShopkeeperPayload
  | State
  | StateConnection
  | StateAggregator
  | StateGroupBy
  | StateConnectionId
  | StateConnectionCreated_At
  | StateConnectionUpdated_At
  | StateConnectionName
  | StateConnectionCountry
  | CreateStatePayload
  | UpdateStatePayload
  | DeleteStatePayload
  | Supplier
  | SupplierConnection
  | SupplierAggregator
  | SupplierGroupBy
  | SupplierConnectionId
  | SupplierConnectionCreated_At
  | SupplierConnectionUpdated_At
  | SupplierConnectionCompanyEmployee
  | CreateSupplierPayload
  | UpdateSupplierPayload
  | DeleteSupplierPayload
  | TransactionType
  | TransactionTypeConnection
  | TransactionTypeAggregator
  | TransactionTypeGroupBy
  | TransactionTypeConnectionId
  | TransactionTypeConnectionCreated_At
  | TransactionTypeConnectionUpdated_At
  | TransactionTypeConnectionName
  | TransactionTypeConnectionLedgerType
  | TransactionTypeConnectionIsActive
  | CreateTransactionTypePayload
  | UpdateTransactionTypePayload
  | DeleteTransactionTypePayload
  | Unit
  | UnitConnection
  | UnitAggregator
  | UnitAggregatorSum
  | UnitAggregatorAvg
  | UnitAggregatorMin
  | UnitAggregatorMax
  | UnitGroupBy
  | UnitConnectionId
  | UnitConnectionCreated_At
  | UnitConnectionUpdated_At
  | UnitConnectionName
  | UnitConnectionShortCode
  | UnitConnectionQuantity
  | UnitConnectionIsActive
  | CreateUnitPayload
  | UpdateUnitPayload
  | DeleteUnitPayload
  | UploadFile
  | UploadFileConnection
  | UploadFileAggregator
  | UploadFileAggregatorSum
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMin
  | UploadFileAggregatorMax
  | UploadFileGroupBy
  | UploadFileConnectionId
  | UploadFileConnectionCreated_At
  | UploadFileConnectionUpdated_At
  | UploadFileConnectionName
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionWidth
  | UploadFileConnectionHeight
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionExt
  | UploadFileConnectionMime
  | UploadFileConnectionSize
  | UploadFileConnectionUrl
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | DeleteFilePayload
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionType
  | CreateRolePayload
  | UpdateRolePayload
  | DeleteRolePayload
  | UsersPermissionsUser
  | UsersPermissionsUserConnection
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserGroupBy
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionCreated_At
  | UsersPermissionsUserConnectionUpdated_At
  | UsersPermissionsUserConnectionMobileNumber
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionFirstName
  | UsersPermissionsUserConnectionGender
  | UsersPermissionsUserConnectionAlternateMobileNumber
  | UsersPermissionsUserConnectionDateOfBirth
  | UsersPermissionsUserConnectionLastName
  | UsersPermissionsUserConnectionShopkeeper
  | UsersPermissionsUserConnectionCompanyOwner
  | UsersPermissionsUserConnectionCompanyEmployee
  | CreateUserPayload
  | UpdateUserPayload
  | DeleteUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createAddress?: Maybe<CreateAddressPayload>;
  updateAddress?: Maybe<UpdateAddressPayload>;
  deleteAddress?: Maybe<DeleteAddressPayload>;
  createArea?: Maybe<CreateAreaPayload>;
  updateArea?: Maybe<UpdateAreaPayload>;
  deleteArea?: Maybe<DeleteAreaPayload>;
  createAttributeValue?: Maybe<CreateAttributeValuePayload>;
  updateAttributeValue?: Maybe<UpdateAttributeValuePayload>;
  deleteAttributeValue?: Maybe<DeleteAttributeValuePayload>;
  createAttribute?: Maybe<CreateAttributePayload>;
  updateAttribute?: Maybe<UpdateAttributePayload>;
  deleteAttribute?: Maybe<DeleteAttributePayload>;
  createBrand?: Maybe<CreateBrandPayload>;
  updateBrand?: Maybe<UpdateBrandPayload>;
  deleteBrand?: Maybe<DeleteBrandPayload>;
  createBusinessType?: Maybe<CreateBusinessTypePayload>;
  updateBusinessType?: Maybe<UpdateBusinessTypePayload>;
  deleteBusinessType?: Maybe<DeleteBusinessTypePayload>;
  createCalendarEvent?: Maybe<CreateCalendarEventPayload>;
  updateCalendarEvent?: Maybe<UpdateCalendarEventPayload>;
  deleteCalendarEvent?: Maybe<DeleteCalendarEventPayload>;
  createCity?: Maybe<CreateCityPayload>;
  updateCity?: Maybe<UpdateCityPayload>;
  deleteCity?: Maybe<DeleteCityPayload>;
  createCompanyDetail?: Maybe<CreateCompanyDetailPayload>;
  updateCompanyDetail?: Maybe<UpdateCompanyDetailPayload>;
  deleteCompanyDetail?: Maybe<DeleteCompanyDetailPayload>;
  createCompanyEmployee?: Maybe<CreateCompanyEmployeePayload>;
  updateCompanyEmployee?: Maybe<UpdateCompanyEmployeePayload>;
  deleteCompanyEmployee?: Maybe<DeleteCompanyEmployeePayload>;
  createCompanyOwner?: Maybe<CreateCompanyOwnerPayload>;
  updateCompanyOwner?: Maybe<UpdateCompanyOwnerPayload>;
  deleteCompanyOwner?: Maybe<DeleteCompanyOwnerPayload>;
  createCompanyShopTradeConnection?: Maybe<CreateCompanyShopTradeConnectionPayload>;
  updateCompanyShopTradeConnection?: Maybe<UpdateCompanyShopTradeConnectionPayload>;
  deleteCompanyShopTradeConnection?: Maybe<DeleteCompanyShopTradeConnectionPayload>;
  createCompanyType?: Maybe<CreateCompanyTypePayload>;
  updateCompanyType?: Maybe<UpdateCompanyTypePayload>;
  deleteCompanyType?: Maybe<DeleteCompanyTypePayload>;
  createCompany?: Maybe<CreateCompanyPayload>;
  updateCompany?: Maybe<UpdateCompanyPayload>;
  deleteCompany?: Maybe<DeleteCompanyPayload>;
  createCountry?: Maybe<CreateCountryPayload>;
  updateCountry?: Maybe<UpdateCountryPayload>;
  deleteCountry?: Maybe<DeleteCountryPayload>;
  createOrderLine?: Maybe<CreateOrderLinePayload>;
  updateOrderLine?: Maybe<UpdateOrderLinePayload>;
  deleteOrderLine?: Maybe<DeleteOrderLinePayload>;
  createOrderShipment?: Maybe<CreateOrderShipmentPayload>;
  updateOrderShipment?: Maybe<UpdateOrderShipmentPayload>;
  deleteOrderShipment?: Maybe<DeleteOrderShipmentPayload>;
  createOrder?: Maybe<CreateOrderPayload>;
  updateOrder?: Maybe<UpdateOrderPayload>;
  deleteOrder?: Maybe<DeleteOrderPayload>;
  createPaymentMethod?: Maybe<CreatePaymentMethodPayload>;
  updatePaymentMethod?: Maybe<UpdatePaymentMethodPayload>;
  deletePaymentMethod?: Maybe<DeletePaymentMethodPayload>;
  updatePlatformDetail?: Maybe<UpdatePlatformDetailPayload>;
  deletePlatformDetail?: Maybe<DeletePlatformDetailPayload>;
  createPriceRule?: Maybe<CreatePriceRulePayload>;
  updatePriceRule?: Maybe<UpdatePriceRulePayload>;
  deletePriceRule?: Maybe<DeletePriceRulePayload>;
  createProductCategory?: Maybe<CreateProductCategoryPayload>;
  updateProductCategory?: Maybe<UpdateProductCategoryPayload>;
  deleteProductCategory?: Maybe<DeleteProductCategoryPayload>;
  createProductVariant?: Maybe<CreateProductVariantPayload>;
  updateProductVariant?: Maybe<UpdateProductVariantPayload>;
  deleteProductVariant?: Maybe<DeleteProductVariantPayload>;
  createProduct?: Maybe<CreateProductPayload>;
  updateProduct?: Maybe<UpdateProductPayload>;
  deleteProduct?: Maybe<DeleteProductPayload>;
  createSalesman?: Maybe<CreateSalesmanPayload>;
  updateSalesman?: Maybe<UpdateSalesmanPayload>;
  deleteSalesman?: Maybe<DeleteSalesmanPayload>;
  createShop?: Maybe<CreateShopPayload>;
  updateShop?: Maybe<UpdateShopPayload>;
  deleteShop?: Maybe<DeleteShopPayload>;
  createShopkeeper?: Maybe<CreateShopkeeperPayload>;
  updateShopkeeper?: Maybe<UpdateShopkeeperPayload>;
  deleteShopkeeper?: Maybe<DeleteShopkeeperPayload>;
  createState?: Maybe<CreateStatePayload>;
  updateState?: Maybe<UpdateStatePayload>;
  deleteState?: Maybe<DeleteStatePayload>;
  createSupplier?: Maybe<CreateSupplierPayload>;
  updateSupplier?: Maybe<UpdateSupplierPayload>;
  deleteSupplier?: Maybe<DeleteSupplierPayload>;
  createTransactionType?: Maybe<CreateTransactionTypePayload>;
  updateTransactionType?: Maybe<UpdateTransactionTypePayload>;
  deleteTransactionType?: Maybe<DeleteTransactionTypePayload>;
  createUnit?: Maybe<CreateUnitPayload>;
  updateUnit?: Maybe<UpdateUnitPayload>;
  deleteUnit?: Maybe<DeleteUnitPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  _createOrderLine?: Maybe<CreateOrderLinePayload>;
  _placeOrder?: Maybe<UpdateOrderPayload>;
  _addShopShippingAddress?: Maybe<UpdateShopPayload>;
  _addShopHoliday?: Maybe<UpdateShopPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  signIn: UsersPermissionsAuthUserTokenPayload;
  signUp?: Maybe<UserPermissionsOkPayload>;
  sendOtp?: Maybe<UserPermissionsSendSmsConfirmationPayload>;
  verify?: Maybe<UsersPermissionsAuthUserTokenPayload>;
  createPassword?: Maybe<UsersPermissionsAuthUserTokenPayload>;
};

export type MutationCreateAddressArgs = {
  input?: Maybe<CreateAddressInput>;
};

export type MutationUpdateAddressArgs = {
  input?: Maybe<UpdateAddressInput>;
};

export type MutationDeleteAddressArgs = {
  input?: Maybe<DeleteAddressInput>;
};

export type MutationCreateAreaArgs = {
  input?: Maybe<CreateAreaInput>;
};

export type MutationUpdateAreaArgs = {
  input?: Maybe<UpdateAreaInput>;
};

export type MutationDeleteAreaArgs = {
  input?: Maybe<DeleteAreaInput>;
};

export type MutationCreateAttributeValueArgs = {
  input?: Maybe<CreateAttributeValueInput>;
};

export type MutationUpdateAttributeValueArgs = {
  input?: Maybe<UpdateAttributeValueInput>;
};

export type MutationDeleteAttributeValueArgs = {
  input?: Maybe<DeleteAttributeValueInput>;
};

export type MutationCreateAttributeArgs = {
  input?: Maybe<CreateAttributeInput>;
};

export type MutationUpdateAttributeArgs = {
  input?: Maybe<UpdateAttributeInput>;
};

export type MutationDeleteAttributeArgs = {
  input?: Maybe<DeleteAttributeInput>;
};

export type MutationCreateBrandArgs = {
  input?: Maybe<CreateBrandInput>;
};

export type MutationUpdateBrandArgs = {
  input?: Maybe<UpdateBrandInput>;
};

export type MutationDeleteBrandArgs = {
  input?: Maybe<DeleteBrandInput>;
};

export type MutationCreateBusinessTypeArgs = {
  input?: Maybe<CreateBusinessTypeInput>;
};

export type MutationUpdateBusinessTypeArgs = {
  input?: Maybe<UpdateBusinessTypeInput>;
};

export type MutationDeleteBusinessTypeArgs = {
  input?: Maybe<DeleteBusinessTypeInput>;
};

export type MutationCreateCalendarEventArgs = {
  input?: Maybe<CreateCalendarEventInput>;
};

export type MutationUpdateCalendarEventArgs = {
  input?: Maybe<UpdateCalendarEventInput>;
};

export type MutationDeleteCalendarEventArgs = {
  input?: Maybe<DeleteCalendarEventInput>;
};

export type MutationCreateCityArgs = {
  input?: Maybe<CreateCityInput>;
};

export type MutationUpdateCityArgs = {
  input?: Maybe<UpdateCityInput>;
};

export type MutationDeleteCityArgs = {
  input?: Maybe<DeleteCityInput>;
};

export type MutationCreateCompanyDetailArgs = {
  input?: Maybe<CreateCompanyDetailInput>;
};

export type MutationUpdateCompanyDetailArgs = {
  input?: Maybe<UpdateCompanyDetailInput>;
};

export type MutationDeleteCompanyDetailArgs = {
  input?: Maybe<DeleteCompanyDetailInput>;
};

export type MutationCreateCompanyEmployeeArgs = {
  input?: Maybe<CreateCompanyEmployeeInput>;
};

export type MutationUpdateCompanyEmployeeArgs = {
  input?: Maybe<UpdateCompanyEmployeeInput>;
};

export type MutationDeleteCompanyEmployeeArgs = {
  input?: Maybe<DeleteCompanyEmployeeInput>;
};

export type MutationCreateCompanyOwnerArgs = {
  input?: Maybe<CreateCompanyOwnerInput>;
};

export type MutationUpdateCompanyOwnerArgs = {
  input?: Maybe<UpdateCompanyOwnerInput>;
};

export type MutationDeleteCompanyOwnerArgs = {
  input?: Maybe<DeleteCompanyOwnerInput>;
};

export type MutationCreateCompanyShopTradeConnectionArgs = {
  input?: Maybe<CreateCompanyShopTradeConnectionInput>;
};

export type MutationUpdateCompanyShopTradeConnectionArgs = {
  input?: Maybe<UpdateCompanyShopTradeConnectionInput>;
};

export type MutationDeleteCompanyShopTradeConnectionArgs = {
  input?: Maybe<DeleteCompanyShopTradeConnectionInput>;
};

export type MutationCreateCompanyTypeArgs = {
  input?: Maybe<CreateCompanyTypeInput>;
};

export type MutationUpdateCompanyTypeArgs = {
  input?: Maybe<UpdateCompanyTypeInput>;
};

export type MutationDeleteCompanyTypeArgs = {
  input?: Maybe<DeleteCompanyTypeInput>;
};

export type MutationCreateCompanyArgs = {
  input?: Maybe<CreateCompanyInput>;
};

export type MutationUpdateCompanyArgs = {
  input?: Maybe<UpdateCompanyInput>;
};

export type MutationDeleteCompanyArgs = {
  input?: Maybe<DeleteCompanyInput>;
};

export type MutationCreateCountryArgs = {
  input?: Maybe<CreateCountryInput>;
};

export type MutationUpdateCountryArgs = {
  input?: Maybe<UpdateCountryInput>;
};

export type MutationDeleteCountryArgs = {
  input?: Maybe<DeleteCountryInput>;
};

export type MutationCreateOrderLineArgs = {
  input?: Maybe<CreateOrderLineInput>;
};

export type MutationUpdateOrderLineArgs = {
  input?: Maybe<UpdateOrderLineInput>;
};

export type MutationDeleteOrderLineArgs = {
  input?: Maybe<DeleteOrderLineInput>;
};

export type MutationCreateOrderShipmentArgs = {
  input?: Maybe<CreateOrderShipmentInput>;
};

export type MutationUpdateOrderShipmentArgs = {
  input?: Maybe<UpdateOrderShipmentInput>;
};

export type MutationDeleteOrderShipmentArgs = {
  input?: Maybe<DeleteOrderShipmentInput>;
};

export type MutationCreateOrderArgs = {
  input?: Maybe<CreateOrderInput>;
};

export type MutationUpdateOrderArgs = {
  input?: Maybe<UpdateOrderInput>;
};

export type MutationDeleteOrderArgs = {
  input?: Maybe<DeleteOrderInput>;
};

export type MutationCreatePaymentMethodArgs = {
  input?: Maybe<CreatePaymentMethodInput>;
};

export type MutationUpdatePaymentMethodArgs = {
  input?: Maybe<UpdatePaymentMethodInput>;
};

export type MutationDeletePaymentMethodArgs = {
  input?: Maybe<DeletePaymentMethodInput>;
};

export type MutationUpdatePlatformDetailArgs = {
  input?: Maybe<UpdatePlatformDetailInput>;
};

export type MutationCreatePriceRuleArgs = {
  input?: Maybe<CreatePriceRuleInput>;
};

export type MutationUpdatePriceRuleArgs = {
  input?: Maybe<UpdatePriceRuleInput>;
};

export type MutationDeletePriceRuleArgs = {
  input?: Maybe<DeletePriceRuleInput>;
};

export type MutationCreateProductCategoryArgs = {
  input?: Maybe<CreateProductCategoryInput>;
};

export type MutationUpdateProductCategoryArgs = {
  input?: Maybe<UpdateProductCategoryInput>;
};

export type MutationDeleteProductCategoryArgs = {
  input?: Maybe<DeleteProductCategoryInput>;
};

export type MutationCreateProductVariantArgs = {
  input?: Maybe<CreateProductVariantInput>;
};

export type MutationUpdateProductVariantArgs = {
  input?: Maybe<UpdateProductVariantInput>;
};

export type MutationDeleteProductVariantArgs = {
  input?: Maybe<DeleteProductVariantInput>;
};

export type MutationCreateProductArgs = {
  input?: Maybe<CreateProductInput>;
};

export type MutationUpdateProductArgs = {
  input?: Maybe<UpdateProductInput>;
};

export type MutationDeleteProductArgs = {
  input?: Maybe<DeleteProductInput>;
};

export type MutationCreateSalesmanArgs = {
  input?: Maybe<CreateSalesmanInput>;
};

export type MutationUpdateSalesmanArgs = {
  input?: Maybe<UpdateSalesmanInput>;
};

export type MutationDeleteSalesmanArgs = {
  input?: Maybe<DeleteSalesmanInput>;
};

export type MutationCreateShopArgs = {
  input?: Maybe<CreateShopInput>;
};

export type MutationUpdateShopArgs = {
  input?: Maybe<UpdateShopInput>;
};

export type MutationDeleteShopArgs = {
  input?: Maybe<DeleteShopInput>;
};

export type MutationCreateShopkeeperArgs = {
  input?: Maybe<CreateShopkeeperInput>;
};

export type MutationUpdateShopkeeperArgs = {
  input?: Maybe<UpdateShopkeeperInput>;
};

export type MutationDeleteShopkeeperArgs = {
  input?: Maybe<DeleteShopkeeperInput>;
};

export type MutationCreateStateArgs = {
  input?: Maybe<CreateStateInput>;
};

export type MutationUpdateStateArgs = {
  input?: Maybe<UpdateStateInput>;
};

export type MutationDeleteStateArgs = {
  input?: Maybe<DeleteStateInput>;
};

export type MutationCreateSupplierArgs = {
  input?: Maybe<CreateSupplierInput>;
};

export type MutationUpdateSupplierArgs = {
  input?: Maybe<UpdateSupplierInput>;
};

export type MutationDeleteSupplierArgs = {
  input?: Maybe<DeleteSupplierInput>;
};

export type MutationCreateTransactionTypeArgs = {
  input?: Maybe<CreateTransactionTypeInput>;
};

export type MutationUpdateTransactionTypeArgs = {
  input?: Maybe<UpdateTransactionTypeInput>;
};

export type MutationDeleteTransactionTypeArgs = {
  input?: Maybe<DeleteTransactionTypeInput>;
};

export type MutationCreateUnitArgs = {
  input?: Maybe<CreateUnitInput>;
};

export type MutationUpdateUnitArgs = {
  input?: Maybe<UpdateUnitInput>;
};

export type MutationDeleteUnitArgs = {
  input?: Maybe<DeleteUnitInput>;
};

export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};

export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};

export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};

export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};

export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};

export type Mutation_CreateOrderLineArgs = {
  input?: Maybe<_CreateOrderLineInput>;
};

export type Mutation_PlaceOrderArgs = {
  input?: Maybe<_PlaceOrderInput>;
};

export type Mutation_AddShopShippingAddressArgs = {
  input?: Maybe<_AddShopShippingAddressInput>;
};

export type Mutation_AddShopHolidayArgs = {
  input?: Maybe<_AddShopHolidayInput>;
};

export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};

export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type MutationSignInArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationSignUpArgs = {
  mobileNumber: Scalars['String'];
};

export type MutationSendOtpArgs = {
  mobileNumber: Scalars['String'];
};

export type MutationVerifyArgs = {
  mobileNumber: Scalars['String'];
  confirmation: Scalars['String'];
};

export type MutationCreatePasswordArgs = {
  password: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  number?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  currentStatus?: Maybe<Enum_Order_Currentstatus>;
  paymentStatus?: Maybe<Enum_Order_Paymentstatus>;
  paymentMethod?: Maybe<PaymentMethod>;
  shop?: Maybe<Shop>;
  orderLines?: Maybe<Array<Maybe<OrderLine>>>;
};

export type OrderOrderLinesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type OrderAggregator = {
  __typename?: 'OrderAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  values?: Maybe<Array<Maybe<Order>>>;
  groupBy?: Maybe<OrderGroupBy>;
  aggregate?: Maybe<OrderAggregator>;
};

export type OrderConnectionCreated_At = {
  __typename?: 'OrderConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionCurrentStatus = {
  __typename?: 'OrderConnectionCurrentStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionId = {
  __typename?: 'OrderConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionNote = {
  __typename?: 'OrderConnectionNote';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionNumber = {
  __typename?: 'OrderConnectionNumber';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionPaymentMethod = {
  __typename?: 'OrderConnectionPaymentMethod';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionPaymentStatus = {
  __typename?: 'OrderConnectionPaymentStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionShop = {
  __typename?: 'OrderConnectionShop';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderConnectionUpdated_At = {
  __typename?: 'OrderConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrderConnection>;
};

export type OrderGroupBy = {
  __typename?: 'OrderGroupBy';
  id?: Maybe<Array<Maybe<OrderConnectionId>>>;
  created_at?: Maybe<Array<Maybe<OrderConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<OrderConnectionUpdated_At>>>;
  number?: Maybe<Array<Maybe<OrderConnectionNumber>>>;
  note?: Maybe<Array<Maybe<OrderConnectionNote>>>;
  currentStatus?: Maybe<Array<Maybe<OrderConnectionCurrentStatus>>>;
  paymentStatus?: Maybe<Array<Maybe<OrderConnectionPaymentStatus>>>;
  paymentMethod?: Maybe<Array<Maybe<OrderConnectionPaymentMethod>>>;
  shop?: Maybe<Array<Maybe<OrderConnectionShop>>>;
};

export type OrderInput = {
  number?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  currentStatus?: Maybe<Enum_Order_Currentstatus>;
  paymentStatus?: Maybe<Enum_Order_Paymentstatus>;
  paymentMethod?: Maybe<Scalars['ID']>;
  shop?: Maybe<Scalars['ID']>;
  orderLines?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type OrderLine = {
  __typename?: 'OrderLine';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  index?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
  productVariant?: Maybe<ProductVariant>;
  quantity: Scalars['Int'];
  unitPrice: Scalars['Float'];
  productTitle: Scalars['String'];
  productVariantTitle?: Maybe<Scalars['String']>;
  productVariantAttributes?: Maybe<Scalars['JSON']>;
  orderShipment?: Maybe<OrderShipment>;
  productPrice: Scalars['Float'];
  appliedPriceRules?: Maybe<Array<Maybe<PriceRule>>>;
};

export type OrderLineAppliedPriceRulesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type OrderLineAggregator = {
  __typename?: 'OrderLineAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<OrderLineAggregatorSum>;
  avg?: Maybe<OrderLineAggregatorAvg>;
  min?: Maybe<OrderLineAggregatorMin>;
  max?: Maybe<OrderLineAggregatorMax>;
};

export type OrderLineAggregatorAvg = {
  __typename?: 'OrderLineAggregatorAvg';
  index?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  productPrice?: Maybe<Scalars['Float']>;
};

export type OrderLineAggregatorMax = {
  __typename?: 'OrderLineAggregatorMax';
  index?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  productPrice?: Maybe<Scalars['Float']>;
};

export type OrderLineAggregatorMin = {
  __typename?: 'OrderLineAggregatorMin';
  index?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  productPrice?: Maybe<Scalars['Float']>;
};

export type OrderLineAggregatorSum = {
  __typename?: 'OrderLineAggregatorSum';
  index?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  productPrice?: Maybe<Scalars['Float']>;
};

export type OrderLineConnection = {
  __typename?: 'OrderLineConnection';
  values?: Maybe<Array<Maybe<OrderLine>>>;
  groupBy?: Maybe<OrderLineGroupBy>;
  aggregate?: Maybe<OrderLineAggregator>;
};

export type OrderLineConnectionCreated_At = {
  __typename?: 'OrderLineConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrderLineConnection>;
};

export type OrderLineConnectionId = {
  __typename?: 'OrderLineConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderLineConnection>;
};

export type OrderLineConnectionIndex = {
  __typename?: 'OrderLineConnectionIndex';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<OrderLineConnection>;
};

export type OrderLineConnectionOrder = {
  __typename?: 'OrderLineConnectionOrder';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderLineConnection>;
};

export type OrderLineConnectionOrderShipment = {
  __typename?: 'OrderLineConnectionOrderShipment';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderLineConnection>;
};

export type OrderLineConnectionProductPrice = {
  __typename?: 'OrderLineConnectionProductPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<OrderLineConnection>;
};

export type OrderLineConnectionProductTitle = {
  __typename?: 'OrderLineConnectionProductTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrderLineConnection>;
};

export type OrderLineConnectionProductVariant = {
  __typename?: 'OrderLineConnectionProductVariant';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderLineConnection>;
};

export type OrderLineConnectionProductVariantAttributes = {
  __typename?: 'OrderLineConnectionProductVariantAttributes';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<OrderLineConnection>;
};

export type OrderLineConnectionProductVariantTitle = {
  __typename?: 'OrderLineConnectionProductVariantTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrderLineConnection>;
};

export type OrderLineConnectionQuantity = {
  __typename?: 'OrderLineConnectionQuantity';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<OrderLineConnection>;
};

export type OrderLineConnectionUnitPrice = {
  __typename?: 'OrderLineConnectionUnitPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<OrderLineConnection>;
};

export type OrderLineConnectionUpdated_At = {
  __typename?: 'OrderLineConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrderLineConnection>;
};

export type OrderLineGroupBy = {
  __typename?: 'OrderLineGroupBy';
  id?: Maybe<Array<Maybe<OrderLineConnectionId>>>;
  created_at?: Maybe<Array<Maybe<OrderLineConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<OrderLineConnectionUpdated_At>>>;
  index?: Maybe<Array<Maybe<OrderLineConnectionIndex>>>;
  order?: Maybe<Array<Maybe<OrderLineConnectionOrder>>>;
  productVariant?: Maybe<Array<Maybe<OrderLineConnectionProductVariant>>>;
  quantity?: Maybe<Array<Maybe<OrderLineConnectionQuantity>>>;
  unitPrice?: Maybe<Array<Maybe<OrderLineConnectionUnitPrice>>>;
  productTitle?: Maybe<Array<Maybe<OrderLineConnectionProductTitle>>>;
  productVariantTitle?: Maybe<Array<Maybe<OrderLineConnectionProductVariantTitle>>>;
  productVariantAttributes?: Maybe<Array<Maybe<OrderLineConnectionProductVariantAttributes>>>;
  orderShipment?: Maybe<Array<Maybe<OrderLineConnectionOrderShipment>>>;
  productPrice?: Maybe<Array<Maybe<OrderLineConnectionProductPrice>>>;
};

export type OrderLineInput = {
  index?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['ID']>;
  productVariant?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  unitPrice: Scalars['Float'];
  appliedPriceRules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  productTitle: Scalars['String'];
  productVariantTitle?: Maybe<Scalars['String']>;
  productVariantAttributes?: Maybe<Scalars['JSON']>;
  orderShipment?: Maybe<Scalars['ID']>;
  productPrice: Scalars['Float'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type OrderShipment = {
  __typename?: 'OrderShipment';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  currentStatus: Enum_Ordershipment_Currentstatus;
  tracking?: Maybe<Scalars['JSON']>;
  company?: Maybe<Company>;
  orderLines?: Maybe<Array<Maybe<OrderLine>>>;
};

export type OrderShipmentOrderLinesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type OrderShipmentAggregator = {
  __typename?: 'OrderShipmentAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrderShipmentConnection = {
  __typename?: 'OrderShipmentConnection';
  values?: Maybe<Array<Maybe<OrderShipment>>>;
  groupBy?: Maybe<OrderShipmentGroupBy>;
  aggregate?: Maybe<OrderShipmentAggregator>;
};

export type OrderShipmentConnectionCompany = {
  __typename?: 'OrderShipmentConnectionCompany';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderShipmentConnection>;
};

export type OrderShipmentConnectionCreated_At = {
  __typename?: 'OrderShipmentConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrderShipmentConnection>;
};

export type OrderShipmentConnectionCurrentStatus = {
  __typename?: 'OrderShipmentConnectionCurrentStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<OrderShipmentConnection>;
};

export type OrderShipmentConnectionId = {
  __typename?: 'OrderShipmentConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<OrderShipmentConnection>;
};

export type OrderShipmentConnectionTracking = {
  __typename?: 'OrderShipmentConnectionTracking';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<OrderShipmentConnection>;
};

export type OrderShipmentConnectionUpdated_At = {
  __typename?: 'OrderShipmentConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<OrderShipmentConnection>;
};

export type OrderShipmentGroupBy = {
  __typename?: 'OrderShipmentGroupBy';
  id?: Maybe<Array<Maybe<OrderShipmentConnectionId>>>;
  created_at?: Maybe<Array<Maybe<OrderShipmentConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<OrderShipmentConnectionUpdated_At>>>;
  currentStatus?: Maybe<Array<Maybe<OrderShipmentConnectionCurrentStatus>>>;
  tracking?: Maybe<Array<Maybe<OrderShipmentConnectionTracking>>>;
  company?: Maybe<Array<Maybe<OrderShipmentConnectionCompany>>>;
};

export type OrderShipmentInput = {
  currentStatus: Enum_Ordershipment_Currentstatus;
  tracking?: Maybe<Scalars['JSON']>;
  company?: Maybe<Scalars['ID']>;
  orderLines?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
};

export type PaymentMethodAggregator = {
  __typename?: 'PaymentMethodAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PaymentMethodConnection = {
  __typename?: 'PaymentMethodConnection';
  values?: Maybe<Array<Maybe<PaymentMethod>>>;
  groupBy?: Maybe<PaymentMethodGroupBy>;
  aggregate?: Maybe<PaymentMethodAggregator>;
};

export type PaymentMethodConnectionCreated_At = {
  __typename?: 'PaymentMethodConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PaymentMethodConnection>;
};

export type PaymentMethodConnectionId = {
  __typename?: 'PaymentMethodConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PaymentMethodConnection>;
};

export type PaymentMethodConnectionName = {
  __typename?: 'PaymentMethodConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PaymentMethodConnection>;
};

export type PaymentMethodConnectionUpdated_At = {
  __typename?: 'PaymentMethodConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PaymentMethodConnection>;
};

export type PaymentMethodGroupBy = {
  __typename?: 'PaymentMethodGroupBy';
  id?: Maybe<Array<Maybe<PaymentMethodConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PaymentMethodConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PaymentMethodConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<PaymentMethodConnectionName>>>;
};

export type PaymentMethodInput = {
  name: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type PlatformDetail = {
  __typename?: 'PlatformDetail';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  privacyPolicy?: Maybe<Scalars['String']>;
  frequentlyAskedQuestions?: Maybe<Scalars['String']>;
  termsAndConditions?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type PlatformDetailInput = {
  privacyPolicy?: Maybe<Scalars['String']>;
  frequentlyAskedQuestions?: Maybe<Scalars['String']>;
  termsAndConditions?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type PriceRule = {
  __typename?: 'PriceRule';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  minSellingQuantity?: Maybe<Scalars['Int']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  computationType?: Maybe<Enum_Pricerule_Computationtype>;
  computeValue: Scalars['JSON'];
  previousVersion?: Maybe<PriceRule>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type PriceRuleAggregator = {
  __typename?: 'PriceRuleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<PriceRuleAggregatorSum>;
  avg?: Maybe<PriceRuleAggregatorAvg>;
  min?: Maybe<PriceRuleAggregatorMin>;
  max?: Maybe<PriceRuleAggregatorMax>;
};

export type PriceRuleAggregatorAvg = {
  __typename?: 'PriceRuleAggregatorAvg';
  minSellingQuantity?: Maybe<Scalars['Float']>;
};

export type PriceRuleAggregatorMax = {
  __typename?: 'PriceRuleAggregatorMax';
  minSellingQuantity?: Maybe<Scalars['Float']>;
};

export type PriceRuleAggregatorMin = {
  __typename?: 'PriceRuleAggregatorMin';
  minSellingQuantity?: Maybe<Scalars['Float']>;
};

export type PriceRuleAggregatorSum = {
  __typename?: 'PriceRuleAggregatorSum';
  minSellingQuantity?: Maybe<Scalars['Float']>;
};

export type PriceRuleConnection = {
  __typename?: 'PriceRuleConnection';
  values?: Maybe<Array<Maybe<PriceRule>>>;
  groupBy?: Maybe<PriceRuleGroupBy>;
  aggregate?: Maybe<PriceRuleAggregator>;
};

export type PriceRuleConnectionComputationType = {
  __typename?: 'PriceRuleConnectionComputationType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PriceRuleConnection>;
};

export type PriceRuleConnectionComputeValue = {
  __typename?: 'PriceRuleConnectionComputeValue';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<PriceRuleConnection>;
};

export type PriceRuleConnectionCreated_At = {
  __typename?: 'PriceRuleConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PriceRuleConnection>;
};

export type PriceRuleConnectionEndDateTime = {
  __typename?: 'PriceRuleConnectionEndDateTime';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PriceRuleConnection>;
};

export type PriceRuleConnectionId = {
  __typename?: 'PriceRuleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PriceRuleConnection>;
};

export type PriceRuleConnectionMinSellingQuantity = {
  __typename?: 'PriceRuleConnectionMinSellingQuantity';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<PriceRuleConnection>;
};

export type PriceRuleConnectionName = {
  __typename?: 'PriceRuleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PriceRuleConnection>;
};

export type PriceRuleConnectionPreviousVersion = {
  __typename?: 'PriceRuleConnectionPreviousVersion';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PriceRuleConnection>;
};

export type PriceRuleConnectionPublished_At = {
  __typename?: 'PriceRuleConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PriceRuleConnection>;
};

export type PriceRuleConnectionStartDateTime = {
  __typename?: 'PriceRuleConnectionStartDateTime';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PriceRuleConnection>;
};

export type PriceRuleConnectionUpdated_At = {
  __typename?: 'PriceRuleConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PriceRuleConnection>;
};

export type PriceRuleGroupBy = {
  __typename?: 'PriceRuleGroupBy';
  id?: Maybe<Array<Maybe<PriceRuleConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PriceRuleConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PriceRuleConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<PriceRuleConnectionName>>>;
  minSellingQuantity?: Maybe<Array<Maybe<PriceRuleConnectionMinSellingQuantity>>>;
  startDateTime?: Maybe<Array<Maybe<PriceRuleConnectionStartDateTime>>>;
  endDateTime?: Maybe<Array<Maybe<PriceRuleConnectionEndDateTime>>>;
  computationType?: Maybe<Array<Maybe<PriceRuleConnectionComputationType>>>;
  computeValue?: Maybe<Array<Maybe<PriceRuleConnectionComputeValue>>>;
  previousVersion?: Maybe<Array<Maybe<PriceRuleConnectionPreviousVersion>>>;
  published_at?: Maybe<Array<Maybe<PriceRuleConnectionPublished_At>>>;
};

export type PriceRuleInput = {
  name: Scalars['String'];
  minSellingQuantity?: Maybe<Scalars['Int']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  computationType?: Maybe<Enum_Pricerule_Computationtype>;
  computeValue: Scalars['JSON'];
  previousVersion?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  sku: Scalars['String'];
  description: Scalars['String'];
  longDescription?: Maybe<Scalars['String']>;
  productCategory?: Maybe<ProductCategory>;
  brand?: Maybe<Brand>;
  unit?: Maybe<Unit>;
  buyingPrice: Scalars['Float'];
  specifications?: Maybe<Scalars['JSON']>;
  image?: Maybe<UploadFile>;
  company?: Maybe<Company>;
  price?: Maybe<Scalars['Float']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  variantAttributes?: Maybe<Array<Maybe<Attribute>>>;
  productVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  appliedPriceRules?: Maybe<Array<Maybe<PriceRule>>>;
};

export type ProductVariantAttributesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProductProductVariantsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProductAppliedPriceRulesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProductAggregator = {
  __typename?: 'ProductAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ProductAggregatorSum>;
  avg?: Maybe<ProductAggregatorAvg>;
  min?: Maybe<ProductAggregatorMin>;
  max?: Maybe<ProductAggregatorMax>;
};

export type ProductAggregatorAvg = {
  __typename?: 'ProductAggregatorAvg';
  buyingPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductAggregatorMax = {
  __typename?: 'ProductAggregatorMax';
  buyingPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductAggregatorMin = {
  __typename?: 'ProductAggregatorMin';
  buyingPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductAggregatorSum = {
  __typename?: 'ProductAggregatorSum';
  buyingPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
  parentCategory?: Maybe<ProductCategory>;
  sku: Scalars['String'];
  company?: Maybe<Company>;
  isActive?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  subcategories?: Maybe<Array<Maybe<ProductCategory>>>;
  appliedPriceRules?: Maybe<Array<Maybe<PriceRule>>>;
  products?: Maybe<Array<Maybe<Product>>>;
};

export type ProductCategorySubcategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProductCategoryAppliedPriceRulesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProductCategoryProductsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProductCategoryAggregator = {
  __typename?: 'ProductCategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductCategoryConnection = {
  __typename?: 'ProductCategoryConnection';
  values?: Maybe<Array<Maybe<ProductCategory>>>;
  groupBy?: Maybe<ProductCategoryGroupBy>;
  aggregate?: Maybe<ProductCategoryAggregator>;
};

export type ProductCategoryConnectionCompany = {
  __typename?: 'ProductCategoryConnectionCompany';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductCategoryConnection>;
};

export type ProductCategoryConnectionCreated_At = {
  __typename?: 'ProductCategoryConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductCategoryConnection>;
};

export type ProductCategoryConnectionDescription = {
  __typename?: 'ProductCategoryConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductCategoryConnection>;
};

export type ProductCategoryConnectionId = {
  __typename?: 'ProductCategoryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductCategoryConnection>;
};

export type ProductCategoryConnectionImage = {
  __typename?: 'ProductCategoryConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductCategoryConnection>;
};

export type ProductCategoryConnectionIsActive = {
  __typename?: 'ProductCategoryConnectionIsActive';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<ProductCategoryConnection>;
};

export type ProductCategoryConnectionIsDeleted = {
  __typename?: 'ProductCategoryConnectionIsDeleted';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<ProductCategoryConnection>;
};

export type ProductCategoryConnectionName = {
  __typename?: 'ProductCategoryConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductCategoryConnection>;
};

export type ProductCategoryConnectionParentCategory = {
  __typename?: 'ProductCategoryConnectionParentCategory';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductCategoryConnection>;
};

export type ProductCategoryConnectionSku = {
  __typename?: 'ProductCategoryConnectionSku';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductCategoryConnection>;
};

export type ProductCategoryConnectionUpdated_At = {
  __typename?: 'ProductCategoryConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductCategoryConnection>;
};

export type ProductCategoryGroupBy = {
  __typename?: 'ProductCategoryGroupBy';
  id?: Maybe<Array<Maybe<ProductCategoryConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProductCategoryConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProductCategoryConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ProductCategoryConnectionName>>>;
  description?: Maybe<Array<Maybe<ProductCategoryConnectionDescription>>>;
  image?: Maybe<Array<Maybe<ProductCategoryConnectionImage>>>;
  parentCategory?: Maybe<Array<Maybe<ProductCategoryConnectionParentCategory>>>;
  sku?: Maybe<Array<Maybe<ProductCategoryConnectionSku>>>;
  company?: Maybe<Array<Maybe<ProductCategoryConnectionCompany>>>;
  isActive?: Maybe<Array<Maybe<ProductCategoryConnectionIsActive>>>;
  isDeleted?: Maybe<Array<Maybe<ProductCategoryConnectionIsDeleted>>>;
};

export type ProductCategoryInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  subcategories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentCategory?: Maybe<Scalars['ID']>;
  sku: Scalars['String'];
  appliedPriceRules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  company?: Maybe<Scalars['ID']>;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isActive?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  values?: Maybe<Array<Maybe<Product>>>;
  groupBy?: Maybe<ProductGroupBy>;
  aggregate?: Maybe<ProductAggregator>;
};

export type ProductConnectionBrand = {
  __typename?: 'ProductConnectionBrand';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionBuyingPrice = {
  __typename?: 'ProductConnectionBuyingPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionCompany = {
  __typename?: 'ProductConnectionCompany';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionCreated_At = {
  __typename?: 'ProductConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionDescription = {
  __typename?: 'ProductConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionId = {
  __typename?: 'ProductConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionImage = {
  __typename?: 'ProductConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionIsDeleted = {
  __typename?: 'ProductConnectionIsDeleted';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionLongDescription = {
  __typename?: 'ProductConnectionLongDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionPrice = {
  __typename?: 'ProductConnectionPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionProductCategory = {
  __typename?: 'ProductConnectionProductCategory';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionPublished_At = {
  __typename?: 'ProductConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionSku = {
  __typename?: 'ProductConnectionSku';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionSpecifications = {
  __typename?: 'ProductConnectionSpecifications';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionTitle = {
  __typename?: 'ProductConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionUnit = {
  __typename?: 'ProductConnectionUnit';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionUpdated_At = {
  __typename?: 'ProductConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  id?: Maybe<Array<Maybe<ProductConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProductConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProductConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<ProductConnectionTitle>>>;
  sku?: Maybe<Array<Maybe<ProductConnectionSku>>>;
  description?: Maybe<Array<Maybe<ProductConnectionDescription>>>;
  longDescription?: Maybe<Array<Maybe<ProductConnectionLongDescription>>>;
  productCategory?: Maybe<Array<Maybe<ProductConnectionProductCategory>>>;
  brand?: Maybe<Array<Maybe<ProductConnectionBrand>>>;
  unit?: Maybe<Array<Maybe<ProductConnectionUnit>>>;
  buyingPrice?: Maybe<Array<Maybe<ProductConnectionBuyingPrice>>>;
  specifications?: Maybe<Array<Maybe<ProductConnectionSpecifications>>>;
  image?: Maybe<Array<Maybe<ProductConnectionImage>>>;
  company?: Maybe<Array<Maybe<ProductConnectionCompany>>>;
  price?: Maybe<Array<Maybe<ProductConnectionPrice>>>;
  isDeleted?: Maybe<Array<Maybe<ProductConnectionIsDeleted>>>;
  published_at?: Maybe<Array<Maybe<ProductConnectionPublished_At>>>;
};

export type ProductInput = {
  title: Scalars['String'];
  sku: Scalars['String'];
  description: Scalars['String'];
  longDescription?: Maybe<Scalars['String']>;
  productCategory?: Maybe<Scalars['ID']>;
  brand?: Maybe<Scalars['ID']>;
  unit?: Maybe<Scalars['ID']>;
  buyingPrice: Scalars['Float'];
  specifications?: Maybe<Scalars['JSON']>;
  image?: Maybe<Scalars['ID']>;
  variantAttributes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  productVariants?: Maybe<Array<Maybe<Scalars['ID']>>>;
  appliedPriceRules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  company?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['Float']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  sku: Scalars['String'];
  availableStock: Scalars['Int'];
  presentStock: Scalars['Int'];
  lowStock?: Maybe<Scalars['Int']>;
  unitValue: Scalars['Float'];
  minSellingQuantity?: Maybe<Scalars['Int']>;
  maxSellingQuantity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  price?: Maybe<Scalars['Float']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  attributeValues?: Maybe<Array<Maybe<AttributeValue>>>;
  appliedPriceRules?: Maybe<Array<Maybe<PriceRule>>>;
  images?: Maybe<Array<Maybe<UploadFile>>>;
};

export type ProductVariantAttributeValuesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProductVariantAppliedPriceRulesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProductVariantImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProductVariantAggregator = {
  __typename?: 'ProductVariantAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ProductVariantAggregatorSum>;
  avg?: Maybe<ProductVariantAggregatorAvg>;
  min?: Maybe<ProductVariantAggregatorMin>;
  max?: Maybe<ProductVariantAggregatorMax>;
};

export type ProductVariantAggregatorAvg = {
  __typename?: 'ProductVariantAggregatorAvg';
  availableStock?: Maybe<Scalars['Float']>;
  presentStock?: Maybe<Scalars['Float']>;
  lowStock?: Maybe<Scalars['Float']>;
  unitValue?: Maybe<Scalars['Float']>;
  minSellingQuantity?: Maybe<Scalars['Float']>;
  maxSellingQuantity?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantAggregatorMax = {
  __typename?: 'ProductVariantAggregatorMax';
  availableStock?: Maybe<Scalars['Float']>;
  presentStock?: Maybe<Scalars['Float']>;
  lowStock?: Maybe<Scalars['Float']>;
  unitValue?: Maybe<Scalars['Float']>;
  minSellingQuantity?: Maybe<Scalars['Float']>;
  maxSellingQuantity?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantAggregatorMin = {
  __typename?: 'ProductVariantAggregatorMin';
  availableStock?: Maybe<Scalars['Float']>;
  presentStock?: Maybe<Scalars['Float']>;
  lowStock?: Maybe<Scalars['Float']>;
  unitValue?: Maybe<Scalars['Float']>;
  minSellingQuantity?: Maybe<Scalars['Float']>;
  maxSellingQuantity?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantAggregatorSum = {
  __typename?: 'ProductVariantAggregatorSum';
  availableStock?: Maybe<Scalars['Float']>;
  presentStock?: Maybe<Scalars['Float']>;
  lowStock?: Maybe<Scalars['Float']>;
  unitValue?: Maybe<Scalars['Float']>;
  minSellingQuantity?: Maybe<Scalars['Float']>;
  maxSellingQuantity?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type ProductVariantConnection = {
  __typename?: 'ProductVariantConnection';
  values?: Maybe<Array<Maybe<ProductVariant>>>;
  groupBy?: Maybe<ProductVariantGroupBy>;
  aggregate?: Maybe<ProductVariantAggregator>;
};

export type ProductVariantConnectionAvailableStock = {
  __typename?: 'ProductVariantConnectionAvailableStock';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantConnectionCreated_At = {
  __typename?: 'ProductVariantConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantConnectionDescription = {
  __typename?: 'ProductVariantConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantConnectionId = {
  __typename?: 'ProductVariantConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantConnectionIsDeleted = {
  __typename?: 'ProductVariantConnectionIsDeleted';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantConnectionLowStock = {
  __typename?: 'ProductVariantConnectionLowStock';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantConnectionMaxSellingQuantity = {
  __typename?: 'ProductVariantConnectionMaxSellingQuantity';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantConnectionMinSellingQuantity = {
  __typename?: 'ProductVariantConnectionMinSellingQuantity';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantConnectionPresentStock = {
  __typename?: 'ProductVariantConnectionPresentStock';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantConnectionPrice = {
  __typename?: 'ProductVariantConnectionPrice';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantConnectionProduct = {
  __typename?: 'ProductVariantConnectionProduct';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantConnectionPublished_At = {
  __typename?: 'ProductVariantConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantConnectionSku = {
  __typename?: 'ProductVariantConnectionSku';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantConnectionTitle = {
  __typename?: 'ProductVariantConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantConnectionUnitValue = {
  __typename?: 'ProductVariantConnectionUnitValue';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantConnectionUpdated_At = {
  __typename?: 'ProductVariantConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductVariantConnection>;
};

export type ProductVariantGroupBy = {
  __typename?: 'ProductVariantGroupBy';
  id?: Maybe<Array<Maybe<ProductVariantConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProductVariantConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProductVariantConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<ProductVariantConnectionTitle>>>;
  sku?: Maybe<Array<Maybe<ProductVariantConnectionSku>>>;
  availableStock?: Maybe<Array<Maybe<ProductVariantConnectionAvailableStock>>>;
  presentStock?: Maybe<Array<Maybe<ProductVariantConnectionPresentStock>>>;
  lowStock?: Maybe<Array<Maybe<ProductVariantConnectionLowStock>>>;
  unitValue?: Maybe<Array<Maybe<ProductVariantConnectionUnitValue>>>;
  minSellingQuantity?: Maybe<Array<Maybe<ProductVariantConnectionMinSellingQuantity>>>;
  maxSellingQuantity?: Maybe<Array<Maybe<ProductVariantConnectionMaxSellingQuantity>>>;
  description?: Maybe<Array<Maybe<ProductVariantConnectionDescription>>>;
  product?: Maybe<Array<Maybe<ProductVariantConnectionProduct>>>;
  price?: Maybe<Array<Maybe<ProductVariantConnectionPrice>>>;
  isDeleted?: Maybe<Array<Maybe<ProductVariantConnectionIsDeleted>>>;
  published_at?: Maybe<Array<Maybe<ProductVariantConnectionPublished_At>>>;
};

export type ProductVariantInput = {
  title: Scalars['String'];
  sku: Scalars['String'];
  availableStock: Scalars['Int'];
  presentStock: Scalars['Int'];
  lowStock?: Maybe<Scalars['Int']>;
  unitValue: Scalars['Float'];
  minSellingQuantity?: Maybe<Scalars['Int']>;
  maxSellingQuantity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  attributeValues?: Maybe<Array<Maybe<Scalars['ID']>>>;
  product?: Maybe<Scalars['ID']>;
  appliedPriceRules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  price?: Maybe<Scalars['Float']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query';
  address?: Maybe<Address>;
  addresses?: Maybe<Array<Maybe<Address>>>;
  addressesConnection?: Maybe<AddressConnection>;
  area?: Maybe<Area>;
  areas?: Maybe<Array<Maybe<Area>>>;
  areasConnection?: Maybe<AreaConnection>;
  attributeValue?: Maybe<AttributeValue>;
  attributeValues?: Maybe<Array<Maybe<AttributeValue>>>;
  attributeValuesConnection?: Maybe<AttributeValueConnection>;
  attribute?: Maybe<Attribute>;
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  attributesConnection?: Maybe<AttributeConnection>;
  brand?: Maybe<Brand>;
  brands?: Maybe<Array<Maybe<Brand>>>;
  brandsConnection?: Maybe<BrandConnection>;
  businessType?: Maybe<BusinessType>;
  businessTypes?: Maybe<Array<Maybe<BusinessType>>>;
  businessTypesConnection?: Maybe<BusinessTypeConnection>;
  calendarEvent?: Maybe<CalendarEvent>;
  calendarEvents?: Maybe<Array<Maybe<CalendarEvent>>>;
  calendarEventsConnection?: Maybe<CalendarEventConnection>;
  city?: Maybe<City>;
  cities?: Maybe<Array<Maybe<City>>>;
  citiesConnection?: Maybe<CityConnection>;
  companyDetail?: Maybe<CompanyDetail>;
  companyDetails?: Maybe<Array<Maybe<CompanyDetail>>>;
  companyDetailsConnection?: Maybe<CompanyDetailConnection>;
  companyEmployee?: Maybe<CompanyEmployee>;
  companyEmployees?: Maybe<Array<Maybe<CompanyEmployee>>>;
  companyEmployeesConnection?: Maybe<CompanyEmployeeConnection>;
  companyOwner?: Maybe<CompanyOwner>;
  companyOwners?: Maybe<Array<Maybe<CompanyOwner>>>;
  companyOwnersConnection?: Maybe<CompanyOwnerConnection>;
  companyShopTradeConnection?: Maybe<CompanyShopTradeConnection>;
  companyShopTradeConnections?: Maybe<Array<Maybe<CompanyShopTradeConnection>>>;
  companyShopTradeConnectionsConnection?: Maybe<CompanyShopTradeConnectionConnection>;
  companyType?: Maybe<CompanyType>;
  companyTypes?: Maybe<Array<Maybe<CompanyType>>>;
  companyTypesConnection?: Maybe<CompanyTypeConnection>;
  company?: Maybe<Company>;
  companies?: Maybe<Array<Maybe<Company>>>;
  companiesConnection?: Maybe<CompanyConnection>;
  country?: Maybe<Country>;
  countries?: Maybe<Array<Maybe<Country>>>;
  countriesConnection?: Maybe<CountryConnection>;
  orderLine?: Maybe<OrderLine>;
  orderLines?: Maybe<Array<Maybe<OrderLine>>>;
  orderLinesConnection?: Maybe<OrderLineConnection>;
  orderShipment?: Maybe<OrderShipment>;
  orderShipments?: Maybe<Array<Maybe<OrderShipment>>>;
  orderShipmentsConnection?: Maybe<OrderShipmentConnection>;
  order?: Maybe<Order>;
  orders?: Maybe<Array<Maybe<Order>>>;
  ordersConnection?: Maybe<OrderConnection>;
  paymentMethod?: Maybe<PaymentMethod>;
  paymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  paymentMethodsConnection?: Maybe<PaymentMethodConnection>;
  platformDetail?: Maybe<PlatformDetail>;
  priceRule?: Maybe<PriceRule>;
  priceRules?: Maybe<Array<Maybe<PriceRule>>>;
  priceRulesConnection?: Maybe<PriceRuleConnection>;
  productCategory?: Maybe<ProductCategory>;
  productCategories?: Maybe<Array<Maybe<ProductCategory>>>;
  productCategoriesConnection?: Maybe<ProductCategoryConnection>;
  productVariant?: Maybe<ProductVariant>;
  productVariants?: Maybe<Array<Maybe<ProductVariant>>>;
  productVariantsConnection?: Maybe<ProductVariantConnection>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  productsConnection?: Maybe<ProductConnection>;
  salesman?: Maybe<Salesman>;
  salesmen?: Maybe<Array<Maybe<Salesman>>>;
  salesmenConnection?: Maybe<SalesmanConnection>;
  shop?: Maybe<Shop>;
  shops?: Maybe<Array<Maybe<Shop>>>;
  shopsConnection?: Maybe<ShopConnection>;
  shopkeeper?: Maybe<Shopkeeper>;
  shopkeepers?: Maybe<Array<Maybe<Shopkeeper>>>;
  shopkeepersConnection?: Maybe<ShopkeeperConnection>;
  state?: Maybe<State>;
  states?: Maybe<Array<Maybe<State>>>;
  statesConnection?: Maybe<StateConnection>;
  supplier?: Maybe<Supplier>;
  suppliers?: Maybe<Array<Maybe<Supplier>>>;
  suppliersConnection?: Maybe<SupplierConnection>;
  transactionType?: Maybe<TransactionType>;
  transactionTypes?: Maybe<Array<Maybe<TransactionType>>>;
  transactionTypesConnection?: Maybe<TransactionTypeConnection>;
  unit?: Maybe<Unit>;
  units?: Maybe<Array<Maybe<Unit>>>;
  unitsConnection?: Maybe<UnitConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  productsCount: Scalars['Int'];
  _getShoppingCartOfShop?: Maybe<Cart>;
  me?: Maybe<UsersPermissionsMe>;
};

export type QueryAddressArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryAddressesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryAddressesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryAreaArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryAreasArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryAreasConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryAttributeValueArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryAttributeValuesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryAttributeValuesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryAttributeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryAttributesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryAttributesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryBrandArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryBrandsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryBrandsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryBusinessTypeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryBusinessTypesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryBusinessTypesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryCalendarEventArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryCalendarEventsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryCalendarEventsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryCityArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryCitiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryCitiesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryCompanyDetailArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryCompanyDetailsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryCompanyDetailsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryCompanyEmployeeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryCompanyEmployeesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryCompanyEmployeesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryCompanyOwnerArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryCompanyOwnersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryCompanyOwnersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryCompanyShopTradeConnectionArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryCompanyShopTradeConnectionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryCompanyShopTradeConnectionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryCompanyTypeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryCompanyTypesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryCompanyTypesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryCompanyArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryCompaniesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryCompaniesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryCountryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryCountriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryCountriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryOrderLineArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryOrderLinesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryOrderLinesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryOrderShipmentArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryOrderShipmentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryOrderShipmentsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryOrderArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryOrdersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryOrdersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryPaymentMethodArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryPaymentMethodsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryPaymentMethodsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryPlatformDetailArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryPriceRuleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryPriceRulesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryPriceRulesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryProductCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryProductCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryProductCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryProductVariantArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryProductVariantsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryProductVariantsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryProductArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryProductsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryProductsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QuerySalesmanArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QuerySalesmenArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QuerySalesmenConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryShopArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryShopsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryShopsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryShopkeeperArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryShopkeepersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryShopkeepersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryStateArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryStatesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryStatesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QuerySupplierArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QuerySuppliersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QuerySuppliersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryTransactionTypeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryTransactionTypesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryTransactionTypesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryUnitArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryUnitsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryUnitsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};

export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryProductsCountArgs = {
  where?: Maybe<Scalars['JSON']>;
};

export type Query_GetShoppingCartOfShopArgs = {
  id: Scalars['ID'];
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Salesman = {
  __typename?: 'Salesman';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  companyEmployee?: Maybe<CompanyEmployee>;
};

export type SalesmanAggregator = {
  __typename?: 'SalesmanAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SalesmanConnection = {
  __typename?: 'SalesmanConnection';
  values?: Maybe<Array<Maybe<Salesman>>>;
  groupBy?: Maybe<SalesmanGroupBy>;
  aggregate?: Maybe<SalesmanAggregator>;
};

export type SalesmanConnectionCompanyEmployee = {
  __typename?: 'SalesmanConnectionCompanyEmployee';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SalesmanConnection>;
};

export type SalesmanConnectionCreated_At = {
  __typename?: 'SalesmanConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SalesmanConnection>;
};

export type SalesmanConnectionId = {
  __typename?: 'SalesmanConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SalesmanConnection>;
};

export type SalesmanConnectionUpdated_At = {
  __typename?: 'SalesmanConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SalesmanConnection>;
};

export type SalesmanGroupBy = {
  __typename?: 'SalesmanGroupBy';
  id?: Maybe<Array<Maybe<SalesmanConnectionId>>>;
  created_at?: Maybe<Array<Maybe<SalesmanConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<SalesmanConnectionUpdated_At>>>;
  companyEmployee?: Maybe<Array<Maybe<SalesmanConnectionCompanyEmployee>>>;
};

export type SalesmanInput = {
  companyEmployee?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Shop = {
  __typename?: 'Shop';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  rating?: Maybe<Scalars['Int']>;
  gstNumber?: Maybe<Scalars['String']>;
  openingYear?: Maybe<Scalars['Date']>;
  gstRegistrationType?: Maybe<Scalars['String']>;
  websiteURL?: Maybe<Scalars['String']>;
  billingAddress?: Maybe<Address>;
  isActive?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  cart?: Maybe<Order>;
  shopkeepers?: Maybe<Array<Maybe<Shopkeeper>>>;
  orders?: Maybe<Array<Maybe<Order>>>;
  holidays?: Maybe<Array<Maybe<CalendarEvent>>>;
  businessTypes?: Maybe<Array<Maybe<BusinessType>>>;
  shippingAddresses?: Maybe<Array<Maybe<Address>>>;
  companyTradeConnections?: Maybe<Array<Maybe<CompanyShopTradeConnection>>>;
};

export type ShopShopkeepersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ShopOrdersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ShopHolidaysArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ShopBusinessTypesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ShopShippingAddressesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ShopCompanyTradeConnectionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ShopAggregator = {
  __typename?: 'ShopAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ShopAggregatorSum>;
  avg?: Maybe<ShopAggregatorAvg>;
  min?: Maybe<ShopAggregatorMin>;
  max?: Maybe<ShopAggregatorMax>;
};

export type ShopAggregatorAvg = {
  __typename?: 'ShopAggregatorAvg';
  rating?: Maybe<Scalars['Float']>;
};

export type ShopAggregatorMax = {
  __typename?: 'ShopAggregatorMax';
  rating?: Maybe<Scalars['Float']>;
};

export type ShopAggregatorMin = {
  __typename?: 'ShopAggregatorMin';
  rating?: Maybe<Scalars['Float']>;
};

export type ShopAggregatorSum = {
  __typename?: 'ShopAggregatorSum';
  rating?: Maybe<Scalars['Float']>;
};

export type ShopConnection = {
  __typename?: 'ShopConnection';
  values?: Maybe<Array<Maybe<Shop>>>;
  groupBy?: Maybe<ShopGroupBy>;
  aggregate?: Maybe<ShopAggregator>;
};

export type ShopConnectionBillingAddress = {
  __typename?: 'ShopConnectionBillingAddress';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ShopConnection>;
};

export type ShopConnectionCart = {
  __typename?: 'ShopConnectionCart';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ShopConnection>;
};

export type ShopConnectionCreated_At = {
  __typename?: 'ShopConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ShopConnection>;
};

export type ShopConnectionGstNumber = {
  __typename?: 'ShopConnectionGstNumber';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ShopConnection>;
};

export type ShopConnectionGstRegistrationType = {
  __typename?: 'ShopConnectionGstRegistrationType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ShopConnection>;
};

export type ShopConnectionId = {
  __typename?: 'ShopConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ShopConnection>;
};

export type ShopConnectionIsActive = {
  __typename?: 'ShopConnectionIsActive';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<ShopConnection>;
};

export type ShopConnectionIsDeleted = {
  __typename?: 'ShopConnectionIsDeleted';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<ShopConnection>;
};

export type ShopConnectionName = {
  __typename?: 'ShopConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ShopConnection>;
};

export type ShopConnectionOpeningYear = {
  __typename?: 'ShopConnectionOpeningYear';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ShopConnection>;
};

export type ShopConnectionRating = {
  __typename?: 'ShopConnectionRating';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ShopConnection>;
};

export type ShopConnectionUpdated_At = {
  __typename?: 'ShopConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ShopConnection>;
};

export type ShopConnectionWebsiteUrl = {
  __typename?: 'ShopConnectionWebsiteURL';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ShopConnection>;
};

export type ShopGroupBy = {
  __typename?: 'ShopGroupBy';
  id?: Maybe<Array<Maybe<ShopConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ShopConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ShopConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ShopConnectionName>>>;
  rating?: Maybe<Array<Maybe<ShopConnectionRating>>>;
  gstNumber?: Maybe<Array<Maybe<ShopConnectionGstNumber>>>;
  openingYear?: Maybe<Array<Maybe<ShopConnectionOpeningYear>>>;
  gstRegistrationType?: Maybe<Array<Maybe<ShopConnectionGstRegistrationType>>>;
  websiteURL?: Maybe<Array<Maybe<ShopConnectionWebsiteUrl>>>;
  billingAddress?: Maybe<Array<Maybe<ShopConnectionBillingAddress>>>;
  isActive?: Maybe<Array<Maybe<ShopConnectionIsActive>>>;
  isDeleted?: Maybe<Array<Maybe<ShopConnectionIsDeleted>>>;
  cart?: Maybe<Array<Maybe<ShopConnectionCart>>>;
};

export type ShopInput = {
  name: Scalars['String'];
  rating?: Maybe<Scalars['Int']>;
  gstNumber?: Maybe<Scalars['String']>;
  openingYear?: Maybe<Scalars['Date']>;
  gstRegistrationType?: Maybe<Scalars['String']>;
  websiteURL?: Maybe<Scalars['String']>;
  shopkeepers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orders?: Maybe<Array<Maybe<Scalars['ID']>>>;
  holidays?: Maybe<Array<Maybe<Scalars['ID']>>>;
  businessTypes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  billingAddress?: Maybe<Scalars['ID']>;
  shippingAddresses?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isActive?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  companyTradeConnections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cart?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Shopkeeper = {
  __typename?: 'Shopkeeper';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  user?: Maybe<UsersPermissionsUser>;
  shops?: Maybe<Array<Maybe<Shop>>>;
};

export type ShopkeeperShopsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ShopkeeperAggregator = {
  __typename?: 'ShopkeeperAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ShopkeeperConnection = {
  __typename?: 'ShopkeeperConnection';
  values?: Maybe<Array<Maybe<Shopkeeper>>>;
  groupBy?: Maybe<ShopkeeperGroupBy>;
  aggregate?: Maybe<ShopkeeperAggregator>;
};

export type ShopkeeperConnectionCreated_At = {
  __typename?: 'ShopkeeperConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ShopkeeperConnection>;
};

export type ShopkeeperConnectionId = {
  __typename?: 'ShopkeeperConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ShopkeeperConnection>;
};

export type ShopkeeperConnectionUpdated_At = {
  __typename?: 'ShopkeeperConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ShopkeeperConnection>;
};

export type ShopkeeperConnectionUser = {
  __typename?: 'ShopkeeperConnectionUser';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ShopkeeperConnection>;
};

export type ShopkeeperGroupBy = {
  __typename?: 'ShopkeeperGroupBy';
  id?: Maybe<Array<Maybe<ShopkeeperConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ShopkeeperConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ShopkeeperConnectionUpdated_At>>>;
  user?: Maybe<Array<Maybe<ShopkeeperConnectionUser>>>;
};

export type ShopkeeperInput = {
  shops?: Maybe<Array<Maybe<Scalars['ID']>>>;
  user?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type State = {
  __typename?: 'State';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  country?: Maybe<Country>;
  cities?: Maybe<Array<Maybe<City>>>;
};

export type StateCitiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StateAggregator = {
  __typename?: 'StateAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StateConnection = {
  __typename?: 'StateConnection';
  values?: Maybe<Array<Maybe<State>>>;
  groupBy?: Maybe<StateGroupBy>;
  aggregate?: Maybe<StateAggregator>;
};

export type StateConnectionCountry = {
  __typename?: 'StateConnectionCountry';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StateConnection>;
};

export type StateConnectionCreated_At = {
  __typename?: 'StateConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StateConnection>;
};

export type StateConnectionId = {
  __typename?: 'StateConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StateConnection>;
};

export type StateConnectionName = {
  __typename?: 'StateConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StateConnection>;
};

export type StateConnectionUpdated_At = {
  __typename?: 'StateConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StateConnection>;
};

export type StateGroupBy = {
  __typename?: 'StateGroupBy';
  id?: Maybe<Array<Maybe<StateConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StateConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StateConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<StateConnectionName>>>;
  country?: Maybe<Array<Maybe<StateConnectionCountry>>>;
};

export type StateInput = {
  name: Scalars['String'];
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Supplier = {
  __typename?: 'Supplier';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  companyEmployee?: Maybe<CompanyEmployee>;
};

export type SupplierAggregator = {
  __typename?: 'SupplierAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SupplierConnection = {
  __typename?: 'SupplierConnection';
  values?: Maybe<Array<Maybe<Supplier>>>;
  groupBy?: Maybe<SupplierGroupBy>;
  aggregate?: Maybe<SupplierAggregator>;
};

export type SupplierConnectionCompanyEmployee = {
  __typename?: 'SupplierConnectionCompanyEmployee';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SupplierConnection>;
};

export type SupplierConnectionCreated_At = {
  __typename?: 'SupplierConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SupplierConnection>;
};

export type SupplierConnectionId = {
  __typename?: 'SupplierConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SupplierConnection>;
};

export type SupplierConnectionUpdated_At = {
  __typename?: 'SupplierConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SupplierConnection>;
};

export type SupplierGroupBy = {
  __typename?: 'SupplierGroupBy';
  id?: Maybe<Array<Maybe<SupplierConnectionId>>>;
  created_at?: Maybe<Array<Maybe<SupplierConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<SupplierConnectionUpdated_At>>>;
  companyEmployee?: Maybe<Array<Maybe<SupplierConnectionCompanyEmployee>>>;
};

export type SupplierInput = {
  companyEmployee?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type TransactionType = {
  __typename?: 'TransactionType';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  ledgerType: Enum_Transactiontype_Ledgertype;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type TransactionTypeAggregator = {
  __typename?: 'TransactionTypeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TransactionTypeConnection = {
  __typename?: 'TransactionTypeConnection';
  values?: Maybe<Array<Maybe<TransactionType>>>;
  groupBy?: Maybe<TransactionTypeGroupBy>;
  aggregate?: Maybe<TransactionTypeAggregator>;
};

export type TransactionTypeConnectionCreated_At = {
  __typename?: 'TransactionTypeConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TransactionTypeConnection>;
};

export type TransactionTypeConnectionId = {
  __typename?: 'TransactionTypeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TransactionTypeConnection>;
};

export type TransactionTypeConnectionIsActive = {
  __typename?: 'TransactionTypeConnectionIsActive';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<TransactionTypeConnection>;
};

export type TransactionTypeConnectionLedgerType = {
  __typename?: 'TransactionTypeConnectionLedgerType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TransactionTypeConnection>;
};

export type TransactionTypeConnectionName = {
  __typename?: 'TransactionTypeConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TransactionTypeConnection>;
};

export type TransactionTypeConnectionUpdated_At = {
  __typename?: 'TransactionTypeConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TransactionTypeConnection>;
};

export type TransactionTypeGroupBy = {
  __typename?: 'TransactionTypeGroupBy';
  id?: Maybe<Array<Maybe<TransactionTypeConnectionId>>>;
  created_at?: Maybe<Array<Maybe<TransactionTypeConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<TransactionTypeConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<TransactionTypeConnectionName>>>;
  ledgerType?: Maybe<Array<Maybe<TransactionTypeConnectionLedgerType>>>;
  isActive?: Maybe<Array<Maybe<TransactionTypeConnectionIsActive>>>;
};

export type TransactionTypeInput = {
  name: Scalars['String'];
  ledgerType: Enum_Transactiontype_Ledgertype;
  isActive?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Unit = {
  __typename?: 'Unit';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  shortCode: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type UnitAggregator = {
  __typename?: 'UnitAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UnitAggregatorSum>;
  avg?: Maybe<UnitAggregatorAvg>;
  min?: Maybe<UnitAggregatorMin>;
  max?: Maybe<UnitAggregatorMax>;
};

export type UnitAggregatorAvg = {
  __typename?: 'UnitAggregatorAvg';
  quantity?: Maybe<Scalars['Float']>;
};

export type UnitAggregatorMax = {
  __typename?: 'UnitAggregatorMax';
  quantity?: Maybe<Scalars['Float']>;
};

export type UnitAggregatorMin = {
  __typename?: 'UnitAggregatorMin';
  quantity?: Maybe<Scalars['Float']>;
};

export type UnitAggregatorSum = {
  __typename?: 'UnitAggregatorSum';
  quantity?: Maybe<Scalars['Float']>;
};

export type UnitConnection = {
  __typename?: 'UnitConnection';
  values?: Maybe<Array<Maybe<Unit>>>;
  groupBy?: Maybe<UnitGroupBy>;
  aggregate?: Maybe<UnitAggregator>;
};

export type UnitConnectionCreated_At = {
  __typename?: 'UnitConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UnitConnection>;
};

export type UnitConnectionId = {
  __typename?: 'UnitConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UnitConnection>;
};

export type UnitConnectionIsActive = {
  __typename?: 'UnitConnectionIsActive';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UnitConnection>;
};

export type UnitConnectionName = {
  __typename?: 'UnitConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UnitConnection>;
};

export type UnitConnectionQuantity = {
  __typename?: 'UnitConnectionQuantity';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UnitConnection>;
};

export type UnitConnectionShortCode = {
  __typename?: 'UnitConnectionShortCode';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UnitConnection>;
};

export type UnitConnectionUpdated_At = {
  __typename?: 'UnitConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UnitConnection>;
};

export type UnitGroupBy = {
  __typename?: 'UnitGroupBy';
  id?: Maybe<Array<Maybe<UnitConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UnitConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UnitConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UnitConnectionName>>>;
  shortCode?: Maybe<Array<Maybe<UnitConnectionShortCode>>>;
  quantity?: Maybe<Array<Maybe<UnitConnectionQuantity>>>;
  isActive?: Maybe<Array<Maybe<UnitConnectionIsActive>>>;
};

export type UnitInput = {
  name: Scalars['String'];
  shortCode: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};

export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  mobileNumber: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Enum_Userspermissionsuser_Gender>;
  alternateMobileNumber?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  lastName?: Maybe<Scalars['String']>;
  shopkeeper?: Maybe<Scalars['ID']>;
  companyOwner?: Maybe<Scalars['ID']>;
  companyEmployee?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsOkPayload = {
  __typename?: 'UserPermissionsOkPayload';
  ok?: Maybe<Scalars['Boolean']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UserPermissionsSendSmsConfirmationPayload = {
  __typename?: 'UserPermissionsSendSmsConfirmationPayload';
  mobileNumber?: Maybe<Scalars['String']>;
  sent?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type UsersPermissionsAuthUser = {
  __typename?: 'UsersPermissionsAuthUser';
  id?: Maybe<Scalars['ID']>;
  mobileNumber?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<Enum_Userspermissionsuser_Gender>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
  shopkeeper?: Maybe<Shopkeeper>;
  companyOwner?: Maybe<CompanyOwner>;
  companyEmployee?: Maybe<CompanyEmployee>;
};

export type UsersPermissionsAuthUserTokenPayload = {
  __typename?: 'UsersPermissionsAuthUserTokenPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsAuthUser;
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  mobileNumber: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Enum_Userspermissionsuser_Gender>;
  alternateMobileNumber?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  lastName?: Maybe<Scalars['String']>;
  shopkeeper?: Maybe<Shopkeeper>;
  companyOwner?: Maybe<CompanyOwner>;
  companyEmployee?: Maybe<CompanyEmployee>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionAlternateMobileNumber = {
  __typename?: 'UsersPermissionsUserConnectionAlternateMobileNumber';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCompanyEmployee = {
  __typename?: 'UsersPermissionsUserConnectionCompanyEmployee';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCompanyOwner = {
  __typename?: 'UsersPermissionsUserConnectionCompanyOwner';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionDateOfBirth = {
  __typename?: 'UsersPermissionsUserConnectionDateOfBirth';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionFirstName = {
  __typename?: 'UsersPermissionsUserConnectionFirstName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionGender = {
  __typename?: 'UsersPermissionsUserConnectionGender';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionLastName = {
  __typename?: 'UsersPermissionsUserConnectionLastName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionMobileNumber = {
  __typename?: 'UsersPermissionsUserConnectionMobileNumber';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionShopkeeper = {
  __typename?: 'UsersPermissionsUserConnectionShopkeeper';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  mobileNumber?: Maybe<Array<Maybe<UsersPermissionsUserConnectionMobileNumber>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  firstName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionFirstName>>>;
  gender?: Maybe<Array<Maybe<UsersPermissionsUserConnectionGender>>>;
  alternateMobileNumber?: Maybe<Array<Maybe<UsersPermissionsUserConnectionAlternateMobileNumber>>>;
  dateOfBirth?: Maybe<Array<Maybe<UsersPermissionsUserConnectionDateOfBirth>>>;
  lastName?: Maybe<Array<Maybe<UsersPermissionsUserConnectionLastName>>>;
  shopkeeper?: Maybe<Array<Maybe<UsersPermissionsUserConnectionShopkeeper>>>;
  companyOwner?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCompanyOwner>>>;
  companyEmployee?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCompanyEmployee>>>;
};

export type _OrderLineInput = {
  order: Scalars['ID'];
  productVariant: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type _PlaceOrderData = {
  note?: Maybe<Scalars['String']>;
};

export type _AddShopHolidayInput = {
  where?: Maybe<InputId>;
  data?: Maybe<CalendarEventInput>;
};

export type _AddShopShippingAddressInput = {
  where?: Maybe<InputId>;
  data?: Maybe<AddressInput>;
};

export type _CreateOrderLineInput = {
  data?: Maybe<_OrderLineInput>;
};

export type _PlaceOrderInput = {
  where?: Maybe<InputId>;
  data?: Maybe<_PlaceOrderData>;
};

export type CreateAddressInput = {
  data?: Maybe<AddressInput>;
};

export type CreateAddressPayload = {
  __typename?: 'createAddressPayload';
  address?: Maybe<Address>;
};

export type CreateAreaInput = {
  data?: Maybe<AreaInput>;
};

export type CreateAreaPayload = {
  __typename?: 'createAreaPayload';
  area?: Maybe<Area>;
};

export type CreateAttributeInput = {
  data?: Maybe<AttributeInput>;
};

export type CreateAttributePayload = {
  __typename?: 'createAttributePayload';
  attribute?: Maybe<Attribute>;
};

export type CreateAttributeValueInput = {
  data?: Maybe<AttributeValueInput>;
};

export type CreateAttributeValuePayload = {
  __typename?: 'createAttributeValuePayload';
  attributeValue?: Maybe<AttributeValue>;
};

export type CreateBrandInput = {
  data?: Maybe<BrandInput>;
};

export type CreateBrandPayload = {
  __typename?: 'createBrandPayload';
  brand?: Maybe<Brand>;
};

export type CreateBusinessTypeInput = {
  data?: Maybe<BusinessTypeInput>;
};

export type CreateBusinessTypePayload = {
  __typename?: 'createBusinessTypePayload';
  businessType?: Maybe<BusinessType>;
};

export type CreateCalendarEventInput = {
  data?: Maybe<CalendarEventInput>;
};

export type CreateCalendarEventPayload = {
  __typename?: 'createCalendarEventPayload';
  calendarEvent?: Maybe<CalendarEvent>;
};

export type CreateCityInput = {
  data?: Maybe<CityInput>;
};

export type CreateCityPayload = {
  __typename?: 'createCityPayload';
  city?: Maybe<City>;
};

export type CreateCompanyDetailInput = {
  data?: Maybe<CompanyDetailInput>;
};

export type CreateCompanyDetailPayload = {
  __typename?: 'createCompanyDetailPayload';
  companyDetail?: Maybe<CompanyDetail>;
};

export type CreateCompanyEmployeeInput = {
  data?: Maybe<CompanyEmployeeInput>;
};

export type CreateCompanyEmployeePayload = {
  __typename?: 'createCompanyEmployeePayload';
  companyEmployee?: Maybe<CompanyEmployee>;
};

export type CreateCompanyInput = {
  data?: Maybe<CompanyInput>;
};

export type CreateCompanyOwnerInput = {
  data?: Maybe<CompanyOwnerInput>;
};

export type CreateCompanyOwnerPayload = {
  __typename?: 'createCompanyOwnerPayload';
  companyOwner?: Maybe<CompanyOwner>;
};

export type CreateCompanyPayload = {
  __typename?: 'createCompanyPayload';
  company?: Maybe<Company>;
};

export type CreateCompanyShopTradeConnectionInput = {
  data?: Maybe<CompanyShopTradeConnectionInput>;
};

export type CreateCompanyShopTradeConnectionPayload = {
  __typename?: 'createCompanyShopTradeConnectionPayload';
  companyShopTradeConnection?: Maybe<CompanyShopTradeConnection>;
};

export type CreateCompanyTypeInput = {
  data?: Maybe<CompanyTypeInput>;
};

export type CreateCompanyTypePayload = {
  __typename?: 'createCompanyTypePayload';
  companyType?: Maybe<CompanyType>;
};

export type CreateCountryInput = {
  data?: Maybe<CountryInput>;
};

export type CreateCountryPayload = {
  __typename?: 'createCountryPayload';
  country?: Maybe<Country>;
};

export type CreateOrderInput = {
  data?: Maybe<OrderInput>;
};

export type CreateOrderLineInput = {
  data?: Maybe<OrderLineInput>;
};

export type CreateOrderLinePayload = {
  __typename?: 'createOrderLinePayload';
  orderLine?: Maybe<OrderLine>;
};

export type CreateOrderPayload = {
  __typename?: 'createOrderPayload';
  order?: Maybe<Order>;
};

export type CreateOrderShipmentInput = {
  data?: Maybe<OrderShipmentInput>;
};

export type CreateOrderShipmentPayload = {
  __typename?: 'createOrderShipmentPayload';
  orderShipment?: Maybe<OrderShipment>;
};

export type CreatePaymentMethodInput = {
  data?: Maybe<PaymentMethodInput>;
};

export type CreatePaymentMethodPayload = {
  __typename?: 'createPaymentMethodPayload';
  paymentMethod?: Maybe<PaymentMethod>;
};

export type CreatePriceRuleInput = {
  data?: Maybe<PriceRuleInput>;
};

export type CreatePriceRulePayload = {
  __typename?: 'createPriceRulePayload';
  priceRule?: Maybe<PriceRule>;
};

export type CreateProductCategoryInput = {
  data?: Maybe<ProductCategoryInput>;
};

export type CreateProductCategoryPayload = {
  __typename?: 'createProductCategoryPayload';
  productCategory?: Maybe<ProductCategory>;
};

export type CreateProductInput = {
  data?: Maybe<ProductInput>;
};

export type CreateProductPayload = {
  __typename?: 'createProductPayload';
  product?: Maybe<Product>;
};

export type CreateProductVariantInput = {
  data?: Maybe<ProductVariantInput>;
};

export type CreateProductVariantPayload = {
  __typename?: 'createProductVariantPayload';
  productVariant?: Maybe<ProductVariant>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateSalesmanInput = {
  data?: Maybe<SalesmanInput>;
};

export type CreateSalesmanPayload = {
  __typename?: 'createSalesmanPayload';
  salesman?: Maybe<Salesman>;
};

export type CreateShopInput = {
  data?: Maybe<ShopInput>;
};

export type CreateShopPayload = {
  __typename?: 'createShopPayload';
  shop?: Maybe<Shop>;
};

export type CreateShopkeeperInput = {
  data?: Maybe<ShopkeeperInput>;
};

export type CreateShopkeeperPayload = {
  __typename?: 'createShopkeeperPayload';
  shopkeeper?: Maybe<Shopkeeper>;
};

export type CreateStateInput = {
  data?: Maybe<StateInput>;
};

export type CreateStatePayload = {
  __typename?: 'createStatePayload';
  state?: Maybe<State>;
};

export type CreateSupplierInput = {
  data?: Maybe<SupplierInput>;
};

export type CreateSupplierPayload = {
  __typename?: 'createSupplierPayload';
  supplier?: Maybe<Supplier>;
};

export type CreateTransactionTypeInput = {
  data?: Maybe<TransactionTypeInput>;
};

export type CreateTransactionTypePayload = {
  __typename?: 'createTransactionTypePayload';
  transactionType?: Maybe<TransactionType>;
};

export type CreateUnitInput = {
  data?: Maybe<UnitInput>;
};

export type CreateUnitPayload = {
  __typename?: 'createUnitPayload';
  unit?: Maybe<Unit>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteAddressInput = {
  where?: Maybe<InputId>;
};

export type DeleteAddressPayload = {
  __typename?: 'deleteAddressPayload';
  address?: Maybe<Address>;
};

export type DeleteAreaInput = {
  where?: Maybe<InputId>;
};

export type DeleteAreaPayload = {
  __typename?: 'deleteAreaPayload';
  area?: Maybe<Area>;
};

export type DeleteAttributeInput = {
  where?: Maybe<InputId>;
};

export type DeleteAttributePayload = {
  __typename?: 'deleteAttributePayload';
  attribute?: Maybe<Attribute>;
};

export type DeleteAttributeValueInput = {
  where?: Maybe<InputId>;
};

export type DeleteAttributeValuePayload = {
  __typename?: 'deleteAttributeValuePayload';
  attributeValue?: Maybe<AttributeValue>;
};

export type DeleteBrandInput = {
  where?: Maybe<InputId>;
};

export type DeleteBrandPayload = {
  __typename?: 'deleteBrandPayload';
  brand?: Maybe<Brand>;
};

export type DeleteBusinessTypeInput = {
  where?: Maybe<InputId>;
};

export type DeleteBusinessTypePayload = {
  __typename?: 'deleteBusinessTypePayload';
  businessType?: Maybe<BusinessType>;
};

export type DeleteCalendarEventInput = {
  where?: Maybe<InputId>;
};

export type DeleteCalendarEventPayload = {
  __typename?: 'deleteCalendarEventPayload';
  calendarEvent?: Maybe<CalendarEvent>;
};

export type DeleteCityInput = {
  where?: Maybe<InputId>;
};

export type DeleteCityPayload = {
  __typename?: 'deleteCityPayload';
  city?: Maybe<City>;
};

export type DeleteCompanyDetailInput = {
  where?: Maybe<InputId>;
};

export type DeleteCompanyDetailPayload = {
  __typename?: 'deleteCompanyDetailPayload';
  companyDetail?: Maybe<CompanyDetail>;
};

export type DeleteCompanyEmployeeInput = {
  where?: Maybe<InputId>;
};

export type DeleteCompanyEmployeePayload = {
  __typename?: 'deleteCompanyEmployeePayload';
  companyEmployee?: Maybe<CompanyEmployee>;
};

export type DeleteCompanyInput = {
  where?: Maybe<InputId>;
};

export type DeleteCompanyOwnerInput = {
  where?: Maybe<InputId>;
};

export type DeleteCompanyOwnerPayload = {
  __typename?: 'deleteCompanyOwnerPayload';
  companyOwner?: Maybe<CompanyOwner>;
};

export type DeleteCompanyPayload = {
  __typename?: 'deleteCompanyPayload';
  company?: Maybe<Company>;
};

export type DeleteCompanyShopTradeConnectionInput = {
  where?: Maybe<InputId>;
};

export type DeleteCompanyShopTradeConnectionPayload = {
  __typename?: 'deleteCompanyShopTradeConnectionPayload';
  companyShopTradeConnection?: Maybe<CompanyShopTradeConnection>;
};

export type DeleteCompanyTypeInput = {
  where?: Maybe<InputId>;
};

export type DeleteCompanyTypePayload = {
  __typename?: 'deleteCompanyTypePayload';
  companyType?: Maybe<CompanyType>;
};

export type DeleteCountryInput = {
  where?: Maybe<InputId>;
};

export type DeleteCountryPayload = {
  __typename?: 'deleteCountryPayload';
  country?: Maybe<Country>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteOrderInput = {
  where?: Maybe<InputId>;
};

export type DeleteOrderLineInput = {
  where?: Maybe<InputId>;
};

export type DeleteOrderLinePayload = {
  __typename?: 'deleteOrderLinePayload';
  orderLine?: Maybe<OrderLine>;
};

export type DeleteOrderPayload = {
  __typename?: 'deleteOrderPayload';
  order?: Maybe<Order>;
};

export type DeleteOrderShipmentInput = {
  where?: Maybe<InputId>;
};

export type DeleteOrderShipmentPayload = {
  __typename?: 'deleteOrderShipmentPayload';
  orderShipment?: Maybe<OrderShipment>;
};

export type DeletePaymentMethodInput = {
  where?: Maybe<InputId>;
};

export type DeletePaymentMethodPayload = {
  __typename?: 'deletePaymentMethodPayload';
  paymentMethod?: Maybe<PaymentMethod>;
};

export type DeletePlatformDetailPayload = {
  __typename?: 'deletePlatformDetailPayload';
  platformDetail?: Maybe<PlatformDetail>;
};

export type DeletePriceRuleInput = {
  where?: Maybe<InputId>;
};

export type DeletePriceRulePayload = {
  __typename?: 'deletePriceRulePayload';
  priceRule?: Maybe<PriceRule>;
};

export type DeleteProductCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteProductCategoryPayload = {
  __typename?: 'deleteProductCategoryPayload';
  productCategory?: Maybe<ProductCategory>;
};

export type DeleteProductInput = {
  where?: Maybe<InputId>;
};

export type DeleteProductPayload = {
  __typename?: 'deleteProductPayload';
  product?: Maybe<Product>;
};

export type DeleteProductVariantInput = {
  where?: Maybe<InputId>;
};

export type DeleteProductVariantPayload = {
  __typename?: 'deleteProductVariantPayload';
  productVariant?: Maybe<ProductVariant>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteSalesmanInput = {
  where?: Maybe<InputId>;
};

export type DeleteSalesmanPayload = {
  __typename?: 'deleteSalesmanPayload';
  salesman?: Maybe<Salesman>;
};

export type DeleteShopInput = {
  where?: Maybe<InputId>;
};

export type DeleteShopPayload = {
  __typename?: 'deleteShopPayload';
  shop?: Maybe<Shop>;
};

export type DeleteShopkeeperInput = {
  where?: Maybe<InputId>;
};

export type DeleteShopkeeperPayload = {
  __typename?: 'deleteShopkeeperPayload';
  shopkeeper?: Maybe<Shopkeeper>;
};

export type DeleteStateInput = {
  where?: Maybe<InputId>;
};

export type DeleteStatePayload = {
  __typename?: 'deleteStatePayload';
  state?: Maybe<State>;
};

export type DeleteSupplierInput = {
  where?: Maybe<InputId>;
};

export type DeleteSupplierPayload = {
  __typename?: 'deleteSupplierPayload';
  supplier?: Maybe<Supplier>;
};

export type DeleteTransactionTypeInput = {
  where?: Maybe<InputId>;
};

export type DeleteTransactionTypePayload = {
  __typename?: 'deleteTransactionTypePayload';
  transactionType?: Maybe<TransactionType>;
};

export type DeleteUnitInput = {
  where?: Maybe<InputId>;
};

export type DeleteUnitPayload = {
  __typename?: 'deleteUnitPayload';
  unit?: Maybe<Unit>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditAddressInput = {
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  plusCode?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['ID']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditAreaInput = {
  name?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditAttributeInput = {
  name?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditAttributeValueInput = {
  value?: Maybe<Scalars['String']>;
  attribute?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditBrandInput = {
  name?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditBusinessTypeInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCalendarEventInput = {
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Calendarevent_Type>;
  day?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCityInput = {
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['ID']>;
  areas?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCompanyDetailInput = {
  returnPolicy?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCompanyEmployeeInput = {
  user?: Maybe<Scalars['ID']>;
  company?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  salesman?: Maybe<Scalars['ID']>;
  supplier?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCompanyInput = {
  name?: Maybe<Scalars['String']>;
  businessType?: Maybe<Scalars['ID']>;
  companyType?: Maybe<Scalars['ID']>;
  sku?: Maybe<Scalars['String']>;
  priceRules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  appliedPriceRules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderShipments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  productCategories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  companyOwners?: Maybe<Array<Maybe<Scalars['ID']>>>;
  employees?: Maybe<Array<Maybe<Scalars['ID']>>>;
  registeredAddress?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  companyDetail?: Maybe<Scalars['ID']>;
  shopTradeConnections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCompanyOwnerInput = {
  user?: Maybe<Scalars['ID']>;
  company?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCompanyShopTradeConnectionInput = {
  company?: Maybe<Scalars['ID']>;
  shop?: Maybe<Scalars['ID']>;
  isSuspendedByCompany?: Maybe<Scalars['Boolean']>;
  isBlockedByCompany?: Maybe<Scalars['Boolean']>;
  isBlockedByShop?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCompanyTypeInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCountryInput = {
  name?: Maybe<Scalars['String']>;
  states?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditOrderInput = {
  number?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  currentStatus?: Maybe<Enum_Order_Currentstatus>;
  paymentStatus?: Maybe<Enum_Order_Paymentstatus>;
  paymentMethod?: Maybe<Scalars['ID']>;
  shop?: Maybe<Scalars['ID']>;
  orderLines?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditOrderLineInput = {
  index?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['ID']>;
  productVariant?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  unitPrice?: Maybe<Scalars['Float']>;
  appliedPriceRules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  productTitle?: Maybe<Scalars['String']>;
  productVariantTitle?: Maybe<Scalars['String']>;
  productVariantAttributes?: Maybe<Scalars['JSON']>;
  orderShipment?: Maybe<Scalars['ID']>;
  productPrice?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditOrderShipmentInput = {
  currentStatus?: Maybe<Enum_Ordershipment_Currentstatus>;
  tracking?: Maybe<Scalars['JSON']>;
  company?: Maybe<Scalars['ID']>;
  orderLines?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPaymentMethodInput = {
  name?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPlatformDetailInput = {
  privacyPolicy?: Maybe<Scalars['String']>;
  frequentlyAskedQuestions?: Maybe<Scalars['String']>;
  termsAndConditions?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPriceRuleInput = {
  name?: Maybe<Scalars['String']>;
  minSellingQuantity?: Maybe<Scalars['Int']>;
  startDateTime?: Maybe<Scalars['DateTime']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  computationType?: Maybe<Enum_Pricerule_Computationtype>;
  computeValue?: Maybe<Scalars['JSON']>;
  previousVersion?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProductCategoryInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  subcategories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentCategory?: Maybe<Scalars['ID']>;
  sku?: Maybe<Scalars['String']>;
  appliedPriceRules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  company?: Maybe<Scalars['ID']>;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isActive?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProductInput = {
  title?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  productCategory?: Maybe<Scalars['ID']>;
  brand?: Maybe<Scalars['ID']>;
  unit?: Maybe<Scalars['ID']>;
  buyingPrice?: Maybe<Scalars['Float']>;
  specifications?: Maybe<Scalars['JSON']>;
  image?: Maybe<Scalars['ID']>;
  variantAttributes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  productVariants?: Maybe<Array<Maybe<Scalars['ID']>>>;
  appliedPriceRules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  company?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['Float']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProductVariantInput = {
  title?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  availableStock?: Maybe<Scalars['Int']>;
  presentStock?: Maybe<Scalars['Int']>;
  lowStock?: Maybe<Scalars['Int']>;
  unitValue?: Maybe<Scalars['Float']>;
  minSellingQuantity?: Maybe<Scalars['Int']>;
  maxSellingQuantity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  attributeValues?: Maybe<Array<Maybe<Scalars['ID']>>>;
  product?: Maybe<Scalars['ID']>;
  appliedPriceRules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  price?: Maybe<Scalars['Float']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSalesmanInput = {
  companyEmployee?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditShopInput = {
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  gstNumber?: Maybe<Scalars['String']>;
  openingYear?: Maybe<Scalars['Date']>;
  gstRegistrationType?: Maybe<Scalars['String']>;
  websiteURL?: Maybe<Scalars['String']>;
  shopkeepers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orders?: Maybe<Array<Maybe<Scalars['ID']>>>;
  holidays?: Maybe<Array<Maybe<Scalars['ID']>>>;
  businessTypes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  billingAddress?: Maybe<Scalars['ID']>;
  shippingAddresses?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isActive?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  companyTradeConnections?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cart?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditShopkeeperInput = {
  shops?: Maybe<Array<Maybe<Scalars['ID']>>>;
  user?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditStateInput = {
  name?: Maybe<Scalars['String']>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSupplierInput = {
  companyEmployee?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTransactionTypeInput = {
  name?: Maybe<Scalars['String']>;
  ledgerType?: Maybe<Enum_Transactiontype_Ledgertype>;
  isActive?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUnitInput = {
  name?: Maybe<Scalars['String']>;
  shortCode?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  mobileNumber?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Enum_Userspermissionsuser_Gender>;
  alternateMobileNumber?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  lastName?: Maybe<Scalars['String']>;
  shopkeeper?: Maybe<Scalars['ID']>;
  companyOwner?: Maybe<Scalars['ID']>;
  companyEmployee?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateAddressInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditAddressInput>;
};

export type UpdateAddressPayload = {
  __typename?: 'updateAddressPayload';
  address?: Maybe<Address>;
};

export type UpdateAreaInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditAreaInput>;
};

export type UpdateAreaPayload = {
  __typename?: 'updateAreaPayload';
  area?: Maybe<Area>;
};

export type UpdateAttributeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditAttributeInput>;
};

export type UpdateAttributePayload = {
  __typename?: 'updateAttributePayload';
  attribute?: Maybe<Attribute>;
};

export type UpdateAttributeValueInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditAttributeValueInput>;
};

export type UpdateAttributeValuePayload = {
  __typename?: 'updateAttributeValuePayload';
  attributeValue?: Maybe<AttributeValue>;
};

export type UpdateBrandInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBrandInput>;
};

export type UpdateBrandPayload = {
  __typename?: 'updateBrandPayload';
  brand?: Maybe<Brand>;
};

export type UpdateBusinessTypeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBusinessTypeInput>;
};

export type UpdateBusinessTypePayload = {
  __typename?: 'updateBusinessTypePayload';
  businessType?: Maybe<BusinessType>;
};

export type UpdateCalendarEventInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCalendarEventInput>;
};

export type UpdateCalendarEventPayload = {
  __typename?: 'updateCalendarEventPayload';
  calendarEvent?: Maybe<CalendarEvent>;
};

export type UpdateCityInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCityInput>;
};

export type UpdateCityPayload = {
  __typename?: 'updateCityPayload';
  city?: Maybe<City>;
};

export type UpdateCompanyDetailInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCompanyDetailInput>;
};

export type UpdateCompanyDetailPayload = {
  __typename?: 'updateCompanyDetailPayload';
  companyDetail?: Maybe<CompanyDetail>;
};

export type UpdateCompanyEmployeeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCompanyEmployeeInput>;
};

export type UpdateCompanyEmployeePayload = {
  __typename?: 'updateCompanyEmployeePayload';
  companyEmployee?: Maybe<CompanyEmployee>;
};

export type UpdateCompanyInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCompanyInput>;
};

export type UpdateCompanyOwnerInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCompanyOwnerInput>;
};

export type UpdateCompanyOwnerPayload = {
  __typename?: 'updateCompanyOwnerPayload';
  companyOwner?: Maybe<CompanyOwner>;
};

export type UpdateCompanyPayload = {
  __typename?: 'updateCompanyPayload';
  company?: Maybe<Company>;
};

export type UpdateCompanyShopTradeConnectionInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCompanyShopTradeConnectionInput>;
};

export type UpdateCompanyShopTradeConnectionPayload = {
  __typename?: 'updateCompanyShopTradeConnectionPayload';
  companyShopTradeConnection?: Maybe<CompanyShopTradeConnection>;
};

export type UpdateCompanyTypeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCompanyTypeInput>;
};

export type UpdateCompanyTypePayload = {
  __typename?: 'updateCompanyTypePayload';
  companyType?: Maybe<CompanyType>;
};

export type UpdateCountryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCountryInput>;
};

export type UpdateCountryPayload = {
  __typename?: 'updateCountryPayload';
  country?: Maybe<Country>;
};

export type UpdateOrderInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditOrderInput>;
};

export type UpdateOrderLineInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditOrderLineInput>;
};

export type UpdateOrderLinePayload = {
  __typename?: 'updateOrderLinePayload';
  orderLine?: Maybe<OrderLine>;
};

export type UpdateOrderPayload = {
  __typename?: 'updateOrderPayload';
  order?: Maybe<Order>;
};

export type UpdateOrderShipmentInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditOrderShipmentInput>;
};

export type UpdateOrderShipmentPayload = {
  __typename?: 'updateOrderShipmentPayload';
  orderShipment?: Maybe<OrderShipment>;
};

export type UpdatePaymentMethodInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPaymentMethodInput>;
};

export type UpdatePaymentMethodPayload = {
  __typename?: 'updatePaymentMethodPayload';
  paymentMethod?: Maybe<PaymentMethod>;
};

export type UpdatePlatformDetailInput = {
  data?: Maybe<EditPlatformDetailInput>;
};

export type UpdatePlatformDetailPayload = {
  __typename?: 'updatePlatformDetailPayload';
  platformDetail?: Maybe<PlatformDetail>;
};

export type UpdatePriceRuleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPriceRuleInput>;
};

export type UpdatePriceRulePayload = {
  __typename?: 'updatePriceRulePayload';
  priceRule?: Maybe<PriceRule>;
};

export type UpdateProductCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProductCategoryInput>;
};

export type UpdateProductCategoryPayload = {
  __typename?: 'updateProductCategoryPayload';
  productCategory?: Maybe<ProductCategory>;
};

export type UpdateProductInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProductInput>;
};

export type UpdateProductPayload = {
  __typename?: 'updateProductPayload';
  product?: Maybe<Product>;
};

export type UpdateProductVariantInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProductVariantInput>;
};

export type UpdateProductVariantPayload = {
  __typename?: 'updateProductVariantPayload';
  productVariant?: Maybe<ProductVariant>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateSalesmanInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSalesmanInput>;
};

export type UpdateSalesmanPayload = {
  __typename?: 'updateSalesmanPayload';
  salesman?: Maybe<Salesman>;
};

export type UpdateShopInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditShopInput>;
};

export type UpdateShopPayload = {
  __typename?: 'updateShopPayload';
  shop?: Maybe<Shop>;
};

export type UpdateShopkeeperInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditShopkeeperInput>;
};

export type UpdateShopkeeperPayload = {
  __typename?: 'updateShopkeeperPayload';
  shopkeeper?: Maybe<Shopkeeper>;
};

export type UpdateStateInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditStateInput>;
};

export type UpdateStatePayload = {
  __typename?: 'updateStatePayload';
  state?: Maybe<State>;
};

export type UpdateSupplierInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSupplierInput>;
};

export type UpdateSupplierPayload = {
  __typename?: 'updateSupplierPayload';
  supplier?: Maybe<Supplier>;
};

export type UpdateTransactionTypeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTransactionTypeInput>;
};

export type UpdateTransactionTypePayload = {
  __typename?: 'updateTransactionTypePayload';
  transactionType?: Maybe<TransactionType>;
};

export type UpdateUnitInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUnitInput>;
};

export type UpdateUnitPayload = {
  __typename?: 'updateUnitPayload';
  unit?: Maybe<Unit>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateAddressMutationVariables = Exact<{
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  area: Scalars['ID'];
}>;

export type CreateAddressMutation = { __typename?: 'Mutation' } & {
  createAddress?: Maybe<
    { __typename?: 'createAddressPayload' } & {
      address?: Maybe<
        { __typename?: 'Address' } & Pick<
          Address,
          'id' | 'addressLine1' | 'addressLine2' | 'landmark' | 'postalCode'
        > & {
            area?: Maybe<
              { __typename?: 'Area' } & Pick<Area, 'id' | 'name'> & {
                  city?: Maybe<
                    { __typename?: 'City' } & Pick<City, 'id' | 'name'> & {
                        state?: Maybe<
                          { __typename?: 'State' } & Pick<State, 'id' | 'name'> & {
                              country?: Maybe<{ __typename?: 'Country' } & Pick<Country, 'id' | 'name'>>;
                            }
                        >;
                      }
                  >;
                }
            >;
          }
      >;
    }
  >;
};

export type UpdateAddressMutationVariables = Exact<{
  id: Scalars['ID'];
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  landmark?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  area: Scalars['ID'];
}>;

export type UpdateAddressMutation = { __typename?: 'Mutation' } & {
  updateAddress?: Maybe<
    { __typename?: 'updateAddressPayload' } & {
      address?: Maybe<
        { __typename?: 'Address' } & Pick<
          Address,
          'id' | 'addressLine1' | 'addressLine2' | 'landmark' | 'postalCode'
        > & {
            area?: Maybe<
              { __typename?: 'Area' } & Pick<Area, 'id' | 'name'> & {
                  city?: Maybe<
                    { __typename?: 'City' } & Pick<City, 'id' | 'name'> & {
                        state?: Maybe<
                          { __typename?: 'State' } & Pick<State, 'id' | 'name'> & {
                              country?: Maybe<{ __typename?: 'Country' } & Pick<Country, 'id' | 'name'>>;
                            }
                        >;
                      }
                  >;
                }
            >;
          }
      >;
    }
  >;
};

export type AreasOfCityQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type AreasOfCityQuery = { __typename?: 'Query' } & {
  areas?: Maybe<Array<Maybe<{ __typename?: 'Area' } & Pick<Area, 'id' | 'name'>>>>;
};

export type SignInMutationVariables = Exact<{
  mobileNumber: Scalars['String'];
  password: Scalars['String'];
}>;

export type SignInMutation = { __typename?: 'Mutation' } & {
  signIn: { __typename?: 'UsersPermissionsAuthUserTokenPayload' } & Pick<
    UsersPermissionsAuthUserTokenPayload,
    'jwt'
  > & {
      user: { __typename?: 'UsersPermissionsAuthUser' } & Pick<
        UsersPermissionsAuthUser,
        'id' | 'mobileNumber' | 'firstName' | 'lastName' | 'gender' | 'confirmed' | 'blocked'
      > & {
          role?: Maybe<
            { __typename?: 'UsersPermissionsMeRole' } & Pick<UsersPermissionsMeRole, 'id' | 'name' | 'type'>
          >;
          companyOwner?: Maybe<
            { __typename?: 'CompanyOwner' } & Pick<CompanyOwner, 'id'> & {
                company?: Maybe<{ __typename?: 'Company' } & Pick<Company, 'id'>>;
              }
          >;
          companyEmployee?: Maybe<
            { __typename?: 'CompanyEmployee' } & Pick<CompanyEmployee, 'id'> & {
                company?: Maybe<{ __typename?: 'Company' } & Pick<Company, 'id'>>;
              }
          >;
          shopkeeper?: Maybe<
            { __typename?: 'Shopkeeper' } & Pick<Shopkeeper, 'id'> & {
                shops?: Maybe<Array<Maybe<{ __typename?: 'Shop' } & Pick<Shop, 'id'>>>>;
              }
          >;
        };
    };
};

export type SignUpMutationVariables = Exact<{
  mobileNumber: Scalars['String'];
}>;

export type SignUpMutation = { __typename?: 'Mutation' } & {
  signUp?: Maybe<{ __typename?: 'UserPermissionsOkPayload' } & Pick<UserPermissionsOkPayload, 'ok'>>;
};

export type SendOtpMutationVariables = Exact<{
  mobileNumber: Scalars['String'];
}>;

export type SendOtpMutation = { __typename?: 'Mutation' } & {
  sendOtp?: Maybe<
    { __typename?: 'UserPermissionsSendSmsConfirmationPayload' } & Pick<
      UserPermissionsSendSmsConfirmationPayload,
      'mobileNumber' | 'sent' | 'token'
    >
  >;
};

export type VerifyMutationVariables = Exact<{
  mobileNumber: Scalars['String'];
  token: Scalars['String'];
}>;

export type VerifyMutation = { __typename?: 'Mutation' } & {
  verify?: Maybe<
    { __typename?: 'UsersPermissionsAuthUserTokenPayload' } & Pick<UsersPermissionsAuthUserTokenPayload, 'jwt'> & {
        user: { __typename?: 'UsersPermissionsAuthUser' } & Pick<
          UsersPermissionsAuthUser,
          'id' | 'mobileNumber' | 'firstName' | 'lastName' | 'gender' | 'confirmed' | 'blocked'
        > & {
            role?: Maybe<
              { __typename?: 'UsersPermissionsMeRole' } & Pick<UsersPermissionsMeRole, 'id' | 'name' | 'type'>
            >;
            companyOwner?: Maybe<
              { __typename?: 'CompanyOwner' } & Pick<CompanyOwner, 'id'> & {
                  company?: Maybe<{ __typename?: 'Company' } & Pick<Company, 'id'>>;
                }
            >;
            companyEmployee?: Maybe<
              { __typename?: 'CompanyEmployee' } & Pick<CompanyEmployee, 'id'> & {
                  company?: Maybe<{ __typename?: 'Company' } & Pick<Company, 'id'>>;
                }
            >;
            shopkeeper?: Maybe<
              { __typename?: 'Shopkeeper' } & Pick<Shopkeeper, 'id'> & {
                  shops?: Maybe<Array<Maybe<{ __typename?: 'Shop' } & Pick<Shop, 'id'>>>>;
                }
            >;
          };
      }
  >;
};

export type CreatePasswordMutationVariables = Exact<{
  password: Scalars['String'];
}>;

export type CreatePasswordMutation = { __typename?: 'Mutation' } & {
  createPassword?: Maybe<
    { __typename?: 'UsersPermissionsAuthUserTokenPayload' } & Pick<UsersPermissionsAuthUserTokenPayload, 'jwt'> & {
        user: { __typename?: 'UsersPermissionsAuthUser' } & Pick<
          UsersPermissionsAuthUser,
          'id' | 'mobileNumber' | 'firstName' | 'lastName' | 'gender' | 'confirmed' | 'blocked'
        > & {
            role?: Maybe<
              { __typename?: 'UsersPermissionsMeRole' } & Pick<UsersPermissionsMeRole, 'id' | 'name' | 'type'>
            >;
            companyOwner?: Maybe<
              { __typename?: 'CompanyOwner' } & Pick<CompanyOwner, 'id'> & {
                  company?: Maybe<{ __typename?: 'Company' } & Pick<Company, 'id'>>;
                }
            >;
            companyEmployee?: Maybe<
              { __typename?: 'CompanyEmployee' } & Pick<CompanyEmployee, 'id'> & {
                  company?: Maybe<{ __typename?: 'Company' } & Pick<Company, 'id'>>;
                }
            >;
            shopkeeper?: Maybe<
              { __typename?: 'Shopkeeper' } & Pick<Shopkeeper, 'id'> & {
                  shops?: Maybe<Array<Maybe<{ __typename?: 'Shop' } & Pick<Shop, 'id'>>>>;
                }
            >;
          };
      }
  >;
};

export type CitiesOfStateQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type CitiesOfStateQuery = { __typename?: 'Query' } & {
  cities?: Maybe<Array<Maybe<{ __typename?: 'City' } & Pick<City, 'id' | 'name'>>>>;
};

export type CompanyOwnerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type CompanyOwnerQuery = { __typename?: 'Query' } & {
  companyOwner?: Maybe<
    { __typename?: 'CompanyOwner' } & Pick<CompanyOwner, 'id'> & {
        user?: Maybe<
          { __typename?: 'UsersPermissionsUser' } & Pick<
            UsersPermissionsUser,
            | 'id'
            | 'firstName'
            | 'lastName'
            | 'gender'
            | 'dateOfBirth'
            | 'mobileNumber'
            | 'alternateMobileNumber'
            | 'email'
          >
        >;
      }
  >;
};

export type CompanyQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type CompanyQuery = { __typename?: 'Query' } & {
  company?: Maybe<
    { __typename?: 'Company' } & Pick<Company, 'id' | 'name' | 'sku'> & {
        businessType?: Maybe<{ __typename?: 'BusinessType' } & Pick<BusinessType, 'id'>>;
        companyType?: Maybe<{ __typename?: 'CompanyType' } & Pick<CompanyType, 'id'>>;
        registeredAddress?: Maybe<
          { __typename?: 'Address' } & Pick<
            Address,
            'id' | 'addressLine1' | 'addressLine2' | 'landmark' | 'postalCode'
          > & {
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
        companyDetail?: Maybe<{ __typename?: 'CompanyDetail' } & Pick<CompanyDetail, 'id' | 'returnPolicy'>>;
      }
  >;
};

export type CompanyBusinessTypesQueryVariables = Exact<{ [key: string]: never }>;

export type CompanyBusinessTypesQuery = { __typename?: 'Query' } & {
  companyTypes?: Maybe<Array<Maybe<{ __typename?: 'CompanyType' } & Pick<CompanyType, 'id' | 'name'>>>>;
  businessTypes?: Maybe<Array<Maybe<{ __typename?: 'BusinessType' } & Pick<BusinessType, 'id' | 'name'>>>>;
};

export type UpdateCompanyInformationMutationVariables = Exact<{
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  businessType?: Maybe<Scalars['ID']>;
  companyType?: Maybe<Scalars['ID']>;
}>;

export type UpdateCompanyInformationMutation = { __typename?: 'Mutation' } & {
  updateCompany?: Maybe<
    { __typename?: 'updateCompanyPayload' } & {
      company?: Maybe<
        { __typename?: 'Company' } & Pick<Company, 'id' | 'name' | 'sku'> & {
            businessType?: Maybe<{ __typename?: 'BusinessType' } & Pick<BusinessType, 'id' | 'name'>>;
            companyType?: Maybe<{ __typename?: 'CompanyType' } & Pick<CompanyType, 'id' | 'name'>>;
          }
      >;
    }
  >;
};

export type SetCompanyRegisteredAddressMutationVariables = Exact<{
  id: Scalars['ID'];
  registeredAddress: Scalars['ID'];
}>;

export type SetCompanyRegisteredAddressMutation = { __typename?: 'Mutation' } & {
  updateCompany?: Maybe<
    { __typename?: 'updateCompanyPayload' } & {
      company?: Maybe<
        { __typename?: 'Company' } & Pick<Company, 'id'> & {
            registeredAddress?: Maybe<
              { __typename?: 'Address' } & Pick<
                Address,
                'id' | 'addressLine1' | 'addressLine2' | 'landmark' | 'postalCode'
              > & {
                  area?: Maybe<
                    { __typename?: 'Area' } & Pick<Area, 'id' | 'name'> & {
                        city?: Maybe<
                          { __typename?: 'City' } & Pick<City, 'id' | 'name'> & {
                              state?: Maybe<
                                { __typename?: 'State' } & Pick<State, 'id' | 'name'> & {
                                    country?: Maybe<{ __typename?: 'Country' } & Pick<Country, 'id' | 'name'>>;
                                  }
                              >;
                            }
                        >;
                      }
                  >;
                }
            >;
          }
      >;
    }
  >;
};

export type UpdateCompanyDetailMutationVariables = Exact<{
  id: Scalars['ID'];
  returnPolicy?: Maybe<Scalars['String']>;
}>;

export type UpdateCompanyDetailMutation = { __typename?: 'Mutation' } & {
  updateCompanyDetail?: Maybe<
    { __typename?: 'updateCompanyDetailPayload' } & {
      companyDetail?: Maybe<{ __typename?: 'CompanyDetail' } & Pick<CompanyDetail, 'id' | 'returnPolicy'>>;
    }
  >;
};

export type CreateCompanyDetailMutationVariables = Exact<{
  returnPolicy?: Maybe<Scalars['String']>;
}>;

export type CreateCompanyDetailMutation = { __typename?: 'Mutation' } & {
  createCompanyDetail?: Maybe<
    { __typename?: 'createCompanyDetailPayload' } & {
      companyDetail?: Maybe<{ __typename?: 'CompanyDetail' } & Pick<CompanyDetail, 'id' | 'returnPolicy'>>;
    }
  >;
};

export type SetCompanyDetailMutationVariables = Exact<{
  id: Scalars['ID'];
  companyDetail: Scalars['ID'];
}>;

export type SetCompanyDetailMutation = { __typename?: 'Mutation' } & {
  updateCompany?: Maybe<
    { __typename?: 'updateCompanyPayload' } & {
      company?: Maybe<
        { __typename?: 'Company' } & Pick<Company, 'id'> & {
            companyDetail?: Maybe<{ __typename?: 'CompanyDetail' } & Pick<CompanyDetail, 'id' | 'returnPolicy'>>;
          }
      >;
    }
  >;
};

export type CountriesQueryVariables = Exact<{ [key: string]: never }>;

export type CountriesQuery = { __typename?: 'Query' } & {
  countries?: Maybe<Array<Maybe<{ __typename?: 'Country' } & Pick<Country, 'id' | 'name'>>>>;
};

export type OrdersOfCompanyQueryVariables = Exact<{ [key: string]: never }>;

export type OrdersOfCompanyQuery = { __typename?: 'Query' } & {
  orders?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Order' } & Pick<Order, 'id' | 'number' | 'currentStatus' | 'paymentStatus' | 'created_at'> & {
            shop?: Maybe<
              { __typename?: 'Shop' } & Pick<Shop, 'name'> & {
                  shopkeepers?: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'Shopkeeper' } & {
                          user?: Maybe<
                            { __typename?: 'UsersPermissionsUser' } & Pick<UsersPermissionsUser, 'mobileNumber'>
                          >;
                        }
                      >
                    >
                  >;
                  billingAddress?: Maybe<
                    { __typename?: 'Address' } & {
                      area?: Maybe<
                        { __typename?: 'Area' } & Pick<Area, 'name'> & {
                            city?: Maybe<{ __typename?: 'City' } & Pick<City, 'name'>>;
                          }
                      >;
                    }
                  >;
                }
            >;
          }
      >
    >
  >;
};

export type ProductCategoriesOfCompanyQueryVariables = Exact<{
  companyID: Scalars['ID'];
}>;

export type ProductCategoriesOfCompanyQuery = { __typename?: 'Query' } & {
  productCategories?: Maybe<
    Array<
      Maybe<
        { __typename?: 'ProductCategory' } & Pick<ProductCategory, 'id' | 'name' | 'description'> & {
            company?: Maybe<{ __typename?: 'Company' } & Pick<Company, 'id'>>;
            subcategories?: Maybe<
              Array<Maybe<{ __typename?: 'ProductCategory' } & Pick<ProductCategory, 'id' | 'name' | 'description'>>>
            >;
            parentCategory?: Maybe<{ __typename?: 'ProductCategory' } & Pick<ProductCategory, 'id'>>;
          }
      >
    >
  >;
};

export type ProductsOfCompanyQueryVariables = Exact<{
  companyID?: Maybe<Scalars['ID']>;
  sortBy?: Maybe<Scalars['String']>;
}>;

export type ProductsOfCompanyQuery = { __typename?: 'Query' } & Pick<Query, 'productsCount'> & {
    products?: Maybe<
      Array<
        Maybe<
          { __typename?: 'Product' } & Pick<Product, 'id' | 'title' | 'sku' | 'price'> & {
              productCategory?: Maybe<{ __typename?: 'ProductCategory' } & Pick<ProductCategory, 'id' | 'name'>>;
              brand?: Maybe<{ __typename?: 'Brand' } & Pick<Brand, 'id' | 'name'>>;
              company?: Maybe<{ __typename?: 'Company' } & Pick<Company, 'id' | 'name'>>;
            }
        >
      >
    >;
  };

export type StatesOfCountryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type StatesOfCountryQuery = { __typename?: 'Query' } & {
  states?: Maybe<Array<Maybe<{ __typename?: 'State' } & Pick<State, 'id' | 'name'>>>>;
};

export type GetUserInfoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetUserInfoQuery = { __typename?: 'Query' } & {
  user?: Maybe<
    { __typename?: 'UsersPermissionsUser' } & Pick<
      UsersPermissionsUser,
      'id' | 'firstName' | 'lastName' | 'mobileNumber'
    >
  >;
};

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type UserQuery = { __typename?: 'Query' } & {
  user?: Maybe<
    { __typename?: 'UsersPermissionsUser' } & Pick<
      UsersPermissionsUser,
      'id' | 'firstName' | 'lastName' | 'gender' | 'dateOfBirth' | 'mobileNumber' | 'alternateMobileNumber' | 'email'
    >
  >;
};

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<Enum_Userspermissionsuser_Gender>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  alternateMobileNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
}>;

export type UpdateUserMutation = { __typename?: 'Mutation' } & {
  updateUser?: Maybe<
    { __typename?: 'updateUserPayload' } & {
      user?: Maybe<
        { __typename?: 'UsersPermissionsUser' } & Pick<
          UsersPermissionsUser,
          | 'id'
          | 'firstName'
          | 'lastName'
          | 'gender'
          | 'dateOfBirth'
          | 'mobileNumber'
          | 'alternateMobileNumber'
          | 'email'
        >
      >;
    }
  >;
};

export type CompanyOwnerLayoutQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type CompanyOwnerLayoutQuery = { __typename?: 'Query' } & {
  companyOwner?: Maybe<
    { __typename?: 'CompanyOwner' } & Pick<CompanyOwner, 'id'> & {
        user?: Maybe<
          { __typename?: 'UsersPermissionsUser' } & Pick<
            UsersPermissionsUser,
            'id' | 'firstName' | 'lastName' | 'mobileNumber'
          >
        >;
        company?: Maybe<{ __typename?: 'Company' } & Pick<Company, 'id' | 'name'>>;
      }
  >;
};

export const CreateAddress = gql`
  mutation CreateAddress(
    $addressLine1: String!
    $addressLine2: String
    $landmark: String
    $postalCode: String
    $area: ID!
  ) {
    createAddress(
      input: {
        data: {
          addressLine1: $addressLine1
          addressLine2: $addressLine2
          landmark: $landmark
          postalCode: $postalCode
          area: $area
        }
      }
    ) {
      address {
        id
        addressLine1
        addressLine2
        landmark
        postalCode
        area {
          id
          name
          city {
            id
            name
            state {
              id
              name
              country {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;
export const UpdateAddress = gql`
  mutation UpdateAddress(
    $id: ID!
    $addressLine1: String!
    $addressLine2: String
    $landmark: String
    $postalCode: String
    $area: ID!
  ) {
    updateAddress(
      input: {
        where: { id: $id }
        data: {
          addressLine1: $addressLine1
          addressLine2: $addressLine2
          landmark: $landmark
          postalCode: $postalCode
          area: $area
        }
      }
    ) {
      address {
        id
        addressLine1
        addressLine2
        landmark
        postalCode
        area {
          id
          name
          city {
            id
            name
            state {
              id
              name
              country {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;
export const AreasOfCity = gql`
  query AreasOfCity($id: ID!) {
    areas(where: { city: { id: $id } }) {
      id
      name
    }
  }
`;
export const SignIn = gql`
  mutation SignIn($mobileNumber: String!, $password: String!) {
    signIn(input: { identifier: $mobileNumber, password: $password }) {
      jwt
      user {
        id
        mobileNumber
        firstName
        lastName
        gender
        confirmed
        blocked
        role {
          id
          name
          type
        }
        companyOwner {
          id
          company {
            id
          }
        }
        companyEmployee {
          id
          company {
            id
          }
        }
        shopkeeper {
          id
          shops {
            id
          }
        }
      }
    }
  }
`;
export const SignUp = gql`
  mutation SignUp($mobileNumber: String!) {
    signUp(mobileNumber: $mobileNumber) {
      ok
    }
  }
`;
export const SendOtp = gql`
  mutation SendOtp($mobileNumber: String!) {
    sendOtp(mobileNumber: $mobileNumber) {
      mobileNumber
      sent
      token
    }
  }
`;
export const Verify = gql`
  mutation Verify($mobileNumber: String!, $token: String!) {
    verify(mobileNumber: $mobileNumber, confirmation: $token) {
      jwt
      user {
        id
        mobileNumber
        firstName
        lastName
        gender
        confirmed
        blocked
        role {
          id
          name
          type
        }
        companyOwner {
          id
          company {
            id
          }
        }
        companyEmployee {
          id
          company {
            id
          }
        }
        shopkeeper {
          id
          shops {
            id
          }
        }
      }
    }
  }
`;
export const CreatePassword = gql`
  mutation CreatePassword($password: String!) {
    createPassword(password: $password) {
      jwt
      user {
        id
        mobileNumber
        firstName
        lastName
        gender
        confirmed
        blocked
        role {
          id
          name
          type
        }
        companyOwner {
          id
          company {
            id
          }
        }
        companyEmployee {
          id
          company {
            id
          }
        }
        shopkeeper {
          id
          shops {
            id
          }
        }
      }
    }
  }
`;
export const CitiesOfState = gql`
  query CitiesOfState($id: ID!) {
    cities(where: { state: { id: $id } }) {
      id
      name
    }
  }
`;
export const CompanyOwner = gql`
  query CompanyOwner($id: ID!) {
    companyOwner(id: $id) {
      id
      user {
        id
        firstName
        lastName
        gender
        dateOfBirth
        mobileNumber
        alternateMobileNumber
        email
      }
    }
  }
`;
export const Company = gql`
  query Company($id: ID!) {
    company(id: $id) {
      id
      name
      businessType {
        id
      }
      companyType {
        id
      }
      sku
      registeredAddress {
        id
        addressLine1
        addressLine2
        landmark
        postalCode
        area {
          id
          city {
            id
            state {
              id
              country {
                id
              }
            }
          }
        }
      }
      companyDetail {
        id
        returnPolicy
      }
    }
  }
`;
export const CompanyBusinessTypes = gql`
  query CompanyBusinessTypes {
    companyTypes {
      id
      name
    }
    businessTypes {
      id
      name
    }
  }
`;
export const UpdateCompanyInformation = gql`
  mutation UpdateCompanyInformation($id: ID!, $name: String, $businessType: ID, $companyType: ID) {
    updateCompany(
      input: { where: { id: $id }, data: { name: $name, businessType: $businessType, companyType: $companyType } }
    ) {
      company {
        id
        name
        sku
        businessType {
          id
          name
        }
        companyType {
          id
          name
        }
      }
    }
  }
`;
export const SetCompanyRegisteredAddress = gql`
  mutation SetCompanyRegisteredAddress($id: ID!, $registeredAddress: ID!) {
    updateCompany(input: { where: { id: $id }, data: { registeredAddress: $registeredAddress } }) {
      company {
        id
        registeredAddress {
          id
          addressLine1
          addressLine2
          landmark
          postalCode
          area {
            id
            name
            city {
              id
              name
              state {
                id
                name
                country {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const UpdateCompanyDetail = gql`
  mutation UpdateCompanyDetail($id: ID!, $returnPolicy: String) {
    updateCompanyDetail(input: { where: { id: $id }, data: { returnPolicy: $returnPolicy } }) {
      companyDetail {
        id
        returnPolicy
      }
    }
  }
`;
export const CreateCompanyDetail = gql`
  mutation CreateCompanyDetail($returnPolicy: String) {
    createCompanyDetail(input: { data: { returnPolicy: $returnPolicy } }) {
      companyDetail {
        id
        returnPolicy
      }
    }
  }
`;
export const SetCompanyDetail = gql`
  mutation SetCompanyDetail($id: ID!, $companyDetail: ID!) {
    updateCompany(input: { where: { id: $id }, data: { companyDetail: $companyDetail } }) {
      company {
        id
        companyDetail {
          id
          returnPolicy
        }
      }
    }
  }
`;
export const Countries = gql`
  query Countries {
    countries {
      id
      name
    }
  }
`;
export const OrdersOfCompany = gql`
  query OrdersOfCompany {
    orders {
      id
      number
      currentStatus
      paymentStatus
      created_at
      shop {
        name
        shopkeepers {
          user {
            mobileNumber
          }
        }
        billingAddress {
          area {
            name
            city {
              name
            }
          }
        }
      }
    }
  }
`;
export const ProductCategoriesOfCompany = gql`
  query ProductCategoriesOfCompany($companyID: ID!) {
    productCategories(where: { company: { id: $companyID }, parentCategory_null: true }, sort: "name") {
      id
      name
      description
      company {
        id
      }
      subcategories {
        id
        name
        description
      }
      parentCategory {
        id
      }
    }
  }
`;
export const ProductsOfCompany = gql`
  query ProductsOfCompany($companyID: ID, $sortBy: String) {
    productsCount(where: { company: $companyID })
    products(where: { company: $companyID }, sort: $sortBy) {
      id
      title
      sku
      productCategory {
        id
        name
      }
      brand {
        id
        name
      }
      price
      company {
        id
        name
      }
    }
  }
`;
export const StatesOfCountry = gql`
  query StatesOfCountry($id: ID!) {
    states(where: { country: { id: $id } }) {
      id
      name
    }
  }
`;
export const GetUserInfo = gql`
  query GetUserInfo($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      mobileNumber
    }
  }
`;
export const User = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      gender
      dateOfBirth
      mobileNumber
      alternateMobileNumber
      email
    }
  }
`;
export const UpdateUser = gql`
  mutation UpdateUser(
    $id: ID!
    $firstName: String
    $lastName: String
    $gender: ENUM_USERSPERMISSIONSUSER_GENDER
    $dateOfBirth: Date
    $alternateMobileNumber: String
    $email: String
  ) {
    updateUser(
      input: {
        where: { id: $id }
        data: {
          firstName: $firstName
          lastName: $lastName
          gender: $gender
          dateOfBirth: $dateOfBirth
          alternateMobileNumber: $alternateMobileNumber
          email: $email
        }
      }
    ) {
      user {
        id
        firstName
        lastName
        gender
        dateOfBirth
        mobileNumber
        alternateMobileNumber
        email
      }
    }
  }
`;
export const CompanyOwnerLayout = gql`
  query CompanyOwnerLayout($id: ID!) {
    companyOwner(id: $id) {
      id
      user {
        id
        firstName
        lastName
        mobileNumber
      }
      company {
        id
        name
      }
    }
  }
`;

export const CreateAddressDocument = `
    mutation CreateAddress($addressLine1: String!, $addressLine2: String, $landmark: String, $postalCode: String, $area: ID!) {
  createAddress(
    input: {data: {addressLine1: $addressLine1, addressLine2: $addressLine2, landmark: $landmark, postalCode: $postalCode, area: $area}}
  ) {
    address {
      id
      addressLine1
      addressLine2
      landmark
      postalCode
      area {
        id
        name
        city {
          id
          name
          state {
            id
            name
            country {
              id
              name
            }
          }
        }
      }
    }
  }
}
    `;
export const useCreateAddressMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<CreateAddressMutation, TError, CreateAddressMutationVariables, TContext>,
) =>
  useMutation<CreateAddressMutation, TError, CreateAddressMutationVariables, TContext>(
    useFetcher<CreateAddressMutation, CreateAddressMutationVariables>(CreateAddressDocument),
    options,
  );
export const UpdateAddressDocument = `
    mutation UpdateAddress($id: ID!, $addressLine1: String!, $addressLine2: String, $landmark: String, $postalCode: String, $area: ID!) {
  updateAddress(
    input: {where: {id: $id}, data: {addressLine1: $addressLine1, addressLine2: $addressLine2, landmark: $landmark, postalCode: $postalCode, area: $area}}
  ) {
    address {
      id
      addressLine1
      addressLine2
      landmark
      postalCode
      area {
        id
        name
        city {
          id
          name
          state {
            id
            name
            country {
              id
              name
            }
          }
        }
      }
    }
  }
}
    `;
export const useUpdateAddressMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<UpdateAddressMutation, TError, UpdateAddressMutationVariables, TContext>,
) =>
  useMutation<UpdateAddressMutation, TError, UpdateAddressMutationVariables, TContext>(
    useFetcher<UpdateAddressMutation, UpdateAddressMutationVariables>(UpdateAddressDocument),
    options,
  );
export const AreasOfCityDocument = `
    query AreasOfCity($id: ID!) {
  areas(where: {city: {id: $id}}) {
    id
    name
  }
}
    `;
export const useAreasOfCityQuery = <TData = AreasOfCityQuery, TError = unknown>(
  variables: AreasOfCityQueryVariables,
  options?: UseQueryOptions<AreasOfCityQuery, TError, TData>,
) =>
  useQuery<AreasOfCityQuery, TError, TData>(
    ['AreasOfCity', variables],
    useFetcher<AreasOfCityQuery, AreasOfCityQueryVariables>(AreasOfCityDocument).bind(null, variables),
    options,
  );
export const SignInDocument = `
    mutation SignIn($mobileNumber: String!, $password: String!) {
  signIn(input: {identifier: $mobileNumber, password: $password}) {
    jwt
    user {
      id
      mobileNumber
      firstName
      lastName
      gender
      confirmed
      blocked
      role {
        id
        name
        type
      }
      companyOwner {
        id
        company {
          id
        }
      }
      companyEmployee {
        id
        company {
          id
        }
      }
      shopkeeper {
        id
        shops {
          id
        }
      }
    }
  }
}
    `;
export const useSignInMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<SignInMutation, TError, SignInMutationVariables, TContext>,
) =>
  useMutation<SignInMutation, TError, SignInMutationVariables, TContext>(
    useFetcher<SignInMutation, SignInMutationVariables>(SignInDocument),
    options,
  );
export const SignUpDocument = `
    mutation SignUp($mobileNumber: String!) {
  signUp(mobileNumber: $mobileNumber) {
    ok
  }
}
    `;
export const useSignUpMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<SignUpMutation, TError, SignUpMutationVariables, TContext>,
) =>
  useMutation<SignUpMutation, TError, SignUpMutationVariables, TContext>(
    useFetcher<SignUpMutation, SignUpMutationVariables>(SignUpDocument),
    options,
  );
export const SendOtpDocument = `
    mutation SendOtp($mobileNumber: String!) {
  sendOtp(mobileNumber: $mobileNumber) {
    mobileNumber
    sent
    token
  }
}
    `;
export const useSendOtpMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<SendOtpMutation, TError, SendOtpMutationVariables, TContext>,
) =>
  useMutation<SendOtpMutation, TError, SendOtpMutationVariables, TContext>(
    useFetcher<SendOtpMutation, SendOtpMutationVariables>(SendOtpDocument),
    options,
  );
export const VerifyDocument = `
    mutation Verify($mobileNumber: String!, $token: String!) {
  verify(mobileNumber: $mobileNumber, confirmation: $token) {
    jwt
    user {
      id
      mobileNumber
      firstName
      lastName
      gender
      confirmed
      blocked
      role {
        id
        name
        type
      }
      companyOwner {
        id
        company {
          id
        }
      }
      companyEmployee {
        id
        company {
          id
        }
      }
      shopkeeper {
        id
        shops {
          id
        }
      }
    }
  }
}
    `;
export const useVerifyMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<VerifyMutation, TError, VerifyMutationVariables, TContext>,
) =>
  useMutation<VerifyMutation, TError, VerifyMutationVariables, TContext>(
    useFetcher<VerifyMutation, VerifyMutationVariables>(VerifyDocument),
    options,
  );
export const CreatePasswordDocument = `
    mutation CreatePassword($password: String!) {
  createPassword(password: $password) {
    jwt
    user {
      id
      mobileNumber
      firstName
      lastName
      gender
      confirmed
      blocked
      role {
        id
        name
        type
      }
      companyOwner {
        id
        company {
          id
        }
      }
      companyEmployee {
        id
        company {
          id
        }
      }
      shopkeeper {
        id
        shops {
          id
        }
      }
    }
  }
}
    `;
export const useCreatePasswordMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<CreatePasswordMutation, TError, CreatePasswordMutationVariables, TContext>,
) =>
  useMutation<CreatePasswordMutation, TError, CreatePasswordMutationVariables, TContext>(
    useFetcher<CreatePasswordMutation, CreatePasswordMutationVariables>(CreatePasswordDocument),
    options,
  );
export const CitiesOfStateDocument = `
    query CitiesOfState($id: ID!) {
  cities(where: {state: {id: $id}}) {
    id
    name
  }
}
    `;
export const useCitiesOfStateQuery = <TData = CitiesOfStateQuery, TError = unknown>(
  variables: CitiesOfStateQueryVariables,
  options?: UseQueryOptions<CitiesOfStateQuery, TError, TData>,
) =>
  useQuery<CitiesOfStateQuery, TError, TData>(
    ['CitiesOfState', variables],
    useFetcher<CitiesOfStateQuery, CitiesOfStateQueryVariables>(CitiesOfStateDocument).bind(null, variables),
    options,
  );
export const CompanyOwnerDocument = `
    query CompanyOwner($id: ID!) {
  companyOwner(id: $id) {
    id
    user {
      id
      firstName
      lastName
      gender
      dateOfBirth
      mobileNumber
      alternateMobileNumber
      email
    }
  }
}
    `;
export const useCompanyOwnerQuery = <TData = CompanyOwnerQuery, TError = unknown>(
  variables: CompanyOwnerQueryVariables,
  options?: UseQueryOptions<CompanyOwnerQuery, TError, TData>,
) =>
  useQuery<CompanyOwnerQuery, TError, TData>(
    ['CompanyOwner', variables],
    useFetcher<CompanyOwnerQuery, CompanyOwnerQueryVariables>(CompanyOwnerDocument).bind(null, variables),
    options,
  );
export const CompanyDocument = `
    query Company($id: ID!) {
  company(id: $id) {
    id
    name
    businessType {
      id
    }
    companyType {
      id
    }
    sku
    registeredAddress {
      id
      addressLine1
      addressLine2
      landmark
      postalCode
      area {
        id
        city {
          id
          state {
            id
            country {
              id
            }
          }
        }
      }
    }
    companyDetail {
      id
      returnPolicy
    }
  }
}
    `;
export const useCompanyQuery = <TData = CompanyQuery, TError = unknown>(
  variables: CompanyQueryVariables,
  options?: UseQueryOptions<CompanyQuery, TError, TData>,
) =>
  useQuery<CompanyQuery, TError, TData>(
    ['Company', variables],
    useFetcher<CompanyQuery, CompanyQueryVariables>(CompanyDocument).bind(null, variables),
    options,
  );
export const CompanyBusinessTypesDocument = `
    query CompanyBusinessTypes {
  companyTypes {
    id
    name
  }
  businessTypes {
    id
    name
  }
}
    `;
export const useCompanyBusinessTypesQuery = <TData = CompanyBusinessTypesQuery, TError = unknown>(
  variables?: CompanyBusinessTypesQueryVariables,
  options?: UseQueryOptions<CompanyBusinessTypesQuery, TError, TData>,
) =>
  useQuery<CompanyBusinessTypesQuery, TError, TData>(
    ['CompanyBusinessTypes', variables],
    useFetcher<CompanyBusinessTypesQuery, CompanyBusinessTypesQueryVariables>(CompanyBusinessTypesDocument).bind(
      null,
      variables,
    ),
    options,
  );
export const UpdateCompanyInformationDocument = `
    mutation UpdateCompanyInformation($id: ID!, $name: String, $businessType: ID, $companyType: ID) {
  updateCompany(
    input: {where: {id: $id}, data: {name: $name, businessType: $businessType, companyType: $companyType}}
  ) {
    company {
      id
      name
      sku
      businessType {
        id
        name
      }
      companyType {
        id
        name
      }
    }
  }
}
    `;
export const useUpdateCompanyInformationMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateCompanyInformationMutation,
    TError,
    UpdateCompanyInformationMutationVariables,
    TContext
  >,
) =>
  useMutation<UpdateCompanyInformationMutation, TError, UpdateCompanyInformationMutationVariables, TContext>(
    useFetcher<UpdateCompanyInformationMutation, UpdateCompanyInformationMutationVariables>(
      UpdateCompanyInformationDocument,
    ),
    options,
  );
export const SetCompanyRegisteredAddressDocument = `
    mutation SetCompanyRegisteredAddress($id: ID!, $registeredAddress: ID!) {
  updateCompany(
    input: {where: {id: $id}, data: {registeredAddress: $registeredAddress}}
  ) {
    company {
      id
      registeredAddress {
        id
        addressLine1
        addressLine2
        landmark
        postalCode
        area {
          id
          name
          city {
            id
            name
            state {
              id
              name
              country {
                id
                name
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const useSetCompanyRegisteredAddressMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    SetCompanyRegisteredAddressMutation,
    TError,
    SetCompanyRegisteredAddressMutationVariables,
    TContext
  >,
) =>
  useMutation<SetCompanyRegisteredAddressMutation, TError, SetCompanyRegisteredAddressMutationVariables, TContext>(
    useFetcher<SetCompanyRegisteredAddressMutation, SetCompanyRegisteredAddressMutationVariables>(
      SetCompanyRegisteredAddressDocument,
    ),
    options,
  );
export const UpdateCompanyDetailDocument = `
    mutation UpdateCompanyDetail($id: ID!, $returnPolicy: String) {
  updateCompanyDetail(
    input: {where: {id: $id}, data: {returnPolicy: $returnPolicy}}
  ) {
    companyDetail {
      id
      returnPolicy
    }
  }
}
    `;
export const useUpdateCompanyDetailMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<UpdateCompanyDetailMutation, TError, UpdateCompanyDetailMutationVariables, TContext>,
) =>
  useMutation<UpdateCompanyDetailMutation, TError, UpdateCompanyDetailMutationVariables, TContext>(
    useFetcher<UpdateCompanyDetailMutation, UpdateCompanyDetailMutationVariables>(UpdateCompanyDetailDocument),
    options,
  );
export const CreateCompanyDetailDocument = `
    mutation CreateCompanyDetail($returnPolicy: String) {
  createCompanyDetail(input: {data: {returnPolicy: $returnPolicy}}) {
    companyDetail {
      id
      returnPolicy
    }
  }
}
    `;
export const useCreateCompanyDetailMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<CreateCompanyDetailMutation, TError, CreateCompanyDetailMutationVariables, TContext>,
) =>
  useMutation<CreateCompanyDetailMutation, TError, CreateCompanyDetailMutationVariables, TContext>(
    useFetcher<CreateCompanyDetailMutation, CreateCompanyDetailMutationVariables>(CreateCompanyDetailDocument),
    options,
  );
export const SetCompanyDetailDocument = `
    mutation SetCompanyDetail($id: ID!, $companyDetail: ID!) {
  updateCompany(input: {where: {id: $id}, data: {companyDetail: $companyDetail}}) {
    company {
      id
      companyDetail {
        id
        returnPolicy
      }
    }
  }
}
    `;
export const useSetCompanyDetailMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<SetCompanyDetailMutation, TError, SetCompanyDetailMutationVariables, TContext>,
) =>
  useMutation<SetCompanyDetailMutation, TError, SetCompanyDetailMutationVariables, TContext>(
    useFetcher<SetCompanyDetailMutation, SetCompanyDetailMutationVariables>(SetCompanyDetailDocument),
    options,
  );
export const CountriesDocument = `
    query Countries {
  countries {
    id
    name
  }
}
    `;
export const useCountriesQuery = <TData = CountriesQuery, TError = unknown>(
  variables?: CountriesQueryVariables,
  options?: UseQueryOptions<CountriesQuery, TError, TData>,
) =>
  useQuery<CountriesQuery, TError, TData>(
    ['Countries', variables],
    useFetcher<CountriesQuery, CountriesQueryVariables>(CountriesDocument).bind(null, variables),
    options,
  );
export const OrdersOfCompanyDocument = `
    query OrdersOfCompany {
  orders {
    id
    number
    currentStatus
    paymentStatus
    created_at
    shop {
      name
      shopkeepers {
        user {
          mobileNumber
        }
      }
      billingAddress {
        area {
          name
          city {
            name
          }
        }
      }
    }
  }
}
    `;
export const useOrdersOfCompanyQuery = <TData = OrdersOfCompanyQuery, TError = unknown>(
  variables?: OrdersOfCompanyQueryVariables,
  options?: UseQueryOptions<OrdersOfCompanyQuery, TError, TData>,
) =>
  useQuery<OrdersOfCompanyQuery, TError, TData>(
    ['OrdersOfCompany', variables],
    useFetcher<OrdersOfCompanyQuery, OrdersOfCompanyQueryVariables>(OrdersOfCompanyDocument).bind(null, variables),
    options,
  );
export const ProductCategoriesOfCompanyDocument = `
    query ProductCategoriesOfCompany($companyID: ID!) {
  productCategories(
    where: {company: {id: $companyID}, parentCategory_null: true}
    sort: "name"
  ) {
    id
    name
    description
    company {
      id
    }
    subcategories {
      id
      name
      description
    }
    parentCategory {
      id
    }
  }
}
    `;
export const useProductCategoriesOfCompanyQuery = <TData = ProductCategoriesOfCompanyQuery, TError = unknown>(
  variables: ProductCategoriesOfCompanyQueryVariables,
  options?: UseQueryOptions<ProductCategoriesOfCompanyQuery, TError, TData>,
) =>
  useQuery<ProductCategoriesOfCompanyQuery, TError, TData>(
    ['ProductCategoriesOfCompany', variables],
    useFetcher<ProductCategoriesOfCompanyQuery, ProductCategoriesOfCompanyQueryVariables>(
      ProductCategoriesOfCompanyDocument,
    ).bind(null, variables),
    options,
  );
export const ProductsOfCompanyDocument = `
    query ProductsOfCompany($companyID: ID, $sortBy: String) {
  productsCount(where: {company: $companyID})
  products(where: {company: $companyID}, sort: $sortBy) {
    id
    title
    sku
    productCategory {
      id
      name
    }
    brand {
      id
      name
    }
    price
    company {
      id
      name
    }
  }
}
    `;
export const useProductsOfCompanyQuery = <TData = ProductsOfCompanyQuery, TError = unknown>(
  variables?: ProductsOfCompanyQueryVariables,
  options?: UseQueryOptions<ProductsOfCompanyQuery, TError, TData>,
) =>
  useQuery<ProductsOfCompanyQuery, TError, TData>(
    ['ProductsOfCompany', variables],
    useFetcher<ProductsOfCompanyQuery, ProductsOfCompanyQueryVariables>(ProductsOfCompanyDocument).bind(
      null,
      variables,
    ),
    options,
  );
export const StatesOfCountryDocument = `
    query StatesOfCountry($id: ID!) {
  states(where: {country: {id: $id}}) {
    id
    name
  }
}
    `;
export const useStatesOfCountryQuery = <TData = StatesOfCountryQuery, TError = unknown>(
  variables: StatesOfCountryQueryVariables,
  options?: UseQueryOptions<StatesOfCountryQuery, TError, TData>,
) =>
  useQuery<StatesOfCountryQuery, TError, TData>(
    ['StatesOfCountry', variables],
    useFetcher<StatesOfCountryQuery, StatesOfCountryQueryVariables>(StatesOfCountryDocument).bind(null, variables),
    options,
  );
export const GetUserInfoDocument = `
    query GetUserInfo($id: ID!) {
  user(id: $id) {
    id
    firstName
    lastName
    mobileNumber
  }
}
    `;
export const useGetUserInfoQuery = <TData = GetUserInfoQuery, TError = unknown>(
  variables: GetUserInfoQueryVariables,
  options?: UseQueryOptions<GetUserInfoQuery, TError, TData>,
) =>
  useQuery<GetUserInfoQuery, TError, TData>(
    ['GetUserInfo', variables],
    useFetcher<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument).bind(null, variables),
    options,
  );
export const UserDocument = `
    query User($id: ID!) {
  user(id: $id) {
    id
    firstName
    lastName
    gender
    dateOfBirth
    mobileNumber
    alternateMobileNumber
    email
  }
}
    `;
export const useUserQuery = <TData = UserQuery, TError = unknown>(
  variables: UserQueryVariables,
  options?: UseQueryOptions<UserQuery, TError, TData>,
) =>
  useQuery<UserQuery, TError, TData>(
    ['User', variables],
    useFetcher<UserQuery, UserQueryVariables>(UserDocument).bind(null, variables),
    options,
  );
export const UpdateUserDocument = `
    mutation UpdateUser($id: ID!, $firstName: String, $lastName: String, $gender: ENUM_USERSPERMISSIONSUSER_GENDER, $dateOfBirth: Date, $alternateMobileNumber: String, $email: String) {
  updateUser(
    input: {where: {id: $id}, data: {firstName: $firstName, lastName: $lastName, gender: $gender, dateOfBirth: $dateOfBirth, alternateMobileNumber: $alternateMobileNumber, email: $email}}
  ) {
    user {
      id
      firstName
      lastName
      gender
      dateOfBirth
      mobileNumber
      alternateMobileNumber
      email
    }
  }
}
    `;
export const useUpdateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>,
) =>
  useMutation<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>(
    useFetcher<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument),
    options,
  );
export const CompanyOwnerLayoutDocument = `
    query CompanyOwnerLayout($id: ID!) {
  companyOwner(id: $id) {
    id
    user {
      id
      firstName
      lastName
      mobileNumber
    }
    company {
      id
      name
    }
  }
}
    `;
export const useCompanyOwnerLayoutQuery = <TData = CompanyOwnerLayoutQuery, TError = unknown>(
  variables: CompanyOwnerLayoutQueryVariables,
  options?: UseQueryOptions<CompanyOwnerLayoutQuery, TError, TData>,
) =>
  useQuery<CompanyOwnerLayoutQuery, TError, TData>(
    ['CompanyOwnerLayout', variables],
    useFetcher<CompanyOwnerLayoutQuery, CompanyOwnerLayoutQueryVariables>(CompanyOwnerLayoutDocument).bind(
      null,
      variables,
    ),
    options,
  );
