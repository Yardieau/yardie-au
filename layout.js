import './globals.css'

export const metadata = {
  title: 'Yardie.au | Australia’s Local Online Marketplace',
  description: 'Buy, sell and discover local bargains across Australia.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}