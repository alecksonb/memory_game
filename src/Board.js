import React, { Component } from 'react';
import Square from './Square';

            // <h2>I am the board.  Be the board.</h2>
class Board extends Component {
    render(props) {
// const Board = () => {
        const squares = this.props.squares.map( (item) => {
            if(item.userSelected && item.systemSelected)
                return <Square square={item} key={item.id} bgColor="salmon" />
            else if(!item.userSelected && !item.systemSelected)
                return <Square square={item} key={item.id} bgColor="red" />
        });
        return (
            <div>{squares}</div>
         )
    }
}

export default Board;