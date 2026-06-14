export const metadata = {
  title: 'Juzhan News',
  description: 'موقع الأخبار',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  )
}
