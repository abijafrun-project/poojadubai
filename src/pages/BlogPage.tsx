import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';
import { 
  BookOpen, 
  Search, 
  Clock, 
  User, 
  ChevronRight, 
  Sparkles, 
  Calendar,
  ArrowRight
} from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Ritual Guides', 'Vedic Wisdom', 'Festivals', 'Astrology', 'Services'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      if (selectedCategory !== 'All' && post.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(q);
        const matchesExcerpt = post.excerpt.toLowerCase().includes(q);
        const matchesContent = post.content.toLowerCase().includes(q);
        if (!matchesTitle && !matchesExcerpt && !matchesContent) return false;
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  const featured = BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-ivory py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Spiritual Knowledge Hub</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900">
            Vedic Ritual Guides & Articles
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Practical preparation checklists, philosophical insights, and scriptural wisdom penned by our senior Acharyas for Hindu families in Dubai & abroad.
          </p>
        </div>

        {/* Featured Article Banner */}
        {featured && (
          <div className="bg-white rounded-3xl overflow-hidden border border-gold-300 shadow-spiritual grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-6 h-64 md:h-full relative overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-maroon-900 text-white shadow">
                  Featured Guide
                </span>
              </div>
            </div>

            <div className="md:col-span-6 p-6 sm:p-10 space-y-4">
              <div className="flex items-center gap-3 text-xs text-charcoal-500">
                <span>{featured.category}</span>
                <span>•</span>
                <span>{featured.readTime}</span>
                <span>•</span>
                <span>{featured.date}</span>
              </div>
              
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-charcoal-900 hover:text-maroon-800 transition-colors">
                <Link to={`/blog/${featured.slug}`}>{featured.title}</Link>
              </h2>

              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                {featured.excerpt}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-charcoal-800">
                  By {featured.author}
                </span>

                <Link
                  to={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-maroon-800 text-white rounded-xl text-xs font-bold hover:bg-maroon-900 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Search & Categories Bar */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gold-200 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by topic, ritual, or keyword..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-ivory border border-gold-200 text-xs text-charcoal-900 focus:outline-none focus:border-maroon-800"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none">
              {categories.map(cat => (
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
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-gold-200 shadow-sm hover:shadow-spiritual-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-gold-50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-maroon-900/95 text-white backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-charcoal-400 mb-1">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-charcoal-900 group-hover:text-maroon-800 transition-colors line-clamp-2">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-charcoal-600 line-clamp-3 mt-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                  <span className="text-[11px] text-charcoal-500 font-medium truncate max-w-[150px]">
                    {post.author}
                  </span>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs font-bold text-saffron-700 hover:text-maroon-900 inline-flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
