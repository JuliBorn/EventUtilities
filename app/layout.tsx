import './globals.css';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import { Roboto } from 'next/font/google';
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

import Header from '../components/Header';

export const metadata: Metadata = {
    title: 'Event Tech Utilities',
    description: 'A collection of utilities for event technicians.',
    manifest: '/manifest.json',
    icons: { apple: '/icon.png' },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body
                className={
                    (roboto.className,
                    'max-w-screen max-h-screen h-screen w-screen bg-gradient-to-t from-dark to-black text-white')
                }
            >
                <Header />

                {children}
            </body>
        </html>
    );
}
