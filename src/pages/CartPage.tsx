import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ShieldCheck, 
  Tag, 
  Truck,
  Sparkles,
  ChevronLeft
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const { 
    cart, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    cartTotalAED, 
    formatPrice,
    showToast,
    city
  } = useApp();

  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isCheckoutCompleted, setIsCheckoutCompleted] = useState(false);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'DIVYA10') {
      setDiscountPercent(10);
      showToast('Auspicious 10% coupon DIVYA10 applied!', 'success');
    } else {
      showToast('Invalid demo coupon. Try "DIVYA10" for 10% off.', 'error');
    }
  };

  const discountAED = (cartTotalAED * discountPercent) / 100;
  const shippingAED = cartTotalAED > 150 || cart.length === 0 ? 0 : 25;
  const grandTotalAED = cartTotalAED - discountAED + shippingAED;

  const handleDemoPlaceOrder = () => {
    setIsCheckoutCompleted(true);
    clearCart();
    showToast('Demo order registered successfully! No payment was processed.', 'success');
  };

  if (isCheckoutCompleted) {
    return (
      <div className="min-h-screen bg-ivory py-16 px-4">
        <div className="max-w-md mx-auto bg-white rounded-3xl p-8 shadow-spiritual text-center space-y-4 border border-gold-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="font-serif font-bold text-2xl text-charcoal-900">
            Order Confirmed (Demo)
          </h2>
          <p className="text-xs text-charcoal-600 leading-relaxed">
            Thank you! Your demo Samagri order has been recorded for delivery in {city}, UAE. 
            No money has been debited.
          </p>
          <div className="pt-4 flex flex-col gap-2">
            <Link
              to="/shop"
              className="py-3 bg-maroon-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-maroon-900"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="py-3 bg-ivory text-charcoal-800 border border-gold-300 rounded-xl text-xs font-bold hover:bg-gold-100"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gold-200 pb-4">
          <div>
            <h1 className="font-serif text-3xl font-bold text-charcoal-900">
              Shopping Basket
            </h1>
            <p className="text-xs text-charcoal-500">
              {cart.length} {cart.length === 1 ? 'item' : 'items'} in your ritual samagri cart
            </p>
          </div>

          <Link
            to="/shop"
            className="text-xs font-bold text-maroon-800 hover:underline flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gold-200 space-y-4">
            <div className="w-20 h-20 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center mx-auto">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-charcoal-900">
              Your Basket is Currently Empty
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-500 max-w-sm mx-auto">
              Explore our pure brass thalis, sacred organic havan herbs, and complete ceremony kits with express doorstep delivery in Dubai.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-maroon-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-maroon-900"
            >
              <Sparkles className="w-4 h-4 text-gold-300" />
              <span>Explore Samagri Store</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Items Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white rounded-3xl p-6 border border-gold-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-charcoal-100 text-xs text-charcoal-500">
                  <span>Selected Products</span>
                  <button onClick={clearCart} className="text-maroon-800 font-bold hover:underline">
                    Clear Basket
                  </button>
                </div>

                <div className="divide-y divide-charcoal-100 space-y-3">
                  {cart.map(item => (
                    <div key={item.product.id} className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      
                      <div className="flex items-center gap-4">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-16 rounded-xl object-cover shrink-0 border border-gold-200"
                        />
                        <div>
                          <span className="text-[10px] font-bold uppercase text-saffron-700">
                            {item.product.category}
                          </span>
                          <h3 className="font-serif font-bold text-sm text-charcoal-900">
                            <Link to={`/shop/${item.product.id}`}>{item.product.name}</Link>
                          </h3>
                          <span className="text-xs font-extrabold text-maroon-900 mt-1 block">
                            {formatPrice(item.product.priceAED)} each
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-charcoal-200 rounded-xl bg-ivory overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1.5 text-charcoal-600 hover:bg-gold-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-bold text-charcoal-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1.5 text-charcoal-600 hover:bg-gold-100"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="font-serif font-bold text-sm text-charcoal-900 min-w-[70px] text-right">
                          {formatPrice(item.product.priceAED * item.quantity)}
                        </span>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-charcoal-400 hover:text-red-600 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery notice */}
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-xs text-emerald-900">
                <Truck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  Orders over 150 AED qualify for free doorstep courier delivery anywhere in Dubai and Sharjah.
                </span>
              </div>
            </div>

            {/* Summary Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white rounded-3xl p-6 border-2 border-gold-300 shadow-spiritual space-y-5">
                <h3 className="font-serif font-bold text-lg text-charcoal-900 pb-3 border-b border-charcoal-100">
                  Order Summary
                </h3>

                {/* Coupon Input */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Coupon: DIVYA10"
                      className="w-full pl-8 pr-3 py-2 rounded-xl bg-ivory border border-gold-300 text-xs text-charcoal-900 uppercase font-semibold focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-charcoal-800 hover:bg-charcoal-900 text-white rounded-xl text-xs font-bold transition-colors"
                  >
                    Apply
                  </button>
                </form>

                {/* Breakdown */}
                <div className="space-y-2 text-xs text-charcoal-600 border-t border-charcoal-100 pt-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-charcoal-900">{formatPrice(cartTotalAED)}</span>
                  </div>

                  {discountPercent > 0 && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Vedic Coupon (10% Off)</span>
                      <span>-{formatPrice(discountAED)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Dubai Delivery Fee</span>
                    <span>{shippingAED === 0 ? <strong className="text-emerald-700">FREE</strong> : formatPrice(shippingAED)}</span>
                  </div>

                  <div className="flex justify-between text-base font-bold text-maroon-900 pt-3 border-t border-charcoal-100">
                    <span>Estimated Total</span>
                    <span className="font-serif text-xl">{formatPrice(grandTotalAED)}</span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={handleDemoPlaceOrder}
                  className="w-full py-3.5 bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-900 hover:to-maroon-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-gold-300" />
                  <span>Place Demo Order</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-charcoal-400 text-center">
                  🔒 Demo simulation mode. No bank card or cash is collected.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
