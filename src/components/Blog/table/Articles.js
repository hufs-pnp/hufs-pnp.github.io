import React, { Component } from 'react';
import ArticleTableHead from './ArticleTableHead';
import ArticleTableBody from './ArticleTableBody';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_content_id: 1,
      contents: [

      ]
    }
  }
  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }
  getContent() {

  }


  render() {
    return (
      <div>
        <table className="w-full">
          <ArticleTableHead headersName={['글번호', '분류', '제목', '작성일', 'view']}></ArticleTableHead>

        </table>
      </div>
    );
  }
}

export default Articles;