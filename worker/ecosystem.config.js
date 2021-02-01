module.exports = {
    apps : [
        //
        {
            name: 'worker',
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start',
            autorestart: true,
            watch: true,
            max_memory_restart: '1G'
        },
    //
    ]
};