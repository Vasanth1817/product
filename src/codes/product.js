import { useState, useEffect } from "react";
function Product() {
    const [mode, setmode] = useState(false);
    const [prd, setprd] = useState(false);
    const [category, setcategory] = useState('');
    const data = {
        Laptop: [
            { name: 'Lenovo LOQ, AMD Ryzen 5 7235HS, NVIDIA RTX 3050 6GB, 24GB RAM, 512GB SS SSD, 15.6"(39.6cm), Windows 11, Office Home 2024, Grey, 2.4Kg, 83JC00EFIN, 100% sRGB,', price: '71,990', unit: '12', stock: 'in', img: 'https://m.media-amazon.com/images/I/61Ol4v72-NL.jpg' },
            { name: 'Apple 2025 MacBook Pro Laptop with M5 chip, 10‑core CPU and 10‑core GPU: Built for Apple Intelligence, 35.97 cm (14.2″) Liquid Retina XDR Display, 16GB Unified Memory, 512GB SSD Storage; Space Black', price: '1,64,490', unit: '7', stock: 'in', img: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp14-spaceblack-select-202410_FMT_WHH?wid=892&hei=820&fmt=jpeg&qlt=90&.v=YnlWZDdpMFo0bUpJZnBpZjhKM2M3YnRLQTZRakorT3p3YTRUbVA0N3dnbm9kcmNoRkhVQjllNW44R3VXNVFLNm5EL1p1ZmpNaCtMcDhOa3lIZDhWbWhhU2ZYeWJNaHI5aXZSOWk3dEhoQkx6STlJSlZ4M0pKaFh6c2piamliR2k' },
            { name: 'MSI Raider 18, Intel Series 2 Core Ultra 9 285HX, 46cm UHD+ 120Hz Gaming Laptop (64GB/4TB NVMe SSD/Windows 11 Home/NVIDIA GeForce RTX 5090, GDDR7 24GB/Core Black/3.6Kg) A2XWJG-253IN', price: '4,49,990', unit: '0', stock: 'out', img:'https://m.media-amazon.com/images/I/71oTMGyCbhL._AC_UF1000,1000_QL80_.jpg' },
            { name: 'HP 15, Intel Core Ultra 5 125H (16GB DDR5, 1TB SSD) FHD, IPS, 15.6/39.6cm, Win11, M365 Basic(1yr)*Office24, Silver, 1.65kg, fd1354TU, Intel Arc Graphics, FHD Camera w/Shutter, AI Powered Laptop', price: '64,990', unit: '21', stock: 'in', img: 'https://m.media-amazon.com/images/I/811SEK6uOML.jpg' },
            { name: 'ASUS TUF A15 (2025), AMD Ryzen 7 7445HS, Gaming Laptop(RTX 3050,75W TGP,16GB DDR5(Upgradeable Upto 64GB )512GB SSD,FHD,15.6",144Hz,RGB Keyboard,48Whrs,Windows 11,Graphite Black,2.3 Kg) FA506NCG-HN199W', price: '68,990', unit: '15', stock: 'in', img: 'https://m.media-amazon.com/images/I/81nPkLHN3vL._AC_UF1000,1000_QL80_.jpg' }],
        Storage: [
            { name: 'Patriot Memory 16GB(2x8GB) Viper III DDR3 1866MHz (PC3 15000) CL10 Desktop Memory with Black Mamba Heatsink PV316G186C0K', price: '3,849', unit: '0', stock: 'out', img: 'https://m.media-amazon.com/images/I/81vekasyjAL.jpg' },
            { name: 'WD_Black Western Digital SN7100 NVMe 2TB, Upto 7250MB/s R, 6900MB/s W, 5Y Warranty, PCIe Gen 4 NVMe M.2 (2280), Gaming Storage, Internal Solid State Drive (SSD) (WDS200T4X0E-00CJA0)', price: '18,300', unit: '21', stock: 'in', img: 'https://www.jiomart.com/images/product/original/rvowvs09yg/wd_black-western-digital-sn7100-nvme-2tb-upto-7250mb-s-r-6900mb-s-w-5y-warranty-pcie-gen-4-nvme-m-2-2280-gaming-storage-internal-solid-state-drive-ssd-wds200t4x0e-00cja0-product-images-orvowvs09yg-p612070247-0-202507311902.jpg?im=Resize=(1000,1000)' },
            { name: 'KLEVV CRAS X DDR4 RGB 16GB (2x 8GB) 3200MHz CL16 Gaming Memory RAM kit XMP 2.0 High Performance Overclocking 16-18-18-38', price: '6,247', unit: '16', stock: 'in', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHFiGUBuZoBhLvct9b_SxtDtfuU_QE9lnmw&s' },
            { name: 'EVM Elite 8GB DDR4 3200MHz Gaming Desktop RAM | Intel XMP & AMD Expo Compatible | High-Performance PC Memory Module with Aluminum Heat Sink | Low Voltage 1.2V | 10-Year Warranty (EE8G32DT)', price: '3,699', unit: '29', stock: 'in', img: 'https://m.media-amazon.com/images/I/71vDGgnpOPL._AC_UF350,350_QL80_.jpg' },
            { name: 'Corsair MP600 PRO LPX 1TB M.2 NVMe PCIe x4 Gen4 SSD - Optimized for PS5 (Up to 7100MB/sec & 5800MB/sec Sequential Read/Write Speeds, High-Speed Interface, Compact Form Factor) CSSD-F1000GBMP600PLP', price: '2,213', unit: '43', stock: 'in', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbsucYH1uRUTYPBfkOzfRXU7iRFmwOTjhPg&s' }],
        Controller: [
            { name: 'Playstation Sony PS 5 Dualsense Controller Gaming Console White', price: '5,799', unit: '102', stock: 'in', img: 'https://m.media-amazon.com/images/I/6143HgCtz+L._AC_UF350,350_QL80_.jpg' },
            { name: 'Xbox Wireless Controller – Robot White Series X|S, One, and Windows Devices', price: '5,390', unit: '28', stock: 'in', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMKi5aNDNMXcqhDjhV3sSGkCFUwjHcT1Y5g&s' },
            { name: 'Cosmic Byte ARES Wireless Controller for PC, Magnetic Triggers, Accurate Joysticks, Dual Vibration, Backit LED Buttons, USB Extension Cable (Black)', price: '1,499', unit: '98', stock: 'in', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcwrISK1OrPuDTH_URGsLTpDgq2o6iZvPxA&s' },
            { name: 'Sony Dualsense Edge Wireless Controller (Playstation 5)', price: '15,990', unit: '48', stock: 'in', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6atnK6vEh2dVeQ4e7EoJrZbz02TWxBI98kg&s' },
            { name: 'ZEBRONICS MAX FURY Transparent RGB LED Illuminated Wired Gamepad for Windows PC, Android, with Dual analog sticks, Quad front triggers, Dual motors force, Haptic Feedback', price: '1,099', unit: '62', stock: 'in', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXaiyuhBifgTUBDhRDooLGLLA2HO8fQObbQ&s' }],
        Graphics: [
            { name: 'ASUS Rog Strix Geforce RTX 4090 White OC Edition Gaming Graphics Card (Pcie 4.0, 24Gb Gddr6X, HDmi 2.1A, Displayport 1.4A) pci_e_x16', price: '5,41,797', unit: '7', stock: 'in', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qYh4cE5GJpXqOG-VDOAZZp5_VKBs91j7qw&s' },
            { name: 'GIGABYTE NVIDIA GeForce RTX 3060 WINDFORCE OC 12GB GDDR6 pci_e_x16 Graphics Card (GV-N3060WF2OC-12GD)', price: '26,999', unit: '11', stock: 'in', img: 'https://m.media-amazon.com/images/I/71OFKtclW4L._AC_UF1000,1000_QL80_.jpg' },
            { name: 'NVIDIA RTX Pro 6000, 96GB GDDR7, 24064 CUDA Cores, 600W, Professional Graphics Card', price: '10,43,799', unit: '0', stock: 'out', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-o0CVSaWWdddn1GvNlwHMwBSVNdI89txjA&s' },
            { name: 'ZOTAC Gaming Geforce RTX 5070 Solid Graphics Card - Black | 12 GB | DLSS 4 | GDDR7 | 192 Bit | Icestorm 2.0 Advanced Cooling | Triple Fan | Spectra RGB Lights | ZT-B50700D-10P', price: '63,979', unit: '25', stock: 'in', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgd_R9axzvIqHlngD1bRwyEtYGqf-MJ9ksiA&s' },
            { name: 'MSI Geforce RTX 5090 32G Vanguard SOC pci_e_x16 Graphic Card - NVIDIA Geforce RTX 5090 GPU, 32GB GDDR7 512-Bit Memory, 28 Gbps, PCI Express Gen 5 Interface, Upto 2512 Mhz, STORMFORCE Fan', price: '3,67,549', unit: '0', stock: 'out', img:'https://m.media-amazon.com/images/I/71LnSVieIHL.jpg' }]
    };
    const categ = Object.keys(data);
    const handle = () => {
        if (!mode) {
            setmode(true);
        }
        else {
            setmode(false);
        }
    }
    const handleprd = () => {
        if (!prd) {
            setprd(true);
        }
        else {
            setprd(false);
        }
    }
    useEffect(() => {
        const root = document.documentElement;
        if (mode) {
            root.classList.add('dark');
        }
        else {
            root.classList.remove('dark');
        }
    }, [mode]);
    const handlecate = (e) => {
        setcategory(e.target.value);
    }
    // const [result,setresult]=useState([])
    // const handlesearch=(e)=>{
    //     const k=e.target.value;
    //     const jsx=categ.map((category)(
    //         <div key={category}>
    //         data[category].map((d,i)(
    //         setresult(d.filter(includes(k)));
    //         ))   
    //         </div>
    //     ))
    // }
    return (
        <>
            <header className="bg-cyan-400 flex dark:bg-black dark:text-white justify-between h-12 items-center ">
                <div className="flex gap-x-4">
                    <div className="mt-1 ml-3 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg></div>
                    <span className="font-bold text-xl"><p>Products</p></span>
                </div>
                <div className="flex gap-x-4">
                    <button className=" ml-3 cursor-pointer" onClick={handle}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                    </button>
                    <div className="w-[35px] h-[35px] mr-3 relative rounded-full bg-slate-400 "><p className="absolute top-1 left-3 text-white">V</p></div>
                </div>
            </header>
            {/* filter & search */}
            {/* <div className="bg-slate-400 dark:bg-black ">
            <div className=" ">
                <select value={category} onChange={handlecate} className="focus:border-blue-400 p-1 rounded-md border-2 shadow-md my-3 mx-3">
                <option value={''}>Select Category</option>
                <option value={'Laptop'}>Laptop</option>
                <option value={'Storage'}>Storage</option>
                <option value={'Controller'}>Controller</option>
                <option value={'Graphics'}>Graphics Card</option></select>
                </div>

        </div> */}
            <div className="bg-slate-400 dark:bg-black grid grid-cols-12">
                <div className=" col-span-6 ">
                    <select value={category} onChange={handlecate} className="focus:border-blue-400 p-1 rounded-md border-2 shadow-md my-3 mx-3">
                        <option value={''}>Select Category</option>
                        <option value={'Laptop'}>Laptop</option>
                        <option value={'Storage'}>Storage</option>
                        <option value={'Controller'}>Controller</option>
                        <option value={'Graphics'}>Graphics Card</option></select>
                </div>
                <div className="col-start-9 col-span-2 flex items-center">
                    <label>Search</label> <input className="rounded-lg mx-2" /*onChange={handlesearch}*/ />
                </div>
                <div className="col-start-11 grid place-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                    </svg>
                </div>
                <div className="flex items-center">
                    <button className="col-start-12 bg-blue-600 px-1 py-1 rounded-md shadow-lg font-sm hover:bg-blue-700 transition duration-150" onClick={handleprd}>+ Add Product</button></div>
            </div>
            {/* Add product overlay */}
            <section >
                <div className={`${prd ? 'grid' : 'hidden'} bg-white w-[250px] h-[400px] sm:w-[425px] sm:h-[275px] absolute z-50 top-[35%] left-[36%] grid-rows-12 rounded-md shadow-xl`}>
                  <div className="row-start-1 my-2 flex justify-between"><h2 className="mx-5 text-lg font-bold ">Add Product</h2><button className="mr-3 mt-1 font-semibold bg-blue-700 h-6 w-6 rounded-full text-white" onClick={()=>setprd(false)} >X</button></div><div className=" row-start-2 border-b-2"></div>
                   <div className="row-start-4 grid grid-cols-1 sm:grid-cols-6 gap-4 items-center mx-2 my-2"><div className="sm:col-span-3"><input className="border rounded-md p-1 shadow-lg" placeholder="Product Image Url"/></div>
                    <div className="sm:col-span-3"><input className="border rounded-md p-1 shadow-lg" placeholder="Product Name"/></div>
                    <div className="sm:col-span-3"><select className="focus:border-blue-400 p-1 rounded-md border-2 shadow-md pr-[55px]">
                        <option value={''}>Select Category</option>
                        <option value={'Laptop'}>Laptop</option>
                        <option value={'Storage'}>Storage</option>
                        <option value={'Controller'}>Controller</option>
                        <option value={'Graphics'}>Graphics Card</option></select></div>
                    <div className="sm:col-span-3"><input className="border rounded-md p-1 shadow-lg" placeholder="Enter the Price"/></div>
                    <div className="sm:col-span-3"><input className="border rounded-md p-1 shadow-lg" type="number" placeholder="Enter the Stock Count"/></div>
                    <div className="sm:col-span-3"><input className="mr-2" type="checkbox" /><label className="font-medium">Instock</label></div></div>
                    <div className=" row-start-10 border-b-2"></div> 
                    <div className=" row-start-12 sm:row-start-11 grid place-items-center my-2"><button className="bg-blue-600 px-1 py-1 rounded-md shadow-lg font-sm hover:bg-blue-700 transition duration-150 font-medium text-[12px] text-white w-fit">Add Product</button></div>
                </div>
            </section>
            {/* content */}
            {category !== '' ? <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  dark:bg-black relative z-0 ">
                {data[category].map((d, i) => {
                    return (
                        <div key={i} className="mx-2 my-2  rounded-md bg-slate-200 p-2 shadow-lg">
                            <div className="grid gap-y-2 relative">
                                <img src={d.img} className="w-full h-80 object-cover rounded-md"></img>
                                <p className="truncate font-semibold">{d.name}</p>
                                <p className="flex font-bold text-green-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg> {d.price}</p>
                                <div className="grid grid-cols-2">
                                    <p className="ml-3 text-[15px] font-medium">{d.unit} Units Available</p>
                                    {/* <p className="col-start-4">{d.stock==='in'?'In stock':'Out of stock'}</p></div> */}
                                    {d.stock === 'in' ? <p className="col-start-3 w-fit px-2 py-2 mx-auto mb-4 text-md rounded-full bg-green-600">In stock</p> : <p className="col-start-3 w-fit px-2 py-3 mb-4 rounded-full text-xs font-medium bg-red-600">Out of stock</p>}</div>
                                <div className="flex absolute top-[93%] left-3 bg-blue-600 p-[2px] rounded-md text-white cursor-pointer px-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg> Add to Cart</div>
                            </div></div>
                    )
                })}
            </section> :
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  dark:bg-black relative z-0">
                    {categ.map((category) => (
                        <div key={category}>
                            {data[category].map((d, i) => {
                                return (
                                    <div key={i} className="mx-2 my-2  rounded-md bg-slate-200 p-2 shadow-lg">
                                        <div className="grid gap-y-2 relative">
                                            <img src={d.img} className="w-full h-80 object-cover rounded-md"></img>
                                            <p className="truncate font-semibold">{d.name}</p>
                                            <p className="flex font-bold text-green-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg> {d.price}</p>
                                            <div className="grid grid-cols-2">
                                                <p className="ml-3 text-[15px] font-medium">{d.unit} Units Available</p>
                                                {/* <p className="col-start-4">{d.stock==='in'?'In stock':'Out of stock'}</p></div> */}
                                                {d.stock === 'in' ? <p className="col-start-3 w-fit px-2 py-2 mx-auto mb-4 text-md rounded-full bg-green-600">In stock</p> : <p className="col-start-3 w-fit px-2 py-3 mb-4 rounded-full text-xs font-medium bg-red-600">Out of stock</p>}</div>
                                            <div className="flex absolute top-[93%] left-3 bg-blue-600 p-[2px] rounded-md text-white cursor-pointer px-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg> Add to Cart</div>
                                        </div></div>
                                )
                            })}
                        </div>))}
                </section>
            }
        </>
    );
}
export default Product;