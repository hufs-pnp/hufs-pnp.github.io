import { Component, React } from 'react'

class IntroduceGraduate extends Component {
  render() {
    return (
      <div className="felx flex-col text-center mt-12 mb-12">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          모든 PnP 학회원들이 소통하는 네이버 밴드입니다.
        </h2>
        <h1 className="sm:text-xl text-2xl font-medium title-font mb-4 text-gray-900">
          Passion & Pioneer 네이버 BAND 초대 링크
        </h1>
        {/* <span
          className="text-3xl text-indigo-500 border-purple-300 border rounded-lg transform hover:shadow-lg motion-reduce:transform-none cursor-pointer"
          alt="google"
          src="https://band.us/n/abac4du6z8Jcb"
          onClick={() =>
            window.open('https://band.us/n/abac4du6z8Jcb', '_blank')
          }
          title="URL"
        >
          Link
        </span> */}
        <p className="mx-auto leading-relaxed text-base text-red-500 mt-3">
          *PnP 학회원들만 네이버 BAND에 가입합니다.*
        </p>
        <p className=" mx-auto leading-relaxed text-base mt-12">
          현재 남아있는 자료로 작성했습니다.
          <br />
          누락된 부분이 있다면 학회장에게 연락해주시면 빠르게 반영하겠습니다.
        </p>
      </div>
      /*
      <div className="felx flex-col text-center justify-center mt-12 mb-12">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          모든 PnP 학회원들이 소통하는 네이버 밴드입니다.
        </h2>
        <h1 className="sm:text-xl text-2xl font-medium title-font mb-4 text-gray-900">
          Passion & Pioneer 네이버 BAND 초대 링크:
        </h1>
        <div
          //class="h-10 w-32 flex text-3xl justify-center text-indigo-500 border-purple-300 border rounded-lg transform hover:shadow-lg motion-reduce:transform-none"
          //className="text-3xl text-indigo-500 border-purple-300 border rounded-lg transform hover:shadow-lg motion-reduce:transform-none"
          className="flex-grow transform hover:shadow-lg motion-reduce:transform-none tracking-widest"
          alt="google"
          src="https://band.us/n/abac4du6z8Jcb"
          onClick={() =>
            window.open('https://band.us/n/abac4du6z8Jcb', '_blank')
          }
          title="URL"
        >
          <div className="text-3xl mt-3 text-indigo-500 font-medium title-font">
            Link
          </div>
        </div>
        <p className=" mx-auto leading-relaxed text-base text-red-500 mt-3">
          *PnP 학회원들만 네이버 BAND에 가입합니다.*
        </p>
      </div>
      */
    )
  }
}
export default IntroduceGraduate



/*
<div class="min-h-screen flex flex-col justify-between">
  <header class="p-4 bg-teal-500 text-center text-white font-bold">Header</header>
  <main class="h-64 bg-teal-600 flex items-center justify-center text-white">Main</main>
  <footer class="p-4 bg-teal-500 text-center text-white font-bold">Footer</footer>
</div>


<div class="min-h-screen flex flex-col">
  <header class="p-4 bg-teal-500 text-center text-white font-bold">Header</header>
  <main class="h-64 bg-teal-600 flex items-center flex-grow justify-center text-white">Main</main>
  <footer class="p-4 bg-teal-500 text-center text-white font-bold">Footer</footer>
</div>

*/



