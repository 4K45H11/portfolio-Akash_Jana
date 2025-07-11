import { FaEnvelope, FaGithub, FaReact } from 'react-icons/fa'
const Contact = () => {
    const connect = [
        { id: 1, type: 'email', url: `akscareer1999@gmail.com`, icon: FaEnvelope },
        { id: 2, type: 'github', url: `https://github.com/4K45H11`, icon: FaGithub }
    ]

    const connectList = connect.map(({ id, type, url, icon: Icon }) => (
        <div className="col-md-6 col-lg-6 mb-4" key={id}>
            <div className="connect-card shadow-sm rounded-4 p-4 text-center h-100">
                <Icon size={40} className="mb-3 text-primary" />
                <h5 className="text-capitalize">{type}</h5>
                {type === 'email' ? (
                    <a href={`mailto:${url}`} className="text-decoration-none text-muted">
                        {url}
                    </a>
                ) : (
                    <a style={{cursor:'pointer'}} href={url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">
                        {url.replace('https://', '')}
                    </a>
                )}
            </div>
        </div>
    ))
    return (
        <div className='container py-5' id='connect'>
            <h1 className='home-title mb-4'>Connect With Me</h1>
            <div className='row mt-4'>
                {connectList}
            </div>
        </div>
    )
}
export default Contact;