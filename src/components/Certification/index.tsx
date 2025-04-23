import "./Brands.css";

const Certification = () => {
  const certificates = [
    { img: "c1.jpg", label: "l1.png" },
    { img: "c2.jpg", label: "l2.png" },
    { img: "c3.jpg", label: "l3.png" },
    { img: "c4.jpg", label: "l4.png" },
    { img: "c5.jpg", label: "l5.png" },
    { img: "c6.jpg", label: "l6.png" },
    { img: "c7.jpg", label: "l7.png" },
    { img: "c8.jpg", label: "l8.png" },
   
  ];

  return (
    <>
      <div className="relative mt-16 bg-black text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="/images/manoj-slider/3.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
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
              
      
               
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certification;
