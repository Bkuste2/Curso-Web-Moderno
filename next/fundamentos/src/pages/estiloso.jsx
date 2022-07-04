import Link from 'next/link';
import Layout from '../components/Layout';
import styles, {roxo} from '../styles/Estiloso.module.css'

const Estiloso = () => {
    return (
        <Layout titulo={"Exemplo de CSS MT LOUCO"}>
            <div className={roxo}>
                <h1>Estilo usando CSS MODULE</h1>
            </div>
        </Layout>
    )
}

export default Estiloso;