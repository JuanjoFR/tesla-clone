import type { NextApiRequest, NextApiResponse } from "next"

interface Action {
  variant?: "primary" | "secondary"
  title: String
}
interface Item {
  id: React.Key
  backgroundImageUrl: String
  title: String
  subtitle?: String
  actions: Action[]
  info?: String
}

type Data = Item[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
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
  ])
}
