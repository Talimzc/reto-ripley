import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClientsPage from "./pages/ClientsPage";
import "antd/dist/antd.min.css";
import Header from "./components/Header";
import { Content } from "antd/lib/layout/layout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content
        className="site-layout-background"
        style={{
          padding: 32,
          margin: 0,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clients" element={<ClientsPage />} />
        </Routes>
      </Content>
    </BrowserRouter>
  );
}

export default App;
