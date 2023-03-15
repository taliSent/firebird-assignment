const withHighlight = (searchString: string) => (str: string) => {
  if (!searchString) return <span>{str}</span>;
  const regExp = new RegExp(searchString, "i");
  const searchResult = str.match(regExp)?.toString();
  if (!searchResult) return <span key={str}>{str}</span>;
  const searchArray = str.split(searchResult);
  return searchArray.map((item, index) => {
    const isLast: boolean = index === searchArray.length - 1;
    return (
      <>
        <span key={item + index}>{item}</span>
        {!isLast && (
          <span className='bg-indigo-900 text-white'>{searchResult}</span>
        )}
      </>
    );
  });
};

export default withHighlight;
