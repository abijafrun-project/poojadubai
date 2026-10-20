import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    updateQuantity, 
    removeFromCart, 
    formatPrice, 
    cartTotalAED,
    clearCart,
    showToast
  } = useApp();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckoutDemo = () => {
    setIsCartOpen(false);
    navigate('/cart');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-charcoal-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-ivory border-l border-gold-300 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 bg-maroon-900 text-ivory flex items-center justify-between border-b border-gold-500/40">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-saffron-500/20 border border-gold-500/30 flex items-center justify-center text-saffron-400">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white">Puja Samagri Cart</h3>
                <p className="text-xs text-gold-300">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'} in your basket
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-ivory/70 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h4 className="font-serif font-semibold text-xl text-charcoal-800">Your Basket is Empty</h4>
                <p className="text-sm text-charcoal-500 max-w-xs">
                  Discover authentic puja thalis, pure cow ghee wicks, havan samagri, and complete ritual kits.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/shop');
                  }}
                  className="px-6 py-2.5 bg-maroon-800 hover:bg-maroon-900 text-white rounded-xl font-medium text-sm transition-all shadow-md hover:shadow-spiritual flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  Explore Samagri Shop
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-charcoal-500 pb-2 border-b border-charcoal-200">
                  <span>Selected Ritual Samagri</span>
                  <button 
                    onClick={clearCart}
                    className="text-maroon-700 hover:underline hover:text-maroon-900"
                  >
                    Clear All
                  </button>
                </div>

                {cart.map(item => (
                  <div 
                    key={item.product.id}
                    className="p-3 bg-white rounded-xl border border-gold-200/80 shadow-sm flex gap-3 items-center"
                  >
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-16 h-16 object-cover rounded-lg border border-gold-100 shrink-0" 
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-semibold text-charcoal-800 line-clamp-2 leading-tight">
                        {item.product.name}
                      </h5>
                      <span className="text-[11px] text-saffron-700 font-medium block mt-0.5">
                        {item.product.category}
                      </span>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs font-bold text-maroon-900">
                          {formatPrice(item.product.priceAED * item.quantity)}
                        </span>

                        {/* Quantity Controls */}
                        <div className="flex items-center border border-charcoal-200 rounded-lg bg-ivory overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 text-charcoal-600 hover:bg-charcoal-100 hover:text-maroon-800"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-charcoal-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-charcoal-600 hover:bg-charcoal-100 hover:text-maroon-800"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-charcoal-400 hover:text-red-600 p-1.5 transition-colors self-start"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Free Delivery Banner */}
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-xs text-emerald-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Complimentary express doorstep delivery across Dubai & UAE for orders above 150 AED.</span>
                </div>
              </>
            )}
          </div>

          {/* Footer / Summary */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-gold-200 space-y-3">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-charcoal-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-charcoal-900">{formatPrice(cartTotalAED)}</span>
                </div>
                <div className="flex justify-between text-charcoal-600">
                  <span>Dubai Local Delivery</span>
                  <span className="text-emerald-700 font-medium">FREE</span>
                </div>
                <div className="flex justify-between text-base font-bold text-maroon-900 pt-2 border-t border-charcoal-100">
                  <span>Estimated Total</span>
                  <span>{formatPrice(cartTotalAED)}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="px-4 py-2.5 text-center text-xs font-semibold text-charcoal-800 bg-ivory hover:bg-gold-100 border border-gold-300 rounded-xl transition-all"
                >
                  View Full Cart
                </Link>
                <button
                  onClick={handleCheckoutDemo}
                  className="px-4 py-2.5 text-center text-xs font-semibold text-white bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-900 hover:to-maroon-950 rounded-xl transition-all shadow-md hover:shadow-spiritual flex items-center justify-center gap-1.5"
                >
                  <span>Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[11px] text-center text-charcoal-500">
                🔒 Demo Checkout Simulator (No actual card charge)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
