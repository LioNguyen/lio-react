import * as S from './styles.ts'

import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import clsx from 'clsx'
import { FC, HTMLAttributes, useState } from 'react'

interface CssSampleProps extends HTMLAttributes<HTMLDivElement> {}

export const CssSample: FC<CssSampleProps> = ({ className, ...props }) => {
  const [textWidth, setTextWidth] = useState(300)
  return (
    <Box className={clsx('css-sample', className)} {...props}>
      <S.ContainerWrapper className="container" gap="5px">
        {new Array(4).fill(null).map((_, i) => (
          <Center
            key={i}
            className="box"
            h="100px"
            w="100px"
            bgColor="brand.900"
            borderRadius="8px"
            color="white"
          >
            Hover
          </Center>
        ))}
      </S.ContainerWrapper>

      <Box sx={{ columns: '200px 2', columnGap: '30px' }}>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, ad
          dicta! Architecto ducimus itaque quae odio unde error quas doloremque
          maxime nam ratione repellat maiores possimus veniam assumenda magni,
          tenetur, nostrum blanditiis! Quidem, ducimus! Obcaecati consectetur ad
          culpa accusantium reiciendis at excepturi maxime maiores repellat,
          delectus eius id libero dignissimos?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, ad
          dicta! Architecto ducimus itaque quae odio unde error quas doloremque
          maxime nam ratione repellat maiores possimus veniam assumenda magni,
          tenetur, nostrum blanditiis! Quidem, ducimus! Obcaecati consectetur ad
          culpa accusantium reiciendis at excepturi maxime maiores repellat,
          delectus eius id libero dignissimos?
        </Text>
      </Box>

      <VStack alignItems="flex-start">
        <Heading>Text Ellipsis</Heading>
        <HStack>
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
      </VStack>
    </Box>
  )
}
