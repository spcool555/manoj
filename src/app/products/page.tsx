'use client'
import { Suspense } from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useRouter, useSearchParams } from 'next/navigation';


const SolidEarthingRods = [
  {
    id: 1,
    name: "Solid Copper Earth Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$10",
    imageUrl: "/images/products/1.jpg",
  },
  {
    id: 2,
    name: "Solid Copper Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$12",
    imageUrl: "/images/products/2.jpg",
  },
  {
    id: 3,
    name: "Solid Copper Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/3.png",
  },
  {
    id: 4,
    name: "Solid Copper Earth Rod Welded Busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/4.png",
    category: "earthrod",
  },
  {
    id: 5,
    name: "Solid Copper Earth Rods  ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
    category: "earthrod",
  },
  {
    id: 6,
    name: "Hot Dip Galvanized Solid Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/6.jpg",
    category: "earthrod",
  },
  {
    id: 7,
    name: "Hot Dip Galvanized Solid Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
    category: "earthrod",
  },
  {
    id: 8,
    name: "Hot Dip Galvanized Solid Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/8.jpg",
    category: "earthrod",
  },
  {
    id: 9,
    name: "Hot Dip Galvanized Solid Earth Rod welded Busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod",
  },
  {
    id: 10,
    name: "Galvanized Steel Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod",
  },
  {
    id: 11,
    name: "Copper Bonded Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod",
  },
  {
    id: 12,
    name: "Copper Bonded Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod",
  },
  {
    id: 13,
    name: "Copper Bonded Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/13.jpg",
    category: "earthrod",
  },
  {
    id: 14,
    name: "Copper Bonded Earth Rod welded busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/14.jpg",
    category: "earthrod",
  },
  {
    id: 15,
    name: "Copper bond Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
    category: "earthrod",
  },
  {
    id: 16,
    name: "Stainless Steel Solid Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/16.jpg",
    category: "earthrod",
  },
  {
    id: 17,
    name: "Stainless Steel Solid Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/17.jpg",
    category: "earthrod",
  },
  {
    id: 18,
    name: "Stainless Steel Solid Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/18.jpg",
    category: "earthrod",
  },
  {
    id: 19,
    name: "Stainless Steel Solid Earth Rod Welded Busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/19.png",
    category: "earthrod",
  },
  {
    id: 20,
    name: "Stainless Steel Earth Rods ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/20.png",
    category: "earthrod",
  },
  {
    id: 21,
    name: "Molybdenum Stainless Steel Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/21.png",
    category: "earthrod",
  },
  {
    id: 22,
    name: "Tinned Copper Solid Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/22.png",
    category: "earthrod",
  },
  {
    id: 23,
    name: "Tinned Copper Solid Earth Rods ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/23.png",
    category: "earthrod",
  },
  {
    id: 24,
    name: "Tinned Copper Solid Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/24.png",
    category: "earthrod",
  },
  {
    id: 25,
    name: "Brass Solid Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/25.png",
    category: "earthrod",
  },
  {
    id: 26,
    name: "Brass Solid Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
    category: "earthrod",
  },
  {
    id: 27,
    name: "Brass Solid Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
    category: "earthrod",
  },
  {
    id: 28,
    name: "Brass Solid Earth Rod Welded Busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
    category: "earthrod",
  },
  {
    id: 29,
    name: "Graphite Solid Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/29.jpg",
    category: "earthrod",
  },
  {
    id: 30,
    name: "Tinned Copper Solid Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
    category: "earthrod",
  },
  {
    id: 31,
    name: "Graphite Solid Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
    category: "earthrod",
  },
  {
    id: 32,
    name: "Graphite Solid Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
    category: "earthrod",
  },
  {
    id: 33,
    name: "Graphite Solid Earth Rod Welded Busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
    category: "earthrod",
  },
  {
    id: 34,
    name: "Angular Earth Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/34.jpg",
    category: "earthrod",
  },
  {
    id: 35,
    name: "Spike Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
    category: "earthrod",
  },
  {
    id: 36,
    name: "Zinc Earth Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/36.png",
    category: "earthrod",
  },
  {
    id: 37,
    name: "Nickel Plated Solid Copper Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
    category: "earthrod",
  },
  {
    id: 38,
    name: "Coupling Dowels",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/38.jpg",
    category: "earthrod",
  },
  {
    id: 39,
    name: "Driving Heads",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/39.jpg",
    category: "earthrod",
  },
  {
    id: 40,
    name: "Driving Spikes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/40.jpg",
    category: "earthrod",
  },
  {
    id: 41,
    name: "Cross Profile Galvanised Steel Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
    category: "earthrod",
  },
  {
    id: 42,
    name: "Nickel Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
    category: "earthrod",
  },
  {
    id: 43,
    name: "Ion Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/43.jpg",
    category: "earthrod",
  },
  {
    id: 44,
    name: "Nickel Earth Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/44.jpg",
    category: "earthrod",
  },
  {
    id: 45,
    name: "Copper Clad Steel Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
    category: "earthrod",
  },
  {
    id: 46,
    name: "Molybdenum Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/46.jpg",
    category: "earthrod",
  },
];

const EarthingSystem = [
  {
    id: 47,
    name: "Tripolar Earthing System",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$12",
    imageUrl: "/images/products/47.png",
  },
  {
    id: 48,
    name: "Tripod Earthing System ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$12",
    imageUrl: "/images/products/",
  },
  {
    id: 49,
    name: "Anolyte Grounding System",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$12",
    imageUrl: "/images/products/49.jpeg",
  },
];

const ChemicalEarthingElectrods = [
  {
    id: 50,
    name: "Hot Dip Galvanized Earthing Electrode ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$15",
    imageUrl: "/images/products/",
  },
  {
    id: 51,
    name: "Zinc Coated Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 52,
    name: "Alloy Coated Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 53,
    name: "Copper Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 54,
    name: "Copper Bonded Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 55,
    name: "Gi Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 56,
    name: "Stainless Steel Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/56.jpg",
  },
  {
    id: 57,
    name: "Copper Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 58,
    name: "Brass Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 59,
    name: "Pipe in Strip Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 60,
    name: "Pipe in Pipe Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/60.jpeg",
  },
  {
    id: 61,
    name: "Heavy Duty Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 62,
    name: "Ion Electrolytic Copper Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/62.jpg",
  },
  {
    id: 63,
    name: "Ion Electrolytic Copper Clad Steel Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/63.jpg",
  },
  {
    id: 64,
    name: "Ion Electrolytic Stainless Steel Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/64.jpg",
  },
  {
    id: 65,
    name: "Ion Electrolytic Hot Dip GI Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/65.jpg",
  },
  {
    id: 66,
    name: "Chemical ground electrodes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
];

const PipeEarthingRoads = [
  {
    id: 67,
    name: "CI Earthing Pipe Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/67.jpg",
  },
  {
    id: 68,
    name: "CI Earthing Pipe with GI Clamp ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/68.jpg",
  },
  {
    id: 69,
    name: "CI Earthing Pipe with Flange",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/69.jpeg",
  },
  {
    id: 70,
    name: "CI Pipe With GI Clamp Mesh Funnel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/70.jpg",
  },
  {
    id: 71,
    name: "GI Earthing Pipe perforated",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/71.jpeg",
  },
  {
    id: 72,
    name: "Hot Dip Galvanized Earthing Pipe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 73,
    name: "Copper Pipe Earthing Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
];

const EarthStation = [
  {
    id: 74,
    name: "GI Earth Station  ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 75,
    name: "Copper Plate GI Pipe Earth Station ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 76,
    name: "Hot Dip GI Earth Station ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 77,
    name: "Copper Bonded Earth Station ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 78,
    name: "Copper Plate CI Pipe Earth Station ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 79,
    name: "Gi Plate Copper Pipe Earth Station",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  //   {
  //     id: 79, //79 A
  //     name: "Brass Plate GI Pipe Earth Station",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     price: "$14",
  //  imageUrl: "/images/products/"
  //   },
  //   {
  //     id: 79, //79 B
  //     name: "Earth Grid System ",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     price: "$14",
  //  imageUrl: "/images/products/"
  //   },
  //   {
  //     id: 79, //79 C
  //     name: "Plate Earthing System ",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     price: "$14",
  //  imageUrl: "/images/products/"
  //   },
  //   {
  //     id: 79, //79 D
  //     name: "Pipe Earthing System",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     price: "$14",
  //  imageUrl: "/images/products/"
  //   },
];
const lgm = [
  {
    id: 80,
    name: "Solid Copper Lattice Mats ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/80.jpg",
  },
  {
    id: 81,
    name: "Stainless Steel Lattice Mats",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/81.jpg",
  },
  {
    id: 82,
    name: "Aluminium Lattice Mats",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/82.jpg",
  },
  {
    id: 83,
    name: "Brass Lattice Mats",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 84,
    name: "Tinned Copper Lattice Mats",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/84.jpg",
  },
  {
    id: 85,
    name: "GI Lattice Mats",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/85.png",
  },
  {
    id: 86,
    name: "Hot Dip Galvanized Lattice Mats",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/86.png",
  },
  // {
  //   id: 86  , //86a
  //   name: "Copper Bonded Lattice Mats",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //  imageUrl: "/images/products/"
  // },
];
const ep = [
  {
    id: 87,
    name: "Solid Copper Earth Plates",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/87.png",
  },
  {
    id: 88,
    name: "Hot Dip GI Earth Plates",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/88.png",
  },
  {
    id: 89,
    name: "GI Earth Plates",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/89.jpg",
  },
  {
    id: 90,
    name: "Stainless Steel Earth Plates",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/90.png",
  },
  {
    id: 91,
    name: "Copper Bonded Earth Plates",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/91.jpg",
  },
  {
    id: 92,
    name: "Tinned Copper Earth Plates",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 93,
    name: "Brass Earth Plates",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/93.png",
  },
  // {
  //   id: 93A,
  //   name: "Graphite Earth Plate ",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/93A.png",
  // },
];
const ec = [
  {
    id: 94,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/94.PNG",
  },
  {
    id: 95,
    name: "U Bolt Clamps - Double Plate Type for Vertical Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/95.jpg",
  },
  {
    id: 96,
    name: "U Bolt Clamps - Double Plate Type for vertical Stranded Cables",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 97,
    name: "3-Way ‘U’ Bolt Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/97.jpg",
  },
  {
    id: 98,
    name: "Earth Rod to Tape ‘A’ Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/98.png",
  },
  {
    id: 99,
    name: "Earth Rod to Cable G Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/99.png",
  },
  {
    id: 100,
    name: "Split Connector Clamps for use with copper bond Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 101,
    name: "Multi-Purpose Rod to Cable & Tape Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 102,
    name: "Rebar Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 103,
    name: "Pipe Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 104,
    name: "‘U’ Bolt Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 105,
    name: "Tower Earth Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 106,
    name: "Parallel Groove Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 107,
    name: "Split Bolt Connectors",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 108,
    name: "Split Connector Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/108.jpg",
  },
  {
    id: 109,
    name: "Earth Bonding Points",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 110,
    name: "Coupler ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/110.png",
  },
];
const eb = [
  {
    id: 113,
    name: "Single Disconnecting Link ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 114,
    name: "Disconnecting Link",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 115,
    name: "Tinned Earth bars Single Disconnecting Link",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/115.jpg",
  },
  {
    id: 116,
    name: "Earth Bars with Double Disconnecting Links",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/116.jpg",
  },
  {
    id: 117,
    name: "Tinned Earth Bars with Double Disconnecting Links",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/117.jpg",
  },
  {
    id: 118,
    name: "Twin Disconnecting Link ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/118.jpg",
  },
  {
    id: 119,
    name: "Telecommunication Grounding Bars  ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/119.jpg",
  },
  {
    id: 120,
    name: "Telecommunication Main Earth Bar ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/120.jpg",
  },
  {
    id: 121,
    name: "Universal Grounding Bar ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/121.jpg",
  },
  {
    id: 122,
    name: "Earth Bars",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/122.jpg",
  },
  {
    id: 123,
    name: "Tinned Copper Earth Bars",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/123.jpg",
  },
  {
    id: 124,
    name: "Inspection Housing Earthbar ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/124.jpg",
  },
  {
    id: 125,
    name: "Internal Grounding Bar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/125.PNG",
  },
  {
    id: 126,
    name: "Telecommunication Earthbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/126.jpg",
  },
  {
    id: 127,
    name: "Telecom Earth Bars",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/127.jpg",
  },
  {
    id: 128,
    name: "Brass Earth Bar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/128.jpg",
  },
  {
    id: 129,
    name: "Aluminium Earth bar ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/129.jpg",
  },
  // {
  //   id: 129A,
  //   name: "Stainless Steel Earth Bar",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/129A.jpg"
  // },
];
const eih = [
  {
    id: 130,
    name: "Heavy Duty Earth Inspection Housing ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/130.jpg",
  },
  {
    id: 131,
    name: "Light Duty Earth Inspection Housing ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 132,
    name: "Concrete Earth Inspection Housing ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/132.jpg",
  },
  {
    id: 133,
    name: "PVC Earth Inspection Chamber ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/133.png",
  },
  {
    id: 134,
    name: "GI Earth Inspection Chamber ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 135,
    name: "CI Earth Inspection Chamber ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/135.png",
  },
  {
    id: 136,
    name: "DI Earth Inspection Chamber",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/136.jpg",
  },
];
const lrec = [
  {
    id: 137,
    name: "Low-Resistance Earthing Compound ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 138,
    name: "Bentonite Moisture Retaining Clay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 139,
    name: "Ground Enhancement Material GEM ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 140,
    name: "Lores Powerfill Grounding Material ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/"
  },
];
const busbars = [
  {
    id: 140,
    name: "Bare Copper busbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/140.jpg",
  },
  {
    id: 141,
    name: "Aluminium busbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/141.png",
  },
  {
    id: 142,
    name: "Stainless steel busbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/142.jpg",
  },
  {
    id: 143,
    name: "Hot Dipped GI Busbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/143.jpg",
  },
  {
    id: 144,
    name: "Brass Busbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 145,
    name: "Tinned Copper busbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/145.jpg",
  },
  {
    id: 146,
    name: "PVC Coated Copper Busbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/146.jpg",
  },
  {
    id: 147,
    name: "Hard drawn Copper Busbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/147.jpg",
  },
  {
    id: 148,
    name: "Molybdenum Busbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 149,
    name: "Flexible Busbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 150,
    name: "Nickel Plated Copper Busbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/150.jpg",
  },
  {
    id: 151,
    name: "GI Busbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/151.jpg",
  },
  {
    id: 152,
    name: "Hot Dip Galvanized Busbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 153,
    name: "Inspection Housing Earth Bars",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/153.jpg",
  },
  {
    id: 154,
    name: "Fabricated Busbar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  // {
  //   id: 154A,
  //   name: "Copper Busbar Tapping Hole",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/"
  // },
  // {
  //   id: 154B,
  //   name: "Tinned Copper Busbar Tapping Hole",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/"
  // },
];
const cbflsaj = [
  {
    id: 155,
    name: "Copper Braided Earth Jumper",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 156,
    name: "Tinned Copper Earth Jumper",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/156.jpeg",
  },
  {
    id: 157,
    name: "Copper Braids",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/157.jpg",
  },
  {
    id: 158,
    name: "Tinned Copper Braids",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/158.jpg",
  },
  {
    id: 159,
    name: "Bare Copper Flat Braids",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 160,
    name: "Tinned Copper Flat Braids",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 161,
    name: "Flexible Copper Braid Bonds",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 162,
    name: "Bare Copper Round Braids",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 163,
    name: "Tinned Copper Round Braids",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 164,
    name: "Flexible Copper Braid ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 165,
    name: "Tinned Flat Braid ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 166,
    name: "Round Braid",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 167,
    name: "Flexible braid bond ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 168,
    name: "Flexible Stranded Ropes ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 169,
    name: "Flexible Earth Straps ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 170,
    name: "Copper Jumper  Laminated ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 171,
    name: "Flexible Copper Shunts ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 172,
    name: "Flexible Copper Jumper ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 173,
    name: "Flexible Copper Connector Laminated  ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 174,
    name: "Laminated Copper Jumper ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 175,
    name: "Flexible Flat Copper Braids",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  // {
  //   id: 175A,
  //   name: "PVC Insulated Flexible Earth Jumper ",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/"
  // },
  // {
  //   id: 175B,
  //   name: "Tin Copper Rope",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/"
  // },
];
const ea = [
  {
    id: 176,
    name: "Earth Bosses (GI/SS/HDG/MS)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 177,
    name: "C’ Crimp Connectors",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  // {
  //   id: 177A,
  //   name: "Tin Copper C’ Crimp Connectors",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/"
  // },
];

const airrods = [
  {
    id: 178,
    name: "Taper Pointed Air Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 179,
    name: "Aluminum Air Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 180,
    name: "Stainless Steel Air Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 181,
    name: "Multi-Point",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 182,
    name: "Air Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 183,
    name: "Lightning Mast",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 184,
    name: "Early Streamer Emission Terminal",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 185,
    name: "Early Streamer Emission lightning Protection System ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 186,
    name: "ESE Lightning Protection Terminal ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 187,
    name: "Conventional Air Terminals",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 188,
    name: "Finial Lightning Arrester ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 189,
    name: "Copper Lightning Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 190,
    name: "Galvanized Steel Lightning Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 191,
    name: "Tinned Copper Lightning Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 192,
    name: "Aluminum Lightning Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 193,
    name: "Stainless Steel Lightning Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
];
const LightningProtectionClamps = [
  {
    id: 194,
    name: "Light Duty Air Rod Saddles",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 195,
    name: "Air Rod Ridge Saddles",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 196,
    name: "Flat Air Rod Saddles",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 197,
    name: "Side Mounting Air Rod Brackets",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 198,
    name: "Rod to Tape Couplings",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 199,
    name: "Metallic DC Clips",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 200,
    name: "Tape Clips",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 201,
    name: "Square Tape Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 202,
    name: "Oblong Junction Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 203,
    name: "Plate Type Test Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 204,
    name: "Screw Down Test Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 205,
    name: "Bimetallic Connectors",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 206,
    name: "‘B’ Bonds",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 207,
    name: "Multi-Purpose Air Rod Saddles",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 208,
    name: "One Hole Conductor Clips",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 209,
    name: "Metallic Conductor Clips",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 210,
    name: "‘T’ Connector Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 211,
    name: "‘MV’ Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 212,
    name: "Interface Test Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 213,
    name: "Solid Circular to Tape Connectors",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 214,
    name: "Metalwork Bonding Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 215,
    name: "Tower Earth Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 216,
    name: "Circular Conductor Shoes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 217,
    name: "Air Rod Cable Saddles",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 218,
    name: "Strike Pads",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 219,
    name: "One Hole Cable Clips",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 220,
    name: "Metallic Cable Clips",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 221,
    name: "Square Cable Clamps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 222,
    name: "Universal Cable Connectors",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 223,
    name: "Interceptor Plates",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 224,
    name: "Glazing Bar Holdfasts",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 225,
    name: "Back Plate Holdfasts",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/225.jpg",
  },
  {
    id: 226,
    name: "Multi-Purpose Air Rod Saddles",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 227,
    name: "One Hole Conductor Clips",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 228,
    name: "Metallic Conductor Clips",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 229,
    name: "Non-Metallic DC Clip",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
];
const Conductors = [
  // {
  //   id: 230B,
  //   name: "Tinned Copper Circular Conductor ",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/230B.jpg"
  // },
  // {
  //   id: 230A,
  //   name: "Copper earth wire ",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/230A.jpg"
  // },
  {
    id: 230,
    name: "Bare Copper Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/230.jpg",
  },
  {
    id: 231,
    name: "PVC Covered Copper Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/231.jpeg",
  },
  {
    id: 232,
    name: "Green & Yellow PVC Insulated Copper Tape",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/232.jpg",
  },
  {
    id: 233,
    name: "Lead Covered Copper Tape",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/233.jpg",
  },
  {
    id: 234,
    name: "Tinned Copper Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 235,
    name: "Bare Hard Drawn Copper Bars",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/235.jpg",
  },
  {
    id: 236,
    name: "Tinned Hard Drawn Copper Bars",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 237,
    name: "Bare Aluminium Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/237.jpg",
  },
  {
    id: 238,
    name: "PVC Covered Aluminium Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/238.jpeg",
  },
  {
    id: 239,
    name: "Bare Solid Circular Copper Conductor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 240,
    name: "PVC Covered Solid Circular Copper Conductors",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/240.jpg",
  },
  {
    id: 241,
    name: "Bare Solid Circular Aluminium Conductor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/241.jpg",
  },
  {
    id: 242,
    name: "PVC Covered Solid Circular Aluminium Conductors",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/242.jpg",
  },
  {
    id: 243,
    name: "Bare Stranded Copper Conductors Green & Yellow PVC Insulated",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/243.png",
  },
  {
    id: 244,
    name: "Stranded Copper Conductors",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/244.jpg",
  },
  {
    id: 245,
    name: "Tinned Stranded Copper Conductors",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/245.jpg",
  },
  {
    id: 246,
    name: "Lead Covered Stranded Copper Conductors",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 247,
    name: "Bare stranded copper conductor ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/247.png",
  },
  // {
  //   id: 247A,
  //   name: "Hot dip galvanized strip ",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/247A.png"
  // },
  // {
  //   id: 247B,
  //   name: "Hot Dip galvanized Circular Conductor",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/247B.jpg"
  // },
  // {
  //   id: 247C,
  //   name: "Copper Bonded Circular Conductor",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/"
  // },
  // {
  //   id: 247D,
  //   name: "Gi Conductor Tape ",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/"
  // },
  // {
  //   id: 247E,
  //   name: "Hot Dip Galvanized Steel Tape ",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/"
  // },
  // {
  //   id: 247F,
  //   name: "GI Earthing Conductor",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/"
  // },
  // {
  //   id: 247G,
  //   name: "Stainless Steel Earthing Strip ",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/247G.jpg"
  // },
  // {
  //   id: 247H,
  //   name: "Aluminum Earthing Strip ",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/247H.png"
  // },
  // {
  //   id: 247I,
  //   name: "Tin Copper Earth Strip ",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/247I.png"
  // },
  // {
  //   id: 247J,
  //   name: "Stainless Steel Circular Conductor",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/247J.jpg"
  // },
  // {
  //   id: 247K,
  //   name: "Hot Dip Galvanized Earth Flat ",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/247K.jpeg"
  // },
  // {
  //   id: 247L,
  //   name: "Hot Dip Galvanized Earth Strip ",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/247L.jpeg"
  // },
];
const Metals = [
  {
    id: 248,
    name: "STAINLESS STEEL SOLID ROUND RODS ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/248.jpg",
  },
  {
    id: 249,
    name: "STAINLESS STEEL PIPES",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 250,
    name: "STAINLESS STEEL FLAT BAR ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/250.jpg",
  },
  {
    id: 251,
    name: "STAINLESS STEEL HEX BAR",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/251.jpg",
  },
  {
    id: 252,
    name: "STAINLESS STEEL SQUARE PIPE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/252.jpg",
  },
  {
    id: 253,
    name: "Stainless Steel Sheet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/253.jpg",
  },
  {
    id: 254,
    name: "COPPER SOLID ROUND RODS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/254.jpg",
  },
  {
    id: 255,
    name: "COPPER FLAT BAR",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/255.jpg",
  },
  {
    id: 256,
    name: "COPPER STRIPS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/256.jpg",
  },
  {
    id: 257,
    name: "COPPER PIPE TUBES",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/257.jpg",
  },
  {
    id: 258,
    name: "COPPER WIRE ROD",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/258.jpg",
  },
  {
    id: 259,
    name: "COPPER SQUARE BAR",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/259.jpg",
  },
  {
    id: 260,
    name: "COPPER Electrolytic GRADE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 261,
    name: "COPPER COMMERCIAL GRADE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 262,
    name: "ANNEALED COPPER",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 263,
    name: "COPPER ETP GRADE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 264,
    name: "BERYLLIUM COPPER",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/264.png",
  },
  {
    id: 265,
    name: "COPPER SHEET",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/265.jpg",
  },
  {
    id: 266,
    name: "Aluminium Flat Bar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/266.jpg",
  },
  {
    id: 267,
    name: "Aluminium Solid Round Bar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/267.jpg",
  },
  {
    id: 268,
    name: "Aluminium Square Pipe ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/268.jpg",
  },
  {
    id: 269,
    name: "Brass Round Bar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/269.jpg",
  },
  {
    id: 270,
    name: "Brass Sheet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/270.jpg",
  },
  {
    id: 271,
    name: "Brass Strip",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/271.jpg",
  },
  // {
  //   id: 271A,
  //   name: "Tinned Copper Flat Bar  ",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/271A.png",
  // },
  // {
  //   id: 271B,
  //   name: "Copper Bonded Flat Bar",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/271B.jpg",
  // },
  // {
  //   id: 271C,
  //   name: "Hastelloy Flat bar  ",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/271 C.png",
  // },
  // {
  //   id: 271D,
  //   name: "",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/271D.png",
  // },
];
const pct = [
  {
    id: 271,
    name: "Stainless Steel Perforated Cable Trays",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/271.jpg",
  },
  {
    id: 274,
    name: "GI Perforated Cable Trays",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/274.jpeg",
  },
  {
    id: 275,
    name: "Large Span Perforated Cable Trays",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/275.jpg",
  },
  {
    id: 276,
    name: "Hot Dip Galvanized Perforated Cable Trays",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 278,
    name: "Pre-Galvanized Perforated Cable Trays",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 279,
    name: "Perforated Cable Trays Powder Coated",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/279.jpg",
  },
  {
    id: 280,
    name: "Perforated Cable Trays Paint Coated",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/280.jpg",
  },
  {
    id: 281,
    name: "Perforated Cable Trays VCI Coated",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/281.jpg",
  },
  // {
  //   id: 284A,
  //   name: "Aluminium Perforated Cable Trays ",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/284A.jpg",
  // },
];
const ltct = [
  {
    id: 285,
    name: "Bolted Ladder Cable Trays",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/285.jpg",
  },
  {
    id: 287,
    name: "GI Ladder Cable Trays",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/287.jpg",
  },
  {
    id: 288,
    name: "Hot Dip Ladder Cable Trays",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/288.jpg",
  },
  {
    id: 292,
    name: "Stainless Steel Ladder Cable Trays",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/292.jpg",
  },
  {
    id: 293,
    name: "Pre-Galvanized Ladder Cable Trays",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 294,
    name: "Ladder Cable Trays Powder Coated ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/294.jpg",
  },
  {
    id: 296,
    name: "Ladder Cable Trays VCI Coated ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/296.jpg",
  },
  // {
  //   id: 298A,
  //   name: "Stainless Steel Ladder Cable Trays",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/298B.PNG",
  // },
];
const tct = [
  {
    id: 301,
    name: "Hot Dip Galvanized Trunking Cable Trays",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/301.jpg",
  },
  {
    id: 302,
    name: "GI Trunking Cable Trays",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
];
const rct = [
  {
    id: 305,
    name: "GI Raceways Cable Tray",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/305.png",
  },
  {
    id: 306,
    name: "Hot Dip Galvanized Raceways Cable Tray",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/306.jpg",
  },
  {
    id: 310,
    name: "SS316 Raceways Cable Tray",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/310.jpg",
  },
  // {
  //   id: 310A,
  //   name: "Powder Coated Raceways",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   price: "$14",
  //   imageUrl: "/images/products/310A.jpg",
  // },
];
const wmct = [
  {
    id: 311,
    name: "Hot Dip Wire Mesh Cable Trays",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/311.jpg",
  },
  {
    id: 312,
    name: "Wire Mesh Cable Trays Powder Coated",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/312.jpg",
  },
  {
    id: 313,
    name: "SS316 Wire Mesh Cable Trays",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/313.jpg",
  },
];
const nmct = [
  {
    id: 15,
    name: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png",
  },
];
const SOLIDBOTTOMCABLETRAYS = [
  {
    id: 322,
    name: "Slotted Channel ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/322.jpg",
  },
  {
    id: 323,
    name: "Unistrut Channel ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/323.jpg",
  },
  {
    id: 325,
    name: "Threaded Rods ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/",
  },
  {
    id: 326,
    name: "Double Unistrut Channel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/326.jpg",
  },
  {
    id: 327,
    name: "Slotted Angle",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/327.jpg",
  },
  {
    id: 328,
    name: "Strut Channel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/328.jpg",
  },
  {
    id: 329,
    name: "Strut Channel Powder Coated ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/329.png",
  },
];

const Products = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  let products = [];

  if (category === 'SolidEarthingRods') {
    products = SolidEarthingRods;
  } else if (category === 'EarthingSystem') {
    products = EarthingSystem;
  } else if (category === 'ChemicalEarthingElectrods') {
    products = ChemicalEarthingElectrods;
  } else if (category === 'PipeEarthingRoads') {
    products = PipeEarthingRoads;
  } else if (category === 'EarthStation') {
    products = EarthStation;
  }else if (category === 'lgm') {
    products = lgm;
  }else if (category === 'ep') {
    products = ep;
  }else if (category === 'ec') {
    products = ec;
  }else if (category === 'eb') {
    products = eb;
  }
  else if (category === 'eih') {
    products = eih;
  }
  else if (category === 'lrec') {
    products = lrec;
  }
  else if (category === 'busbars') {
    products = busbars;
  }
  else if (category === 'cbflsaj') {
    products = cbflsaj;
  }
  else if (category === 'ea') {
    products = ea;
  }
  else if (category === 'airrods') {
    products = airrods;
  }
  
  else if (category === 'LightningProtectionClamps') {
    products = LightningProtectionClamps;
  }
  else if (category === 'Conductors') {
    products = Conductors;
  }
  else if (category === 'Metals') {
    products = Metals;
  }
  else if (category === 'pct') {
    products = pct;
  }
  else if (category === 'ltct') {
    products = ltct;
  }
  else if (category === 'tct') {
    products = tct;
  }
  else if (category === 'rct') {
    products = rct;
  }
  else if (category === 'wmct') {
    products = wmct;
  }
  else if (category === 'nmct') {
    products = nmct;
  }


  const handleProductClick = (productId) => {
    router.push(`/singleProduct?category=${category}&id=${productId}`);
  };

  const ProductCard = ({ product }) => (
    <>  <a 
    onClick={() => handleProductClick(product.id)}><div
    className="w-[310px] h-[410px] mx-auto mt-[20px] relative flex flex-col justify-between bg-white rounded-lg shadow-[0px_0px_12px_0px_rgba(32,181,38,0.32)] border border-black hover:scale-105 transform transition-transform duration-300 ease-in-out ">
    {/* <img src="https://iili.io/3FqLBsI.png" alt=""/> */}
    {/* <img src={product.imageUrl} alt={product.name} className='object-cover border border-[#FF8A00] rounded-lg'/> */}
    <div>
    <img src={product.imageUrl} alt={product.name} className='object-contain max-h-80 rounded-lg'/>

    </div>
    {/* <img src={product.imageUrl} alt={product.name}/> */}
   
    <div className="p-4 relative flex-col justify-end items-start flex">
      <h3 className=" text-black text-lg font-normal font-['Poppins'] leading-[21px] lg:mr-6">{product.name}</h3>
      {/* <span className="mb-[6px] text-[#191919] text-base font-medium font-['Poppins'] leading-normal">$14.99</span> */}
      <svg
        width="60" height="13" viewBox="0 0 60 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-2'>
        <path
          d="M6.20672 9.44066L8.5711 10.9384C8.87335 11.1297 9.24835 10.845 9.15872 10.4922L8.47585 7.80529C8.45656 7.73044 8.45878 7.65168 8.48227 7.57804C8.50575 7.50441 8.54954 7.43889 8.6086 7.38904L10.7288 5.62466C11.0071 5.39291 10.8638 4.93054 10.5057 4.90729L7.7371 4.72729C7.66255 4.722 7.59105 4.69565 7.5309 4.6513C7.47075 4.60695 7.42444 4.54643 7.39735 4.47679L6.3646 1.87654C6.33648 1.80264 6.28656 1.73903 6.22146 1.69416C6.15636 1.64928 6.07916 1.62524 6.0001 1.62524C5.92103 1.62524 5.84383 1.64928 5.77873 1.69416C5.71364 1.73903 5.66372 1.80264 5.6356 1.87654L4.60285 4.47679C4.57581 4.5465 4.52952 4.6071 4.46937 4.65152C4.40922 4.69594 4.33768 4.72234 4.2631 4.72766L1.49447 4.90766C1.13672 4.93054 0.992723 5.39291 1.27135 5.62466L3.3916 7.38941C3.45059 7.43924 3.49434 7.50469 3.51782 7.57825C3.5413 7.65181 3.54356 7.7305 3.52435 7.80529L2.89135 10.2972C2.78372 10.7205 3.2341 11.0622 3.59635 10.8323L5.79385 9.44066C5.85561 9.4014 5.92728 9.38054 6.00047 9.38054C6.07366 9.38054 6.14533 9.4014 6.2071 9.44066H6.20672Z"
          fill="#FF8A00"></path>
        <path
          d="M18.2067 9.44066L20.5711 10.9384C20.8733 11.1297 21.2483 10.845 21.1587 10.4922L20.4758 7.80529C20.4566 7.73044 20.4588 7.65168 20.4823 7.57804C20.5057 7.50441 20.5495 7.43889 20.6086 7.38904L22.7288 5.62466C23.0071 5.39291 22.8638 4.93054 22.5057 4.90729L19.7371 4.72729C19.6626 4.722 19.591 4.69565 19.5309 4.6513C19.4708 4.60695 19.4244 4.54643 19.3973 4.47679L18.3646 1.87654C18.3365 1.80264 18.2866 1.73903 18.2215 1.69416C18.1564 1.64928 18.0792 1.62524 18.0001 1.62524C17.921 1.62524 17.8438 1.64928 17.7787 1.69416C17.7136 1.73903 17.6637 1.80264 17.6356 1.87654L16.6028 4.47679C16.5758 4.5465 16.5295 4.6071 16.4694 4.65152C16.4092 4.69594 16.3377 4.72234 16.2631 4.72766L13.4945 4.90766C13.1367 4.93054 12.9927 5.39291 13.2713 5.62466L15.3916 7.38941C15.4506 7.43924 15.4943 7.50469 15.5178 7.57825C15.5413 7.65181 15.5436 7.7305 15.5243 7.80529L14.8913 10.2972C14.7837 10.7205 15.2341 11.0622 15.5963 10.8323L17.7938 9.44066C17.8556 9.4014 17.9273 9.38054 18.0005 9.38054C18.0737 9.38054 18.1453 9.4014 18.2071 9.44066H18.2067Z"
          fill="#FF8A00"></path>
        <path
          d="M30.2067 9.44066L32.5711 10.9384C32.8733 11.1297 33.2483 10.845 33.1587 10.4922L32.4758 7.80529C32.4566 7.73044 32.4588 7.65168 32.4823 7.57804C32.5057 7.50441 32.5495 7.43889 32.6086 7.38904L34.7288 5.62466C35.0071 5.39291 34.8638 4.93054 34.5057 4.90729L31.7371 4.72729C31.6626 4.722 31.591 4.69565 31.5309 4.6513C31.4708 4.60695 31.4244 4.54643 31.3973 4.47679L30.3646 1.87654C30.3365 1.80264 30.2866 1.73903 30.2215 1.69416C30.1564 1.64928 30.0792 1.62524 30.0001 1.62524C29.921 1.62524 29.8438 1.64928 29.7787 1.69416C29.7136 1.73903 29.6637 1.80264 29.6356 1.87654L28.6028 4.47679C28.5758 4.5465 28.5295 4.6071 28.4694 4.65152C28.4092 4.69594 28.3377 4.72234 28.2631 4.72766L25.4945 4.90766C25.1367 4.93054 24.9927 5.39291 25.2713 5.62466L27.3916 7.38941C27.4506 7.43924 27.4943 7.50469 27.5178 7.57825C27.5413 7.65181 27.5436 7.7305 27.5243 7.80529L26.8913 10.2972C26.7837 10.7205 27.2341 11.0622 27.5963 10.8323L29.7938 9.44066C29.8556 9.4014 29.9273 9.38054 30.0005 9.38054C30.0737 9.38054 30.1453 9.4014 30.2071 9.44066H30.2067Z"
          fill="#FF8A00"></path>
        <path
          d="M42.2067 9.44066L44.5711 10.9384C44.8733 11.1297 45.2483 10.845 45.1587 10.4922L44.4758 7.80529C44.4566 7.73044 44.4588 7.65168 44.4823 7.57804C44.5057 7.50441 44.5495 7.43889 44.6086 7.38904L46.7288 5.62466C47.0071 5.39291 46.8638 4.93054 46.5057 4.90729L43.7371 4.72729C43.6626 4.722 43.591 4.69565 43.5309 4.6513C43.4708 4.60695 43.4244 4.54643 43.3973 4.47679L42.3646 1.87654C42.3365 1.80264 42.2866 1.73903 42.2215 1.69416C42.1564 1.64928 42.0792 1.62524 42.0001 1.62524C41.921 1.62524 41.8438 1.64928 41.7787 1.69416C41.7136 1.73903 41.6637 1.80264 41.6356 1.87654L40.6028 4.47679C40.5758 4.5465 40.5295 4.6071 40.4694 4.65152C40.4092 4.69594 40.3377 4.72234 40.2631 4.72766L37.4945 4.90766C37.1367 4.93054 36.9927 5.39291 37.2713 5.62466L39.3916 7.38941C39.4506 7.43924 39.4943 7.50469 39.5178 7.57825C39.5413 7.65181 39.5436 7.7305 39.5243 7.80529L38.8913 10.2972C38.7837 10.7205 39.2341 11.0622 39.5963 10.8323L41.7938 9.44066C41.8556 9.4014 41.9273 9.38054 42.0005 9.38054C42.0737 9.38054 42.1453 9.4014 42.2071 9.44066H42.2067Z"
          fill="#FF8A00"></path>
        <path
          d="M54.2067 9.44066L56.5711 10.9384C56.8733 11.1297 57.2483 10.845 57.1587 10.4922L56.4758 7.80529C56.4566 7.73044 56.4588 7.65168 56.4823 7.57804C56.5057 7.50441 56.5495 7.43889 56.6086 7.38904L58.7288 5.62466C59.0071 5.39291 58.8638 4.93054 58.5057 4.90729L55.7371 4.72729C55.6626 4.722 55.591 4.69565 55.5309 4.6513C55.4708 4.60695 55.4244 4.54643 55.3973 4.47679L54.3646 1.87654C54.3365 1.80264 54.2866 1.73903 54.2215 1.69416C54.1564 1.64928 54.0792 1.62524 54.0001 1.62524C53.921 1.62524 53.8438 1.64928 53.7787 1.69416C53.7136 1.73903 53.6637 1.80264 53.6356 1.87654L52.6028 4.47679C52.5758 4.5465 52.5295 4.6071 52.4694 4.65152C52.4092 4.69594 52.3377 4.72234 52.2631 4.72766L49.4945 4.90766C49.1367 4.93054 48.9927 5.39291 49.2713 5.62466L51.3916 7.38941C51.4506 7.43924 51.4943 7.50469 51.5178 7.57825C51.5413 7.65181 51.5436 7.7305 51.5243 7.80529L50.8913 10.2972C50.7837 10.7205 51.2341 11.0622 51.5963 10.8323L53.7938 9.44066C53.8556 9.4014 53.9273 9.38054 54.0005 9.38054C54.0737 9.38054 54.1453 9.4014 54.2071 9.44066H54.2067Z"
          fill="#FF8A00"></path>
      </svg>
      {/* <svg width="40" height="41" viewBox="0 0 40 41" className="absolute cursor-pointer top-5 right-5" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20.5" r="20" fill="#00B307"></circle>
        <path
          d="M16.6667 18.8333H14.1667L12.5 28H27.5L25.8333 18.8333H23.3333M16.6667 18.8333V16.3333C16.6667 14.4924 18.1591 13 20 13V13C21.8409 13 23.3333 14.4924 23.3333 16.3333V18.8333M16.6667 18.8333H23.3333M16.6667 18.8333V21.3333M23.3333 18.8333V21.3333"
          stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg> */}
      <div className="top-5 right-5 absolute"> 
      <svg width="40" height="40" viewBox="0 0 40 40" className="cursor-pointer mb-[6px]"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19.5" fill="#00B307" stroke="#F2F2F2"></circle>
        <path
          d="M19.9996 27.5451C3.33328 18.3333 14.9999 8.3333 19.9996 14.6567C24.9999 8.3333 36.6666 18.3333 19.9996 27.5451Z"
          stroke="white" stroke-width="1.5"></path>
      </svg>
      {/* <svg width="40" height="40" viewBox="0 0 40 40" className="cursor-pointer" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19.5" fill="#00B307" stroke="#F2F2F2"></circle>
        <path
          d="M20 13.541C13.75 13.541 11.25 20.0001 11.25 20.0001C11.25 20.0001 13.75 26.4577 20 26.4577C26.25 26.4577 28.75 20.0001 28.75 20.0001C28.75 20.0001 26.25 13.541 20 13.541V13.541Z"
          stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path
          d="M20 23.125C20.8288 23.125 21.6237 22.7958 22.2097 22.2097C22.7958 21.6237 23.125 20.8288 23.125 20C23.125 19.1712 22.7958 18.3763 22.2097 17.7903C21.6237 17.2042 20.8288 16.875 20 16.875C19.1712 16.875 18.3763 17.2042 17.7903 17.7903C17.2042 18.3763 16.875 19.1712 16.875 20C16.875 20.8288 17.2042 21.6237 17.7903 22.2097C18.3763 22.7958 19.1712 23.125 20 23.125V23.125Z"
          stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg> */}
      </div>
    </div>
  </div></a>
  {/* <a 
      onClick={() => handleProductClick(product.id)} 
      className="bg-white rounded-2xl p-5 cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-in-out relative"
    >
      
      <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
          <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
        </svg>
      </div>
      <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
        <img src={product.imageUrl} alt={product.name} className="h-full w-full object-contain" />
      </div>
      <div>
        <h3 className="text-lg font-extrabold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
        <h4 className="text-lg text-gray-800 font-bold mt-4">{product.price}</h4>
      </div>
    </a> */}
    </>
   
  );
  

  return (
    <>
       <div className="relative mt-16 bg-black text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://img.freepik.com/free-photo/burning-lamp-hangs-dark-blurred-background-space-text_169016-62731.jpg?t=st=1741696604~exp=1741700204~hmac=c77a537f64cb159025396b5dfe3c329f78f59cb6b5368d01b7a6ed8bdf70b52d&w=1380" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center py-24">
    <h1 className="text-5xl font-bold leading-tight mb-4">Products</h1>
  </div>
</div>
        

<div className=" font-[sans-serif] bg-gray-100 py-24">
  <div className="lg:px-12 mx-auto lg:max-w-full  sm:max-w-full">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-12"></h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-8 gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
</div>

    </>
  );
};

export default function SuspenseWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products />
    </Suspense>
  );
}
