import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import arzt from "./profile doc transperent.png"
import assistant from "./male assistant profile.png"
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Team extends Component {

    render() {
        return (
            <ScrollableAnchor id={'team'}>
                <Paper square={true} style={{ height: 700, backgroundColor: lightGreen[500], overflowX: "hidden" }}>
                    <Typography style={{ color: "white", paddingTop: 30, fontSize: 40, fontWeight: 500, textAlign: "center", }}>Our team</Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <img src={arzt} alt="arzt" style={{ float: "left", height: 200, marginTop: 70, marginRight: -70,marginLeft:-30}} />
                            <Typography style={{ color: "white", paddingTop: 70, fontSize: 17, fontWeight: 500, textAlign: "left", paddingLeft: 230, paddingRight: 80 }}>
                                Dr. Moris Miller studied medicine at the university in Frankfurt am Main.
    </Typography>
                            <Typography style={{ color: "white", fontSize: 17, fontWeight: 500, textAlign: "left", paddingLeft: 250, paddingTop: 20, paddingRight: 80 }}>
                                After his graduation in 1998,
                                he gained experience in different clinics and medical centers and spent a couple of years in England where he gathered
                                expert knowledge in the fields of surgical diagnostic and therapy, cardiology, radiology and rehabilitation. At that time Dr. Miller
                                was announced Member of the Royal College of General Practitioners in London.
    </Typography>
                            <Typography style={{ color: "white", fontSize: 17, fontWeight: 500, textAlign: "left", marginLeft: 250, paddingTop: 20, paddingRight: 80 }}>
                                After he successfully received his degree in general and internal medicine from the State Chamber
                                 of Medicine in Hessen in 2016, he founded his own practice in Darmstadt.
</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={assistant} alt="assistant" style={{ float: "left", height: 200,  marginTop: 70,  marginRight: -70, margineft: -30}} />
                            <Typography style={{ color: "white", paddingTop: 70, fontSize: 17, fontWeight: 500, textAlign: "left", paddingLeft: 210, paddingRight: 80 }}>
                            Kai is working as Dr. Miller’s qualified medical assistant since 2018. He supports Dr. Miller 
                            with delivering patient services and also helps to develop extended services to enhance patient care.
</Typography>
                            <Typography style={{ color: "white", paddingTop: 20, fontSize: 17,
                             fontWeight: 500, textAlign: "left", paddingLeft: 210, paddingRight: 80, marginRight: 20,
                             marginLeft: 70 }}>
                            He brings her passion and three years of patient-centered quality care to the practice. After graduating from Charite 
                            in 2014 in Berlin, he has worked in private practices in Germany,
                             gathering experience as diagnostic radiologist. 
                                </Typography>
                                <Typography style={{ color: "white", fontSize: 17,  paddingTop: 20,fontWeight: 500, textAlign: "left", marginLeft: 280, paddingRight: 80 }}>
                                Kai believes in maintaining and improving his patients' health and is currently supporting Dr. Miller to diagnose diseases 
                                such as asthma, diabetes and skin disease.
                                </Typography>

                    
                        </Grid>
                    </Grid>
                </Paper>
            </ScrollableAnchor>
        )
    }
}
