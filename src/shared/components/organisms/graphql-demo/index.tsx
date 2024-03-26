import { lazyLoad } from '@/utils'

export const GraphqlDemo = lazyLoad(
  () => import('./graphql-demo'),
  (module) => module.GraphqlDemo,
)
