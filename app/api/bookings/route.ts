import { NextResponse } from "next/server";

type BookingData = {
  email: string;
  startTimestamp: string;
  endTimestamp: string;
  carId: string;
};

export async function POST(req: Request) {
  const body: BookingData = await req.json();

  console.log(body);

  return NextResponse.json({ message: "Successbooking" });
}
