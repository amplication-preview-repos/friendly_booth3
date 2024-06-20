import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { CartItemTitle } from "../cartItem/CartItemTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="barcode" source="barcode" />
        <ReferenceArrayInput
          source="cartItems"
          reference="CartItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CartItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="image" source="image" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="stock" source="stock" />
        <div />
      </SimpleForm>
    </Create>
  );
};
