//  export const getOrders =  () => {
//     return fetch('https://dummyjson.com/carts/1')
//         .then((res) => res.json())

// }

// export const getRevenue =()=>{
//       return fetch('https://dummyjson.com/carts')
//       .then((res) => res.json())
     
// }


// ../../API.js

export const getOrders = async () => {
    try {
      const response = await fetch('https://dummyjson.com/carts/1');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  };
  
  export const getRevenue = async () => {
    try {
      const response = await fetch('https://dummyjson.com/carts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching revenue:', error);
      throw error;
    }
  };
  
  export const getInventory = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching revenue:', error);
      throw error;
    }
  };


  export const getCustomers = async () => {
    try {
      const response = await fetch('http://dummyjson.com/users');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching revenue:', error);
      throw error;
    }
  };

  export const getComments = async () => {
    try {
      const response = await fetch('https://dummyjson.com/comments');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching revenue:', error);
      throw error;
    }
  };
  






