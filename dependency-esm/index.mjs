import { json } from "node:stream/consumers";

export default async () => {
  const response = await fetch("https://dummyjson.com/http/202");
  return response.body ? await json(response.body) : null;
};
