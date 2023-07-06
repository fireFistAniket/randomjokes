import { useEffect, useState } from "react";
import Cardetails from "../components/Cardetails";
import { useDispatch } from "react-redux";
import { getCategory } from "../store/categorySlice";
import Loader from "../components/Loader";

function App() {
  const dispatch = useDispatch();
  const [cat, setCat] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const getCat = (cat) => {
    dispatch(getCategory(cat));
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.chucknorris.io/jokes/categories"
      );
      const categories = await response.json();
      setCat(categories);
    };
    fetchData();
  }, []);

  return (
    <>
      <main>
        <div>
          <h1 className="main-heading">Chuck Norries</h1>
          <section className="cards">
            {cat.length ? (
              cat.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="card-section"
                    onClick={() => {
                      openModal();
                      getCat(item);
                    }}
                  >
                    <h1 className="card-heading">{item}</h1>
                    <p className="card-para">unlimited jokes on {item}</p>
                  </div>
                );
              })
            ) : (
              <div className="loader">
                <Loader />
              </div>
            )}

            <div>{isModalOpen && <Cardetails closeModal={closeModal} />}</div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
