import * as React from "react";
import { Create, SimpleForm, TextInput, SelectInput, ImageInput, ImageField, required, minLength, regex, email } from "react-admin";
import { useFormContext } from "react-hook-form";

const passwordValidators = [
  required(),
  minLength(8),
  regex(/\d/, 'Password phải có ít nhất 1 chữ số'),
];

// Email
const emailValidators = [required(), email()];

// Role
const roleValidators = [required()];

const roleChoices = [
  { id: "ADMIN", name: "Admin" },
  { id: "USER", name: "User" },
];

async function uploadIfNeeded(data) {
  const avatar = data.avatar;
  if (avatar) {
    console.log('avatar', avatar);
    const form = new FormData();
    form.append('file', avatar.rawFile);
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';
    const res = await fetch(`${apiUrl}/upload/image`, { method: 'POST', body: form });
    if (!res.ok) {
      throw new Error('Upload failed');
    }
    const json = await res.json();
    return { ...data, avatar: json.url };
  }
  return data;
}

const UsersCreate = (props) => (
  <Create {...props} transform={uploadIfNeeded}>
    <SimpleForm mode="onChange" reValidateMode="onChange">
      <TextInput source="name" isRequired  fullWidth defaultValue={"Teo"}/>
      <TextInput source="email" isRequired  fullWidth validate={emailValidators} defaultValue={"teo@gmail.com"}/>
      <TextInput source="password" type="password" isRequired  fullWidth validate={passwordValidators} defaultValue={"12345678"}/>
      <SelectInput source="role" choices={roleChoices} isRequired validate={roleValidators} defaultValue={"USER"}/>
      <ImageInput source="avatar" label="Avatar" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export default UsersCreate;


