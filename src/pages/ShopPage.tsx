import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SHOP_PRODUCTS, SHOP_CATEGORIES } from '../data/shopData';
import { useApp } from '../context/AppContext';
import { Product } from '../types';
import { 
  ShoppingBag, 
  Search, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  ArrowRight,
  Filter
} from 'lucide-react';

export const ShopPage: React.FC = () => {
  const { addToCart, formatPrice, city } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All Items');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const filteredProducts = useMemo(() => {
    return SHOP_PRODUCTS.filter(product => {
      if (selectedCategory !== 'All Items' && product.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesCategory = product.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCategory) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceAED - b.priceAED;
      if (sortBy === 'price-desc') return b.priceAED - a.priceAED;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Pure Vedic Samagri Store</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900">
            Sacred Puja Samagri & Essentials
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            100% organic, triple-cleaned sacred herbs, handcrafted brass thalis, pure cow ghee battis, and complete festival kits delivered across {city} & UAE.
          </p>
        </div>

        {/* Demo Disclaimer */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Sample Ecommerce Demo:</strong> Product inventory and AED pricing are illustrative. Cart purchases are simulated locally without actual financial transactions.
            </span>
          </div>
          <span className="text-[11px] font-bold text-amber-800">Local Storage Active</span>
        </div>

        {/* Search & Category Filter Box */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gold-200 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* Search */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search samagri (e.g., thali, cow ghee, havan, kalash)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-ivory border border-gold-200 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <span className="text-xs text-charcoal-500 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="py-2.5 px-3 rounded-xl bg-ivory border border-gold-200 text-xs font-semibold text-charcoal-700 focus:outline-none focus:border-maroon-800 w-full md:w-auto"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-none">
            {SHOP_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-maroon-800 text-white shadow-sm'
                    : 'bg-ivory text-charcoal-700 hover:bg-gold-100 border border-gold-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-gold-200/90 shadow-sm hover:shadow-spiritual-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden bg-gold-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-charcoal-800 backdrop-blur-md shadow-sm border border-gold-200">
                    {product.category}
                  </span>
                </div>
                {product.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-saffron-500 text-white shadow-sm">
                      Bestseller
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-1 text-[11px] text-charcoal-500 mb-1">
                    <Star className="w-3.5 h-3.5 fill-saffron-400 text-saffron-400" />
                    <span className="font-bold text-charcoal-800">{product.rating}</span>
                    <span>({product.reviewsCount} reviews)</span>
                  </div>
                  <h3 className="font-serif font-bold text-sm text-charcoal-900 group-hover:text-maroon-800 transition-colors line-clamp-2">
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className="text-[11px] text-charcoal-500 line-clamp-2 mt-1 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-charcoal-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-charcoal-400 uppercase font-semibold block">Price (AED)</span>
                    <span className="font-serif text-lg font-bold text-maroon-900">
                      {formatPrice(product.priceAED)}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(product, 1)}
                    className="px-3.5 py-2 bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 transform hover:scale-105"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
