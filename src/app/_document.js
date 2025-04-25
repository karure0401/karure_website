import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* Typekitスクリプトの挿入を next/script を使って行う */}
          <Script
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(d) {
                  var config = {
                    kitId: 'zyl4uuz',
                    scriptTimeout: 3000,
                    async: true
                  },
                  h=d.documentElement,
                  t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),
                  tk=d.createElement("script"),
                  f=false,
                  s=d.getElementsByTagName("script")[0],
                  a;
                  h.className+=" wf-loading";
                  tk.src='https://use.typekit.net/'+config.kitId+'.js';
                  tk.async=true;
                  tk.onload=tk.onreadystatechange=function(){
                    a=this.readyState;
                    if(f||a&&a!="complete"&&a!="loaded")return;
                    f=true;
                    clearTimeout(t);
                    try{Typekit.load(config)}catch(e){}
                  };
                  s.parentNode.insertBefore(tk,s);
                })(document);
              `,
            }}
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
