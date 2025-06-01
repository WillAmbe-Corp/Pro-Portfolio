import Me from '../assets/Images/Me.jpg';
import citsImage from '../assets/Images/CITS.PNG';
import TiC from '../assets/Images/TiC.jpg';
import SocialMedia from "../components/SocialMedia";
import DownloadButton from "../components/DownloadButton";

export default function About() {
    return (
        <main className="min-h-screen bg-gray-100" role="main">
            {/* Mobile and Tablet Layout */}
            <div className="lg:hidden">
                <section className="px-4 py-6" aria-labelledby="about-title-mobile">
                    <h1 id="about-title-mobile" className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
                    <div className="space-y-6">
                        <p className="text-gray-700">
                            Hello, I am NEBA PRINCEWILL, a software engineer with a passion for solving real-world problems and producing visually appealing solutions using the latest technologies. Through hands-on experience, I have honed my skills in creating efficient, scalable, and user-friendly web applications and have gained familiarity with technologies like JavaScript, React, Next.js, Tailwind CSS, and TypeScript. One of my greatest achievements was the design and implementation of a language website for a Professional Vocational Institute. Beyond coding, I also have basic knowledge of IT support. I am eager to bring my skills and contribute to the success of your organization. Let's get in touch for future collaborations!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <img 
                                src={citsImage} 
                                alt="citsImage Project Screenshot" 
                                className="w-full sm:w-[200px] h-auto" 
                                loading="lazy"
                            />
                            <img 
                                src={TiC} 
                                alt="TiC Project Screenshot" 
                                className="w-full sm:w-[200px] h-auto sm:mt-10" 
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                <section className="px-4 py-6 border-t">
                    <div className="mb-8">
                        <img 
                            src={Me} 
                            alt="Neba Princewill - Software Engineer" 
                            className="w-full max-w-[400px] mx-auto"
                            loading="lazy"
                        />
                    </div>
                    <div className="space-y-6">
                        <div className="text-center">
                            <DownloadButton 
                                fileName="AMBE.pdf"
                                filePath="/assets/AMBE.pdf"
                                buttonText="VIEW MY RESUME"
                            />
                        </div>
                        <p className="text-gray-700">
                            My passion for technology goes beyond building applications, it's about building people and communities. I'm deeply fascinated by how tech transforms lives and solves real-world problems, especially in underserved areas. As someone who has benefited from mentorship and open learning opportunities, I feel a strong duty to give back.
                            Through volunteerism and mentorship, I actively support others—especially beginners and young minds—on their journey into tech. Whether it's guiding someone through their first line of code, sharing resources, or contributing to community-driven projects, I believe in the power of shared growth. Tech is a constantly evolving field, and I'm committed to being part of that evolution by not just learning but also lifting others as I climb.
                        </p>
                    </div>
                </section>

                <section className="py-6 px-4">
                    <SocialMedia />
                </section>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-16">
                <section className="col-span-9" aria-labelledby="about-title-desktop">
                    <div className="border">
                        <h1 id="about-title-desktop" className="px-35 pb-55 text-5xl font-bold">About Me</h1>
                    </div>
                    <div className="border-t border-r py-10 px-10">
                        <p>
                            Hello, I am NEBA PRINCEWILL, a software engineer with a passion for solving real-world problems and producing visually appealing solutions using the latest technologies. Through hands-on experience, I have honed my skills in creating efficient, scalable, and user-friendly web applications and have gained familiarity with technologies like JavaScript, React, Next.js, Tailwind CSS, and TypeScript. One of my greatest achievements was the design and implementation of a language website for a Professional Vocational Institute. Beyond coding, I also have basic knowledge of IT support. I am eager to bring my skills and contribute to the success of your organization. Let's get in touch for future collaborations!
                        </p>
                        <div className="flex pt-10">
                            <img 
                                src={citsImage} 
                                alt="citsImage Project Screenshot" 
                                className="w-70" 
                                loading="lazy"
                            />
                            <img 
                                src={TiC} 
                                alt="TiC Project Screenshot" 
                                className="w-70 relative -bottom-10 ml-5" 
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                <section className="col-span-6">
                    <div className="flex justify-center py-5 border">
                        <img 
                            src={Me} 
                            alt="Neba Princewill - Software Engineer" 
                            className="w-[400px]"
                            loading="lazy"
                        />
                    </div>
                    <div className="py-15 px-5 border">
                        <div className="relative lg:-top-20 lg:left-20">
                            <DownloadButton 
                                fileName="AMBE.pdf"
                                filePath="/assets/AMBE.pdf"
                                buttonText="VIEW MY RESUME"
                            />
                        </div>
                        <p>
                            My passion for technology goes beyond building applications, it's about building people and communities. I'm deeply fascinated by how tech transforms lives and solves real-world problems, especially in underserved areas. As someone who has benefited from mentorship and open learning opportunities, I feel a strong duty to give back.
                            Through volunteerism and mentorship, I actively support others—especially beginners and young minds—on their journey into tech. Whether it's guiding someone through their first line of code, sharing resources, or contributing to community-driven projects, I believe in the power of shared growth. Tech is a constantly evolving field, and I'm committed to being part of that evolution by not just learning, but also lifting others as I climb.
                        </p>
                    </div>
                </section>

                <section className="col-span-1">
                    <div className="border">
                        <SocialMedia />
                    </div>
                </section>
            </div>
        </main>
    );
}