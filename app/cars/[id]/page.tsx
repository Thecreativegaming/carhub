import { getCarById } from "@/lib/getCars";
import Image from "next/image";
import Link from "next/link";

export default async function CarDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const car = getCarById(id);

  return (
    <div className="p-4">
      <Link
        href="/cars"
        className="bg-blue-500 p-2 rounded-3xl text-center text-white hover:bg-blue-400"
      >
        Zurück
      </Link>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl">
          {car?.brand}
          <mark className="px-2 text-white bg-black rounded-sm dark:bg-blue-500 ml-2">
            {car?.model}
          </mark>
        </h1>
        <Image
          src={car?.image || "/placeholder.jpg"}
          alt="Picture of the car"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto rounded-md bg-white object-cover group-hover:opacity-75 lg:aspect-auto mt-2"
        />
      </div>
      <div className="w-100% bg-gray-200 p-4 rounded-md">
        <div className="grid grid-cols-2 gap-2">
          <h2 className="text-2xl font-bold">Beschreibung:</h2>
          <p className="ml-3 pl-2 content-center">{car?.description}</p>
          <h2 className="text-2xl font-bold">Brand:</h2>
          <p className="ml-3 pl-2 content-center">{car?.brand}</p>
          <h2 className="text-2xl font-bold">Model:</h2>
          <p className="ml-3 pl-2 content-center">{car?.model}</p>
          <h2 className="text-2xl font-bold">Category:</h2>
          <p className="ml-3 pl-2 content-center">{car?.category}</p>
        </div>
        <div className="flex justify-between mt-5 items-center">
          <div className="text-2xl">
            Ab
            <mark className="bg-red-500 text-white p-2 rounded-xl mr-2 ml-2">
              {car?.pricePerDay}
            </mark>
            € pro Tag
          </div>
          <Link
            href={"/booking/" + car?.id}
            className="bg-blue-500 p-2 rounded-3xl text-3xl text-center text-white hover:bg-blue-400"
          >
            Mieten
          </Link>
        </div>
      </div>
    </div>
  );
}
