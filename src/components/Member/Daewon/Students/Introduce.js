import { Component, React } from 'react'

class Introduce extends Component {
  render() {
    return (
      <div className="felx flex-col text-center mt-40 -mb-6">
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
        <p className=" mx-auto leading-relaxed text-base">
          현재 활동중인 학회원들을 소개합니다.
          <br />
          누락된 부분이 있다면 학회장에게 연락해주시면 빠르게 반영하겠습니다.
        </p>
         */
