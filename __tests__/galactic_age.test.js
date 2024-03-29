import Person from './../src/galactic_age.js';

describe('Persone', () => {

  test('should correctly create a person object', () => {
    const person = new Person("Keren");
    expect(person.name).toEqual("Keren");

  });

  test('should correctly calculate year on Mercury', () => {
    const person = new Person("Keren");
    expect(person.calculateMercury(24)).toEqual(100);
    
  });

  test('should correctly calculate year on Mercury', () => {
    const person = new Person("Keren");
    expect(person.calculateMercury(100)).toBeLessThanOrEqual(420);
    
  });
  
  test('should correctly calculate year on Mercury', () => {
    const person = new Person("Keren");
    expect(person.calculateMercury(10)).toBeLessThanOrEqual(420);
    expect(person.calculateMercuryAver(10, "no sport", "not often")).toBe(`You will live on Mercury on 18 year less`);
    
  });

  test('should correctly calculate year on Venus', () => {
    const person = new Person("Keren");
    expect(person.calculateVenus(24)).toBeCloseTo(38.709);
  });

  test('should correctly calculate year on Mars', () => {
    const person = new Person("Keren");
    expect(person.calculateMars(24)).toBe(13);
  });

  test('should correctly calculate year on Jupiter', () => {
    const person = new Person("Keren");
    expect(person.calculateJupiter(24)).toBe(2);
  });

  test('should correctly return points for professional sport', () => {
    const person = new Person("Keren");
    expect(person.lifestyleList("professional sport")).toBe(5);
  });

  test('should correctly return points for sport', () => {
    const person = new Person("Keren");
    expect(person.lifestyleList("sport")).toBe(10);
  });

  test('should correctly return points for no sport', () => {
    const person = new Person("Keren");
    expect(person.lifestyleList("no sport")).toBe(15);
  });

  test('should correctly return points for not correct value', () => {
    const person = new Person("Keren");
    expect(person.lifestyleList(" ")).toEqual(0);
  });
//---------------------------------------------------------------------------------------//
  test('should correctly return points for every day', () => {
    const person = new Person("Keren");
    expect(person.activityLevel("every day")).toBe(5);
  });

  test('should correctly return points for one per week', () => {
    const person = new Person("Keren");
    expect(person.activityLevel("one per week")).toBe(10);
  });

  test('should correctly return points for not often', () => {
    const person = new Person("Keren");
    expect(person.activityLevel("not often")).toBe(15);
  });

  test('should correctly return points for not correct value', () => {
    const person = new Person("Keren");
    expect(person.activityLevel(" ")).toBe(0);
  });

  test('should correctly return points for calculating average life sport ~ not often', () => {
    const person = new Person("Keren");
    expect(person.calculateAverage("sport","not often")).toBe(75);
  });

  test('should correctly return points for calculating average life professional sport ~ not often', () => {
    const person = new Person("Keren");
    expect(person.calculateAverage("professional sport","not often")).toBe(50);
  });

  test('should correctly return points for calculating average life no sport ~ every day', () => {
    const person = new Person("Keren");
    expect(person.calculateAverage("no sport","every day")).toBe(50);
  });

  test('should correctly return points for calculating average life no sport ~ not often', () => {
    const person = new Person("Keren");
    expect(person.calculateAverage("no sport","not often")).toBe(60);
  });

  test('should correctly return points for calculating average life sport ~ every day', () => {
    const person = new Person("Keren");
    expect(person.calculateAverage("sport","every day")).toBe(80);
  });

  test('return the number of years they have lived past the life expectancy Mercury', () => {
    const person = new Person("Keren");
    expect(person.calculateMercuryAver(10, "professional sport", "one per week")).toBe('You will live on Mercury on 38 year less');
  });

  test('return the number of years they have lived past the life expectancy Mercury', () => {
    const person = new Person("Keren");
    expect(person.calculateMercuryAver(1, "no sport", "not often")).toBe('You will live on Mercury on 56 year less');
  });

  test('return the number of years they have lived past the life expectancy Venus', () => {
    const person = new Person("Keren");
    expect(person.calculateVenusAver(24)).toBe('You will live on Venus on 21 year less');
  });

  test('return the number of years they have lived past the life expectancy Venus', () => {
    const person = new Person("Keren");
    expect(person.calculateVenusAver(100)).toBe('You will live on Venus on 101 year more');
  });

  test('return the number of years they have lived past the life expectancy Mars', () => {
    const person = new Person("Keren");
    expect(person.calculateMarsAver(24)).toBe('You will live on Mars on 67 year less');
  });

  test('return the number of years they have lived past the life expectancy Mars', () => {
    const person = new Person("Keren");
    expect(person.calculateMarsAver(200)).toBe('You will live on Mars on 26 year more');
  });

  test('return the number of years they have lived past the life expectancy Jupiter', () => {
    const person = new Person("Keren");
    expect(person.calculateJupiterAver(59, "proffesional sport", "not often")).toBe('You will live on Jupiter on 75 year less');
  });
  
  test('return the number of years they have lived past the life expectancy Mercury', () => {
    const person = new Person("Keren");
    expect(person.calculateMercuryAver(15, "sport", "one per week")).toBe('You will live on Mercury on 13 year more');
  });

  test('return the number of years they have lived past the life expectancy Mercury', () => {
    const person = new Person("Keren");
    expect(person.calculateJupiterAver(100, " ", " ")).toBe('You will live on Jupiter on 52 year less');
  });
});
