import { Component, React } from 'react'
import { Link } from 'react-router-dom';

class Buttons extends Component {
  render() {
    return (
      <div class="mt-12">
        <div className="flex flex-row place-content-center mt-8">
          <Link to="/members">
            <button className="text-gray-600 bg-white border-b-2 border-indigo-400 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
              재학생
            </button>
          </Link>
          <Link to="/graduates">
            <button className="text-gray-600 bg-white border-b-2 border-indigo-400 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
              졸업생
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
export default Buttons;
