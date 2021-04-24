import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"tpkahlon",utcoffset:"-5"}))};sessionStorage.setItem("_swa","1");`,
            }}
          ></script>
          <script
            data-ad-client="ca-pub-7162519541437651"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <meta name="title" content="Quickly" />
          <meta
            name="description"
            content="Quickly is a reference site to learn about various shortcuts for JavaScript, React, Node while working inside Visual Studio Code."
          />
          <meta
            name="keywords"
            content="react, node, javascript, vscode, visual studio code, editor, development, frontend, backend"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
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
