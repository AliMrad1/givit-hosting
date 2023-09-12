import React from "react";
import Appeal1 from "../../assets/images/appealsCard/appeal1.webp";
import Appeal2 from "../../assets/images/appealsCard/appeal2.webp";
import Appeal3 from "../../assets/images/appealsCard/appeal3.webp";
import Appeal4 from "../../assets/images/appealsCard/appeal4.webp";
import Appeal5 from "../../assets/images/appealsCard/appeal5.webp";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AppealItem from "./AppealItem";
function AppealSliderCard({appeals}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // const appeals = [
  //   {
  //     id: 1,
  //     name: "First Nations Support",
  //     image_url:
  //       "https://firebasestorage.googleapis.com/v0/b/givit-donation.appspot.com/o/c93c6323-535d-4e57-ab1c-dc302eb10e32.png?alt=media",
  //     icon_url:
  //       "https://firebasestorage.googleapis.com/v0/b/givit-donation.appspot.com/o/c0ef61e6-bd9c-4a2f-9862-360f399e17fd.png?alt=media",
  //     slug: "first-nations-support",
  //     color: {
  //       id: 0,
  //       color: "primary",
  //     },
  //   },
  //   {
  //     id: 1,
  //     name: "First Nations Support",
  //     image_url:
  //       "https://firebasestorage.googleapis.com/v0/b/givit-donation.appspot.com/o/c93c6323-535d-4e57-ab1c-dc302eb10e32.png?alt=media",
  //     icon_url:
  //       "https://firebasestorage.googleapis.com/v0/b/givit-donation.appspot.com/o/c0ef61e6-bd9c-4a2f-9862-360f399e17fd.png?alt=media",
  //     slug: "first-nations-support",
  //     color: {
  //       id: 0,
  //       color: "danger",
  //     },
  //   },
  //   {
  //     id: 1,
  //     name: "First Nations Support",
  //     image_url:
  //       "https://firebasestorage.googleapis.com/v0/b/givit-donation.appspot.com/o/c93c6323-535d-4e57-ab1c-dc302eb10e32.png?alt=media",
  //     icon_url:
  //       "https://firebasestorage.googleapis.com/v0/b/givit-donation.appspot.com/o/c0ef61e6-bd9c-4a2f-9862-360f399e17fd.png?alt=media",
  //     slug: "first-nations-support",
  //     color: {
  //       id: 0,
  //       color: "warning",
  //     },
  //   },
  //   {
  //     id: 1,
  //     name: "First Nations Support",
  //     image_url:
  //       "https://firebasestorage.googleapis.com/v0/b/givit-donation.appspot.com/o/c93c6323-535d-4e57-ab1c-dc302eb10e32.png?alt=media",
  //     icon_url:
  //       "https://firebasestorage.googleapis.com/v0/b/givit-donation.appspot.com/o/c0ef61e6-bd9c-4a2f-9862-360f399e17fd.png?alt=media",
  //     slug: "first-nations-support",
  //     color: {
  //       id: 0,
  //       color: "primary",
  //     },
  //   },
  // ];

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {appeals && appeals.map((appeal, i) => {
        return (
          <div className="px-2" key={i}>
            <AppealItem appeal={appeal} />
          </div>
        );
      })}
    </Carousel>
  );
}

export default AppealSliderCard;
