import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
// import { SideNav } from '../Navigation/side-nav';
import { TopNav } from '../Navigation/top-nav';
import { usePathname } from 'next/navigation';

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
//   [theme.breakpoints.up('lg')]: {
//     paddingLeft: SIDE_NAV_WIDTH
//   }
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
});

export const DashboardLayout = (props) => {
  const { children } = props;
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(true);

  useEffect(
    () => {
      if (openNav) {
        setOpenNav(false);
      }
    },
    [pathname, openNav]
  );

  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      {/* <SideNav
        onClose={() => setOpenNav(false)}
        open={openNav}
      /> */}
      <LayoutRoot>
        <LayoutContainer>
          {children}
        </LayoutContainer>
      </LayoutRoot>
    </>
  );
};
