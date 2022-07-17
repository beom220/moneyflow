import {useRecoilValue} from "recoil";
import {walletsState, WalletsType} from "../../app/wallets";
import WalletItem from "./wallet";


export default function Wallets(){
    const wallets = useRecoilValue<WalletsType[]>(walletsState);

    return (
        <div className="wallets">
            {!wallets.length ? null :
                wallets.map((item: WalletsType) => {
                    const {id, name, assets} = item;
                    return <WalletItem key={id} id={id} name={name} assets={assets}/>
                })
            }
        </div>
    )
}