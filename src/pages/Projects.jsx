import { useState } from 'react';
import Button from "../components/Button";
import SocialMedia from "../components/SocialMedia";
import Img from "../assets/Images/Img.jpg";
import projectsData from "../projects.json";

export default function Projects(){
    const [selectedProject, setSelectedProject] = useState(projectsData.Projects[0]);

    return(
        <>
            <main className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-24 min-h-screen w-full bg-white lg:divide-x lg:divide-black lg:border-t">
                {/* First section */}
                <div className="project-container col-span-1 md:col-span-6 lg:col-span-12 border-b md:border-b-0 md:border-r">
                    <h1 className="text-2xl lg:text-4xl p-6 md:p-10 lg:p-20 mb-4">Projects</h1>
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-t">
                                <td className="py-4 px-2 md:px-4">Project Name</td>
                                <td className="py-4 px-2 md:px-4 hidden sm:table-cell">Type</td>
                                <td className="py-4 px-2 md:px-4 hidden sm:table-cell">Year</td>
                            </tr>
                        </thead>
                        <tbody>
                            {projectsData.Projects.map((project, index) => (
                                <tr 
                                    key={index} 
                                    className={`border-b hover:bg-blue-50 cursor-pointer ${selectedProject.Project === project.Project ? 'bg-blue-100 hover:bg-blue-100' : ''}`}
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <td className="py-4 px-2 md:px-4">
                                        <div className="hover:text-blue-800">
                                            {project.Project} <br /> 
                                            <span className="text-sm text-gray-500">{project.Purpose}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-2 md:px-4 hidden sm:table-cell">{project.Type}</td>
                                    <td className="py-4 px-2 md:px-4 hidden sm:table-cell">{project.Year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {/* detailed project */}
                <div className="project-display col-span-1 md:col-span-5 lg:col-span-11 space-y-4 border-b md:border-b-0 md:border-r p-4 md:p-6">
                    <img 
                        src={Img} 
                        alt={selectedProject.Project} 
                        className="w-full md:w-[400px] lg:w-[500px] h-auto md:h-[190px] lg:h-[230px] py-4 text-center mx-auto object-cover" 
                    />
                    <div className="button-container relative top-9 text-center md:text-left">
                        <a href={selectedProject.Link} target="_blank" rel="noopener noreferrer">
                            <Button buttons="VIEW LIVE SITE"/>
                        </a>
                    </div>
                    <div className="border-t px-2 md:px-5 py-10 md:py-20">
                        <h2 className="text-xl font-semibold">{selectedProject.Project}</h2>
                        <p className="text-gray-600 mt-4">
                            {selectedProject.Description}
                        </p>
                    </div>
                </div>
                <div className="project-display col-span-1 md:col-span-1 lg:col-span-1 p-4 flex">
                    <SocialMedia/>                    
                </div>
            </main>
        </>
    )
}