const express = require("express");
const placeRouter = express.Router();
const { CreateNewPlace,getAllPlaces,updatePlaceById,deletePlaceById,getPlaceById } = require("./../controllers/place");
placeRouter.post("/place", CreateNewPlace);
placeRouter.get("/places", getAllPlaces);
placeRouter.put("/places/:id",updatePlaceById);
placeRouter.delete("/places/:id",deletePlaceById);
placeRouter.post("/places/:id",getPlaceById);
module.exports = placeRouter;
