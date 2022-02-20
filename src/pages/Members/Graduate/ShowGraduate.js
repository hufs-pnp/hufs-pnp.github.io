import React, { Component } from 'react'
import graduatesData from './graduatesData.json';

class ShowMember extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
    }
  }
  render() {
    const memberItem = graduatesData.map((Data) => {
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div
            className="h-full flex items-center border-purple-300 border p-4 rounded-lg transform hover:shadow-lg motion-reduce:transform-none"
            onMouseOver={(event) => {
              this.setState({ name: Data.name })
            }}
            onMouseLeave={(event) => {
              this.setState({ name: Data.null })
            }}
          >
            <div>
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
            </div>
            <div className="flex-grow mt-2 -ml-4">
              <div>
                <h2 className="text-black-900 title-font font-medium text-center">
                  {Data.name}
                </h2>
                <p className="text-gray-500 text-center">{Data.classof}</p>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return <div class="flex flex-wrap -m-2">{memberItem}</div>
  }
}

export default ShowMember
