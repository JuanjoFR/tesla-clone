import type { FeaturedSection } from "./types"

const data: FeaturedSection[] = [
  {
    id: "1",
    backgroundImageUrl: "model-y.jpeg",
    title: "Model Y",
    actions: [
      { title: "Custom Order" },
      { title: "Learn More", variant: "secondary" }
    ],
    info: "Euro NCAP 5-Star Safety Rating"
  },
  {
    id: "2",
    backgroundImageUrl: "model-3.jpeg",
    title: "Model 3",
    actions: [
      { title: "Custom Order" },
      { title: "Learn More", variant: "secondary" }
    ],
    info: "Model 3 received the highest Safety Assist score of any car in 2019, and a 5-star overall rating from Euro NCAP"
  },
  {
    id: "3",
    backgroundImageUrl: "model-s.jpeg",
    title: "Model S",
    actions: [
      { title: "Custom Order" },
      { title: "Learn More", variant: "secondary" }
    ]
  },
  {
    id: "4",
    backgroundImageUrl: "model-x.jpeg",
    title: "Model X",
    actions: [
      { title: "Custom Order" },
      { title: "Learn More", variant: "secondary" }
    ]
  },
  {
    id: "5",
    backgroundImageUrl: "solar-powerwall.jpeg",
    title: "Solar and Powerwall",
    subtitle: "Power Everything",
    actions: [{ title: "Learn More" }]
  }
]

export default data
