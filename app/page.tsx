import { Contacts } from '@/components/home/contacts'
import { Hero } from '@/components/home/hero'
import { Projects } from '@/components/home/projects'

export default function Home() {
    return (
        <div className='py-20 px-20 w-full flex flex-col gap-12'>
            <Hero />
            <Contacts />
            <Projects />
        </div>
    )
}
