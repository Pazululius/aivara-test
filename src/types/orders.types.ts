export interface OrderType {
    id: number;
    customer: string;
    total: number;
    status: string;
    items: Array<string>
}