import Navbar from "./Components/NavBar";
import Leftnavbar from "./Components/LeftNavBar";
import "./globals.css";
import { AppProvider } from "./context/AppContext";

export const metadata = {
  title: 'WatchBox',
  description: 'a youtube clone made by tsegaye s.',
  icons: {
    icon: {
       url: '/assets/logo.svg',
       type: 'image/svg+xml'
    }
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        <AppProvider>
          <Navbar />
          <main className="flex">
            <Leftnavbar />
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
