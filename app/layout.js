import "./globals.css";

export const metadata = {
  title: "Yardie.au",
  description: "Australia's Local Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
