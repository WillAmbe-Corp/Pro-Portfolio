import SocialMedia from '../components/SocialMedia'
import Me from '../assets/Images/Me.jpg'
export default function Home(){
    return(
        <main className='grid grid-cols-16 h-screen'>
            <header className='border py-20 col-span-5'>
                <p className=''>WEB DEVELOPER/</p>
                <img src={Me} alt="Professional Picture of Neba Princewill" className='w-[350px]'/>
            </header>
            <section className='col-span-10 grid grid-rows-4'>
                <div className='border p-10 row-span-6'>
                    <h1 className='text-7xl font-bold'>NEBA PRINCEWILL AMBE</h1>
                    <p className='mt-54 text-sm w-[330px]'>Web develoer with over 2 years of experience and a passion for building real-world solutions</p>
                </div>
                <div className='border px-4 row-span-2'>
                <button className='border px-8 py-3 absolute -bottom-12 bg-white text-sm right-22 rounded-4xl'>BOOK A CALL</button> <br />
                    <a href="mailo:nebaprincewill237@gmail.com">nebaprincewill237@gmail.com</a>
                    <p>+237 651 840 659</p>
                </div>
            </section>
            <section className='border col-span-1'>
                <SocialMedia/>
            </section>
        </main>
    )
}