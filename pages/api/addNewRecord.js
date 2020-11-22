import { headers } from "../../config/db";


export default async function addNewRecord({ body }, res) {
  const fetchOptions = { 
    method: "POST",
    headers,
    body,
  };

  const response = await fetch(`${process.env.DB_URL}/members`, fetchOptions);
  
  const { _id, name, occupation } = await response.json();

  res.json({ _id, name, occupation });
}
