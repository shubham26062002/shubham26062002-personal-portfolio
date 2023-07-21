import { twMerge } from 'tailwind-merge'


interface SectionProps {
    bgColor?: 'midnight-gray' | 'midnight-black',
    children?: React.ReactNode,
    id: SectionId,
}

const Section: React.FC<SectionProps> = ({
    bgColor = 'midnight-gray',
    children,
    id,
}) => {
    return (
        <section className="min-h-screen section" id={id}>
            <div className={twMerge('min-h-screen h-full py-16 px-6 md:px-24 lg:px-36 bg-midnight-gray', bgColor === 'midnight-black' && 'bg-midnight-black bg-opacity-90 border-t-[1px] border-b-[1px] border-neutral-900')}>
                {children}
            </div>
        </section>
    )
}

export default Section