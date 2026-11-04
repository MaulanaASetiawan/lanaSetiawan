import type { Metadata } from 'next';
import { JetBrains_Mono, Press_Start_2P } from 'next/font/google';
import './globals.css';

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://maulanaasetiawan.vercel.app'),
  title: 'Maulana Agus Setiawan — Android & IoT Solutions Engineer | Portfolio',
  description:
    'Portofolio Maulana Agus Setiawan — Lulusan S1 Informatika Universitas Mulawarman & alumni Bangkit Academy (Google, GoTo, Traveloka). Spesialis Android Development (Kotlin, Jetpack Compose, MVVM) dan Rekayasa IoT (ESP32, Sensor & Hardware-to-Mobile Integration) dengan pengalaman maritim di PT Badak LNG.',
  authors: [{ name: 'Maulana Agus Setiawan', url: 'https://github.com/MaulanaASetiawan' }],
  keywords: [
    'Maulana Agus Setiawan',
    'Android Developer Samarinda',
    'IoT Engineer Indonesia',
    'Kotlin Jetpack Compose MVVM',
    'Bangkit Academy Mobile Cohort',
    'ESP32 IoT Solutions',
    'PT Badak LNG Jaka Samudra',
    'Universitas Mulawarman Informatika',
  ],
  alternates: {
    canonical: 'https://maulanaasetiawan.vercel.app/',
  },
  openGraph: {
    title: 'Maulana Agus Setiawan — Android & IoT Solutions Engineer',
    description:
      'Lulusan S1 Informatika Unmul & alumni Bangkit Academy (Google, GoTo, Traveloka). Spesialis Android (Kotlin & MVVM) dan integrasi IoT hardware-to-cloud (PT Badak LNG).',
    url: 'https://maulanaasetiawan.vercel.app/',
    siteName: 'Maulana Agus Setiawan Portfolio',
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: 'Maulana Agus Setiawan — Android & IoT Solutions Engineer Portfolio',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maulana Agus Setiawan — Android & IoT Solutions Engineer',
    description:
      'Informatics Graduate (Unmul) & Bangkit Academy Alumnus — Specializing in Android Development (Kotlin/MVVM) and IoT Solutions.',
    images: ['/og.svg'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      data-theme="dark"
      className={`${pressStart2P.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="crt-active">{children}</body>
    </html>
  );
}
