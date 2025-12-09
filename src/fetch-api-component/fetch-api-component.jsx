import React, { useState, useEffect } from "react";

const FetchApiComponent = () => {
  const [data, setData] = useState([]);

  const urls = [
    "https://dummyjson.com/products",
    // "https://dummyjson.com/todos",
    // "https://dummyjson.com/users",
  ];

  const fetchApi = async () => {
    const responses = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );

    setData(responses[0].products);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>API Result - Products</h1>
      <br />

      {data.length === 0 ? (
        <h2>No Data Found</h2>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #757474ff",
                borderRadius: "8px",
                padding: "15px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
                {item.title}
              </h3>
              <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                ${item.price}
              </p>
              <p style={{ fontSize: "14px" }}>
                {item.category} • Rating: {item.rating}*
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchApiComponent;
