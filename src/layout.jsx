//  Implementing a layout component that includes the Navbar and Footer

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
const Layout = ({children}) => {
  return (
    <div className="layout">
        <Navbar />
        <main className="main-content">
            {children}
        </main>
        <Footer />
    </div>
  );
};      

export default Layout;

//  Implementing a layout component that includes the Navbar and Footer