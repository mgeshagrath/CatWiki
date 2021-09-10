export const abc = 'abc';

interface SingleCat {
  id: string;
  name: string;
  origin: string;
  temperament: string;
  description: string;
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
}

interface SingleCatReturn {
  id: string;
  name: string;
  origin: string;
  lifeSpan: string;
  description: string;
  temperament: string;
  stats: {
    quality: string;
    score: number;
  }[];
  moreDetails: {
    pageName: string;
    url: string;
  }[];
}

export const groupKittyData = (kitty: SingleCat): SingleCatReturn => {
  return {
    id: kitty.id,
    name: kitty.name,
    origin: kitty.origin,
    lifeSpan: kitty.life_span,
    description: kitty.description,
    temperament: kitty.temperament,
    stats: [
      {
        quality: 'adaptability',
        score: kitty?.adaptability ?? 0,
      },
      {
        quality: 'affection level',
        score: kitty?.affection_level ?? 0,
      },
      {
        quality: 'child friendly',
        score: kitty?.child_friendly ?? 0,
      },
      {
        quality: 'grooming',
        score: kitty?.grooming ?? 0,
      },
      {
        quality: 'intelligence',
        score: kitty?.intelligence ?? 0,
      },
      {
        quality: 'health issues',
        score: kitty?.health_issues ?? 0,
      },
      {
        quality: 'social needs',
        score: kitty?.social_needs ?? 0,
      },
      {
        quality: 'stranger friendly',
        score: kitty?.stranger_friendly ?? 0,
      },
    ],
    moreDetails: [
      {
        pageName: 'Wikipedia',
        url: kitty?.wikipedia_url ?? '',
      },
      {
        pageName: 'CFA',
        url: kitty?.cfa_url ?? '',
      },
      {
        pageName: 'vetstreet',
        url: kitty?.vetstreet_url ?? '',
      },
      {
        pageName: 'vcahospitals',
        url: kitty?.vcahospitals_url ?? '',
      },
    ],
  };
};
