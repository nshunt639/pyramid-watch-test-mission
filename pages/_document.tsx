import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
    override render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default AppDocument
