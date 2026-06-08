import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="min-h-screen flex flex-col justify-between bg-slate-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;