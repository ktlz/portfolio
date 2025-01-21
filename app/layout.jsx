"use client"

import { createContext, useState } from 'react';
import {JetBrains_Mono} from "next/font/google";
import Header from '../components/Header'
import "./globals.css";
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
})

const metadata = {
  title: "Kate's Portfolio",
  description: "Generated by create next app",
};

export const ThemeContext = createContext(null);

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('dark')
  const bgColor = theme === 'dark' ? 'bg-primary' : 'bg-white'
  return (
    <html lang="en">
      <ThemeContext.Provider value="dark">
        <body
          className={`${jetbrainsMono.variable} ${bgColor}`}
        >
          <Header/>
          <StairTransition/>
          <PageTransition>
            {children}
          </PageTransition>
        </body>
      </ThemeContext.Provider>
    </html>
  );
}
