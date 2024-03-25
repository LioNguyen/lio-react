import { usePatchPost, usePost, usePosts } from '@/services'
import './Practice.styles.scss'

import clsx from 'clsx'
import { FC, HTMLAttributes, useState } from 'react'

interface PracticeProps extends HTMLAttributes<HTMLDivElement> {}

export const Practice: FC<PracticeProps> = ({ className, ...props }) => {
  const [postId, setPostId] = useState(undefined)
  const [postTitle, setPostTitle] = useState('')

  console.log({ postId })

  const { data: postList } = usePosts()
  const post = usePost(postList)
  const patchPostMutation = usePatchPost()

  const renderForm = () => {
    return (
      <form className="post-form">
        <label htmlFor="id">Id</label>
        <input
          id="id"
          type="text"
          onChange={(e) => setPostId(e.target.value as any)}
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          onChange={(e) => setPostTitle(e.target.value as any)}
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            patchPostMutation.mutate({
              id: 1,
              title: postTitle,
            })
          }}
        >
          Submit
        </button>
      </form>
    )
  }

  const renderPost = (id: string, title: string, body: string) => {
    return (
      <div className="post-card" key={id}>
        <p>ID: {id}</p>
        <p>TITLE: {title}</p>
        <p>BODY: {body}</p>
      </div>
    )
  }

  return (
    <div className={clsx('practice', className)} {...props}>
      <h1>Practice</h1>
      {renderForm()}
      {post.map((item) =>
        renderPost(item.data?.id, item.data?.title, item.data?.body),
      )}
    </div>
  )
}
