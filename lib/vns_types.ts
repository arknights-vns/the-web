export type VNS_Member = {
    name: string;
    quote: string;
    role: string[];
};

export interface Operator {
    // format the nao thi tuy ae, toi test thoi
    id: string;
    name: string;
    rarity: number;
    class: number;
}
