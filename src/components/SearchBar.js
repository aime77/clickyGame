import React from "react";

class SearchBar extends React.Component {
  state = { term: "cars" };
  onFormSubmit=event=>{
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    console.log(this.state.term);
  }

  

  render() {
    const style2={
    fontFamily:"Georgia", 
    fontSize: "15px"
  }
    return (
      <div className="ui segment" >
        <form onSubmit={this.onFormSubmit} className="ui form" >
          <div className="field">
            <label style={style2}>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
