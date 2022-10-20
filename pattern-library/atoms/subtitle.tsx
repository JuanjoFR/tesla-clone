interface Props {
  text: String
}

function Subtitle({ text }: Props) {
  return <h4 className="text-xl">{text}</h4>
}

export default Subtitle
