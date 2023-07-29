
import { useEffect, useState } from "react";
import Navbar from "../../Components/navBar/Navbar";
import {  useParams } from "react-router-dom";
import { fetchBookData } from "../crud/crud";
import BooksDataView from "../../Components/books/booksDataView/BooksDataView";
import RolesDataView from "../../Components/Roles/rolesView/RolesView";
import BooksAdd from "../../Components/books/booksAdd/BooksAdd";
import RolesAdd from "../../Components/Roles/rolesAdd/RolesAdd";
import Search from "../../Components/search/Search";

const AccessManager = (probs) => {
  const initialTableData = [
    {
      id: 0,
      name: "first one ",
      avalablity: true,
      lender: 0,
      message: "default",
    },
  ];

  const booksUrl = process.env.REACT_APP_API_URL_BOOK;
  const userRoleUrl = process.env.REACT_APP_API_URL_USERROLE;
  
  const params = useParams();
  const [books, setBooks] = useState(false);
  const [userRole, setUserRole] = useState(false);
  const [appUser, setAppUser] = useState("default");
  const [booksData, setBooksData] = useState(initialTableData);
  const [userRoleData, setUserRoleData] = useState(initialTableData);

  const showHideBook = () => {
    setBooks(!books);
    setUserRole(false);
  };
  const showHideUserRole = () => {
    setUserRole(!userRole);
    setBooks(false);
  };

  useEffect(() => {
    setAppUser(params.userName);
    //this function ftches the books data from API
    const FetchDataB = async () => {
      try {
        const result = await fetchBookData(booksUrl);
        setBooksData(result);
      } catch (error) {
        console.log(error);
      }
    };
    FetchDataB();
    //this function ftches the userRoles data from API
    const FetchDataU = async () => {
      try {
        const result = await fetchBookData(userRoleUrl);
        //console.log(result);
        setUserRoleData(result);
        console.log(result.name);
      } catch (error) {
        console.log(error);
      }
    };
    FetchDataU();
  }, []);

  return (
    <>
      {(() => {
        if (appUser == "librarian") {
          return <Navbar appUser={appUser} />;
        } else if (appUser == "member") {
          return <Navbar appUser={appUser} message={userRoleData.message} />;
        } else {
          return <Navbar appUser={appUser} />;
        }
      })()}

      <div className="row">
        <div className="col">
          {/*// prettier-ignore */}
          {(appUser === "librarian" || "member") && (
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
        <div className="col">
          {appUser == "librarian" && (
            <BooksAdd tableData={booksData} requirement="bookadd" />
          )}

          {/* {TotalAvilableBooksCount} */}
        </div>
        <div className="col">
          {appUser == "librarian" && (
            <RolesAdd
              // NewBookID={TotalAvilableBooksCount}
              tableData={userRoleData}
              requirement="bookadd"
            />
          )}

          {/* {TotalAvilableBooksCount} */}
        </div>
      </div>
      {books && <BooksDataView tableData={booksData} appUser={appUser} />}
      {userRole && <RolesDataView tableData={userRoleData} />}
      {appUser == "member" && (
        <>
          <Search booksData={booksData} />
        </>
      )}
    </>
  );
};

export default AccessManager;
