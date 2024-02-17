import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DC Food Bank - Your One-Stop FoodStuff Shop',
  description: 'Get high quality food stuff, beverages and more delivered directly to your doorstep',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}
