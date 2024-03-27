import './Contact.styles.scss'

import { FC, HTMLAttributes } from 'react'

interface ContactProps extends HTMLAttributes<HTMLDivElement> {}

export const Contact: FC<ContactProps> = () => {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
