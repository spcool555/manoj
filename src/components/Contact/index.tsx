import NewsLatterBox3 from "./ContactData";
import NewsLatterBox from "./NewsLatterBox";
import NewsLatterBox2 from "./OurProducts";

const Contact = () => {
  return (<>
    <section className="mx-auto  max-w-full min-w-[280px]">
    <div
      className="w-full bg-white   flex flex-col lg:flex-row  items-center  py-6 sm:py-9 md:py-11 lg:py-14  px-2  sm:px-4 md:px-8 xl:px-16">
      <img className="w-full lg:w-1/2 xl:w-full max-w-[400px] lg:order-2" src="https://iili.io/2ysFUen.png" alt=""/>
      <div className="text-center md:text-left">
        <h2
          className="text-2xl leading-[48px] md:text-5xl md:leading-[58px] lg:text-[30px] lg:leading-[70px] font-bold mb-4 md:mb-4">
 Empowering Industries with Precision Engineering
        </h2>
        <p className="text-xl leading-[27px]  font-normal sm:text-[24px] mb-8 md:mb-12">
        Explore premium-quality stainless steel valves, homogenizer spare parts, and expert machinery solutions crafted by <span style={{color:'#EA6321'}}> Manoj Engineering Consultant. </span>   Trusted across Nagpur and beyond for reliable products, competitive pricing, and on-time delivery. We also specialize in Milk Homogenizer Repairing Services, ensuring your operations never stop
        </p>
        <section id="contact" className="overflow-hidden">
      <div className="lg:pr-16">
        <div className="flex flex-wrap bg-white">
          <div className="w-full lg:w-4/12 xl:w-4/12">
            <NewsLatterBox3 />
          </div>
          <div className="w-full lg:w-4/12 xl:w-4/12  lg:border-l-2 md:border-l-2 border-gray-500">
            <NewsLatterBox2 />
          </div>
          <div className="w-full lg:w-4/12 xl:w-4/12 lg:border-l-2 md:border-l-2 border-gray-500">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
          </div>
    
    </div>
    
  </section>
   
    </>
  );
};

export default Contact;
