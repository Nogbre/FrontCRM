import localFont from "next/font/local";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        <title>CRM-CLIENTES</title>
    </head>
      <body>
        <div className="bg-gray-200">
            {children}
        </div>
      </body>
    </html>
  );
}
