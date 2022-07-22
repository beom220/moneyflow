import {Icon} from "../common/icons";
import {SetterOrUpdater, useRecoilState} from "recoil";
import {walletsState, WalletType} from "../../app/atom/wallets";
import {ChangeEvent, useCallback, useState} from "react";

interface PropsType {
    wallets: WalletType[];
    setWallets: SetterOrUpdater<WalletType[]>;
    onCloseCreate: () => void;
}

export default function Register() {
    const [wallets, setWallets] = useRecoilState<WalletType[]>(walletsState);
    const isFirst: boolean = !wallets.length;
    const [onCreate, setOnCreate] = useState<boolean>(false);
    const onCloseCreate = (): void => setOnCreate(false);
    const cn = !onCreate ? !isFirst ? "add" : "create" : "create";

    return (
        <div className="wallets">
            <div className={`wallet ${cn}`}>
                {!onCreate ? !isFirst ?
                        <button className="button" onClick={() => setOnCreate(true)}>
                            <Icon outline={true}>add_box</Icon>
                        </button> :
                        <button className="button" onClick={() => setOnCreate(true)}>
                            <Icon outline={true}>add_box</Icon>
                            <p>아직 카드가 없어요, 카드를 등록해 주세요!</p>
                        </button> :
                    <CreateWallet wallets={wallets} setWallets={setWallets} onCloseCreate={onCloseCreate}/>
                }
            </div>
        </div>
    )
}

function CreateWallet({wallets, setWallets, onCloseCreate}: PropsType) {
    const nextId: number = !wallets.length ? 0 : wallets[wallets.length - 1].id + 1;
    const [walletInput, setWalletInput] = useState<WalletType>({
        id: nextId,
        name: '',
        assets: 0
    })

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setWalletInput({
            ...walletInput,
            [name]: value
        });
    }, [walletInput, setWalletInput]);

    const createWallet = useCallback((e: ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!walletInput.name.trim()) return;
        setWallets([...wallets, walletInput]);
        onCloseCreate();
    }, [walletInput, wallets, setWallets, onCloseCreate])

    return (
        <form onSubmit={createWallet}>
            <div className="contents">
                <label htmlFor="wallet">
                    <span>지갑 이름</span>
                    <input
                        className="input"
                        type="text"
                        id="name"
                        name="name"
                        onChange={onChange}/>
                </label>
                <label htmlFor="assets">
                    <span>지갑 금액</span>
                    <input
                        className="input"
                        type="number"
                        id="assets"
                        name="assets"
                        onChange={onChange}/>
                </label>
            </div>
            <div className="buttons action">
                <button className="button half" type="button" onClick={onCloseCreate}>취소</button>
                <button className="button half" type="submit">등록</button>
            </div>
        </form>
    )
}
