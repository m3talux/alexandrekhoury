import Title from "@/app/cv/components/title";

export default function Languages() {
    return (
        <div>
            <Title text="languages"/>
            <ul className="list-disc list-inside ml-2 mt-2">
                <li className="text-[var(--text-color)] text-xs mt-1">French (Native)</li>
                <li className="text-[var(--text-color)] text-xs mt-1">English (Fluent)</li>
                <li className="text-[var(--text-color)] text-xs mt-1">Arabic (Conversational)</li>
            </ul>
        </div>
    )
}