import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

type Props = {
  darkMode : boolean,
  toggleDarkMode: ()=>void
}

export default function NavBar({darkMode, toggleDarkMode}:Props) {

  return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">NET-Store</Typography>
            <IconButton onClick={toggleDarkMode}>
                {darkMode ? <DarkMode/> : <LightMode sx={{color:'yellow'}}/>}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}