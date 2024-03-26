import './UploadMultipleFiles.styles.scss'

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

interface UploadMultipleFilesProps extends HTMLAttributes<HTMLDivElement> {}

export const UploadMultipleFiles: FC<UploadMultipleFilesProps> = ({
  className,
  ...props
}) => {
  const [files, setFiles] = useState<any>(null)
  const [imagePreviews, setImagePreviews] = useState<string[] | undefined>()
  const [progress, setProgress] = useState({
    started: false,
    percent: 0,
  })

  // Handle image preview
  useEffect(() => {
    if (!files || !files.length) {
      setImagePreviews(undefined)
      return
    }

    const imageUrls: string[] = []
    files.forEach((file: any) => {
      const imageUrl = URL.createObjectURL(file)
      imageUrls.push(imageUrl)
    })

    setImagePreviews(imageUrls)

    return () => {
      imageUrls.forEach((imageUrl) => URL.revokeObjectURL(imageUrl))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files?.length])

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
      if (!files) {
        console.log('No file selected')
        return
      }

      const formData = new FormData()
      files.forEach((file: any, index: number) => {
        formData.append(`file${index}`, file)
      })

      await axiosInstance.post('/users', formData, {
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
      <Heading>Upload Multiple Files</Heading>
      <Input
        type="file"
        multiple
        onChange={(e) => e.target.files && setFiles(Array.from(e.target.files))}
      />

      {imagePreviews &&
        imagePreviews?.map((imageUrl) => <Image src={imageUrl} />)}

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
