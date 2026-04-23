// ============================================
// Image Catalog — Self-hosted on Supabase Storage
// ============================================
// All images are in the `block-assets` bucket.
// Public URL pattern: STORAGE_URL/{category}/{filename}
//
// Usage in blocks:
//   import { IMAGES } from "@/lib/assets/images";
//   <img src={IMAGES.food.food01} alt="Delicious meal" />
// ============================================

const STORAGE_URL =
  "https://gatayhbuutiknhewmjhd.supabase.co/storage/v1/object/public/block-assets";

function img(path: string) {
  return `${STORAGE_URL}/${path}`;
}

export const IMAGES = {
  // HERO BACKGROUNDS
  heroes: {
    startup01: img("heroes/hero-startup-01.jpg"),
    startup02: img("heroes/hero-startup-02.jpg"),
    agency01: img("heroes/hero-agency-01.jpg"),
    agency02: img("heroes/hero-agency-02.jpg"),
    workspace01: img("heroes/hero-workspace-01.jpg"),
    workspace02: img("heroes/hero-workspace-02.jpg"),
    city01: img("heroes/hero-city-01.jpg"),
    city02: img("heroes/hero-city-02.jpg"),
    nature01: img("heroes/hero-nature-01.jpg"),
    nature02: img("heroes/hero-nature-02.jpg"),
    abstract01: img("heroes/hero-abstract-01.jpg"),
    abstract02: img("heroes/hero-abstract-02.jpg"),
    dark01: img("heroes/hero-dark-01.jpg"),
    dark02: img("heroes/hero-dark-02.jpg"),
    gradient01: img("heroes/hero-gradient-01.jpg"),
    minimal01: img("heroes/hero-minimal-01.jpg"),
    tech01: img("heroes/hero-tech-01.jpg"),
    tech02: img("heroes/hero-tech-02.jpg"),
    creative01: img("heroes/hero-creative-01.jpg"),
    creative02: img("heroes/hero-creative-02.jpg"),
  },

  // FOOD / RESTAURANT
  food: {
    food01: img("food/food-01.jpg"),
    food02: img("food/food-02.jpg"),
    food03: img("food/food-03.jpg"),
    food04: img("food/food-04.jpg"),
    food05: img("food/food-05.jpg"),
    food06: img("food/food-06.jpg"),
    food07: img("food/food-07.jpg"),
    food08: img("food/food-08.jpg"),
    food09: img("food/food-09.jpg"),
    food10: img("food/food-10.jpg"),
    restaurant01: img("food/restaurant-01.jpg"),
    restaurant02: img("food/restaurant-02.jpg"),
    restaurant03: img("food/restaurant-03.jpg"),
    coffee01: img("food/coffee-01.jpg"),
    coffee02: img("food/coffee-02.jpg"),
    bakery01: img("food/bakery-01.jpg"),
    chef01: img("food/chef-01.jpg"),
    pizza01: img("food/pizza-01.jpg"),
    sushi01: img("food/sushi-01.jpg"),
    dessert01: img("food/dessert-01.jpg"),
  },

  // PEOPLE / TEAMS / PORTRAITS
  people: {
    team01: img("people/team-01.jpg"),
    team02: img("people/team-02.jpg"),
    team03: img("people/team-03.jpg"),
    portraitMan01: img("people/portrait-man-01.jpg"),
    portraitMan02: img("people/portrait-man-02.jpg"),
    portraitMan03: img("people/portrait-man-03.jpg"),
    portraitWoman01: img("people/portrait-woman-01.jpg"),
    portraitWoman02: img("people/portrait-woman-02.jpg"),
    portraitWoman03: img("people/portrait-woman-03.jpg"),
    portraitWoman04: img("people/portrait-woman-04.jpg"),
    businessMan01: img("people/business-man-01.jpg"),
    businessWoman01: img("people/business-woman-01.jpg"),
    diverseTeam01: img("people/diverse-team-01.jpg"),
    meeting01: img("people/meeting-01.jpg"),
    handshake01: img("people/handshake-01.jpg"),
    customer01: img("people/customer-01.jpg"),
    customer02: img("people/customer-02.jpg"),
    customer03: img("people/customer-03.jpg"),
    africanMan01: img("people/african-man-01.jpg"),
    africanWoman01: img("people/african-woman-01.jpg"),
  },

  // PRODUCTS / E-COMMERCE
  products: {
    shoes01: img("products/product-shoes-01.jpg"),
    shoes02: img("products/product-shoes-02.jpg"),
    shoes03: img("products/product-shoes-03.jpg"),
    bag01: img("products/product-bag-01.jpg"),
    bag02: img("products/product-bag-02.jpg"),
    watch01: img("products/product-watch-01.jpg"),
    watch02: img("products/product-watch-02.jpg"),
    phone01: img("products/product-phone-01.jpg"),
    laptop01: img("products/product-laptop-01.jpg"),
    headphones01: img("products/product-headphones-01.jpg"),
    camera01: img("products/product-camera-01.jpg"),
    sunglasses01: img("products/product-sunglasses-01.jpg"),
    perfume01: img("products/product-perfume-01.jpg"),
    jewelry01: img("products/product-jewelry-01.jpg"),
    clothing01: img("products/product-clothing-01.jpg"),
    clothing02: img("products/product-clothing-02.jpg"),
    skincare01: img("products/product-skincare-01.jpg"),
    furniture01: img("products/product-furniture-01.jpg"),
    furniture02: img("products/product-furniture-02.jpg"),
    plant01: img("products/product-plant-01.jpg"),
    store01: img("products/ecom-store-01.jpg"),
    store02: img("products/ecom-store-02.jpg"),
    checkout01: img("products/ecom-checkout-01.jpg"),
    delivery01: img("products/ecom-delivery-01.jpg"),
    packaging01: img("products/ecom-packaging-01.jpg"),
  },

  // REAL ESTATE
  realestate: {
    house01: img("realestate/house-01.jpg"),
    house02: img("realestate/house-02.jpg"),
    house03: img("realestate/house-03.jpg"),
    apartment01: img("realestate/apartment-01.jpg"),
    interior01: img("realestate/interior-01.jpg"),
    interior02: img("realestate/interior-02.jpg"),
    interior03: img("realestate/interior-03.jpg"),
    kitchen01: img("realestate/kitchen-01.jpg"),
    bathroom01: img("realestate/bathroom-01.jpg"),
    pool01: img("realestate/pool-01.jpg"),
  },

  // MEDICAL
  medical: {
    doctor01: img("medical/doctor-01.jpg"),
    doctor02: img("medical/doctor-02.jpg"),
    hospital01: img("medical/hospital-01.jpg"),
    dental01: img("medical/dental-01.jpg"),
    pharmacy01: img("medical/pharmacy-01.jpg"),
    wellness01: img("medical/wellness-01.jpg"),
    lab01: img("medical/lab-01.jpg"),
    stethoscope01: img("medical/stethoscope-01.jpg"),
  },

  // FITNESS
  fitness: {
    gym01: img("fitness/gym-01.jpg"),
    gym02: img("fitness/gym-02.jpg"),
    yoga01: img("fitness/yoga-01.jpg"),
    running01: img("fitness/running-01.jpg"),
    trainer01: img("fitness/trainer-01.jpg"),
    weights01: img("fitness/weights-01.jpg"),
  },

  // TECHNOLOGY
  technology: {
    code01: img("technology/code-01.jpg"),
    server01: img("technology/server-01.jpg"),
    ai01: img("technology/ai-01.jpg"),
    dashboard01: img("technology/dashboard-01.jpg"),
    app01: img("technology/app-01.jpg"),
    phoneApp01: img("technology/phone-app-01.jpg"),
    circuit01: img("technology/circuit-01.jpg"),
    robot01: img("technology/robot-01.jpg"),
    vr01: img("technology/vr-01.jpg"),
    cyber01: img("technology/cyber-01.jpg"),
  },

  // ARCHITECTURE
  architecture: {
    building01: img("architecture/building-01.jpg"),
    building02: img("architecture/building-02.jpg"),
    modern01: img("architecture/modern-01.jpg"),
    skyscraper01: img("architecture/skyscraper-01.jpg"),
    bridge01: img("architecture/bridge-01.jpg"),
    interiorDesign01: img("architecture/interior-design-01.jpg"),
    blueprint01: img("architecture/blueprint-01.jpg"),
  },

  // FASHION
  fashion: {
    fashion01: img("fashion/fashion-01.jpg"),
    fashion02: img("fashion/fashion-02.jpg"),
    fashion03: img("fashion/fashion-03.jpg"),
    model01: img("fashion/model-01.jpg"),
    model02: img("fashion/model-02.jpg"),
    streetwear01: img("fashion/streetwear-01.jpg"),
    luxury01: img("fashion/luxury-01.jpg"),
  },

  // AUTOMOTIVE
  automotive: {
    car01: img("automotive/car-01.jpg"),
    car02: img("automotive/car-02.jpg"),
    car03: img("automotive/car-03.jpg"),
    carInterior01: img("automotive/car-interior-01.jpg"),
    garage01: img("automotive/garage-01.jpg"),
    electricCar01: img("automotive/electric-car-01.jpg"),
  },

  // WEDDING
  wedding: {
    wedding01: img("wedding/wedding-01.jpg"),
    wedding02: img("wedding/wedding-02.jpg"),
    bride01: img("wedding/bride-01.jpg"),
    rings01: img("wedding/rings-01.jpg"),
    bouquet01: img("wedding/bouquet-01.jpg"),
    venue01: img("wedding/venue-01.jpg"),
    cake01: img("wedding/cake-01.jpg"),
  },

  // PETS
  pets: {
    dog01: img("pets/dog-01.jpg"),
    dog02: img("pets/dog-02.jpg"),
    cat01: img("pets/cat-01.jpg"),
    cat02: img("pets/cat-02.jpg"),
    vet01: img("pets/vet-01.jpg"),
    petGrooming01: img("pets/pet-grooming-01.jpg"),
  },

  // TRAVEL
  travel: {
    beach01: img("travel/beach-01.jpg"),
    mountain01: img("travel/mountain-01.jpg"),
    paris01: img("travel/paris-01.jpg"),
    hotel01: img("travel/hotel-01.jpg"),
    hotel02: img("travel/hotel-02.jpg"),
    airplane01: img("travel/airplane-01.jpg"),
    passport01: img("travel/passport-01.jpg"),
    safari01: img("travel/safari-01.jpg"),
    tropical01: img("travel/tropical-01.jpg"),
    camping01: img("travel/camping-01.jpg"),
  },

  // EDUCATION
  education: {
    classroom01: img("education/classroom-01.jpg"),
    library01: img("education/library-01.jpg"),
    student01: img("education/student-01.jpg"),
    onlineLearning01: img("education/online-learning-01.jpg"),
    books01: img("education/books-01.jpg"),
    graduation01: img("education/graduation-01.jpg"),
  },

  // BEAUTY / SPA
  beauty: {
    spa01: img("beauty/spa-01.jpg"),
    salon01: img("beauty/salon-01.jpg"),
    makeup01: img("beauty/makeup-01.jpg"),
    skincare02: img("beauty/skincare-02.jpg"),
    nails01: img("beauty/nails-01.jpg"),
  },

  // CONSTRUCTION
  construction: {
    construction01: img("construction/construction-01.jpg"),
    construction02: img("construction/construction-02.jpg"),
    worker01: img("construction/worker-01.jpg"),
    blueprint02: img("construction/blueprint-02.jpg"),
  },

  // LEGAL
  legal: {
    law01: img("legal/law-01.jpg"),
    court01: img("legal/court-01.jpg"),
    gavel01: img("legal/gavel-01.jpg"),
    scales01: img("legal/scales-01.jpg"),
  },

  // FINANCE
  finance: {
    stocks01: img("finance/stocks-01.jpg"),
    bitcoin01: img("finance/bitcoin-01.jpg"),
    money01: img("finance/money-01.jpg"),
    bank01: img("finance/bank-01.jpg"),
    creditCard01: img("finance/credit-card-01.jpg"),
  },

  // MUSIC
  music: {
    concert01: img("music/concert-01.jpg"),
    guitar01: img("music/guitar-01.jpg"),
    studio01: img("music/studio-01.jpg"),
    dj01: img("music/dj-01.jpg"),
    vinyl01: img("music/vinyl-01.jpg"),
  },

  // NATURE
  nature: {
    sunset01: img("nature/sunset-01.jpg"),
    ocean01: img("nature/ocean-01.jpg"),
    forest01: img("nature/forest-01.jpg"),
    flower01: img("nature/flower-01.jpg"),
    landscape01: img("nature/landscape-01.jpg"),
  },

  // BUSINESS
  business: {
    office01: img("business/office-01.jpg"),
    meeting02: img("business/meeting-02.jpg"),
    presentation01: img("business/presentation-01.jpg"),
    conference01: img("business/conference-01.jpg"),
    coworking01: img("business/coworking-01.jpg"),
  },

  // BACKGROUNDS / TEXTURES
  backgrounds: {
    gradient01: img("backgrounds/gradient-01.jpg"),
    gradient02: img("backgrounds/gradient-02.jpg"),
    gradient03: img("backgrounds/gradient-03.jpg"),
    dark01: img("backgrounds/dark-01.jpg"),
    abstract01: img("backgrounds/abstract-01.jpg"),
    abstract02: img("backgrounds/abstract-02.jpg"),
    texture01: img("backgrounds/texture-01.jpg"),
    marble01: img("backgrounds/marble-01.jpg"),
    space01: img("backgrounds/space-01.jpg"),
    waves01: img("backgrounds/waves-01.jpg"),
  },

  // DEVICE MOCKUPS
  mockups: {
    laptop01: img("mockups/laptop-mockup-01.jpg"),
    phone01: img("mockups/phone-mockup-01.jpg"),
    tablet01: img("mockups/tablet-mockup-01.jpg"),
    desktop01: img("mockups/desktop-mockup-01.jpg"),
    multiDevice01: img("mockups/multi-device-01.jpg"),
  },
} as const;

// Helper: get all images for a category
export function getImagesByCategory(category: keyof typeof IMAGES): string[] {
  return Object.values(IMAGES[category]);
}

// Helper: get a random image from a category
export function getRandomImage(category: keyof typeof IMAGES): string {
  const images = getImagesByCategory(category);
  return images[Math.floor(Math.random() * images.length)];
}

// All category names
export type ImageCategory = keyof typeof IMAGES;
export const IMAGE_CATEGORIES = Object.keys(IMAGES) as ImageCategory[];
