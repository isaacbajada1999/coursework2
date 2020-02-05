

const url = 'http://localhost:5000/api/users/';

class userService {
    //Get Posts
    static async getUsers() {
        const response = await fetch(url);
        const data = await response.json();

        return data.map(user => ({
            ...user,
            createdAt: new Date(user.createdAt)
        }));
    }


    //Create Posts
    static createUser(name, email, password, user_type) {
        return fetch(url, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                    name,
                    email,
                    password,
                    user_type

                }
            )
        });
    }

}

export default userService;
