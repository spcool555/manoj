'use client';
import { Suspense } from 'react';
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import Swal from 'sweetalert2';
import './singleProduct.css'
import ReactImageMagnify from 'react-image-magnify';
import React, { useState, useRef } from "react";



const products = [
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

  {
    id: 15,
    name: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png",
  },

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

const SingleProduct = () => {

// Zoom Effect Start
const [hover, setHover] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  };
// Zoom Effect End

  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const [quoteItems, setQuoteItems] = useState([]);

  useEffect(() => {
    updateCart();
  }, []);


const updateCart =()=>{
  const storedQuoteItems = JSON.parse(localStorage.getItem('quoteItems')) || [];
    setQuoteItems(storedQuoteItems);
} 

  const product = products.find((item) => item.id.toString() === productId);

  const addToQuote = () => {
    const storedQuoteItems = JSON.parse(localStorage.getItem('quoteItems')) || [];
    const newQuoteItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
    };

    // Check if the item is already in the quote
    const existingItem = storedQuoteItems.find(item => item.id === newQuoteItem.id);

    if (!existingItem) {
      const updatedQuoteItems = [...storedQuoteItems, newQuoteItem];
      localStorage.setItem('quoteItems', JSON.stringify(updatedQuoteItems));
      setQuoteItems(updatedQuoteItems);
     
      Swal.fire({
        title: "Added to Quote",
        text: `${product.name} has been added to your quote.`,
        icon: "success",
        timer: 2000, // Optional timer to close the alert automatically
        timerProgressBar: true, // Progress bar for timer
        showConfirmButton: false // Hide the "OK" button, since you may want to close the alert automatically
      });
      updateCart();
      location.reload();
    } else {
      Swal.fire({
        title: "Already in Quote",
        text: `${product.name} is already in your quote.`,
        icon: "info",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  };

  if (!product) {
    return <p>Product not found.</p>; // Handle case where product isn't found
  }

  return (
    <>
   
    <section className="privacy-header bg-dark text-white py-14 mt-20">
<div className="container text-center">
  <h1 className="text-4xl md:text-5xl font-bold">Products</h1>
  <p className="text-lg md:text-x l mt-4"> {product.name}</p>
</div>
</section>

<div className="grid grid-cols-2 gap-2 bg-gray-100 pb-24">
<div className="..."></div>
<div className="..."></div>
<div className="..."></div>
<div className="col-span-2 ...">
<div className="mx-auto max-w-full">

<div className="-mx-4 flex flex-col md:flex-row pl-14 pt-20">
 
 {/* Product Description */}
    <div className="max-w-full mx-auto">
                <div className="h-[560px] rounded-lg bg-black dark:bg-gray-700 mb-4 border border-yellow">
                    {/* <img className="w-full h-full lg:object-cover xl:object-cover object-contain rounded-lg" src={product.imageUrl} alt={product.name}/> */}
                 {/* Image container */}
      <div
      className="relative w-[500px] h-[500px] overflow-hidden border border-gray-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Main Image */}
      <img
        ref={imageRef}
        src={product.imageUrl}
        alt="Product"
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Zoom Effect */}
      {hover && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${product.imageUrl})`,
            backgroundSize: `${2 * 100}%`,
            backgroundPosition: `${position.x}% ${position.y}%`,
            transition: "background-position 0.1s",
          }}
        />
      )}
    </div>
                </div>
                <div className="relative w-[500px] h-[500px] overflow-hidden border-2">
     


    </div>




                {/* <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: product.imageUrl, 
        
        },
    largeImage: {
        src: product.imageUrl,
        width: 2400,
        height: 2400
    }
}} /> */}

{/* <div className="bg-300 dark:-700 mb-4 h-[460px] rounded-lg">
  <img
    className="h-full w-full zoom-effect"
    src={product.imageUrl}
    alt={product.name}
  />
</div> */}

</div>
<div className="md:flex-1 pt-6 pl-16">
<div className="md:flex-1">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-2">{product.name}</h2>
                <p className="text-black dark:text-black text-sm mb-4">
                    {product.description}
                </p>
                <div className="flex mb-4">
                    
                    <div>
                        <span className="font-bold text-gray-700 dark:text-black">Availability:</span>
                        <span className="text-black dark:text-black">In Stock</span>
                    </div>
                </div>
                {/* <div>
                    <span className="font-bold text-gray-700 dark:text-black">Product Description:</span>
                    <p className="text-black dark:text-black text-sm mt-2">
                        {product.description}
                    </p>
                </div> */}
                <div className="mt-16">
<span className="font-bold text-xl text-black dark:text-black">
  Product Description:
</span>
{/* Split the description by full stops and group every four sentences */}
{product.description.split('.').reduce((acc, sentence, index) => {
  // Trim the sentence to avoid leading/trailing spaces
  const trimmedSentence = sentence.trim();
  if (trimmedSentence) {
    // Get the current group of sentences (every 4 sentences)
    const groupIndex = Math.floor(index / 4);
    if (!acc[groupIndex]) {
      acc[groupIndex] = []; // Initialize a new group
    }
    acc[groupIndex].push(trimmedSentence); // Add the sentence to the current group
  }
  return acc;
}, []).map((group, index) => (
  <p key={index} className="mt-3 text-md text-black dark:text-black mb-4">
    {group.join('. ') + '.'} {/* Join the group of sentences and add a full stop */}
  </p>
))}
</div>
               
            </div>
  <div className="mb-4 flex">
    {/* <div>
      <span className="font-bold text-gray-700 dark:text-black">
        Availability:
      </span>
      <span className="text-black dark:text-black">
        {' '}Available
      </span>
    </div> */}
  </div>
  
  <div className="w-11/12 px-2 flex ">
      <button 
        className="w-full rounded-full bg-gray-900 px-4 py-2 font-bold text-white hover:bg-gray-800 dark:bg-black dark:hover:bg-gray-700"
        onClick={addToQuote}
      >
        Add To Quote
      </button>
    </div>
    {quoteItems.length > 0 && (
      <div className="-mx-3 pr-7  mt-4 flex">
        <Link 
          href="/quote"
          className="w-full rounded-full bg-blue-600 px-4 mx-5 py-2 font-bold text-white text-center hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
        >
          View Quote
        </Link>
      </div>
    )}
 
</div>
</div>
</div>


</div>
<div className="...">
<div className="flex flex-wrap justify-center ... mt-6">
{/* First Box */}
{/* <div className="flex-none w-full sm:w-80 h-72 text-[#f9f9f9] bg-[#14455C] bg-blend-overlay my-5 bg-no-repeat bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1664298006973-e98eb94d006c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGh1bmRlcnxlbnwwfHwwfHx8MA%3D%3D')] rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
  <b>
    <center className="p-4 text-2xl">Need Help?</center>
  </b>
  <center>
    <p className="px-4">
    Speak to a knowledgeable expert. If you have questions about our electronic products, need advice on lightning protection systems, or require assistance with earth rods and related components, please use one of the contact methods below to connect with one of our experts who can help you find the right solution
    </p>
  </center>
</div> */}

{/* Second Box */}
{/* <div className="flex-none w-full sm:w-80 h-56 text-[black] bg-slate-300 bg-blend-overlay my-5 rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
  <b>
    <center className="p-4 text-1xl">Expert Solutions for Your Electronic Needs</center>
  </b>
  <center>
    <p className="px-4">
    We specialize in providing top-quality electronic products and services tailored to meet your specific needs. From advanced lightning protection systems to reliable earth rods and comprehensive electronic solutions    </p>
  </center>
</div> */}
</div>

</div>


</div>


      </>
  );
};

export default function SuspenseWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SingleProduct />
    </Suspense>
  );
}

