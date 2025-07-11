const Home = () => {
    return (
        <div id="home">
            <div className="home-section">
                <div className="container">
                    <div className="mt-5">
                        <h1 className="home-title">Hi, I'm Akash<br /><small className="fs-4 fw-normal">Full Stack Developer | JavaScript Enthusiast | Problem Solver</small></h1>
                        <p className=" fs-5 fw-normal mt-4"> Hi, I'm Akash — a MERN Stack Developer focused on learning and building full-stack web applications using MongoDB, Express.js, React, and Node.js.
                        </p>
                        <p className="fs-5 fw-normal">
                            I'm comfortable working with both frontend and backend technologies, and I enjoy turning simple ideas into functional web apps. I’ve built several practice projects to strengthen my skills in creating user interfaces, building REST APIs, and implementing basic authentication. </p>
                            {/* <p className="fs-5 fw-normal">I'm currently improving my understanding of real-world development workflows, version control (Git/GitHub), and deployment platforms like Vercel and Render.</p> */}
                        <div className="home-buttons mt-4">
                            <a href="public/Akash Jana Resume.pdf" className="btn btn-green" download>Download Resume</a>
                            <a href="#contact" className="btn btn-outline-green">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;