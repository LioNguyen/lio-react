import './DragDropFile.styles.scss'

import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import clsx from 'clsx'
import { DragEventHandler, FC, HTMLAttributes, useRef, useState } from 'react'

interface DragDropFileProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * If you want to use onDrop, onDragOver, onDragEnter, onDragLeave events, you need to prevent the default behavior
 * createObjectURL() method will create different URLs for the same file, so we need to revoke the URL to free up the memory
 */
export const DragDropFile: FC<DragDropFileProps> = ({
  className,
  ...props
}) => {
  const [files, setFiles] = useState<any>(null)
  const divRef = useRef<HTMLDivElement>(null)

  console.log('🚀 @log ~ file: DragDropFile.tsx:26 ~ files:', files)

  const onDragOver: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault()

    divRef.current?.classList.add('drag-over')
  }

  const onDrop: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault()

    divRef.current?.classList.remove('drag-over')

    const fileList = Array.from(event.dataTransfer.files).map((file) => {
      const imageUrl = URL.createObjectURL(file)

      return {
        file,
        imageUrl,
      }
    })

    setFiles(fileList)
  }

  const onImageClick = (imageUrl: string) => {
    if (files?.length) {
      const newFileList = files.filter(
        (file: any) => file.imageUrl !== imageUrl,
      )
      setFiles(newFileList)
    }
  }

  return (
    <VStack className={clsx('drag-drop-file', className)} {...props}>
      <Heading draggable>Drag Drop File</Heading>
      <Flex
        ref={divRef}
        className="drop-zone"
        onDragOver={onDragOver}
        onDrop={onDrop}
        border="1px dashed gray"
        borderRadius={8}
        justifyContent="center"
        alignItems="center"
        height="250px"
        width="250px"
      >
        <Text>Drop image files here</Text>
      </Flex>

      <Flex gap="5px" maxH="200px">
        {files &&
          files?.map((file: any) => (
            <Image
              key={file.imageUrl}
              src={file.imageUrl}
              flex={1}
              _hover={{ cursor: 'pointer' }}
              onClick={() => onImageClick(file.imageUrl)}
              objectFit={'contain'}
              aspectRatio={1}
            />
          ))}
      </Flex>
    </VStack>
  )
}
