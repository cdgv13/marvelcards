export interface powerstats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}
export interface appearence {
  gender: string;
  race: string;
  height: [string];
  weight: [string];
  eyeColor: string;
  hairColor: string;
}
export interface biography {
  fullName: string;
  alterEgos: string;
  aliases: [string];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
}

export interface work {
  occupation: string;
  base: string;
}

export interface connections {
  groupAffiliation: string;
  relatives: string;
}

export interface images {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export type superHeroesType = {
  superHeroesType: [
    {
      id: number;
      name: string;
      slug: string;
      powerstats: powerstats;
      appearance: appearence;
      biography: biography;
      work: work;
      connections: connections;
      images: images;
    },
  ];
  loading: boolean;
};
