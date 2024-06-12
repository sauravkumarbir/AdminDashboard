import { DollarCircleOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Space, Statistic, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { getCustomers, getInventory, getOrders, getRevenue } from '../../API';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {

  const [orders,setOrders] = useState(0)
  const [inventory , setInventory] = useState(0)
  const [customers,setCustomers] = useState(0)
  const [revenue,setRevenue] = useState(0)


  useEffect(()=>{
   
    getOrders().then(res=>{
      setOrders(res.total)
    })

  },[])


  useEffect(()=>{
  
   getInventory().then(res=>{
    setInventory(res.total)
   })

  },[])

  useEffect(()=>{
  
   getCustomers().then(res=>{
    setCustomers(res.total)
   })

  },[])

  useEffect(()=>{
  
   getRevenue().then(res=>{
    setRevenue(res.total)
   })

  },[])

  return (
    <Space size={20} direction='vertical'>
      <Typography.Title level={4} className='mt-3'>Dashboard</Typography.Title>

      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: 'green',
                backgroundColor: 'rgba(0,225,0,0.35)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Orders"
          value={orders}
        />

        <DashboardCard
          icon={
            <ShopOutlined
              style={{
                color: 'red',
                backgroundColor: 'rgba(225,0,0,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Inventory"
          value={inventory}
        />

        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: 'purple',
                backgroundColor: 'rgba(128,0,0,0.35)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Customers"
          value={customers}
        />

        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: 'blue',
                backgroundColor: 'rgba(0,0,225,0.35)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Revenue"
          value={revenue}
        />
      </Space>

      <Space style={{ marginTop: 20 }}>
        <RecentOrders />
        <DashboardChart />
      </Space>
    </Space>

  );
};

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text className='fs-5 '>Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Quantity',
            dataIndex: 'quantity',
          },
          {
            title: 'Price',
            dataIndex: 'discountedTotal',
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false} // If you don't want pagination
        rowKey="id" // Assuming 'id' is a unique key in your data
      />
    </>
  );
}

function DashboardChart() {

  const [revenueData, setRevenueData]= useState({
    labels:[],
    datasets:[]
  })

  useEffect(() => {
    getRevenue().then(res => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`
      })
      const data = res.carts.map((cart) => {
        return cart.discountedTotal
      })

      const dataSource = {
        labels,
        datasets: [
          {
            label: 'Revenue',
            data: data,
            backgroundColor: 'rgba(255,0,0,1)',
          }
        ],
      };

      setRevenueData(dataSource)

    }).catch(error => {
      console.error('Error fetching revenue data:', error);
    });
  }, [])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Order Revenue',
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={revenueData} />
    </Card>
  );
}

export default Dashboard;
