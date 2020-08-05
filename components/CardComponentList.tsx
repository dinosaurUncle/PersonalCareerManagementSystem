import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardComponent from "./CardComponent";

class CardComponentList extends React.Component {
    render(){
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}></Grid>

                    <Grid item xs={12} md={3}>
                        <CardComponent/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CardComponent/>
                    </Grid>
                    <Grid item xs={12} md={3}></Grid>
                    <Grid item xs={12} md={3}></Grid>

                    <Grid item xs={12} md={3}>
                        <CardComponent/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CardComponent/>
                    </Grid>
                    <Grid item xs={12} md={3}></Grid>
                    <Grid item xs={12} md={3}></Grid>

                    <Grid item xs={12} md={3}>
                        <CardComponent/>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CardComponent/>
                    </Grid>
                    <Grid item xs={12} md={3}></Grid>
                </Grid>
            </div>
        );
    }


} export default CardComponentList;
