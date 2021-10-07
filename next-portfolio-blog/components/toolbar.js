import { useRouter } from 'next/router'
import styles from '../styles/Toolbar.module.css'


const Toolbar = () => {
    const router = useRouter()

    return (
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => window.location.href = 'https://twitter.com/don_swan'}>Twitter</div>
            <div onClick={() => window.location.href = 'https://github.com/erics1337'}>GitHub</div>
        </div>
    )
}

export default Toolbar