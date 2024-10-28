import { useEffect, useState } from "react";
import instance from "./axiosinstance";

const Axins = () => {
  const [users, setUser] = useState([{}]);

  useEffect(() => {
    instance.get("/data").then((res) => setUser(res.data));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{user.title}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{user.author}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Axins;

import axios from 'axios'
const instance=axios.create({
    baseURL:"http://localhost:3000",
});

export default instance;


{
    "data":[
    {
      "id": "9780061122415",
      "title": "The Alchemist",
      "author": "Paulo Coelho"
    },
    {
      "id": "9780061122416",
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee"
    },
    {
      "id": "9780451524935",
      "title": "1984",
      "author": "George Orwell"
    },
    {
      "id": "9780141439518",
      "title": "Pride and Prejudice",
      "author": "Jane Austen"
    },
    {
      "id": "9780743273565",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald"
    },
    {
      "id": "9780590353427",
      "title": "Harry Potter and the Sorcerer's Stone",
      "author": "J.K. Rowling"
    },
    {
      "id": "9780060850524",
      "title": "Brave New World",
      "author": "Aldous Huxley"
    },
    {
      "id": "9780316769488",
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger"
    },
    {
      "id": "9780345339683",
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien"
    },
    {
      "id": "9780486282114",
      "title": "Frankenstein",
      "author": "Mary Shelley"
    }
  ]
}
