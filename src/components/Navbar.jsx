export default function Navbar(){
const navComponents = [
    {components: "Home", Link: "/"},
    {components: "About", Link: "/About"},
    {components: "Projects", Link: "/Projects"},
    {components: "Contact", Link: "/Contact"}    
]
    return(
        <nav className="flex justify-between p-5">
            <p className="font-bold">npa&copy;</p>
            <ul className="flex gap-4 font-semibold">
                {navComponents.map(component=>(
                    <li key={component}><a href={component.Link}>{component.components}</a></li>
                ))}
            </ul>
        </nav>
    )
}