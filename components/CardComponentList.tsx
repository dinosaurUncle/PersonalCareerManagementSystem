import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardComponent, {CardItem} from "./CardComponent";



class CardComponentList extends React.Component {

    render(){
        const cardItemList:Array<CardItem> =
        [
            {
                CardLabel : "R",
                CardHeaderTitle : "Shrimp and Chorizo Paella",
                CardHeaderSubheader : "Shrimp and Chorizo Paella",
                CardMediaImage : "",
                CardMediaTitle: "Paella dish",
                CardContent : "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
            },
            {
                CardLabel : "C",
                CardHeaderTitle : "개발자 박종훈 이력 ",
                CardHeaderSubheader : "fullstack 개발자 입니다",
                CardMediaImage : "",
                CardMediaTitle: "",
                CardContent : "                                                            ",

            },
            {
                CardLabel : "",
                CardHeaderTitle : "",
                CardHeaderSubheader : "",
                CardMediaImage : "",
                CardMediaTitle: "",
                CardContent : "",

            },
            {
                CardLabel : "",
                CardHeaderTitle : "",
                CardHeaderSubheader : "",
                CardMediaImage : "",
                CardMediaTitle: "",
                CardContent : "",
            },
            {
                CardLabel : "",
                CardHeaderTitle : "",
                CardHeaderSubheader : "",
                CardMediaImage : "",
                CardMediaTitle: "",
                CardContent : "",
            }

        ];
        return (
            <div >
                <Grid container spacing={2}>
                    {cardItemList.map((cardItem, i) => {
                        return (<div key={i}><Grid item xs={12} md={2}></Grid>
                            <Grid item xs={12} md={10}>
                                <CardComponent CardItem={cardItem}/>
                            </Grid></div>);

                    })}
                </Grid>
            </div>
        );
    }


} export default CardComponentList;
