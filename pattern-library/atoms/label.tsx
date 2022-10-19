interface Props {
  text: String
}

function Label({ text }: Props) {
  return <p className="text-sm">{text}</p>
}

export default Label
