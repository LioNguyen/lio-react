import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TrackViewsApi } from './trackViewsApi'

const trackViewsApi = new TrackViewsApi()

export function useIncrementTrackViews(id: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => trackViewsApi.incrementTrackViews(id),
    onSettled: async (_, error) => {
      if (error) {
        // your code
      } else {
        await queryClient.invalidateQueries({
          queryKey: ['track-view', id],
        })
      }
    },
  })
}
