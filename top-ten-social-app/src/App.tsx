import { BrowserRouter, Routes, Route} from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

import HomePage from "./pages/HomePage";
import FriendsPage from "./pages/FriendsPage";
import TopTenPage from "./pages/TopTenPage";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="top-ten" element={<TopTenPage />} />
          <Route path="friends" element={<FriendsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
