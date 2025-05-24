import SocialMedia from "../components/SocialMedia";
import Me from '../assets/Images/Me.jpg'
import Button from "../components/Button";

export default function About(){
    return(
        <main className="grid grid-cols-16">
            <section className="col-span-9">
                <div className=" border">
                    <h1 className="px-35 pb-55 text-5xl fonmt-bold">About Me</h1>
                </div>
                <div className="border-t border-r py-10 px-10">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magnam, dolore quisquam corrupti molestiae optio ad officia aut, aspernatur ab dolores? Asperiores ipsum veniam soluta in incidunt sunt sapiente deserunt?</p>
                    <div className="flex pt-10">
                        <img src={Me} alt="" className="w-70" />
                        <img src={Me} alt="" className="w-70 relative -bottom-10 ml-5" />
                    </div>
                </div>
            </section>
            <section className="col-span-6">
                <div className="flex justify-center py-5 border">
                    <img src={Me} alt="" className="w-[400px]"/>
                </div>
                <div className="p-20 border">
                    <div className="relative bottom-23 left-40">
                        <Button buttons="VIEW MY RESUME"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, inventore obcaecati! Repellat id eum animi ipsum necessitatibus corrupti impedit eveniet harum enim, et velit fugit possimus accusantium neque molestiae esse temporibus sint ratione omnis blanditiis maiores expedita nostrum? Eaque ab repudiandae, quaerat blanditiis quia fugiat vero libero, reiciendis ducimus perspiciatis velit quidem? Esse modi delectus expedita. Quisquam at tenetur accusamus!</p>
                </div>
            </section>
            <section className="col-span-1">
                <div className=" border">
                    <SocialMedia />
                </div>
            </section>
        </main>
    )
}