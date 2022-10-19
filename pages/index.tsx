import HomeTemplate from "../pattern-library/templates/Home"
import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Electric Cars, Solar & Clean Energy | Tesla</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="font-montserrat">
        <HomeTemplate
          title="Model Y"
          actions={[
            { title: "Custom Order" },
            { title: "Learn More", variant: "secondary" }
          ]}
          info="Euro NCAP 5-Star Safety Rating"
        />
      </div>
    </div>
  )
}

export default Home
