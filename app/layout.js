import { Inter } from 'next/font/google'
import './globals.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rafael Portfolio',
  description: 'Sample Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/about/contact">Contact</Link></li>
              <li><Link href="/githubusers">GitHub Users</Link></li>
              <li>
                <details>
                  <summary>
                    Parent
                  </summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
