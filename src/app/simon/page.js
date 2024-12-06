import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { IoIosArrowBack } from "react-icons/io";
function page() {
  return (
    <div 
    className='m-2 p-2'
    >Simon Game will publish Soon.
        <div>
            <Link href='/'>
            <Button> <IoIosArrowBack /> Back</Button>
            </Link>
        </div>
    </div>

  )
}

export default page