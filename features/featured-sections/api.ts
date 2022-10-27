// Need to use the React-specific entry point to import createApi
import type { FeaturedSection } from "./types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "featuredSectionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "api/" }),
  endpoints: (builder) => ({
    getFeaturedSections: builder.query<FeaturedSection[], void>({
      query: () => `featured-sections`
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFeaturedSectionsQuery } = api
