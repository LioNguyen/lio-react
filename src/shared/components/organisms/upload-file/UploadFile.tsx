import './UploadFile.styles.scss'

import {
  Button,
  Heading,
  Image,
  Input,
  Progress,
  VStack,
} from '@chakra-ui/react'
import axios, { AxiosProgressEvent } from 'axios'
import clsx from 'clsx'
import { FC, HTMLAttributes, useEffect, useState } from 'react'

import { createAxios } from '@/services'

const axiosInstance = createAxios()

interface UploadFileProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * URL.createObjectURL is used to create a URL for image file, browser use memory to store the image file
 * therefore, we need to revoke the URL to free up the memory using URL.revokeObjectURL
 * new FormData() create files to send to the server
 *
 * image file type: image/png, image/jpeg, image/gif, image/webp, image/svg+xml, image/bmp, image/tiff
 */
export const UploadFile: FC<UploadFileProps> = ({ className, ...props }) => {
  const [file, setFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | undefined>()
  const [progress, setProgress] = useState({
    started: false,
    percent: 0,
  })

  // Handle image preview
  useEffect(() => {
    if (!file || !file.type.includes('image')) {
      setImagePreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(file)

    setImagePreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [file])

  function onUploadProgress(progressEvent: AxiosProgressEvent) {
    if (progressEvent.total) {
      const percent = Math.round(
        (progressEvent.loaded / progressEvent.total) * 100,
      )
      setProgress((prev) => ({
        ...prev,
        started: true,
        percent,
      }))
    }
  }

  const onClick = async () => {
    try {
      if (!file) {
        console.log('No file selected')
        return
      }

      const formData = new FormData()
      formData.append('file', file)

      await axiosInstance.post('/files', formData, {
        onUploadProgress,
      })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response)
      } else {
        console.log(error)
      }
    } finally {
      setProgress((prev) => ({
        ...prev,
        started: false,
      }))
    }
  }

  return (
    <VStack
      className={clsx('upload-file', className)}
      mt="5px"
      mb="15px"
      gap="15px"
      {...props}
    >
      <Heading>Upload File</Heading>
      <Input
        type="file"
        onChange={(e) => e.target.files && setFile(e.target.files[0])}
      />

      <Image src={imagePreview} />

      <Button onClick={onClick}>Upload</Button>
      {progress.started && (
        <Progress
          value={progress.percent}
          colorScheme="red"
          borderRadius="8px"
          width="100%"
        />
      )}
    </VStack>
  )
}
