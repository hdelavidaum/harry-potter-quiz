import Head from 'next/head'


const HeadTags = () => {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>HP Quiz - Imersão Alura - React + Next.js</title>
            <meta name="title" content="HP Quiz - Imersão Alura - React + Next.js" />
            <meta name="description" content="Quiz of Harry Potter's World developed by Henrique Delavi Daum at 'Imersão Alura React + NextJS' and deployed with Vercel" />

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
        </Head>
    )
}

export default HeadTags