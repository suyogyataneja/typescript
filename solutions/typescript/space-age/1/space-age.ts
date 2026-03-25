const ORBITAL_PERIODS: Record<string,number>={
 mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

const SECONDS_IN_EARTH_YEAR= 31557600;

export function age(planet: keyof typeof ORBITAL_PERIODS, seconds: number):number {

  const earthYears = seconds / SECONDS_IN_EARTH_YEAR;
  const planetYears = earthYears/ ORBITAL_PERIODS[planet];

  return Number(planetYears.toFixed(2));
}
