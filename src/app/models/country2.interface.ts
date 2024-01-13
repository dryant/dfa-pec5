export interface CountryInfo {
  name: {
    common: string;
    official: string;
    nativeName: { [key: string]: { official: string; common: string } };
  };
  coatOfArms: { png: string; svg: string };
  continents: string[];
  flags: { png: string; svg: string; alt: string };
  currencies: { [key: string]: { name: string; symbol: string } };
  languages: { [key: string]: string };
  capital: string[];
  population: number;
  area: number;
  region: string;
  subregion: string;
  timezones: string[];
  demonym: { [key: string]: { f: string; m: string } };
  flag: string;
  maps: { googleMaps: string; openStreetMaps: string };
}
