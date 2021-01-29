import Head from 'next/head'


const HeadTags = () => {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>HP Quiz - Imersão Alura - React + Next.js</title>
            <meta name="title" content="HP Quiz - Imersão Alura - React + Next.js" />
            <meta name="description" content="Quiz of Harry Potter's World developed by Henrique Delavi Daum at 'Imersão Alura React + NextJS' and deployed with Vercel" />
            <link rel="shortcut icon" href="https://www.alura.com.br/assets/img/home/homeNova/ilustra-alura-escafandro.1602103866.svg" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://harry-potter-quiz.hdelavidaum.vercel.app/" />
            <meta property="og:title" content="HP Quiz|Imersão Alura|React+Next.js" />
            <meta property="og:description" content="Developed by Henrique Delavi Daum at 'Imersão Alura React+NextJS'" />
            <meta property="og:image" content="https://raw.githubusercontent.com/hdelavidaum/harry-potter-quiz/main/assets/harry-potter-bg.jpg" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://harry-potter-quiz.hdelavidaum.vercel.app/" />
            <meta property="twitter:title" content="HP Quiz|Imersão Alura|React+Next.js" />
            <meta property="twitter:description" content="Developed by Henrique Delavi Daum at 'Imersão Alura React+NextJS'" />
            <meta property="twitter:image" content="https://raw.githubusercontent.com/hdelavidaum/harry-potter-quiz/main/assets/harry-potter-bg.jpg" />

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
        </Head>
    )
}

export default HeadTags