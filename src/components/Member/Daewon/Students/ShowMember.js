import React, { Component } from 'react'
import memberData from './memberData.json'

class ShowMember extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
    }
  }
  render() {
    const memberItem = memberData.map((Data) => {
      return (
        <div
          className="h-20 w-44 flex items-center border-purple-300 border rounded-lg mb-8 ml-28 transform hover:shadow-lg motion-reduce:transform-none"
          onMouseOver={(event) => {
            this.setState({ name: Data.name })
          }}
          onMouseLeave={(event) => {
            this.setState({ name: Data.null })
          }}
        >
          <div>
            {(() => {
              if (Data.profileImage === ' ') {
                return (
                  <div className="w-16 h-16 inline-flex object-center items-center justify-center bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 ml-4">
                    <svg
                      className="items-center justify-center w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </div>
                )
              } else {
                return (
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={Data.profileImage}
                  />
                )
              }
            })()}
          </div>
          <div className="flex-grow mt-2 -ml-4">
            {(() => {
              if (this.state.name !== Data.name) {
                return (
                  <div>
                    <h2 className="text-black-900 title-font font-medium text-center">
                      {Data.name}
                    </h2>
                    <p className="text-gray-500 text-center">{Data.classof}</p>
                  </div>
                )
              } else {
                return (
                  <div class="flex flex-row ml-4">
                    <div class="flex flex-row">
                      {(() => {
                        if (Data.github !== 'none') {
                          return (
                            <img
                              class="w-4 h-4 transform hover:scale-110 motion-reduce:transform-none cursor-pointer"
                              alt="google"
                              src="https://cdn.pixabay.com/photo/2021/09/11/12/17/github-6615451_960_720.png"
                              onClick={() => window.open(Data.github, '_blank')}
                              title="URL_githb"
                            ></img>
                          )
                        }
                      })()}
                      {(() => {
                        if (Data.github === 'none') {
                          return (
                            <img
                              class="w-4 h-4 transform hover:scale-110 motion-reduce:transform-none cursor-pointer"
                              alt="google"
                              src="https://cdn.pixabay.com/photo/2013/07/12/12/40/abort-146096_960_720.png"
                              onClick={() => alert('empty_github_URL')}
                              title="empty_githb_URL"
                            ></img>
                          )
                        }
                      })()}
                      {(() => {
                        if (Data.blog !== 'none') {
                          return (
                            <img
                              class="w-4 h-4 ml-2 transform hover:scale-110 motion-reduce:transform-none cursor-pointer"
                              alt="google"
                              src="https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843_960_720.png"
                              onClick={() => window.open(Data.blog, '_blank')}
                              title="URL_blog"
                            ></img>
                          )
                        }
                      })()}
                      {(() => {
                        if (Data.blog === 'none') {
                          return (
                            <img
                              class="w-4 h-4 ml-2 transform hover:scale-110 motion-reduce:transform-none cursor-pointer"
                              alt="google"
                              src="https://cdn.pixabay.com/photo/2013/07/12/12/40/abort-146096_960_720.png"
                              onClick={() => alert('empty_blog_URL')}
                              title="empty_blog_URL"
                            ></img>
                          )
                        }
                      })()}
                      {(() => {
                        if (Data.email !== 'none') {
                          return (
                            <img
                              class="w-4 h-4 ml-2 transform hover:scale-110 motion-reduce:transform-none cursor-pointer"
                              alt="google"
                              src="https://cdn.pixabay.com/photo/2014/07/10/14/58/letters-389108_960_720.png"
                              onClick={() => alert('email: ' + Data.email)}
                              title={Data.email}
                            ></img>
                          )
                        }
                      })()}
                      {(() => {
                        if (Data.email === 'none') {
                          return (
                            <img
                              class="w-4 h-4 ml-2 transform hover:scale-110 motion-reduce:transform-none cursor-pointer"
                              alt="google"
                              src="https://cdn.pixabay.com/photo/2013/07/12/12/40/abort-146096_960_720.png"
                              onClick={() => alert('empty_email')}
                              title="empty_email"
                            ></img>
                          )
                        }
                      })()}
                    </div>
                  </div>
                )
              }
            })()}
          </div>
        </div>
      )
    })
    return <div class="flex flex-wrap">{memberItem}</div>
  }
}

export default ShowMember

/*
class ShowMember extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
    }
  }
  render() {
    const memberItem = memberData.map((Data) => {
      return (
        <div
          className="h-20 w-44 flex items-center border-purple-300 border rounded-lg mb-8 ml-28 transform hover:shadow-lg motion-reduce:transform-none"
          onMouseOver={(event) => {
            this.setState({ name: Data.name })
          }}
          onMouseLeave={(event) => {
            this.setState({ name: Data.null })
          }}
        >
          <div>
            {(() => {
              if (Data.profileImage === ' ') {
                return (
                  <div className="w-16 h-16 inline-flex object-center items-center justify-center bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 ml-4">
                    <svg
                      className="items-center justify-center w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </div>
                )
              } else {
                return (
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={Data.profileImage}
                  />
                )
              }
            })()}
          </div>
          <div className="flex-grow mt-2 -ml-4">
            {(() => {
              if (this.state.name !== Data.name) {
                return (
                  <div>
                    <h2 className="text-black-900 title-font font-medium text-center">
                      {Data.name}
                    </h2>
                    <p className="text-gray-500 text-center">{Data.classof}</p>
                  </div>
                )
              } else {
                return (
                  <div class="flex flex-row ml-4">
                    <div class="flex flex-row">
                      {(() => {
                        if (Data.github !== 'none') {
                          return (
                            <img
                              class="w-4 h-4 transform hover:scale-110 motion-reduce:transform-none"
                              alt="google"
                              src="https://cdn.pixabay.com/photo/2021/09/11/12/17/github-6615451_960_720.png"
                              onClick={() => window.open(Data.github, '_blank')}
                              title="URL_githb"
                            ></img>
                          )
                        }
                      })()}
                      {(() => {
                        if (Data.blog !== 'none') {
                          return (
                            <img
                              class="w-4 h-4 ml-2 transform hover:scale-110 motion-reduce:transform-none"
                              alt="google"
                              src="https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843_960_720.png"
                              onClick={() => window.open(Data.blog, '_blank')}
                              title="URL_blog"
                            ></img>
                          )
                        } else {
                          <img
                            class="w-4 h-4 transform hover:scale-110 motion-reduce:transform-none"
                            alt="google"
                            src="https://cdn.pixabay.com/photo/2013/07/12/12/40/abort-146096_960_720.png"
                            onClick={() => alert('empty_URL')}
                            title="empty_URL"
                          ></img>
                        }
                      })()}
                      {(() => {
                        if (Data.email !== 'none') {
                          return (
                            <img
                              class="w-4 h-4 ml-2 transform hover:scale-110 motion-reduce:transform-none"
                              alt="google"
                              src="https://cdn.pixabay.com/photo/2014/07/10/14/58/letters-389108_960_720.png"
                              onClick={() => alert('email: ' + Data.email)}
                              title={Data.email}
                            ></img>
                          )
                        } else {
                          ;<img
                            class="w-4 h-4 transform hover:scale-110 motion-reduce:transform-none"
                            alt="google"
                            src="https://cdn.pixabay.com/photo/2013/07/12/12/40/abort-146096_960_720.png"
                            onClick={() => alert('empty_URL')}
                            title="empty_URL"
                          ></img>
                        }
                      })()}
                    </div>
                  </div>
                )
              }
            })()}
          </div>
        </div>
      )
    })
    return <div class="flex flex-wrap">{memberItem}</div>
  }
}

export default ShowMember;
*/
