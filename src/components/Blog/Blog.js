import React, { Component } from "react";
import CreateControl from "./submit/CreateControl";
import UpdateControl from "./submit/UpdateControl";
import CreateContent from "./submit/CreateContent";
import ReadContent from "./submit/ReadContent";
import UpdateContent from "./submit/UpdateContent";
import ArticleTableHead from './table/ArticleTableHead';
import ArticleTableBody from './table/ArticleTableBody';
import Type from "./Type";
import "./styles/styles.css";
import ParticlesBg from 'particles-bg';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max_content_id: 0,//전체 게시물 번호 매김
      mode: 'post',
      selected_content_id: 0,//선택된 게시글 번호
      selected_type_id: 0,//카테고리 id
      selected_category: "전체",
      type: [
        { id: 0, title: "total", desc: '전체' },
        { id: 1, title: "WEB", desc: "WEB" },
        { id: 2, title: "AI", desc: "AI" },
        { id: 3, title: "DATA", desc: "DATA" },
        { id: 4, title: "GAME", desc: "GAME" },
        { id: 5, title: "공백", desc: "공백" },
        { id: 6, title: "공백", desc: "공백" },
        { id: 7, title: "etc", desc: "기타" }
      ],
      contents: [ // 보여지는 게시글 리스트 

      ],
      total_contents: [ // 전체글 리스트 

      ]
    }
  }
  getReadContent() {
    var i = 0;
    while (i < this.state.total_contents.length) {
      var data = this.state.total_contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }
  render() {
    var _title, _desc, _article = null;
    if (this.state.mode === 'create' || this.state.mode === 'update' || this.state.mode === 'read') {
      var _type = <div></div>
      var _table = <div></div>
    } else {
      _type = //카테고리 분류 
        <Type onchangePage={function (category) {
          var _category = category;
          var _contents = Array.from(this.state.total_contents);
          var category_contents = [];
          var i = 0;

          if (_category === "전체") {
            category_contents = _contents;
          } else {
            while (i < _contents.length) {
              if (_contents[i].category === _category) {
                category_contents.push(_contents[i]);
              }
              i = i + 1;
            }
          }


          this.setState({
            mode: 'post',
            //selected_type_id:Number(id),
            selected_category: category,
            contents: category_contents
          });
        }.bind(this)}
          data={this.state.type} />

      _table =
        <>
          <div className="mx-32 flex flex-col items-center justify-center text-center">
            <div className="w-full px-4 md:px-10 py-4 md:py-7 border-b-2 border-gray-800">
              <div className="sm:flex items-center justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Blog 글 목록</p>
                <div className="text-white">
                  <CreateControl onchangeMode={function (_mode) {

                    if (_mode === 'delete') {
                      if (window.confirm("이 게시물을 삭제하시겠습니까?")) {
                        var i = this.state.selected_content_id;
                        var new_max_content_id = this.state.max_content_id - 1;
                        var _contents = Array.from(this.state.total_contents);
                        _contents.splice(i, 1);
                        this.setState({
                          mode: 'read',
                          total_contents: _contents,
                          max_content_id: new_max_content_id,
                        });
                        alert("삭제되었습니다.");
                      }
                    } else {
                      this.setState({ mode: _mode });
                    }

                  }.bind(this)} />
                </div>
              </div>
            </div>
            <table className="w-full">
              <ArticleTableHead headersName={['글번호', '분류', '제목', '작성일', 'view']}></ArticleTableHead>
              <ArticleTableBody data={this.state.contents} onchangePage={function (id) {
                this.setState({
                  mode: 'read',
                  selected_content_id: Number(id)
                });
              }.bind(this)}></ArticleTableBody>
            </table>
          </div>
        </>

    }

    if (this.state.mode === 'read') { //선택된 게시물과 리스트가 같이 뜸 

      var i = this.state.selected_content_id;

      _title = this.getReadContent().title;
      var _category = this.getReadContent().category;
      var _expire = this.getReadContent().expire;
      _desc = this.getReadContent().desc;
      var _category = this.getReadContent().category;
      var _expire = this.getReadContent().expire;

      _article = <>
        <ReadContent title={_title} desc={_desc} category={_category} expire={_expire} />
        <UpdateControl onchangeMode={function (_mode) {
          if (_mode === 'delete') {
            if (window.confirm("이 게시물을 삭제하시겠습니까?")) {
              var i = this.state.selected_content_id;
              var new_max_content_id = this.state.max_content_id - 1;
              var _contents = Array.from(this.state.total_contents);
              _contents.splice(i, 1);
              this.setState({
                contents: _contents,
                selected_category: "전체",
                mode: 'post',
                total_contents: _contents,
                max_content_id: new_max_content_id
              });
              alert("삭제되었습니다.");
            }
          }
          else {
            this.setState({ mode: _mode });
          }

        }.bind(this)} />



      </>

    } else if (this.state.mode === 'post') { //리스트만 뜸

      _article = <>
      </>

    } else if (this.state.mode === 'create') {
      _article = <CreateContent
        onCancel={
          function (_mode) {
            if (window.confirm("글 작성을 중단하시겠습니까?")) {
              this.setState({
                mode: _mode
              })
              alert("글 작성이 취소되었습니다.");
            }

          }.bind(this)}
        onSubmit={
          function (_category, _title, _desc) {
            var new_max_content_id = this.state.max_content_id + 1;
            //var _type=this.state.selected_type_id;
            var _contents = Array.from(this.state.total_contents);
            _contents.push({ id: new_max_content_id, category: _category, title: _title, expire: '2021-05-21', people_num: 0, desc: _desc });
            console.log(_contents);
            this.setState({
              total_contents: _contents,
              contents: _contents,
              selected_category: "전체",
              mode: 'post',
              max_content_id: new_max_content_id
            })
            alert("글이 등록되었습니다!");
          }.bind(this)}>


      </CreateContent>

    } else if (this.state.mode === 'update') {
      i = this.state.selected_content_id;
      var _content = this.state.total_contents[i];
      _article = <UpdateContent data={_content} onSubmit={
        function (_category, _title, _desc) {
          var _id = _content.id;
          console.log(_id, _category, _title, _desc);
          i = this.state.selected_content_id;
          var _contents = Array.from(this.state.total_contents);
          _contents[i] = { id: _id, category: _category, title: _title, expire: '2021-05-12', people_num: 0, desc: _desc }

          this.setState({
            total_contents: _contents,
            contents: _contents,
            mode: 'post',
            selected_category: "전체",

          })
          alert("글이 수정되었습니다!");
        }.bind(this)}>

      </UpdateContent>
    }

    return (
      <div className="category">
        <ParticlesBg type="cobweb" bg={true} />
        <hr className="mainline"></hr>
        <div class="bg-white">
          {_type}
          {_article}
          <div className="w-full sm:px-6">
            {_table}
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class="bg-white absolute bottom-0">
          <div className="border-2">
            <footer class="dark:bg-coolGray-800 dark:text-coolGray-50">
              <div class="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">

                <div class="grid justify-center pt-6 lg:justify-between">
                  <div class="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                    <span>©2022 PnP</span>
                    <a href="#">
                      <span>Privacy policy</span>
                    </a>
                    <a href="#">
                      <span>Terms of service</span>
                    </a>
                  </div>
                  <div class="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                    <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-coolGray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </a>
                    <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-coolGray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" class="w-5 h-5">
                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                      </svg>
                    </a>
                    <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-coolGray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
