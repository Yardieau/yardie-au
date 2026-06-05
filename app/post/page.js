export default function PostAdPage() {
  return (
    <main className="postPage">
      <h1>Post an Ad</h1>
      <p>Create your Yardie listing.</p>

      <form className="postForm">
        <input name="title" placeholder="Ad title" required />
        <input name="price" placeholder="Price" required />
        <input name="location" placeholder="Location" required />

        <select name="category" required>
          <option>Cars & Vehicles</option>
          <option>Car Parts</option>
          <option>Tools & Equipment</option>
          <option>Trailers & Caravans</option>
          <option>Farm & Rural</option>
          <option>Electronics</option>
          <option>Home & Garden</option>
          <option>Furniture</option>
          <option>Kids & Baby</option>
          <option>Clothing & Shoes</option>
          <option>Jewellery & Watches</option>
          <option>Sports & Outdoors</option>
          <option>Trading Cards</option>
          <option>Jobs & Services</option>
        </select>

        <textarea name="description" placeholder="Description"></textarea>
        <input name="image" type="file" accept="image/*" />

        <button type="submit">Submit Ad</button>
      </form>
    </main>
  );
}
