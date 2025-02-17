import { Metadata } from 'next'

import { UserAuthForm } from '@/components/auth/user-auth-form'

export const metadata: Metadata = {
    title: 'Authentication',
    description: 'Authentication',
}

export default function AuthenticationPage() {
    return (
        <div className='container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
            <div className='relative hidden h-full flex-col bg-muted p-20 text-white dark:border-r lg:flex'>
                <div className='absolute inset-0 bg-zinc-900' />
                <div className='relative z-20 flex items-center text-lg font-medium font-geist-mono gap-4'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='mr-2 h-6 w-6'
                    >
                        <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
                    </svg>
                    nathanmaire.com
                </div>
                <div className='relative z-20 mt-auto'>
                    <blockquote className='space-y-2'>
                        <p className='text-lg'>
                            &ldquo;This is a poethic quote made to reflect on your life
                            choices.&rdquo;
                        </p>
                        <footer className='text-sm'>Absolutely No one Ever.</footer>
                    </blockquote>
                </div>
            </div>
            <div className='lg:p-8'>
                <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
                    <div className='flex flex-col space-y-2 text-center'>
                        <h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
                        <p className='text-sm text-muted-foreground'>
                            Enter your email below to log into your account
                        </p>
                    </div>
                    <UserAuthForm />
                </div>
            </div>
        </div>
    )
}
