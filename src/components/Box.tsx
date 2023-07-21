import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

interface BoxProps {
    icon?: IconType,
    title: string,
    children?: React.ReactNode,
    hoverColor?: 'sea-green' | 'coral-pink',
    className?: string,
}

const Box: React.FC<BoxProps> = ({
    icon: Icon,
    title,
    children,
    hoverColor = 'sea-green',
    className,
}) => {
    return (
        <div className={twMerge('p-7 rounded-2xl bg-midnight-gray bg-opacity-50 border-[1px] border-neutral-900', className)}>
            {
                Icon &&
                <Icon className={twMerge('text-neutral-400 group-hover:text-sea-green transition-all duration-200 transform-gpu', hoverColor === 'coral-pink' && 'group-hover:text-coral-pink')} size={36} />
            }
            <h1 className={twMerge('w-fit text-2xl font-bold uppercase text-neutral-400 leading-relaxed tracking-tighter', Icon && 'mt-7')}>{title}</h1>
            {
                children &&
                <div className="mt-7">
                    {children}
                </div>
            }
        </div>
    )
}

export default Box