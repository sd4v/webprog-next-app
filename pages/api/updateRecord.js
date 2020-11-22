import { headers } from "../../config/db";


export default async function updateRecord({ body }, res) {

  const { _id, ...data } = JSON.parse(body);

  const fetchOptions = { 
    method: "PUT",
    headers,
    body: JSON.stringify(data),
  };

  const response = await fetch(`${process.env.DB_URL}/members/${_id}`, fetchOptions);

  res.statusCode = response.status;
  res.end();
}
