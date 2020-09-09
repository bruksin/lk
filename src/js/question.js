//add by bruks
export class Question {
    static create(question) {
        
        return fetch('https://lk.etc-ohrana.ru:8443/gate-cloud/api.php?get_user=1', {
            method: 'POST',
            body: JSON.stringify(question),
            mode: 'cors',
           headers: {
               'Content-Type': 'application/json'
           }
        })
        .then(response => response.json())
        .then(response => {
            return response;
        })
    }

    static objectlog(question, code) {
        
        return fetch('https://lk.etc-ohrana.ru:8443/gate-cloud/api.php?get_log_device=1&code=' + code, {
            method: 'POST',
            body: JSON.stringify(question),
            mode: 'cors',
           headers: {
               'Content-Type': 'application/json'
           }
        })
        .then(response => response.json())
        .then(response => {
            return response;
        })
    }

    static auth(question) {
        
        return fetch('https://lk.etc-ohrana.ru:8443/gate-cloud/api.php?auth=1', {
            method: 'POST',
            body: JSON.stringify(question),
            mode: 'cors',
           headers: {
               'Content-Type': 'application/json'
           }
        })
        .then(response => response.json())
        .then(response => {
            return response;
        })
    }
}