export type Character = {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type Location = {
  name: string;
  url: string;
};

export type Status = 'Alive' | 'Dead' | 'unknown';

export type Gender = 'Male' | 'Female' | 'unknown';

export type Species = 'Human' | 'Alien' | 'unknown';
