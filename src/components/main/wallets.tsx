import {useRecoilState} from "recoil";
import {walletsState, WalletType} from "../../app/atom/wallets";
import Wallet from "./wallet";
import {useCallback} from "react";

export default function Wallets(){
    const [wallets, setWallets] = useRecoilState<WalletType[]>(walletsState);

    const onDelete = useCallback((id:number):void =>{
        setWallets(wallets.filter((wallet:WalletType) => wallet.id !== id))
    },[wallets, setWallets])

    return (
        <div className="wallets">
            {!wallets.length ? null :
                wallets.map((item: WalletType) => {
                    const {id, name, assets} = item;
                    return <Wallet key={id} id={id} name={name} assets={assets} onDelete={onDelete} wallets={wallets} setWallets={setWallets}/>
                })
            }
        </div>
    )
}