export class DateUtil{
    static getStartingDate(): Date {
        let date  = new Date();
        date = new Date(date.getTime() + (1000 * 60 * 60 * 24));
        date.setDate(date.getDate() + 1); // data de entrega padrão: 2 dias
        return date;
    }
}