import React from 'react';
import './error.css'

type Props = {
    msg: string
};

export default ({ msg }:Props) => <div className={'c-error'}>{ msg }</div>;
