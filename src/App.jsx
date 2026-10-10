
import { useState } from "react";

function App() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [products, setProducts] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: Number(price),
      quantity: Number(quantity)
    };

    setProducts([...products, newProduct]);

    setProductName("");
    setPrice("");
    setQuantity("");
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >
      <h1>Product Management System</h1>

      <h2>Add New Product</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <br />
          <input
            type="text"
            value={productName}
            onChange={(event) =>
              setProductName(event.target.value)
            }
            placeholder="Enter product name"
            required
          />
        </div>

        <br />

        <div>
          <label>Price (₹):</label>
          <br />
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="Enter price"
            required
          />
        </div>

        <br />

        <div>
          <label>Quantity:</label>
          <br />
          <input
            type="number"
            min="1"
            step="1"
            value={quantity}
            onChange={(event) =>
              setQuantity(event.target.value)
            }
            placeholder="Enter quantity"
            required
          />
        </div>

        <br />

        <button type="submit">Add Product</button>
      </form>

      <hr />

      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left"
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>₹{product.price.toFixed(2)}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
