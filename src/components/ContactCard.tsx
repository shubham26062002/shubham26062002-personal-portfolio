import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

interface ContactCardProps {
    icon: IconType,
    title: string,
    description?: string,
    hoverColor?: Color,
    href?: string,
}

const ContactCard: React.FC<ContactCardProps> = ({
    icon: Icon,
    title,
    description,
    hoverColor = 'sea-green',
    href = '#',
}) => {
    return (
        <Link className="p-7 rounded-2xl bg-midnight-gray bg-opacity-50 border-[1px] border-neutral-900 group flex items-center gap-3" href={href} target="_blank">
            <Icon className={twMerge('text-neutral-400 group-hover:text-coral-pink transition-all duration-200 transform-gpu', hoverColor === 'coral-pink' && 'group-hover:text-coral-pink')} size={36} />
            <div className="flex-1">
                <h1 className="text-neutral-400 font-medium">{title}</h1>
                <p className="text-sm font-medium text-neutral-700">{description}</p>
            </div>
        </Link>
    )
}

export default ContactCard