import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

interface SidebarButtonProps {
    icon: IconType,
    onClick?: () => void,
    isActive?: boolean,
    color?: Color,
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
    icon: Icon,
    onClick,
    isActive,
    color = 'sea-green',
}) => {
    return (
        <button className={twMerge('p-2.5 border-[1px] border-coral-pink hover:bg-coral-pink hover:scale-110 transition-all duration-200 transform-gpu rounded-full group', isActive && 'bg-coral-pink')} onClick={onClick}>
            <Icon className={twMerge('text-coral-pink group-hover:text-midnight-black transition-all duration-200 transform-gpu', isActive && 'text-midnight-black')} size={20} />
        </button>
    )
}

export default SidebarButton