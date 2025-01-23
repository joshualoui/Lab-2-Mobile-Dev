export function vacation_location(location:string):string{
    return `You are going to: ${location}`;
}

export const vacation_price = (price:number, location: string):string => {
    if (location === "Paris") {
        return `The price of the vacation is: $${price + 100}`;
    }
    return `The price of the vacation is: $${price}`;
};