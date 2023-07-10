
import { useEffect, useState } from "react";
import Navbar from "../../Components/navBar/Navbar";
import Librarian from "../librarian/Librarian";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../crud/crud";
import BooksDataView from "../../Components/booksDataView/BooksDataView";
const AccessManager = (probs) => {
  const initialTableData = [
    {
      id: 0,
      name: "first one ",
      avalablity: true,
      lender: 0,
    },
  ];

  const params = useParams();
  const [books, setBooks] = useState(false);
  const [userRole, setUserRole] = useState(false);
  const [appUser, setAppUser] = useState("default");
  const [booksData, setBooksData] = useState(initialTableData);

  const showHideBook = () => setBooks(!books);
  const showHideUserRole = () => {
    setUserRole(!userRole);
  };
  const hideBook = () => {
    setBooks(false);
  };

  const handleClick = async () => {
    hideBook();
  };

  useEffect(() => {
    setAppUser(params.userName);

    const FetchData = async () => {
      try {
        const result = await fetchData();
        setBooksData(result);
        // console.log("result from use effect " + result);
      } catch (error) {
        console.log(error);
      }
    };
    FetchData();
  }, []);

  return (
    <>
      <Navbar appUser={appUser} />
      <div className="row">
        <div className="col">
          {/* Features for Librarian */}
          {appUser == "librarian" && (
            <button
              className="btn btn-primary m-5 p-3"
              onClick={(e) => {
                showHideBook();
              }}
            >
              Books
            </button>
          )}
          {/* <Librarian /> */}
        </div>
        <div className="col">
          {appUser == "librarian" && (
            <button
              onClick={() => {
                showHideUserRole();
              }}
              className="btn btn-primary m-5 p-3"
            >
              User Roles
            </button>
          )}
        </div>
      </div>
      {books && <BooksDataView tableData={booksData} />}
      {userRole && <BooksDataView tableData={booksData} />}
    </>
  );
};

export default AccessManager;
