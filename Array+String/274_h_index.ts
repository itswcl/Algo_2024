/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let hIndex = 0;
  // we need to sort backward because the citation need to be higher than kIndex
  citations.sort((a, b) => b - a);

  // once sorted we start from start and counting hindex
  for (let i = 0; i < citations.length; i++) {
    const citation = citations[i];
    const curHIndex = i + 1;
    // when citation greater than current hindex we update
    if (citation >= curHIndex) hIndex = curHIndex;
  }

  // finally get to result
  return hIndex;
};
