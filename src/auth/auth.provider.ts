import { Connection } from "mongoose";
import { AccountSchema } from "./schemas/account.schema";

export const AuthProvider = [
    {
        provide: "Account_MODEL",
        useFactory: (connection: Connection) => connection.model('Account', AccountSchema),
        inject: ['DATABASE_CONNECTION']
    }
]