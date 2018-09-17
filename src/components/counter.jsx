import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //     tags: ["tag1"]
  //   };

  styles = {
    fontWeight: "bold",
    fontSize: 15
  };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  // handleIncrement = product => {
  //   // console.log(product);

  //   // console.log("Increment clicked", (this.state.count += 1));
  //   this.setState({ value: this.props.counter.value + 1 });
  // };

  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    // console.log("props", this.props.counter);
    return (
      <div className='row'>
          {this.props.children}
        <div style={{width: 60}}>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div style={{width: 200}}>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-outline-primary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-outline-primary btn-sm m-2" disabled={this.getDisabled()}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
        {/* {this.state.tags.length === 0 && <p>Please create a new Tag!</p>} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  getDisabled(){
    let disables = false;
    disables = this.props.counter.value <= 0 ? true: false;
    return disables;
  }

  formatCount() {
    //   return this.state.count === 0 ? 'Zero': this.state.count
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
