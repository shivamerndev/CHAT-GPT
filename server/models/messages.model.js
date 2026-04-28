import { Schema, model } from 'mongoose';

const MessageSchema = new Schema({

    conversation: {
        type: Schema.Types.ObjectId,
        ref: 'Conversation',
        required: true
    },
    sender: {
        type: String,
        enum: ['user', 'ai'],
        required: true
    },
    content: {
        type: String,
        required: true
    }
    
}, { timestamps: true });

export default model('Message', MessageSchema);