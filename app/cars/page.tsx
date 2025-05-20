import { getAllCars } from "@/lib/getCars";
import Image from "next/image";
import Link from "next/link";

export default function Cars() {
  const cars = getAllCars();

  const carsCards = cars?.map((car) => {
    return (
      <div key={car.id} className="bg-gray-100 rounded-lg">
        <Image
          src={car.image}
          alt="Picture of the car"
          width={0}
          height={0}
          sizes="100vw"
          className="aspect-square w-full rounded-md bg-white object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <h2 className="text-center text-2xl">{`${car.brand} ${car.model}`}</h2>
        <div className="flex justify-around p-2 items-center  ">
          <p>
            <span className="text-red-500 font-bold">{car.pricePerDay}</span>{" "}
            Pro Tag
          </p>
          <div className="flex gap-2">
            <Link
              className="bg-gray-400 p-2 rounded-3xl text-center text-white hover:bg-gray-300"
              href={"/cars/" + car.id}
            >
              Details
            </Link>
            <Link
              className="bg-blue-500 p-2 rounded-3xl text-center text-white hover:bg-blue-400"
              href={"/booking/" + car.id}
            >
              Mieten
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="p-4">
      <h1 className="text-5xl text-center">Übersicht über alle unsere Autos</h1>
      <div className="grid grid-cols-4 gap-10 mt-10">{carsCards}</div>
    </div>
  );
}
