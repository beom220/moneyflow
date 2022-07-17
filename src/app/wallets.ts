import {atom} from "recoil";
import {v1} from "uuid";

export interface WalletsType {
    id: number;
    name: string;
    assets: number;
}

export const walletsState = atom<WalletsType[]>({
    key: 'walletsState' + v1(),
    default: []
})

