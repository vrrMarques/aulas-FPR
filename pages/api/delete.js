import { Remover } from "../../src/services/requests";

export default async function (req, res) {
  if (req.method === "POST") {
    const response = await Remover(req.body);
    return res.status(201).json(response);
  } else {
    return res.status(405).json({ message: "Method not allowed :(" });
  }
}
