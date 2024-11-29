// src/components/NavbarWithThemeToggle.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { Navbar, Button } from 'flowbite-react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { toggleTheme } from '../store/themeSlice';
import { RootState } from '../store';

const NavbarWithThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Navbar fluid={true} rounded={true} className="bg-[#f4f4f9]">
        <Navbar.Brand href="#">
          <h1 className="text-blue-400 text-lg font-semibold mt-[10px] text-[22px]">
            Report Dashboard
          </h1>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Button onClick={toggleThemeHandler} color="gray">
            {darkMode ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
            {darkMode ? ' Light Mode' : ' Dark Mode'}
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
};

export default NavbarWithThemeToggle;
