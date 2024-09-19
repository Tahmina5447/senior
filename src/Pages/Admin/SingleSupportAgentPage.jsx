import React, { useContext, useEffect, useState } from 'react';
import BreadCrumb from '../../Shared/TopHeading/BreadCrumb';
import SingleSupportAgent from '../../Components/Admin/SingleSupportAgent/SingleSupportAgent';
import { SidebarContext } from '../../Context/CustomContext';
import { useParams } from 'react-router-dom';
import { SupportAgents } from '../../assets/admin/data';

const SingleSupportAgentPage = () => {
    const {BreadCrumbData} = useContext(SidebarContext)
    const params = useParams();
    const [data, setData] = useState();


    const Id = Number(params.id);
    useEffect(() => {
      const singleUser = SupportAgents.find((user) => user.id === Id);
      if (singleUser) {
        setData(singleUser);
      }
    }, [Id]);
    return (
        <div>
            <BreadCrumb title={"Support Agent"} links={[{ title: "Home", url: "/admin/dashboard" }, { title: `${BreadCrumbData.title}`, url: `${BreadCrumbData.url}`}, { title: `${data?.firstName} ${data?.lastName}`, url: "" },]} />
            <div className='grid grid-cols-1 lg:mt-[-30px]'>
                <SingleSupportAgent/>
            </div>
        </div>
    );
};

export default SingleSupportAgentPage;