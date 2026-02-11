import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ORBE — Acessórios Masculinos",
  description: "Seleção curada de acessórios masculinos. Reserva exclusiva via Instagram.",
  openGraph: {
    title: "ORBE — Acessórios Masculinos",
    description: "Seleção curada. Presença em cada detalhe.",
    images: ["/og.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen">
        <Header />
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
