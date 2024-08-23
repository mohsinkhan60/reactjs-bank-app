import Billing from "./components/Billing"
import Hero from "./components/Hero"
import Business from "./components/Business"
import CardDeal from "./components/CardDeal"
import Clients from "./components/Clients"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"
import Testimonal from "./components/Testimonal"
import styles from "./style"


export const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business /> 
          <Billing />
          <CardDeal /> 
          <Testimonal /> 
          <Clients /> 
          <CTA /> 
          <Footer />
        </div>
      </div>
    </div>
  )
export default App