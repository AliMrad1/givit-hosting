import React, { useEffect, useState } from "react";
import Table from "./Table";
import Location from "./filter/Location";
import Cause from "./filter/Cause";
import Category from "./filter/Category";
import Delivery from "./filter/Delivery";

import donationsjson from "../data/donations.json";
import categories from "../data/categories.json";
import causes from "../data/Causes.json";
import deliveries from "../data/deliveries.json";
import locations from "../data/locations.json";
function FilterTable({donationss}) {
  const [activeButton, setActiveButton] = useState("location");
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [selectedCauses, setSelectedCauses] = useState([]);
  const [selectedDeliveries, setSelectedDeliveries] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(-1);
  const [donations, setDonations] = useState(donationsjson);
  const [filteredDonations, setFilteredDonations] = useState([]);
  // console.log(donations);
  const clearFilter = () => {
    setSelectedLocation(-1);
    setSelectedCategory(-1);
    setSelectedCauses([]);
    setSelectedDeliveries([]);
    setFilteredDonations(donations)
  };
  const setLocationFunction = (value) => {
    setSelectedLocation(value);
  };
  const setCategoryFunction = (value) => {
    setSelectedCategory(value);
    // handleFilter();
  };
  useEffect(() => {
    handleFilter();
  }, [selectedCategory, selectedCauses, selectedDeliveries, selectedLocation]);
  const handleCheckboxCauseChange = (causeId) => {
    if (selectedCauses.includes(causeId)) {
      setSelectedCauses(selectedCauses.filter((id) => id != causeId));
    } else {
      setSelectedCauses([...selectedCauses, causeId]);
    }
    // handleFilter();
  };
  const handleCheckboxDeliveryChange = (DeliveryId) => {
    if (selectedDeliveries.includes(DeliveryId)) {
      setSelectedDeliveries(
        selectedDeliveries.filter((id) => id != DeliveryId)
      );
    } else {
      setSelectedDeliveries([...selectedDeliveries, DeliveryId]);
    }
  };

  const handleFilter = () => {
    console.log('donations in filter',donations);
    console.log(selectedCategory,selectedCauses,selectedLocation,selectedDeliveries);
    const filtered = donations.filter((donation) => {
      // Filter based on selected category
      console.log(selectedCategory,donation.category.id);
      if (
        selectedCategory != -1 &&
        donation.category.id != selectedCategory
      ) {
        return false;
      }

      // Filter based on selected causes
      if (selectedCauses.length > 0) {
        const causesIds = donation.causes.map((cause) => cause.id);
        console.log(selectedCauses,causesIds);
        if (!selectedCauses.every((causeId) => causesIds.includes(causeId))) {
          return false;
        }
      }

      // Filter based on selected deliveries
      if (selectedDeliveries.length > 0) {
        const deliveriesIds = donation.deliveries.map(
          (delivery) => delivery.id
        );
        console.log(selectedDeliveries, deliveriesIds);
        if (
          !selectedDeliveries.every((deliveryId) =>
            deliveriesIds.includes(deliveryId)
          )
        ) {
          return false;
        }
      }

      // Filter based on selected location
      if (
        selectedLocation != -1 &&
        donation.location.id != +selectedLocation
      ) {
        return false;
      }

      return true;
    });

    if(selectedLocation == -1 && selectedCauses.length == 0 && selectedDeliveries.length == 0 && selectedCategory == -1)
    {
      setFilteredDonations(donations);
    }
    console.log('filtered',filtered);
    setFilteredDonations(filtered);
  };

  const renderComponent = () => {
    switch (activeButton) {
      case "Location":
        return (
          <Location
            locations={locations}
            setLocationFunction={setLocationFunction}
            selectedLocation={selectedLocation}
          />
        );
      case "Cause":
        return (
          <Cause
            causes={causes}
            selectedCauses={selectedCauses}
            handleCheckboxCauseChange={handleCheckboxCauseChange}
          />
        );
      case "Category":
        return (
          <Category
            categories={categories}
            selectedCategory={selectedCategory}
            setCategoryFunction={setCategoryFunction}
          />
        );
      case "Delivery":
        return (
          <Delivery
            deliveries={deliveries}
            selectedDeliveries={selectedDeliveries}
            handleCheckboxDeliveryChange={handleCheckboxDeliveryChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container ">
      <div className="p-3">Filter By</div>
      <div className="filter">
        <div className="buttons d-flex gap-3 flex-wrap w-75 my-4">
          <button
            onClick={() => setActiveButton("Location")}
            className={`btn btn-outline-primary p-2 ${
              activeButton === "Location" ? "active" : ""
            }`}
          >
            Location
          </button>
          <div className="position-relative">
            {selectedCauses.length !== 0 && (
              <div className="position-absolute bg-danger text-white rounded-circle btn-length">
                {selectedCauses.length}
              </div>
            )}
            <button
              onClick={() => setActiveButton("Cause")}
              className={`btn btn-outline-primary p-2 ${
                activeButton === "Cause" ? "active" : ""
              }`}
            >
              Cause
            </button>
          </div>
          <button
            onClick={() => setActiveButton("Category")}
            className={`btn btn-outline-primary p-2 ${
              activeButton === "Category" ? "active" : ""
            }`}
          >
            Category
          </button>
          <div className="position-relative">
            {selectedDeliveries.length !== 0 && (
              <div className="position-absolute bg-danger text-white rounded-circle btn-length">
                {selectedDeliveries.length}
              </div>
            )}
            <button
              onClick={() => setActiveButton("Delivery")}
              className={`btn btn-outline-primary p-2 ${
                activeButton === "Delivery" ? "active" : ""
              }`}
            >
              Delivery Options
            </button>
          </div>
          <a
            onClick={clearFilter}
            style={{ cursor: "pointer" }}
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            Clear Filter
          </a>
        </div>
        <div
          className="Component p-3 d-flex my-4"
          style={{ backgroundColor: "#f1f1f1" }}
        >
          {renderComponent()}
        </div>
      </div>
      <Table filteredDonations={filteredDonations} />
    </div>
  );
}

export default FilterTable;
