import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

interface SectionTitleProps {
    icon: IconType,
    title?: string,
    hoverColor?: 'sea-green' | 'coral-pink',
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    icon: Icon,
    title,
    hoverColor = 'sea-green',
}) => {
    return (
        <div className="flex items-center gap-2">
            <div className="flex-1 h-[1px] bg-neutral-700"></div>
            <div className="flex items-center gap-2 bg-transparent cursor-default group">
                <Icon className={twMerge('text-neutral-400 group-hover:text-sea-green transition-all duration-200 transform-gpu', hoverColor === 'coral-pink' && 'group-hover:text-coral-pink')} size={24} />
                <p className="text-neutral-400 leading-none uppercase">{title}</p>
            </div>
            <div className="flex-1 h-[1px] bg-neutral-700"></div>
        </div>
    )
}

export default SectionTitle