import { api as featuredSectionsApi } from "../features/featured-sections/api"
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query/react"

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [featuredSectionsApi.reducerPath]: featuredSectionsApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(featuredSectionsApi.middleware)
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
