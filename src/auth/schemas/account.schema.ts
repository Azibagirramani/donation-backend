import * as mongoose from "mongoose"
import { ApiProperty } from '@nestjs/swagger'


export const AccountSchema = new mongoose.Schema({
    password: String,
    email: String,
    lastSeen: Date,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    deleted: Boolean,
    active: Boolean,
    roles: [String],
    profile: String
})