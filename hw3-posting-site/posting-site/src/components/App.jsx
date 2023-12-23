import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "../App.css";
import { Start } from "./pages/Start";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Content } from "./layout/Content";
import { About } from "./pages/About";
import { Terms } from "./pages/Terms";
import { Post } from "./pages/Post";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Navigate to="/start" />} /> 
            <Route path="/start" element={<Start />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
