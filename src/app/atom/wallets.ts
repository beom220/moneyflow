import {atom} from "recoil";
import {v1} from "uuid";

export interface WalletType {
    id: number;
    name: string;
    assets: number;
    plus?:number;
    minus?:number;
}

export const walletsState = atom<WalletType[]>({
    key: 'walletsState' + v1(),
    default: []
})

