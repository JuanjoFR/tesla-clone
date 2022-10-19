import Button from "../atoms/Button"
import Title from "../atoms/Title"
import Label from "../atoms/label"

interface Action {
  title: String
  variant?: "primary" | "secondary"
}

interface Props {
  title: String
  actions: Action[]
  info: String
}

function Home({ title, actions, info }: Props) {
  return (
    <div className="overflow-hidden">
      <div
        style={{
          backgroundImage: "url(model-y.jpeg)"
        }}
        className="flex flex-col h-screen bg-center bg-cover items-center justify-between text-center pt-28 pb-14"
      >
        <Title text={title} />
        <div>
          <div className="flex flex-row gap-8 mb-8">
            {actions.map((action, i) => (
              <Button key={i} title={action.title} variant={action.variant} />
            ))}
          </div>
          <Label text={info} />
        </div>
      </div>
    </div>
  )
}

export default Home
