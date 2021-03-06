import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserOutlined, DollarOutlined } from '@ant-design/icons';
import { MdGroup } from 'react-icons/md';
import { BiDoorOpen } from 'react-icons/bi';
import { Layout, Menu } from "antd";
import { getAuth } from "firebase/auth";

const { Sider } = Layout;
const { SubMenu } = Menu;

const MenuComponent = () => {
  const [collapsed, setCollapsed] = useState<boolean | undefined>(true);
  const location = useLocation()
  const navigate = useNavigate();

  const onCollapse = (collapsed: boolean | undefined) => setCollapsed(collapsed);
  
  const signOut = async () => {
    await getAuth().signOut();
  }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline">
        <Menu.Item onClick={() => navigate("/ventas")} key="/ventas" icon={<DollarOutlined /> }>
          Ventas
        </Menu.Item>
        {
          <Menu.Item onClick={() => navigate("/usuarios")} key="/usuarios" icon={<MdGroup /> }>
            Usuarios
          </Menu.Item>
        }
        <SubMenu key="sub1" icon={<UserOutlined />} title="Cuenta">
          <Menu.Item key="4" icon={<BiDoorOpen />} onClick={signOut}>Cerrar sesión</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default MenuComponent;