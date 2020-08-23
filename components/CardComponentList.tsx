import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardComponent, {CardItem} from "./CardComponent";
import {NextPage} from "next";
import {useSelector} from "react-redux";
import {State} from "./store";
import Page from "../pages/test";


export interface CardComponentListProps {
}

class CardComponentList extends React.Component<CardComponentListProps>  {

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
        const { ...props } = this.props;
        return (
            <div >
                <Page2/>
                <Grid container spacing={2}>
                    {cardItemList.map((cardItem, i) => {
                        return <CardComponent key={i} { ...props } cardItemInfo={cardItem}/>;

                    })}
                </Grid>
            </div>
        );
    }


}
const Page2: NextPage = () => {
    const {tick} = useSelector<State, State>(state => state);
    return (
        <div>{tick}</div>
    );
};
export default CardComponentList;
