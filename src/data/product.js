// Single source of truth for products — used on Home, Shop, and the cart.
// Prices are in KES. Keep these in sync with SHOP_INFO in api/chat.js so the
// chatbot always quotes the same prices shown on the page.
export const products = [
  {
    id: 'oat-milk-throw',
    title: 'Oat Milk Throw',
    tag: 'Blanket',
    price: 4500,
    img: 'https://images.unsplash.com/photo-1780531851920-6bdffa7f9432?fm=jpg&q=70&w=800&fit=crop',
    accent: 'bg-mustard',
  },
  {
    id: 'marigold-cardigan',
    title: 'Marigold Cardigan',
    tag: 'Wearable',
    price: 6000,
    img: 'https://images.unsplash.com/photo-1782576417438-d8facd37fe2d?fm=jpg&q=70&w=800&fit=crop',
    accent: 'bg-clay',
  },
  {
    id: 'granny-square-tote',
    title: 'Granny Square Tote',
    tag: 'Accessory',
    price: 2200,
    img: 'https://images.unsplash.com/photo-1782576417399-9be4e62405eb?fm=jpg&q=70&w=800&fit=crop',
    accent: 'bg-sage',
  },
  {
    id: 'little-sprout',
    title: 'Little Sprout',
    tag: 'Amigurumi',
    price: 1500,
    img: 'https://images.unsplash.com/photo-1776992026037-98e0eff3a9a7?fm=jpg&q=70&w=800&fit=crop',
    accent: 'bg-rose',
  },
  {
    id: 'doily-runner',
    title: 'Doily Runner',
    tag: 'Home',
    price: 1800,
    img: 'https://images.unsplash.com/photo-1772445693242-c176fe7296b7?fm=jpg&q=70&w=800&fit=crop',
    accent: 'bg-mustard',
  },
  {
    id: 'clover-baby-set',
    title: 'Clover Baby Set',
    tag: 'Wearable',
    price: 3500,
    img: 'https://images.unsplash.com/photo-1782576417411-4d39ea018066?fm=jpg&q=70&w=800&fit=crop',
    accent: 'bg-sage',
  },
]

export function formatKES(amount) {
  return `KES ${amount.toLocaleString('en-KE')}`
}