import React from "react";
import Card from "../CommonCard/Card";

const Avaliable = ({
  players,
  setcoin,
  coin,
  selecteplayres,
  setselectePlayres,
}) => {
  return (
    <Card
      players={players}
      setcoin={setcoin}
      coin={coin}
      selecteplayres={selecteplayres}
      setselectePlayres={setselectePlayres}
    />
  );
};

export default Avaliable;