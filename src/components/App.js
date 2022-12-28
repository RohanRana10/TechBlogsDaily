import { Navbar, Home, CreatePost, PostDetail } from './index.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/post/:postId' element={<PostDetail />} />
          <Route exact path='/create-post' element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
