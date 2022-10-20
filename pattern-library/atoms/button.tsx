interface Props {
  variant?: "primary" | "secondary"
  title: String
}

function Button({ variant = "primary", title }: Props) {
  function getBackgroundColorClassName() {
    switch (variant) {
      case "primary":
        return "bg-gray-800"
      case "secondary":
        return "bg-gray-200"
      default:
        throw new Error("Unknown variant.")
    }
  }

  function getTextColorClassName() {
    switch (variant) {
      case "primary":
        return "text-gray-200"
      case "secondary":
        return "text-gray-800"
      default:
        throw new Error("Unknown variant.")
    }
  }

  return (
    <button
      className={`w-64 py-3 px-3 rounded text-sm ${getBackgroundColorClassName()} ${getTextColorClassName()} font-medium opacity-100`}
    >
      {title}
    </button>
  )
}

export default Button
