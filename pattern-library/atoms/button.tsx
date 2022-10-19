interface Props {
  variant?: "primary" | "secondary"
  title: String
}

function Button({ variant = "primary", title }: Props) {
  function getBackgroundColorClassName() {
    switch (variant) {
      case "primary":
        return "bg-gray-900"
      case "secondary":
        return "bg-gray-100"
      default:
        throw new Error("Unknown variant.")
    }
  }

  function getTextColorClassName() {
    switch (variant) {
      case "primary":
        return "text-gray-100"
      case "secondary":
        return "text-black"
      default:
        throw new Error("Unknown variant.")
    }
  }

  return (
    <button
      className={`w-64 py-3 px-3 rounded bg-gray-500 text-sm ${getBackgroundColorClassName()} ${getTextColorClassName()} font-medium opacity-75`}
    >
      {title}
    </button>
  )
}

export default Button
