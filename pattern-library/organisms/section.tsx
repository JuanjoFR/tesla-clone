import Label from "../atoms/label"
import Subtitle from "../atoms/subtitle"
import Title from "../atoms/title"
import Actions from "../molecules/actions"
import Footer from "../organisms/footer"
import { Section as ISection } from "../types"
import { ChevronDownIcon } from "@heroicons/react/24/solid"

interface Props {
  data: { showChevron: Boolean; showFooter: Boolean } & ISection
}

function Section({ data }: Props) {
  function renderSectionBottom() {
    if (data.showChevron) {
      return (
        <ChevronDownIcon className="h-6 w-6 text-gray-900 animate-bounce mb-6" />
      )
    }

    if (data.showFooter) {
      return <Footer />
    }

    return <div className="pb-8" />
  }

  return (
    <div
      key={data.id}
      style={{
        backgroundImage: `url(${data.backgroundImageUrl})`
      }}
      className={`snap-center w-screen h-screen flex flex-col justify-between items-center bg-center bg-cover pt-28`}
    >
      <div className="flex flex-col items-center">
        <Title text={data.title} />
        {data.subtitle ? <Subtitle text={data.subtitle} /> : undefined}
      </div>
      <div className="flex flex-col items-center">
        <Actions data={data.actions} />
        <Label text={data.info} />

        {renderSectionBottom()}
      </div>
    </div>
  )
}

export default Section
