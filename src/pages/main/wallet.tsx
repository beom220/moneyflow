import {useMoneyFormat} from "../../hooks/format";
import {useCallback, useState} from "react";
import {WalletsType} from "../../app/wallets";
import Modify from "./modify";
import {SetterOrUpdater} from "recoil";

interface PropTypes {
    id: number;
    name: string;
    assets: number;
    onDelete: (id: number) => void;
    wallets: WalletsType[];
    setWallets: SetterOrUpdater<WalletsType[]>;
}

export default function WalletItem({id, name, assets, onDelete, wallets, setWallets}: PropTypes) {
    const assetsMoney = useMoneyFormat(assets);
    const [modifyContents, setModifyContents] = useState<WalletsType>({
        id: id,
        name: name,
        assets: assets
    })
    const [isModify, setIsModify] = useState<boolean>(false);

    const onModify = useCallback((): void => {
        setIsModify(true);
    }, [modifyContents])

    const onModifyWallet = useCallback((): void => {
        setWallets(wallets.map((wallet: WalletsType) => {
            return wallet.id === id ? modifyContents : wallet;
        }))
    }, [id, modifyContents, wallets, setWallets])

    return (
        <div className="wallet">
            {!isModify ?
                <>
                    <div className="contents">
                        <div className="wallet_name">{name}</div>
                        <button type="button" onClick={onModify}>수정</button>
                        <div className="assets">{assetsMoney}원</div>
                    </div>
                    <div className="buttons action">
                        <button className="button half">관리</button>
                        <button className="button half">이용내역</button>
                    </div>
                </> :
                <Modify
                    setIsModify={setIsModify}
                    modifyContents={modifyContents}
                    setModifyContents={setModifyContents}
                    onModifyWallet={onModifyWallet}
                    onDelete={onDelete}
                />
            }
        </div>
    )
}