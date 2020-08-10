import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import PersonInfo from "./../person/info";
import { getPersonList, togglePersonSelect } from "../../service/person/actions";
import { loading, error, selected, deselected } from "../../service/person/selectors";
import { Person } from "../../service/person/types";
import Loading from './../loading/loading';
import Error from './../error/error';

import './list.css';

function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector(loading);
    const actionError = useSelector(error);
    const selectedItems = useSelector(selected);
    const deselectedItems = useSelector(deselected);
    const data = selectedItems.concat(deselectedItems);
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
            <div className="c-person-list__summary">Selected contacts: {selectedItems.length}, total items: {data.length}</div>
            <ul className="c-person-list__list">
                {data
                    .map((r:Person) => <li key={r.id}><PersonInfo data={r} onClick={onPersonInfoClick} /></li>)}
            </ul>
            <div className={'c-person-list__footer'}>
                <button disabled={isLoading} onClick={onMoreClick}>Load more</button>
            </div>
        </div>
    );
}

export default App;
