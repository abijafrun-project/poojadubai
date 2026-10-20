import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PUJAS_DATA, PUJA_CATEGORIES } from '../data/pujasData';
import { PujaCard } from '../components/home/PujaCard';
import { Search, Filter, Sparkles, SlidersHorizontal, Flame } from 'lucide-react';

export const AllPujasPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = searchParams.get('category') || 'all';
  const formatParam = searchParams.get('format') || 'all';
  const searchParam = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [selectedFormat, setSelectedFormat] = useState(formatParam);
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'rating'>('recommended');

  const filteredPujas = useMemo(() => {
    return PUJAS_DATA.filter(puja => {
      // Category filter
      if (categoryParam !== 'all' && puja.category !== categoryParam) {
        return false;
      }
      // Format filter
      if (selectedFormat === 'online' && !puja.formats.includes('Online E-Puja')) {
        return false;
      }
      if (selectedFormat === 'home' && !puja.formats.includes('At Home')) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = puja.title.toLowerCase().includes(q);
        const matchesDeity = puja.deity.toLowerCase().includes(q);
        const matchesDesc = puja.description.toLowerCase().includes(q);
        const matchesCategory = puja.categoryLabel.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDeity && !matchesDesc && !matchesCategory) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceAED - b.priceAED;
      if (sortBy === 'price-desc') return b.priceAED - a.priceAED;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // recommended order
    });
  }, [categoryParam, selectedFormat, searchQuery, sortBy]);

  const handleCategoryChange = (catId: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (catId === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', catId);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-maroon-800" />
            <span>Complete Vedic Ritual Directory</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900">
            Sacred Hindu Pujas & Ceremonies
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Explore authentic rituals performed by verified Vedic priests in Dubai, UAE, or globally via interactive E-Puja. Choose your tradition, language, and package.
          </p>
        </div>

        {/* Filter & Search Bar Box */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gold-200/90 space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pujas by name, deity, or purpose (e.g. Satyanarayan, Vastu)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-ivory border border-gold-200 text-xs text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:border-maroon-800"
              />
            </div>

            {/* Service Format Toggle */}
            <div className="md:col-span-3 flex items-center gap-1 bg-ivory p-1 rounded-xl border border-gold-200 text-xs">
              <button
                onClick={() => setSelectedFormat('all')}
                className={`flex-1 py-1.5 rounded-lg font-semibold transition-all ${
                  selectedFormat === 'all' ? 'bg-maroon-800 text-white shadow-sm' : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                All Formats
              </button>
              <button
                onClick={() => setSelectedFormat('home')}
                className={`flex-1 py-1.5 rounded-lg font-semibold transition-all ${
                  selectedFormat === 'home' ? 'bg-maroon-800 text-white shadow-sm' : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                At Home
              </button>
              <button
                onClick={() => setSelectedFormat('online')}
                className={`flex-1 py-1.5 rounded-lg font-semibold transition-all ${
                  selectedFormat === 'online' ? 'bg-maroon-800 text-white shadow-sm' : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                E-Puja
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2.5 px-3 rounded-xl bg-ivory border border-gold-200 text-xs font-semibold text-charcoal-700 focus:outline-none focus:border-maroon-800"
              >
                <option value="recommended">Sort by: Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-none">
            {PUJA_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  categoryParam === cat.id
                    ? 'bg-maroon-900 text-white shadow-sm'
                    : 'bg-ivory text-charcoal-700 hover:bg-gold-100 border border-gold-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-charcoal-500 px-1">
          <span>Showing <strong>{filteredPujas.length}</strong> verified ceremonies</span>
          {(categoryParam !== 'all' || searchQuery || selectedFormat !== 'all') && (
            <button
              onClick={() => {
                setSearchParams({});
                setSearchQuery('');
                setSelectedFormat('all');
              }}
              className="text-maroon-800 font-bold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Pujas Grid */}
        {filteredPujas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPujas.map(puja => (
              <PujaCard key={puja.id} puja={puja} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gold-200 space-y-3">
            <Sparkles className="w-12 h-12 text-gold-400 mx-auto" />
            <h3 className="font-serif font-bold text-xl text-charcoal-900">No Ceremonies Match Your Search</h3>
            <p className="text-xs text-charcoal-500 max-w-sm mx-auto">
              We could not find any rituals matching "{searchQuery}". Try searching for another deity, ritual name, or clearing filters.
            </p>
            <button
              onClick={() => {
                setSearchParams({});
                setSearchQuery('');
                setSelectedFormat('all');
              }}
              className="px-5 py-2.5 bg-maroon-800 text-white rounded-xl text-xs font-semibold hover:bg-maroon-900 transition-colors"
            >
              Show All 16+ Pujas
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
