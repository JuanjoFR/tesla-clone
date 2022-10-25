import Header from "../organisms/header"
import Section from "../organisms/section"
import { Section as ISection } from "../types"
import React from "react"

interface Props {
  sections: ISection[]
}

function Home({ sections }: Props) {
  return (
    <React.Fragment>
      <Header />
      <div className="snap-y snap-mandatory h-screen overflow-scroll">
        {sections.map((section, index) => {
          const showChevron = index == 1
          const showFooter = index === sections.length - 1

          return (
            <Section
              key={index}
              data={{ ...section, showChevron, showFooter }}
            />
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default Home
