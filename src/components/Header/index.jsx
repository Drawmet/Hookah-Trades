import React, {Component} from 'react';

import Logo from './Logo';

class Header extends Component {
    render(){
        return (
            <div style={{width: '100%', margin: '10px'}}>
                <header>
                    <Logo />
                </header>
            </div>
        )
    }
}

export default Header;