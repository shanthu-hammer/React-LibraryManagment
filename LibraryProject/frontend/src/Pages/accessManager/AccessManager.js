
import { useEffect, useState } from "react";
import Navbar from "../../Components/navBar/Navbar";
import Librarian from "../librarian/Librarian";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBookData } from "../crud/crud";
import BooksDataView from "../../Components/booksDataView/BooksDataView";
import RolesDataView from "../../Components/Roles/rolesView/RolesView";
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
  const [url, setUrl] = useState("http://localhost:5000/books/");
  const booksUrl = "http://localhost:5000/books/";
  const userRoleUrl = "http://localhost:5000/";

  const showHideBook = (e) => {
    setBooks(!books);
  };
  const showHideUserRole = () => {
    setUserRole(!userRole);
    setUrl(userRoleUrl);
  };

  useEffect(() => {
    setAppUser(params.userName);

    const FetchData = async () => {
      try {
        const result = await fetchBookData(url);
        setBooksData(result);
        // const Uresult = await fetchBookData(userRoleUrl);
        // setUserRoleData(Uresult);
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
                showHideBook(e);
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
      {userRole && <RolesDataView tableData={booksData} />}
    </>
  );
};

export default AccessManager;
