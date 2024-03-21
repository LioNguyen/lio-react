import './Todo.styles.scss'

import { useIsFetching } from '@tanstack/react-query'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

import { useTodoIds, useTodos } from '@/services/queries'

interface TodoProps extends HTMLAttributes<HTMLDivElement> {}

export const Todo: FC<TodoProps> = ({ className, ...props }) => {
  const {
    data: idList,
    fetchStatus,
    isFetching,
    isError,
    status,
  } = useTodoIds()
  const todosQueries = useTodos(idList)

  const globalFetching = useIsFetching()

  if (isFetching) {
    return <span>Fetching...</span>
  }

  if (isError) {
    return <span>There is an error</span>
  }

  return (
    <div className={clsx('todo', className)} {...props}>
      <h1>Todo</h1>
      <p>Query function status: {fetchStatus}</p>
      <p>Query data status: {status}</p>
      <p>Global isFetching: {globalFetching}</p>
      {idList?.map((id) => <p key={id}>{id}</p>)}

      <ul>
        {todosQueries.map(({ data }) => (
          <li key={data?.id}>
            <div>Id: {data?.id}</div>
            <span>
              <strong>Title:</strong> {data?.title},{' '}
              <strong>Description:</strong> {data?.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
