import {FaGithub,FaExternalLinkAlt} from 'react-icons/fa'

const Projects = () => {
    const projects = [
        {
            id: 1,
            img:`https://placehold.co/600x400?text=Hello+World`,
            name: 'Clientify',
            desc: 'A MERN stack CRM app with lead and agent management, status-based filters, and a dashboard. Includes reports with bar and pie charts using Chart.js.',
            skills: ['React', 'Node.Js', 'MongoDB', 'Char.js'],
            github: `https://github.com/4K45H11/webapp-crm-frontend `,
            demo: `https://webapp-crm-frontend.vercel.app/`
        },
        {
            id: 2,
            img:`https://placehold.co/600x400?text=Hello+World`,
            name: 'Basundhara Organic Farm',
            desc: 'A farm-based e-commerce web app with cart, filters, and search functionality. Includes address and order management, order history, and user-friendly checkout. Built using React, Node.js, and MongoDB.',
            skills: ['React', 'Node.Js', 'MongoDB'],
            github: `https://github.com/4K45H11/webapp-farm-frontend`,
            demo: `https://webapp-farm-frontend.vercel.app/`
        }      
    ]

    const projectList = projects.map(p => (
        <div key={p.id} className="col-md-6 col-lg-4 mb-4">
            <div className="project-card shadow-sm rounded-4 p-4 h-100">
                <img className='img-fluid rounded' src={p.img} alt={p.name} />
                <h5 className="project-title my-2 text-success">{p.name}</h5>
                <p className="text-muted small">
                   {p.desc}
                </p>
                <div className="skills mb-3">
                    {p.skills.map((skill, index) => (
                        <span key={index} className="badge me-2 mb-1 bg-success-subtle text-success-emphasis">{skill}</span>
                    ))}
                </div>
                <div className="d-flex gap-3">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-success">
                        <FaGithub className="me-1" /> GitHub
                    </a>
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-success">
                        <FaExternalLinkAlt className="me-1" /> Demo
                    </a>
                </div>
            </div>
        </div>
    ))

    return (
        <div className='container py-5' id='projects'>
            <h1 className='home-title'>Projects</h1>
            <div className='row mt-4'>
                {projectList}
            </div>
        </div>
    )
}
export default Projects;