const express = require("express");
const mongoose = require("mongoose");
const Wishlist = mongoose.model("WishList");

const router = express.Router();
const requiredLogin = require("../middleware/requiredLogin");

router.post("/wishlist-item-added", requiredLogin, (req, res) => {
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

  const wishlist = new Wishlist({
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
  wishlist
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

router.get("/get-wishlist-items", requiredLogin, (req, res) => {
    Wishlist.find({ postedby: req.user._id })
    .populate("postedby")
    .then((wishListItems) => {
        res
        .status(201)
        .send({ message: "New Item Added", status: 1, data: wishListItems });    })
    .catch((err) => {
      console.log(err);
    });
});


router.post("/delete-wishlist-item", requiredLogin, (req, res) => {
  Wishlist.remove({ _id: req.body._id})
  .then((wishListItem) => {
      res
      .status(201)
      .send({ status: 1, data: wishListItem });    })
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;
