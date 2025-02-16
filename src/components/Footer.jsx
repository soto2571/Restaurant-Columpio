import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className=" text-white py-8 mt-20">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          {/* Contact Info */}
          <div className="text-center md:text-left">
  <h2 className="text-2xl font-bold">Contact Us</h2>
  <p className="mt-2 text-neutral-300">
    Feel free to reach out to us through our social media or phone!
  </p>
  
  {/* Clickable Phone Link */}
  <p className="mt-2">
    <strong>Phone:</strong>{" "}
    <a href="tel:+17874587393" className=" hover:text-yellow-500">
      (787) 458-7393
    </a>
  </p>
</div>

          {/* Location */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Our Location</h2>
            <p className="mt-2 text-neutral-300 ">
              📍 Rincón, Puerto Rico
            </p>
            <p className="mt-2 text-neutral-300">
              Open Hours: 7:00 AM - 7:00 PM
            </p>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h2 className="text-2xl font-bold">Follow Us</h2>
            <div className="flex justify-center md:justify-start gap-6 mt-4">
              {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noreferrer noopener" className="text-white hover:text-yellow-400 text-2xl">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-neutral-400 text-sm">
          &copy; {new Date().getFullYear()} El Columpio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;