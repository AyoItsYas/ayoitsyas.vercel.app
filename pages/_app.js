import Script from "next/script";
import Link from "next/link";
import NavBar from "../components/main/NavBar";
import { LeadCapture, openLeadCapture } from "../components/LeadCapture";

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
      />
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js'
        integrity='sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=='
        crossOrigin='anonymous'
        referrerPolicy='no-referrer'
      />

      <header>
        <NavBar>
          <Link href='#about-me'>About Me</Link>
          <Link href='#skill-set'>Skill Set</Link>
          <Link href='#projects'>Projects</Link>
          <Link href='#services'>Services</Link>
          <a onClick={openLeadCapture}>Get In Touch</a>
        </NavBar>
      </header>

      <Component {...pageProps} />

      <LeadCapture />

      <footer>
        <div className='footer-inner'>
          <p>
            Source available on{" "}
            <a href='https://github.com/ItsYasiru/ItsYasiru'>github</a>, have a
            great day/night!
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
