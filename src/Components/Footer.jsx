
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'

function Footer() {
    return (
        <div>
            <footer className="bg-[#27252b] py-2 px-3 z-20 relative">
                <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between space-y-2 items-center">
                    <div>
                        <button className='rounded-full font-semibold bg-yellow-500 text-black/90 px-4 py-2 sm:px-2 sm:py-0.5 hover:bg-yellow-600'>BOOK NOW</button>
                    </div>
                    {/* Social Media Icons */}
                    <div className="flex space-x-4 sm:space-x-2">
                        <a href="#" aria-label="Instagram">
                            <BsInstagram className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-white hover:text-yellow-500 transition-colors" />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <BsFacebook className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-white hover:text-yellow-500 transition-colors" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <BsTwitter className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-white hover:text-yellow-500 transition-colors" />
                        </a>
                        <a href="#" aria-label="WhatsApp">
                            <BsWhatsapp className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-white hover:text-yellow-500 transition-colors" />
                        </a>
                    </div>
                    <div className="text-sm text-white">www.yoursite.com</div>
                </div>
            </footer>
        </div>
    )
}

export default Footer