
import { useEffect, useState } from "react";
import Navbar from "../../Components/navBar/Navbar";
import Librarian from "../librarian/Librarian";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../crud/crud";
import BooksDataView from "../../Components/booksDataView/BooksDataView";
const AccessManager = (probs) => {
  const booksDefault = [
    {
      id: 0,
      name: "first one ",
      avalablity: true,
      lender: 0,
    },
    {
      id: 1,
      name: "second one ",
      avalablity: true,
      lender: 0,
    },
    {
      id: 3,
      name: "third one one ",
      avalablity: true,
      lender: 0,
    },
  ];

  const params = useParams();
  const [appUser, setAppUser] = useState("default");
  const [booksData, setBooksData] = useState(booksDefault); //booksDefault

  // const FetchBooksData = async () => {
  //   let data = await fetchData();
  //   console.log(data);
  //   setBooksData(data);
  // };
  const handleClick = async () => {
    //const data = await fetchData();
    const data = [
      {
        id: 0,
        name: "first one ",
        avalablity: true,
        lender: 0,
      },
      {
        id: 1,
        name: "second one ",
        avalablity: true,
        lender: 0,
      },
      {
        id: 3,
        name: "third one one ",
        avalablity: true,
        lender: 0,
      },
    ];
    console.log("Data from button  \n" + data);
    setBooksData(data);
    console.log(data);
  };

  useEffect(() => {
    setAppUser(params.userName);

    const Fb = async () => {
      try {
        const result = await fetchData();
        console.log("result from use effect " + result);
        setBooksData(result);
      } catch (error) {
        console.log(error);
      }
      //       //console.log("im triggered");
      //       const data = await fetchData();
      //       console.log("Data for insert   \n" + data);
      //       setBooksData(data);

      //   console.log("value of Booksdata \n" + booksData);
    };
    Fb();

    // const FetchBooksData = async () => {
    //   try {
    //     let data = await fetchData();
    //     console.log(data);
    //     setBooksData(data);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    //   FetchBooksData();
    // };
  }, [booksData]);
  //probs.role
  return (
    <>
      <Navbar appUser={appUser} />
      <div className="row">
        <div className="col">
          {/* Features for Librarian */}
          {appUser == "librarian" && <Librarian />}
          {/* <Librarian /> */}
        </div>
        <div className="col">
          {appUser == "librarian" && (
            <button
              onClick={() => {
                handleClick();
              }}
              className="btn btn-primary m-5"
            >
              Edit User Roles
            </button>
          )}
        </div>
      </div>
      <BooksDataView data={booksData} />
    </>
  );
};

export default AccessManager;
