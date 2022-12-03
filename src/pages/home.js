import React from "react";
import "../styles/home.css";
import products from "../products";
import Product from "../components/Product";
import { useNavigate, Navigate } from "react-router-dom";
import HomeBar from "../components/homebar.js";
import { Components } from "antd/lib/date-picker/generatePicker";
import Footer from "../components/footer.js";
import ScrollButtons from "../components/backtoTop";
import {  useCart } from "react-use-cart";
function Home() {
  const [toSignup, setToSignup] = React.useState(false);
  const { emptyCart, clearCartMetadata, items } = useCart();
  if (toSignup) {
    return <Navigate to="/Signup" />;
  }

  return (
    <>
      <section>
        <div style={{ backgroundColor: "white" }}>
          <HomeBar />
          <div>
            <div className="row justify-content-center">
                {products.map((product) => {
                  return <Product product={product} showItemData={true} />;
                })}
            </div>
          </div>

          <ScrollButtons />
          {/* LINE 33-53 FOR DEBUGGING */}
          {/* <button
            onClick={() => {
              emptyCart();
            }}
          >
            clear cart
          </button>
          <button
            onClick={() => {
              clearCartMetadata();
            }}
          >
            clear cart meta data
          </button>
          <button
            onClick={() => {
              console.log(items);
            }}
          >
            log cart
          </button> */}
          <Footer />
        </div>
      </section>
    </>
  );
}
export default Home;