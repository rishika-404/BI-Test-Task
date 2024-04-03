import React from "react";
import { GoDotFill } from "react-icons/go";

const LiveUpdate = () => {
    const list = [
        { id: 1, title: "10 new cases in Maharashtra", dotColor: "text-sky-500" },
        { id: 2, title: "5 new cases in Delhi", dotColor: "text-sky-500" },
        { id: 3, title: "3 new cases in Tamil Nadu", dotColor: "text-sky-500" },
        { id: 4, title: "2 new cases in Karnataka", dotColor: "text-sky-500" },
        { id: 5, title: "7 new cases in Kerala", dotColor: "text-sky-500" },
        { id: 6, title: "4 new cases in Uttar Pradesh", dotColor: "text-sky-500" },
        { id: 7, title: "1 new case in Rajasthan", dotColor: "text-sky-500" },
        { id: 8, title: "1 new case in Gujarat", dotColor: "text-sky-500" }
      ];

  return (
    <div className="bg-inherit overflow-hidden">

      <ul className="list-none py-3 px-2">
        {list.map(item => (
          <li key={item.id} className="flex items-center gap-1 py-2">
            <p className={`text-lg ${item.dotColor}`}>
              <GoDotFill />
            </p>
            <p className="text-zinc-600 text-base">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveUpdate;
