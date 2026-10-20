import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SHOP_PRODUCTS } from '../data/shopData';
import { useApp } from '../context/AppContext';
import { 
  ShoppingBag, 
  Star, 
  ShieldCheck, 
  Plus, 
  Minus, 
  Check, 
  ChevronRight, 
  Truck, 
  RotateCcw, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, formatPrice, setIsCartOpen } = useApp();

  const product = SHOP_PRODUCTS.find(p => p.id === id) || SHOP_PRODUCTS[0];
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-charcoal-500 flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:text-maroon-800">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/shop" className="hover:text-maroon-800">Samagri Shop</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-charcoal-400">{product.category}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-maroon-900 truncate max-w-xs">{product.name}</span>
        </div>

        {/* Product Details Main Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-spiritual border border-gold-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Image Column */}
          <div className="md:col-span-6 space-y-3">
            <div className="relative rounded-2xl overflow-hidden border border-gold-200 bg-gold-50 h-80 sm:h-96">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-charcoal-800 shadow-sm border border-gold-200">
                  {product.category}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-charcoal-400 text-center">
              Origin: Consecrated & packed in {product.origin}
            </p>
          </div>

          {/* Details Column */}
          <div className="md:col-span-6 space-y-5">
            
            <div>
              <div className="flex items-center gap-1 text-xs text-saffron-600 mb-1 font-semibold">
                <Star className="w-4 h-4 fill-saffron-400 text-saffron-400" />
                <span>{product.rating}</span>
                <span className="text-charcoal-400">({product.reviewsCount} customer reviews)</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 leading-tight">
                {product.name}
              </h1>
              <span className="inline-block mt-2 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                ● In Stock for Dubai Doorstep Delivery
              </span>
            </div>

            {/* Price Row */}
            <div className="p-4 bg-ivory rounded-2xl border border-gold-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-charcoal-400 uppercase font-bold block">Indicative Price</span>
                <span className="font-serif text-3xl font-extrabold text-maroon-900">
                  {formatPrice(product.priceAED)}
                </span>
              </div>
              <span className="text-xs text-charcoal-500 font-medium">VAT Included</span>
            </div>

            <p className="text-xs text-charcoal-600 leading-relaxed">
              {product.description}
            </p>

            {/* Contents List */}
            {product.contents.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-charcoal-100">
                <h3 className="font-serif font-bold text-sm text-charcoal-900">
                  Box Contents & Specifications:
                </h3>
                <ul className="space-y-1.5 text-xs text-charcoal-700">
                  {product.contents.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity Stepper & Add to Cart */}
            <div className="pt-4 border-t border-charcoal-100 space-y-3">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-charcoal-800">Quantity:</span>
                <div className="flex items-center border border-gold-300 rounded-xl bg-ivory overflow-hidden">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="p-2 text-charcoal-600 hover:bg-gold-100"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-bold text-charcoal-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="p-2 text-charcoal-600 hover:bg-gold-100"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="py-3 px-4 rounded-xl bg-ivory hover:bg-gold-100 border border-gold-300 text-charcoal-900 text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-saffron-600" />
                  <span>Add to Basket</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-maroon-800 to-maroon-900 hover:from-maroon-900 hover:to-maroon-950 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Quick Checkout</span>
                  <ArrowRight className="w-4 h-4 text-gold-300" />
                </button>
              </div>
            </div>

            {/* Delivery notes */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] text-charcoal-600">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-ivory border border-gold-100">
                <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Express 24h UAE Doorstep Delivery</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-ivory border border-gold-100">
                <ShieldCheck className="w-4 h-4 text-maroon-700 shrink-0" />
                <span>100% Consecrated Temple Grade Quality</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
