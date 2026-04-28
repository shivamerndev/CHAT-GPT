import { Schema, model } from 'mongoose';

const ConversationSchema = new Schema({

    title:{
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

}, { timestamps: true });

export default model('Conversation', ConversationSchema);