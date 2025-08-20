import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ContactPopUp({isOpen, onClose}) {

    useEffect(() => {

        if(isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';

        return () => {document.body.style.overflow = 'auto'};

    }, [isOpen]);

    if(!isOpen) return null;

  return (    
    <div className="fixed font-inter inset-0 h-screen flex items-center bg-gray-400/20 backdrop-blur-sm justify-center z-50">
      <div className="relative bg-white rounded-2xl lg:p-8 px-4 py-7 max-w-md w-full">
        <div className="flex justify-center mb-10">
          <div className="bg-green-100 rounded-full p-3">
            <svg className="w-20 h-20 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            Thank you for reaching out. <br /> Your message has been successfully submitted and I'll get back to you soon!!
          </p>

          <div className="absolute top-0 right-0">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-green-700 text-2xl p-3 transition-colors duration-500 font-medium"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPopUp