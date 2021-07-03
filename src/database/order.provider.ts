import { Connection } from "mongoose";
import { OrderSchema } from "src/orders/model/order.model";

export const orderProvider = [
    {
        provide: 'ORDER',
        useFactory: (connection: Connection) => connection.model('Order', OrderSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]