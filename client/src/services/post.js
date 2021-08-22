import api from "./api"

export const getAll = () => {
    return fetch(api.posts_URL).then(r=> r.json())
}

