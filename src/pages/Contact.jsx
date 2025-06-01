import { useState, useEffect } from 'react';
import Button from "../components/Button";
import SocialMedia from "../components/SocialMedia";
import Img from "../assets/Images/Img.jpg";

export default function Contact(){
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    };

    const phoneNumber = '+23765180659';

    return(
        <>
            <main className="border-t overflow-hidden grid grid-cols-1 lg:grid-cols-24 min-h-screen">
                <div className="col-span-1 lg:col-span-23 grid grid-rows-3 bg-white">
                    <div className="border-b row-span-2 p-4 md:p-5">
                        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                            <p className="text-xl md:text-2xl font-semibold w-full md:w-[350px] mb-4 md:mb-0">
                                For any collaborative projects or inquiries, feel free to reach out to me.
                            </p>
                        </div>
                        <img 
                            src={Img} 
                            alt="contact" 
                            className="w-full md:w-1/3 lg:w-1/4 h-[360px] md:h-80 object-cover object-center md:float-right md:mt-10 mx-auto"
                        />
                    </div>

                    <div className="row-span-1 p-3 bg-white">
                        <a href={`tel:${phoneNumber}`} className="mb-4 md:mb-6 lg:relative lg:-top-8 lg:left-[1000px]">
                            <Button buttons="BOOK A CALL" />
                        </a>
                        <h1 className="text-4xl md:text-6xl lg:text-[100px] text-black/40 font-bold leading-tight">
                            Neba Princewill Ambe&copy;
                        </h1>
                        <footer className="mt-4">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                                <span className="text-sm md:text-base">COPYRIGHT &copy; 2025 NEBA PRINCEWILL AMBE</span>
                                <p className="text-sm md:text-base">
                                    BUEA, CAMEROON,{' '}
                                    <span className="text-lg md:text-xl font-bold font-mono block md:inline mt-1 md:mt-0">
                                        {formatTime(currentTime)}
                                    </span>
                                </p>
                            </div>
                        </footer>
                    </div>
                </div>
                <div className="col-span-1 border-t lg:border-t-0 lg:border-l bg-white">
                    <SocialMedia />
                </div>
            </main>
        </>
    )
}