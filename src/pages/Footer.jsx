import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section py-4 mt-5 text-center">
      <div className="container">
        <p className="mb-2 text-muted">© {new Date().getFullYear()} Akash Jana. All rights reserved.</p>
        
        <div className="footer-icons d-flex justify-content-center gap-4 mb-2">
          <a href="mailto:akscareer1999@gmail.com" className="text-success" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={20} />
          </a>
          <a href="https://github.com/4K45H11" className="text-success" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
        </div>

        <p className="small text-muted">
          Built with Passion. Deployed on Vercel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
