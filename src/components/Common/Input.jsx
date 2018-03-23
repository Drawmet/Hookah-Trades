import React, {Component} from 'react';

class Input extends Component {
    state = {
        inputValue: '',
    }

    handleOnChange = (event) => {
        const {onChange} = this.props;
        event.preventDefault();

        onChange(event);

        this.setState({inputValue: event.target.value});
    }

    render() {
        const {inputValue} = this.state;
        const {type, style, placeholder} = this.props;

        return (
            <input 
                className='input'
                type={type} 
                value={inputValue} 
                style={style ? style : {}} 
                onChange={this.handleOnChange}
                placeholder={placeholder}
            />
        );
    }
}

export default Input;