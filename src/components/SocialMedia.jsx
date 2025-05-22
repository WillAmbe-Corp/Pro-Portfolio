export default function SocialMedia(){
    const socialMedia = [
        {Medium: "GitHub", Link:"https://github.com/WillAmbe-Corp"},
        {Medium: "LinkedIn", Link:"https://www.linkedin.com/in/princewill-ambe-neba/"},
        {Medium: "X", Link: "https://x.com/willambe"}
    ]

    return(
        <ul className="flex justify-end text-left space-y-4 transform rotate-270 whitespace-nowrap gap-16 absolute bottom-40 -right-24">
            {socialMedia.map(medium=>(
                <li key={medium.Medium}><a href={medium.Link}>{medium.Medium}</a></li>
            ))}
        </ul>
    )
} 