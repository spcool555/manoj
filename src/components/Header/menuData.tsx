const menuData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    submenu: [
      {
        title: "Grounding",
        links: [
          { title: "Solid Earthing Rods", path: "/products?category=SolidEarthingRods" },
          { title: "Earthing System", path: "/products?category=EarthingSystem" },
          { title: "Chemical Earthing Electrods", path: "/products?category=ChemicalEarthingElectrods" },
          { title: "Pipe Earthing Roads", path: "/products?category=PipeEarthingRoads" },
          { title: "Earth Station", path: "/products?category=EarthStation" },
          { title: "Lattice Grounding Mats", path: "/products?category=lgm" },
          { title: "Earth Plates", path: "/products?category=ep" },
          { title: "Earth Clamps", path: "/products?category=ec" },
          { title: "Earth Bars", path: "/products?category=eb" },
          { title: "Earth Inspection Housing", path: "/products?category=eih" },
          { title: "Low Resistance Earthing Compound ", path: "/products?category=lrec" },
          { title: "Busbars", path: "/products?category=busbars" },
          { title: "Copper Braided Flexible Links Shunts And Jumpers", path: "/products?category=cbflsaj" },
          { title: "Earth Accessories", path: "/products?category=ea" },
        ],
      },

      {
        title: "Lightning Protection",
        links: [
          { title: "Air Rods", path: "/products?category=airrods" },
          { title: "Lightning Protection Clamps", path: "/products?category=LightningProtectionClamps" },
        
        ],
      },
      {
        title: "Conductors",
        links: [
          { title: "Conductors", path: "/products?category=Conductors" },
         
        ],
      },
      {
        title: "Metals",
        links: [
          { title: "Copper", path: "products?category=Copper" },
          { title: "Aluminum", path: "products?category=Aluminum" },
          { title: "Brass", path: "products?category=Brass" },
          { title: "Stainless Steel", path: "products?category=StainlessSteel" },
          { title: "Phosphor Bronze", path: "products?category=PhosphorBronze" },
          { title: "Tinned Copper", path: "products?category=TinnedCopper" },
          { title: "Molybdenum", path: "products?category=Molybdenum" },
          { title: "Titanium", path: "products?category=Titanium" },
          { title: "Nickel", path: "products?category=Nickel" },
          { title: "Lead", path: "products?category=Lead" },
          { title: "Alloy Steel", path: "products?category=AlloySteel" },
          { title: "Hot Dip Galvanized Steel", path: "products?category=HotDipGalvanizedSteel" },
       
        
        ],
      },

      {
        title: "Cable Trays",
        links: [
          { title: " Perforated Cable Trays", path: "products?category=pct" },
          { title: " Ladder Type Cable Trays", path: "products?category=ltct" },
          { title: " Trunking Cable Trays", path: "products?category=tct" },
          { title: " Raceways Cable Tray", path: "products?category=rct" },
          { title: " Wire Mesh Cable Trays", path: "products?category=wmct" },
          { title: " Non-Mettalic Cable Trays", path: "products?category=nmct" },
       
        
        ],
      },
    
   

     
      // {
      //   title: "Surge Protection",
      //   links: [
      //     { title: " Mains Distribution Protection", path: "/ios" },
      //     { title: " Mains, Single Circuit Protection", path: "/android" },
      //     { title: "Data Line Protection", path: "/android" },
      //     { title: "Telecom Protection", path: "/android" },
      //     { title: "   Photovoltaic Protection", path: "/android" },
      //     { title: "   Equipotential Bonding", path: "/android" },
      //     { title: "  Low Voltage Type 2 ", path: "/android" },
      //     { title: " Countersunk Machine Screws", path: "/android" },
      //     { title: "  SPA Range", path: "/android" },
      //     { title: "     Mains Socket Strips", path: "/android" },
      //     { title: "  Accessories", path: "/android" },
      //   ],
      // },

      {
        title: "Exothermik Welding",
        links: [
          { title: "Bar to Bar", path: "products?category=btb" },
          { title: "Bar to Earth Rod", path: "products?category=bter" },
          { title: "Bar to Steel Surface", path: "products?category=btss" },
          { title: "Cable to Bar", path: "products?category=ctb" },
          { title: "Cable to Cable", path: "products?category=ctc" },
          { title: " Cable to Earth Rod", path: "products?category=cter" },
          { title: "  Cable to Rebar ", path: "products?category=ctr" },
          { title: " Cable to Steel Surface", path: "products?category=ctss" },
          { title: " Stud to Steel Surface ", path: "products?category=stss" },
          { title: "  Welding Powders  ", path: "products?category=wp" },
        ],
      },

     
      {
        title: "Fastners & Fixings",
        links: [
          { title: " Security Fixings", path: "products?category=sf" },
          { title: "Hexagon Head Set Screws", path: "/products?category=hhsc" },
          { title: "Hexagon Nuts", path: "products?category=hn" },
          { title: "Spring Washers", path: "products?category=sw" },
          { title: "Countersunk Wood Screw", path: "products?category=cws" },
          { title: "Tinned Copper Tapes", path: "products?category=tct" },
          { title: "Round Head Wood Screws ", path: "products?category=rhws" },
          { title: "Rail", path: "products?category=rail" },
          { title: "Plastic Wall Plugs", path: "products?category=pwp" },
        ],
      },
    ],
  },
  {
    title: "Services",
    submenu: [
      {
        title: "Earth Electrode System",
        path: "/services/earth-electrode-system",
        img: "https://images.unsplash.com/photo-1610028290816-5d937a395a49?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "To complement our highly successful material supply business, we also offer a complete Electrical Earthing Design Service.",
        links: [{ title: "Find Out More", path: "/services/earth-electrode-system" }],
      },
      {
        title: "Lightning Protection System",
        path: "/services/lightning-protection-system",
        img: "https://plus.unsplash.com/premium_photo-1664304434345-8b8e6b512532?q=80&w=1804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "To complement our highly successful material supply business, we also offer a complete Electrical Earthing Design Service.",
        links: [{ title: "Find Out More", path: "/services/lightning-protection-system" }],
      },
      {
        title: "Earthing Design System",
        path: "/services/earthing-design-system",
        img: "https://plus.unsplash.com/premium_photo-1677643917895-09dbeb21c834?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "We use industry-standard software such as CDEGS, ensuring safety, reliability, & full compliance with IEEE 80 & IEC 60364 standards.",

        links: [{ title: "Find Out More", path: "/services/earthing-design-system" }],
      },
      {
        title: "G78 Mobile Phone Base Stations",
        path: "/services/phone-base-stations",
        img: "https://plus.unsplash.com/premium_photo-1664693751181-41a6f6c347b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vYmlsZSUyMHBob25lJTIwYmFzZSUyMHN5c3llbXxlbnwwfHwwfHx8MA%3D%3D",
        desc: "We offers services for mobile phone base stations in accordance with G78 standard, delivering robust, compliant solutions tailored for telecom infrastructure.",
        links: [{ title: "Find Out More", path: "/services/phone-base-stations" }],
      },
    ],
  },

  {
    title: "Projects",
    path: "/Projects",
  },
  {
    title: "Certification",
    path: "/certification",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  // {
  //   title: "Enquiry",
  //   path: "/contact",
  // },
  {
    title: "About",
    path: "/about",
  },
  // {
  //   title: "Brands",
  //   path: "/d",
  // },


];

export default menuData;
