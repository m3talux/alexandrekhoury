import Title from "@/app/cv/components/title";

export default function Languages() {
    return (
        <div>
            <Title text="languages"/>
            <ul className="list-disc list-inside ml-2 mt-2">
                <li className="text-[var(--text-color)] text-xs">French (Native)</li>
                <li className="text-[var(--text-color)] text-xs">English (Fluent)</li>
                <li className="text-[var(--text-color)] text-xs">Arabic (Conversational)</li>
            </ul>
        </div>
    )
}