import Header from "./NavBar";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useSelector((s:RootState)=>s.ui.theme);
  return (
      <div className={theme === "dark" ? "dark" : ""}>
          <Header />
        <div className="min-h-screen">
          <main className="h-[calc(100vh-50px)] ">
            {children}
          </main>
          
        </div>
        <div>
          {/* <Footer/> */}
        </div>
    </div>
  );
}
