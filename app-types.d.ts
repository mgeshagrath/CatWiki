// Initial data required

interface Cat {
  name: string;
  id: string;
  description: string;
  image: string;
}

// Data fetched from API

interface CatApiResponse extends Cat {
  // id: string;
  // name: string;
  // origin: string;
  temperament: string;
  // description: string;
  life_span: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
  wikipedia_url: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  image: {
    url: string;
  };
}

// interface CatImageApiResponse extends CatApiResponse {}

// Generic css classes
