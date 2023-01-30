import React, {useState} from "react";

export default (data, cnt) => {

// ниже типо текущвя станичка и страничка на какую перейдем
    const [currentPage, setCurrentPage] = useState(1);

   const maxPage = Math.ceil(data.length / cnt);


    return {currentPage, maxPage};
}