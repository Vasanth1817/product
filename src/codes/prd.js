import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../ProductContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import FilterIcon from "@mui/icons-material/FilterList";
import InputAdornment from "@mui/material/InputAdornment";
import ProductCard from "./ProductCard";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
function Product() {
  const [mode, setMode] = useState(false);
  const [prd, setPrd] = useState(false);
  const [categ, setCategory] = useState("");
  const [catdata, setCatdata] = useState([]);
  const [kadd, setKadd] = useState("");
  const [nadd, setNadd] = useState("");
  const [padd, setPadd] = useState("");
  const [uadd, setUadd] = useState("");
  const [sadd, setSadd] = useState(false);
  const [iadd, setIadd] = useState("");
  const [dataadd, setAdd] = useState(false);
  const [results, setResults] = useState([]);
  const [searchdata, setSearch] = useState(false);
  const [searfil, setSearfil] = useState(false);
  const [finaldata, setFinaldata] = useState([]);
  const {data, setData} = useContext(ProductContext);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode);
  }, [mode]);

  useEffect(() => {
    document.body.style.overflow = prd ? "hidden" : "auto";
  }, [prd]);

  useEffect(() => {
    setFinaldata(
      (searchdata ? results : data)
        .filter((d) => !categ || d.category === categ)
        .map((d) => ({
          name: d.name,
          price: d.price,
          unit: d.unit,
          stock: d.stock,
          img: d.img,
          category: d.category,
        }))
    );
  }, [searchdata, categ, results]);

  const handleSub = () => {
    if (!kadd || !nadd || !padd || !iadd || !uadd) {
      alert("Fill all the data");
      return;
    }
    setAdd(true);
    setPrd(false);
  };
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!dataadd) return;
    const newdata = {
      name: nadd,
      price: padd,
      unit: uadd,
      stock: sadd ? "in" : "out",
      img: iadd,
      category: kadd,
    };
    setData((nd) => [...nd, newdata]);
    alert("data Added");
    setAdd(false);
  }, [dataadd, nadd, padd, uadd, sadd, iadd, kadd]);
  useEffect(() => {
    const newdata = [...new Set(data.map((item) => item.category))];
    setCatdata(newdata);
  }, [data]);

  const handleSearch = (e) => {
    const k = e.target.value;
    if (k !== "") {
      const m = data.filter((c) =>
        c.name.toLowerCase().startsWith(k.toLowerCase())
      );
      setResults(m);
      setSearch(true);
    } else {
      setResults("");
      setSearch(false);
    }
  };

  const handleFlit = () => {
    const sa = [...data].sort((a, b) =>
      searfil
        ? Number(a.price.replace(/,/g, "")) - Number(b.price.replace(/,/g, ""))
        : Number(b.price.replace(/,/g, "")) - Number(a.price.replace(/,/g, ""))
    );
    setResults(sa);
    setSearch(true);
    searfil ? setSearfil(false) : setSearfil(true);
  };

  return (
    <>
      {/* header */}
      <header className="bg-blue-400 flex dark:bg-black dark:text-white justify-between h-12 items-center sticky top-0 z-50 px-2">
        <div className="flex items-center  gap-x-4">
            <MenuIcon></MenuIcon>
            <p className="font-bold text-xl">Products</p>
         
        </div>
        <div className="flex gap-x-4">
          <button
            className=" ml-3 cursor-pointer text-xl"
            onClick={() => setMode((e) => !e)}
          >
            🌙
          </button>
          <div className="w-[35px] h-[35px] mr-3 relative rounded-full bg-slate-400 ">
            <p className="absolute top-1 left-3 text-white">V</p>
          </div>
        </div>
      </header>

      {/* search and filter */}
      <div className="bg-blue-300 py-2 sticky top-12 z-50 dark:bg-black grid grid-cols-2  md:grid-cols-8 lg:grid-cols-12">
        <div className="md:col-span-4 lg:col-span-6 ">
          <FormControl
            variant="outlined"
            sx={{
              minWidth: 220,
              height: 50,
              borderRadius: "0.375rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.5)",
              backgroundColor: "white",
              marginLeft: 2,
            }}
          >
            <InputLabel>Select Category</InputLabel>
            <Select
              sx={{ height: 50 }}
              value={categ}
              size="small"
              onChange={(e) => setCategory(e.target.value)}
              label="Select Category"
              color="primary"
            >
              <MenuItem value="">
                <em>Select Category</em>
              </MenuItem>
              {catdata?.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="md:col-start-5 lg:col-start-9 md:col-span-2 flex items-end justify-start">
          <TextField
            onChange={handleSearch}
            label="Search"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <SearchIcon sx={{ mr: 0.5, my: 0.5, color: "white" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiInput-underline:before": { borderBottomColor: "white" },
              "& .MuiInputLabel-root": { color: "white" },
            }}
          />
        </div>

        <div className="flex md:col-start-7 lg:col-start-11 col-span-2 justify-around dark:text-white ">
          <div className="grid items-center " onClick={handleFlit}>
            <FilterIcon></FilterIcon>
          </div>
          <div className="flex items-center ">
            <Button
              variant="contained"
              sx={{
                background: "#2563eb",
                color: "white",
                boxShadow: 3,
                px: "4px",
                textTransform: "none",
                py: "4px",
                "&:hover": { background: "#1d4ed8" },
              }}
              onClick={() => setPrd(true)}
            >
              + Add Product
            </Button>
          </div>
        </div>
      </div>

      {/* add product btn */}
      <section>
        <div
          className={`${
            prd ? "grid " : "hidden"
          } bg-white w-[250px] h-[450px] lg:w-[600px] lg:h-[400px] sm:w-[475px] sm:h-[375px] fixed z-50 left-[10%] lg:top-1/4 md:left-[20%] lg:left-[30%] grid-rows-12 rounded-md shadow-xl`}
        >
          <div className="row-start-1 my-2 flex justify-between">
            <h2 className="mx-5 text-lg font-bold ">Add Product</h2>
            <button
              className="mr-3 mt-1 font-semibold bg-blue-700 h-6 w-6 rounded-full text-white"
              onClick={() => setPrd(false)}
            >
              X
            </button>
          </div>
          <div className=" row-start-2 border-b-2"></div>
          <div className=" md:row-start-4 grid grid-cols-1 sm:grid-cols-6 md:gap-4 items-center mx-4 my-2">
            <div className="sm:col-span-3">
              <TextField
                id="outlined-multiline-flexible"
                sx={{ boxShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
                label="Product Image Url"
                fullWidth
                onChange={(e) => setIadd(e.target.value)}
              />
            </div>
            <div className="sm:col-span-3">
              <TextField
                id="outlined-multiline-flexible"
                sx={{ boxShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
                label="Product Name"
                fullWidth
                onChange={(e) => setNadd(e.target.value)}
              />
            </div>
            <div className="sm:col-span-3">
              <FormControl
                variant="outlined"
                sx={{
                    width:'100%',
                  minWidth: 220,
                  maxWidth:280,
                  height: 55,
                  borderRadius: "0.375rem",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.5)",
                  backgroundColor: "white",
                }}
              >
                <InputLabel>Select Category</InputLabel>
                <Select
                  sx={{ height: 55 }}
                  value={categ}
                  size="small"
                  onChange={(e) => setKadd(e.target.value)}
                  label="Select Category"
                  color="primary"
                >
                  <MenuItem value="">
                    <em>Select Category</em>
                  </MenuItem>
                  {catdata?.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="sm:col-span-3">
              <TextField
                id="outlined-multiline-flexible"
                sx={{ boxShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
                label="Enter the Price"
                fullWidth
                onChange={(e) => setPadd(e.target.value)}
              />
            </div>
            <div className="sm:col-span-3">
              <TextField
                id="outlined-multiline-flexible"
                sx={{ boxShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
                type="number"
                placeholder="Enter the Stock Count"
                fullWidth
                onChange={(e) => setUadd(e.target.value)}
              />
            </div>
            <div className="sm:col-span-3">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sadd}
                    onChange={(e) => setSadd(e.target.checked)}
                    color="primary"
                  />
                }
                label="Instock"
              />
            </div>
          </div>
          <div className=" row-start-10 border-b-2"></div>
          <div className=" row-start-12 sm:row-start-11 grid place-items-center sm:my-2">
            <Button
              variant="contained"
              sx={{
                background: "#2563eb",
                color: "white",
                boxShadow: 3,
                px: "2px",
                py: "4px",
                mr: "2px",
                "&:hover": { background: "#1d4ed8" },
              }}
              type="submit"
              onClick={(e) => handleSub(e)}
            >
              Add Product
            </Button>
          </div>
        </div>
      </section>

      {/* content */}
      <section className="grid bg-slate-100 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 dark:bg-black relative z-0">
        {finaldata.map((d, i) => (
          <ProductCard d={d} key={i} />
        ))}

        {/* {(searchdata ? results : data)
          .filter((d) => !categ || d.category === categ)
          .map((d, i) => (
            <ProductCard d={d} key={i} />
          ))} */}
      </section>
    </>
  );
}
export default Product;
