import { useEffect, useState } from "react";
import Results from "./Results";
import Form from "./Form";
import axios from "axios";

interface Kitty {
  id: string;
  name: string;
}

const SearchForm: React.FC = () => {
  const [query, setQuery] = useState("");
  const [kitties, setKitties] = useState<Kitty[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const callApi = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.thecatapi.com/v1/breeds/search?q=${query}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "x-api-key": "dec74740-77ab-4562-817d-2d0456e1a1aa",
            },
          }
        );

        setKitties((_) => [...response.data]);
      } catch (err) {
        // console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (query.length > 3 && query.length < 8) {
      callApi();
      return;
    }

    if (query.length > 8) {
      const filteredKitties = kitties.filter((kitty) =>
        kitty.name.toLowerCase().includes(query.toLowerCase())
      );
      setKitties(filteredKitties);
      return;
    }

    if (query.length < 3) {
      setKitties([]);
    }
  }, [query]);

  return (
    <div className="relative">
      <Form onQuery={(query: string) => setQuery(query)} />
      {query.length > 3 && <Results kitties={kitties} loading={loading} />}
    </div>
  );
};
export default SearchForm;
