import App from 'next/app';
import Head from 'next/head';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }) {
    const siteTitle = process.env.SiteTitle || 'NextJS';
    
    const props = {
        ...pageProps
    }
    
    return (
        <>
        <Head>
            <title>{ siteTitle }</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <script src="/data/UnityLoader.js" type="text/javascript"></script>
        </Head>
        <Component { ...props } />
        </>
    )
}

MyApp.getInitialProps = async (appContext) => {
    
    // get pageprops
    const appProps = await App.getInitialProps(appContext);
    
    return {
        ...appProps
    }
}
