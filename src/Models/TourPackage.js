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

    image: [{ img: { type: String } }],

    address: {
      type: String,
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
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TourPackage", TourPackageSchema);
