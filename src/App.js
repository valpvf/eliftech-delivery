import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { addNFT } from "./redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const PublicLayout = () => {
  const nfts = useSelector((state) => state.nfts);
  console.log(nfts);
  return (
    <div>
      <h1> PublicLayout </h1>
      <h1> Greetings User! </h1>
      <p> {JSON.stringify(nfts)} </p>
    </div>
  );
};

const PrivateLayout = () => {
  const [nft, setNft] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNFT(nft, 'ADD'));
    setNft("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nft}
          onChange={(e) => setNft(e.target.value)}
        />
        <button type="submit">Add NFT</button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Link to="/"> Public</Link>
      <Link to="/app"> Private</Link>
      <Routes>
        <Route path="/" element={<PublicLayout />} />
        <Route path="/app" element={<PrivateLayout />} />
      </Routes>
    </div>
  );
};

export default App;
