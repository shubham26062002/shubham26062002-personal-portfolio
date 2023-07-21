import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface SkillCardProps {
    imageSrc: string,
    name: string,
    hoverColor?: Color,
}

const SkillCard: React.FC<SkillCardProps> = ({
    imageSrc,
    name,
    hoverColor = 'sea-green',
}) => {
    return (
        <div className="group">
            <div className={twMerge('border-[1px] border-neutral-700 rounded-full  aspect-square flex flex-col justify-center items-center gap-3 group-hover:border-[2px] group-hover:border-sea-green transition-all duration-200 transform-gpu', hoverColor === 'coral-pink' && 'group-hover:border-coral-pink')}>
                <Image className="aspect-square object-cover w-14 h-14" src={imageSrc} alt={name} height={56} width={56} quality={100} priority={true} loading="eager" />
                <span className="text-neutral-400">{name}</span>
            </div>
        </div>
    )
}

export default SkillCard