import styles from "./style";
import { NavBar, Hero, Business, Billing, CardDeal, Testimonials, Stats, Clients, CTA, Footer } from "./components";

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <NavBar></NavBar>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Hero></Hero>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Stats></Stats>
            <Business></Business>
            <Billing></Billing>
            <CardDeal></CardDeal>
            <Testimonials></Testimonials>
            <Clients></Clients>
            <CTA></CTA>
            <Footer></Footer>
        </div>
      </div>

    </div>
  );
}

export default App

//each css style is loaded from style.ts file and used as a class name