import React, {Component} from 'react';


class PostButton extends Component{
    classList = "btn fab fa-" + this.props.type;

    render(){
        console.log(this.props.color);
        return (<button id="tweet-quote" className={this.classList} style={{backgroundColor : this.props.color}} />);

    }
}

export default PostButton;