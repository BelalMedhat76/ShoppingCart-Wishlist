import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types/product';

interface Store {
  cart: Product[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
}

export const useStore = create(
  persist<Store>(
    (set) => ({
      cart: [],
      wishlist: [],

      addToCart: (product) =>
        set((state) => ({
          cart: [...state.cart, product],
        })),

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      addToWishlist: (product) =>
        set((state) => ({
          wishlist: [...state.wishlist, product],
        })),

      removeFromWishlist: (productId) =>
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== productId),
        })),
    }),
    {
      name: 'ecommerce-store', // Name of localStorage key
    }
  )
);


// export const useStore = create<Store>((set, get) => ({
//   cart: [],
//   wishlist: [],
//   addToCart: (product) =>
//     set((state) => ({
//       cart: [...state.cart, product],
//     })),
//   removeFromCart: (productId) =>
//     set((state) => ({
//       cart: state.cart.filter((item) => item.id !== productId),
//     })),
//   addToWishlist: (product) =>
//     set((state) => ({
//       wishlist: [...state.wishlist, product],
//     })),
//   removeFromWishlist: (productId) =>
//     set((state) => ({
//       wishlist: state.wishlist.filter((item) => item.id !== productId),
//     })),
//   getCartTotal: () => {
//     const { cart } = get();
//     return cart.reduce((total, item) => total + item.price, 0);
//   },
// }));