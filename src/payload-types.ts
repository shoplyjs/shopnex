/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    orders: Order;
    collections: Collection;
    products: Product;
    variants: Variant;
    options: Option;
    users: User;
    media: Media;
    policies: Policy;
    'gift-cards': GiftCard;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    orders: OrdersSelect<false> | OrdersSelect<true>;
    collections: CollectionsSelect<false> | CollectionsSelect<true>;
    products: ProductsSelect<false> | ProductsSelect<true>;
    variants: VariantsSelect<false> | VariantsSelect<true>;
    options: OptionsSelect<false> | OptionsSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    policies: PoliciesSelect<false> | PoliciesSelect<true>;
    'gift-cards': GiftCardsSelect<false> | GiftCardsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    'store-settings': StoreSetting;
    'hero-section': HeroSection;
    footer: Footer;
    'cj-settings': CjSetting;
  };
  globalsSelect: {
    'store-settings': StoreSettingsSelect<false> | StoreSettingsSelect<true>;
    'hero-section': HeroSectionSelect<false> | HeroSectionSelect<true>;
    footer: FooterSelect<false> | FooterSelect<true>;
    'cj-settings': CjSettingsSelect<false> | CjSettingsSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orders".
 */
export interface Order {
  id: number;
  orderId: string;
  user?: (number | null) | User;
  items: {
    product?: (number | null) | Product;
    variant: {
      variantId: string;
      name: string;
      price: number;
    };
    quantity: number;
    totalPrice: number;
    id?: string | null;
  }[];
  totalAmount: number;
  currency: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'canceled';
  paymentIntentId?: string | null;
  sessionId: string;
  paymentGateway?: 'stripe' | null;
  paymentMethod?: string | null;
  receiptUrl?: string | null;
  metadata?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  shippingAddress?: {
    name?: string;
    phone?: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      country?: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  billingAddress?: {
    name?: string;
    email?: string;
    phone?: string;
    address?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  roles?: ('admin' | 'customer')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: number;
  pid?: string | null;
  title: string;
  currency?: string | null;
  visible?: boolean | null;
  description?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  collections?: (number | Collection)[] | null;
  handle?: string | null;
  variants: {
    gallery?: (number | Media)[] | null;
    vid?: string | null;
    imageUrl?: string | null;
    price: number;
    originalPrice?: number | null;
    options?:
      | {
          option: string;
          value: string;
          id?: string | null;
        }[]
      | null;
    id?: string | null;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "collections".
 */
export interface Collection {
  id: number;
  title: string;
  handle?: string | null;
  description?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  products?: (number | Product)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "variants".
 */
export interface Variant {
  id: number;
  product: number | Product;
  price: number;
  options:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "options".
 */
export interface Option {
  id: number;
  product: number | Product;
  option: string;
  values: {
    value: string;
    id?: string | null;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "policies".
 */
export interface Policy {
  id: number;
  title: string;
  description?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  handle?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "gift-cards".
 */
export interface GiftCard {
  id: number;
  code: string;
  value: number;
  customer?: (number | null) | User;
  /**
   * Date gift card will expire
   */
  expiryDate?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'orders';
        value: number | Order;
      } | null)
    | ({
        relationTo: 'collections';
        value: number | Collection;
      } | null)
    | ({
        relationTo: 'products';
        value: number | Product;
      } | null)
    | ({
        relationTo: 'variants';
        value: number | Variant;
      } | null)
    | ({
        relationTo: 'options';
        value: number | Option;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'policies';
        value: number | Policy;
      } | null)
    | ({
        relationTo: 'gift-cards';
        value: number | GiftCard;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orders_select".
 */
export interface OrdersSelect<T extends boolean = true> {
  orderId?: T;
  user?: T;
  items?:
    | T
    | {
        product?: T;
        variant?:
          | T
          | {
              variantId?: T;
              name?: T;
              price?: T;
            };
        quantity?: T;
        totalPrice?: T;
        id?: T;
      };
  totalAmount?: T;
  currency?: T;
  paymentStatus?: T;
  orderStatus?: T;
  paymentIntentId?: T;
  sessionId?: T;
  paymentGateway?: T;
  paymentMethod?: T;
  receiptUrl?: T;
  metadata?: T;
  shippingAddress?: T;
  billingAddress?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "collections_select".
 */
export interface CollectionsSelect<T extends boolean = true> {
  title?: T;
  handle?: T;
  description?: T;
  products?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products_select".
 */
export interface ProductsSelect<T extends boolean = true> {
  pid?: T;
  title?: T;
  currency?: T;
  visible?: T;
  description?: T;
  collections?: T;
  handle?: T;
  variants?:
    | T
    | {
        gallery?: T;
        vid?: T;
        imageUrl?: T;
        price?: T;
        originalPrice?: T;
        options?:
          | T
          | {
              option?: T;
              value?: T;
              id?: T;
            };
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "variants_select".
 */
export interface VariantsSelect<T extends boolean = true> {
  product?: T;
  price?: T;
  options?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "options_select".
 */
export interface OptionsSelect<T extends boolean = true> {
  product?: T;
  option?: T;
  values?:
    | T
    | {
        value?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  firstName?: T;
  lastName?: T;
  roles?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "policies_select".
 */
export interface PoliciesSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  handle?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "gift-cards_select".
 */
export interface GiftCardsSelect<T extends boolean = true> {
  code?: T;
  value?: T;
  customer?: T;
  expiryDate?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "store-settings".
 */
export interface StoreSetting {
  id: number;
  name?: string | null;
  currency?:
    | (
        | 'AED'
        | 'AFN'
        | 'ALL'
        | 'AMD'
        | 'ANG'
        | 'AOA'
        | 'ARS'
        | 'AUD'
        | 'AWG'
        | 'AZN'
        | 'BAM'
        | 'BBD'
        | 'BDT'
        | 'BGN'
        | 'BHD'
        | 'BIF'
        | 'BMD'
        | 'BND'
        | 'BOB'
        | 'BOV'
        | 'BRL'
        | 'BSD'
        | 'BTN'
        | 'BWP'
        | 'BYN'
        | 'BZD'
        | 'CAD'
        | 'CDF'
        | 'CHE'
        | 'CHF'
        | 'CHW'
        | 'CLF'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'COU'
        | 'CRC'
        | 'CUC'
        | 'CUP'
        | 'CVE'
        | 'CZK'
        | 'DJF'
        | 'DKK'
        | 'DOP'
        | 'DZD'
        | 'EGP'
        | 'ERN'
        | 'ETB'
        | 'EUR'
        | 'FJD'
        | 'FKP'
        | 'GBP'
        | 'GEL'
        | 'GHS'
        | 'GIP'
        | 'GMD'
        | 'GNF'
        | 'GTQ'
        | 'GYD'
        | 'HKD'
        | 'HNL'
        | 'HTG'
        | 'HUF'
        | 'IDR'
        | 'ILS'
        | 'INR'
        | 'IQD'
        | 'IRR'
        | 'ISK'
        | 'JMD'
        | 'JOD'
        | 'JPY'
        | 'KES'
        | 'KGS'
        | 'KHR'
        | 'KMF'
        | 'KPW'
        | 'KRW'
        | 'KWD'
        | 'KYD'
        | 'KZT'
        | 'LAK'
        | 'LBP'
        | 'LKR'
        | 'LRD'
        | 'LSL'
        | 'LYD'
        | 'MAD'
        | 'MDL'
        | 'MGA'
        | 'MKD'
        | 'MMK'
        | 'MNT'
        | 'MOP'
        | 'MRU'
        | 'MUR'
        | 'MVR'
        | 'MWK'
        | 'MXN'
        | 'MXV'
        | 'MYR'
        | 'MZN'
        | 'NAD'
        | 'NGN'
        | 'NIO'
        | 'NOK'
        | 'NPR'
        | 'NZD'
        | 'OMR'
        | 'PAB'
        | 'PEN'
        | 'PGK'
        | 'PHP'
        | 'PKR'
        | 'PLN'
        | 'PYG'
        | 'QAR'
        | 'RON'
        | 'RSD'
        | 'RUB'
        | 'RWF'
        | 'SAR'
        | 'SBD'
        | 'SCR'
        | 'SDG'
        | 'SEK'
        | 'SGD'
        | 'SHP'
        | 'SLE'
        | 'SOS'
        | 'SRD'
        | 'SSP'
        | 'STN'
        | 'SVC'
        | 'SYP'
        | 'SZL'
        | 'THB'
        | 'TJS'
        | 'TMT'
        | 'TND'
        | 'TOP'
        | 'TRY'
        | 'TTD'
        | 'TWD'
        | 'TZS'
        | 'UAH'
        | 'UGX'
        | 'USD'
        | 'USN'
        | 'UYI'
        | 'UYU'
        | 'UYW'
        | 'UZS'
        | 'VED'
        | 'VES'
        | 'VND'
        | 'VUV'
        | 'WST'
        | 'XAF'
        | 'XAG'
        | 'XAU'
        | 'XBA'
        | 'XBB'
        | 'XBC'
        | 'XBD'
        | 'XCD'
        | 'XDR'
        | 'XOF'
        | 'XPD'
        | 'XPF'
        | 'XPT'
        | 'XSU'
        | 'XTS'
        | 'XUA'
        | 'XXX'
        | 'YER'
        | 'ZAR'
        | 'ZMW'
        | 'ZWG'
      )
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hero-section".
 */
export interface HeroSection {
  id: number;
  type: (
    | {
        title: string;
        subtitle?: string | null;
        ctaButtonText?: string | null;
        ctaButtonLink?: string | null;
        backgroundImage?: (number | null) | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'hero';
      }
    | {
        title: string;
        subtitle?: string | null;
        featuredProducts?: (number | Media)[] | null;
        backgroundImage?: (number | null) | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'carousel';
      }
  )[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: number;
  type?:
    | {
        copyright: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        };
        poweredBy?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'basic-footer';
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cj-settings".
 */
export interface CjSetting {
  id: number;
  /**
   * A list of product URLs to sync with CJ Dropshipping
   */
  items?:
    | {
        productUrl?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "store-settings_select".
 */
export interface StoreSettingsSelect<T extends boolean = true> {
  name?: T;
  currency?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hero-section_select".
 */
export interface HeroSectionSelect<T extends boolean = true> {
  type?:
    | T
    | {
        hero?:
          | T
          | {
              title?: T;
              subtitle?: T;
              ctaButtonText?: T;
              ctaButtonLink?: T;
              backgroundImage?: T;
              id?: T;
              blockName?: T;
            };
        carousel?:
          | T
          | {
              title?: T;
              subtitle?: T;
              featuredProducts?: T;
              backgroundImage?: T;
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer_select".
 */
export interface FooterSelect<T extends boolean = true> {
  type?:
    | T
    | {
        'basic-footer'?:
          | T
          | {
              copyright?: T;
              poweredBy?: T;
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cj-settings_select".
 */
export interface CjSettingsSelect<T extends boolean = true> {
  items?:
    | T
    | {
        productUrl?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}