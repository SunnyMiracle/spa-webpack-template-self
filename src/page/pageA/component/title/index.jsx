import React from 'react';
import style from './index.less';

class Title extends React.Component {

     render() {
        return (
            <div className={style.title}>{this.props.title}</div>
        )
    }
}

export default Title;
