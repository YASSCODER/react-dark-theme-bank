import { clients } from "../constants"
import styles from "../style"

interface imgProps {
  id: string,
  logo: string
}

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => 
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[129px] min-w-[120px]`}>
            <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain  hover:bg-gray-900"/>
          </div>
        )}
      </div>
    </section>
  )
}

export default Clients