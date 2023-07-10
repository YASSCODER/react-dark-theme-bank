import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"

const CardDeal = ()  => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find better card deal <br className="sm:block hidden"/> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae labore tempora aperiam provident obcaecati quis iure pariatur. Culpa, ab molestias?
        </p>
        <Button styles="mt-10"/>
      </div>
    </section>
  )
}

export default CardDeal