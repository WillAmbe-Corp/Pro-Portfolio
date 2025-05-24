export default function SocialMedia(){
    const socialMedia = [
        {Medium: "GitHub", Link:"https://github.com/WillAmbe-Corp"},
        {Medium: "LinkedIn", Link:"https://www.linkedin.com/in/princewill-ambe-neba/"},
        {Medium: "X", Link: "https://x.com/willambe"}
    ]

    return(
        <ul className="flex justify-end text-left space-y-4 transform lg:rotate-270 whitespace-nowrap gap-12 absolute bottom-10 -right-18 text-sm">
            {socialMedia.map(medium=>(
                <li key={medium.Medium}><a href={medium.Link}>{medium.Medium}</a></li>
            ))}
        </ul>
    )
} 