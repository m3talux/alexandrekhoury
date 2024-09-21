import Image from "next/image";

export default function Header() {
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col justify-start items-start">
                <h2 className="font-bold text-2xl text-black tracking-wider">ALEXANDRE EL KHOURY</h2>
                <h4 className="font-bold text-lg text-blue-500 tracking-wider">Sr. Software Engineer | Full-Stack
                    Development</h4>
                <div className="flex flex-row items-center">
                    <div>
                        <InfoItem icon="/icons/phone.svg" text="+33 7 86 23 50 38"/>
                        <div className="mt-1"/>
                        <InfoItem icon="/icons/link.svg" text="https://www.linkedin.com/in/alexandre-el-khoury"/>
                    </div>
                    <div className="ml-8">
                        <InfoItem icon="/icons/email.svg" text="alex.khoury.pro@gmail.com"/>
                        <div className="mt-1"/>
                        <InfoItem icon="/icons/pin.svg" text="Paris, France"/>
                    </div>
                </div>
            </div>
            <Image src="/images/pp.png" alt="pp" width={120} height={120}/>
        </div>
    )
}

function InfoItem({icon, text}: any) {
    return (
        <div className="flex flex-row items-center">
            <Image src={icon} width={14} height={14} alt={text}/>
            <label className="text-xs font-semibold ml-2 text-[var(--text-color)]">{text}</label>
        </div>
    )
}