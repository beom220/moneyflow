export const useMoneyFormat = (val:number) => {
    /*
    * 금액 단위표시
    * 금액이 0 일경우 변환없이 리턴
    * */
    if(val !== 0){
        return val.toString().replace(/(^0+)/, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return val;

}
