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
        this.database = this.connection.db("portfolio2");
        this.collection = this.database.collection("NoahJervey");
    }

    close() {
        if (this.collection != null) {
            this.collection.close();
        }
    }

    //a field could be a team number that it uses for searching and displaying teams (while storing multiple ones) OOO

    async createOne(id, name, img, team) {
        if (this.collection != null) {
            return await this.collection.insertOne({
                pokeID: id,
                name: name,
                img: img,
                team: team
            });
        }
    }

    async readOne(id) {
        if (this.collection != null) {
            let result = await this.collection.findOne({ pokeID: id });
            if (result != null) {
                return result;
            }
            else {
                return { pokemon: "not found" };
            }
        }
    }

    async readMany(team) {
        if (this.collection != null) {
            let result = [];

            if (team != null) {
                result = await this.collection.find({ 
                    team: parseInt(team)
                }).toArray();
            }

            if (result.length > 0) {
                return { pokemon: result };
            }
            else {
                return { pokemon: "not found" };
            }
        }
    }

    async updateOne(id, team, name) {
        if (this.collection != null) {
            let updates = {};
            updates.name = name;

            let result = await this.collection.updateOne(
                { pokeID: id, team: team }, 
                { $set: updates }
            );
            if (result != null) {
                return { pokemon: result.modifiedCount };
            }
            else {
                return { pokemon: "not updated" };
            }
        }
    }

    async deleteOne(id, team) {
        if (this.collection != null) {
            let result = await this.collection.deleteOne({ pokeID: id, team: parseInt(team) });
            if (result != null ) {
                return { pokemon: result.deletedCount };
            }
            else {
                return { pokemon: 0 };
            }
        }
    }
}

export default Database;