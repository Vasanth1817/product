import Button from "@mui/material/Button";
function ProductCard({ d }) {
  return (
    <div className="mx-2 my-2  rounded-md bg-white p-2 hover:shadow-2xl hover:scale-105 duration-300">
      <div className="grid gap-y-2 relative overflow-hidden">
        <img
          src={d.img}
          alt=""
          className="w-full h-60 object-contain"
          onError={(e)=>{ e.currentTarget.onerror = null; e.currentTarget.src ="https://tse3.mm.bing.net/th/id/OIP.7lABm-lb2og-eTZYIF-hNAHaH_?pid=Api&P=0&h=180";}}
        ></img> 
        <p className="truncate font-semibold">{d.name}</p>
        <p className="flex font-bold text-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>{" "}
          {d.price}
        </p>
        <div className="grid grid-cols-2">
          <p className="ml-3 text-[15px] font-medium">
            {d.unit} Units Available
          </p>
          {d.stock === "in" ? (
            <p className="col-start-3 w-fit px-2 py-2 mx-auto mb-4 text-md text-white rounded-full bg-green-600">
              In stock
            </p>
          ) : (
            <p className="col-start-3 w-fit px-2 py-3 mb-4 rounded-full text-xs text-white font-medium bg-red-600">
              Out of stock
            </p>
          )}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">

        <Button
          variant="contained"
          sx={{
              px: 3,
              py: 1,
              borderRadius: "0.375rem",
            textTransform: "none",
            cursor: "pointer",
            "&:hover": { backgroundColor: "#1d4ed8" },
        }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
          </svg>{" "}
          Add to Cart
        </Button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;