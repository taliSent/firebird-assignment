const withHighlight = (searchString: string) => (str: string) => {
  if (!searchString) return renderInitial(str);
  const regExp = new RegExp(searchString, "i");
  const searchResult = str.match(regExp)?.toString();
  if (!searchResult) return renderInitial(str);
  const searchArray = str.split(searchResult);
  const lastIndex = searchArray.length - 1;

  return searchArray.map((item, index) =>
    renderHighlighted(index, item, lastIndex, searchResult)
  );
};

const renderHighlighted = (
  index: number,
  item: string,
  lastIndex: number,
  searchResult: string
) => {
  const isLast: boolean = index === lastIndex;
  return (
    <span key={item}>
      <span>{item}</span>
      {!isLast && (
        <span className='bg-indigo-900 text-white'>{searchResult}</span>
      )}
    </span>
  );
};

const renderInitial = (str: string) => <span>{str}</span>;

export default withHighlight;
