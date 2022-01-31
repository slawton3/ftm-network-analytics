import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootStore } from '../../state/store/Store';
import { useState } from 'react';
import { GetToken } from "../../state/actions/tokens/TokenActions";

const Tokens = () => {
    const dispatch = useDispatch()
    const tokenState = useSelector((state: RootStore) => state.token)
    const [tokens, setTokens] = useState([])

    useEffect(() => {
        dispatch(GetToken())
    }, [])

    console.log(tokenState)

    return (
        <div>
            {tokenState.tokens && (
                <div>
                    {tokenState.tokens.map(t => (
                        <li>{t.symbol}: {t.address}</li>
                    ))}
                </div>
            )}
        </div>
    )
};

export default Tokens;
