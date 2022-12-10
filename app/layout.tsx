import "#/styles/globals.css";
import ThemeProvider from "../components/provider";
import Header from "../components/header";
import Container from "../components/container";
import Footer from "../components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800 dark:text-slate-400 flex flex-col h-screen w-full overflow-y-hidden font-mono tracking-wide">
        <ThemeProvider attribute="class">
          <Header />
          <Container>{children}</Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
