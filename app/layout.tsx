import './globals.css';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

import Header from '../components/Header';

import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Event Tech Utilities',
    description: 'A collection of utilities for event technicians.',
    manifest: '/manifest.json',
    icons: { apple: '/icon.png' },
    themeColor: '#FC4F25',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            {' '}
            <Head>
                <link rel='manifest' href='/manifest.json' />
                <meta name='theme-color' content='#FC4F25' />
            </Head>
            <body
                className={
                    (roboto.className,
                    'max-w-screen max-h-screen h-screen w-screen bg-gradient-to-t from-dark to-black text-white')
                }
            >
                <Header />
                <div className='mx-auto md:w-1/2 lg:w-1/3'>{children}</div>
            </body>
        </html>
    );
}
