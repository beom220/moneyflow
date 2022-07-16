import Card from "../../components/card";

export default function MyWallets() {
    const myBanks = [] || null;

    if(!myBanks?.length) {
        return (
            <>
                <Card>
                    아직 카드가 없어요, 카드를 등록해 주세요!
                </Card>
            </>
        )
    }

    return (
        <>
            {myBanks.map((v, i) => {
                return (
                    <>
                        <Card key={i}>
                            <p>멍청이구만</p>
                        </Card>
                    </>
                )
            })}
            <Card>카드 추가 </Card>
        </>
    )

}