import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { Navbar, Button } from 'flowbite-react';
import { HiMoon, HiSun } from 'react-icons/hi';

const NavbarWithThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <Navbar fluid={true} rounded={true} className='bg-slate-200'>
        <Navbar.Brand href="#">
          <h1 className='text-blue-400 text-lg font-semibold mt-[10px] text-[22px]'>Report Dashboard</h1>

        </Navbar.Brand>
        <Navbar.Collapse>
          <Button onClick={toggleTheme} color="gray">
            {darkMode ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
            {darkMode ? ' Light Mode' : ' Dark Mode'}
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <Grid container spacing={2}>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </>
  );
};

export default NavbarWithThemeToggle;
