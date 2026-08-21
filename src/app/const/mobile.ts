import { IMobile } from "../model/mobile.interface";

export let mobileProducts: Array<IMobile> = [
  {
    id: 1,
    name: 'iPhone 13',
    brand: 'Apple',
    price: 59999,
    image: 'https://m.media-amazon.com/images/I/71GLMJ7TQiL.jpg',
    isAvailable: true,
    rating: 4.9,
    noOfItems: 50,
    features: ['A15 Bionic chip', 'Super Retina XDR display', 'Dual-camera system', '5G connectivity', 'MagSafe charging']
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    brand: 'Samsung',
    price: 49999,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyF8ebQLyURqtb4ANrz813miy22hlXDiNsV-2zoj8hyPzdyHz0Gf9gYwAI&s=10',
    isAvailable: true,
    rating: 4.5,
    noOfItems: 20,
    features: ['Exynos 2100 processor', '120Hz AMOLED display', 'Triple-camera setup', '8K video recording', 'Wireless PowerShare']
  },
  {
    id: 3,
    name: 'Google Pixel 6',
    brand: 'Google',
    price: 44999,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yTu8cdOnd1zw9C6sOza9QnH7FnHiRLcFxKNqCVTCMvs90htKYczBap0&s=10',
    isAvailable: false,
    rating: 3.6,
    noOfItems: 16,
    features: ['Google Tensor chip', '90Hz OLED display', '50MP main camera', 'Magic Eraser', 'Android 12']
  },
  {
    id: 4,
    name: 'OnePlus 9 Pro',
    brand: 'OnePlus',
    price: 52999,
    image: '',
    isAvailable: true,
    rating: 4.7,
    noOfItems: 5,
    features: ['Snapdragon 888', '120Hz Fluid AMOLED', 'Hasselblad camera', 'Warp Charge 65T', '5G connectivity']
  },
  {
    id: 5,
    name: 'Xiaomi 12 Pro',
    brand: 'Xiaomi',
    price: 42999,
    image: 'https://m.media-amazon.com/images/I/71xMba-NW-L.jpg',
    isAvailable: true,
    rating: 3.4,
    noOfItems: 30,
    features: ['Snapdragon 8 Gen 1', '120Hz AMOLED display', '50MP triple camera', '120W HyperCharge', 'Dolby Vision']
  },
  {
    id: 6,
    name: 'iPhone 14',
    brand: 'Apple',
    price: 69999,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT16lB0y-quFoqd83otyUKjCGh2mOUeQhe7MHXHp5ehGFvRJxCNsznEi8g&s=10',
    isAvailable: false,
    rating: 4.8,
    noOfItems: 4,
    features: ['A15 Bionic chip', 'Super Retina XDR', '12MP dual camera', 'Crash Detection', '5G connectivity']
  },
  {
    id: 7,
    name: 'Samsung Galaxy S22',
    brand: 'Samsung',
    price: 54999,
    image: 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23262015/ajohnson_220216_5033_0005.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100',
    isAvailable: true,
    rating: 4.6,
    noOfItems: 18,
    features: ['Snapdragon 8 Gen 1', '120Hz Dynamic AMOLED', '50MP camera', 'IP68 water resistance', 'Wireless charging']
  },
  {
    id: 8,
    name: 'Google Pixel 7',
    brand: 'Google',
    price: 49999,
    image: '',
    isAvailable: false,
    rating: 4.7,
    noOfItems: 22,
    features: ['Google Tensor G2', '90Hz OLED display', '50MP camera', 'Magic Eraser', 'Titan M2 security']
  },
  {
    id: 9,
    name: 'OnePlus 10 Pro',
    brand: 'OnePlus',
    price: 58999,
    image: 'https://oasis.opstatics.com/content/dam/oasis/page/2022/operation/mar/0317/EU-IN_Green.png',
    isAvailable: true,
    rating: 2.5,
    noOfItems: 5,
    features: ['Snapdragon 8 Gen 1', '120Hz AMOLED', 'Hasselblad camera', '80W SuperVOOC', '5000mAh battery']
  },
  {
    id: 10,
    name: 'Nothing Phone 1',
    brand: 'Nothing',
    price: 32999,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfZTEqBPsKQ54jj9ykJXJtAy2NxfIZCDv1nwdfhDAa-bjcLdqrb8V2GA&s=10',
    isAvailable: false,
    rating: 3.3,
    noOfItems: 35,
    features: ['Snapdragon 778G+', '120Hz OLED', 'Glyph Interface', '50MP dual camera', 'Wireless charging']
  },
  {
    id: 11,
    name: 'Realme GT 2 Pro',
    brand: 'Realme',
    price: 39999,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJho0QtrKUv-FnVACBAKVwTV99lJZiD3NgAvVaGf4C56SHvnPffyHWhIo&s=10',
    isAvailable: true,
    rating: 2.4,
    noOfItems: 8,
    features: ['Snapdragon 8 Gen 1', '2K AMOLED display', '50MP camera', '65W SuperDart charging', '5G connectivity']
  },
  {
    id: 12,
    name: 'Vivo X80',
    brand: 'Vivo',
    price: 47999,
    image: '',
    isAvailable: true,
    rating: 3.5,
    noOfItems: 19,
    features: ['MediaTek Dimensity 9000', '120Hz AMOLED', 'ZEISS optics', '80W FlashCharge', '50MP camera']
  },
  {
    id: 13,
    name: 'Oppo Find X5 Pro',
    brand: 'Oppo',
    price: 59999,
    image: 'https://www.dxomark.com/wp-content/uploads/medias/post-119684/Oppo-Find-X5-Pro-featured-image-packshot-review-Recovered-1.jpg',
    isAvailable: false,
    rating: 4.4,
    noOfItems: 0,
    features: ['Snapdragon 8 Gen 1', '120Hz AMOLED', 'Hasselblad camera', '80W SuperVOOC', 'IP68 protection']
  },
  {
    id: 14,
    name: 'Motorola Edge 30 Pro',
    brand: 'Motorola',
    price: 44999,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjviRRa6_rBKkVp_xPkmGwt5fCzmOlHUqPNYaxsrtkCqqHJ2FiAQr-Itw&s=10',
    isAvailable: true,
    rating: 4.2,
    noOfItems: 24,
    features: ['Snapdragon 8 Gen 1', '144Hz OLED display', '50MP camera', '68W TurboPower', '5G connectivity']
  },
  {
    id: 15,
    name: 'Sony Xperia 1 IV',
    brand: 'Sony',
    price: 89999,
    image: '',
    isAvailable: true,
    rating: 2.6,
    noOfItems: 10,
    features: ['Snapdragon 8 Gen 1', '4K OLED display', 'Professional camera', '5000mAh battery', 'IP65/IP68']
  }
];