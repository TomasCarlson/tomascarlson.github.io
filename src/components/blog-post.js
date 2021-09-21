import * as React from "react"


class BlogPost extends React.Component {

  constructor(props) {
    super(props);
  }

  // markup
  render() {
    return (
      <div className="w-100 h-100 d-flex" >
        <div className="w-100 text-center pr-4 pl-4 pr-sm-5 pl-sm-5 pt-3 pb-2">
          {this.props.children}
          <hr style={{visibility: 'hidden'}}></hr>
        </div>
      </div>
    )
  }
}

export default BlogPost;
