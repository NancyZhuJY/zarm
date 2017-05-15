
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class PanelFooter extends Component {

  render () { 
    const { className, children, ...others } = this.props;

    const cls = classnames({
      'ui-panel-footer': true,
      [className]      : !!className
    });
    
    return <div {...others} className={cls}>{children}</div>;
  }

}

export default PanelFooter;