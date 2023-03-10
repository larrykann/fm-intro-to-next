import './globals.css'

/* Commented out because head.tsx was added. The version of Next used in the course seems to have done this differently */

/* export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
} */ 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
