import SocialMedia from '../components/SocialMedia'
import Me from '../assets/Images/Me.jpg'
import Button from '../components/Button'
export default function Home(){
    return(
        <main className='lg:grid  grid-cols-16 h-screen grid-rows-4'>
            <header className='lg:border py-20 col-span-5 row-span-4'>
                <div className='mt-30 px-4'>
                    <p>WEB DEVELOPER/</p>
                    <img src={Me} alt="Professional Picture of Neba Princewill" className='w-[350px]'/>
                </div>
            </header>
            <section className='col-span-10'>
                <div className='lg:border p-10 row-span-3'>
                    <h1 className='text-7xl font-bold'>NEBA PRINCEWILL AMBE</h1>
                    <p className='mt-54 text-sm w-[330px]'>Web develoer with over 2 years of experience and a passion for building real-world solutions</p>
                </div>
                <div className='lg:border-t lg:border-x px-4 row-span-1'>
                    <div className="relative bottom-23 left-40">
                        <Button button="BOOK A CALL"/>
                    </div>
                    <a href="mailo:nebaprincewill237@gmail.com">nebaprincewill237@gmail.com</a>
                    <p>+237 651 840 659</p>
                </div>
            </section>
            <section className='lg:border col-span-1 row-span-4'>
                <SocialMedia/>
            </section>
        </main>
    )
}