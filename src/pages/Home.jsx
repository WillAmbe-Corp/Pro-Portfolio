import SocialMedia from '../components/SocialMedia'
import Me from '../assets/Images/Me2.jpg'
import Button from '../components/Button'

export default function Home(){
    const phoneNumber = "+23765180659";
    return(
        <main className='min-h-screen overflow-hidden '>
            {/* Mobile and Tablet Layout */}
            <div className='lg:hidden flex flex-col'>
                <header className='py-10 px-4'>
                    <p className='text-sm mb-4'>WEB DEVELOPER/</p>
                    <img src={Me} alt="Professional Picture of Neba Princewill" className='w-full max-w-[350px] mx-auto'/>
                </header>
                
                <section className='px-4 py-6'>
                    <h1 className='text-4xl md:text-5xl font-bold mb-6'>NEBA PRINCEWILL AMBE</h1>
                    <p className='text-sm max-w-[330px] mb-8'>Web developer with over 2 years of experience and a passion for building real-world solutions</p>
                    <a href={`tel:${phoneNumber}`} className='mb-6'>
                        <Button buttons="BOOK A CALL"/>
                    </a>
                    <div className='space-y-2'>
                        <a href="mailto:nebaprincewill237@gmail.com" className='block hover:text-gray-600'>nebaprincewill237@gmail.com</a>
                        <p>+237 651 840 659</p>
                    </div>
                </section>

                <div className='py-6 px-4'>
                    <SocialMedia/>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className='hidden lg:grid grid-cols-16 h-screen'>
                <header className='border col-span-5'>
                    <div className='mt-30 px-4'>
                        <p>WEB DEVELOPER/</p>
                        <img src={Me} alt="Professional Picture of Neba Princewill" className='object-cover'/>
                    </div>
                </header>

                <section className='col-span-10'>
                    <div className='border p-10'>
                        <h1 className='text-7xl font-bold'>NEBA PRINCEWILL AMBE</h1>
                        <p className='mt-54 text-sm w-[330px]'>Web developer with over 2 years of experience and a passion for building real-world solutions</p>
                    </div>
                    <div className='border-t border-x px-4'>
                        <div className="relative bottom-5 left-25">
                            <Button buttons="BOOK A CALL"/>
                        </div>
                        <a href="mailto:nebaprincewill237@gmail.com" className='hover:text-gray-600'>nebaprincewill237@gmail.com</a>
                        <p>+237 651 840 659</p>
                    </div>
                </section>

                <section className='border col-span-1'>
                    <SocialMedia/>
                </section>
            </div>
        </main>
    )
}