import React from 'react';
import { ClusterOutlined, PrinterOutlined, DashboardOutlined, DesktopOutlined, BookOutlined, ContactsOutlined, UsergroupAddOutlined, ReadOutlined, PieChartOutlined } from '@ant-design/icons';

export const menuIcon = (iconName) => {
  switch (iconName) {
  case 'PieChartOutlined': return <PieChartOutlined />;
  case 'DesktopOutlined': return <DesktopOutlined />;
  case 'DashboardOutlined': return <DashboardOutlined />;
  case 'PrinterOutlined': return <PrinterOutlined  />;
  case 'BookOutlined': return <BookOutlined  />;
  case 'ContactsOutlined': return <ContactsOutlined />;
  case 'UsergroupAddOutlined': return <UsergroupAddOutlined />;
  case 'ReadOutlined': return <ReadOutlined />;
  case 'ClusterOutlined': return <ClusterOutlined />;
    
  }
  return iconName;
}
