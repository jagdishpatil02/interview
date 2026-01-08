import { useEffect } from "react";
import { useState } from "react";

export default function FetchAPI() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const responseData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const res = await responseData.json();
      setData(res);
    }

    fetchData();
  }, []);

  return (
    <div className="text-left">
      {data &&
        data.map((user, index) => (
          <>
            <div key={index}>
              {user.name} - {user.email}
            </div>
          </>
        ))}
    </div>
  );
}
