import * as React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  ImageInput,
  ImageField,
} from "react-admin";

const roleChoices = [
  { id: "ADMIN", name: "Admin" },
  { id: "USER", name: "User" },
];

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";

async function uploadIfNeeded(data) {
  const avatar = data.avatar;
  if (avatar) {
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

// Chuyển DB value -> react-admin ImageInput format
const formatAvatar = (value) => {
  if (!value) return undefined;
  const src = value.startsWith("http")
    ? value
    : `${apiUrl}${value}`;
  return [{ src, title: value.split("/").pop() }];
};

// Chuyển react-admin form value -> DB
const parseAvatar = (value) => {
  if (Array.isArray(value) && value.length && !value[0].rawFile) {
    // Người dùng không đổi ảnh, giữ nguyên filename
    return value[0].title || value[0].src.split("/").pop();
  }
  return value;
};

const UsersEdit = (props) => (
  <Edit {...props} transform={uploadIfNeeded}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" isRequired fullWidth />
      <TextInput source="email" isRequired fullWidth />
      <SelectInput source="role" choices={roleChoices} isRequired />
      <ImageInput
        source="avatar"
        label="Avatar"
        accept="image/*"
        format={formatAvatar}
        parse={parseAvatar}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export default UsersEdit;
