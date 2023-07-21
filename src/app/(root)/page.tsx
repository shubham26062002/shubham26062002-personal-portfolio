'use client'
import { useState, useEffect } from 'react'
import { HiOutlineHome } from 'react-icons/hi'
import Image from 'next/image'
import { BsGithub, BsTwitter, BsFacebook, BsLinkedin, BsDiscord, BsWindowDesktop, BsDatabase } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlineLocationCity, MdOutlineDesignServices } from 'react-icons/md'
import { FaSchool, FaUniversity } from 'react-icons/fa'
import { PiEnvelopeSimpleLight } from 'react-icons/pi'
import { FiSmartphone } from 'react-icons/fi'
import * as z from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-hot-toast'

import Sidebar from '@/components/Sidebar'
import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'
import Button from '@/components/Button'
import IconLinksTitle from '@/components/IconLinksTitle'
import IconLink from '@/components/IconLink'
// import ModalButton from '@/components/ModalButton'
import Box from '@/components/Box'
import EducationInstance from '@/components/EducationInstance'
import TimelineInstace from '@/components/TimelineInstace'
import ContactCard from '@/components/ContactCard'
import Input from '@/components/Input'
import CustomToast from '@/components/CustomToast'
import SkillCard from '@/components/SkillCard'
import ProjectCard from '@/components/ProjectCard'
import axios from 'axios'

// Contact form validation schema.
const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email({
    message: 'Email is invalid.',
  }),
  subject: z.string().nonempty({
    message: 'Subject cannot be empty.',
  }),
  message: z.string().nonempty({
    message: 'Message cannot be empty.',
  }),
})

const RootPage = () => {
  // State for managing active section.
  const [activeSection, setActiveSection] = useState<SectionId>('home')

  // Code for highlighting navigation links based on scroll.
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section')

      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId)
          }
        })
      }, options)

      sections.forEach(section => {
        observer.observe(section)
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Contact form.
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (data) => {
    setLoading(true)

    try {
      const response = await axios.post('/api/contact', data)

      if (response.status === 200) {
        toast.custom((t) => (
          <CustomToast message={response.data.message} toastId={t.id} />
        ))
      }
    } catch (error: any) {
      toast.custom((t) => (
        <CustomToast message="Error occurred while submitting the form." toastId={t.id} />
      ))
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen relative" >
      <div className="pb-[81px] md:pb-[90px] lg:pb-0 lg:pr-[98px]">

        {/* Home section */}
        <Section id="home">
          <SectionTitle icon={HiOutlineHome} title="Home" />
          <div className="mt-12 flex flex-col lg:flex-row justify-between gap-16">
            <div>
              <div className="max-w-sm">
                <h1 className="text-4xl font-bold uppercase text-neutral-400 leading-relaxed tracking-tighter">Hello, I'm</h1>
                <h1 className="text-7xl font-gliker leading-none tracking-tight text-green-gradient">Shubham, A Web Developer</h1>
              </div>
              <div className="mt-8 max-w-md">
                <p className="leading-relaxed text-neutral-400">Experienced full-stack developer with Expertise in Diverse Technologies.</p>
              </div>
              <div className="mt-8 w-fit">
                <Button label="Let's Talk" onClick={() => { document.getElementById('contact' as SectionId)?.scrollIntoView({ behavior: 'smooth' }) }} />
              </div>
              <div className="mt-8">
                <IconLinksTitle title="Connect With Me" />
                <div className="mt-3 flex w-fit gap-4">
                  <IconLink href="https://github.com/shubham26062002" icon={BsGithub} />
                  <IconLink href="https://twitter.com/SHUBHAM26244409" icon={BsTwitter} />
                  <IconLink href="https://www.facebook.com/shubham26062002/" icon={BsFacebook} />
                  <IconLink href="https://www.linkedin.com/in/shubham-patel-a9b705212/" icon={BsLinkedin} />
                  <IconLink href="https://discord.gg/JE9xwDeK" icon={BsDiscord} />
                </div>
              </div>
            </div>
            <Image className="self-center object-cover max-w-md w-full aspect-square rounded-full bg-midnight-black" src="/images/hero-image.png" alt="Shubham Patel" width={480} height={480} quality={100} priority={true} loading="eager" />
          </div>
        </Section>

        {/* About section */}
        <Section id="about" bgColor="midnight-black">
          <SectionTitle icon={HiOutlineHome} title="About" hoverColor="coral-pink" />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="w-fit">
                <h1 className="text-3xl font-bold uppercase text-neutral-400 leading-relaxed tracking-tighter">Let's Talk</h1>
                <h1 className="text-6xl font-gliker leading-none tracking-tight text-pink-gradient">About Me</h1>
              </div>
              <div className="mt-8">
                <p className="leading-relaxed text-neutral-400">Hello! I'm Shubham Patel, a full-stack developer specializing in React, Next.js, Supabase, and PostgreSQL, specializing in creating immersive user experiences and scalable web applications. Excels in front-end development using React and Next.js while leveraging Supabase and PostgreSQL for efficient web solutions.</p>
              </div>
              {/* <div className="mt-8 w-fit">
                <ModalButton label="Show More" />
              </div> */}
              <div className="mt-8">
                <IconLinksTitle title="My Places" />
                <div className="mt-3 flex w-fit gap-4">
                  <IconLink href="https://goo.gl/maps/JFgKF8bTKdzwDqS5A" icon={IoLocationSharp} hoverColor="coral-pink" />
                  <IconLink href="https://goo.gl/maps/JFgKF8bTKdzwDqS5A" icon={MdOutlineLocationCity} hoverColor="coral-pink" />
                  <IconLink href="https://dipsnikol.org/" icon={FaSchool} hoverColor="coral-pink" />
                  <IconLink href="https://www.ldrp.ac.in/" icon={FaUniversity} hoverColor="coral-pink" />
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <Box title="My Education" hoverColor="coral-pink">
                <div className="space-y-6">
                  <EducationInstance title="B.Tech. in Information Technology" location="LDRP Institute of Technology and Research" year="2024" hoverColor="coral-pink" />
                  <EducationInstance title="HSC (Higher Secondary Certificate) in Science Stream" location="Devasya International School" year="2020" hoverColor="coral-pink" />
                  <EducationInstance title="SSC (Secondary School Certificate)" location="Maharshi Sandipani School" year="2018" hoverColor="coral-pink" />
                </div>
                {/* <div className="mt-7 w-fit">
                  <ModalButton label="Show More" />
                </div> */}
              </Box>
              <Box title="My Experience" hoverColor="coral-pink">
                <div>
                  <TimelineInstace duration="2023-24" title="Project Handler" location="TatvaSoft Sculpting Thoughts" hoverColor="coral-pink" />
                  <TimelineInstace duration="2023-24" title="Project Manager" location="Karmsoft Solutions" hoverColor="coral-pink" />
                </div>
                {/* <div className="mt-7 w-fit">
                  <ModalButton label="Show More" />
                </div> */}
              </Box>
            </div>
          </div>
        </Section>

        {/* Skills section */}
        <Section id="skills">
          <SectionTitle icon={HiOutlineHome} title="Skills" />
          <div className="mt-12">
            <div className="w-fit mx-auto">
              <h1 className="text-3xl font-bold uppercase text-neutral-400 leading-relaxed tracking-tighter">Browse My</h1>
              <h1 className="text-6xl font-gliker leading-none tracking-tight text-green-gradient">Top Skills</h1>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
              <SkillCard imageSrc="/images/nextjs-logo.svg" name="Next.js" />
              <SkillCard imageSrc="/images/typescript-logo.svg" name="TypeScript" />
              <SkillCard imageSrc="/images/tailwindcss-logo.svg" name="TailwindCSS" />
              <SkillCard imageSrc="/images/postgresql-logo.svg" name="PostgreSQL" />
              <SkillCard imageSrc="/images/supabase-logo.svg" name="Supabase" />
            </div>
            {/* <div className="mt-12 w-fit">
              <ModalButton label="Show More" />
            </div> */}
          </div>
        </Section>

        {/* Services section */}
        <Section id="services" bgColor="midnight-black">
          <SectionTitle icon={HiOutlineHome} title="Services" hoverColor="coral-pink" />
          <div className="mt-12">
            <div className="w-fit mx-auto">
              <h1 className="text-3xl font-bold uppercase text-neutral-400 leading-relaxed tracking-tighter">What I</h1>
              <h1 className="text-6xl font-gliker leading-none tracking-tight text-pink-gradient">Offer?</h1>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              <Box icon={BsWindowDesktop} title="Website Design & Development" hoverColor="coral-pink" className="group">
                <p className="text-neutral-700 leading-relaxed">Offering services like Frontend Development, Static Site Development, Backend Development, API Development, and more...</p>
              </Box>
              <Box icon={MdOutlineDesignServices} title="UI/UX Design" hoverColor="coral-pink" className="group">
                <p className="text-neutral-700 leading-relaxed">Offering services like Interaction Design, Visual Design, Mobile App Design, Web App Design, CMS Design, and more...</p>
              </Box>
              <Box icon={BsDatabase} title="Database Design & Management" hoverColor="coral-pink" className="group">
                <p className="text-neutral-700 leading-relaxed">Offering services like Data Modeling, Database Management, Performance Optimization, Data Integrity and Security, Database Administration, and more...</p>
              </Box>
            </div>
            {/* <div className="mt-12 w-fit">
              <ModalButton label="Show More" />
            </div> */}
          </div>
        </Section>

        {/* Portfolio section */}
        <Section id="portfolio">
          <SectionTitle icon={HiOutlineHome} title="Portfolio" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            <div className="col-start-1 col-end-3">
              <div className="w-fit">
                <h1 className="text-3xl font-bold uppercase text-neutral-400 leading-relaxed tracking-tighter">Browse My</h1>
                <h1 className="text-6xl font-gliker leading-none tracking-tight text-green-gradient">Showcase</h1>
              </div>
            </div>
            <div className="col-start-1 col-end-3 lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 h-full">
              <ProjectCard to="https://github.com/shubham26062002" imageSrc="/images/project-1.jpg" name="Portfolio Website Template" />
            </div>
            <div className="col-start-1 col-end-3 md:row-start-2 md:row-end-3 md:col-start-3 md:col-end-4 lg:row-start-2 lg:row-end-4 lg:col-start-1 lg:col-end-2">
              <ProjectCard to="https://github.com/shubham26062002" imageSrc="/images/project-2.jpg" name="Futuristic VR Landing Page" />
            </div>
            <div className="md:row-start-1 md:row-end-2 md:col-start-3 md:col-end-4 lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3">
              <ProjectCard to="https://github.com/shubham26062002" imageSrc="/images/project-3.jpg" name="Coffee Landing Page" />
            </div>
            <div className="overflow-hidden rounded-2xl border-[1px] border-neutral-700 group relative h-full">
              <ProjectCard to="https://github.com/shubham26062002" imageSrc="/images/project-4.jpg" name="Mountain Bike Landing Page" />
            </div>
            <div className="col-start-1 col-end-3 md:row-start-3 md:row-end-4 md:col-start-2 md:col-end-4">
              <ProjectCard to="https://github.com/shubham26062002" imageSrc="/images/project-5.jpg" name="Traveler's Portfolio" />
            </div>
          </div>
          {/* <div className="mt-12 w-fit">
            <ModalButton label="Show More" />
          </div> */}
        </Section>

        {/* Contact section */}
        <Section id="contact" bgColor="midnight-black">
          <SectionTitle icon={PiEnvelopeSimpleLight} title="Contact" hoverColor="coral-pink" />
          <div className="mt-12 flex flex-col lg:flex-row justify-between gap-16">
            <div className="w-fit">
              <div className="w-fit">
                <h1 className="text-3xl font-bold uppercase text-neutral-400 leading-relaxed tracking-tighter">How To</h1>
                <h1 className="text-6xl font-gliker leading-none tracking-tight text-pink-gradient">Contact?</h1>
              </div>
              <div className="mt-8 space-y-7">
                <ContactCard icon={PiEnvelopeSimpleLight} title="Mail To" description="dev.shubham26062002@gmail.com" hoverColor="coral-pink" href="mailto:dev.shubham26062002@gmail.com" />
                <ContactCard icon={FiSmartphone} title="Call At" description="+91 (951) 023-6413" hoverColor="coral-pink" href="tel:+919510236413" />
              </div>
              <div className="mt-12">
                <IconLinksTitle title="Connect With Me" />
                <div className="mt-3 flex w-fit gap-4">
                  <IconLink href="https://github.com/shubham26062002" icon={BsGithub} hoverColor="coral-pink" />
                  <IconLink href="https://twitter.com/SHUBHAM26244409" icon={BsTwitter} hoverColor="coral-pink" />
                  <IconLink href="https://www.facebook.com/shubham26062002/" icon={BsFacebook} hoverColor="coral-pink" />
                  <IconLink href="https://www.linkedin.com/in/shubham-patel-a9b705212/" icon={BsLinkedin} hoverColor="coral-pink" />
                  <IconLink href="https://discord.gg/JE9xwDeK" icon={BsDiscord} hoverColor="coral-pink" />
                </div>
              </div>
            </div>
            <Box className="flex-1" title="Let's Work Together">
              <form className="space-y-10" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <Input label="First Name" id="firstName" focusColor="coral-pink" register={register} errors={errors} />
                  <Input label="Last Name" id="lastName" focusColor="coral-pink" register={register} errors={errors} />
                </div>
                <Input label="Email" id="email" focusColor="coral-pink" register={register} errors={errors} required={true} />
                <Input label="Subject" id="subject" focusColor="coral-pink" register={register} errors={errors} required={true} />
                <Input label="Message" id="message" focusColor="coral-pink" register={register} errors={errors} required={true} />
                <div>
                  <Button label="Send Message" type="submit" color="coral-pink" disabled={loading} />
                </div>
              </form>
            </Box>
          </div>
          <footer className="mt-24">
            <h1 className="text-neutral-400 text-center tracking-tighter leading-relaxed text-xl"><span className="uppercase font-bold">Shubham's</span> Personal Portfolio</h1>
            <p className="text-center text-neutral-700 leading-relaxed">&#169; 2023, All rights reserved, IND, Ahmedabad.</p>
          </footer>
        </Section>
      </div >
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
    </main >
  )
}

export default RootPage