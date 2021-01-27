module.exports = {
    apps : [
        //
        {
            name: 'server',
            script: './app.js',
            autorestart: true,
            watch: true,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'development',
                TEST: 'ICI'
            },
            env_preprod: {
                NODE_ENV: 'production',
                TEST: 'LABAS'
            },
        }
    //
    ]
};