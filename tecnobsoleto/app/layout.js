import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header'
import { CartProvider } from '@/components/context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'tecnobsoleto',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
