const Skill = () => {

    const skills = [
        'ReactJS', 'JavaScript', 'GitHub', 'Git', 'ExpressJS', 'MongoDB',
        'Chart.js', 'Mongoose', 'Node.js', 'SQL', 'Bootstrap', 'VSCode',
        'Vercel', 'JWT'
    ];

    return (
        <div className="container py-4">
            < h1 className="my-4 home-title" > Tech Stack</h1 >
            <div className="skill-section py-4 px-3">
                <h4 className="mb-3" >Technologies and tools I work with</h4>
                <div className="d-flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                        <span key={idx} className="badge skill-badge">
                            {skill}
                        </span>
                    ))}
                </div>
            </div >
        </div >

    )
}

export default Skill;