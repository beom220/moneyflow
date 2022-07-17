import {useMoneyFormat} from "../../hooks/format";

interface PropTypes {
    id: number;
    name: string;
    assets: number;
}

export default function WalletItem({id, name, assets}: PropTypes) {
    const assetsMoney = useMoneyFormat(assets);
    return (
        <div className="wallet">
            <div className="contents">
                <div className="wallet_name">{name}</div>
                <div className="assets">{assetsMoney}원</div>
            </div>
            <div className="buttons action">
                <button className="button half">관리</button>
                <button className="button half">이용내역</button>
            </div>
        </div>
    )
}