export const MovieIndex = (req, res) => {
  res.send("Get all movie list");
};
export const MovieCreate = (req, res) => {
  console.log(req.body);
  return res.json(req.body);
};
export const MovieUpdate = (req, res) => {
  res.send("Update a movie");
};
export const MovieDelete = (req, res) => {
  res.send("Delete a movie");
};
