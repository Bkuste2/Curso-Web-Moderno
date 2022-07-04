import Link from "next/link"
import styles from '../styles/Layout.module.css'

export default ({children, titulo}) => {
    return(
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{titulo ?? 'Mais um exemplo'}</h1>
                <Link href="/"><a>Voltar</a></Link>
            </div>

            <div className={styles.conteudo}>
                {children}
            </div>
        </div>
    )
}