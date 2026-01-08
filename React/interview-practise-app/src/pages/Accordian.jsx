import { useState } from "react";

export default function Accordian() {
  const [activeIndex, setActiveIndex] = useState(0);
  const accordianData = [
    {
      title: "accordian 1",
      description: "accordian 1 description",
    },
    {
      title: "accordian 2",
      description: "accordian 2 description",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      {accordianData.map((acc, index) => (
        <div key={index} className="bg-gray-300 w-[20rem] ">
          <button
            className="bg-green-500 w-full"
            onClick={() => handleClick(index)}
          >
            {acc.title}
          </button>
          {activeIndex === index && <p>{acc.description}</p>}
        </div>
      ))}
    </>
  );
}
