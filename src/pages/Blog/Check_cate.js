export function cateCheck(str, BlogList) {
  const lists = []
  for (var i = 0; i < BlogList.length; i++) {
    if (str == BlogList[i]['cateogry']) {
      lists.push(BlogList[i]);
    }
  }
  return lists;
}