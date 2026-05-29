export const PROBLEMS = [
  { id: 'not-cooling', label: 'Not Cooling' },
  { id: 'leaking', label: 'Leaking Water' },
  { id: 'no-power', label: 'No Power' },
  { id: 'noisy', label: 'Noisy/Unusual Sounds' },
  { id: 'frost-buildup', label: 'Frost Buildup' },
  { id: 'compressor', label: 'Compressor Issues' },
  { id: 'gas-refill', label: 'Gas Refill Needed' },
  { id: 'other', label: 'Other' },
];

export const FRIDGE_TYPES = [
  { id: 'domestic', label: 'Domestic Fridge' },
  { id: 'freezer', label: 'Freezer' },
  { id: 'commercial', label: 'Commercial Fridge' },
  { id: 'chest-freezer', label: 'Chest Freezer' },
];

export const FRIDGE_BRANDS = [
  'Bosch',
  'LG',
  'Samsung',
  'Siemens',
  'Defy',
  'Kelvinator',
  'Electrolux',
  'Whirlpool',
  'Ariston',
  'Other',
];

export const TIME_SLOTS = [
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
];

export const BOOKING_STATUS = {
  PENDING: 'pending',
  ASSIGNED: 'assigned',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
};

export const PRICE_RANGES = {
  'not-cooling': { min: 200, max: 800 },
  leaking: { min: 150, max: 500 },
  'no-power': { min: 100, max: 400 },
  noisy: { min: 200, max: 600 },
  'frost-buildup': { min: 150, max: 500 },
  compressor: { min: 500, max: 2000 },
  'gas-refill': { min: 300, max: 800 },
  other: { min: 200, max: 1000 },
};

export const WINDHOEK_AREAS = [
  'Klein Windhoek',
  'Ausspannplatz',
  'Windhoek West',
  'Katutura',
  'Olympia',
  'Kleine Kuppe',
  'Eros',
  'Riviera',
  'Ludwigsdorf',
  'Southern Industrial',
  'Northern Industrial',
  'Dorado Park',
  'Brakwater',
  'Hochland Park',
  'Pioneerspark',
  'Otjomuise',
];
