export interface Action {
  title: String
  variant?: "primary" | "secondary"
}

export interface Section {
  id: React.Key
  backgroundImageUrl: String
  title: String
  subtitle?: String
  actions: Action[]
  info?: String
}
