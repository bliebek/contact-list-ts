import React, { useEffect } from "react";
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

    useEffect(() => {
        dispatch(getPersonList());
    }, [ dispatch ]);

    return (
        <div className="c-person-list">
            {isLoading && <Loading />}
            {actionError && <Error msg={actionError.toString()} />}
            <div className="selected">Selected contacts: {0}</div>
            <div className="list">
                {data.map((personInfo:Person) => (
                    // @ts-ignore
                    <PersonInfo key={personInfo.id} data={personInfo} />
                ))}
            </div>
        </div>
    );
}

export default App;
