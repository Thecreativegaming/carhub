"use client";

import { useState, use } from "react";

type Params = {
  carId: number;
};

export default function BookCar({ params }: { params: Promise<Params> }) {
  const { carId } = use(params);

  const [mail, setMail] = useState<string>("");
  const [startTimestamp, setStartTimestamp] = useState<string>("");
  const [endTimestamp, setEndTimestamp] = useState<string>("");

  async function bookCar() {
    console.log("Booking car", {
      carId,
      mail,
      startTimestamp,
      endTimestamp,
    });

    const res = await fetch("/api/bookings/", {
      method: "POST",
      body: JSON.stringify({ carId, mail, startTimestamp, endTimestamp }),
    });

    const body = await res.json();
    console.log(body);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl">Book Car</h1>
      <div className="flex flex-col justify-center items-center bg-gray-200 p-5 rounded-2xl w-100">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="E-Mail"
          type="email"
          value={mail}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setMail(event.target.value)
          }
          required
        />
        <input
          placeholder="Startzeit"
          type="datetime-local"
          value={startTimestamp}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setStartTimestamp(event.target.value)
          }
          required
        />
        <input
          placeholder="Endzeit"
          type="datetime-local"
          value={endTimestamp}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEndTimestamp(event.target.value)
          }
          required
        />
        <button
          onClick={bookCar}
          className="bg-blue-500 p-2 rounded-3xl text-center text-white hover:bg-blue-400 mt-4"
        >
          Jetzt buchen
        </button>
      </div>
    </div>
  );
}
