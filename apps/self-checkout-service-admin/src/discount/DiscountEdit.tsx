import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const DiscountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="code" source="code" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <BooleanInput label="isActive" source="isActive" />
      </SimpleForm>
    </Edit>
  );
};
