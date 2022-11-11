export interface CartProduct {
  item:{
    id?: number,
    imgSrc: string,
    category: string,
    name: string,
    description?: string,
    price: number
  },
  quantity?:number,
  status?:string,
  date?:string
}
