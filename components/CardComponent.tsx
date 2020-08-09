import React from 'react';
import { createStyles, WithStyles, withStyles} from '@material-ui/core/styles';
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 30,
            maxWidth: 345,
            width: 270
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    });


export interface CardComponentProps extends WithStyles<typeof useStyles> {
    CardItem : CardItem
}

export interface  CardItem {
    CardLabel : string
    CardHeaderTitle : string
    CardHeaderSubheader : string
    CardMediaImage : string
    CardMediaTitle: string
    CardContent : string
}

export interface CardComponentState {
    CardMediaImage : string
    CardMediaTitle: string
}



class CardComponent extends React.Component<CardComponentProps> {

    state : CardComponentState ={
        CardMediaImage : this.props.CardItem.CardMediaImage ? this.props.CardItem.CardMediaImage : "",
        CardMediaTitle : this.props.CardItem.CardMediaTitle ? this.props.CardItem.CardMediaTitle : ""
    }
    render(){
        const {classes, CardItem} = this.props;
        return (
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {CardItem.CardLabel}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={CardItem.CardHeaderTitle}
                    subheader={CardItem.CardHeaderSubheader}
                />
                <img src="https://prezentr.com/wp-content/uploads/2016/07/Flat-Design-PowerPoint-Template-Preview-810x456.png" />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {CardItem.CardContent}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        );
    }


} export default withStyles(useStyles)(CardComponent);
