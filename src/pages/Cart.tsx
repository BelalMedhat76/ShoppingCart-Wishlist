// import React from 'react';
// import { motion } from 'framer-motion';
// import { ShoppingCart, Trash2, X } from 'lucide-react';
// import { useStore } from '../store/useStore';

// export default function Cart() {
//   const { cart, removeFromCart } = useStore();

//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   if (cart.length === 0) {
//     return (
//       <div className="space-y-8">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex items-center space-x-4"
//         >
//           <ShoppingCart className="w-8 h-8 text-indigo-600" />
//           <h2 className="text-3xl font-bold text-gray-900">Your Cart</h2>
//         </motion.div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="text-center py-12">
//             <Trash2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//             <p className="text-gray-500">Your cart is empty</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-8">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex items-center space-x-4"
//       >
//         <ShoppingCart className="w-8 h-8 text-indigo-600" />
//         <h2 className="text-3xl font-bold text-gray-900">Your Cart</h2>
//       </motion.div>

//       <div className="bg-white rounded-lg shadow-md">
//         {cart.map((item) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="flex items-center p-6 border-b border-gray-200 last:border-0"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-24 h-24 object-cover rounded-md"
//             />
//             <div className="ml-6 flex-1">
//               <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
//               <p className="text-gray-500">{item.description}</p>
//               <span className="text-indigo-600 font-bold">${item.price}</span>
//             </div>
//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="p-2 text-gray-400 hover:text-red-500"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </motion.div>
//         ))}
//         <div className="p-6 bg-gray-50">
//           <div className="flex justify-between items-center">
//             <span className="text-lg font-semibold text-gray-900">Total:</span>
//             <span className="text-2xl font-bold text-indigo-600">${total.toFixed(2)}</span>
//           </div>
//           <button className="mt-4 w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

export default function CartPage() {
  const { cart, removeFromCart } = useStore();

  // Calculate the total price of items in the cart
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <motion.div
              key={product.id}
              className="flex items-center justify-between p-4 border-b"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-500">${product.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </motion.div>
          ))}
          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Total:</h2>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
