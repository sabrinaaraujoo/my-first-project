import styles from './Home.module.css'
import savings from '../../img/savings.svg'

import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-Vindo <span>Costs</span></h1>
            <p>Comece a gerenciar os seus porjetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto" />
            <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home;