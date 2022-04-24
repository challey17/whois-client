import { useState } from "react";
import axios from "axios";

const baseURL = "localhost:8000/domain";
const SearchForm = () => {
  // const [url, setUrl] = React.useState(null);
  const [domain, setDomain] = useState("");

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setUrl(response.data);
  //   });
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(domain);
  };
  return (
    <form onSubmit={handleSubmit} className="card">
      <label>
        Search domain:
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
      </label>
      <div className="btn-row">
        <button type="submit">SEARCH</button>
      </div>
    </form>
  );
};

export default SearchForm;
