

class Github{

    constructor(){

        this.client_id = "Ov23liU8haTZHpCy6yk3"
        this.client_secret = "7feb2306a519b6d17805950e3733742b485dcec0 "

    }


    async getUser(user){



        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);         
            const profile = await profileResponse.json();

            return profile;

    }

}