const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          paddingLeft: "1em",
        }}
      >
        {pageNumbers.map((number) => (
          <li
            onClick={(e) => paginate(number)}
            key={number}
            style={{
              backgroundColor: "#0003",
              color: "blue",
              width: "2em",
              height: "2em",
              border: "1px solid #000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="!#"
              style={{
                textDecoration: "none",
              }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
