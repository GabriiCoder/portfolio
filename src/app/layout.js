import "./globals.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from '../Components/Footer/Footer';
import AdminButton from '../components/AdminButton/AdminButton';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <AdminButton />
      </body>
    </html>
  );
}