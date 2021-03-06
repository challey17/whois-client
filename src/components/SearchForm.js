import { useState } from "react";
import axios from "axios";
import useForm from "../utlis/useForm";

const SearchForm = () => {
  const [values, handleChange] = useForm({ domain: "" });
  const [data, setData] = useState(null);

  const getInfo = () => {
    const domain = values.domain;
    axios
      .get(`/domain/${domain}`)
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });

    return data;
  };

  return (
    <div className="card">
      <label>
        Search domain:
        <input
          type="text"
          name="domain"
          value={values.domain}
          onChange={handleChange}
          placeholder="google.com"
        />
      </label>
      <div className="btn-row">
        <button onClick={getInfo}>SEARCH</button>
      </div>

      {data && (
        <div className="card2">
          <h2>About this Domain:</h2>
          <h3> Domain {data.status === "success" ? "Found" : "Not Found"} </h3>
          <p> Domain ISP: {data.isp || "N/A"} </p>
          <p>Organization: {data.org || "N/A"}</p>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
