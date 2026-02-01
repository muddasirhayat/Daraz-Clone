import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productData = [
    {
        category: 'Electronics',
        items: [
            { name: 'Redmi Note 12 - 6.67" AMOLED Display - 5000mAh Battery', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80' },
            { name: 'Original T500 Smart Watch Full Touch Bluetooth Call', img: 'https://images.unsplash.com/photo-1544117518-33303b7cc00f?auto=format&fit=crop&w=600&q=80' },
            { name: 'M10 TWS Earbuds Bluetooth Wireless Earphones 5.1', img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80' },
            { name: 'Sony PlayStation 5 DualSense Wireless Controller', img: 'https://images.unsplash.com/photo-1605906302484-fe2ba9a0021b?auto=format&fit=crop&w=600&q=80' },
            { name: 'Wireless Bluetooth Headband Headphones for Sleeping', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' }
        ]
    },
    {
        category: 'Fashion',
        items: [
            { name: 'Men\'s Casual Cotton T-Shirt - Pack of 3 (Black, Grey, Blue)', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80' },
            { name: 'Unisex Polarized Sunglasses - Classic Wayfarer Style', img: 'https://images.unsplash.com/photo-1511499767350-a1590fdb2863?auto=format&fit=crop&w=600&q=80' },
            { name: 'Women\'s Stylish Shoulder Bag - Premium Synthetic Leather', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80' },
            { name: 'Simple Black Leather Belt for Men - High Quality Steel Buckle', img: 'https://images.unsplash.com/photo-1624222247344-550fbadcd973?auto=format&fit=crop&w=600&q=80' },
            { name: 'Men\'s Running Shoes - Lightweight Breathable Mesh Sneakers', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' }
        ]
    },
    {
        category: 'Home & Lifestyle',
        items: [
            { name: 'Multi-functional Foldable Laptop Table for Bed', img: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=600&q=80' },
            { name: 'Vacuum Insulated Stainless Steel Water Bottle - 500ml', img: 'https://images.unsplash.com/photo-1602143399827-7218ca93325b?auto=format&fit=crop&w=600&q=80' },
            { name: 'Automatic Electric Water Dispenser Pump', img: 'https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?auto=format&fit=crop&w=600&q=80' },
            { name: 'Luxury Cotton Bedspread Set - King Size with Pillowcases', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80' },
            { name: 'Portable Mini Sewing Machine with Foot Pedal', img: 'https://images.unsplash.com/photo-1525439460145-2007e6005d64?auto=format&fit=crop&w=600&q=80' }
        ]
    },
    {
        category: 'Health & Beauty',
        items: [
            { name: 'Garnier SkinActive Micellar Cleansing Water - 400ml', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80' },
            { name: 'Professional Cordless Hair Trimmer for Men', img: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=600&q=80' },
            { name: 'Authentic Jade Roller & Gua Sha Set for Facial Massage', img: 'https://images.unsplash.com/photo-1601049676093-d421250269f8?auto=format&fit=crop&w=600&q=80' },
            { name: 'Water-resistant Liquid Matte Lipstick - Long Lasting', img: 'https://images.unsplash.com/photo-1586776104033-0308d986b240?auto=format&fit=crop&w=600&q=80' },
            { name: 'Electric Toothbrush with 5 Cleaning Modes', img: 'https://images.unsplash.com/photo-1559599189-fe84dea4eb49?auto=format&fit=crop&w=600&q=80' }
        ]
    },
    {
        category: 'Babies & Toys',
        items: [
            { name: 'Interactive Wooden Educational Toys for Toddlers', img: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=600&q=80' },
            { name: 'Baby Cotton Romper Suit - Soft and Breathable', img: 'https://images.unsplash.com/photo-1522771917714-d9bc26b91cbb?auto=format&fit=crop&w=600&q=80' },
            { name: 'RC Remote Control Stunt Car with LED Lights', img: 'https://images.unsplash.com/photo-1594787317351-2bc27c65c69d?auto=format&fit=crop&w=600&q=80' },
            { name: 'Diaper Bag Backpack with Changing Station', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80' },
            { name: 'Baby Safety Lock Set for Cabinets and Drawers (Pack of 10)', img: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?auto=format&fit=crop&w=600&q=80' }
        ]
    }
];

const products = [];

for (let i = 1; i <= 100; i++) {
    const catGroup = faker.helpers.arrayElement(productData);
    const itemInfo = faker.helpers.arrayElement(catGroup.items);

    const price = parseFloat(faker.commerce.price({ min: 250, max: 85000 }));
    const discount = faker.number.int({ min: 5, max: 70 });
    const originalPrice = Math.round(price / (1 - discount / 100));

    const reviews = [];
    const numReviews = faker.number.int({ min: 5, max: 25 });
    for (let j = 0; j < numReviews; j++) {
        reviews.push({
            id: faker.string.uuid(),
            user: faker.person.fullName(),
            rating: faker.number.int({ min: 3, max: 5 }),
            comment: faker.lorem.sentences(1),
            date: faker.date.recent().toISOString()
        });
    }

    products.push({
        id: i,
        title: `${itemInfo.name} - Premium Edition`,
        description: faker.commerce.productDescription(),
        category: catGroup.category,
        price: price,
        originalPrice: originalPrice,
        discount: discount,
        rating: parseFloat((Math.random() * (5 - 4.2) + 4.2).toFixed(1)),
        stockLevel: faker.number.int({ min: 5, max: 500 }),
        imageUrls: [
            itemInfo.img,
            `${itemInfo.img}&sig=1`,
            `${itemInfo.img}&sig=2`
        ],
        reviews: reviews
    });
}

const targetFile = "c:/Users/MH/Desktop/SMIT Assignment/Daraz-Clone/src/data/products.json";
const dataDir = path.dirname(targetFile);

if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(
    targetFile,
    JSON.stringify(products, null, 2)
);

console.log('Successfully generated 100 realistic products!');
