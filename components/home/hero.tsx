export function Hero() {
    return (
        <section className='flex gap-6 justify-start'>
            <img src='pp.jpeg' width={200} height={350}></img>
            <div className='flex flex-col gap-3'>
                <h1 className='text-4xl font-bold text-foreground'>Nathan Maire</h1>
                <div className='text-gray-700 font-geist-mono'>
                    <p className='text-md'>
                        Data Scientist @ <b>ROLEX</b>
                    </p>
                    <p className='text-md'>
                        Computer Science MSc. @ <b>EPFL</b>
                    </p>
                </div>
                <p className='text-sm'>Some description of what I do here</p>
            </div>
        </section>
    )
}
