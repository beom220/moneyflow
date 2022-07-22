import {useMoneyFormat} from "../../hooks/format";
import {useCallback, useState} from "react";
import {WalletType} from "../../app/atom/wallets";
import Modify from "./modify";
import {SetterOrUpdater} from "recoil";
import Flow from "./flow";
import Tabs from "../common/tab";

interface PropTypes {
    id: number;
    name: string;
    assets: number;
    onDelete: (id: number) => void;
    wallets: WalletType[];
    setWallets: SetterOrUpdater<WalletType[]>;
}

export default function Wallet({id, name, assets, onDelete, wallets, setWallets}: PropTypes) {
    const assetsMoney = useMoneyFormat(assets);
    const [modifyContents, setModifyContents] = useState<WalletType>({
        id: id,
        name: name,
        assets: assets,
    })

    // 지갑 수정
    const [isModify, setIsModify] = useState<boolean>(false);

    const onModify = useCallback((): void => {
        setIsModify(true);
    }, [modifyContents])

    const onModifyWallet = useCallback((): void => {
        setWallets(wallets.map((wallet: WalletType) => {
            return wallet.id === id ? modifyContents : wallet;
        }))
    }, [id, modifyContents, wallets, setWallets])

    // 지갑 IN & OUT Money
    const [moneyFlow, setMoneyFlow] = useState<boolean>(false);
    const onMoneyFlow = useCallback((): void => {
        setMoneyFlow(true);
    }, []);

    return (
        <>
            {!isModify ?
                <>
                    <div className="wallet">
                        <div className="contents">
                            <div className="wallet_name">{name}</div>
                            <button type="button" onClick={onModify}>수정</button>
                            <div className="assets">{assetsMoney}원</div>
                        </div>
                        <div className="buttons action">
                            <button className="button half" onClick={onMoneyFlow}>관리</button>
                            <button className="button half">이용내역</button>
                        </div>
                    </div>
                    { moneyFlow && <div className="wallet">
                        <Flow/>
                    </div>}
                </> :
                <div className="wallet">
                    <Modify
                        setIsModify={setIsModify}
                        modifyContents={modifyContents}
                        setModifyContents={setModifyContents}
                        onModifyWallet={onModifyWallet}
                        onDelete={onDelete}
                    />
                </div>
            }

        </>
    )
}