import Image from "next/image";
import Link from "next/link";


export default function Head(){
    return(
        <div className="flex bg-[#E6E6E6] justify-between items-center p-2 border-black border-2 rounded-xl mobile-max:flex-col tablet-max:flex-col laptop-max:flex-col">
            <Image src={'/gameLogo.png'} alt="game logo"
                height={90} width={90}  >
            </Image>
            {/* <ModeToggle/> */}
            <div className="flex gap-3 mr-6 text-xl font-bold">
                <Link href={'/'} className="hover:text-[#008CBA]">Home</Link>
                <Link href={'/game'} className="hover:text-[#008CBA]">Game</Link>
                <Link href={'/about'} className="hover:text-[#008CBA]">About</Link>
            </div>
        </div>
    );
}