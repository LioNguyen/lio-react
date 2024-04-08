import './styles.ts'

import { Box, BoxProps, Heading, Text } from '@chakra-ui/react'
import { FC } from 'react'

interface ColumnsProps extends BoxProps {}

export const Columns: FC<ColumnsProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Heading as="h3" mb="15px">
        Columns
      </Heading>
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
    </Box>
  )
}
