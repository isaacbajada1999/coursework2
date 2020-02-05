const url = 'api/posts/';

class PostService {
    //Get Posts
    static async getPosts() {
        const response = await fetch(url);
        const data = await response.json();

        return data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
        }));
    }


    //Create Posts
    static insertPost( topic, price, location, provider) {
        return fetch(url, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                topic,
                price,
                location,
                provider

            }

            )
        });
    }


//update Posts
    static updatePost(id) {
        return fetch(`${url}${id}`, {
            method: "PUT",
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({

                }
            )
        });
    }
    //Delete Posts
    static deletePost(id) {
        return fetch(`${url}${id}`, {
            method: "DELETE"
        });
    }
}


export default PostService;
