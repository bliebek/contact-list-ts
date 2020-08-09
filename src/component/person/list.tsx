import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import PersonInfo from "./../person/info";
import { getPersonList } from "../../service/person/actions";
import { list, loading, error } from "../../service/person/selectors";
import { Person } from "../../service/person/types";
import Loading from './../loading/loading';
import Error from './../error/error';

function App() {
    const dispatch = useDispatch();
    const data = useSelector(list);
    const isLoading = useSelector(loading);
    const actionError = useSelector(error);
    const loadData = useCallback(() => dispatch(getPersonList()), [ dispatch ]);

    useEffect(() => {
        loadData();
    }, [ loadData ]);

    const onMoreClick = () => loadData();

    return (
        <div className="c-person-list">
            {isLoading && <Loading />}
            {actionError && <Error msg={actionError.toString()} />}
            <div className="c-person-list__summary">Selected contacts: {0}</div>
            <ul className="c-person-list__list">
                {data.map((personInfo:Person) => <li key={personInfo.id}><PersonInfo data={personInfo} /></li>)}
            </ul>
            <div className={'c-person-list__footer'}>
                <button disabled={isLoading} onClick={onMoreClick}>More</button>
            </div>
        </div>
    );
}

export default App;
