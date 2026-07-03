import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
    output: 'export',
    images: {
        unoptimized: true,
    },
    webpack: (config) => {
        config.cache = false
        return config
    },
})
