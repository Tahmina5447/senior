import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({title,links}) => {
  return (
    <div className=" lg:relative lg:top-[-90px] left-0 mb-5 mt-3 lg:w-[400px] w-full lg:mt-0 lg:mb-0 z-0">
      <h2 className=" text-[#2B3674] text-[34px] font-[700]">{title}</h2>
      <div>
        {links?.map((link,index)=>(
          <Link className="text-text-secondary text-sm font-[500]" key={index} to={link.url}>{link.title} {links.length - 1 > index ? "/" : ""} </Link>
        ))}
      </div>
    </div>
  );
};

export default BreadCrumb;
