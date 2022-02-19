import { Component, React } from 'react'

class Introduce extends Component {
  render() {
    return (
      <div className="felx text-center mt-40 -mb-6">
        <h2 className="text-sm text-indigo-500 tracking-widest font-medium title-font mb-1">
          MEMBERS
        </h2>
        <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">
          재학생
        </h1>
      </div>
    )
  }
}
export default Introduce;

/*
class Introduce extends Component {
  render() {
    return (
      <div className="felx flex-col text-center mt-40 -mb-6">
        <div className="sm:felx flex-col justify-center text-center mt-40 -mb-6">
          <h2 className="text-sm text-indigo-500 tracking-widest font-medium title-font mb-1">
            MEMBERS
          </h2>
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">
            재학생
          </h1>
        </div>
      </div>
    )
  }
}
export default Introduce;

*/

