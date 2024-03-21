import './Todo.styles.scss'

import { useIsFetching } from '@tanstack/react-query'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

import { useCreateTodo, useTodoIds, useTodos } from '@/services'
import { TodoType } from '@/types'
import { SubmitHandler, useForm } from 'react-hook-form'

interface TodoProps extends HTMLAttributes<HTMLDivElement> {}

export const Todo: FC<TodoProps> = ({ className, ...props }) => {
  const globalFetching = useIsFetching()
  const {
    data: idList,
    fetchStatus,
    isFetching,
    isError,
    status,
  } = useTodoIds()
  const todosQueries = useTodos(idList)
  const createTodoMutation = useCreateTodo()

  const { register, handleSubmit } = useForm<TodoType>()

  const handleCreateTodoSubmit: SubmitHandler<TodoType> = (data) => {
    createTodoMutation.mutate(data)
  }

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
      {/* {idList?.map((id) => <p key={id}>{id}</p>)} */}
      <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
        <h4>New todo:</h4>
        <input placeholder="Title" {...register('title')} />
        <br />
        <input placeholder="Description" {...register('description')} />
        <br />
        <input
          type="submit"
          disabled={createTodoMutation.isPending}
          value={createTodoMutation.isPending ? 'Creating...' : 'Create todo'}
        />
      </form>

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
