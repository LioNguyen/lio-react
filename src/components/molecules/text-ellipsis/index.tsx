import './styles.ts'

import {
  Box,
  BoxProps,
  Button,
  HStack,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react'
import { FC, useState } from 'react'

interface TextEllipsisProps extends BoxProps {}

export const TextEllipsis: FC<TextEllipsisProps> = ({ ...props }) => {
  const [textWidth, setTextWidth] = useState(300)

  return (
    <Box {...props}>
      <Heading as="h3" mb="15px">
        Text Ellipsis
      </Heading>
      <HStack mb="15px">
        <Input
          w="100px"
          type="text"
          value={textWidth}
          onChange={(e) => setTextWidth(+e.target.value)}
        />
        <Button onClick={() => setTextWidth((prev) => prev - 100)}>
          Decrease
        </Button>
        <Button onClick={() => setTextWidth((prev) => prev + 100)}>
          Increase
        </Button>
      </HStack>
      <Text
        sx={{
          bgColor: 'brand.600',
          borderRadius: '8px',
          padding: '10px',
          width: textWidth,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
    </Box>
  )
}
