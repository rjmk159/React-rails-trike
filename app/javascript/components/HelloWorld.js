import React from "react"
import PropTypes from "prop-types"
import { Button } from '../assets/react/app/_modules/Button';

class HelloWorld extends React.Component {
  render () {
    return (
      <>
        Greeting: {this.props.greeting}
        <Button text="Try Again" onClick={()=>console.log('xwxw')} type="outline" isLoading={false} />

      </>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
