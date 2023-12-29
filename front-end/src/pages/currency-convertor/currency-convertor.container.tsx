import React, { useEffect } from "react"
import './currency-convertor.css'
import { currencyConvertorType } from "./currency-convertor.type"
import Input from "../../components/input/input";
import Select from "../../components/select/select";
import Button from "../../components/button/button";
const CurrencyConvertorContainerComponent = ({ submit, handleSubmit, formvalues, changeValues, cryptoList, amount }: currencyConvertorType) => {
    const currencyList = [
        { name: "US Dollar", id: "usd" },
        { name: "Japanese Yen", id: "jpy" },
        { name: "Euro", id: "eur" },
        { name: "Bitcoin", id: "btc" },
        { name: "Etherium", id: "eth" },
        { name: "Binance Coin", id: "bnb" },

    ]
    useEffect(() => {
        console.log(amount);
    }, [])

    return (
        <div className="signupSection">

            <form noValidate onSubmit={(e) => handleSubmit(e)} className="signupForm" name="signupform">
                <h2>Crypto Conversion</h2>
                <ul className="noBullet">
                    <li>
                        <Select value={formvalues.Crypto} name={'Crypto'} arr={cryptoList} submit={submit} changeValues={changeValues} />
                    </li>
                    <li>
                        <Input value={formvalues.Amount} title={'Amount'} submit={submit} type={'number'} changeValues={changeValues} />
                    </li>
                    <li>
                        <Select value={formvalues.Currency} name={'Currency'} arr={currencyList} submit={submit} changeValues={changeValues} />
                    </li>
                    <li id="center-btn">
                        <Button handleSubmit={handleSubmit} />
                    </li>
                    <li>
                        {submit && <span>{formvalues.Amount} {formvalues.Crypto} costs ' {amount} {formvalues.Currency}'s</span>}
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default CurrencyConvertorContainerComponent;