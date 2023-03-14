const withHighlight = (searchString: string) => (str: string) => {
  if (!searchString) return <span>{str}</span>;
  const regExp = new RegExp(searchString);
  const searchResult = str.match(regExp)?.toString();
  if (!searchResult) return <span>{str}</span>;
  const searchArray = str.split(searchResult);
  return searchArray.map((item, index) => {
    const isLast: boolean = index === searchArray.length - 1;
    return (
      <div key={index}>
        <span>{item}</span>
        {!isLast && (
          <span style={{ backgroundColor: "yellow" }}>{searchResult}</span>
        )}
      </div>
    );
  });
};

export default withHighlight;
