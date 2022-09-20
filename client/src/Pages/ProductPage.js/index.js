import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addToCart, deleteFromCart } from "../../redux/actions/cartItem";
import { addToWishlist, deleteFromWishList } from "../../redux/actions/wishlist";
import "./Productpage.css";
import Button from "react-bootstrap/Button";
import WishlistItems from "../WishList";
function ProductPage(props) {
  const location = useLocation();
  const [bookData, setBookData] = useState({});
  const [wishListed, setWishListed] = useState(false);
  const [existInCart, setCartExist] = useState(false);
  const { booksData = [] } = useSelector((state) => state.dashBoardData);
  const { wishListItems = [], cartListItems = [] } = useSelector(
    (state) => state.loginData
  );

  const dispatch = useDispatch();
    const navigate = useNavigate()
  useEffect(() => {
    let titleName = location.search.replace("?title=", "");
    titleName=decodeURIComponent(titleName)
    console.log(titleName);
    const newbookData =
      booksData && booksData.find((items) => items.title == titleName);
    if (newbookData) {
      setBookData(newbookData);
    }
  }, [location.search]);

  useEffect(() => {
    if (wishListItems && bookData.title) {
      const found =
        wishListItems &&
        wishListItems.find((item) => item.title == bookData.title);
      if (found) {
        setBookData(found)
        setWishListed(true);
      }else{
        setWishListed(false);
      }
    }else{
      setWishListed(false);
    }
  }, [wishListItems, bookData]);
  useEffect(() => {
    if (cartListItems && bookData.title) {
      console.log(cartListItems,"jhgf")
      const found =
        cartListItems &&
        cartListItems.find((item) => item.title == bookData.title);
      if (found) {
        setBookData(found)
        setCartExist(true);
      }else{
        setCartExist(false)
      }
    }else{
      setCartExist(false);
    }
  }, [cartListItems, bookData]);

  const addItemToWishlist = (e) => {
    e.preventDefault();
    dispatch(addToWishlist(bookData));
  };

  const removeItemFromWishList = (e) => {
    e.preventDefault();
    dispatch(deleteFromWishList(bookData));
  };

  const removeItemFromCart = (e) => {
    e.preventDefault();
    dispatch(deleteFromCart(bookData));
  };
  return (
    <div>
      <div className="back-to-results">
        <Link onClick={()=>navigate(-1)}>Back</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={bookData.imgUrl} alt="Book Image" />
        </div>
        <div className="details-info">
          <ul>
            <li className="title">
              <h4>{bookData.title}</h4>
            </li>
            <li>
              By : <span className="authorName">{bookData.author}</span> |
              Reviews : {bookData.review}
            </li>
            <li className="price">
              Rs.{" "}
              {bookData.price -
                Math.round((bookData.price * bookData.discount) / 100)}
              <span className="totalprice">Rs. {bookData.price}</span>
            </li>

            <li>
              <span className="description">Description :</span>
              <span className="descriptionData"> {bookData.description}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="button-details">
        {wishListed ? (
          <Button onClick={(e) => removeItemFromWishList(e)}>
            Remove from WishList
          </Button>
        ) : (
          <Button onClick={(e) => addItemToWishlist(e)}>Add to Wishlist</Button>
        )}

        {existInCart ? (
          <Button onClick={(e) => removeItemFromCart(e)}>
            Remove from Cart
          </Button>
        ) : (
          <Button onClick={() => dispatch(addToCart(bookData))}>
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
