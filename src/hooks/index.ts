export const PRODUCT_KEY = "product";
export const PRODUCT_ONE_KEY = `${PRODUCT_KEY}`;
export const PRODUCT_INSERT_KEY = `insert/${PRODUCT_KEY}`;
export const PRODUCT_UPDATE_KEY = `update/${PRODUCT_KEY}`;
export const PRODUCT_REMOVE_KEY = `remove/${PRODUCT_KEY}`;

export const MEDIA_KEY = "media";
export const MEDIA_ONE_KEY = `${MEDIA_KEY}`;
export const MEDIA_INSERT_KEY = `insert/${MEDIA_KEY}`;
export const MEDIA_UPDATE_KEY = `update/${MEDIA_KEY}`;
export const MEDIA_REMOVE_KEY = `remove/${MEDIA_KEY}`;

export const CUSTOMER_KEY = "customer";
export const CUSTOMER_ONE_KEY = `${CUSTOMER_KEY}`;
export const CUSTOMER_INSERT_KEY = `insert/${CUSTOMER_KEY}`;
export const CUSTOMER_UPDATE_KEY = `update/${CUSTOMER_KEY}`;
export const CUSTOMER_REMOVE_KEY = `remove/${CUSTOMER_KEY}`;

export const ADDRESS_KEY = "address";
export const ADDRESS_ONE_KEY = `${ADDRESS_KEY}`;
export const ADDRESS_INSERT_KEY = `insert/${ADDRESS_KEY}`;
export const ADDRESS_UPDATE_KEY = `update/${ADDRESS_KEY}`;
export const ADDRESS_REMOVE_KEY = `remove/${ADDRESS_KEY}`;

export const ORDER_KEY = "order";
export const ORDER_ONE_KEY = `${ORDER_KEY}`;
export const ORDER_INSERT_KEY = `insert/${ORDER_KEY}`;
export const ORDER_UPDATE_KEY = `update/${ORDER_KEY}`;
export const ORDER_REMOVE_KEY = `remove/${ORDER_KEY}`;

export const ORDER_LINE_KEY = "orderLine";
export const ORDER_LINE_ONE_KEY = `${ORDER_LINE_KEY}`;
export const ORDER_LINE_INSERT_KEY = `insert/${ORDER_LINE_KEY}`;
export const ORDER_LINE_UPDATE_KEY = `update/${ORDER_LINE_KEY}`;
export const ORDER_LINE_REMOVE_KEY = `remove/${ORDER_LINE_KEY}`;

export interface GenericUseProps<Data, Vars = void> {
  onSuccess?: (data: Data, variables: Vars) => void;
  onError?: (err: unknown, variables: Vars) => void;
  onSettled?: (
    data: Data | undefined,
    error: unknown | null,
    variables: Vars
  ) => void;
}

export interface GenericMutationUseProps<Vars> {
  onMutate?: (variables?: Vars) => void;
}

export interface GenericSelectProps<Data, Vars = void> {
  initialData?: Data;
  vars?: Vars;
  enabled?: boolean;
}

export interface GenericMutationProps<Params = void> {
  vars?: Params;
}
