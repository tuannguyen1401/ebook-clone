import * as React from "react";
import { Show, SimpleShowLayout, TextField, EmailField } from "react-admin";

const UsersShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="role" />
    </SimpleShowLayout>
  </Show>
);

export default UsersShow;


