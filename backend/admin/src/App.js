import * as React from "react";
import { Admin, Resource, CustomRoutes } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import theme from "./theme";
import MyLayout from "./layout/MyLayout";
import Dashboard from "./dashboard/Dashboard";
import UsersList from "./users/UsersList";
import UsersCreate from "./users/UsersCreate";
import UsersEdit from "./users/UsersEdit";
import UsersShow from "./users/UsersShow";

const apiUrl = process.env.REACT_APP_API_URL;

const App = () => {
  return (
    <Admin 
      dataProvider={simpleRestProvider(apiUrl)} 
      theme={theme} 
      layout={MyLayout}
      dashboard={Dashboard}
    >
      <Resource
        name="users"
        list={UsersList}
        create={UsersCreate}
        edit={UsersEdit}
        show={UsersShow}
      />
    </Admin>
  );
};

export default App;