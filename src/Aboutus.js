import React, { Component } from 'react';
import lightGreen from '@material-ui/core/colors/lightGreen';
import healthcaresx from "./hearth100.png"
import healthcaresm from "./healthcare sm.png"
import healthcaremd from "./healthcare md.png"
import healthcarelg from "./healthcare lg.png"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ScrollableAnchor from 'react-scrollable-anchor'
import ResponsiveImgMaterialUi from "responsive-img-material-ui";


export default class Aboutus extends Component {

    render() {
        return (
            <ScrollableAnchor id={'aboutus'}>
                <Grid container direction="row"  style={{ backgroundColor: lightGreen[100], minHeight:200 , maxHeight:800}}>
                    <Grid item xs style={{ backgroundColor: lightGreen[200], minHeight: "min-content",maxHeight:650, 
                    borderRadius:16, marginTop:60,paddingBottom:20,marginBottom:40,
                    minWidth: 180, maxWidth: 500, marginLeft: 80}}>
                <Typography  style={{ color: "white", fontSize:"1.5vw", fontWeight: 700, textAlign: "left", paddingTop:30, marginLeft:90 }}>
                    Dear patients,
                        </Typography>
                <Typography style={{ color: "white",fontWeight: 700, fontSize:"1.5vw", textAlign: "left", marginTop:15, marginLeft:90 }}>
                    welcome to our practice!
                            </Typography>

                <Typography style={{ color: "white", fontSize:"1.15vw", textAlign: "left", fontWeight: 500, marginTop:50, marginLeft:90,  marginRight:40 }}>
                    Our main goal is to find your individual therapy’s option 
                    with the help of our innovative, state-of-the-art technology.
                    We focus on the prevention and early diagnosis of disorders 
                    in respiratory, digestive and integumentary system.
 </Typography>
                <Typography  style={{ color: "white",  textAlign: "left", fontSize:"1.15vw", fontWeight: 500, marginTop:50, marginLeft:90,  marginRight:40 }}>
                We ensure quality care and speedy recovery for you, our patients. 
                We pride ourselves on offering the highest level of treatment and clinical
                 excellence in a timely, professional and discreet manner.
</Typography>
<Typography  style={{ color: "white",  textAlign: "left", fontSize:"1.15vw", fontWeight: 500, marginBottom:50, marginTop:50, marginLeft:90,  marginRight:40 }}>
Your health matters, so whether you are a patient or visitor,
                                we are here to assist you before, during, and after your visit!
                                </Typography>
</Grid>
<Grid item xs style={{ backgroundColor: lightGreen[100], minHeight: "max-content", maxHeight: 600, position: "relative",
borderRadius:16, minWidth: 180, maxWidth: 500, marginTop:100}}>

<ResponsiveImgMaterialUi xs={healthcaresx} sm={healthcaresm} md={healthcaremd} lg={healthcarelg} 
style={{right: 0, marginTop: 10}}></ResponsiveImgMaterialUi>


                
                </Grid>
                </Grid>
            </ScrollableAnchor>
        )
    }
}