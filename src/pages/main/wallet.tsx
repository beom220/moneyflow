import Card from "../../components/card";
import {Icon} from "../../components/icons";

interface Wallet {
    id: number;
    name: string;
    totalPrice: number;
}

export default function MyWallets() {
    const myWallets = [
        {
            id: 1,
            name: '고객님의 지갑',
            totalPrice: 200000
        },
        {
            id: 2,
            name: '고객님의 지갑2',
            totalPrice: 300000000
        }
    ] || null;

    if (!myWallets?.length) {
        return (
            <Card>
                <div className="no-card">
                    <div className="card-action">
                        <button>
                            <Icon outline={true}>add_box</Icon>
                            <p>아직 카드가 없어요, 카드를 등록해 주세요!</p>
                        </button>
                    </div>
                </div>
            </Card>
        )
    }

    return (
        <>
            {myWallets.map((wallet: Wallet, i) => {
                return (
                    <Card key={i}>
                        <div className="card-contents">
                            <h3>{wallet.name}</h3>
                            <div className="price">
                                {wallet.totalPrice} 원
                            </div>
                            <div className="card-action">
                                <button type="button">추가</button>
                                <button type="button">지갑 이용내역</button>
                            </div>
                        </div>
                    </Card>
                )
            })}
            <Card>
                <div className="add-card">
                    <div className="card-action">
                        <button>
                            <Icon outline={true}>add_box</Icon>
                        </button>
                    </div>
                </div>
            </Card>
        </>
    )
}