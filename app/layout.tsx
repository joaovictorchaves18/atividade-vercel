import "./globals.css";

export const metadata = {
  title: "Mensagem do João",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}