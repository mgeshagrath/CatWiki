import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface Kitties {
  id: string;
  name: string;
  url: string;
}

const handler = async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<Kitties[] | { message: string }> => {
  try {
    const response: AxiosResponse<Kitties[]> = await axios.get(
      "https://api.thecatapi.com/v1/breeds?limit=8",
      {
        headers: {
          "x-api-key": "dec74740-77ab-4562-817d-2d0456e1a1aa",
        },
      }
    );

    const data = response.data.map((kitty) => ({
      id: kitty.id,
      name: kitty.name,
      url: kitty.url,
    }));

    res.status(201).json({
      kitties: data,
    });
    return;
  } catch (err) {
    res.status(500).json({ message: err });
    return;
  }
};

export default handler;
