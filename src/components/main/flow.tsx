import Tabs from "../common/tab";

type lists = string | number;

interface PropTypes {
    lists: lists[];
    panels: { key: lists, contents: JSX.Element }[];
}


export default function Flow() {
    const tabLists:PropTypes["lists"] = ['수입', '지출']
    const tabContents:PropTypes["panels"] = [
        {
            key: tabLists[0],
            contents : (
                <label htmlFor="plus">
                    <input className="input" name="plus" id="plus" type="number" placeholder="plus"/>
                </label>
            )
        },
        {
            key: tabLists[1],
            contents : (
                <label htmlFor="minus">
                    <input className="input" name="minus" id="minus" type="number" placeholder="minus"/>
                </label>
            )
        }
    ];

    return (
        <form>
            <Tabs lists={tabLists} panels={tabContents}/>
            <div className="contents">
                <div className="buttons stack action">
                    <button type="button" className="button full">취소</button>
                    <button type="button" className="button full primary">적용</button>
                </div>
            </div>
        </form>
    )
}