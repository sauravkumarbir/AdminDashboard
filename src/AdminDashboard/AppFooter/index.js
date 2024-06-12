import { Typography } from 'antd'
import React from 'react'

const AppFooter = () => {
  return (
    <div className='AppFooter'>
      <Typography.Link href='tel:+123456789'>+916789858688</Typography.Link>
      <Typography.Link href='https://google.com' target={"-blank"}>Privacy Policy</Typography.Link>
      <Typography.Link href='https://google.com' target={"-blank"}>Terms and Condition</Typography.Link>
    </div>
  )
}

export default AppFooter