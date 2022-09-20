const express = require("express");
const mongoose = require("mongoose");
const Cart = mongoose.model("CartItems");

const router = express.Router();
const requiredLogin = require("../middleware/requiredLogin");

router.post("/cart-item-added", requiredLogin, (req, res) => {
  console.log(req.body);
  const {
    title,
    author,
    imgUrl,
    price,
    review,
    description,
    discount,
    newArrivals,
  } = req.body;
  if (
    !title ||
    !author ||
    !imgUrl ||
    !price ||
    !review ||
    !description ||
    !discount
  ) {
    return res.status(400).json({ error: "Please add all the fields!!" });
  }

  const cartitem = new Cart({
    postedby: req.user,
    title,
    author,
    imgUrl,
    price,
    review,
    description,
    discount,
    newArrivals,
  });
  cartitem
    .save()
    .then((response) => {
      res
        .status(201)
        .send({ message: "New Item Added", status: 1, data: response });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/get-cart-items", requiredLogin, (req, res) => {
    Cart.find({ postedby: req.user._id })
    .populate("postedby")
    .then((cartitems) => {
        res
        .status(201)
        .send({ status: 1, data: cartitems });    })
    .catch((err) => {
      console.log(err);
    });
});


router.post("/delete-cart-item", requiredLogin, (req, res) => {
  Cart.remove({ _id: req.body._id})
  .then((cartitems) => {
      res
      .status(201)
      .send({ status: 1, data: cartitems });    })
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;
