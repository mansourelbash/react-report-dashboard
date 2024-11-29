import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Grid, Box, Card, IconButton, Typography } from "@mui/material";
import { useDrag, useDrop } from "react-dnd";
import { MdFullscreen, MdFullscreenExit, MdArrowDownward, MdArrowUpward } from "react-icons/md"; 
import PieChartComponent from "../charts/PieChartComponent";
import BarChartHorizontal from "../charts/BarChartHorizontal";
import BarChartVertical from "../charts/BarChartVertical";
import LineChartComponent from "../charts/LineChartComponent";
import { pieData, horizontalBarData, verticalBarData, lineData } from "../data/dummyData";
import { TableComponent } from "./Table";
import { TimelineComponent } from "./Timeline";
import NavbarWithThemeToggle from "./NavbarWithThemeToggle";
import SidebarComponent from "./SidebarComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setFull } from '../store/fullSlice';

const ITEM_TYPE = "CARD";

interface DraggableCardProps {
  children: React.ReactNode;
  id: number;
  index: number;
  moveCard: (fromIndex: number, toIndex: number) => void;
  title: string;
  isFullscreen: boolean;
  toggleFullscreen: (index: number) => void;
  isCollapsed: boolean;
  toggleCollapse: (index: number) => void;
}

const DraggableCard: React.FC<DraggableCardProps> = ({
  children,
  id,
  index,
  moveCard,
  title,
  isFullscreen,
  toggleFullscreen,
  isCollapsed,
  toggleCollapse,
}) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index;
      }
    },
  }));

  return (
    <Grid
      ref={(node) => drag(drop(node))}
      item
      xs={12}
      sm={6}
      md={4}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <Card sx={{
        backgroundColor: darkMode ? "#000": "#f4f4f9",
        position: isFullscreen ? "fixed" : "relative", 
        zIndex: isFullscreen ? 9999 : "auto", 
        top: isFullscreen ? 0 : "auto", 
        left: isFullscreen ? 0 : "auto", 
        width: isFullscreen ? "100vw" : "auto", 
        height: isFullscreen ? "100vh" : "auto", 
        margin: isFullscreen ? 0 : "auto", 
        boxShadow: isFullscreen ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none", 
        transition: "all 0.3s ease"
      }}>
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <IconButton
            className={darkMode ? 'text-white' : 'text-black'} 
            sx={{
              marginRight: 1,
              color: darkMode ? 'white' : 'black',
              backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
              }
            }}
            onClick={() => toggleFullscreen(index)}
          >
            {isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }} className={darkMode ? 'text-white':'text-black'}>
            {title}
          </Typography>
          <IconButton
            className={darkMode ? 'text-white' : 'text-black'} 
            sx={{
              marginLeft: 1,
              color: darkMode ? 'white' : 'black',
              backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
              }
            }}
            onClick={() => toggleCollapse(index)}
          >
            {isCollapsed ? (
              <MdArrowUpward className={darkMode ? 'text-white' : 'text-black'} />
            ) : (
              <MdArrowDownward className={darkMode ? 'text-white' : 'text-black'} />
            )}
          </IconButton>
        </Box>
        <Box sx={{ position: "relative" }}>
          {isFullscreen ? (
            <Box
              sx={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1000,
                backgroundColor: "#f4f4f9",
                overflow: "auto",
              }}
            >
              {children}
            </Box>
          ) : (
            !isCollapsed && children
          )}
        </Box>
      </Card>
    </Grid>
  );
};

const Dashboard: React.FC = () => {

  const [fullscreen, setFullscreen] = useState<number | null>(null);
  const dispatch = useDispatch();
  const full = useSelector((state: any) => state.full.full);
  const [collapsed, setCollapsed] = useState<number | null>(null);
  const [cards, setCards] = useState([
    { id: 1, title: "Pie Chart", content: <PieChartComponent data={pieData} /> },
    { id: 2, title: "Bar Chart Horizontal", content: <BarChartHorizontal data={horizontalBarData}  /> },
    { id: 3, title: "Bar Chart Vertical", content: <BarChartVertical data={verticalBarData}  /> },
    { id: 4, title: "Line Chart", content: <LineChartComponent data={lineData} /> },
    { id: 5, title: "Table", content: <TableComponent /> },
    { id: 6, title: "Timeline", content: <TimelineComponent /> },
  ]);

  const moveCard = (fromIndex: number, toIndex: number) => {
    const updatedCards = [...cards];
    const [movedCard] = updatedCards.splice(fromIndex, 1);
    updatedCards.splice(toIndex, 0, movedCard);
    setCards(updatedCards);
  };

  const toggleFullscreen = (index: number) => {
    
    if (fullscreen === index) {
      setFullscreen(null);
    } else {
      setFullscreen(index);
    }
    dispatch(setFull(!full)); 
  };
  useEffect(() => {
    console.log('Full state:', full);
  }, [full]);
  const toggleCollapse = (index: number) => {
    setCollapsed(collapsed === index ? null : index);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NavbarWithThemeToggle />
        </Grid>

        <Grid item xs={2} sx={{ p: 0, height: "100vh", borderRight: 1, borderColor: "#E5E7EB" }}>
          <SidebarComponent />
        </Grid>

        <Grid item xs={10}>
          <Box sx={{ p: 2 }}>
            <Grid container spacing={5}>
              {cards.map((card, index) => (
                <DraggableCard
                  key={card.id}
                  index={index}
                  moveCard={moveCard}
                  id={card.id}
                  title={card.title}
                  isFullscreen={fullscreen === index}
                  toggleFullscreen={toggleFullscreen}
                  isCollapsed={collapsed === index}
                  toggleCollapse={toggleCollapse}
                >
                  {card.content}
                </DraggableCard>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </DndProvider>
  );
};

export default Dashboard;
