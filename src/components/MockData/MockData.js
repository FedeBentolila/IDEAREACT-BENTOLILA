import imgaguja from  '../MockData/img/aguja-de-escleroterapia.jpg';
import imgansa from '../MockData/img/ansacaliente.jpg';
import imgclip from '../MockData/img/clip.jpg';


const productList = [

    {
      name: 'Inyector para endoscopía',
      price: 100,
      thumbnail: imgaguja,
      stock: 7,
      id: 1,
      brand: 'Cook',
      type: 'Descartable',
    },
    {
      name: 'Ansa para endoscopía',
      price: 200,
      thumbnail:imgansa,
      stock: 10,
      id: 2,
      brand: 'Microtech',
      type: 'Re Utilizable',
    },
    {
      name: 'Clip hemostático',
      price: 300,
      thumbnail: imgclip,
      stock: 6,
      id: 3,
      brand: 'Microtech',
      type: 'Descartable',
    },
  ];

  export default productList

  