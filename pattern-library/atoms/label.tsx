interface Props {
  text?: String
}

function Label({ text }: Props) {
  if (text) {
    return <p className="text-xs mb-6 px-2">{text}</p>
  }

  return <div className="mb-8"></div>
}

export default Label
