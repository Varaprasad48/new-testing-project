import { Layout } from "antd";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { LoginComponent } from "../common"; // Adjust the import path if necessary
import CompanyGrid from "../components/pages/trackx/masters/todolist/todo.list.grid";
import NewLoginComponent from "../common/iam-client-react/login-component/new-login-component/new-login-component";

const { Content } = Layout;

const App: React.FC = () => {
  
  return (


    <Layout>
      <Content>

        <Routes>
          <Route path="/" element={<NewLoginComponent />} />
          <Route path="/navpage" element={<CompanyGrid />} />
        </Routes>

      </Content>
    </Layout>
  );
};

export default App;
