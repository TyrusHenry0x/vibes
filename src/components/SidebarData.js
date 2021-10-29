import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

const SideBarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "New",
    icon: <AddBoxIcon />,
    link: "/new",
  },
  {
    title: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
  {
    title: "Contact",
    icon: <ContactSupportIcon />,
    link: "/support",
  },
]

export default SideBarData