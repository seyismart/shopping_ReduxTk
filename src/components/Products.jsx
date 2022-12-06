import React from "react";
import Product from "./Product";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
      "https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: 25000,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: 25000,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:
      "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: 30000,
  },
  {
    id: 4,
    name: "Apple Book",
    imgURL:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    price: 25000,
  },
  {
    id: 5,
    name: "HP Pavillion",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25000,
  },
  {
    id: 6,
    name: "Acer Aspire",
    imgURL:
      "https://images.unsplash.com/photo-1491336238524-c990bd671778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: 25000,
  },
  {
    id: 7,
    name: "HP Pavillion",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 35000,
  },
  {
    id: 8,
    name: "Acer Aspire",
    imgURL:
      "https://images.unsplash.com/photo-1491336238524-c990bd671778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: 30000,
  },
  {
    id: 9,
    name: "Lenovo Yoga",
    imgURL:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: 25000,
  },
  {
    id: 10,
    name: "Dell lattitude",
    imgURL:
      "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: 25000,
  },
  {
    id: 11,
    name: "Apple Book",
    imgURL:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    price: 25000,
  },
  {
    id: 12,
    name: "HP Pavillion",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25000,
  },
  {
    id: 13,
    name: "Acer Aspire",
    imgURL:
      "https://images.unsplash.com/photo-1491336238524-c990bd671778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: 25000,
  },
  {
    id: 14,
    name: "HP Pavillion",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 35000,
  },
  {
    id: 15,
    name: "Acer Aspire",
    imgURL:
      "https://images.unsplash.com/photo-1491336238524-c990bd671778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: 30000,
  },
  {
    id: 16,
    name: "HP Pavillion",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 35000,
  },
];

const DummyData = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((dummy) => (
          <li key={dummy.id}>
            {" "}
            <Product
              id={dummy.id}
              name={dummy.name}
              price={dummy.price}
              imgURL={dummy.imgURL}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DummyData;

