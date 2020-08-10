import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import PersonInfo from "./../person/info";
import { getPersonList, togglePersonSelect } from "../../service/person/actions";
import { list, loading, error, selected } from "../../service/person/selectors";
import { Person } from "../../service/person/types";
import Loading from './../loading/loading';
import Error from './../error/error';

import './list.css';

function App() {
    const dispatch = useDispatch();
    const data = useSelector(list);
    const isLoading = useSelector(loading);
    const actionError = useSelector(error);
    const selectedItems = useSelector(selected);
    const loadData = useCallback(() => dispatch(getPersonList()), [ dispatch ]);

    useEffect(() => {
        loadData();
    }, [ loadData ]);

    const onMoreClick = () => loadData();
    const onPersonInfoClick = (id:string) => dispatch(togglePersonSelect(id));

    return (
        <div className="c-person-list">
            {isLoading && <Loading />}
            {actionError && <Error msg={actionError.toString()} />}
            <div className="c-person-list__summary">Selected contacts: {selectedItems.length}</div>
            <ul className="c-person-list__list">
                {data
                    .sort((l:Person, r:Person) => Number(l.id) > Number(r.id) * 1 ? 1 : -1)
                    .sort((l:Person) => l.selected ? -1 : 1)
                    .map((personInfo:Person) => <li key={personInfo.id}><PersonInfo data={personInfo} onClick={onPersonInfoClick} /></li>)}
            </ul>
            <div className={'c-person-list__footer'}>
                <button disabled={isLoading} onClick={onMoreClick}>More</button>
            </div>
        </div>
    );
}

export default App;
