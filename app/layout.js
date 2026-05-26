
export const metadata = {
  title: 'Yardie.au',
  description: 'Australia’s local online marketplace',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
