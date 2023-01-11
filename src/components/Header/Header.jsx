import React from "react"
import { Form } from "./components/Form/Form"
import headerStyles from "./header.module.css"

const Header = () => {
  console.log("Render Header")
  return (
    <header className={headerStyles.wr}>
      <Form />
    </header>
  )
}

export const HeaderMemo = React.memo(Header)
