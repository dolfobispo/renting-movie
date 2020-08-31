import { PaymentMethod } from '../payment/payment-method.enums';
import { Rent } from './rent';

export class Payment {
    id: number;
    moment: string;
    paymentMethod: PaymentMethod;
    rent: Rent;

}