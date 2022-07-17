
export const useMoneyFormat = (val:number) => {
    if(val !== 0){
        return val.toString().replace(/(^0+)/, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return 0;
}
