import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import "./style.scss";
const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Notes App",
    image: ImageTwo,
    link: "",
  },
  {
    id: 2,
    name: "Supplier Design",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "Todo App",
    image: ImageFour,
    link: "",
  },
  {
    id: 3,
    name: "Shoppping cart design",
    image: ImageFive,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Devlopement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];
const Portfolio = () => {
  const [filterValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);
  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };
  const handleHover = (index) => {
    setHoveredValue(index);
  };
  console.log("id", filterValue);
  const filteredItem =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filterValue);
  console.log("filteredItem", filteredItem);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filterValue ? "active" : ""}
              key={item.filterId}
              onClick={() => handleFilter(item.filterId)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItem.map((item, i) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(i)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {i === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
