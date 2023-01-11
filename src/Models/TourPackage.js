const { default: mongoose } = require("mongoose");

const TourPackageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    address: {
      type: String,
    },

    hotel_name: {
      type: String,
      required: true,
    },

    room_type: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    short_description: {
      type: String,
      required: true,
    },

    package_startDate: {
      type: String,
      required: true,
    },

    package_endDate: {
      type: String,
      required: true,
    },

    place: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    related_package: [
      {
        package: { type: mongoose.Schema.Types.ObjectId, ref: "TourPackage" },
      }
    ],
    reviews: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        comment: { type: String },
        star: { type: Number },
        required: false,
      },
    ],
    total_reviews:{
      type: Number,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("TourPackage", TourPackageSchema);
