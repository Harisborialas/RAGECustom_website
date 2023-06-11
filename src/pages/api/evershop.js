// // api/evershop.js
// import axios from 'axios';

// export default async function handler(req, res) {
//   try {
//     const response = await axios.get('https://api.evershop.com/products');

//     const data = response.data;
//     res.status(200).json(data);
//   } catch (error) {
//     // console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching data from the Evershop API' });
//   }
// }
