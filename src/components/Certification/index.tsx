import "./Brands.css";

const Certification = () => {
  const certificates = [
    { img: "1.jpg", label: "l1.png" },
    { img: "2.jpg", label: "l2.png" },
    { img: "3.jpg", label: "l3.png" },
    { img: "4.jpg", label: "l4.png" },
    { img: "5.jpg", label: "l5.png" },
    { img: "6.jpg", label: "l6.png" },
    { img: "7.jpg", label: "l7.png" },
    { img: "8.jpg", label: "l8.png" },
    { img: "9.jpg", label: "l9.png" },
    { img: "10.jpg", label: "l10.png" },
    { img: "11.jpg", label: "NEMA", isText: true },
    { img: "12.jpg", label: "l12.png" },
  ];

  return (
    <>
      <div className="relative mt-16 bg-black text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://img.freepik.com/free-photo/burning-lamp-hangs-dark-blurred-background-space-text_169016-62731.jpg?t=st=1741696604~exp=1741700204~hmac=c77a537f64cb159025396b5dfe3c329f78f59cb6b5368d01b7a6ed8bdf70b52d&w=1380" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center py-24">
    <h1 className="text-5xl font-bold leading-tight mb-4">Certificates</h1>
  </div>
</div>
    

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-8 justify-center">
            {certificates.map((certificate, index) => (
              // <div key={index} className="col-span-12 sm:col-span-6 md:col-span-4 text-center mx-auto">
              <div key={index} className="text-center mx-auto">
                <img
                  className="img-s mb-4"
                  src={`./images/certificate/${certificate.img}`}
                  alt={`Certificate ${index + 1}`}
                />
                {certificate.isText ? (
                  <b>
                    <h3>{certificate.label}</h3>
                  </b>
                ) : (
                <center>  <img
                    src={`./images/certificate/${certificate.label}`}
                    alt=""
                    style={{ width: "15%", borderRadius: "10px" }}
                  /></center>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certification;
