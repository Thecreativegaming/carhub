import cars from "@/data/cars.json";
import { Car } from "@/types/car";

export function getAllCars(): Car[] {
  return cars;
}

export function getCarById(id: string): Car | undefined {
  return cars.find((car) => car.id === id);
}
