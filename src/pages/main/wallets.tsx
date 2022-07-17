import {useRecoilState} from "recoil";
import {walletsState, WalletsType} from "../../app/wallets";
import WalletItem from "./wallet";
import {useCallback} from "react";


export default function Wallets(){
    const [wallets, setWallets] = useRecoilState<WalletsType[]>(walletsState);

    const onDelete = useCallback((id:number):void =>{
        setWallets(wallets.filter((wallet:WalletsType) => wallet.id !== id))
    },[wallets, setWallets])

    return (
        <div className="wallets">
            {!wallets.length ? null :
                wallets.map((item: WalletsType) => {
                    const {id, name, assets} = item;
                    return <WalletItem key={id} id={id} name={name} assets={assets} onDelete={onDelete} wallets={wallets} setWallets={setWallets}/>
                })
            }
        </div>
    )
}