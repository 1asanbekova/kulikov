import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  where,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../fire";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productDetails: {},
};
const ProductContextProvider = ({ children }) => {
  //! COLLECTION - функция для получения ссылки на коллекцию  данных
  const productsCollectionRef = collection(db, "products");

  //! READ
  async function getProducts() {
    const data = await getDocs(productsCollectionRef);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    });

    // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  //! CREATE
  async function createProduct(newProduct) {
    await addDoc(productsCollectionRef, newProduct); //1)куда мы отправляем 2)что мы отправляем
  }

  //! UPDATE
  async function getOneProductDetails(id) {
    const productDocRef = doc(db, "products", id);

    // console.log(productDocRef);
    const productDetails = await getDoc(productDocRef);
    // console.log(productDetails.id);

    dispatch({
      type: "GET_PRODUCT_DETAILS",
      payload: { ...productDetails.data(), id: productDetails.id },
    });
    getProducts();
  }

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function reducer(state = INIT_STATE, action) {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };

      case "GET_PRODUCT_DETAILS":
        return { ...state, productDetails: action.payload };

      default:
        return state;
    }
  }
  // console.log(state);

  async function updateProduct(id, updatedProduct) {
    const productDocRef = doc(db, "products", id);

    await updateDoc(productDocRef, updatedProduct);
    getProducts();
  }
  //! DELETE
  async function deleteProduct(id) {
    const productDocRef = doc(db, "products", id);
    await deleteDoc(productDocRef);
    getProducts();
  }

  //! FILTER
  //? ДЛЯ ФИЛЬТРАЦИИ ПО КАТЕГОРИЯМ
  async function sortTest(typer) {
    const q = query(productsCollectionRef, where("type", "==", typer));
    console.log(q);
    let sortArr = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      sortArr.push(doc.data());
    });
    dispatch({
      type: "GET_PRODUCTS",
      payload: sortArr,
    });
  }

  //! ДЛЯ ФИЛЬТРАЦИИ ПО ПРАЙСУ

  async function sortPrice() {
    const q = query(productsCollectionRef, orderBy("price", "asc"));
    console.log(q);
    let sortArr = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      sortArr.push(doc.data());
    });
    dispatch({
      type: "GET_PRODUCTS",
      payload: sortArr,
    });
  }
  async function sortPrice(sor) {
    const q = query(productsCollectionRef, orderBy("price", sor));
    console.log(q);
    let sortArr = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      sortArr.push(doc.data());
    });
    dispatch({
      type: "GET_PRODUCTS",
      payload: sortArr,
    });
  }

  const values = {
    getOneProductDetails,
    productDetails: state.productDetails,
    updateProduct,
    deleteProduct,
    createProduct,
    getProducts,
    products: state.products,
    sortTest,
    sortPrice,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
