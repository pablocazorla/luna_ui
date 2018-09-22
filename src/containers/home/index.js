import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/app/actions';
import {Container} from '../../components';
import Buttons from '../../samples/buttons';
//import Helmet from '../../comps/helmet';


class HomeVisual extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}    
  // }
  // componentWillReceiveProps (nextProps) {
  // }
  // componentDidMount () {
  //   this.props.fetchData();
  // }
  render() {
    return <Container>
      {/* <Helmet title="Home"/> */}
      <h1>Home</h1>
      <Buttons/>
    </Container>
  }
};

/* REDUX ***************************/

const {
  fetchData
} = actions;

// function mapStateToProps(state) {
//   const {data} = state.App;
//   return {data};
// }
const mapDispatchToProps = dispatch => {
	return {
    fetchData: () => {
      dispatch(fetchData())
    }
	}
}

const Home = connect(
  null,//mapStateToProps,
  mapDispatchToProps
)(HomeVisual);

export default Home;