
export const useMoneyFormat = (val:number) => {
    return val.toString().replace(/(^0+)/, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
