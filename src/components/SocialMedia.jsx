import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socialMedia = [
    { Medium: "GitHub", Link: "https://github.com/WillAmbe-Corp" },
    { Medium: "LinkedIn", Link: "https://www.linkedin.com/in/princewill-ambe-neba/" },
    { Medium: "X", Link: "https://x.com/willambe" }
];

export default function SocialMedia() {
    return (
        <ul className="flex gap-12 text-sm lg:absolute lg:bottom-10 lg:-right-15 lg:rotate-270">
            {socialMedia.map(({ Medium, Link }) => (
                <li key={Medium}>
                    <a href={Link} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                        {Medium === "GitHub"? <FaGithub size={20} /> : Medium === "LinkedIn" ? <FaLinkedin size={20} /> : <FaXTwitter size={20} />}
                    </a>
                </li>
            ))}
        </ul>
    );
} 