// import React from 'react';
// import { motion } from 'framer-motion';
// import { Heart, ShoppingCart } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import type { Product } from '../types/product';
// import { useStore } from '../store/useStore';
// import { toast } from 'react-hot-toast';

// interface ProductCardProps {
//   product: Product;
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   const { addToCart, addToWishlist, wishlist } = useStore();
//   const navigate = useNavigate();
//   const isInWishlist = wishlist.some((item) => item.id === product.id);

//   const handleAddToCart = () => {
//     addToCart(product);
//     toast.success('Added to cart!');
//     navigate('/cart');
//   };

//   const handleAddToWishlist = () => {
//     addToWishlist(product);
//     toast.success('Added to wishlist!');
//     navigate('/wishlist');
//   };

//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       className="bg-white rounded-lg shadow-md overflow-hidden h-full"
//     >
//       <div className="relative h-64">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover"
//         />
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={handleAddToWishlist}
//           className={`absolute top-2 right-2 p-2 bg-white rounded-full shadow-md ${
//             isInWishlist ? 'text-red-500' : 'text-gray-600'
//           }`}
//         >
//           <Heart className="w-5 h-5" fill={isInWishlist ? 'currentColor' : 'none'} />
//         </motion.button>
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
//         <p className="mt-1 text-gray-500">{product.description}</p>
//         <div className="mt-4 flex items-center justify-between">
//           <span className="text-xl font-bold text-indigo-600">
//             ${product.price}
//           </span>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleAddToCart}
//             className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//           >
//             <ShoppingCart className="w-5 h-5" />
//             <span>Add to Cart</span>
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );



import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../types/product';
import { useStore } from '../store/useStore';
import { toast } from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToWishlist, wishlist } = useStore();
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  // Handle adding a product to the cart
  const handleAddToCart = () => {
    addToCart(product);
    console.log('Cart after adding:', useStore.getState().cart); // Debugging
    toast.success(`${product.name} added to cart!`);
  };
  

  // Handle adding a product to the wishlist
  const handleAddToWishlist = () => {
    if (isInWishlist) {
      toast.error(`${product.name} is already in the wishlist!`);
      return;
    }
    addToWishlist(product);
    toast.success(`${product.name} added to wishlist!`);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden h-full"
    >
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleAddToWishlist}
          className={`absolute top-2 right-2 p-2 bg-white rounded-full shadow-md ${
            isInWishlist ? 'text-red-500' : 'text-gray-600'
          }`}
        >
          <Heart className="w-5 h-5" fill={isInWishlist ? 'currentColor' : 'none'} />
        </motion.button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-gray-500">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">${product.price}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
