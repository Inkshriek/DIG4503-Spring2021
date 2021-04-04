import MongoClient from 'mongodb';

const url = "mongodb+srv://noah:something@cluster0.8wkw0.mongodb.net";

class Database {
    constructor() {
        this.connection = null;
        this.collection = null;
        this.database = null;
    }

    async connect() {
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        this.database = this.connection.db("lab10");
        this.collection = this.database.collection("people");
    }

    close() {
        if (this.collection != null) {
            this.collection.close();
        }
    }

    async createOne(first, last, color) {
        if (this.collection != null) {
            return await this.collection.insertOne({
                firstName: first,
                lastName: last,
                favoriteColor: color
            });
        }
    }

    async readOne(person) {
        if (this.collection != null) {
            let result = await this.collection.findOne({ firstName: person });
            if (result == null) {
                return { person: "not found" };
            }
            else {
                return result;
            }
        }
    }
}

export default Database;