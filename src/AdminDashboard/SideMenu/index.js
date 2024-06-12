import { AppstoreAddOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const SideMenu = () => {

const navigate = useNavigate()

  return (
    <div className='SideMenu'>
      <Menu
      className='SideMenuVertical'
      mode='vertical' 
      onClick={(item)=>{
        //item.key
        navigate(item.key)
        
      }} items={[
        {
          label:"Dashboard",
          icon:<AppstoreAddOutlined/>,
          key:"/",
        },
        {
          label:"Inventory",
          key:"/inventory",
          icon:<ShopOutlined/>,
        },
        {
          label:"Orders",
          key:"/orders",
          icon:<ShoppingCartOutlined/>,
        },
        {
          label:"Customer",
          key:"/customer",
          icon:<UserOutlined/>,
        },
      ]}></Menu>
    </div>
  )
}

export default SideMenu