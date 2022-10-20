import Document, { Html, Head, Main, NextScript } from "next/document";

const schemaData = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Yasiru Dharmathilaka",
  url: "https://www.yasiru.dev/",
  image: "https://github.com/ItsYasiru.png",
  sameAs: [
    "https://www.instagram.com/ayo.its.yas/",
    "https://www.linkedin.com/in/yasiru-dharmathilaka/",
    "https://github.com/ItsYasiru",
    "https://www.yasiru.dev/",
  ],
  jobTitle: "Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "vKonnect Solutions",
  },
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charset='utf-8' />
          <meta name='theme-color' content='dark' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta
            name='google-site-verification'
            content='dbfHPoHZg9kxN2xrs3_bw6DOWKsM8wc0SGqxQ8FBcfw'
          />
          <link
            rel='icon'
            href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>'
          />
          <meta
            name='description'
            content='Currently a student at the National School of Business Management (NSBM), a passionate Self-taught programmer, and a creative problem solver. I have experience with Python and JavaScript mainly with back-end development. I enjoy programming and almost anything related to computers. How computers function really amazes me and here I am digging deeper into the field and building my career doing what I love.'
          />

          <script
            id='page-schema-data'
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />

          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          />
          <link
            href='https://unpkg.com/aos@2.3.1/dist/aos.css'
            rel='stylesheet'
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
