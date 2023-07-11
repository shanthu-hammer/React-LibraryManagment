
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
  const booksUrl = "http://localhost:5000/books/";
  const userRoleUrl = "http://localhost:5000/useRoles";
  const params = useParams();
  const [books, setBooks] = useState(false);
  const [userRole, setUserRole] = useState(false);
  const [appUser, setAppUser] = useState("default");
  const [booksData, setBooksData] = useState(initialTableData);
  const [userRoleData, setUserRoleData] = useState(initialTableData);

  const showHideBook = (e) => setBooks(!books);
  const showHideUserRole = () => setUserRole(!userRole);

  useEffect(() => {
    setAppUser(params.userName);
    //Fetch data from Books API
    const FetchDataB = async () => {
      try {
        const result = await fetchBookData(booksUrl);
        setBooksData(result);
      } catch (error) {
        console.log(error);
      }
    };
    FetchDataB();
    //Fetch data from UserRole API
    const FetchDataU = async () => {
      try {
        const result = await fetchBookData(userRoleUrl);
        console.log(result);
        setUserRoleData(result);
      } catch (error) {
        console.log(error);
      }
    };
    FetchDataU();
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
      {userRole && <RolesDataView tableData={userRoleData} />}
    </>
  );
};

export default AccessManager;
