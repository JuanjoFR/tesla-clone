import data from "../../features/featured-sections/data"
import type { FeaturedSection } from "../../features/featured-sections/types"
import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FeaturedSection[]>
) {
  res.status(200).json(data)
}
