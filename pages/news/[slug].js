// import { news } from '../api/news';

// export default function Sulg(req, res) {
//   const newsArticle = news.filter((item) => item.slug === req.query.slug);
//   if (req.method === "GET") {
//     res.status(200).json(newsArticle);
//   } else {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).json({ message: `Method ${req.method} is not allowed` });
//   }
// }

import React from "react";

const Slug = () => {
  return <div>Slug</div>;
};

export default Slug;
