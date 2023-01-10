import React, {useState} from 'react'
import { AppBar, Tabs, Tab, Toolbar, Button} from "@mui/material/"

const Header=()=>{
    const [value, setValue] = useState();
    return (
        <React.Fragment>
            <AppBar sx={{background: "#191919"}}>
                <Toolbar>
                    <h1>Quizz</h1>
                    <Tabs sx={{marginLeft: "auto"}}textColor="inherit" value={value} onChange={(e,value)=> setValue(value)}>
                        <Tab label = "Quizzes"/>
                        <Tab label = "News"/>
                        <Tab label = "Topics"/>
                        <Tab label = "Support"/>
                    </Tabs>
                    <Button sx={{borderRadius: 28, background:"#191919",marginLeft:"auto"}}variant="containted">Log in</Button>
                    <Button sx={{borderRadius: 28, background:"#191919",marginLeft:"10px"}}variant="containted">Sign up</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Header;