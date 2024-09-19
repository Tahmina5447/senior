import { Table } from "antd";
import React from "react";

const CustomNotHoverTable = ({ tableData, columns, scroll,show=10 }) => {
  const [start, setStart] = React.useState(1);
  const [end, setend] = React.useState(show);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // ====table pagination funcation====
  const handlePaginationChange = (page, pageSize) => {
    scrollTop()
    console.log(`Page: ${page}, Page Size: ${pageSize}`);
    setStart((pre) => (page === 1 ? 1 : page * show - (show-1)));
    setend((pre) =>
      page * show > tableData?.length ? tableData?.length : page * show
    );
  };
  const paginationOptions = {
    pageSize: show,
    onChange: handlePaginationChange,
  };

  return (
    <div className="lg:relative text-secondary text-base w-full">
      <Table
        columns={columns}
        className="admin__Table"
        dataSource={tableData}
        pagination={paginationOptions}
        scroll={scroll}

      />
      <div className="lg:block text-light-black font-medium text-[13px] lg:absolute bottom-[25px] left-6 hidden ">
        Showing {start} to {end} of {tableData?.length} entries
      </div>
    </div>
  );
};

export default CustomNotHoverTable;
