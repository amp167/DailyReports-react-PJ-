import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = new useHistory();
  const currentDate = new Date();
  const dateString = currentDate.toDateString();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, dateString };
    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog Added");
      setIsPending(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a new Report!</h2>
      <form onSubmit={handleSubmit}>
        <label>Report title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Report Description:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Report By:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Kaung Myat Tun">Kaung Myat Tun</option>
          <option value="Aung Myo Oo">Aung Myo Oo</option>
          <option value="Phyo Htet Ko">Phyo Htet Ko</option>
          <option value="Aung Si Thu">Aung Si Thu</option>
        </select>
        {!isPending && <button>Add Report</button>}
        {isPending && <button disabled>Addin Report....</button>}
      </form>
    </div>
  );
};

export default Create;
