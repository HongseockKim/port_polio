import type {Metadata} from "next";
import {Jua} from "next/font/google";
import "./globals.css";
import "swiper/css"
import 'swiper/css/effect-creative';
import {MainStyle} from "@/app/style/MainStyle";


const juaFont = Jua({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-jua-kr',
});

export const metadata: Metadata = {
  title: "portfolio",
  description: "안녕하세요 redStone 의 프론트엔드 개발자 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
    <body className={`${juaFont.variable}`}>
    <MainStyle>
        {children}
      </MainStyle>
    </body>
    </html>
  );
}
