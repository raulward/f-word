import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import ScrollToTop from '../ScrollToTop/ScrollToTop.jsx'
import GoogleAnalytics from '../GoogleAnalytics/GoogleAnalytics.jsx'
import styles from './Layout.module.css'

export default function Layout() {
  return (
    <div className={styles.shell}>
      <ScrollToTop />
      <GoogleAnalytics />
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
