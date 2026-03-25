import "./styles.scss";
import { Suranna } from "next/font/google";

const suranna = Suranna({
  subsets: ["latin"],
  weight: ["400"], // essa fonte só tem um peso
  variable: "--font-suranna",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={suranna.variable}>{children}</body>
    </html>
  );
}
