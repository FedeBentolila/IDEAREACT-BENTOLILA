import imgaguja from  '../MockData/img/aguja-de-escleroterapia.jpg';
import imgansa from '../MockData/img/ansacaliente.jpg';
import imgclip from '../MockData/img/clip.jpg';
import imggastroscopio from '../MockData/img/gastroscopio.jpg';
import imgcolonoscopio from '../MockData/img/colonoscopio.jpg';


const productList = [

    {
      name: 'Inyector para endoscopía',
      price: 100,
      thumbnail: imgaguja,
      stock: 7,
      id: 1,
      brand: 'Cook',
      type: 'Descartable',
      category: 'insumos',
    },
    {
      name: 'Ansa para endoscopía',
      price: 200,
      thumbnail:imgansa,
      stock: 10,
      id: 2,
      brand: 'Microtech',
      type: 'Re Utilizable',
      category: 'insumos',
    },
    {
      name: 'Clip hemostático',
      price: 300,
      thumbnail: imgclip,
      stock: 6,
      id: 3,
      brand: 'Microtech',
      type: 'Descartable',
      category: 'insumos',
    },

    {
      name: 'Gastroscopio',
      price: 5000,
      thumbnail: imggastroscopio,
      stock: 3,
      id: 4,
      brand: 'Pentax',
      type: 'GIF 3550',
      category: 'endoscopios',
    },

    {
      name: 'Colonoscopio',
      price: 10000,
      thumbnail: imgcolonoscopio,
      stock: 3,
      id: 5,
      brand: 'Pentax',
      type: 'GIF 3650',
      category: 'endoscopios',
    },

  ];

  export default productList

  