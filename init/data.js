const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    lat: 34.0259,
    lon: -118.7798,
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
  },

  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    lat: 40.7128,
    lon: -74.0060,
    geometry: { type: "Point", coordinates: [-74.0060, 40.7128] }
  },

  {
    title: "Mountain View Cabin",
    description: "Experience serenity in this peaceful cabin overlooking the mountains. Perfect for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Aspen",
    country: "United States",
    lat: 39.1911,
    lon: -106.8175,
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] }
  },

  {
    title: "Lakefront Family House",
    description: "Spacious lake house ideal for families. Enjoy boating, fishing, and BBQ evenings!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Lake Tahoe",
    country: "United States",
    lat: 39.0968,
    lon: -120.0324,
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] }
  },

  {
    title: "Peaceful Countryside Retreat",
    description: "A charming countryside farmhouse surrounded by rolling hills. Great for escaping city life.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Nashville",
    country: "United States",
    lat: 36.1627,
    lon: -86.7816,
    geometry: { type: "Point", coordinates: [-86.7816, 36.1627] }
  },

  {
    title: "Luxury City Penthouse",
    description: "A premium penthouse with skyline views and high-end furnishing. Luxury living at its finest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672023488-70e25813b0d8?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Dubai",
    country: "United Arab Emirates",
    lat: 25.276987,
    lon: 55.296249,
    geometry: { type: "Point", coordinates: [55.296249, 25.276987] }
  },

  {
    title: "Tokyo Capsule Apartment",
    description: "A compact, modern capsule stay located in downtown Tokyo — experience futuristic living.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=60",
    },
    price: 500,
    location: "Tokyo",
    country: "Japan",
    lat: 35.6762,
    lon: 139.6503,
    geometry: { type: "Point", coordinates: [139.6503, 35.6762] }
  },

  {
    title: "Paris Romantic Studio",
    description: "A dreamy studio perfect for couples, located near the Eiffel Tower.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Paris",
    country: "France",
    lat: 48.8566,
    lon: 2.3522,
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
  },

  {
    title: "Swiss Alps Chalet",
    description: "A beautiful wooden chalet surrounded by mountains and scenic hiking routes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692794403-34d4982d04b3?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Zermatt",
    country: "Switzerland",
    lat: 46.0207,
    lon: 7.7491,
    geometry: { type: "Point", coordinates: [7.7491, 46.0207] }
  },

  {
    title: "Italian Vineyard Stay",
    description: "Stay among the vineyards in a Tuscany farmhouse. Sip wine and relax in the countryside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470123808288-1e59739d9353?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Tuscany",
    country: "Italy",
    lat: 43.7711,
    lon: 11.2486,
    geometry: { type: "Point", coordinates: [11.2486, 43.7711] }
  },

  {
    title: "Sydney Harbor Apartment",
    description: "Wake up to harbor views in this waterfront apartment near the Opera House.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512914787275-420569c96a69?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Sydney",
    country: "Australia",
    lat: -33.8688,
    lon: 151.2093,
    geometry: { type: "Point", coordinates: [151.2093, -33.8688] }
  },

  {
    title: "Rio Beach View Flat",
    description: "Enjoy stunning views of Copacabana Beach from this modern apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Rio de Janeiro",
    country: "Brazil",
    lat: -22.9068,
    lon: -43.1729,
    geometry: { type: "Point", coordinates: [-43.1729, -22.9068] }
  },

  {
    title: "London Riverside Apartment",
    description: "A stylish flat next to the Thames. Perfect for city explorers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "London",
    country: "United Kingdom",
    lat: 51.5074,
    lon: -0.1278,
    geometry: { type: "Point", coordinates: [-0.1278, 51.5074] }
  },

  {
    title: "Bali Eco Resort Hut",
    description: "Relax in an eco-friendly bamboo hut near Bali’s lush rice terraces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1535905748047-14b2415c33a0?auto=format&fit=crop&w=800&q=60",
    },
    price: 600,
    location: "Ubud",
    country: "Indonesia",
    lat: -8.5069,
    lon: 115.2624,
    geometry: { type: "Point", coordinates: [115.2624, -8.5069] }
  },

  {
    title: "Seoul City Studio",
    description: "Modern and compact studio apartment in the heart of Seoul.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 850,
    location: "Seoul",
    country: "South Korea",
    lat: 37.5665,
    lon: 126.9780,
    geometry: { type: "Point", coordinates: [126.9780, 37.5665] }
  },

  {
    title: "Singapore Sky Residence",
    description: "A high-rise apartment overlooking Marina Bay, perfect for luxury travelers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Singapore",
    country: "Singapore",
    lat: 1.3521,
    lon: 103.8198,
    geometry: { type: "Point", coordinates: [103.8198, 1.3521] }
  },

  {
    title: "Mumbai Marine Drive Flat",
    description: "A beautiful apartment overlooking Marine Drive with sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496568016405-4eaa33d9c1b1?auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Mumbai",
    country: "India",
    lat: 19.0760,
    lon: 72.8777,
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },

  {
    title: "Delhi Heritage Home",
    description: "A spacious traditional Indian home located near historic monuments.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Delhi",
    country: "India",
    lat: 28.6139,
    lon: 77.2090,
    geometry: { type: "Point", coordinates: [77.2090, 28.6139] }
  },

  {
    title: "Goa Beach Shack Stay",
    description: "A cozy beach shack experience just a few steps away from the Arabian Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 600,
    location: "Goa",
    country: "India",
    lat: 15.2993,
    lon: 74.1240,
    geometry: { type: "Point", coordinates: [74.1240, 15.2993] }
  },

  {
    title: "Kathmandu Valley Guesthouse",
    description: "A peaceful guesthouse surrounded by Himalayan foothills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=800&q=60",
    },
    price: 500,
    location: "Kathmandu",
    country: "Nepal",
    lat: 27.7172,
    lon: 85.3240,
    geometry: { type: "Point", coordinates: [85.3240, 27.7172] }
  },

  {
    title: "Bangkok Cityview Condo",
    description: "A high-rise condo with great access to food streets and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Bangkok",
    country: "Thailand",
    lat: 13.7563,
    lon: 100.5018,
    geometry: { type: "Point", coordinates: [100.5018, 13.7563] }
  },

  {
    title: "Cape Town Hilltop Villa",
    description: "A luxury villa located on the slopes of Table Mountain.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cape Town",
    country: "South Africa",
    lat: -33.9249,
    lon: 18.4241,
    geometry: { type: "Point", coordinates: [18.4241, -33.9249] }
  },

  {
    title: "Toronto Urban Condo",
    description: "Modern condo in downtown Toronto with excellent city access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Toronto",
    country: "Canada",
    lat: 43.6532,
    lon: -79.3832,
    geometry: { type: "Point", coordinates: [-79.3832, 43.6532] }
  },

  {
    title: "Vancouver Nature Lodge",
    description: "A wooden lodge surrounded by lush forests and lakes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Vancouver",
    country: "Canada",
    lat: 49.2827,
    lon: -123.1207,
    geometry: { type: "Point", coordinates: [-123.1207, 49.2827] }
  }
];

module.exports = { data: sampleListings };
