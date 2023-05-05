import { Poppins } from 'next/font/google';
import './globals.css'
import { CoursesState } from "@/app/context/courses";
import Header from "@/app/components/header";

const poppinsFont = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
});

export const metadata = {
  title: 'NextJS 13 Overview',
  description: 'This is a Next.js project bootstrapped with create-next-app.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body className={ poppinsFont.className }>
              <CoursesState>
                  <Header />
                  <main className={`container`}>
                      {children}
                  </main>
              </CoursesState>
          </body>
    </html>
  )
}
