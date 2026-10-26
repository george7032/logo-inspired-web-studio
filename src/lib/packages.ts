export const img = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const IMG = {
  mara: "1516426122078-c23e76319801",
  amboseli: "1547471080-7cc2caa01a7e",
  zebra: "1523805009345-7448845a9e53",
  elephants: "1535941339077-2dd1c7963098",
  beach: "1507525428034-b723cf961d3e",
  mountain: "1489392191049-fc10c97e64b6",
  hike: "1504432842672-1a79f78e4084",
  pool: "1566073771259-6a8506099945",
  resort: "1520250497591-112f2f40a3f4",
  family: "1511632765486-a01980e01a18",
  romance: "1519741497674-611481863552",
  conference: "1540575467063-178a50c2df87",
  car: "1494976388531-d1058494cdd8",
  lion: "1549366021-9f761d450615",
  giraffe: "1534177616072-ef7dc120449d",
  culture: "1612892483236-52d32a0e0ac1",
  camp: "1504173010664-32509aeebb62",
  food: "1493246507139-91e8fad9978e",
};

export const WHATSAPP = "254799034311";
export const PHONE = "+254 799 034311";
export const waLink = (msg = "Hi, I'd like to enquire about a trip.") => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

/** Displayed on the site; mailto links send to EMAIL_TO (the Gmail inbox). */
export const EMAIL = "info@parkkridonellytour.co.ke";
export const EMAIL_TO = "parkkridonellytoursltd@gmail.com";
export const SOCIALS = [
  { label: "TikTok", href: "https://www.tiktok.com/@parkkridonellytoursltd" },
  { label: "Instagram", href: "https://www.instagram.com/parkkridonellytoursltd/" },
  { label: "Facebook", href: "https://web.facebook.com/profile.php?id=61595773615573" },
] as const;

export type TourType = "Bespoke" | "Group Departure" | "Day Trip" | "Multi-Day Safari";
export type Pkg = {
  slug: string; title: string; type: TourType; destination: string; days: number; priceFrom: number;
  image: string; style: string; badge?: string; rating: number; summary: string;
  highlights: string[]; included: string[]; notIncluded: string[]; bestFor: string; flexibility: string;
  itinerary: { day: string; text: string }[]; gallery: string[]; accommodation: string;
};

const baseNot = ["International flights", "Visa / eTA fees", "Tips and gratuities", "Drinks and personal items"];

export const packages: Pkg[] = [
  {
    slug: "3-day-maasai-mara-classic-safari", title: "3-Day Maasai Mara Classic Safari", type: "Multi-Day Safari", destination: "Maasai Mara", days: 3, priceFrom: 650,
    image: IMG.mara, style: "Family", badge: "Best Seller", rating: 4.9,
    summary: "Kenya's most famous reserve in three unforgettable days: big cats, vast herds and golden savanna sunsets.",
    highlights: ["Big Five game drives", "Great Migration (Jul-Oct)", "Optional Maasai village visit", "Sunset over the Mara plains"],
    included: ["4x4 safari transport with pop-up roof", "Licensed English-speaking guide", "2 nights lodge accommodation", "All meals on safari", "Park entry fees", "Bottled water in the vehicle"],
    notIncluded: [...baseNot, "Hot air balloon safari (optional)"],
    bestFor: "First-time safari-goers, families and wildlife photographers.",
    flexibility: "Available as a group departure or a private tour, any day of the year.",
    itinerary: [
      { day: "Day 1: Nairobi to Maasai Mara", text: "Morning pickup in Nairobi, drive via the Great Rift Valley viewpoint. Lunch at the lodge, then an afternoon game drive." },
      { day: "Day 2: Full day in the Mara", text: "Full-day game drive with picnic lunch by the Mara River, searching for lions, leopards, cheetahs and the migration crossings." },
      { day: "Day 3: Mara to Nairobi", text: "Early morning game drive, breakfast, then drive back to Nairobi arriving late afternoon." },
    ],
    gallery: [IMG.mara, IMG.lion, IMG.zebra, IMG.elephants],
    accommodation: "Comfortable mid-range tented lodge near the reserve gate, with en-suite tents, hot showers and a dining area overlooking the plains. Luxury upgrades available.",
  },
  {
    slug: "amboseli-kilimanjaro-views", title: "Amboseli & Kilimanjaro Views", type: "Multi-Day Safari", destination: "Amboseli", days: 2, priceFrom: 480,
    image: IMG.amboseli, style: "Romantic", rating: 4.8,
    summary: "Huge elephant herds walking beneath snow-capped Kilimanjaro, Africa's tallest peak.",
    highlights: ["Big tusker elephants", "Kilimanjaro sunrise", "Observation Hill", "Swamp birdlife"],
    included: ["4x4 transport", "Licensed guide", "1 night lodge", "All meals", "Park fees"], notIncluded: baseNot,
    bestFor: "Photographers and couples.", flexibility: "Private or group, daily departures.",
    itinerary: [{ day: "Day 1: Nairobi to Amboseli", text: "Drive south, lunch at the lodge and an afternoon game drive." }, { day: "Day 2: Amboseli to Nairobi", text: "Sunrise drive with Kilimanjaro views, then return to Nairobi." }],
    gallery: [IMG.amboseli, IMG.elephants, IMG.giraffe], accommodation: "Lodge with Kilimanjaro views and a swimming pool.",
  },
  {
    slug: "samburu-wildlife-escape", title: "Samburu Wildlife Escape", type: "Multi-Day Safari", destination: "Samburu", days: 3, priceFrom: 720,
    image: IMG.giraffe, style: "Adventure", rating: 4.7,
    summary: "Discover the rare 'Samburu Special Five' in Kenya's wild north.",
    highlights: ["Reticulated giraffe & Grevy's zebra", "Ewaso Nyiro river", "Samburu culture", "Leopard sightings"],
    included: ["4x4 transport", "Licensed guide", "2 nights lodge", "All meals", "Park fees"], notIncluded: baseNot,
    bestFor: "Repeat safari-goers wanting something different.", flexibility: "Private tour, any dates.",
    itinerary: [{ day: "Day 1: Nairobi to Samburu", text: "Drive north past Mt Kenya; evening game drive." }, { day: "Day 2: Samburu", text: "Morning and afternoon game drives, optional village visit." }, { day: "Day 3: Return", text: "Morning drive and return to Nairobi." }],
    gallery: [IMG.giraffe, IMG.zebra, IMG.culture], accommodation: "Riverside tented lodge.",
  },
  {
    slug: "diani-beach-extension", title: "Diani Beach Extension", type: "Bespoke", destination: "Coast", days: 4, priceFrom: 540,
    image: IMG.beach, style: "Romantic", badge: "Private Tour", rating: 4.8,
    summary: "Unwind on white sand after your safari, with turquoise water and coral reefs.",
    highlights: ["White-sand beaches", "Snorkelling at Kisite", "Dhow sunset cruise", "Colobus monkeys"],
    included: ["Flight or SGR ticket", "Airport transfers", "3 nights beach resort", "Breakfast and dinner"], notIncluded: baseNot,
    bestFor: "Honeymooners and families.", flexibility: "Fully customisable dates and hotel.",
    itinerary: [{ day: "Day 1: Fly to Ukunda", text: "Transfer to your beach resort." }, { day: "Days 2-3: Beach & excursions", text: "Relax or join snorkelling and dhow trips." }, { day: "Day 4: Depart", text: "Transfer to the airport." }],
    gallery: [IMG.beach, IMG.resort, IMG.pool], accommodation: "Beachfront resort.",
  },
  {
    slug: "mara-group-departure", title: "Maasai Mara Group Departure", type: "Group Departure", destination: "Maasai Mara", days: 4, priceFrom: 590,
    image: IMG.lion, style: "Family", badge: "Group Departure", rating: 4.7,
    summary: "Join a small, friendly group on fixed dates for the best value Mara safari.",
    highlights: ["Shared 4x4 (max 7)", "Fixed weekly dates", "Great value", "Meet fellow travellers"],
    included: ["Shared 4x4", "Guide", "3 nights camp", "All meals", "Park fees"], notIncluded: baseNot,
    bestFor: "Solo travellers and budget-conscious groups.", flexibility: "Fixed departure dates every Monday and Thursday.",
    itinerary: [{ day: "Day 1", text: "Nairobi to Mara." }, { day: "Days 2-3", text: "Full-day game drives." }, { day: "Day 4", text: "Return to Nairobi." }],
    gallery: [IMG.lion, IMG.mara, IMG.camp], accommodation: "Comfortable permanent tented camp.",
  },
  {
    slug: "nairobi-national-park-day-trip", title: "Nairobi National Park Day Trip", type: "Day Trip", destination: "Nairobi", days: 1, priceFrom: 120,
    image: IMG.zebra, style: "Family", rating: 4.6,
    summary: "Wildlife with a city skyline backdrop, just 20 minutes from the CBD.",
    highlights: ["Rhinos and lions", "Skyline views", "Ideal for layovers"],
    included: ["Hotel pickup", "Guide", "Park fees", "Water"], notIncluded: baseNot,
    bestFor: "Business travellers and layovers.", flexibility: "Half-day or full-day, daily.",
    itinerary: [{ day: "Morning / afternoon", text: "Pickup, 4-hour game drive, drop-off." }],
    gallery: [IMG.zebra, IMG.giraffe], accommodation: "No overnight stay.",
  },
  {
    slug: "giraffe-centre-karen-day-tour", title: "Giraffe Centre & Karen Day Tour", type: "Day Trip", destination: "Nairobi", days: 1, priceFrom: 95,
    image: IMG.giraffe, style: "Cultural", badge: "Best Seller", rating: 4.8,
    summary: "Feed giraffes, visit baby elephants and explore Karen Blixen's home.",
    highlights: ["Giraffe Centre", "Elephant orphanage", "Karen Blixen Museum", "Kazuri beads"],
    included: ["Transport", "Guide", "Entry fees", "Lunch"], notIncluded: baseNot,
    bestFor: "Families with children.", flexibility: "Daily, private or shared.",
    itinerary: [{ day: "Full day", text: "Elephant orphanage at 11am, lunch, Giraffe Centre and museum." }],
    gallery: [IMG.giraffe, IMG.elephants, IMG.culture], accommodation: "No overnight stay.",
  },
  {
    slug: "7-day-kenya-grand-safari", title: "7-Day Kenya Grand Safari", type: "Bespoke", destination: "Multiple", days: 7, priceFrom: 1850,
    image: IMG.elephants, style: "Adventure", badge: "Private Tour", rating: 5,
    summary: "Samburu, Lake Nakuru, Maasai Mara and Amboseli in one tailor-made journey.",
    highlights: ["Four top parks", "Flamingos at Nakuru", "Private vehicle", "Tailored lodges"],
    included: ["Private 4x4", "Guide", "6 nights lodges", "All meals", "Park fees"], notIncluded: baseNot,
    bestFor: "Travellers wanting the complete Kenya experience.", flexibility: "Fully customisable route and lodges.",
    itinerary: [{ day: "Days 1-2: Samburu", text: "Northern wildlife." }, { day: "Day 3: Lake Nakuru", text: "Rhinos and flamingos." }, { day: "Days 4-5: Maasai Mara", text: "Big cats and migration." }, { day: "Days 6-7: Amboseli", text: "Elephants and Kilimanjaro, return to Nairobi." }],
    gallery: [IMG.elephants, IMG.mara, IMG.amboseli, IMG.giraffe], accommodation: "Hand-picked lodges at every stop.",
  },
  {
    slug: "7-day-group-safari-mara-nakuru-naivasha-amboseli", title: "7-Day Group Safari: Mara, Nakuru, Naivasha & Amboseli", type: "Group Departure", destination: "Multiple", days: 7, priceFrom: 700,
    image: IMG.mara, style: "Adventure", badge: "Group Departure", rating: 4.8,
    summary: "Kenya's classic group safari: the Mara, Lake Nakuru, a Naivasha boat ride, Hell's Gate biking and Amboseli under Kilimanjaro — six nights of wildlife for the best value.",
    highlights: ["Big Five & Great Migration", "Nakuru rhinos & flamingos", "Naivasha boat ride", "Hell's Gate bike safari", "Kilimanjaro views in Amboseli"],
    included: ["6 nights' accommodation", "All meals as per itinerary", "Shared 4x4 safari jeep with pop-up roof (max 8)", "Professional English-speaking driver-guide", "Bottled water in the vehicle", "Hotel/airport pickup and drop-off"],
    notIncluded: [...baseNot, "All park entry fees", "Maasai village visit @ $20 pp", "Balloon safari @ $435 pp (day 2, optional)", "Crescent Island @ $35 pp or horse riding @ $70 pp (optional)", "Easter & Christmas supplements"],
    bestFor: "Budget-conscious travellers who want Kenya's four greatest parks in one trip.",
    flexibility: "Group joining safari — you join other travellers in a shared jeep carrying a maximum of 8 people.",
    itinerary: [
      { day: "Day 1: Nairobi to Maasai Mara", text: "Pickup in Nairobi with a stop at the Great Rift Valley viewpoint. Lunch at the camp, then an evening sunset game drive (4:30–6:30pm) in the Mara Reserve. Dinner and overnight at Mara Ntulele / Rhino Tourist Camp or similar." },
      { day: "Day 2: Full-day game drive in the Mara", text: "Full day exploring the Mara in search of the Big Five and the wildebeest migration (over 1.5 million animals, July–November). Picnic lunch by the Mara River with resident crocodiles and hippos. Optional balloon safari at dawn ($435 pp)." },
      { day: "Day 3: Mara to Lake Nakuru", text: "Optional Maasai village visit ($20 pp, paid in cash), then drive to Nakuru with lunch en route. Check in, relax by the pool — no game drive today. Overnight at Buraha Zenoni Hotel or similar." },
      { day: "Day 4: Nakuru to Lake Naivasha", text: "Early game drive in Lake Nakuru National Park (3–4 hours): rare white rhinos, flamingos and rich birdlife. Lunch in Naivasha, then a 1-hour boat ride with eagle feeding, pelicans and hippos. Optional Crescent Island ($35 pp) or horse riding ($70 pp). Overnight at Astorian Grand Hotel or similar." },
      { day: "Day 5: Hell's Gate to Amboseli", text: "Guided biking safari in Hell's Gate National Park among zebras, giraffes and buffalo, plus a walk in the gorges and caves. Lunch en route, then drive to Amboseli, arriving in the evening. Overnight at Osutua Rafiki / Amboseli Wildebeest Camp or similar." },
      { day: "Day 6: Full day in Amboseli", text: "Full-day game drive with packed lunch, in search of big elephants, predators, zebras and giraffes beneath snow-capped Kilimanjaro. Picnic lunch at Observation Hill. Overnight at the same camp." },
      { day: "Day 7: Amboseli to Nairobi", text: "Final early-morning game drive (6–8am) for the best chance of predators, then breakfast, checkout and the drive back to Nairobi with drop-off at your hotel or the airport." },
    ],
    gallery: [IMG.mara, IMG.zebra, IMG.elephants, IMG.mountain], accommodation: "Safari camps with en-suite tents (Rhino Tourist Camp / Mara Ntulele), hotels in Nakuru and Naivasha (Buraha Zenoni, Astorian Grand) and Amboseli camps (Osutua Rafiki / Amboseli Wildebeest Camp).",
  },
  {
    slug: "6-day-budget-group-safari-mara-nakuru-amboseli", title: "6-Day Budget Group Safari: Mara, Nakuru & Amboseli", type: "Group Departure", destination: "Multiple", days: 6, priceFrom: 560,
    image: IMG.elephants, style: "Adventure", badge: "Group Departure", rating: 4.7,
    summary: "Five nights covering the Big Five in the Mara, rhinos and flamingos at Nakuru and Kilimanjaro elephants in Amboseli — our most complete budget group safari.",
    highlights: ["Big Five & Great Migration", "Nakuru white rhinos", "Full day in Amboseli", "Shared Land Cruiser (pop-up roof)", "Great value"],
    included: ["5 nights' accommodation", "All meals as per itinerary", "Transport in a Land Cruiser jeep with pop-up roof", "Bottled water", "Hotel/airport pickup and drop-off", "Our assistance at any point"],
    notIncluded: [...baseNot, "Park entrance fees (Mara, Nakuru, Amboseli)", "Maasai village visit @ $20 pp", "Balloon safari @ $435 pp (day 2, optional)"],
    bestFor: "Travellers who want the full Kenya circuit on a budget.",
    flexibility: "Group joining safari — shared vehicle, maximum 8 people.",
    itinerary: [
      { day: "Day 1: Nairobi to Maasai Mara", text: "Drive via the Great Rift Valley viewpoint; lunch at the camp and an evening sunset game drive (4–6pm). Dinner and overnight at Ntulele / Rhino Tourist Camp or similar." },
      { day: "Day 2: Full-day game drive in the Mara", text: "Full day in the Mara for the Big Five and the wildebeest migration, with picnic lunch by the Mara River among crocodiles and hippos." },
      { day: "Day 3: Mara to Lake Nakuru", text: "Early breakfast, optional Maasai village visit ($20 pp), then the drive to Nakuru. Check in and overnight at Buraha Zenoni Hotel or similar." },
      { day: "Day 4: Nakuru to Amboseli", text: "Early game drive in Lake Nakuru (white rhinos, flamingos, 3 hours), then the drive to Amboseli with lunch en route, arriving in time for dinner. Overnight at Osutua / Amboseli Wildebeest Camp or similar." },
      { day: "Day 5: Full day in Amboseli", text: "Full-day game drive with packed lunch — elephants, predators, zebras and giraffes with a backdrop of snow-capped Kilimanjaro." },
      { day: "Day 6: Amboseli to Nairobi", text: "Final early game drive (6–8am) for the best predator sightings, then breakfast, checkout and the drive to Nairobi with drop-off at your hotel or the airport." },
    ],
    gallery: [IMG.elephants, IMG.mara, IMG.zebra, IMG.mountain], accommodation: "Ntulele / Rhino Tourist Camp in the Mara, Buraha Zenoni Hotel in Nakuru and Osutua Rafiki / Amboseli Wildebeest Camp in Amboseli.",
  },
  {
    slug: "5-day-group-safari-mara-nakuru-naivasha", title: "5-Day Group Safari: Mara, Nakuru, Naivasha & Hell's Gate", type: "Group Departure", destination: "Multiple", days: 5, priceFrom: 370,
    image: IMG.zebra, style: "Family", badge: "Group Departure", rating: 4.6,
    summary: "Four nights of wildlife and adventure: the Mara's Big Five, Lake Nakuru's rhinos, a Naivasha boat ride and a biking safari in Hell's Gate — with complimentary airport pickup.",
    highlights: ["Big Five & Great Migration", "Nakuru rhinos & flamingos", "Naivasha boat ride & hippos", "Hell's Gate biking safari", "Complimentary airport pickup"],
    included: ["Complimentary airport pickup on arrival", "4 nights' accommodation", "All meals as per itinerary", "4x4 Land Cruiser jeep with pop-up roof", "Bottled water", "Hotel/airport pickup and drop-off"],
    notIncluded: [...baseNot, "Maasai village visit @ $20 pp and all park entrance fees", "Balloon safari @ $435 pp (day 2, optional)"],
    bestFor: "Value-seeking travellers who also want biking and boat safari variety.",
    flexibility: "Group joining safari — shared vehicle, maximum 8 people.",
    itinerary: [
      { day: "Day 1: Nairobi to Maasai Mara", text: "7am pickup from your hotel or airport with a stop at the Great Rift Valley viewpoint. Lunch at the camp, then an evening sunset game drive (4–6pm) in the Mara Reserve. Overnight at Rhino Tourist Camp or similar." },
      { day: "Day 2: Full-day game drive in the Mara", text: "Full day in the Mara searching for the Big Five, with picnic lunch by the Mara River and the spectacle of the Great Migration (July–November), followed by the savanna's predators." },
      { day: "Day 3: Mara to Lake Nakuru", text: "Early breakfast and a brief Maasai village cultural stop en route, then the drive to Nakuru. Arrive early and relax at the pool or in the hotel gardens. Overnight at Buraha Zenoni Hotel." },
      { day: "Day 4: Nakuru to Naivasha", text: "Early game drive in Lake Nakuru (3 hours): rare white rhinos and pink flamingos. Lunch at your Naivasha hotel, then a 1-hour boat ride on Lake Naivasha for bird watching and hippo viewing. Overnight at Astorian Hotel." },
      { day: "Day 5: Hell's Gate & return to Nairobi", text: "Relaxed breakfast, then a 2-hour biking tour in Hell's Gate National Park from 9am, followed by a guided walk in the gorges and caves. Lunch at a lakeside restaurant, then drive back to Nairobi with drop-off at your hotel or the airport." },
    ],
    gallery: [IMG.zebra, IMG.mara, IMG.mountain, IMG.giraffe], accommodation: "Rhino Tourist Camp in the Mara, Buraha Zenoni Hotel in Nakuru and Astorian Hotel in Naivasha.",
  },
  {
    slug: "4-day-group-safari-mara-nakuru", title: "4-Day Group Safari: Maasai Mara & Lake Nakuru", type: "Group Departure", destination: "Multiple", days: 4, priceFrom: 280,
    image: IMG.lion, style: "Family", badge: "Budget Pick", rating: 4.6,
    summary: "Three nights, two parks, one unbeatable price: the Big Five in the Mara plus Lake Nakuru's white rhinos and flamingos in a shared 4x4 Land Cruiser.",
    highlights: ["Big Five & Great Migration", "Nakuru white rhinos & flamingos", "Shared 4x4 Land Cruiser (max 8)", "Complimentary airport pickup", "Best price"],
    included: ["Complimentary airport pickup on arrival", "3 nights' accommodation", "All meals as per itinerary", "4x4 Land Cruiser jeep with pop-up roof", "Bottled water", "Pickup from the airport and drop-off at your Nairobi city-centre hotel"],
    notIncluded: [...baseNot, "Maasai Mara park fees", "Lake Nakuru park fees", "Maasai village visit @ $20 pp", "Balloon safari @ $435 pp (day 2, optional)"],
    bestFor: "Budget travellers and backpackers joining a group.",
    flexibility: "Group joining safari — shared Land Cruiser, maximum 8 people.",
    itinerary: [
      { day: "Day 1: Nairobi to Maasai Mara", text: "8am pickup from your Nairobi hotel, driving via the Great Rift Valley viewpoint. Lunch at the camp, then an evening sunset game drive (4–6pm). Overnight at Rhino Tourist Camp or similar." },
      { day: "Day 2: Full-day game drive in the Mara", text: "Full day in the Mara for the Big Five and the wildebeest migration, with picnic lunch by the Mara River and the reserve's resident big cats." },
      { day: "Day 3: Mara to Nakuru", text: "Early breakfast and a Maasai village cultural stop en route, then the drive to Lake Nakuru. Arrive early and relax by the pool or in the compound. Overnight at Buraha Zenoni Hotel or similar." },
      { day: "Day 4: Nakuru to Nairobi", text: "Early game drive in Lake Nakuru (3 hours): rare white rhinos and flamingos, then the 3-hour drive back with lunch en route and drop-off at your Nairobi hotel." },
    ],
    gallery: [IMG.lion, IMG.mara, IMG.zebra, IMG.camp], accommodation: "Rhino Tourist Camp (en-suite tents) in the Mara and Buraha Zenoni Hotel in Nakuru.",
  },
  {
    slug: "3-day-budget-group-safari-maasai-mara", title: "3-Day Budget Group Safari: Maasai Mara", type: "Group Departure", destination: "Maasai Mara", days: 3, priceFrom: 190,
    image: IMG.camp, style: "Adventure", badge: "Best Price", rating: 4.5,
    summary: "Kenya's most iconic reserve on the tightest budget: two nights in a safari tent, full-day game drives and the Great Migration — starting at just $190.",
    highlights: ["Big Five game drives", "Great Migration (Jul-Oct)", "Mara River hippos & crocodiles", "Safari tents with showers", "Complimentary airport pickup"],
    included: ["Complimentary airport pickup on the day of arrival", "2 nights' accommodation", "All meals as per itinerary", "4x4 Land Cruiser jeep with pop-up roof", "Bottled water", "Pickup and drop-off at your hotel"],
    notIncluded: [...baseNot, "Maasai Mara park fees ($100 pp/day Jan–Jun, $200 pp/day Jul–Dec)", "Maasai village visit @ $20 pp", "Balloon safari @ $435 pp (day 2, optional)", "Airport drop-off @ $20"],
    bestFor: "Budget travellers and solo adventurers joining a group.",
    flexibility: "Group joining safari — you join other travellers in a shared vehicle with a pop-up roof (maximum 8 people).",
    itinerary: [
      { day: "Day 1: Nairobi to Maasai Mara", text: "8am pickup from your Nairobi hotel via the Great Rift Valley viewpoint. Lunch at the camp, then an evening sunset game drive (4–6pm). Overnight at Enkajiang / Rhino Tourist Camp or similar — en-suite tents with hot showers." },
      { day: "Day 2: Full-day game drive in the Mara", text: "Full day exploring the Mara for the Big Five, with picnic lunch in the park. Visit the Mara River crocodiles and hippos and, from July to November, the great wildebeest migration — over 1.5 million animals on the move." },
      { day: "Day 3: Mara to Nairobi", text: "Early breakfast, then the drive back to Nairobi with a brief Maasai village cultural stop en route and a simple complimentary lunch at a traveller's motel. Drop-off at your Nairobi hotel." },
    ],
    gallery: [IMG.camp, IMG.mara, IMG.lion], accommodation: "Safari tents at Rhino Tourist Camp / Enkajiang camp with toilet, shower, bed, linen and mosquito nets.",
  },
];

export const testimonials = [
  { name: "Sarah M.", country: "🇬🇧 United Kingdom", text: "Our Mara safari was beyond anything we imagined. Our guide spotted a leopard on day one!" },
  { name: "Daniel K.", country: "🇺🇸 United States", text: "Everything was seamless, from the airport pickup to the beach extension. True professionals." },
  { name: "Lea B.", country: "🇩🇪 Germany", text: "They planned our honeymoon down to the last detail. The bush dinner was magical." },
];
