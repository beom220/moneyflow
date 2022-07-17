import {ChangeEvent, Dispatch, SetStateAction, useCallback, useState} from "react";
import {WalletsType} from "../../app/wallets";

interface PropTypes {
    setIsModify: Dispatch<SetStateAction<boolean>>;
    modifyContents: WalletsType;
    setModifyContents: Dispatch<SetStateAction<WalletsType>>;
    onModifyWallet: () => void;
    onDelete: (id:number) => void;
}

export default function Modify({setIsModify, modifyContents, setModifyContents, onModifyWallet, onDelete}: PropTypes) {
    const onCloseModify = useCallback(() => {
        setIsModify(false);
    }, [setIsModify])

    const {id, name, assets} = modifyContents;

    const onChange = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        const { value, name } = e.target;
        setModifyContents({
            ...modifyContents,
            [name] : value
        })
    },[setModifyContents])

    const onSubmit = useCallback((e:ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onModifyWallet();
        onCloseModify();
    },[setIsModify, onModifyWallet])

    return (
        <form onSubmit={onSubmit}>
            <div className="contents">
                <label htmlFor="wallet">
                    <span>지갑 이름</span>
                    <input
                        className="input"
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={name}
                        onChange={onChange}
                    />
                </label>
                <label htmlFor="assets">
                    <span>지갑 금액</span>
                    <input
                        className="input"
                        type="number"
                        id="assets"
                        name="assets"
                        defaultValue={assets}
                        onChange={onChange}
                        readOnly={true}
                        disabled={true}
                    />
                </label>
                <div className="buttons action">
                    {/*<button className="button full" type="button" onClick={() => onDelete(id)}>삭제</button>*/}
                    <button className="button full" type="button" onClick={onCloseModify}>취소</button>
                    <button className="button full" type="submit">완료</button>
                </div>
            </div>
        </form>
    )
}