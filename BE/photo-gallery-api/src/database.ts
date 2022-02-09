import { connect } from 'mongoose'

export async function startConnection() {
    const db = await connect('mongodb+srv://faceless:zsNBOZfI9v7Enm6s@cluster0.erp3c.mongodb.net/SEOappwallpapers?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useFindAndModify: false 
    });
    console.log('Database is connected');
}
