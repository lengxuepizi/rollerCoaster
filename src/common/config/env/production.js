'use strict';

export default {
    db:{
        type: 'mysql',
        adapter: {
            mysql: {
                host: '127.0.0.1',
                port: '3306',
                database: 'HUANLEYE',
                user: 'root',
                password: '654321',
                prefix: '',
                encoding: 'utf8'
            },
            mongo: {

            }
        }
    },
    avatarBasePath: '/opt/rollerCoaster/www/static/img',

};