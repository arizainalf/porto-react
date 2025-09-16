import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";
import Footer from "../components/admin/Footer";

export default function DashboardLayout({ children, toggleDark }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <Header toggleDark={toggleDark} />
        {children}
        <Footer />
      </main>
    </div>
  );
}
