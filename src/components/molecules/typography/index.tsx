import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

/**
 * https://tailwindcss.com/docs/font-size
 */
interface TypographyProps extends HTMLAttributes<HTMLDivElement> {}

export const Typography: FC<TypographyProps> = ({ className, ...props }) => {
  return (
    <div className={clsx('typography', className)} {...props}>
      <h3 className="title font-mono">Typography</h3>
      <h1>Title 1</h1>
      <h2>Title 2</h2>
      <h3 className="text-xl font-bold">Title 3</h3>
      <p className="text-base">A regular paragraph</p>
      <p className="text-sm">A description paragraph</p>
      <p className="text-xs">A little note</p>
      <p className="text-normal leading-normal line-clamp-3 w-[500px]">
        Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
        occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat
        eu tempor labore enim adipisicing minim ad. Est in quis eu dolore
        occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum.
        Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis
        deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint
        voluptate sunt elit mollit officia ad enim sit consectetur enim.
      </p>
    </div>
  )
}
