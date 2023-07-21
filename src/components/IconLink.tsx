import { IconType } from 'react-icons'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface IconLinkProps {
    icon: IconType,
    href: string,
    hoverColor?: 'sea-green' | 'coral-pink',
}

const IconLink: React.FC<IconLinkProps> = ({
    icon: Icon,
    href,
    hoverColor = 'sea-green',
}) => {
    return (
        <Link className="group" href={href} target="_blank">
            <Icon className={twMerge('text-neutral-400 group-hover:text-sea-green transition-all duration-200 transform-gpu', hoverColor === 'coral-pink' && 'group-hover:text-coral-pink')} size={24} />
        </Link>
    )
}

export default IconLink