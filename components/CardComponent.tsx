import React from 'react';
import { Card, Button } from 'react-bootstrap';

export interface CardComponentProps  {
    cardItemInfo : CardItem
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

    goDetail = () => {

    }

    render(){
        const {cardItemInfo} = this.props;
        return (
            <Card style={{ width: '18rem', margin: '30px' }}>
                <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_173d8b23cb2%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_173d8b23cb2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.0078125%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                <Card.Body>
                    <Card.Title>{cardItemInfo.CardHeaderTitle}</Card.Title>
                    <Card.Text>
                        {cardItemInfo.CardHeaderSubheader}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    }


} export default CardComponent;
