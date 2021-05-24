import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { Menu } from "antd";
import s from "./styles.module.css";

const navItems = [
  {
    to: "/axios",
    label: "Axios",
  },
  {
    to: "/formik",
    label: "Formik ",
  },
];

const MainLayout: FC<any> = (props) => {
  const { children } = props;
  const router = useRouter();
  const handleMenuClick = (e: any) => router.push(e.key);

  return (
    <div className={s.container}>
      <Menu
        onClick={handleMenuClick}
        selectedKeys={[router.asPath]}
        mode="horizontal"
        className={s.navbar}
      >
        {navItems.map((navItem) => (
          <Menu.Item key={navItem.to}>{navItem.label}</Menu.Item>
        ))}
      </Menu>
      {children}
    </div>
  );
};

export default MainLayout;
