import { Avatar, Space, Table, Typography } from 'antd'
import React,{useState , useEffect} from 'react'
import {getCustomers} from '../../API'

const Customers = () => {
  const [loading, setLoading] = useState(false)
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    setLoading(true)
    getCustomers().then(res => {
      setDataSource(res.users)
      setLoading()
    })
  }, [])


  return (
    <Space size={20} direction='vertical'>

      <Typography.Title level={4}>Customers</Typography.Title>

      <Table 
      
      loading={loading}
      columns={[
        {
          title:"Image",
          dataIndex:"image",
          render:(link)=>{
            return <Avatar src={link} />
          }
        },
        {
          title:"First Name",
          dataIndex:"firstName",
        },
        {
          title:"Last Name",
          dataIndex:"lastName",
        },
        {
          title:"Gender",
          dataIndex:"gender",
        },
        {
          title:"Age",
          dataIndex:"age",
        },
        {
          title:"Email",
          dataIndex:"email",
        },
        {
          title:"Phone",
          dataIndex:"phone",
        },
      
        {
          title:"Address",
          dataIndex:"address",
          render:(address)=>{
            return <span>{address.address},{address.city},{address.country},{address.postalCode}</span>
          }
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

export default Customers