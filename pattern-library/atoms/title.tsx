interface Props {
  text: String
}

function Title({ text }: Props) {
  return <h2 className="text-4xl font-medium mb-2">{text}</h2>
}

export default Title
