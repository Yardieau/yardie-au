import './globals.css'

export const metadata = {
  title: 'Yardie.au | Australia’s Local Online Marketplace',
  description: 'Buy it. Sell it. Yard it.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
