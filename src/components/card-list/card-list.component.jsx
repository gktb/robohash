import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';

export const CardList = props => (
    <div className = 'card-list'>
    {
        props.robots.map( robots => (
            <Card key= {robots.id} robots={robots}> </Card>
        )

        )
    }

    </div>
);  