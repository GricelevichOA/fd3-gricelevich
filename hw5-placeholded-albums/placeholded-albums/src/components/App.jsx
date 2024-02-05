import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Content } from "./layout/Content";
import { Index } from "./pages/Index";
import { Albums } from "./pages/Albums";
import { Album } from "./pages/Album";
import { Users } from "./pages/Users";
import { User } from "./pages/User";
import { NotFound } from "./pages/NotFound";
import { Provider } from "react-redux";
import { store } from "../store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Content>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/albums/:id" element={<Album />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<User />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
