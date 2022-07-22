import {useCallback, useState} from "react";

type lists = string | number;

interface PropTypes {
    lists: lists[];
    panels: { key: lists, contents: JSX.Element }[];
}

export default function Tabs({lists, panels}: PropTypes) {
    const [index, setIndex] = useState<lists>(lists[0]);

    const onSetIndex = useCallback((index: lists) => {
        setIndex(index);
    }, [index, setIndex])

    return (
        <>
            <div className="tab buttons action">
                {lists.map((tab, i) => {
                    const cn = tab === index ? "active button full" : "button full";
                    return (<button
                        type="button"
                        className={cn}
                        key={i}
                        onClick={() => onSetIndex(tab)}>{tab}
                    </button>)
                })}
            </div>
            <div className="contents">
                <div className="tab panel">
                    {panels.map((panel, i) => {
                        if (panel.key === index) {
                            return <div key={i}>{panel.contents}</div>
                        }
                    })}
                </div>
            </div>
        </>
    )
}