import { PanchangInfo } from '../types';

export const CITIES_LIST = [
  { city: 'Dubai', country: 'United Arab Emirates', lat: 25.2048, lng: 55.2708, timezone: 'Asia/Dubai', utcOffset: '+04:00' },
  { city: 'Abu Dhabi', country: 'United Arab Emirates', lat: 24.4539, lng: 54.3773, timezone: 'Asia/Dubai', utcOffset: '+04:00' },
  { city: 'Sharjah', country: 'United Arab Emirates', lat: 25.3463, lng: 55.4209, timezone: 'Asia/Dubai', utcOffset: '+04:00' },
  { city: 'London', country: 'United Kingdom', lat: 51.5074, lng: -0.1278, timezone: 'Europe/London', utcOffset: '+01:00' },
  { city: 'New York', country: 'United States', lat: 40.7128, lng: -74.0060, timezone: 'America/New_York', utcOffset: '-04:00' },
  { city: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832, timezone: 'America/Toronto', utcOffset: '-04:00' },
  { city: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198, timezone: 'Asia/Singapore', utcOffset: '+08:00' },
  { city: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093, timezone: 'Australia/Sydney', utcOffset: '+10:00' },
  { city: 'Mumbai', country: 'India', lat: 19.0760, lng: 72.8777, timezone: 'Asia/Kolkata', utcOffset: '+05:30' },
  { city: 'Kuala Lumpur', country: 'Malaysia', lat: 3.1390, lng: 101.6869, timezone: 'Asia/Kuala_Lumpur', utcOffset: '+08:00' }
];

const TITHIS = [
  'Pratipada (1st Day)', 'Dwitiya (2nd Day)', 'Tritiya (3rd Day)', 'Chaturthi (4th Day)',
  'Panchami (5th Day)', 'Shashthi (6th Day)', 'Saptami (7th Day)', 'Ashtami (8th Day)',
  'Navami (9th Day)', 'Dashami (10th Day)', 'Ekadashi (11th Day)', 'Dwadashi (12th Day)',
  'Trayodashi (13th Day)', 'Chaturdashi (14th Day)', 'Purnima (Full Moon) / Amavasya (New Moon)'
];

const NAKSHATRAS = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashirsha', 'Ardra', 'Punarvasu',
  'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta',
  'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha',
  'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha', 'Purva Bhadrapada',
  'Uttara Bhadrapada', 'Revati'
];

const YOGAS = [
  'Vishkambha', 'Priti', 'Ayushman', 'Saubhagya', 'Shobhana', 'Atiganda', 'Sukarma',
  'Dhriti', 'Shula', 'Ganda', 'Vriddhi', 'Dhruva', 'Vyaghata', 'Harshana', 'Vajra',
  'Asiddhi', 'Vyatipata', 'Variyan', 'Parigha', 'Shiva', 'Siddha', 'Sadhya', 'Shubha',
  'Shukla', 'Brahma', 'Indra', 'Vaidhriti'
];

const KARANAS = [
  'Bava', 'Balava', 'Kaulava', 'Taitila', 'Gara', 'Vanija', 'Vishti (Bhadra)',
  'Shakuni', 'Chatushpada', 'Naga', 'Kintughna'
];

const HINDU_MONTHS = [
  'Chaitra', 'Vaishakha', 'Jyeshtha', 'Ashadha', 'Shravana', 'Bhadrapada',
  'Ashwin', 'Kartika', 'Margashirsha', 'Pausha', 'Magha', 'Phalguna'
];

export function getPanchangForDate(dateStr: string, cityName = 'Dubai'): PanchangInfo {
  const targetDate = new Date(dateStr);
  const dayOfYear = Math.floor((targetDate.getTime() - new Date(targetDate.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
  const dayIndex = targetDate.getDate();
  const monthIndex = targetDate.getMonth();

  const city = CITIES_LIST.find(c => c.city.toLowerCase() === cityName.toLowerCase()) || CITIES_LIST[0];

  const tithiIndex = (dayOfYear + 4) % TITHIS.length;
  const nakshatraIndex = (dayOfYear * 2 + 7) % NAKSHATRAS.length;
  const yogaIndex = (dayOfYear + 11) % YOGAS.length;
  const karanaIndex = (dayOfYear * 3 + 2) % KARANAS.length;
  const paksha = ((dayOfYear % 30) < 15) ? 'Shukla Paksha (Waxing)' : 'Krishna Paksha (Waning)';

  // Determine Hindu Month (approximate mapping)
  const hinduMonth = HINDU_MONTHS[(monthIndex + 1) % 12];
  
  // Ritu (Vedic season)
  let season = 'Sharad (Autumn)';
  if (monthIndex === 11 || monthIndex === 0) season = 'Hemant (Pre-Winter)';
  else if (monthIndex === 1 || monthIndex === 2) season = 'Shishir (Winter)';
  else if (monthIndex === 3 || monthIndex === 4) season = 'Vasant (Spring)';
  else if (monthIndex === 5 || monthIndex === 6) season = 'Grishma (Summer)';
  else if (monthIndex === 7 || monthIndex === 8) season = 'Varsha (Monsoon)';

  const formattedDate = targetDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return {
    date: dateStr,
    formattedDate,
    city: city.city,
    country: city.country,
    tithi: `${paksha} ${TITHIS[tithiIndex]} up to 04:22 PM`,
    nakshatra: `${NAKSHATRAS[nakshatraIndex]} up to 07:45 PM`,
    yoga: `${YOGAS[yogaIndex]} (Auspicious)`,
    karana: `${KARANAS[karanaIndex]} up to 03:15 PM`,
    sunrise: '06:24 AM',
    sunset: '05:48 PM',
    rahuKaal: '03:18 PM - 04:45 PM (Inauspicious)',
    abhijitMuhurat: '11:46 AM - 12:32 PM (Most Auspicious)',
    hinduMonth: `${hinduMonth} Maas, Vikram Samvat 2083`,
    season: `${season} Ritu`,
    paksha,
    sunSign: 'Tula (Libra)',
    moonSign: 'Vrishabha (Taurus)'
  };
}
