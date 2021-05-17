import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productReducer } from "../redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/actions/productActions";


const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const { id, title, image, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProctDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
            console.log("Err", err)
        });
        dispatch(selectedProducts(response.data))
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProctDetail();
    }, [productId])



    return (
        <div className=" ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className=" ui placeholder segment">
                    <div className=" ui two column stackable center aligned grid">
                        <div className=" ui vertical devider">AND</div>

                    </div>
                </div>

            )

            }

        </div>
    )
};

export default ProductDetail;