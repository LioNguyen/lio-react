import { createAxios } from '..'

const axios = createAxios()

export class TrackViewsApi {
  public async getTrackViews() {
    const queryTracksForHome = `
      query TracksForHome {
        tracksForHome {
          id
          title
          thumbnail
          length
          modulesCount
          author {
            id
            name
            photo
          }
        }
      }
    `
    const res = await axios.post(import.meta.env.VITE_BASE_GRAPHQL_URL, {
      query: queryTracksForHome,
    })

    return res.data?.data
  }

  public async getTrack(trackId: string) {
    const queryTrack = `
      query GetTrack($trackId: ID!) {
        track(id: $trackId) {
          id
          title
          author {
            id
            name
            photo
          }
          thumbnail
          length
          modulesCount
          description
          numberOfViews
          modules {
            id
            title
            length
            content
            videoUrl
          }
        }
      }
    `

    const res = await axios.post(import.meta.env.VITE_BASE_GRAPHQL_URL, {
      query: queryTrack,
      variables: {
        trackId,
      },
    })

    return res.data?.data
  }

  public async incrementTrackViews(id: string) {
    const mutateIncrementTrackViews = `
      mutation IncrementTrackViews($incrementTrackViewsId: ID!) {
        incrementTrackViews(id: $incrementTrackViewsId) {
          code
          success
          message
          track {
            id
            numberOfViews
          }
        }
      }
    `

    const res = await axios.post(import.meta.env.VITE_BASE_GRAPHQL_URL, {
      query: mutateIncrementTrackViews,
      variables: {
        incrementTrackViewsId: id,
      },
    })

    return res.data
  }
}
