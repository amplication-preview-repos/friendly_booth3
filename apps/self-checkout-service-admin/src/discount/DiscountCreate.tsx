import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const DiscountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="code" source="code" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <BooleanInput label="isActive" source="isActive" />
      </SimpleForm>
    </Create>
  );
};
