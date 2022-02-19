const ReAchieve = (props) => {
  const color_list = ['indigo-50', 'indigo-100', 'indigo-200'] // 년도별 색상 변경을 위한 배열
  let ind = Object.values(props)
  let idx = ind[0][1]
  let iv = ind[0][0]
  let ix = props['ix']
  let pos

  if (ix % 2 === 0) {
    pos = [
      'mb-8 lg:flex lg:justify-between lg:flex-row-reverse items-center w-full left-timeline',
      'text-center order-1 rounded-lg shadow-xl lg:w-5/12 px-6 py-4' +
        ' bg-' +
        color_list[ix % 3],
    ]
  } else {
    pos = [
      'mb-8 lg:flex lg:justify-between items-center w-full right-timeline',
      'text-center order-1 rounded-lg shadow-xl lg:w-5/12 px-6 py-4' +
        ' bg-' +
        color_list[ix % 3],
    ]
  }

  return (
    <div class={pos[0]}>
      <div class="order-1 w-5/12"></div>
      <div class={pos[1]}>
        <h3 class="mb-2 font-bold text-black lg:text-xl text-base">
          {iv[idx]['title']}
        </h3>
        <p class="lg:text-base text-sm leading-snug tracking-wide text-black text-opacity-100 whitespace-pre-line"></p>
        <h4>{iv[idx]['content']}</h4>
        <p>{iv[idx]['name']}</p>
      </div>
    </div>
  )
}
export default ReAchieve
