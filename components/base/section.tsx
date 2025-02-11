import { PropsWithChildren } from 'react'
import { Separator } from '../ui/separator'
import { LucideProps } from 'lucide-react'

type LucideIcon = React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
>

export function Section({
    icon,
    title,
    id,
    children,
}: PropsWithChildren<{ icon: LucideIcon; title: string; id: string }>) {
    const Icon = icon
    return (
        <div className='flex flex-col gap-4 py-8' id={id}>
            <h3 className='text-3xl font-bold flex gap-2 items-center'>
                <Icon /> {title}
            </h3>
            {children}
            <div className='h-96'></div>
            <Separator />
        </div>
    )
}
