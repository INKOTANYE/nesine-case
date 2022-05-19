import React, { useEffect, useContext } from 'react';
import data from './content/data/bulten_data.json';
import BultenContext from './content/BultenContext';
import Table from './Table';
import Cart from './Cart';
import '../style/loader.scss';

function Container() {
  const { bulten, setBulten } = useContext(BultenContext);

  const getData = () => {
    const tableArr = [];
    for (let i = 2001; i < 5001; i++) {
      tableArr.push({
        id: data.Events[i].C,
        date: data.Events[i].D,
        day: data.Events[i].DAY,
        time: data.Events[i].T,
        lig: data.Events[i].LN,
        mac: data.Events[i].N,
        mbs: data.Events[i].OCG[1].MBS,
        mc1: data.Events[i].OCG[1].OC[0].O,
        mc2: data.Events[i].OCG[1].OC[1].O,
        ikiBucukAlt: data.Events[i].OCG[5].OC[25].O,
        ikiBucukUst: data.Events[i].OCG[5].OC[26].O,
        cifteSans1X: data.Events[i].OCG[2].OC[3].O,
        cifteSans12: data.Events[i].OCG[2].OC[4].O,
        cifteSansX2: data.Events[i].OCG[2].OC[5].O,
      });
    }
    return tableArr
  };

  useEffect(() => {
    const tableArr = getData();
    setBulten(tableArr);
  }, []);

  if (bulten == false) {
    return (
      <div className="preloaders">
        <div className="loader-wrapper loader-wrapper--10">
          <div className="loader loader--10">
            <div className="square" />
            <div className="square" />
            <div className="square" />
            <div className="square" />
            <div className="square" />
            <div className="square" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Table />
      <Cart />
    </div>
  );
}

export default Container;
