import React, {useState} from "react";
import "./search.css";
import {ReactComponent as SearchImg} from "./img/magnifying-glass-solid.svg";
import {ReactComponent as CloseImg} from "./img/circle-xmark-regular.svg";
import { useNavigate } from "react-router-dom";


export default ({data, searchGoods}) => {
    const navigate = useNavigate();
    const [text, updateText] = useState("");
    const [searchData, setSearchData] = useState(data);
    const clearSearch = () => {
        updateText("");
        setSearchData(data);
        searchGoods(data)
    }

    const search = (e) => {
        navigate("/catalog")
        updateText(e.target.value);
        let arr = data.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchData(arr);
        searchGoods(arr);
    }
    return <div className="search-block">
        <input placeholder="Поиск..." value={text} onChange={search}/>
        <button>{text ? <CloseImg onClick={clearSearch}/> : <SearchImg/>}</button>
        {text && <div className="search-result">
            По запросу <b>{text}</b>&nbsp; 
            {searchData.length > 0 ? `найдено ${searchData.length} товаров` : "не найдено ни одного товара"}
        </div>}
    </div>
}