import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
        <hr/>
      <div className="max-w-7xl py-6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Contato</h2>
            <p>Email: Reginaldotaylor16@gmail.com</p>
            <p>Telefone: (+258) 84-0140-0652</p>
            <p>Telefone: (+258) 87-890-4554</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Redes Sociais</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Reginaldo16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Reginaldo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
