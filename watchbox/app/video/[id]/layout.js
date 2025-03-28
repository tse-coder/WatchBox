import Navbar from "@/app/Components/NavBar";
import "@/app/globals.css"

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}