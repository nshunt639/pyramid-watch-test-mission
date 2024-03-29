// For building on vercel: https://github.com/Automattic/node-canvas/issues/1779
if (
    process.env.LD_LIBRARY_PATH == null ||
    !process.env.LD_LIBRARY_PATH.includes(
        `${process.env.PWD}/node_modules/canvas/build/Release:`
    )
) {
    process.env.LD_LIBRARY_PATH = `${process.env.PWD
        }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`
}

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false,
    env: {
        BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
        API_ENDPOINT: process.env.API_ENDPOINT || '',
    },
    webpack: (config) => {
        config.resolve = {
            ...config.resolve,
            fallback: {
                fs: false,
                path: false,
                os: false,
            },
        }
        return config
    },
    images: {
        domains: ['pbs.twimg.com', 'abs.twimg.com'],
    },
}
