import Script from "next/script";

import "../styles/_app.scss";

function App({ Component, pageProps }) {
    return (
        <>
            <Script
                src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
                integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
                crossorigin='anonymous'
            />
            <Script
                src='https://kit.fontawesome.com/c89aa4f49d.js'
                crossorigin='anonymous'
            ></Script>
            <Component {...pageProps} />

            <footer>
                <p>
                    Source available on{" "}
                    <a href='https://github.com/ItsYasiru/ItsYasiru'>github</a>,
                    have a great day/night!
                </p>
            </footer>
        </>
    );
}

export default App;
