'use client'

import Image from "next/image";
import {useState} from "react";

export default function Avatar() {
    const [lightsOn, setLightsOn] = useState(true)

    return (
        <div
            className="bg-[var(--primary-color)] rounded-full w-36 md:w-60 md:h-60 flex justify-center items-center relative">
            <Image src="/svg/avatar.svg" className="rounded-full" width={264} height={264}
                   alt="Alexandre El Khoury | Avatar"/>
            <Image src={lightsOn ? '/svg/wafers.svg' : '/svg/glasses.svg'} className="absolute" width={264} height={24}
                   alt="Wafers"/>
            <Image onClick={() => setLightsOn(!lightsOn)} src={lightsOn ? '/svg/sun.svg' : '/svg/moon.svg'}
                   alt={lightsOn ? 'Sun' : 'Moon'} width={32}
                   height={32} className="absolute -top-2 md:top-0 -right-2 md:right-0 hover:cursor-pointer"/>
        </div>
    )
}