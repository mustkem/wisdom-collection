import React from "react";
import { Button, Form } from "react-bootstrap";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { useParams, useHistory } from "react-router-dom";


function Home() {
  const params = useParams();
  const history = useHistory();
  let [page, setPage] = React.useState(params.page || 1);
  let [pageField, setPageField] = React.useState(page);
  const itemsPerPage = 10;

  const totalPages = parseInt(allData.length / itemsPerPage) + 1;
  let filteredItems = allData.slice((page - 1) * 10, page * 10);

  // console.log(filteredItems);

  const handlePageChange = (value) => {
    let newPage = value + Number(page);
    setPage(newPage);
    setPageField(newPage);

    history.push("/home/"+newPage)
  };

  React.useEffect(()=>{
    console.log(params);
    setPage(params.page || 1);
    setPageField(params.page || 1);

    window.scrollTo(0,0);

  }, [params.page]);

  return (
    <div className="content-strip">
      <div className="container">
        <div key={page} className="list">
          {filteredItems.map((item) => {
            return (
              <div className="item">
                <TwitterTweetEmbed tweetId={item} />
              </div>
            );
          })}
        </div>
        <div className="pagination">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              setPage(pageField);
              window.scrollTo(0,0);
            }}
          >
            <Form.Control
              value={pageField}
              onChange={(e) => setPageField(e.target.value)}
              size="sm"
              type="number"
            />
          </Form>
          /<span>{totalPages}</span>{" "}
          <Button
            onClick={() => {
              if (page > 1) {
                handlePageChange(-1);
              }
            }}
            variant="light"
            size="sm"
          >
            {"Previous"}
          </Button>{" "}
          <Button
            onClick={() => {
              if (page < totalPages) {
                handlePageChange(1);
              }
            }}
            variant="light"
            size="sm"
          >
            {"Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;

const other = ["1350513143387189248"];

const wiseconnector = [
  "1335690645973970951",
  "1357033170428952577",
  "1356320138971279362",
  "1356828310312005632",
  "1356799376165855232",
  "1356920682949574658",
  "1356320138971279362",
  "1356703742578556928",
];

const data = [
  "1356822979125137411",
  "1356505886596993027",
  "1356551187240263680",
  "1354739249212436482",
  "1356868276341596163",
  "1356460591758598146",
  "1356234099812425736",
  "1356143498739798016",
  "1352655516477116417",
  "1355509320193089540",
  "1354648648773214209",
  "1352791412836864000",
  "1351477758241738753",
  "1350124087172071424",
  "1349439323083595776",
  "1348941043882930176",
  "1348125667012046849",
  "1347853876955906050",
  "1347536788412395525",
  "1347083802489856001",
  "1346268431428026369",
];

let allData = [...data, other, ...wiseconnector];

// allData = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
//   21,
// ];
