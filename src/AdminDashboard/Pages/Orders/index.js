import { Avatar, Space, Table, Typography } from 'antd'
import React,{useState , useEffect} from 'react'
import {getOrders} from '../../API'

const Orders = () => {
  const [loading, setLoading] = useState(false)
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    setLoading(true)
    getOrders().then(res => {
      setDataSource(res.products)
      setLoading()
    })
  }, [])


  return (
    <Space size={20} direction='vertical'>

      <Typography.Title level={4}>Orders</Typography.Title>

      <Table 
      
      loading={loading}
      columns={[
        {
          title:"Thumbnail",
          dataIndex:"thumbnail",
          render:(link)=>{
            return <Avatar src={link} />
          }
        },
        {
          title:"Title",
          dataIndex:"title",
        },
        {
          title:"Price",
          dataIndex:"price",
          render:(value)=> <span>${value}</span>
        },
        {
          title:"DiscountedTotal",
          dataIndex:"discountedTotal",
          render:(value)=> <span>${value}</span>
          
        },
        {
          title:"DiscountPercentage",
          dataIndex:"discountPercentage",
          render:(value)=> <span>{value}%</span>
          
        },
        {
          title:"Quantity",
          dataIndex:"quantity",
        },
        {
          title:"Total",
          dataIndex:"total",
          render:(value)=> <span>${value}</span>
        },
        
      ]}
      dataSource = {dataSource}
      pagination={
        {
          pageSize:5,
        }
      }
      ></Table>

    </Space>

  )
}

export default Orders