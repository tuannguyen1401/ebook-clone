import * as React from "react";
import { List, Datagrid, TextField, EmailField, EditButton, ShowButton, ImageField } from "react-admin";
import ApproveButton from "./ApproveButton";

const UsersList = (props) => (
  <List {...props} perPage={25} sort={{ field: "id", order: "ASC" }}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ImageField source="avatar" label="Avatar"  />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="role" />
      <ApproveButton />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export default UsersList;


