import React from 'react';
import { render } from 'react-dom';

// export class Home extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Welcome to Applican!</h1>
//         <h2>The can-do job searcher that's right for you</h2>
//         <form>
//           <p>Search by Title or Search by Location</p>
//           <input type="text" value="title" />
//           <input type="text" value="location" />
//         </form>
//       </div>);
//   }
// }

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', location: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.persist();
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // 
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Welcome to Applican</h1>
        <h2>The can-do job searcher that's right for you!</h2>
        <form onSubmit={this.handleSubmit}>
          Search by Title:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <br />
          {/* Search by Location:
          <input type="text" value={this.state.location} onChange={this.handleChange} />
          <br />*/}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Home;