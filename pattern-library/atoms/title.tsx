interface Props {
  text: String
}

function Title({ text }: Props) {
  return <h2 className="text-4xl font-medium">{text}</h2>
}

export default Title
