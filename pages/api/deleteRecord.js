import { headers } from "../../config/db";


export default async function deleteRecord({ body }, res) {
  const fetchOptions = { 
    method: "DELETE",
    headers,
  };

  const { _id } = JSON.parse(body);

  const response = await fetch(`${process.env.DB_URL}/members/${_id}`, fetchOptions);
  
  res.statusCode = response.status;
  res.end();
}
