import '../styles/global.scss'

export default function App({ Component, pageProps }) {
    console.log("this is App component")
    return <Component {...pageProps} />
}