import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination/Pagination";
import ProductList from "../components/Products/ProductList";
import { useProducts } from "../contexts/ProductContextProvider";

const ProductsPage = () => {
  const { products, getProducts } = useProducts();

  //! SEARCH
  const [search, setSearch] = useState("");
  const [filtredData, setFiltredData] = useState([...products]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (search) {
      const filter = products.filter((item) =>
        item.name.toLowerCase().includes(search)
      );
      setFiltredData(filter);
    } else {
      setFiltredData(products);
    }
  }, [search]);

  useEffect(() => {
    setFiltredData(products);
  }, [products]);

  //! ДЛЯ ПАГИНАЦИИ
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;

  const count = Math.ceil(filtredData.length / itemsPerPage);

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return filtredData.slice(begin, end);
  }

  return (
    <div>
      <ProductList
        currentData={currentData}
        term={search}
        setTerm={setSearch}
      />
      <Box sx={{ mt: "5%" }}>
        <Pagination page={page} setPage={setPage} count={count} />
      </Box>
    </div>
  );
};

export default ProductsPage;
