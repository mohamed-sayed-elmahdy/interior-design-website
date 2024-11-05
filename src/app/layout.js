import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";


const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
export const metadata = {
  title: "sh design",
  description: "Interior designs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth bg-white">
      <body className={raleway.className}><CustomCursor/>{children}</body>
    </html>
  );
}