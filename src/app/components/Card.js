'use client'
import Image from "next/image";
import Link from "next/link";
import { obj } from "./Data"; // Assuming `obj` is the data array
import { useRouter } from "next/navigation";

export default function Card() {
    return (
        <div className="flex flex-wrap justify-start gap-4 tablet-max:items-center mobile-max:items-center mobile-max:justify-center tablet-max:justify-center">
            {obj.map((item, index) => {
                return (
                    <DataItems data={item} key={index} />
                );
            })}
        </div>
    );
}

function DataItems({ data }) {
    const router = useRouter();
  
    return (
        <div className="flex flex-col items-center border-2 m-2 border-black p-4 rounded-lg shadow-lg w-60">
            <Image
                src={data.img}
                alt={data.alt}
                height={250}
                width={250}
                className="object-cover rounded-lg mb-4"
            />
            <div className="text-center">
                <Link href="/game" className="text-blue-600 text-sm mb-2 block">
                    How to play
                </Link>
                <Link href={data.btn} className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block">
                    Play
                </Link>
            </div>
        </div>
    );
}
