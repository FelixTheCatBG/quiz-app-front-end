import React, {useState} from 'react'
import { AppBar, Tabs, Tab, Toolbar, Button} from "@mui/material/"
import SchoolIcon from '@mui/icons-material/School'

const Header = () => {
    const [value, setValue] = useState();
    return (
        <React.Fragment>
            <AppBar sx={{background: "#191919"}}>
                <Toolbar>
                    <SchoolIcon/>
                    <Tabs sx={{marginLeft: "auto"}}textColor="inherit" value={value} onChange={(e,value)=> setValue(value)}>
                        <Tab label = "Quizes"/>
                        <Tab label = "Topics"/>
                        <Tab label = "Answers"/>
                        <Tab label = "Support"/>
                    </Tabs>
                    <Button sx={{borderRadius: 28, background:"191919",marginLeft:"auto"}}variant="containted">Login</Button>
                    <Button sx={{borderRadius: 28, background:"191919",marginLeft:"10px"}}variant="containted">Signup</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Header;