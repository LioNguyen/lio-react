import { useQuery } from '@tanstack/react-query'

import { TrackViewsApi } from './trackViewsApi'

const trackViewsApi = new TrackViewsApi()

export function useGetTrackViews() {
  return useQuery({
    queryKey: ['track-views'],
    queryFn: trackViewsApi.getTrackViews,
  })
}

export function useGetTrack(id: string) {
  return useQuery({
    queryKey: ['track-view', id],
    queryFn: () => trackViewsApi.getTrack(id),
  })
}
