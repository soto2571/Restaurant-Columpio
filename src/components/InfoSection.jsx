const InfoSection = () => {
  return (
    <section
    id="info"
    className="fade-in-section flex flex-col md:flex-row items-center justify-center gap-12 mx-auto py-16 px-6 max-w-5xl"
    >

        <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold ">Visit Us📍</h2>

            <p className="mt-4 font-semibold text-lg text-yellow-600">Opening Hours:</p>
            <ul className="mt-2">
                <li>Saturday: 7:30 AM - 3:00 PM</li>
                <li>Sunday: 7:30 AM - 3:00 PM</li>
                <li>Weekdays: Closed</li>
            </ul>

            <p className="mt-6 font-semibold text-lg text-yellow-600">Location:</p>
            <p className="">
                Edif RIOP, Carr. 115 km 12.1, Suite #1, Rincón, PR 00677
            </p>

            <div className="mt-6">
    <a href="tel:+17874587393">
      <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition duration-300">
        Call Now
      </button>
    </a>
  </div>
            </div>

            {/* Right Content - Google Map */}
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-full h-72 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d121195.5604621752!2d-67.33150973915248!3d18.330795909973943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8c02a5ef1d9f32bd%3A0xff66f1a46e89a9d2!2sEdif%20RIOP%2C%20Carr.%20115%20Km%2012.1%2C%20Suite%20%231%2C%20Rinc%C3%B3n%2C%2000677!3m2!1d18.3308136!2d-67.24910799999999!5e0!3m2!1sen!2spr!4v1729469839416!5m2!1sen!2spr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
                </div>
                </div>

    </section>
  )
}

export default InfoSection
