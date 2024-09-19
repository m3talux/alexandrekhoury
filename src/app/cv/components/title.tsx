interface ITitleProps {
    text: string;
}

export default function Title({text}: ITitleProps) {
    return (
        <div>
            <h3 className="uppercase font-bold text-md tracking-wider">{text}</h3>
            <div className="h-[2px] w-full bg-black"/>
        </div>
    )
}