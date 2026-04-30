import "./globals.css";
import { Poppins, Playfair_Display } from "next/font/google";
import Navigation from "./components/Navigation/page";
import Footer from "./components/Footer/page";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "FoodTruck",
  description: "Food truck à Abidjan : tacos, burgers et street food savoureuse, rapide et fraîche à emporter." ,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
         <Navigation/>
        <main>
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}