import queryString from 'query-string';
import { useEffect } from 'react';
import '../css/SearchResult.css';

function SearchResult() {

    // componentsDidMount - 클래스형
    useEffect(() => { // hook 방식
        console.log(window.location); // Object
        console.log(window.location.href); // 전체 주소
        console.log(window.location.search); // 파라미터 부분
        const queryObj = queryString.parse(window.location.search);
        console.log(queryObj) // 제이슨 형태
        console.log(queryObj.query) // "hello" 검색 값
    },[])
    return (
        <div id='searchResult'>
            SearchResult
        </div>
    )
}

export default SearchResult;