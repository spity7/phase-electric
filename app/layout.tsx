import type { Metadata } from "next";

// bootstrap five
import "bootstrap/dist/css/bootstrap.min.css";
// font awesome 6
import "@/public/icons/css/all.min.css";
// modal video
import "yet-another-react-lightbox/styles.css";
// main styles
import "@/public/scss/main.scss";

export const metadata: Metadata = {
  title: "Phase Electric",
  description: "phase electric",
  keywords: [
    "creative",
    "digital",
    "multipage",
    "landing",
    "freelancer",
    "Typescript",
    "React",
    "nextjs",
  ],
  authors: [
    {
      name: "Apolo-Theme",
      url: "https://themeforest.net/user/apolo-theme",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
