import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
    imageSrc: string,
    to: string,
    name: string,
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    imageSrc,
    to,
    name,
}) => {
    return (
        <Link className="h-full" href={to} target="_blank">
            <div className="overflow-hidden rounded-2xl border-[1px] border-neutral-700 group h-full">
                <Image className="h-full w-full object-cover group-hover:rotate-6 transition-all duration-200 transform-gpu" src={imageSrc} alt={name} width={4170} height={2000} quality={100} priority={true} loading="eager" />
            </div>
        </Link>
    )
}

export default ProjectCard