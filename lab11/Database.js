import e from 'express';
import MongoClient from 'mongodb';

const url = "mongodb+srv://NoahJervey:5nS3U3glPTmGlNK9@cluster0.yuzwq.mongodb.net";

class Database {
    constructor() {
        this.connection = null;
        this.collection = null;
        this.database = null;
    }

    async connect() {
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        this.database = this.connection.db("lab11");
        this.collection = this.database.collection("books");
    }

    close() {
        if (this.collection != null) {
            this.collection.close();
        }
    }

    async createOne(isbn, t, a, d) {
        if (this.collection != null) {
            return await this.collection.insertOne({
                ISBN: isbn,
                title: t,
                author: a,
                description: d
            });
        }
    }

    async readOne(isbn) {
        if (this.collection != null) {
            let result = await this.collection.findOne({ ISBN: isbn });
            if (result != null) {
                return result;
            }
            else {
                return { book: "not found" };
            }
        }
    }

    async readMany(t, a) {
        if (this.collection != null) {
            let result = [];

            if (t != null && a != null) {
                result = await this.collection.find({ 
                    $or: [ { "title": t }, { "author": a } ]
                }).toArray();
            }
            else if (a == null && t != null) {
                result = await this.collection.find({ 
                    "title": t
                }).toArray();
            }
            else if (t == null && a != null) {
                result = await this.collection.find({ 
                    "author": a
                }).toArray();
            }

            if (result.length > 0) {
                return { books: result };
            }
            else {
                return { books: "not found" };
            }
        }
    }

    async updateOne(isbn, fields) {
        if (this.collection != null) {
            let t = fields.title;
            let a = fields.author;
            let d = fields.description;
            let updates = {};
            if (t != null) {
                updates.title = t;
            }
            if (a != null) {
                updates.author = a;
            }
            if (d != null) {
                updates.description = d;
            }

            let result = await this.collection.updateOne(
                { ISBN: isbn }, 
                { $set: updates }
            );
            if (result != null) {
                return updates;
            }
            else {
                return { book: "not found" };
            }
        }
    }

    async deleteOne(isbn) {
        if (this.collection != null) {
            let result = await this.collection.deleteOne({ ISBN: isbn });
            if (result != null ) {
                let c = result.deletedCount;
                return { books: c };
            }
            else {
                return { books: 0 };
            }
        }
    }
}

export default Database;