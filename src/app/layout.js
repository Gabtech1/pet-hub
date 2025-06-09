import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pet Hub",
  description: "Pet hub é o melhor petshop de Itatiba e região, com uma grande variedade de produtos e serviços para o seu pet.",
  keywords: "petshop, itatiba, pet hub, produtos para pets, serviços para pets",
  author: "Gabdev",
  icons: {
    icon: "/dec.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Header />
      <body>
        {children}
      </body>
      <Footer />
    </html>
  );
}