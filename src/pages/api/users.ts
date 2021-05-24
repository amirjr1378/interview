// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  name: string;
};

const bax: User[] = [
  {
    name: "Amir Soton Gang",
  },
  {
    name: "Ali",
  },
  {
    name: "Parieseta",
  },
  {
    name: "Mohamad",
  },
];

export default (req: NextApiRequest, res: NextApiResponse<User[]>) => {
  res.status(200).json(bax);
};
