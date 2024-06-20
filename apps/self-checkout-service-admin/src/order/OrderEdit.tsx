import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CartTitle } from "../cart/CartTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="cart.id" reference="Cart" label="Cart">
          <SelectInput optionText={CartTitle} />
        </ReferenceInput>
        <TextInput label="paymentMethod" source="paymentMethod" />
      </SimpleForm>
    </Edit>
  );
};
