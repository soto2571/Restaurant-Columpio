const Reservation = () => {
  return (
    <section className="container mx-auto py-16 text-center bg-black">
      <h2 className="mb-8 text-3xl font-bold tracking-tighter text-white">
        Make a Reservation
      </h2>
      <div className="w-full flex justify-center">
        <iframe
          src="https://elcolumpioreserve.setmore.com/services/41684bf8-3fff-47da-ae73-119179d9e1f1"
          width="100%"
          height="600px"
          className="rounded-xl shadow-lg w-full max-w-4xl bg-black"
          style={{ border: "none", backgroundColor: "black" }}
          title="Reservation Booking"
        ></iframe>
      </div>
    </section>
  );
};

export default Reservation;