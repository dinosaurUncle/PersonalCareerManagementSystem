import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardComponent from "./CardComponent";

export interface  CardItem {
    CardLabel : string
    CardHeaderTitle : string
    CardHeaderSubheader : string
    CardMediaImage : string
    CardMediaTitle: string
    CardContent : string
    CardContentTypography1: string
    CardContentTypography2: string
    CardContentTypography3: string
    CardContentTypography4: string
    CardContentTypography5: string
}

class CardComponentList extends React.Component {

    render(){
        const cardItemList:Array<CardItem> =
        [
            {
                CardLabel : "",
                CardHeaderTitle : "",
                CardHeaderSubheader : "",
                CardMediaImage : "",
                CardMediaTitle: "",
                CardContent : "",
                CardContentTypography1: "",
                CardContentTypography2: "",
                CardContentTypography3: "",
                CardContentTypography4: "",
                CardContentTypography5: "",

            },
            {
                CardLabel : "",
                CardHeaderTitle : "",
                CardHeaderSubheader : "",
                CardMediaImage : "",
                CardMediaTitle: "",
                CardContent : "",
                CardContentTypography1: "",
                CardContentTypography2: "",
                CardContentTypography3: "",
                CardContentTypography4: "",
                CardContentTypography5: "",

            },
            {
                CardLabel : "",
                CardHeaderTitle : "",
                CardHeaderSubheader : "",
                CardMediaImage : "",
                CardMediaTitle: "",
                CardContent : "",
                CardContentTypography1: "",
                CardContentTypography2: "",
                CardContentTypography3: "",
                CardContentTypography4: "",
                CardContentTypography5: "",

            },
            {
                CardLabel : "",
                CardHeaderTitle : "",
                CardHeaderSubheader : "",
                CardMediaImage : "",
                CardMediaTitle: "",
                CardContent : "",
                CardContentTypography1: "",
                CardContentTypography2: "",
                CardContentTypography3: "",
                CardContentTypography4: "",
                CardContentTypography5: "",

            },
            {
                CardLabel : "",
                CardHeaderTitle : "",
                CardHeaderSubheader : "",
                CardMediaImage : "",
                CardMediaTitle: "",
                CardContent : "",
                CardContentTypography1: "",
                CardContentTypography2: "",
                CardContentTypography3: "",
                CardContentTypography4: "",
                CardContentTypography5: "",

            }

        ];
        return (
            <div >
                <Grid container spacing={2}>
                    {cardItemList.map((cardItem, i) => {
                        if (i % 2 != 0) return (<div><Grid item xs={12} md={2}></Grid>
                        <Grid item xs={12} md={10}>
                            <CardComponent CardItem={cardItem}/>
                        </Grid></div>)
                        else return(<div><Grid item xs={12} md={10}>
                            <CardComponent CardItem={cardItem}/>
                        </Grid>
                            <Grid item xs={12} md={2}></Grid></div>);

                    })}
                </Grid>
            </div>
        );
    }


} export default CardComponentList;
