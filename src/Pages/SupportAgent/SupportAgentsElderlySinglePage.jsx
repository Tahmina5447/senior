import React, { useContext, useEffect, useState } from "react";
import BreadCrumb from "../../Shared/TopHeading/BreadCrumb";
import SingleElderly from "../../Components/Admin/Elderly/SingleElderly/SingleElderly";
import { useParams } from "react-router-dom";
import { Elderlies } from "../../assets/admin/data";
import { SidebarContext } from "../../Context/CustomContext";

const SupportAgentsElderlySinglePage = () => {
  const params = useParams();
  const [data, setData] = useState();
  const {BreadCrumbData} = useContext(SidebarContext)

  const Id = Number(params.id);
  useEffect(() => {
    const singleUser = Elderlies.find((user) => user.id === Id);
    if (singleUser) {
      setData(singleUser);
    }
  }, [Id]);


  return (
    <>
      <BreadCrumb
        title={"Elderly"}
        links={[
          { title: "Home", url: "/super-admin/dashboard" },
          { title: `${BreadCrumbData.title}`, url: `${BreadCrumbData.url}`},
          { title: `${data?.firstName} ${data?.lastName}`, url: "" }
        ]}
      />
      <div className="grid grid-cols-1 lg:mt-[-30px]">
        <SingleElderly userId={Id} />
      </div>
    </>
  );
};

export default SupportAgentsElderlySinglePage;
