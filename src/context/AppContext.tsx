import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product, Booking, UserSession, CurrencyConfig } from '../types';

export const CURRENCIES: Record<string, CurrencyConfig> = {
  AED: { code: 'AED', symbol: 'AED', rateAgainstAED: 1, label: 'AED - UAE Dirham (Default)' },
  USD: { code: 'USD', symbol: '$', rateAgainstAED: 0.272, label: 'USD - US Dollar' },
  GBP: { code: 'GBP', symbol: '£', rateAgainstAED: 0.214, label: 'GBP - British Pound' },
  EUR: { code: 'EUR', symbol: '€', rateAgainstAED: 0.253, label: 'EUR - Euro' },
  INR: { code: 'INR', symbol: '₹', rateAgainstAED: 22.84, label: 'INR - Indian Rupee' },
  CAD: { code: 'CAD', symbol: 'C$', rateAgainstAED: 0.375, label: 'CAD - Canadian Dollar' },
  AUD: { code: 'AUD', symbol: 'A$', rateAgainstAED: 0.412, label: 'AUD - Australian Dollar' },
  SGD: { code: 'SGD', symbol: 'S$', rateAgainstAED: 0.362, label: 'SGD - Singapore Dollar' }
};

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  message: string;
}

interface AppContextType {
  // Location & Currency
  country: string;
  setCountry: (country: string) => void;
  city: string;
  setCity: (city: string) => void;
  currency: string;
  setCurrency: (currency: string) => void;
  formatPrice: (amountInAED: number) => string;
  
  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotalAED: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  // Bookings
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt' | 'bookingRef'>) => Booking;
  cancelBooking: (id: string) => void;

  // Auth / Session
  user: UserSession | null;
  loginDemo: (userType?: 'devotee' | 'priest') => void;
  logout: () => void;
  updateUserProfile: (updates: Partial<UserSession>) => void;

  // Toast
  toasts: ToastMessage[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_DEMO_BOOKINGS: Booking[] = [
  {
    id: 'bk-dxb-001',
    bookingRef: 'DP-DXB-98421',
    pujaId: 'griha-pravesh-puja',
    pujaTitle: 'Griha Pravesh Puja',
    pujaImage: 'https://images.unsplash.com/photo-1609358905581-e50153860699?auto=format&fit=crop&w=600&q=80',
    serviceType: 'At Home',
    date: '2026-11-05',
    timeSlot: '09:00 AM - 12:30 PM (Shubh Abhijit Muhurat)',
    city: 'Dubai',
    address: 'Apartment 1402, Marina Gate 2, Dubai Marina',
    country: 'United Arab Emirates',
    language: 'Hindi & Sanskrit',
    packageId: 'pandit-samagri',
    packageName: 'Pandit with Puja Samagri',
    priceAED: 799,
    currency: 'AED',
    customerName: 'Aarav Mehta',
    phone: '+971 50 123 4567',
    email: 'aarav.mehta@example.com',
    specialInstructions: 'Please instruct security at tower reception. Low-smoke havan preferred.',
    status: 'Confirmed',
    createdAt: '2026-10-18T14:30:00Z'
  },
  {
    id: 'bk-dxb-002',
    bookingRef: 'DP-DXB-77149',
    pujaId: 'satyanarayan-puja',
    pujaTitle: 'Satyanarayan Puja',
    pujaImage: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=600&q=80',
    serviceType: 'Online E-Puja',
    date: '2026-10-28',
    timeSlot: '06:00 PM - 08:30 PM (Purnima Sandhya)',
    city: 'Dubai',
    address: 'Live HD Sanctum Video Stream',
    country: 'United Arab Emirates',
    language: 'English & Hindi',
    packageId: 'pandit-only',
    packageName: 'Pandit Only (Live Stream Sankalp)',
    priceAED: 399,
    currency: 'AED',
    customerName: 'Aarav Mehta',
    phone: '+971 50 123 4567',
    email: 'aarav.mehta@example.com',
    specialInstructions: 'Family will join on Zoom from Dubai and London.',
    status: 'Pandit Assigned',
    createdAt: '2026-10-15T09:12:00Z',
    isOnlineStream: true
  }
];

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Location & Currency
  const [country, setCountry] = useState<string>(() => {
    return localStorage.getItem('divyapuja_country') || 'United Arab Emirates';
  });
  const [city, setCity] = useState<string>(() => {
    return localStorage.getItem('divyapuja_city') || 'Dubai';
  });
  const [currency, setCurrency] = useState<string>(() => {
    return localStorage.getItem('divyapuja_currency') || 'AED';
  });

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('divyapuja_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Bookings
  const [bookings, setBookings] = useState<Booking[]>(() => {
    try {
      const saved = localStorage.getItem('divyapuja_bookings');
      return saved ? JSON.parse(saved) : INITIAL_DEMO_BOOKINGS;
    } catch {
      return INITIAL_DEMO_BOOKINGS;
    }
  });

  // User
  const [user, setUser] = useState<UserSession | null>(() => {
    try {
      const saved = localStorage.getItem('divyapuja_user');
      if (saved) return JSON.parse(saved);
      return {
        id: 'usr_dxb_108',
        name: 'Aarav Mehta',
        email: 'aarav.mehta@example.com',
        phone: '+971 50 123 4567',
        city: 'Dubai',
        country: 'United Arab Emirates',
        isDemo: true
      };
    } catch {
      return null;
    }
  });

  // Toast
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('divyapuja_country', country);
  }, [country]);

  useEffect(() => {
    localStorage.setItem('divyapuja_city', city);
  }, [city]);

  useEffect(() => {
    localStorage.setItem('divyapuja_currency', currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem('divyapuja_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('divyapuja_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('divyapuja_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('divyapuja_user');
    }
  }, [user]);

  // Toast Helpers
  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Price Formatter
  const formatPrice = (amountInAED: number): string => {
    const currentConfig = CURRENCIES[currency] || CURRENCIES.AED;
    const converted = amountInAED * currentConfig.rateAgainstAED;
    
    if (currency === 'INR') {
      return `${currentConfig.symbol} ${Math.round(converted).toLocaleString('en-IN')}`;
    }
    if (currency === 'USD' || currency === 'EUR' || currency === 'GBP') {
      return `${currentConfig.symbol}${converted.toFixed(2)}`;
    }
    return `${currentConfig.symbol} ${Math.round(converted).toLocaleString('en-US')}`;
  };

  // Cart operations
  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.name.slice(0, 32)}..." to your Samagri cart!`, 'success');
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotalAED = cart.reduce((sum, item) => sum + item.product.priceAED * item.quantity, 0);

  // Bookings operations
  const addBooking = (bookingData: Omit<Booking, 'id' | 'createdAt' | 'bookingRef'>): Booking => {
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const prefix = city.toUpperCase().slice(0, 3) || 'DXB';
    const bookingRef = `DP-${prefix}-${randomSuffix}`;
    const newBooking: Booking = {
      ...bookingData,
      id: `bk-${Date.now()}`,
      bookingRef,
      createdAt: new Date().toISOString()
    };
    setBookings(prev => [newBooking, ...prev]);
    showToast(`Booking ${bookingRef} successfully registered!`, 'success');
    return newBooking;
  };

  const cancelBooking = (id: string) => {
    setBookings(prev => prev.filter(b => b.id !== id));
    showToast('Demo booking cancelled', 'info');
  };

  // Auth operations
  const loginDemo = (userType: 'devotee' | 'priest' = 'devotee') => {
    if (userType === 'priest') {
      setUser({
        id: 'usr_priest_77',
        name: 'Pandit Rajesh Sharma',
        email: 'rajesh.sharma@divyapuja.com',
        phone: '+971 52 987 6543',
        city: 'Dubai',
        country: 'United Arab Emirates',
        isDemo: true
      });
      showToast('Logged in as Demo Vedic Scholar (Pandit Rajesh)', 'success');
    } else {
      setUser({
        id: 'usr_dxb_108',
        name: 'Aarav Mehta',
        email: 'aarav.mehta@example.com',
        phone: '+971 50 123 4567',
        city: 'Dubai',
        country: 'United Arab Emirates',
        isDemo: true
      });
      showToast('Logged in as Devotee (Aarav Mehta)', 'success');
    }
  };

  const logout = () => {
    setUser(null);
    showToast('You have been logged out from demo session.', 'info');
  };

  const updateUserProfile = (updates: Partial<UserSession>) => {
    if (user) {
      setUser({ ...user, ...updates });
      showToast('Profile information updated successfully!', 'success');
    }
  };

  return (
    <AppContext.Provider
      value={{
        country,
        setCountry,
        city,
        setCity,
        currency,
        setCurrency,
        formatPrice,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotalAED,
        isCartOpen,
        setIsCartOpen,
        bookings,
        addBooking,
        cancelBooking,
        user,
        loginDemo,
        logout,
        updateUserProfile,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
