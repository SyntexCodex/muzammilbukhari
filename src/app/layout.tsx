import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Fira_Code } from "next/font/google";
import "./fonts.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muzammil Bukhari | Portfolio | acadmey",
  description:
    "Portfolio website for Muzammil Bukhari, a full-stack developer with a passion for building beautiful, functional, and user-centered digital experiences.",
  keywords: [
    "portfolio",
    "developer",
    "web development",
    "full-stack",
    "Muzammil Bukhari",
    "acadmey",
    "nextjs",
    "tailwindcss",
    "typescript",
    "react",
    "nodejs",
    "express",
    "mongodb",
    "graphql",
    "apollo",
    "redis",
    "docker",
    "kubernetes",
    "github",
    "git",
    "javascript",
    "html",
    "css",
    "python",
    "django",
    "flask",
    "sqlalchemy",
    "pandas",
    "numpy",
    "matplotlib",
    "seaborn",
    "scikit-learn",
    "tensorflow",
    "keras",
    "pytorch",
    "nltk",
    "spacy",
    "gensim",
    "word2vec",
    "fasttext",
    "bert",
    "gpt",
    "transformers",
    "openai",
    "azure",
    "aws",
    "gcp",
    "heroku",
    "netlify",
    "vercel",
    "aws",
    "azure",
    "gcp",
    "docker",
    "kubernetes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable}  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
