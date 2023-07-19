import React from "react";

export default function KPICard({title, kpi, description, margin}: any) {
    return (
        <div
            className={`bg-sky-900 w-full lg:w-[280px] p-8 shadow-xl rounded-3xl fex flex-col text-center ${margin ? 'mb-8 lg:mr-8 lg:mb-0' : ''}`}>
            <h4 className="text-xl lg:text-2xl">{title}</h4>
            <p className="text-2xl lg:text-5xl mt-4 font-bold">{kpi}</p>
            <p className="text-sm lg:text-lg mt-4">{description}</p>
        </div>
    )
}