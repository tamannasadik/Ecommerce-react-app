import  {http} from '../../common/http';
export const getProducts = async()=>{
  const response =await http.get('/api/products');
      return response.data;
};
//      const products= [
//         {
//           id: 15,
//           name: 'Party Wear Gown',
//         price: 1430,
//          image: '/assets/dress2.PNG',
//           categories: ['Women'],
//         },
//         {
//               id: 1,
//              name: 'Formal Shirt',
//               price: 1500,
//               image: '/assets/shirt-1.PNG',
//               categories: ['Men'],
//             },
      
//             {
//               id: 29,
//               name: 'Sneakers',
//             price: 2000,
//              image: '/assets/shoes1.PNG',
//               categories: ['Shoe'],
//             },
//              {
//                 id: 4,
//                 name: 'Casual Shirt',
//                 price: 1300,
//                 image: '/assets/shirt-3.PNG',
//                 categories: ['Men'],
//               },
      
//               {
//                 id: 5,
//                 name: 'Party Wear Saree',
//                 price: 4500,
//                 image: '/assets/saree1.PNG',
//                 categories: ['Women'],
//               },
      
//               {
//                 id: 8,
//                 name: 'panjabi',
//                 price: 1500,
//                 image: '/assets/panjabi1.PNG',
//                 categories: ['Men'],
//               },
      
//               {
//                 id: 9,
//                 name: 'Apple Watch',
//               price: 6000,
//                image: '/assets/appleWatch.PNG',
//                 categories: ['Electronics'],
//               },
//               {
//                 id: 10,
//                 name: 'BookShelf',
//               price: 1400,
//                image: '/assets/bookshelf.PNG',
//                 categories: ['Home Decor'],
//               },
//               {
//                 id: 11,
//                 name: 'Borqua',
//               price: 1500,
//                image: '/assets/borqua1.PNG',
//                 categories: ['Women'],
//               },
//               {
//                 id: 3,
//                 name: 'Casual Shirt',
//                 price: 1000,
//                 image: '/assets/shirt-3.PNG',
//                 categories: ['Men'],
//               },
//               {
//                 id: 7,
//                 name: 'Party Wear Saree',
//                 price: 3500,
//                 image: '/assets/saree3.PNG',
//                 categories: ['Women'],
//               },
//               {
//                 id: 19,
//                 name: 'Shirt & Pant',
//               price: 1350,
//                image: '/assets/kid3.PNG',
//                 categories: ['Kids'],
//               },
//               {
//                 id: 12,
//                 name: 'Abaya',
//               price: 1900,
//                image: '/assets/borqua2.PNG',
//                 categories: ['Women'],
//               },
//               {
//                 id: 13,
//                 name: 'CeraVe Moisturizer',
//               price: 2200,
//                image: '/assets/CeraVe.PNG',
//                 categories: ['Skin Care'],
//               },
//               {
//                 id: 14,
//                 name: 'Gown',
//               price: 1500,
//                image: '/assets/dress1.PNG',
//                 categories: ['Women'],
//               },
//               {
//                 id: 19,
//                 name: 'Party Frock',
//               price: 1350,
//                image: '/assets/kid2.PNG',
//                 categories: ['Kids'],
//               },    
//               {
//                 id: 17,
//                 name: 'Gown',
//               price: 1500,
//                image: '/assets/dress4.PNG',
//                 categories: ['Women'],
//               },
    
//               {
//                 id: 24,
//                 name: 'dell laptop',
//               price: 85000,
//                image: '/assets/laptop1.PNG',
//                 categories: ['Electronics'],
//               },
              
//               {
//                 id: 23,
//                 name: 'Panjabi for kid',
//               price: 1000,
//                image: '/assets/kid6.PNG',
//                 categories: ['Kids'],
//               },
              
//               {
//                 id: 25,
//                 name: 'macFoundation',
//               price: 3500,
//                image: '/assets/macFoundation.PNG',
//                 categories: ['Make Up'],
//               },
//               {
//                 id: 6,
//                 name: 'Party Wear Saree',
//                 price: 5000,
//                 image: '/assets/saree2.PNG',
//                 categories: ['Women'],
//               },
//               {
//                 id: 20,
//                 name: 'Shirt-Pant',
//               price: 1400,
//                image: '/assets/kid3.PNG',
//                 categories: ['Kids'],
//               },
//               {
//                 id: 26,
//                 name: 'LipStick set',
//               price: 650,
//                image: '/assets/handaiyan.PNG',
//                 categories: ['Make Up'],
//               },
//               {
//                 id: 16,
//                 name: 'Kurti',
//               price: 1050,
//                image: '/assets/dress3.PNG',
//                 categories: ['Women'],
//               },
//               {
//                 id: 27,
//                 name: 'Maskara',
//               price: 600,
//                image: '/assets/maskara.PNG',
//                 categories: ['Make Up'],
//               },
//               {
//                 id: 28,
//                 name: 'Ordinary Sirum',
//               price: 2000,
//                image: '/assets/ordinary.PNG',
//                 categories: ['Skin Care'],
//               },
     
//               {
//                 id: 21,
//                 name: 'Shirts',
//               price: 1550,
//                image: '/assets/kid4.PNG',
//                 categories: ['Kids'],
//               },
//               {
//                 id: 31,
//                 name: 'Shoes',
//               price: 1500,
//                image: '/assets/shoes3.PNG',
//                 categories: ['Shoe'],
//               },
//               {
//                 id: 32,
//                 name: 'Snail96',
//               price: 1800,
//                image: '/assets/snail96.PNG',
//                 categories: ['Skin Care'],
//               },
//               {
//                 id: 33,
//                 name: 'Samsung Tv',
//               price: 40000,
//                image: '/assets/tv1.PNG',
//                 categories: ['Electronics'],
//               },
//               {
//                 id: 34,
//                 name: 'SWall Hanging',
//               price: 350,
//                image: '/assets/wallHanging.PNG',
//                 categories: ['Home Decor'],
//               },
              
//               {
//                 id: 22,
//                 name: 'Ramper',
//               price: 1500,
//                image: '/assets/kid5.PNG',
//                 categories: ['Kids'],
//               },
//               {
//                 id: 30,
//                 name: 'Party Shoes',
//               price: 1200,
//                image: '/assets/shoes2.PNG',
//                 categories: ['Shoe'],
//               },
//               {
//                 id: 2,
//             name: 'Casual Shirt',
//             price: 1200,
//             image: '/assets/shirt-2.PNG',
//             categories: ['Men'],
//               },
        
//               {
//                 id: 35,
//                 name: 'WoodenCave',
//               price: 400,
//                image: '/assets/woodenCave.PNG',
//                 categories: ['Home Decor'],
//               },
//               {
//                 id: 18,
//                 name: 'Dress for kids',
//               price: 900,
//                image: '/assets/kid1.PNG',
//                 categories: ['Kids'],
//               },
//       ];
//        return {products};
// }