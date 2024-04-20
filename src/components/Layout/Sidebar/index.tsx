import React from 'react';
import { Box, Divider, Drawer, useMediaQuery } from '@mui/material';
import screens from '../../../screens/Admin';
import NavLink from '../NavLink';
import { Img } from './styles';
import logo from '../../../assets/Logo EcoPoints.png';

interface Props {
  open: boolean,
  onClose?: () => void
}

export const Sidebar: React.FC<Props> = ({ open, onClose }) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          backgroundColor: '#537052'
        }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 2
        }}>
          <Img src={logo} alt='EcoPoint' sx={{maxWidth: 60}} />
        </Box>
        <Divider
          sx={{
            borderColor: '#2D3748',
            mb: 1
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {screens.map((item, index) => (
            <NavLink
              {...item}
              key={index}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor='left'
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant='temporary'
    >
      {content}
    </Drawer>
  );
};

export default Sidebar;
