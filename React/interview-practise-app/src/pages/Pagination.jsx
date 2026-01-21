import { useEffect, useState } from "react";

export default function Pagination() {
  const [posts, setPosts] = useState();
  const [page, setPage] = useState(1);
  const limit = 10;
  const totalPages = Math.ceil(100 / limit);

  useEffect(() => {
    async function fetchData() {
      const responseData = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
      );
      const res = await responseData.json();
      setPosts(res);
    }

    fetchData();
  }, [page]);

  const PrevPage = () => {
    setPage(page - 1);
  };

  const NextPage = () => {
    setPage(page + 1);
  };
  return (
    <>
      {posts &&
        posts.map((post, index) => (
          <>
            <div key={index} className="bg-green-200 mb-2 p-2 m-2">
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          </>
        ))}
      <div className="m-auto pt-5 flex justify-center items-center">
        <button
          onClick={PrevPage}
          disabled={page == 1}
          className="bg-green-600 p-2 text-white mr-5   disabled:bg-gray-300 disabled:text-gray-500
    disabled:cursor-not-allowed"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              onClick={() => setPage(pageNumber)}
              disabled={page == pageNumber}
              className="bg-green-600 p-2 text-white ml-5   disabled:bg-gray-300 disabled:text-gray-500
    disabled:cursor-not-allowed"
            >
              {pageNumber}
            </button>
          ),
        )}
        <button
          onClick={NextPage}
          disabled={page == totalPages}
          className="bg-green-600 p-2 text-white ml-5   disabled:bg-gray-300 disabled:text-gray-500
    disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </>
  );
}
