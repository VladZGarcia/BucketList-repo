import { Dream } from "../models/Dream";

export function simpleIDGenerator(bucketList: Dream[]): number {
    let newId: number;
    if (bucketList.length > 0) {
        newId = Math.max(...bucketList.map(item => item.id)) + 1;
    } else {
        newId = 1;
    }
    return newId;
}