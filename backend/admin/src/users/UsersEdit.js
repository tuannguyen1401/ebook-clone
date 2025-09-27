import * as React from "react";
import { Edit, SimpleForm, TextInput, SelectInput, ImageInput, ImageField } from "react-admin";

const roleChoices = [
  { id: "ADMIN", name: "Admin" },
  { id: "USER", name: "User" },
];

async function uploadIfNeeded(data) {
  const avatar = data.avatar;
  if (avatar && Array.isArray(avatar) && avatar.length > 0 && avatar[0].rawFile) {
    const form = new FormData();
    form.append('file', avatar[0].rawFile);
    const res = await fetch('http://localhost:3000/upload/image', { method: 'POST', body: form });
    if (!res.ok) {
      throw new Error('Upload failed');
    }
    const json = await res.json();
    return { ...data, avatar: json.url };
  }
  return data;
}

const UsersEdit = (props) => (
  <Edit {...props} transform={uploadIfNeeded}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" isRequired fullWidth />
      <TextInput source="email" isRequired fullWidth />
      <SelectInput source="role" choices={roleChoices} isRequired />
      <ImageInput source="avatar" label="Avatar" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export default UsersEdit;


