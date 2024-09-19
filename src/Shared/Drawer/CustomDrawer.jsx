import { Drawer } from "antd";
import React from "react";

const CustomDrawer = ({children,open,setOpen}) => {
    const onClose = () => {
        setOpen(false);
      };
  return (
    <Drawer
      placement={"left"}
      closable={false}
      onClose={onClose}
      open={open}
      width={240}
    >
       {children}
    </Drawer>
  );
};

export default CustomDrawer;
