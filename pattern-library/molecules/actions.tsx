import Button from "../atoms/button"
import { Action as IAction } from "../types"

interface Props {
  data: IAction[]
}

function Actions({ data }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-8 mb-8">
      {data.map((action, index) => (
        <Button
          key={index.toString()}
          title={action.title}
          variant={action.variant}
        />
      ))}
    </div>
  )
}

export default Actions
