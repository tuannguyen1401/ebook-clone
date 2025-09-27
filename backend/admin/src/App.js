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
import Login from "./auth/Login";

// Component để handle login route
const LoginRoute = () => <Login />;

const App = () => {
  // Check if we're on login page
  const isLoginPage = window.location.pathname === '/admin/login';
  
  console.log('Current path:', window.location.pathname);
  console.log('Is login page:', isLoginPage);
  
  if (isLoginPage) {
    console.log('Rendering Login component');
    return (
      <div>
        <h1>TEST LOGIN PAGE</h1>
        <p>If you see this, React is working!</p>
        <Login />
      </div>
    );
  }

  console.log('Rendering Admin component');
  return (
    <Admin 
      dataProvider={simpleRestProvider("http://localhost:3000")} 
      theme={theme} 
      layout={MyLayout}
      dashboard={Dashboard}
    >
      <CustomRoutes>
        <CustomRoutes.Route path="/login" element={<LoginRoute />} />
      </CustomRoutes>
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