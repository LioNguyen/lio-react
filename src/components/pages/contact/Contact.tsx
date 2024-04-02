import './Contact.styles.scss'

import { FC, HTMLAttributes } from 'react'
import {
  ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
} from 'react-router-dom'

interface ContactProps extends HTMLAttributes<HTMLDivElement> {}

export const Contact: FC<ContactProps> = () => {
  const data: any = useActionData()

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="POST" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        {data && data?.error && <p>{data?.error}</p>}

        <button>Submit</button>
      </Form>
    </div>
  )
}

export async function contactAction(args: ActionFunctionArgs) {
  const data = await args.request.formData()

  const submission = {
    email: data.get('email') || '',
    message: (data.get('message') || '') as string,
  }

  // send your post request

  if (submission.message.length < 10) {
    return { error: 'Message must be over 10 chars long.' }
  }

  return redirect('/')
}
