interface Props {
  text: String
}

function Label({ text }: Props) {
  return <p className="text-xs">{text}</p>
}

export default Label
