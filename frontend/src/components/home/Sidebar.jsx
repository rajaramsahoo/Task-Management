import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const data = [
    {
      title: "All Tasks",
      icon: <CgNotes />,
      link: "/",
    },
    {
      title: "Important tasks",
      icon: <MdLabelImportant />,
      link: "/importantTasks",
    },
    {
      title: "Completed Tasks",
      icon: <FaCheckDouble />,
      link: "/completedTasks",
    },
    {
      title: "Incompleted  Tasks",
      icon: <TbNotebookOff />,
      link: "/incompletedTasks",
    },
  ];
  return (
    <>
      <div className="">
        <h2 className="text-xl font-semibold">The Code Master</h2>
        <h4 className="mb-2 text-gray-400">raja@gamil.com</h4>
        <hr />
      </div>
      <div>
        {data.map((items, index) => (
          <Link
            to={items.link}
            className="my-2 flex items-center hover:bg-gray-600 p-2 rounded transition-all duration-300 "
            key={index}
          >
            {items.icon}&nbsp;
            {items.title}
          </Link>
        ))}
      </div>
      <div className="">
        <button className="bg-gray-600 w-full p-2 rounded">Log Out</button>
      </div>
    </>
  );
};

export default Sidebar;
