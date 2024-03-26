import * as S from './graphql-demo.styles.ts'

import { Heading, Stack, Text } from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

import { useIncrementTrackViews } from '@/services/track-views/mutations.ts'
import {
  useGetTrack,
  useGetTrackViews,
} from '@/services/track-views/queries.ts'

interface GraphqlDemoProps extends HTMLAttributes<HTMLDivElement> {}

export const GraphqlDemo: FC<GraphqlDemoProps> = ({ className, ...props }) => {
  const { data } = useGetTrackViews()

  return (
    <S.StyledWrapper className={clsx('graphql-demo', className)} {...props}>
      <Heading>GraphqlDemo</Heading>
      {(data?.tracksForHome || []).map((item: any) => (
        <Card id={item?.id} title={item?.title} />
      ))}
    </S.StyledWrapper>
  )
}

interface ICardProps {
  id: string
  title: string
}
function Card({ id, title }: ICardProps) {
  const { data } = useGetTrack(id)
  const { mutate } = useIncrementTrackViews(id)

  return (
    <Stack
      border="1px solid black"
      borderRadius="4px"
      mb="5px"
      padding="15px"
      cursor="pointer"
      onClick={() => mutate()}
    >
      <Text fontSize="24px" fontWeight={700}>
        {title}
      </Text>
      <Text>Number of views: {data?.track.numberOfViews || 0}</Text>
    </Stack>
  )
}
