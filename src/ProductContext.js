import { createContext,useState } from "react";
export const ProductContext=createContext();
export default function ProductC({children}){
     const [data, setData] = useState([
        {
          name: 'Lenovo LOQ, AMD Ryzen 5 7235HS, NVIDIA RTX 3050 6GB, 24GB RAM, 512GB SS SSD, 15.6"(39.6cm), Windows 11, Office Home 2024, Grey, 2.4Kg, 83JC00EFIN, 100% sRGB,',
          price: "71,990",
          unit: "12",
          stock: "in",
          img: "https://m.media-amazon.com/images/I/61Ol4v72-NL.jpg",
          category: "Laptop",
        },
        {
          name: "Apple 2025 MacBook Pro Laptop with M5 chip, 10‑core CPU and 10‑core GPU: Built for Apple Intelligence, 35.97 cm (14.2″) Liquid Retina XDR Display, 16GB Unified Memory, 512GB SSD Storage; Space Black",
          price: "1,64,490",
          unit: "7",
          stock: "in",
          img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp14-spaceblack-select-202410_FMT_WHH?wid=892&hei=820&fmt=jpeg&qlt=90&.v=YnlWZDdpMFo0bUpJZnBpZjhKM2M3YnRLQTZRakorT3p3YTRUbVA0N3dnbm9kcmNoRkhVQjllNW44R3VXNVFLNm5EL1p1ZmpNaCtMcDhOa3lIZDhWbWhhU2ZYeWJNaHI5aXZSOWk3dEhoQkx6STlJSlZ4M0pKaFh6c2piamliR2k",
          category: "Laptop",
        },
        {
          name: "MSI Raider 18, Intel Series 2 Core Ultra 9 285HX, 46cm UHD+ 120Hz Gaming Laptop (64GB/4TB NVMe SSD/Windows 11 Home/NVIDIA GeForce RTX 5090, GDDR7 24GB/Core Black/3.6Kg) A2XWJG-253IN",
          price: "4,49,990",
          unit: "0",
          stock: "out",
          img: "https://m.media-amazon.com/images/I/71oTMGyCbhL._AC_UF1000,1000_QL80_.jpg",
          category: "Laptop",
        },
        {
          name: "HP 15, Intel Core Ultra 5 125H (16GB DDR5, 1TB SSD) FHD, IPS, 15.6/39.6cm, Win11, M365 Basic(1yr)*Office24, Silver, 1.65kg, fd1354TU, Intel Arc Graphics, FHD Camera w/Shutter, AI Powered Laptop",
          price: "64,990",
          unit: "21",
          stock: "in",
          img: "https://m.media-amazon.com/images/I/811SEK6uOML.jpg",
          category: "Laptop",
        },
        {
          name: 'ASUS TUF A15 (2025), AMD Ryzen 7 7445HS, Gaming Laptop(RTX 3050,75W TGP,16GB DDR5(Upgradeable Upto 64GB )512GB SSD,FHD,15.6",144Hz,RGB Keyboard,48Whrs,Windows 11,Graphite Black,2.3 Kg) FA506NCG-HN199W',
          price: "68,990",
          unit: "15",
          stock: "in",
          img: "https://m.media-amazon.com/images/I/81nPkLHN3vL._AC_UF1000,1000_QL80_.jpg",
          category: "Laptop",
        },
    
        {
          name: "Patriot Memory 16GB(2x8GB) Viper III DDR3 1866MHz (PC3 15000) CL10 Desktop Memory with Black Mamba Heatsink PV316G186C0K",
          price: "3,849",
          unit: "0",
          stock: "out",
          img: "https://m.media-amazon.com/images/I/81vekasyjAL.jpg",
          category: "Storage",
        },
        {
          name: "WD_Black Western Digital SN7100 NVMe 2TB, Upto 7250MB/s R, 6900MB/s W, 5Y Warranty, PCIe Gen 4 NVMe M.2 (2280), Gaming Storage, Internal Solid State Drive (SSD) (WDS200T4X0E-00CJA0)",
          price: "18,300",
          unit: "21",
          stock: "in",
          img: "https://www.jiomart.com/images/product/original/rvowvs09yg/wd_black-western-digital-sn7100-nvme-2tb-upto-7250mb-s-r-6900mb-s-w-5y-warranty-pcie-gen-4-nvme-m-2-2280-gaming-storage-internal-solid-state-drive-ssd-wds200t4x0e-00cja0-product-images-orvowvs09yg-p612070247-0-202507311902.jpg?im=Resize=(1000,1000)",
          category: "Storage",
        },
        {
          name: "KLEVV CRAS X DDR4 RGB 16GB (2x 8GB) 3200MHz CL16 Gaming Memory RAM kit XMP 2.0 High Performance Overclocking 16-18-18-38",
          price: "6,247",
          unit: "16",
          stock: "in",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHFiGUBuZoBhLvct9b_SxtDtfuU_QE9lnmw&s",
          category: "Storage",
        },
        {
          name: "EVM Elite 8GB DDR4 3200MHz Gaming Desktop RAM | Intel XMP & AMD Expo Compatible | High-Performance PC Memory Module with Aluminum Heat Sink | Low Voltage 1.2V | 10-Year Warranty (EE8G32DT)",
          price: "3,699",
          unit: "29",
          stock: "in",
          img: "https://m.media-amazon.com/images/I/71vDGgnpOPL._AC_UF350,350_QL80_.jpg",
          category: "Storage",
        },
        {
          name: "Corsair MP600 PRO LPX 1TB M.2 NVMe PCIe x4 Gen4 SSD - Optimized for PS5 (Up to 7100MB/sec & 5800MB/sec Sequential Read/Write Speeds, High-Speed Interface, Compact Form Factor) CSSD-F1000GBMP600PLP",
          price: "2,213",
          unit: "43",
          stock: "in",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbsucYH1uRUTYPBfkOzfRXU7iRFmwOTjhPg&s",
          category: "Storage",
        },
    
        {
          name: "Playstation Sony PS 5 Dualsense Controller Gaming Console White",
          price: "5,799",
          unit: "102",
          stock: "in",
          img: "https://m.media-amazon.com/images/I/6143HgCtz+L._AC_UF350,350_QL80_.jpg",
          category: "Controller",
        },
        {
          name: "Xbox Wireless Controller – Robot White Series X|S, One, and Windows Devices",
          price: "5,390",
          unit: "28",
          stock: "in",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMKi5aNDNMXcqhDjhV3sSGkCFUwjHcT1Y5g&s",
          category: "Controller",
        },
        {
          name: "Cosmic Byte ARES Wireless Controller for PC, Magnetic Triggers, Accurate Joysticks, Dual Vibration, Backit LED Buttons, USB Extension Cable (Black)",
          price: "1,499",
          unit: "98",
          stock: "in",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcwrISK1OrPuDTH_URGsLTpDgq2o6iZvPxA&s",
          category: "Controller",
        },
        {
          name: "Sony Dualsense Edge Wireless Controller (Playstation 5)",
          price: "15,990",
          unit: "48",
          stock: "in",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6atnK6vEh2dVeQ4e7EoJrZbz02TWxBI98kg&s",
          category: "Controller",
        },
        {
          name: "ZEBRONICS MAX FURY Transparent RGB LED Illuminated Wired Gamepad for Windows PC, Android, with Dual analog sticks, Quad front triggers, Dual motors force, Haptic Feedback",
          price: "1,099",
          unit: "62",
          stock: "in",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXaiyuhBifgTUBDhRDooLGLLA2HO8fQObbQ&s",
          category: "Controller",
        },
    
        {
          name: "ASUS Rog Strix Geforce RTX 4090 White OC Edition Gaming Graphics Card (Pcie 4.0, 24Gb Gddr6X, HDmi 2.1A, Displayport 1.4A) pci_e_x16",
          price: "5,41,797",
          unit: "7",
          stock: "in",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qYh4cE5GJpXqOG-VDOAZZp5_VKBs91j7qw&s",
          category: "Graphics",
        },
        {
          name: "GIGABYTE NVIDIA GeForce RTX 3060 WINDFORCE OC 12GB GDDR6 pci_e_x16 Graphics Card (GV-N3060WF2OC-12GD)",
          price: "26,999",
          unit: "11",
          stock: "in",
          img: "https://m.media-amazon.com/images/I/71OFKtclW4L._AC_UF1000,1000_QL80_.jpg",
          category: "Graphics",
        },
        {
          name: "NVIDIA RTX Pro 6000, 96GB GDDR7, 24064 CUDA Cores, 600W, Professional Graphics Card",
          price: "10,43,799",
          unit: "0",
          stock: "out",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-o0CVSaWWdddn1GvNlwHMwBSVNdI89txjA&s",
          category: "Graphics",
        },
        {
          name: "ZOTAC Gaming Geforce RTX 5070 Solid Graphics Card - Black | 12 GB | DLSS 4 | GDDR7 | 192 Bit | Icestorm 2.0 Advanced Cooling | Triple Fan | Spectra RGB Lights | ZT-B50700D-10P",
          price: "63,979",
          unit: "25",
          stock: "in",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgd_R9axzvIqHlngD1bRwyEtYGqf-MJ9ksiA&s",
          category: "Graphics",
        },
        {
          name: "MSI Geforce RTX 5090 32G Vanguard SOC pci_e_x16 Graphic Card - NVIDIA Geforce RTX 5090 GPU, 32GB GDDR7 512-Bit Memory, 28 Gbps, PCI Express Gen 5 Interface, Upto 2512 Mhz, STORMFORCE Fan",
          price: "3,67,549",
          unit: "0",
          stock: "out",
          img: "https://m.media-amazon.com/images/I/71LnSVieIHL.jpg",
          category: "Graphics",
        },
      ]);
      return(
        <ProductContext.Provider value={{data,setData}}>
            {children}
        </ProductContext.Provider>
      )
}
