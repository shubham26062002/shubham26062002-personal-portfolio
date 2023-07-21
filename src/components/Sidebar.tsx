import SidebarButton from '@/components/SidebarButton'
import { HiOutlineHome, HiOutlineUser } from 'react-icons/hi'
import { PiShapesLight, PiSuitcaseSimpleLight, PiEnvelopeSimpleLight } from 'react-icons/pi'
import { LiaStreamSolid } from 'react-icons/lia'
import { SetStateAction } from 'react'

interface SidebarProps {
    activeSection: SectionId,
    setActiveSection: React.Dispatch<SetStateAction<SectionId>>,
}

const Sidebar: React.FC<SidebarProps> = ({
    activeSection,
    setActiveSection,
}) => {
    const scrollToSection = (sectionId: SectionId) => {
        // setActiveSection(sectionId)
        document.getElementById(sectionId as string)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <aside className="fixed inset-0 h-fit top-auto lg:w-fit lg:h-full lg:left-auto bg-midnight-black py-6 lg:py-0 lg:px-6 flex justify-center items-center border-l-[1px] border-neutral-900">
            <div className="flex lg:flex-col gap-3">
                <SidebarButton icon={HiOutlineHome} onClick={() => scrollToSection('home')} isActive={activeSection === 'home'} />
                <SidebarButton icon={HiOutlineUser} onClick={() => scrollToSection('about')} isActive={activeSection === 'about'} />
                <SidebarButton icon={PiShapesLight} onClick={() => scrollToSection('skills')} isActive={activeSection === 'skills'} />
                <SidebarButton icon={LiaStreamSolid} onClick={() => scrollToSection('services')} isActive={activeSection === 'services'} />
                <SidebarButton icon={PiSuitcaseSimpleLight} onClick={() => scrollToSection('portfolio')} isActive={activeSection === 'portfolio'} />
                <SidebarButton icon={PiEnvelopeSimpleLight} onClick={() => scrollToSection('contact')} isActive={activeSection === 'contact'} />
            </div>
        </aside>
    )
}

export default Sidebar