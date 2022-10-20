import Button from "../atoms/button"
import Label from "../atoms/label"
import Subtitle from "../atoms/subtitle"
import Title from "../atoms/title"
import React from "react"

interface Action {
  title: String
  variant?: "primary" | "secondary"
}
interface Section {
  id: React.Key
  backgroundImageUrl: String
  title: String
  subtitle?: String
  actions: Action[]
  info?: String
}
interface Props {
  sections: Section[]
}

function Home({ sections }: Props) {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll">
      {sections.map((section) => (
        <div
          key={section.id}
          style={{
            backgroundImage: `url(${section.backgroundImageUrl})`
          }}
          className="snap-center w-screen h-screen flex flex-col justify-between items-center bg-center bg-cover pt-28 pb-14"
        >
          <div className="flex flex-col items-center">
            <Title text={section.title} />
            {section.subtitle ? (
              <Subtitle text={section.subtitle} />
            ) : undefined}
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row gap-8 mb-8">
              {section.actions.map((action, index) => (
                <Button
                  key={index.toString()}
                  title={action.title}
                  variant={action.variant}
                />
              ))}
            </div>
            {section.info ? <Label text={section.info} /> : undefined}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
