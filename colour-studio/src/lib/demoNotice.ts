import { createContext, useContext } from 'react'

export interface Notice {
  kind: 'whatsapp' | 'phone'
  message?: string
}

export const DemoNoticeContext = createContext<(notice: Notice) => void>(() => {})

/** Opens the demo notice. Buttons use it when a contact value is not set. */
export const useDemoNotice = () => useContext(DemoNoticeContext)
