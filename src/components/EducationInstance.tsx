import { twMerge } from "tailwind-merge"

interface EducationInstanceProps {
    title: string,
    location: string,
    year: string,
    hoverColor?: Color,
}

const EducationInstance: React.FC<EducationInstanceProps> = ({
    title,
    location,
    year,
    hoverColor = 'sea-green',
}) => {
    return (
        <div className="flex gap-2 group hover:translate-x-2 transition-all duration-200 transform-gpu w-fit">
            <span className={twMerge('text-lg text-neutral-700 group-hover:text-sea-green transition-all duration-200 transform-gpu leading-relaxed', hoverColor === 'coral-pink' && 'group-hover:text-coral-pink')}>&#8594;</span>
            <div>
                <h1 className="text-neutral-400 font-medium leading-relaxed">{title}</h1>
                <p className="text-sm font-medium text-neutral-700 leading-relaxed">{location} ({year})</p>
            </div>
        </div>
    )
}

export default EducationInstance